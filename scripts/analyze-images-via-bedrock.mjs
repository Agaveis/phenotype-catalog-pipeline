#!/usr/bin/env node
// Phase B (v2): per-image phenotype analysis via Bedrock Claude Sonnet 4.6.
//
// Replaces analyze-images-via-claude.mjs (claude -p subprocess pattern, ~68
// sec/image, ~5 day ETA on 6K images). Bedrock InvokeModel runs in parallel
// across N workers — typical pace ~3-5 sec/image, ~1-2 hours total at
// concurrency=8.
//
// Costs ~$0.005 per image with Sonnet 4.6 (input: image at ~$0.0024 + ~500
// output tokens at $15/M = $0.0075). 6K images ≈ $30-45.
//
// Required env:
//   DATABASE_URL              SQL Server Prisma URL
//   AWS_REGION                e.g. us-east-1
//   AWS credentials via       env vars / ~/.aws/credentials / IAM role
//
// Flags:
//   --limit N                 Only process N rows (default: all eligible)
//   --concurrency N           Parallel workers (default: 8)
//   --model ID                Bedrock model ID (default: anthropic.claude-sonnet-4-6)
//   --max-budget-usd N        Stop after spending this much (rough estimate)

import { BedrockRuntimeClient, InvokeModelCommand } from '@aws-sdk/client-bedrock-runtime';
import { fromIni } from '@aws-sdk/credential-provider-ini';
import { PrismaClient } from '@prisma/client';

const args = process.argv.slice(2);
const flag = (n) => args.includes(n);
const flagVal = (n) => {
  const i = args.indexOf(n);
  return i >= 0 && i + 1 < args.length ? args[i + 1] : undefined;
};
const LIMIT = parseInt(flagVal('--limit') || '0') || 0;
const CONCURRENCY = parseInt(flagVal('--concurrency') || '6');
const MODEL_ID = flagVal('--model') || 'us.anthropic.claude-sonnet-4-6';
const MAX_BUDGET = parseFloat(flagVal('--max-budget-usd') || '50');
// Wikipedia (upload.wikimedia.org) rate-limits aggressively from a single IP.
// 250ms still hit 429s; 500ms (= 2/sec) is conservative.
const DOWNLOAD_DELAY_MS = parseInt(flagVal('--download-delay-ms') || '500');

const REGION = process.env.AWS_REGION || 'us-east-1';
const ROUGH_COST_PER_IMAGE = 0.008; // $0.0024 image + ~500 tokens output

// ──────────────────────────────────────────────────────────────────────
// Prompt — same structure as the claude-p worker, expecting JSON output
// ──────────────────────────────────────────────────────────────────────

const ANALYSIS_PROMPT = `Analyze this portrait photograph for a phenotype reference catalog. Be honest about what you can and can't see — if features are obscured (sunglasses, full beard, low resolution, B&W image, painting/engraving, partial face), say so via the obscurations and image_quality fields rather than guessing.

Return ONLY this JSON object (no preamble, no code fences, no explanation):

{"skin_tone":"<Fitzpatrick I|II|III|IV|V|VI or 'unclear'>","skin_undertone":"<warm|cool|neutral|olive|other>","hair_color":"<descriptive>","hair_texture":"<straight|wavy|curly|coily|bald|shaved|covered>","hair_pattern":"<short notes — graying pattern, density, etc.>","eye_color":"<descriptive>","eye_shape":"<almond|round|hooded|monolid|deep-set|other — include epicanthic fold y/n>","facial_features":"<2-3 sentences — nose bridge/width, lip fullness, jaw shape, cheekbone prominence, brow ridge>","build":"<visible build only — frame width, posture, body composition if visible>","visible_extent":"<head_only|head_shoulders|upper_body|full_body>","image_quality":"<high|medium|low|very_low>","obscurations":"<list any: glasses, hat, mask, beard, makeup, low_res, b&w, painting, partial_face, none>","confidence":<0.0-1.0>}`;

// ──────────────────────────────────────────────────────────────────────
// Helpers
// ──────────────────────────────────────────────────────────────────────

// Global serialized download gate — ensures DOWNLOAD_DELAY_MS between any two
// downloads regardless of which worker fires them.
let lastDownloadAt = 0;
async function downloadGate() {
  const now = Date.now();
  const wait = lastDownloadAt + DOWNLOAD_DELAY_MS - now;
  if (wait > 0) await new Promise((r) => setTimeout(r, wait));
  lastDownloadAt = Date.now();
}

async function fetchImageBase64(url) {
  await downloadGate();
  const res = await fetch(url, {
    headers: { 'User-Agent': 'EthnicEroticBot/1.0 (admin@agaveis.com) image-analysis' },
  });
  if (!res.ok) throw new Error(`download ${res.status}`);
  const ct = res.headers.get('content-type') || '';
  if (!ct.startsWith('image/')) throw new Error(`not an image: ${ct}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length > 5 * 1024 * 1024) {
    // Bedrock has a 5MB limit per image. We don't resize here — flag instead.
    throw new Error(`image too large: ${buf.length} bytes`);
  }
  // Normalize content-type
  let mediaType = ct.split(';')[0].trim().toLowerCase();
  if (mediaType === 'image/jpg') mediaType = 'image/jpeg';
  if (!['image/jpeg', 'image/png', 'image/gif', 'image/webp'].includes(mediaType)) {
    // Bedrock supports a fixed set; default to jpeg
    mediaType = 'image/jpeg';
  }
  return { base64: buf.toString('base64'), mediaType };
}

function parseAnalysisJson(text) {
  const trimmed = text.trim();
  const cleaned = trimmed.replace(/^```(?:json)?\s*\n?/i, '').replace(/\n?```\s*$/, '').trim();
  try {
    return JSON.parse(cleaned);
  } catch {
    const start = cleaned.indexOf('{');
    const end = cleaned.lastIndexOf('}');
    if (start === -1 || end === -1 || end <= start) throw new Error('no JSON object in output');
    return JSON.parse(cleaned.substring(start, end + 1));
  }
}

async function invokeBedrock(client, base64, mediaType) {
  const body = {
    anthropic_version: 'bedrock-2023-05-31',
    max_tokens: 1024,
    messages: [
      {
        role: 'user',
        content: [
          { type: 'image', source: { type: 'base64', media_type: mediaType, data: base64 } },
          { type: 'text', text: ANALYSIS_PROMPT },
        ],
      },
    ],
  };
  const cmd = new InvokeModelCommand({
    modelId: MODEL_ID,
    contentType: 'application/json',
    accept: 'application/json',
    body: JSON.stringify(body),
  });
  const res = await client.send(cmd);
  const decoded = JSON.parse(new TextDecoder().decode(res.body));
  // decoded.content is an array of {type:'text', text:'...'}
  const text = decoded.content?.[0]?.text || '';
  if (!text) throw new Error('empty model response');
  return text;
}

async function saveAnalysis(prisma, exampleId, parsed, rawText) {
  // Defensive client-side truncation in case the widened columns still aren't enough.
  // (We widened to 200-1000 chars; Claude usually returns much shorter. Truncate to be safe.)
  const trunc = (s, n) => (typeof s === 'string' && s.length > n) ? s.substring(0, n - 1) + '…' : s;

  await prisma.$executeRawUnsafe(
    `INSERT INTO ethnic_image_analysis (
       example_id, skin_tone, skin_undertone, hair_color, hair_texture, hair_pattern,
       eye_color, eye_shape, facial_features, build, visible_extent, image_quality,
       obscurations, confidence, raw_json, analysis_model
     ) VALUES (@P1, @P2, @P3, @P4, @P5, @P6, @P7, @P8, @P9, @P10, @P11, @P12, @P13, @P14, @P15, @P16)`,
    exampleId,
    trunc(parsed.skin_tone, 200),
    trunc(parsed.skin_undertone, 300),
    trunc(parsed.hair_color, 300),
    trunc(parsed.hair_texture, 200),
    trunc(parsed.hair_pattern, 500),
    trunc(parsed.eye_color, 200),
    trunc(parsed.eye_shape, 500),
    parsed.facial_features || null,
    trunc(parsed.build, 500),
    trunc(parsed.visible_extent, 100),
    trunc(parsed.image_quality, 100),
    trunc(parsed.obscurations, 1000),
    typeof parsed.confidence === 'number' ? parsed.confidence : null,
    rawText,
    MODEL_ID,
  );
}

async function isAlreadyAnalyzed(prisma, exampleId) {
  const rows = await prisma.$queryRawUnsafe(
    'SELECT TOP 1 id FROM ethnic_image_analysis WHERE example_id = @P1',
    exampleId,
  );
  return rows.length > 0;
}

// ──────────────────────────────────────────────────────────────────────
// Worker pool — N concurrent processors pulling from a shared queue
// ──────────────────────────────────────────────────────────────────────

async function worker(client, prisma, queue, stats) {
  while (queue.length > 0) {
    const row = queue.shift();
    if (!row) break;

    if (stats.budgetExceeded) break;

    if (await isAlreadyAnalyzed(prisma, row.id)) {
      stats.skipped++;
      continue;
    }

    let base64, mediaType;
    try {
      ({ base64, mediaType } = await fetchImageBase64(row.image_url));
    } catch (e) {
      stats.failed++;
      stats.failures[`download:${e.message.substring(0, 50)}`] = (stats.failures[`download:${e.message.substring(0, 50)}`] || 0) + 1;
      continue;
    }

    let rawText, parsed;
    try {
      rawText = await invokeBedrock(client, base64, mediaType);
      parsed = parseAnalysisJson(rawText);
    } catch (e) {
      stats.failed++;
      stats.failures[`analyze:${e.message.substring(0, 60)}`] = (stats.failures[`analyze:${e.message.substring(0, 60)}`] || 0) + 1;
      continue;
    }

    try {
      await saveAnalysis(prisma, row.id, parsed, rawText);
      stats.succeeded++;
      stats.estCost += ROUGH_COST_PER_IMAGE;
      if (stats.estCost >= MAX_BUDGET) {
        stats.budgetExceeded = true;
        console.log(`\n⚠ Budget cap of $${MAX_BUDGET} reached after ${stats.succeeded} analyses. Stopping.`);
      }
      if (stats.succeeded % 20 === 0) {
        const elapsed = (Date.now() - stats.startedAt) / 1000;
        const pace = stats.succeeded / elapsed;
        console.log(`[${stats.succeeded}/${stats.total}] ✓ ${row.name.padEnd(35)} ${parsed.skin_tone || '?'}/${parsed.hair_color?.substring(0, 20) || '?'} (q=${parsed.image_quality || '?'} c=${parsed.confidence}) — ${pace.toFixed(2)}/s, ~$${stats.estCost.toFixed(2)}`);
      }
    } catch (e) {
      stats.failed++;
      stats.failures[`db:${e.message.substring(0, 60)}`] = (stats.failures[`db:${e.message.substring(0, 60)}`] || 0) + 1;
    }
  }
}

async function main() {
  if (!process.env.DATABASE_URL) {
    console.error('Missing env: DATABASE_URL');
    process.exit(1);
  }

  const prisma = new PrismaClient();
  // Pin to ~/.aws/credentials — the default credential chain was picking up
  // stale creds from somewhere on this machine (resulted in "security token
  // included in the request is invalid" errors).
  const client = new BedrockRuntimeClient({ region: REGION, credentials: fromIni() });

  try {
    // Pull all eligible rows up-front into a queue
    const eligible = await prisma.ethnic_examples.findMany({
      where: { image_url: { not: null } },
      orderBy: { id: 'asc' },
      take: LIMIT > 0 ? LIMIT : undefined,
      select: { id: true, name: true, image_url: true },
    });

    console.log(`\n${eligible.length} candidate rows`);
    console.log(`Model: ${MODEL_ID}`);
    console.log(`Concurrency: ${CONCURRENCY}`);
    console.log(`Region: ${REGION}`);
    console.log(`Budget cap: $${MAX_BUDGET}`);
    console.log(`Estimated cost at ~$${ROUGH_COST_PER_IMAGE}/image: $${(eligible.length * ROUGH_COST_PER_IMAGE).toFixed(2)}\n`);

    const stats = {
      total: eligible.length,
      succeeded: 0,
      skipped: 0,
      failed: 0,
      estCost: 0,
      budgetExceeded: false,
      startedAt: Date.now(),
      failures: {},
    };

    const workers = Array.from({ length: CONCURRENCY }, () => worker(client, prisma, eligible, stats));
    await Promise.all(workers);

    const elapsed = (Date.now() - stats.startedAt) / 1000;
    console.log(`\n${'═'.repeat(70)}`);
    console.log('Done.');
    console.log(`  Succeeded: ${stats.succeeded}`);
    console.log(`  Skipped (already analyzed): ${stats.skipped}`);
    console.log(`  Failed: ${stats.failed}`);
    console.log(`  Wall time: ${(elapsed / 60).toFixed(1)} min`);
    console.log(`  Pace: ${(stats.succeeded / elapsed).toFixed(2)} img/s`);
    console.log(`  Estimated cost: $${stats.estCost.toFixed(2)}`);
    if (Object.keys(stats.failures).length) {
      console.log('\nFailure breakdown:');
      for (const [reason, count] of Object.entries(stats.failures).sort((a, b) => b[1] - a[1]).slice(0, 15)) {
        console.log(`  ${count.toString().padStart(5)} × ${reason}`);
      }
    }
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error('Fatal:', e.message);
  if (e.$metadata) console.error('AWS metadata:', JSON.stringify(e.$metadata));
  process.exit(1);
});
