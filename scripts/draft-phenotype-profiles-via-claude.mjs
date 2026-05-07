#!/usr/bin/env node
// Generates ethniclist.PhenotypeProfile per group using Claude (`claude -p`).
// Feeds metadata + scraped notable-people list (from ethnic_examples) and asks
// for a structured ~250-350 word phenotype profile covering hair / eyes /
// skin / facial structure / build, with explicit "no AI defaults" guardrails.
//
// Same script structure and Claude-Code subprocess pattern as
// draft-descriptions-via-claude.mjs. Marginal cost: $0 under the Max plan.
//
// Required env:
//   DATABASE_URL              SQL Server Prisma URL
//
// Usage:
//   DATABASE_URL="..." node scripts/draft-phenotype-profiles-via-claude.mjs
//
// Flags:
//   --limit N                 Only process N rows (default: all eligible)
//   --start "Name"            Resume from this ethnicity (alphabetical)
//   --auto                    Skip per-row prompt; accept every draft
//   --refresh                 Re-generate even if PhenotypeProfile is already set
//   --only-id N               Force-pick this ethnic ID (debugging)

import { spawn } from 'node:child_process';
import readline from 'node:readline';
import { PrismaClient } from '@prisma/client';
import sanitizeHtml from 'sanitize-html';

const args = process.argv.slice(2);
const flag = (n) => args.includes(n);
const flagVal = (n) => {
  const i = args.indexOf(n);
  return i >= 0 && i + 1 < args.length ? args[i + 1] : undefined;
};
const LIMIT = parseInt(flagVal('--limit') || '0') || 0;
const START_FROM = flagVal('--start');
const AUTO = flag('--auto');
const REFRESH = flag('--refresh');
const ONLY_ID = flagVal('--only-id') ? parseInt(flagVal('--only-id')) : null;

// ──────────────────────────────────────────────────────────────────────
// Prompt builder
// ──────────────────────────────────────────────────────────────────────

function buildPrompt({ ethnic, examples }) {
  const meta = [
    `Ethnic group: ${ethnic.Ethnicity}`,
    ethnic.Homeland && `Homeland: ${ethnic.Homeland}`,
    ethnic.HomelandRegion && `Continental sub-region: ${ethnic.HomelandRegion}`,
    ethnic.Subgroup && `Sub-groups / branches: ${ethnic.Subgroup}`,
    ethnic.Language && `Language: ${ethnic.Language}`,
    ethnic.Religion && `Religion: ${ethnic.Religion}`,
  ].filter(Boolean).join('\n');

  const peopleList = examples.length > 0
    ? examples.slice(0, 50).map((p) => {
        const desc = p.known_for ? ` — ${p.known_for.substring(0, 120)}` : '';
        return `- ${p.name}${desc}`;
      }).join('\n')
    : '(no notable-people list available — use general knowledge of this group)';

  return `You write structured phenotype profiles for an ethnic-group reference catalog. Your output is the editorial paragraph that appears on the public page in a section titled "Typical Phenotypes" — it sits alongside the group's general description and links to the phenotype atlas.

WRITING STYLE
- 250–350 words.
- Editorial register, not academic. Direct, plainspoken, specific.
- Lead with what's structurally distinctive about this group's phenotype.
- Avoid AI-essay defaults: no "rich tapestry", no "vibrant culture", no "diverse spectrum", no "celebrating diversity".
- No racial-stereotype shorthand and no pseudo-scientific framing — describe observed variation, not "racial types".
- Acknowledge variation honestly. Almost no ethnic group has a single uniform appearance.
- Use specific percentages or comparisons where they're well-known (e.g., "~13% natural redheads — highest concentration in the world" for Scottish; "near-universal epicanthic fold" for East Asian groups).

CONTENT — cover, in this rough order:
1. Hair: typical color range, texture (straight/wavy/curly/coily), patterns of variation by sub-region or sub-group.
2. Eyes: color range, eyelid morphology (epicanthic fold present/absent), shape patterns.
3. Skin: tone range using Fitzpatrick or descriptive language; common undertones; sun-exposure patterns where they shape phenotype.
4. Facial structure: nose form (bridge, alar width), lip fullness, jaw/cheekbone patterns where notable.
5. Build: typical stature range, body composition tendencies, where there's documented anthropometric distinctiveness.
6. Sub-group variation: if Subgroup field lists multiple branches, mention any visible phenotype differences between them.

If the notable-people list provides anchor examples (e.g., a famous Yoruba musician with very dark skin and Type 4 hair), use them for grounding — name them once at most. Don't list everyone. The list is reference material to keep the profile honest, not content to summarize.

FORMAT
- Output HTML only — <p> for paragraphs, optionally <em> for emphasis on a specific term, optionally <strong> for a single highlighted observation.
- No <h1>/<h2>/<h3>, no <div>, no <ul>/<li>, no inline styles, no images, no links.
- No preamble (no "Here is the phenotype profile:"). No closing summary.
- No markdown code fences. Output raw HTML.

CONTEXT
The site is adult-themed and uses these profiles to inform AI image generation. Be anatomically descriptive where it informs phenotype (skin tone, body composition, facial features). Do NOT be sexual or salacious — this is reference material, not erotica. The audience reads for grounding before generating.

---

${meta}

NOTABLE PEOPLE FROM THIS GROUP (anchor examples — do not summarize):
${peopleList}

Write the phenotype profile for this group.`;
}

// ──────────────────────────────────────────────────────────────────────
// Sanitization (mirrors src/lib/sanitize.ts allowlist)
// ──────────────────────────────────────────────────────────────────────

const SANITIZE_OPTIONS = {
  allowedTags: ['p', 'br', 'strong', 'em', 'b', 'i', 'mark', 'small', 'sub', 'sup', 'span'],
  allowedAttributes: { '*': ['class'] },
  nonTextTags: ['script', 'style', 'textarea', 'option', 'noscript'],
};

function sanitize(html) {
  return sanitizeHtml(html, SANITIZE_OPTIONS);
}

function stripCodeFences(s) {
  return s
    .replace(/^```(?:html)?\s*\n?/i, '')
    .replace(/\n?```\s*$/, '')
    .trim();
}

function wordCount(html) {
  const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return text ? text.split(' ').length : 0;
}

// ──────────────────────────────────────────────────────────────────────
// Claude Code subprocess
// ──────────────────────────────────────────────────────────────────────

function callClaudeCode(prompt) {
  return new Promise((resolve, reject) => {
    const proc = spawn('claude', ['-p'], {
      stdio: ['pipe', 'pipe', 'pipe'],
      shell: process.platform === 'win32',
    });
    let stdout = '';
    let stderr = '';
    proc.stdout.on('data', (d) => { stdout += d.toString(); });
    proc.stderr.on('data', (d) => { stderr += d.toString(); });
    proc.on('error', reject);
    proc.on('close', (code) => {
      if (code !== 0) reject(new Error(`claude exited with code ${code}\n${stderr}`));
      else resolve(stdout);
    });
    proc.stdin.write(prompt);
    proc.stdin.end();
  });
}

function ask(question) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => rl.question(question, (a) => { rl.close(); resolve(a.trim()); }));
}

// ──────────────────────────────────────────────────────────────────────
// Main loop
// ──────────────────────────────────────────────────────────────────────

async function main() {
  if (!process.env.DATABASE_URL) {
    console.error('Missing env: DATABASE_URL');
    process.exit(1);
  }

  const prisma = new PrismaClient();
  let approved = 0;
  let skipped = 0;
  let regenerated = 0;
  const failures = [];

  try {
    const where = { Ethnicity: { not: null } };
    if (!REFRESH) where.PhenotypeProfile = null;
    if (START_FROM) where.Ethnicity = { ...where.Ethnicity, gte: START_FROM };
    if (ONLY_ID) where.ID = ONLY_ID;

    const ethnicities = await prisma.ethniclist.findMany({
      where,
      orderBy: { Ethnicity: 'asc' },
      take: LIMIT > 0 ? LIMIT : undefined,
      select: {
        ID: true, Ethnicity: true, Homeland: true, HomelandRegion: true,
        Subgroup: true, Language: true, Religion: true,
      },
    });

    console.log(`\n${ethnicities.length} ethnic groups to process\n`);
    if (AUTO) console.log('AUTO mode — every draft saved without confirmation.\n');

    for (let i = 0; i < ethnicities.length; i++) {
      const ethnic = ethnicities[i];
      console.log(`\n${'═'.repeat(72)}`);
      console.log(`[${i + 1}/${ethnicities.length}] ${ethnic.Ethnicity}`);
      console.log(`  ${[ethnic.Homeland, ethnic.HomelandRegion, ethnic.Language, ethnic.Religion].filter(Boolean).join(' · ')}`);

      const examples = await prisma.ethnic_examples.findMany({
        where: { ethnic_id: ethnic.ID },
        orderBy: { id: 'asc' },
        take: 50,
        select: { name: true, known_for: true },
      });
      console.log(`  ${examples.length} notable-people anchors`);
      console.log('─'.repeat(72));

      let attempt = 0;
      let done = false;
      while (!done) {
        attempt++;
        if (attempt > 1) {
          console.log(`\n[Regenerating, attempt ${attempt}…]`);
          regenerated++;
        } else {
          console.log('\n[Drafting…]');
        }

        let draft;
        try {
          const raw = await callClaudeCode(buildPrompt({ ethnic, examples }));
          draft = sanitize(stripCodeFences(raw));
        } catch (e) {
          console.error(`\n  ERROR: ${e.message}`);
          failures.push({ id: ethnic.ID, ethnicity: ethnic.Ethnicity, error: e.message });
          break;
        }

        if (draft.length < 200) {
          console.error(`\n  Draft too short (${draft.length} chars). Skipping.`);
          failures.push({ id: ethnic.ID, ethnicity: ethnic.Ethnicity, error: 'too short' });
          break;
        }

        console.log('─'.repeat(72));
        console.log(draft);
        console.log('─'.repeat(72));
        console.log(`${wordCount(draft)} words, ${draft.length} chars`);

        let action = 'a';
        if (!AUTO) {
          action = (await ask('\n[a]ccept · [r]egenerate · [s]kip · [q]uit > ')).toLowerCase() || 'a';
        }

        if (action === 'a' || action === '') {
          await prisma.ethniclist.update({
            where: { ID: ethnic.ID },
            data: { PhenotypeProfile: draft },
          });
          console.log(`  ✓ Saved.`);
          approved++;
          done = true;
        } else if (action === 'r') {
          continue;
        } else if (action === 's') {
          console.log('  ⊘ Skipped.');
          skipped++;
          done = true;
        } else if (action === 'q') {
          console.log('\nQuitting.');
          done = true;
          i = ethnicities.length;
        } else {
          console.log('  Unknown action, treating as skip.');
          skipped++;
          done = true;
        }
      }
    }
  } finally {
    await prisma.$disconnect();
  }

  console.log(`\n${'═'.repeat(72)}`);
  console.log(`Done.`);
  console.log(`  Approved:    ${approved}`);
  console.log(`  Skipped:     ${skipped}`);
  console.log(`  Regenerated: ${regenerated} regen attempts`);
  console.log(`  Failures:    ${failures.length}`);
  if (failures.length) {
    console.log('\nFailures:');
    for (const f of failures) console.log(`  - [${f.id}] ${f.ethnicity}: ${f.error}`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
