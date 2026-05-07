#!/usr/bin/env node
// Export the EthnicErotic catalog as a HuggingFace-compatible dataset.
//
// Outputs (under huggingface-dataset/data/):
//   ethnicities.csv         + .jsonl   — 484 rows, one per ethnic group
//   atlas.csv               + .jsonl   — body-atlas categories
//   notable_people.csv      + .jsonl   — 13K Wikipedia notable people, ethnic-grouped
//   image_observations.csv  + .jsonl   — 5.6K per-image phenotype analyses
//
// Usage (from Sites/EE/nextjs-app/):
//   DATABASE_URL="sqlserver://..." node scripts/build-hf-dataset.mjs
//
// Then upload with:
//   hf upload EthnicErotic/phenotype-catalog ./huggingface-dataset --repo-type=dataset
//
// Idempotent — safe to re-run anytime to refresh the dataset.

import { PrismaClient } from '@prisma/client';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const OUT_DIR = resolve(ROOT, 'huggingface-dataset', 'data');
const SITE_URL = 'https://ethnicerotic.com';
const SCHEMA_VERSION = 2;

function slugify(text) {
  if (!text) return '';
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 80);
}

// HTML → plain text. PhenotypeProfile + ImageObservedDistribution are stored as
// editorial HTML. Researchers want flat text; preserve paragraph breaks.
function htmlToText(html) {
  if (!html) return '';
  return String(html)
    .replace(/<\s*br\s*\/?\s*>/gi, '\n')
    .replace(/<\/(p|div|h[1-6]|li|tr)>/gi, '\n\n')
    .replace(/<li[^>]*>/gi, '• ')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\r/g, '')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n[ \t]+/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function csvEscape(value) {
  if (value === null || value === undefined) return '';
  const s = String(value);
  if (/[",\n\r]/.test(s)) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
}

function writeCsv(path, rows, columns) {
  const header = columns.join(',');
  const body = rows
    .map((row) => columns.map((c) => csvEscape(row[c])).join(','))
    .join('\n');
  writeFileSync(path, header + '\n' + body + '\n', 'utf8');
}

function writeJsonl(path, rows) {
  const body = rows.map((r) => JSON.stringify(r)).join('\n');
  writeFileSync(path, body + '\n', 'utf8');
}

async function main() {
  console.log('Connecting to database...');
  const prisma = new PrismaClient();

  try {
    mkdirSync(OUT_DIR, { recursive: true });

    // ─── Ethnicities ──────────────────────────────────────────────────
    console.log('Querying ethniclist...');
    const ethnicities = await prisma.ethniclist.findMany({
      where: { Ethnicity: { not: null } },
      orderBy: { Ethnicity: 'asc' },
      include: {
        _count: { select: { examples: true } },
      },
    });

    const ethnicNameById = new Map();
    const ethnicSlugById = new Map();
    for (const e of ethnicities) {
      ethnicNameById.set(e.ID, e.Ethnicity);
      ethnicSlugById.set(e.ID, slugify(e.Ethnicity));
    }

    const ethnicRows = ethnicities.map((e) => {
      const slug = ethnicSlugById.get(e.ID);
      return {
        id: e.ID,
        name: e.Ethnicity,
        homeland: e.Homeland || '',
        region: e.HomelandRegion || '',
        subgroup: e.Subgroup || '',
        language: e.Language || '',
        language_codes: e.LanguageCodes || '',
        iso_countries: e.ISOCountries || '',
        religion: e.Religion || '',
        description: e.Description ? htmlToText(e.Description) : '',
        phenotype_profile: e.PhenotypeProfile ? htmlToText(e.PhenotypeProfile) : '',
        image_observed_distribution: e.ImageObservedDistribution
          ? htmlToText(e.ImageObservedDistribution)
          : '',
        image_observed_at: e.ImageObservedAt ? e.ImageObservedAt.toISOString() : '',
        notable_people_count: e._count?.examples ?? 0,
        wiki_url: e.Wiki || '',
        canonical_url: slug ? `${SITE_URL}/ethnic/${slug}` : '',
      };
    });

    const ETHNIC_COLS = [
      'id', 'name', 'homeland', 'region', 'subgroup', 'language',
      'language_codes', 'iso_countries', 'religion', 'description',
      'phenotype_profile', 'image_observed_distribution', 'image_observed_at',
      'notable_people_count', 'wiki_url', 'canonical_url',
    ];

    writeCsv(resolve(OUT_DIR, 'ethnicities.csv'), ethnicRows, ETHNIC_COLS);
    writeJsonl(resolve(OUT_DIR, 'ethnicities.jsonl'), ethnicRows);
    console.log(`✓ Ethnicities: ${ethnicRows.length} rows`);

    // ─── Atlas categories ─────────────────────────────────────────────
    console.log('Querying body atlas...');
    const atlas = await prisma.body.findMany({
      where: { category: { not: null } },
      orderBy: { id: 'asc' },
    });

    const atlasRows = atlas.map((b) => {
      const categorySlug = b.category ? b.category.replace(/\s+/g, '-') : '';
      return {
        id: b.id,
        category: b.category || '',
        sub_category: b.SubCategoryName || '',
        name: b.name || '',
        description: b.description || '',
        value_type: b.valuetype || '',
        canonical_url: categorySlug ? `${SITE_URL}/atlas/${categorySlug}` : '',
      };
    });

    const ATLAS_COLS = [
      'id', 'category', 'sub_category', 'name', 'description',
      'value_type', 'canonical_url',
    ];

    writeCsv(resolve(OUT_DIR, 'atlas.csv'), atlasRows, ATLAS_COLS);
    writeJsonl(resolve(OUT_DIR, 'atlas.jsonl'), atlasRows);
    console.log(`✓ Atlas: ${atlasRows.length} rows`);

    // ─── Notable people ───────────────────────────────────────────────
    console.log('Querying notable people...');
    const examples = await prisma.ethnic_examples.findMany({
      orderBy: [{ ethnic_id: 'asc' }, { name: 'asc' }],
    });

    const peopleRows = examples.map((p) => ({
      id: p.id,
      ethnic_id: p.ethnic_id,
      ethnic_name: ethnicNameById.get(p.ethnic_id) || '',
      ethnic_canonical_url: ethnicSlugById.get(p.ethnic_id)
        ? `${SITE_URL}/ethnic/${ethnicSlugById.get(p.ethnic_id)}`
        : '',
      name: p.name,
      known_for: p.known_for || '',
      birth_year: p.birth_year ?? '',
      death_year: p.death_year ?? '',
      reference_url: p.reference_url || '',
      image_url: p.image_url || '',
      source_type: p.source_type || '',
    }));

    const PEOPLE_COLS = [
      'id', 'ethnic_id', 'ethnic_name', 'ethnic_canonical_url', 'name',
      'known_for', 'birth_year', 'death_year', 'reference_url', 'image_url',
      'source_type',
    ];

    writeCsv(resolve(OUT_DIR, 'notable_people.csv'), peopleRows, PEOPLE_COLS);
    writeJsonl(resolve(OUT_DIR, 'notable_people.jsonl'), peopleRows);
    console.log(`✓ Notable people: ${peopleRows.length} rows`);

    // ─── Image observations (per-image phenotype analysis) ────────────
    console.log('Querying image observations...');
    const analyses = await prisma.ethnic_image_analysis.findMany({
      include: { example: true },
      orderBy: { id: 'asc' },
    });

    const obsRows = analyses
      .filter((a) => a.example)
      .map((a) => ({
        id: a.id,
        example_id: a.example_id,
        ethnic_id: a.example.ethnic_id,
        ethnic_name: ethnicNameById.get(a.example.ethnic_id) || '',
        person_name: a.example.name,
        image_url: a.example.image_url || '',
        reference_url: a.example.reference_url || '',
        skin_tone: a.skin_tone || '',
        skin_undertone: a.skin_undertone || '',
        hair_color: a.hair_color || '',
        hair_texture: a.hair_texture || '',
        hair_pattern: a.hair_pattern || '',
        eye_color: a.eye_color || '',
        eye_shape: a.eye_shape || '',
        facial_features: a.facial_features || '',
        build: a.build || '',
        visible_extent: a.visible_extent || '',
        image_quality: a.image_quality || '',
        obscurations: a.obscurations || '',
        confidence: a.confidence ?? '',
        analysis_model: a.analysis_model || '',
        analyzed_at: a.analyzed_at ? a.analyzed_at.toISOString() : '',
      }));

    const OBS_COLS = [
      'id', 'example_id', 'ethnic_id', 'ethnic_name', 'person_name',
      'image_url', 'reference_url',
      'skin_tone', 'skin_undertone',
      'hair_color', 'hair_texture', 'hair_pattern',
      'eye_color', 'eye_shape',
      'facial_features', 'build', 'visible_extent',
      'image_quality', 'obscurations', 'confidence',
      'analysis_model', 'analyzed_at',
    ];

    writeCsv(resolve(OUT_DIR, 'image_observations.csv'), obsRows, OBS_COLS);
    writeJsonl(resolve(OUT_DIR, 'image_observations.jsonl'), obsRows);
    console.log(`✓ Image observations: ${obsRows.length} rows`);

    // ─── Manifest ─────────────────────────────────────────────────────
    const groupsWithProfile = ethnicRows.filter((r) => r.phenotype_profile).length;
    const groupsWithObserved = ethnicRows.filter((r) => r.image_observed_distribution).length;
    const groupsWithPeople = new Set(peopleRows.map((p) => p.ethnic_id)).size;
    const groupsWithImageData = new Set(obsRows.map((o) => o.ethnic_id)).size;

    const manifest = {
      generated_at: new Date().toISOString(),
      source: SITE_URL,
      schema_version: SCHEMA_VERSION,
      counts: {
        ethnicities: ethnicRows.length,
        atlas: atlasRows.length,
        notable_people: peopleRows.length,
        image_observations: obsRows.length,
      },
      coverage: {
        groups_with_phenotype_profile: groupsWithProfile,
        groups_with_observed_distribution: groupsWithObserved,
        groups_with_notable_people: groupsWithPeople,
        groups_with_image_observations: groupsWithImageData,
      },
    };
    writeFileSync(
      resolve(OUT_DIR, '..', 'manifest.json'),
      JSON.stringify(manifest, null, 2) + '\n',
      'utf8',
    );
    console.log(`✓ Manifest written (schema v${SCHEMA_VERSION})`);

    console.log('');
    console.log(`Output: ${resolve(OUT_DIR, '..')}`);
    console.log('Next: hf upload EthnicErotic/phenotype-catalog ./huggingface-dataset --repo-type=dataset');
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
