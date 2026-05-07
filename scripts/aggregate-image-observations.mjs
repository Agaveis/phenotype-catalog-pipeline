#!/usr/bin/env node
// Phase C: deterministic aggregator that produces ethniclist.ImageObservedDistribution
// from the per-image rows in ethnic_image_analysis.
//
// Pure SQL/JS — no LLM calls. Idempotent + re-runnable. The output is a
// human-readable HTML summary with explicit sample size, source breakdown,
// quality split, and statistical caveats. Each row's underlying analyses
// remain queryable in ethnic_image_analysis so users can audit the inputs.
//
// Designed to handle future source types — when user-submitted images arrive
// (source_type='user_submitted'), they're automatically picked up and the
// source breakdown reflects them.
//
// Required env:
//   DATABASE_URL              SQL Server Prisma URL
//
// Flags:
//   --limit N                 Only process N ethnicities (default: all)
//   --start "Name"            Resume from this ethnicity (alphabetical)
//   --min-samples N           Minimum analyses required (default: 3)
//   --only-id N               Process this single ethnic ID (debugging)
//   --dry-run                 Compute but don't write to DB

import { PrismaClient } from '@prisma/client';

const args = process.argv.slice(2);
const flag = (n) => args.includes(n);
const flagVal = (n) => {
  const i = args.indexOf(n);
  return i >= 0 && i + 1 < args.length ? args[i + 1] : undefined;
};
const LIMIT = parseInt(flagVal('--limit') || '0') || 0;
const START_FROM = flagVal('--start');
const MIN_SAMPLES = parseInt(flagVal('--min-samples') || '3');
const ONLY_ID = flagVal('--only-id') ? parseInt(flagVal('--only-id')) : null;
const DRY_RUN = flag('--dry-run');

// ──────────────────────────────────────────────────────────────────────
// Categorization helpers — turn free-text Claude output into bins
// ──────────────────────────────────────────────────────────────────────

function bucketSkinTone(s) {
  if (!s) return 'unclear';
  const v = s.toUpperCase().trim();
  // Match "Fitzpatrick III", "III", "III-IV", "II/III", etc.
  const m = v.match(/\b(I{1,3}V?|VI?|IV)\b/g);
  if (!m || m.length === 0) {
    if (v.includes('UNCLEAR') || v === '?') return 'unclear';
    return 'unclear';
  }
  // If a range (II-III), pick the higher
  const parsed = m.map((x) => {
    if (x === 'I') return 1;
    if (x === 'II') return 2;
    if (x === 'III') return 3;
    if (x === 'IV') return 4;
    if (x === 'V') return 5;
    if (x === 'VI') return 6;
    return null;
  }).filter((x) => x);
  if (parsed.length === 0) return 'unclear';
  // Use the modal value (or first if tied)
  return ['', 'I', 'II', 'III', 'IV', 'V', 'VI'][Math.max(...parsed)] || 'unclear';
}

function bucketHairTexture(s) {
  if (!s) return 'unclear';
  const v = s.toLowerCase();
  if (v.includes('coily') || v.includes('kinky') || v.includes('type 4')) return 'coily';
  if (v.includes('curly') || v.includes('type 3')) return 'curly';
  if (v.includes('wavy') || v.includes('type 2')) return 'wavy';
  if (v.includes('straight') || v.includes('type 1')) return 'straight';
  if (v.includes('bald')) return 'bald';
  if (v.includes('shaved')) return 'shaved';
  if (v.includes('covered') || v.includes('hijab') || v.includes('turban') || v.includes('hat')) return 'covered';
  return 'unclear';
}

function bucketHairColor(s) {
  if (!s) return 'unclear';
  const v = s.toLowerCase();
  if (v.match(/\bgray|grey|silver|salt[- ]?and[- ]?pepper|white\b/)) return 'gray/white';
  if (v.match(/\bblack|near[- ]?black|jet[- ]?black\b/)) return 'black';
  if (v.match(/\bdark brown|near black|very dark\b/)) return 'dark brown';
  if (v.match(/\bbrown\b/) && !v.match(/\blight|medium|sun\b/)) return 'brown';
  if (v.match(/\blight brown|medium brown|chestnut\b/)) return 'light/medium brown';
  if (v.match(/\bblonde|blond|golden|wheat\b/)) return 'blonde';
  if (v.match(/\bred|auburn|ginger|copper\b/)) return 'red/auburn';
  if (v.includes('unclear') || v.includes('covered')) return 'unclear';
  return 'other';
}

function bucketEyeColor(s) {
  if (!s) return 'unclear';
  const v = s.toLowerCase();
  if (v.match(/\bdark brown|near[- ]?black|black\b/)) return 'dark brown';
  if (v.match(/\bbrown\b/) && !v.match(/\blight|hazel\b/)) return 'brown';
  if (v.match(/\bhazel\b/)) return 'hazel';
  if (v.match(/\blight brown|amber\b/)) return 'light brown / amber';
  if (v.match(/\bblue\b/)) return 'blue';
  if (v.match(/\bgreen\b/)) return 'green';
  if (v.match(/\bgr[ae]y\b/)) return 'gray';
  if (v.includes('unclear') || v.includes('obscured')) return 'unclear';
  return 'other';
}

function epicanthicFold(s) {
  if (!s) return 'unclear';
  const v = s.toLowerCase();
  // Explicit unclear markers (handles "y/n: unclear" patterns)
  if (/y\/n[^a-z]{0,8}unclear/.test(v)) return 'unclear';
  if (/epicanthic fold[^a-z]{0,8}(unclear|cannot|hard to)/.test(v)) return 'unclear';
  // Partial (check before yes/no so it's not preempted)
  if (/\bpartial\b[^.]{0,30}(fold|epicanthic|monolid)/.test(v)) return 'partial';
  if (/(epicanthic fold|monolid)[^.]{0,30}\bpartial\b/.test(v)) return 'partial';
  // NO — either order, several phrasings
  if (/\bno\s+(visible\s+)?(epicanthic fold|epicanthic|monolid)/.test(v)) return 'no';
  if (/\b(absent|without|lacks?|missing|lack of)\b[^.]{0,15}epicanthic fold/.test(v)) return 'no';
  if (/epicanthic fold[^a-z]{0,8}(no\b|n\b|absent|none)/.test(v)) return 'no';
  if (/\bdouble[- ]?lid\b/.test(v)) return 'no';
  // YES — require a clear affirmation word after the term, not bare "y" since "y/n" is common
  if (/epicanthic fold[^a-z]{0,8}(yes|present|visible|noted|y\b(?!\/))/.test(v)) return 'yes';
  if (/\bmonolid\b/.test(v)) return 'yes';
  if (/\b(with|having|showing)\b[^.]{0,15}epicanthic fold/.test(v)) return 'yes';
  return 'unclear';
}

// ──────────────────────────────────────────────────────────────────────
// Distribution rendering
// ──────────────────────────────────────────────────────────────────────

function pct(n, total) {
  if (total === 0) return '0%';
  return Math.round((n / total) * 100) + '%';
}

function renderDistribution(label, counts, total, ordering = null) {
  let entries = Object.entries(counts).filter(([k]) => k !== 'unclear');
  if (ordering) {
    entries.sort(([a], [b]) => {
      const ai = ordering.indexOf(a);
      const bi = ordering.indexOf(b);
      if (ai === -1 && bi === -1) return counts[b] - counts[a];
      if (ai === -1) return 1;
      if (bi === -1) return -1;
      return ai - bi;
    });
  } else {
    entries.sort(([, a], [, b]) => b - a);
  }
  // Drop entries that are 0
  entries = entries.filter(([, n]) => n > 0);
  const unclear = counts.unclear || 0;
  const parts = entries.map(([k, n]) => `${k} (${pct(n, total)})`);
  if (unclear > 0) parts.push(`unclear (${pct(unclear, total)})`);
  return parts.join(', ');
}

// ──────────────────────────────────────────────────────────────────────
// Per-ethnicity aggregation
// ──────────────────────────────────────────────────────────────────────

function aggregate(rows) {
  // rows: array of { skin_tone, hair_color, hair_texture, eye_color, eye_shape,
  //                  image_quality, confidence, source_type, is_adult, ... }
  const total = rows.length;
  const skin = { I: 0, II: 0, III: 0, IV: 0, V: 0, VI: 0, unclear: 0 };
  const hairTex = { straight: 0, wavy: 0, curly: 0, coily: 0, bald: 0, shaved: 0, covered: 0, unclear: 0 };
  const hairCol = {};
  const eyeCol = {};
  const fold = { yes: 0, no: 0, partial: 0, unclear: 0 };
  const quality = { high: 0, medium: 0, low: 0, very_low: 0, null: 0 };
  const sourceTypes = {};
  let confSum = 0;
  let confN = 0;

  for (const r of rows) {
    const sk = bucketSkinTone(r.skin_tone);
    skin[sk] = (skin[sk] || 0) + 1;
    const ht = bucketHairTexture(r.hair_texture);
    hairTex[ht] = (hairTex[ht] || 0) + 1;
    const hc = bucketHairColor(r.hair_color);
    hairCol[hc] = (hairCol[hc] || 0) + 1;
    const ec = bucketEyeColor(r.eye_color);
    eyeCol[ec] = (eyeCol[ec] || 0) + 1;
    const f = epicanthicFold(r.eye_shape);
    fold[f] = (fold[f] || 0) + 1;
    const q = (r.image_quality || 'null').toLowerCase().split(' ')[0];
    quality[q] = (quality[q] || 0) + 1;
    sourceTypes[r.source_type || 'unknown'] = (sourceTypes[r.source_type || 'unknown'] || 0) + 1;
    if (typeof r.confidence === 'number') {
      confSum += r.confidence;
      confN++;
    }
  }

  return {
    total,
    skin,
    hairTex,
    hairCol,
    eyeCol,
    fold,
    quality,
    sourceTypes,
    avgConfidence: confN > 0 ? confSum / confN : null,
  };
}

function renderHtml(stats, ethnicityName) {
  const { total, skin, hairTex, hairCol, eyeCol, fold, quality, sourceTypes, avgConfidence } = stats;
  const sources = Object.entries(sourceTypes).map(([k, n]) => `${n} ${k}`).join(', ');
  const qualityLine = `${quality.high || 0} high, ${quality.medium || 0} medium, ${quality.low || 0} low, ${quality.very_low || 0} very_low`;
  const skinLine = renderDistribution('Skin tone (Fitzpatrick)', skin, total, ['I', 'II', 'III', 'IV', 'V', 'VI']);
  const hairTexLine = renderDistribution('Hair texture', hairTex, total, ['straight', 'wavy', 'curly', 'coily', 'bald', 'shaved', 'covered']);
  const hairColLine = renderDistribution('Hair color', hairCol, total);
  const eyeColLine = renderDistribution('Eye color', eyeCol, total);
  const foldLine = `${pct(fold.yes, total)} present, ${pct(fold.no, total)} absent${fold.partial ? `, ${pct(fold.partial, total)} partial` : ''}, ${pct(fold.unclear, total)} unclear`;

  // Caveats
  const caveats = [];
  if (total < 10) caveats.push(`Sample size ${total} is small — observed distribution should be treated as suggestive, not definitive.`);
  else if (total < 25) caveats.push(`Sample size ${total} is modest — secondary patterns may not be reliable.`);
  if ((quality.high || 0) / total < 0.30) caveats.push('Quality skews toward older or low-resolution photos; phenotype detail may be lossy.');
  if (avgConfidence !== null && avgConfidence < 0.55) caveats.push('Low average analyzer confidence — many photos partially obscured or historical.');
  if (sources && Object.keys(sourceTypes).length === 1 && sourceTypes.wikipedia) {
    caveats.push('Sample is 100% Wikipedia notable people — skews toward male, public-life, and modern figures, not population-representative.');
  }

  const caveatsHtml = caveats.length > 0
    ? `<p><em>Caveats:</em> ${caveats.join(' ')}</p>`
    : '';

  return `<p><strong>Sample:</strong> ${total} images analyzed (${sources}). Quality: ${qualityLine}. Avg analyzer confidence: ${avgConfidence !== null ? avgConfidence.toFixed(2) : 'n/a'}.</p>
<p><strong>Skin tone (Fitzpatrick):</strong> ${skinLine}</p>
<p><strong>Hair color:</strong> ${hairColLine}</p>
<p><strong>Hair texture:</strong> ${hairTexLine}</p>
<p><strong>Eye color:</strong> ${eyeColLine}</p>
<p><strong>Epicanthic fold:</strong> ${foldLine}</p>
${caveatsHtml}`;
}

// ──────────────────────────────────────────────────────────────────────
// Main
// ──────────────────────────────────────────────────────────────────────

async function main() {
  if (!process.env.DATABASE_URL) {
    console.error('Missing env: DATABASE_URL');
    process.exit(1);
  }

  const prisma = new PrismaClient();
  let processed = 0;
  let written = 0;
  let skippedSparse = 0;

  try {
    const where = { Ethnicity: { not: null } };
    if (START_FROM) where.Ethnicity = { ...where.Ethnicity, gte: START_FROM };
    if (ONLY_ID) where.ID = ONLY_ID;

    const ethnicities = await prisma.ethniclist.findMany({
      where,
      orderBy: { Ethnicity: 'asc' },
      take: LIMIT > 0 ? LIMIT : undefined,
      select: { ID: true, Ethnicity: true },
    });

    console.log(`\n${ethnicities.length} ethnicities to aggregate${DRY_RUN ? ' (dry run)' : ''}\n`);

    for (let i = 0; i < ethnicities.length; i++) {
      const e = ethnicities[i];
      const rows = await prisma.$queryRawUnsafe(
        `SELECT a.skin_tone, a.skin_undertone, a.hair_color, a.hair_texture, a.hair_pattern,
                a.eye_color, a.eye_shape, a.facial_features, a.build,
                a.image_quality, a.confidence,
                e.source_type, e.is_adult
         FROM ethnic_image_analysis a
         JOIN ethnic_examples e ON a.example_id = e.id
         WHERE e.ethnic_id = @P1`,
        e.ID,
      );
      processed++;

      if (rows.length < MIN_SAMPLES) {
        skippedSparse++;
        if (i < 5 || rows.length > 0) {
          console.log(`[${i + 1}/${ethnicities.length}] ${e.Ethnicity.padEnd(35)} (skip — ${rows.length} samples, min ${MIN_SAMPLES})`);
        }
        continue;
      }

      const stats = aggregate(rows);
      const html = renderHtml(stats, e.Ethnicity);
      written++;

      if (!DRY_RUN) {
        await prisma.ethniclist.update({
          where: { ID: e.ID },
          data: {
            ImageObservedDistribution: html,
            ImageObservedAt: new Date(),
          },
        });
      }

      if (i < 3 || written % 25 === 0 || written === 1) {
        console.log(`[${i + 1}/${ethnicities.length}] ${e.Ethnicity.padEnd(35)} ✓ ${rows.length} samples`);
        if (i < 3) {
          console.log('  Stats:', JSON.stringify({
            sample: stats.total,
            skin: Object.entries(stats.skin).filter(([, v]) => v > 0).map(([k, v]) => `${k}:${v}`).join(','),
            hairTex: Object.entries(stats.hairTex).filter(([, v]) => v > 0).map(([k, v]) => `${k}:${v}`).join(','),
            fold: Object.entries(stats.fold).filter(([, v]) => v > 0).map(([k, v]) => `${k}:${v}`).join(','),
          }));
        }
      }
    }

    console.log(`\n${'═'.repeat(60)}`);
    console.log(`Done.`);
    console.log(`  Processed: ${processed}`);
    console.log(`  Written:   ${written}`);
    console.log(`  Skipped (< ${MIN_SAMPLES} samples): ${skippedSparse}`);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error('Fatal:', e.message);
  process.exit(1);
});
