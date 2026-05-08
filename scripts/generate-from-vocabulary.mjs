#!/usr/bin/env node
// Generator: reads vocabularies/*.json and produces four artifacts per category:
//   - generated/prompts/{category}-analysis.md    — vision-LLM prompt fragment
//   - generated/prisma/{category}-observation.prisma — additive Prisma model
//   - generated/aggregators/{category}.mjs        — per-group rollup function
//   - generated/docs/{category}.md                — citable documentation page
//
// Usage:
//   node scripts/generate-from-vocabulary.mjs                  # all categories
//   node scripts/generate-from-vocabulary.mjs --category=breast  # one category
//
// Idempotent — re-running produces identical outputs given identical inputs.

import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { dirname, resolve, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const VOCAB_DIR = resolve(ROOT, 'vocabularies');
const OUT_DIR = resolve(ROOT, 'generated');

const args = process.argv.slice(2);
const flagVal = (n) => {
  const arg = args.find((a) => a.startsWith(`${n}=`));
  return arg ? arg.split('=')[1] : null;
};
const targetCategory = flagVal('--category');

// ─── Validation ────────────────────────────────────────────────────

const VALID_TYPES = ['categorical', 'ordinal', 'numeric', 'structured'];
const VALID_OBSERVABILITY = ['high', 'medium', 'low', 'not_assessable'];

function validateVocab(vocab, sourceFile) {
  const errors = [];
  if (!vocab.atlas_category) errors.push('Missing atlas_category');
  if (!vocab.version) errors.push('Missing version');
  if (!vocab.display_name) errors.push('Missing display_name');
  if (!Array.isArray(vocab.dimensions)) errors.push('dimensions must be an array');

  for (const dim of vocab.dimensions || []) {
    const ctx = dim.id ? `dimension ${dim.id}` : 'unnamed dimension';
    if (!dim.id) errors.push(`Dimension missing id`);
    if (!VALID_TYPES.includes(dim.type)) errors.push(`${ctx}: invalid type "${dim.type}"`);
    if (!dim.observability) errors.push(`${ctx}: missing observability block`);
    else if (!VALID_OBSERVABILITY.includes(dim.observability.from_photograph)) {
      errors.push(`${ctx}: invalid observability.from_photograph "${dim.observability.from_photograph}"`);
    }
  }

  if (errors.length) {
    console.error(`Validation errors in ${sourceFile}:`);
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }
}

// ─── Helpers ────────────────────────────────────────────────────────

function pascalCase(s) {
  return s.split(/[_-]/).map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join('');
}

// Prisma identifiers cannot contain hyphens. Converts atlas_category like
// "body-shape" into a valid Prisma identifier "body_shape" for use as model
// names, index names, FK names, etc.
function prismaIdent(s) {
  return s.replace(/-/g, '_');
}

function nvarLength(dim) {
  if (dim.type === 'numeric') return null;
  const maxLen = (dim.values || []).reduce((m, v) => Math.max(m, (v.id || '').length), 0);
  if (maxLen <= 20) return 50;
  if (maxLen <= 50) return 100;
  return 200;
}

const HEADER_NOTE = (cat, version) =>
  `Auto-generated from vocabularies/${cat}.json (v${version}). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs`;

// ─── Generators ────────────────────────────────────────────────────

function generatePromptFragment(vocab) {
  const lines = [];
  lines.push(`# ${vocab.display_name} observation prompt`);
  lines.push('');
  lines.push(`<!-- ${HEADER_NOTE(vocab.atlas_category, vocab.version)} -->`);
  lines.push('');
  lines.push(`Atlas category: \`${vocab.atlas_category}\` · Version: ${vocab.version}`);
  if (vocab.uberon_id) lines.push(`UBERON: \`${vocab.uberon_id}\``);
  lines.push('');
  lines.push('## Instruction');
  lines.push('');
  lines.push(
    `Assess the following ${vocab.display_name.toLowerCase()}-related phenotype dimensions from the photograph. Return one value per dimension, drawn only from the listed valid buckets. If a dimension cannot be assessed (anatomy not visible, image quality too poor, framing too narrow), return \`null\` for that dimension. Do not guess — \`null\` is preferred over an unreliable bucket assignment.`
  );
  lines.push('');
  lines.push(
    'For each dimension, also return a per-dimension confidence score (0.0–1.0) reflecting how reliably you could assess that specific dimension in this photograph.'
  );
  lines.push('');
  lines.push('Return a single JSON object, no prose, with shape:');
  lines.push('');
  lines.push('```json');
  const sample = {};
  for (const dim of vocab.dimensions) {
    if (dim.observability.from_photograph === 'not_assessable') continue;
    sample[dim.id] = '<one of the valid buckets, or null>';
    sample[`${dim.id}_confidence`] = '<0.0-1.0, or null>';
  }
  lines.push(JSON.stringify(sample, null, 2));
  lines.push('```');
  lines.push('');
  lines.push('## Dimensions');
  lines.push('');
  for (const dim of vocab.dimensions) {
    if (dim.observability.from_photograph === 'not_assessable') {
      lines.push(`### \`${dim.id}\` *(not assessable from photographs — skipped in prompt)*`);
      lines.push('');
      lines.push(`> ${dim.description || ''}`);
      lines.push('');
      if (dim.scale_citation) lines.push(`Scale: ${dim.scale_citation}`);
      lines.push('');
      continue;
    }
    lines.push(`### \`${dim.id}\``);
    lines.push('');
    const facts = [
      `**Type:** ${dim.type}`,
      `**Scale:** ${dim.scale || 'unspecified'}`,
      `**Min visible extent:** ${dim.observability.minimum_visible_extent}`,
    ];
    if (dim.observability.requires_unclothed) facts.push('**Requires unclothed anatomy**');
    lines.push(facts.join(' · '));
    if (dim.observability.notes) {
      lines.push('');
      lines.push(`> ${dim.observability.notes}`);
    }
    lines.push('');
    if (dim.values && dim.values.length) {
      lines.push('Valid values:');
      lines.push('');
      for (const val of dim.values) {
        let line = `- \`${val.id}\``;
        if (val.display_name) line += ` — *${val.display_name}*`;
        if (val.definition) line += `: ${val.definition}`;
        lines.push(line);
      }
      lines.push('');
    }
    if (dim.scale_citation) {
      lines.push(`Reference: ${dim.scale_citation}`);
      lines.push('');
    }
  }
  return lines.join('\n');
}

function generatePrismaModel(vocab) {
  const cat = vocab.atlas_category;
  const ident = prismaIdent(cat); // hyphen-safe for Prisma identifiers
  const lines = [];
  lines.push(`// ${HEADER_NOTE(cat, vocab.version)}`);
  lines.push('');
  lines.push(`model ${ident}_observation {`);
  lines.push(`  id                    Int      @id @default(autoincrement())`);
  lines.push(`  example_id            Int      @unique(map: "UX_${ident}_observation_example")`);

  for (const dim of vocab.dimensions) {
    const len = nvarLength(dim);
    if (dim.type === 'numeric') {
      lines.push(`  ${dim.id.padEnd(20)}  Float?`);
    } else {
      lines.push(`  ${dim.id.padEnd(20)}  String?  @db.NVarChar(${len})`);
    }
  }

  for (const dim of vocab.dimensions) {
    if (dim.observability.from_photograph === 'not_assessable') continue;
    const conf = `${dim.id}_confidence`;
    lines.push(`  ${conf.padEnd(20)}  Float?`);
  }

  lines.push(`  vocabulary_source     String   @default("canonical") @db.NVarChar(50)`);
  lines.push(`  vocabulary_version    String   @default("${vocab.version}") @db.NVarChar(20)`);
  lines.push(`  analysis_model        String?  @db.NVarChar(100)`);
  lines.push(`  analyzed_at           DateTime @default(now()) @db.DateTime2`);
  lines.push('');
  lines.push(
    `  example ethnic_examples @relation(fields: [example_id], references: [id], map: "FK_${ident}_observation_example")`
  );
  lines.push('');
  lines.push(`  @@index([example_id], map: "IX_${ident}_observation_example")`);
  lines.push(`}`);
  return lines.join('\n');
}

function generateAggregator(vocab) {
  const cat = vocab.atlas_category;
  const fnName = `aggregate${pascalCase(cat)}Observations`;
  const aggNotes = vocab.aggregation_notes || {};
  const minSample = aggNotes.minimum_sample_size_for_publication ?? 10;
  const smallSample = aggNotes.small_sample_caveat_threshold ?? 25;
  const lowConfidence = aggNotes.low_confidence_threshold ?? 0.55;

  const lines = [];
  lines.push(`// ${HEADER_NOTE(cat, vocab.version)}`);
  lines.push('');
  lines.push('/**');
  lines.push(` * Aggregate per-image ${cat} observations into a per-group rollup.`);
  lines.push(' *');
  lines.push(` * @param {Array<Object>} observations - rows from \`${cat}_observation\` for one ethnic_id`);
  lines.push(' * @returns {Object} { sample_size, dimensions: { ... }, mean_confidence, caveats }');
  lines.push(' */');
  lines.push(`export function ${fnName}(observations) {`);
  lines.push('  if (!observations || observations.length === 0) {');
  lines.push('    return { sample_size: 0, dimensions: {}, mean_confidence: null, caveats: ["empty_sample"] };');
  lines.push('  }');
  lines.push('');
  lines.push('  const result = { sample_size: observations.length, dimensions: {} };');
  lines.push('');

  for (const dim of vocab.dimensions) {
    lines.push(`  // ${dim.id} (${dim.type})`);
    if (dim.type === 'categorical' || dim.type === 'ordinal') {
      lines.push('  {');
      lines.push('    const counts = {};');
      lines.push('    let total = 0;');
      lines.push('    for (const o of observations) {');
      lines.push(`      const v = o.${dim.id};`);
      lines.push('      if (!v) continue;');
      lines.push('      counts[v] = (counts[v] || 0) + 1;');
      lines.push('      total += 1;');
      lines.push('    }');
      lines.push('    const distribution = {};');
      lines.push('    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;');
      if (dim.type === 'ordinal' && dim.values && dim.values.length) {
        lines.push('    // Median bucket (ordinal — values listed in canonical order)');
        lines.push(`    const valueOrder = ${JSON.stringify(dim.values.map((v) => v.id))};`);
        lines.push('    const sortedIdx = [];');
        lines.push('    for (const o of observations) {');
        lines.push(`      const idx = valueOrder.indexOf(o.${dim.id});`);
        lines.push('      if (idx >= 0) sortedIdx.push(idx);');
        lines.push('    }');
        lines.push('    sortedIdx.sort((a, b) => a - b);');
        lines.push(
          '    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;'
        );
        lines.push('    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;');
        lines.push(
          `    result.dimensions['${dim.id}'] = { distribution, sample_n: total, median: medianValue };`
        );
      } else {
        lines.push(`    result.dimensions['${dim.id}'] = { distribution, sample_n: total };`);
      }
      lines.push('  }');
    } else if (dim.type === 'numeric') {
      lines.push('  {');
      lines.push(
        `    const values = observations.map((o) => o.${dim.id}).filter((v) => v !== null && v !== undefined);`
      );
      lines.push('    if (values.length === 0) {');
      lines.push(`      result.dimensions['${dim.id}'] = { sample_n: 0 };`);
      lines.push('    } else {');
      lines.push('      const sum = values.reduce((s, v) => s + v, 0);');
      lines.push('      const sorted = [...values].sort((a, b) => a - b);');
      lines.push('      const median = sorted[Math.floor(sorted.length / 2)];');
      lines.push(`      result.dimensions['${dim.id}'] = {`);
      lines.push('        sample_n: values.length,');
      lines.push('        mean: sum / values.length,');
      lines.push('        median,');
      lines.push('        min: sorted[0],');
      lines.push('        max: sorted[sorted.length - 1],');
      lines.push('      };');
      lines.push('    }');
      lines.push('  }');
    }
    lines.push('');
  }

  lines.push('  // Mean confidence across all photo-assessable per-dimension confidence values');
  const confFields = vocab.dimensions
    .filter((d) => d.observability.from_photograph !== 'not_assessable')
    .map((d) => `${d.id}_confidence`);
  lines.push(`  const confidenceFields = ${JSON.stringify(confFields)};`);
  lines.push('  const allConfidences = [];');
  lines.push('  for (const o of observations) {');
  lines.push('    for (const f of confidenceFields) {');
  lines.push("      if (typeof o[f] === 'number') allConfidences.push(o[f]);");
  lines.push('    }');
  lines.push('  }');
  lines.push('  result.mean_confidence = allConfidences.length');
  lines.push('    ? allConfidences.reduce((s, v) => s + v, 0) / allConfidences.length');
  lines.push('    : null;');
  lines.push('');
  lines.push('  // Caveats');
  lines.push('  result.caveats = [];');
  lines.push(`  if (result.sample_size < ${minSample}) result.caveats.push('small_sample_below_publication_threshold');`);
  lines.push(`  else if (result.sample_size < ${smallSample}) result.caveats.push('modest_sample');`);
  lines.push(`  if (result.mean_confidence !== null && result.mean_confidence < ${lowConfidence}) result.caveats.push('low_overall_confidence');`);
  lines.push('');
  lines.push('  return result;');
  lines.push('}');
  return lines.join('\n');
}

function generateDocsPage(vocab) {
  const lines = [];
  lines.push(`# ${vocab.display_name} — phenotype taxonomy`);
  lines.push('');
  lines.push(`<!-- ${HEADER_NOTE(vocab.atlas_category, vocab.version)} -->`);
  lines.push('');
  lines.push(
    `> **Atlas category:** \`${vocab.atlas_category}\` · **Version:** ${vocab.version} · **License:** ${vocab.license || 'CC-BY-4.0'}`
  );
  if (vocab.uberon_id || vocab.fma_id) {
    const ids = [];
    if (vocab.uberon_id) ids.push(`**UBERON:** \`${vocab.uberon_id}\``);
    if (vocab.fma_id) ids.push(`**FMA:** \`${vocab.fma_id}\``);
    lines.push(`> ${ids.join(' · ')}`);
  }
  lines.push('');
  if (vocab.description) {
    lines.push(vocab.description);
    lines.push('');
  }

  lines.push('## Dimensions overview');
  lines.push('');
  lines.push('| Dimension | Type | Scale | Photo-observable | Values |');
  lines.push('|---|---|---|---|---|');
  for (const dim of vocab.dimensions) {
    const obsv = dim.observability.from_photograph;
    const nvals = (dim.values || []).length;
    lines.push(`| \`${dim.id}\` | ${dim.type} | ${dim.scale || ''} | ${obsv} | ${nvals} |`);
  }
  lines.push('');

  for (const dim of vocab.dimensions) {
    lines.push(`## \`${dim.id}\` — ${dim.display_name || dim.id}`);
    lines.push('');
    lines.push(`**Type:** ${dim.type} · **Scale:** ${dim.scale}`);
    lines.push('');
    if (dim.scale_citation) {
      lines.push(`**Citation:** ${dim.scale_citation}`);
      lines.push('');
    }
    if (dim.description) {
      lines.push(dim.description);
      lines.push('');
    }
    if (dim.observability) {
      const obs = dim.observability;
      lines.push(
        `**Observability:** \`from_photograph: ${obs.from_photograph}\` · \`requires_unclothed: ${obs.requires_unclothed}\` · \`minimum_visible_extent: ${obs.minimum_visible_extent}\``
      );
      if (obs.notes) {
        lines.push('');
        lines.push(`> ${obs.notes}`);
      }
      lines.push('');
    }
    if (dim.values && dim.values.length) {
      lines.push('### Valid values');
      lines.push('');
      for (const val of dim.values) {
        let line = `- **\`${val.id}\`**`;
        if (val.display_name) line += ` — ${val.display_name}`;
        if (val.definition) line += `: ${val.definition}`;
        lines.push(line);
      }
      lines.push('');
    }
  }

  if (vocab.references && vocab.references.length) {
    lines.push('## References');
    lines.push('');
    for (const ref of vocab.references) lines.push(`- ${ref}`);
    lines.push('');
  }
  return lines.join('\n');
}

// ─── Main ───────────────────────────────────────────────────────────

function main() {
  const allFiles = readdirSync(VOCAB_DIR).filter((f) => f.endsWith('.json'));
  const targets = targetCategory
    ? allFiles.filter((f) => basename(f, '.json') === targetCategory)
    : allFiles;

  if (targets.length === 0) {
    console.error('No vocabulary files match.');
    if (targetCategory) console.error(`(filter: --category=${targetCategory})`);
    process.exit(1);
  }

  for (const sub of ['prompts', 'prisma', 'aggregators', 'docs']) {
    mkdirSync(resolve(OUT_DIR, sub), { recursive: true });
  }

  for (const file of targets) {
    const path = resolve(VOCAB_DIR, file);
    const vocab = JSON.parse(readFileSync(path, 'utf8'));
    validateVocab(vocab, file);
    const cat = vocab.atlas_category;

    writeFileSync(
      resolve(OUT_DIR, 'prompts', `${cat}-analysis.md`),
      generatePromptFragment(vocab) + '\n',
      'utf8'
    );
    writeFileSync(
      resolve(OUT_DIR, 'prisma', `${cat}-observation.prisma`),
      generatePrismaModel(vocab) + '\n',
      'utf8'
    );
    writeFileSync(
      resolve(OUT_DIR, 'aggregators', `${cat}.mjs`),
      generateAggregator(vocab) + '\n',
      'utf8'
    );
    writeFileSync(resolve(OUT_DIR, 'docs', `${cat}.md`), generateDocsPage(vocab) + '\n', 'utf8');

    const nDims = vocab.dimensions.length;
    const nValues = vocab.dimensions.reduce((s, d) => s + (d.values || []).length, 0);
    const nAssessable = vocab.dimensions.filter(
      (d) => d.observability.from_photograph !== 'not_assessable'
    ).length;
    console.log(
      `✓ ${cat} (v${vocab.version}): ${nDims} dimensions (${nAssessable} photo-assessable), ${nValues} bucket values`
    );
  }

  console.log('');
  console.log(`Output: ${OUT_DIR}/{prompts,prisma,aggregators,docs}/`);
}

main();
