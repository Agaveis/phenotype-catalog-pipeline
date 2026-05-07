#!/usr/bin/env node
// Phase A: enrich ethnic_examples.image_url with Wikipedia thumbnail URLs.
//
// For each row with reference_url set and image_url NULL, hits the Wikipedia
// summary REST endpoint and extracts the photo URL — preferring originalimage
// (higher res, better for vision analysis) and falling back to thumbnail.
//
// Idempotent: skips rows that already have image_url unless --refresh is set.
//
// Required env:
//   DATABASE_URL              SQL Server Prisma URL
//
// Flags:
//   --limit N                 Only process N rows (default: all)
//   --refresh                 Re-fetch even if image_url is already set
//   --batch-size N            Concurrent requests (default: 4 — Wikipedia is fine with this)
//
// Wikipedia URL examples returned:
//   https://upload.wikimedia.org/wikipedia/commons/thumb/.../800px-X.jpg
//   https://upload.wikimedia.org/wikipedia/commons/.../X.jpg

import { PrismaClient } from '@prisma/client';

const SUMMARY_API = (title) => `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
const USER_AGENT = 'EthnicEroticBot/1.0 (https://ethnicerotic.com; admin@agaveis.com)';

const args = process.argv.slice(2);
const flag = (n) => args.includes(n);
const flagVal = (n) => {
  const i = args.indexOf(n);
  return i >= 0 && i + 1 < args.length ? args[i + 1] : undefined;
};
const LIMIT = parseInt(flagVal('--limit') || '0') || 0;
const REFRESH = flag('--refresh');
const BATCH = parseInt(flagVal('--batch-size') || '4');

function pageTitleFromUrl(url) {
  if (!url) return null;
  const m = url.match(/\/wiki\/([^#?]+)/);
  if (!m) return null;
  return decodeURIComponent(m[1]).replace(/_/g, ' ');
}

async function fetchSummary(title) {
  const res = await fetch(SUMMARY_API(title), {
    headers: { 'User-Agent': USER_AGENT, Accept: 'application/json' },
  });
  if (!res.ok) {
    if (res.status === 404) return { ok: false, reason: '404' };
    return { ok: false, reason: `HTTP ${res.status}` };
  }
  return { ok: true, data: await res.json() };
}

function pickImage(summary) {
  // Prefer originalimage (higher resolution), fall back to thumbnail
  if (summary.originalimage?.source) return summary.originalimage.source;
  if (summary.thumbnail?.source) return summary.thumbnail.source;
  return null;
}

function pickBirthYear(summary) {
  // Wikipedia summary has `extract` (text) + sometimes `description`.
  // Look for "(born YYYY" or "YYYY–YYYY" or "(YYYY-..." patterns.
  const text = `${summary.description || ''} ${summary.extract || ''}`;
  const bornMatch = text.match(/\bborn[^\d]{0,30}(\d{4})\b/i);
  if (bornMatch) return parseInt(bornMatch[1]);
  const rangeMatch = text.match(/\b(\d{4})\s*[-–—]\s*(\d{4})\b/);
  if (rangeMatch) return parseInt(rangeMatch[1]);
  const yearMatch = text.match(/\((\d{4})\b/);
  if (yearMatch) return parseInt(yearMatch[1]);
  return null;
}

function pickDeathYear(summary) {
  const text = `${summary.description || ''} ${summary.extract || ''}`;
  const rangeMatch = text.match(/\b(\d{4})\s*[-–—]\s*(\d{4})\b/);
  if (rangeMatch) return parseInt(rangeMatch[2]);
  const diedMatch = text.match(/\bdied[^\d]{0,30}(\d{4})\b/i);
  if (diedMatch) return parseInt(diedMatch[1]);
  return null;
}

async function processRow(prisma, row) {
  const title = pageTitleFromUrl(row.reference_url);
  if (!title) return { ok: false, reason: 'no title from url' };
  const result = await fetchSummary(title);
  if (!result.ok) return { ok: false, reason: result.reason };
  const summary = result.data;
  const imageUrl = pickImage(summary);
  if (!imageUrl) return { ok: false, reason: 'no image on summary' };
  const birthYear = pickBirthYear(summary);
  const deathYear = pickDeathYear(summary);
  await prisma.ethnic_examples.update({
    where: { id: row.id },
    data: {
      image_url: imageUrl,
      ...(birthYear ? { birth_year: birthYear } : {}),
      ...(deathYear ? { death_year: deathYear } : {}),
    },
  });
  return { ok: true, hasYear: !!birthYear };
}

async function main() {
  if (!process.env.DATABASE_URL) {
    console.error('Missing env: DATABASE_URL');
    process.exit(1);
  }

  const prisma = new PrismaClient();
  let processed = 0;
  let succeeded = 0;
  let skipped = 0;
  const failureReasons = {};

  try {
    const where = { reference_url: { not: null } };
    if (!REFRESH) where.image_url = null;

    const total = await prisma.ethnic_examples.count({ where });
    console.log(`\n${total} rows to process${REFRESH ? ' (--refresh: includes existing)' : ''}\n`);

    const batchSize = 200; // DB pagination batch
    let offset = 0;
    let cap = LIMIT > 0 ? LIMIT : Infinity;

    while (processed < cap) {
      const remaining = cap - processed;
      const take = Math.min(batchSize, remaining);
      const rows = await prisma.ethnic_examples.findMany({
        where,
        orderBy: { id: 'asc' },
        skip: offset,
        take,
        select: { id: true, name: true, reference_url: true },
      });
      if (rows.length === 0) break;

      // Process in concurrent groups of BATCH
      for (let i = 0; i < rows.length; i += BATCH) {
        const group = rows.slice(i, i + BATCH);
        const results = await Promise.all(group.map((r) => processRow(prisma, r)));
        for (let j = 0; j < group.length; j++) {
          const r = group[j];
          const res = results[j];
          processed++;
          if (res.ok) {
            succeeded++;
            if (processed % 100 === 0 || processed === total) {
              console.log(`[${processed}/${total}] ✓ ${r.name} (${succeeded} ok, ${processed - succeeded - skipped} fail)`);
            }
          } else {
            failureReasons[res.reason] = (failureReasons[res.reason] || 0) + 1;
          }
          if (processed >= cap) break;
        }
      }

      offset += rows.length;
    }

    console.log(`\n${'═'.repeat(60)}`);
    console.log(`Done.`);
    console.log(`  Processed: ${processed}`);
    console.log(`  Succeeded (image saved): ${succeeded}`);
    console.log(`  Failed: ${processed - succeeded}`);
    if (Object.keys(failureReasons).length) {
      console.log('\nFailure reasons:');
      for (const [reason, count] of Object.entries(failureReasons).sort((a, b) => b[1] - a[1])) {
        console.log(`  ${count.toString().padStart(5)} × ${reason}`);
      }
    }
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error('Fatal:', e.message);
  process.exit(1);
});
