#!/usr/bin/env node
// Scrapes Wikipedia "Notable people" sections (or linked "List of X people"
// articles) for each ethnicity in `ethniclist` and stores up to N rows per
// group in `ethnic_examples` table.
//
// Idempotent: running again skips groups that already have wikipedia-source
// rows, unless --refresh is passed.
//
// Required env:
//   DATABASE_URL              SQL Server Prisma URL
//
// Flags:
//   --limit N                 Only process N ethnicities (default: all)
//   --start "Name"            Resume from this ethnicity (alphabetical)
//   --max-per-group N         Cap people per group (default: 100)
//   --dry-run                 Parse but do NOT write to DB
//   --refresh                 Re-scrape groups that already have rows (deletes existing wiki rows first)
//   --only-id N               Only this ethnic ID (for debugging single rows)

import { PrismaClient } from '@prisma/client';
import * as cheerio from 'cheerio';

const WIKI_BASE = 'https://en.wikipedia.org';
const REST_HTML = (title) => `${WIKI_BASE}/api/rest_v1/page/html/${encodeURIComponent(title)}`;
const USER_AGENT = 'EthnicEroticBot/1.0 (https://ethnicerotic.com; admin@agaveis.com) Node/22';
const REQUEST_DELAY_MS = 250; // ~4 req/sec — conservative for Wikipedia

const args = process.argv.slice(2);
const flag = (n) => args.includes(n);
const flagVal = (n) => {
  const i = args.indexOf(n);
  return i >= 0 && i + 1 < args.length ? args[i + 1] : undefined;
};
const LIMIT = parseInt(flagVal('--limit') || '0') || 0;
const START_FROM = flagVal('--start');
const MAX_PER_GROUP = parseInt(flagVal('--max-per-group') || '100');
const DRY_RUN = flag('--dry-run');
const REFRESH = flag('--refresh');
const ONLY_ID = flagVal('--only-id') ? parseInt(flagVal('--only-id')) : null;

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function pageTitleFromUrl(url) {
  if (!url) return null;
  // Match /wiki/Title or /wiki/Title#section
  const m = url.match(/\/wiki\/([^#?]+)/);
  if (!m) return null;
  return decodeURIComponent(m[1]).replace(/_/g, ' ');
}

async function fetchPageHtml(title) {
  const res = await fetch(REST_HTML(title), {
    headers: { 'User-Agent': USER_AGENT, Accept: 'text/html' },
  });
  if (!res.ok) {
    if (res.status === 404) return null;
    throw new Error(`Wikipedia returned ${res.status} for "${title}"`);
  }
  return res.text();
}

// Find a "Notable people" / "Notable [adjective]" section heading and return
// the HTML between that heading and the next heading at the same or higher
// level. Also catches the common variants like "Notable Abazins".
function extractNotableSection($) {
  const headings = $('h2, h3, h4').toArray();
  for (const h of headings) {
    const id = ($(h).attr('id') || '').toLowerCase();
    const text = $(h).text().toLowerCase().trim();
    if (
      /^notable/.test(id) ||
      /^notable/.test(text) ||
      id === 'notable_people' ||
      text.includes('notable')
    ) {
      // Collect everything until the next heading at same or higher level
      const tag = h.tagName.toLowerCase();
      const stopAt = tag === 'h2' ? ['h2'] : tag === 'h3' ? ['h2', 'h3'] : ['h2', 'h3', 'h4'];
      const html = [];
      let next = h.nextSibling;
      while (next) {
        if (next.type === 'tag' && stopAt.includes(next.tagName.toLowerCase())) break;
        html.push($.html(next));
        next = next.nextSibling;
      }
      return html.join('');
    }
  }
  return null;
}

// Wikipedia REST API uses `./PageName` (relative-to-page) for internal links;
// the regular endpoint uses `/wiki/PageName`. Accept both, normalize to title.
function hrefToTitle(href) {
  if (!href) return null;
  if (href.startsWith('./')) {
    return decodeURIComponent(href.slice(2).split('#')[0].split('?')[0]).replace(/_/g, ' ');
  }
  if (href.startsWith('/wiki/')) {
    return decodeURIComponent(href.slice(6).split('#')[0].split('?')[0]).replace(/_/g, ' ');
  }
  return null;
}

function titleToWikiUrl(title) {
  return `${WIKI_BASE}/wiki/${encodeURIComponent(title.replace(/ /g, '_'))}`;
}

// Look for a hatnote / see-also link to "List of [...] people". When present
// that page is the goldmine; the main ethnic-group page usually has nothing.
function findListOfPeoplePage($) {
  const candidates = new Set();
  $('a').each((_, a) => {
    const title = hrefToTitle($(a).attr('href') || '');
    if (!title) return;
    if (title.includes(':')) return; // skip namespace pages
    if (/^list of .+ (people|americans|britons|canadians|australians|individuals|persons|scots)$/i.test(title)) {
      candidates.add(title);
    }
  });
  return [...candidates].sort((a, b) => a.length - b.length)[0] || null;
}

// Strip Wikipedia structural noise that pollutes the <li> count.
function stripNoise($) {
  $('.navbox, .navbox-inner, .toc, .reference, sup.reference, .infobox, .sistersitebox, .hatnote, .mw-editsection, .references, table.metadata, .ambox, .navigation-not-searchable').remove();
}

// Parse <li> items in a section into { name, url, description } records.
function parseListItems($, sectionHtml) {
  const $$ = cheerio.load(sectionHtml);
  stripNoise($$);
  const items = [];
  $$('li').each((_, li) => {
    const $li = $$(li);
    if ($li.parents('li').length > 0) return; // top-level only
    const firstLink = $li.find('a').first();
    if (!firstLink.length) return;
    const href = firstLink.attr('href') || '';
    const title = hrefToTitle(href);
    if (!title) return;
    if (title.includes(':')) return;          // skip File:/Special:/etc.
    if (href.includes('#cite_note')) return;
    const name = firstLink.text().trim();
    if (!name || name.length < 2 || name.length > 200) return;

    const fullText = $li.text().trim().replace(/\s+/g, ' ');
    // Require the <li> to have descriptive text beyond just the name —
    // filters out nav items, cross-references, and section indices.
    if (fullText.length < name.length + 10) return;

    let description = fullText;
    if (fullText.startsWith(name)) {
      description = fullText.substring(name.length).replace(/^[\s,–\-—:()]+/, '').trim();
    }
    if (description.length > 480) description = description.substring(0, 477) + '…';
    items.push({
      name,
      url: titleToWikiUrl(title),
      description: description || null,
    });
  });
  return items;
}

// Generate candidate Wikipedia page titles for an ethnicity, in priority order.
function candidateTitles(ethnic) {
  const out = [];
  const seen = new Set();
  const push = (t) => { if (t && !seen.has(t)) { seen.add(t); out.push(t); } };
  if (ethnic.Wiki) {
    const fromUrl = pageTitleFromUrl(ethnic.Wiki);
    if (fromUrl) push(fromUrl);
  }
  const e = ethnic.Ethnicity;
  if (e) {
    push(`${e} people`);     // "Japanese people", "Yoruba people", "Scots people"
    push(e);                 // "Japanese", "Yoruba", "Scots"
    // Singular form for groups stored as plural
    if (e.endsWith('s') && e.length > 4) {
      const singular = e.slice(0, -1);
      push(`${singular} people`);
      push(singular);
    }
  }
  return out;
}

// Generate "List of X" page candidates — these often have many more entries
// than the main ethnic-group page's notable section.
function listPageCandidates(ethnic) {
  const out = [];
  const seen = new Set();
  const push = (t) => { if (t && !seen.has(t)) { seen.add(t); out.push(t); } };
  const e = ethnic.Ethnicity;
  if (!e) return out;
  push(`List of ${e}`);            // "List of Scots"
  push(`List of ${e} people`);     // "List of Japanese people"
  if (e.endsWith('s') && e.length > 4) {
    const singular = e.slice(0, -1);
    push(`List of ${singular} people`);
    push(`List of ${singular}s`);
  }
  return out;
}

async function scrapeForEthnicity(ethnic) {
  const titles = candidateTitles(ethnic);
  if (titles.length === 0) return { items: [], reason: 'no title candidates' };

  // Step 1: try each candidate title until one returns a real article
  let html = null;
  let resolvedTitle = null;
  let resolvedUrl = null;
  for (const title of titles) {
    try {
      const res = await fetchPageHtml(title);
      if (res) {
        html = res;
        resolvedTitle = title;
        resolvedUrl = titleToWikiUrl(title);
        break;
      }
    } catch {
      // try next candidate
    }
    await sleep(REQUEST_DELAY_MS);
  }
  if (!html) return { items: [], reason: `no Wikipedia page found (tried ${titles.length})` };
  const $ = cheerio.load(html);

  // Step 2: try direct "List of X" title guesses — most reliable when the list
  // page exists (gives 100s of entries vs the inline section's 5-20).
  let items = [];
  for (const listTitle of listPageCandidates(ethnic)) {
    await sleep(REQUEST_DELAY_MS);
    let listHtml = null;
    try {
      listHtml = await fetchPageHtml(listTitle);
    } catch {
      continue;
    }
    if (listHtml) {
      const $list = cheerio.load(listHtml);
      const candidates = parseListItems($list, $list('body').html() || '');
      if (candidates.length > items.length) items = candidates;
      if (items.length >= MAX_PER_GROUP) break;
    }
  }

  // Step 3: try inline-link discovery on the main page as a secondary path
  if (items.length < 5) {
    const inlineListPage = findListOfPeoplePage($);
    if (inlineListPage) {
      await sleep(REQUEST_DELAY_MS);
      let listHtml = null;
      try {
        listHtml = await fetchPageHtml(inlineListPage);
      } catch {}
      if (listHtml) {
        const $list = cheerio.load(listHtml);
        const candidates = parseListItems($list, $list('body').html() || '');
        if (candidates.length > items.length) items = candidates;
      }
    }
  }

  // Step 4: fall back to inline "Notable people" section on the main page.
  if (items.length === 0) {
    const sectionHtml = extractNotableSection($);
    if (sectionHtml) {
      items = parseListItems($, sectionHtml);
    }
  }

  // Cap and dedupe
  const seen = new Set();
  const deduped = [];
  for (const it of items) {
    const key = it.name.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    deduped.push(it);
    if (deduped.length >= MAX_PER_GROUP) break;
  }

  return {
    items: deduped,
    reason: deduped.length === 0 ? 'no parseable items' : null,
    resolvedTitle,
    resolvedUrl,
  };
}

async function main() {
  if (!process.env.DATABASE_URL) {
    console.error('Missing env: DATABASE_URL');
    process.exit(1);
  }

  const prisma = new PrismaClient();
  try {
    const where = { Ethnicity: { not: null } };
    if (START_FROM) where.Ethnicity = { ...where.Ethnicity, gte: START_FROM };
    if (ONLY_ID) where.ID = ONLY_ID;

    const ethnicities = await prisma.ethniclist.findMany({
      where,
      orderBy: { Ethnicity: 'asc' },
      take: LIMIT > 0 ? LIMIT : undefined,
      select: { ID: true, Ethnicity: true, Wiki: true },
    });

    console.log(`\n${ethnicities.length} ethnicities to process (Wiki URL backfilled when missing)`);
    if (DRY_RUN) console.log('DRY RUN — no DB writes\n');

    let totalSaved = 0;
    let totalSkipped = 0;
    const failures = [];

    for (let i = 0; i < ethnicities.length; i++) {
      const e = ethnicities[i];
      process.stdout.write(`[${i + 1}/${ethnicities.length}] ${e.Ethnicity.padEnd(40)} `);

      // Skip if already has wiki rows (unless --refresh)
      if (!REFRESH && !DRY_RUN) {
        const existing = await prisma.ethnic_examples.count({
          where: { ethnic_id: e.ID, source_type: 'wikipedia' },
        });
        if (existing > 0) {
          console.log(`(skip — has ${existing})`);
          totalSkipped++;
          continue;
        }
      }

      try {
        const { items, reason, resolvedUrl } = await scrapeForEthnicity(e);
        // Backfill Wiki URL on the ethniclist row if we resolved a real article and it was missing
        if (!DRY_RUN && resolvedUrl && !e.Wiki) {
          await prisma.ethniclist.update({
            where: { ID: e.ID },
            data: { Wiki: resolvedUrl },
          });
        }
        if (items.length === 0) {
          console.log(`(0 — ${reason})`);
          await sleep(REQUEST_DELAY_MS);
          continue;
        }
        if (!DRY_RUN) {
          if (REFRESH) {
            await prisma.ethnic_examples.deleteMany({
              where: { ethnic_id: e.ID, source_type: 'wikipedia' },
            });
          }
          await prisma.ethnic_examples.createMany({
            data: items.map((it) => ({
              ethnic_id: e.ID,
              name: it.name,
              known_for: it.description ? it.description.substring(0, 500) : null,
              reference_url: it.url,
              source_type: 'wikipedia',
              is_adult: false,
            })),
          });
        }
        totalSaved += items.length;
        console.log(`✓ ${items.length} people`);
      } catch (err) {
        console.log(`✗ ${err.message}`);
        failures.push({ id: e.ID, name: e.Ethnicity, error: err.message });
      }

      await sleep(REQUEST_DELAY_MS);
    }

    console.log(`\n${'═'.repeat(60)}`);
    console.log(`Done.`);
    console.log(`  Saved:    ${totalSaved} people across ${ethnicities.length - totalSkipped - failures.length} groups`);
    console.log(`  Skipped:  ${totalSkipped} groups (already had data)`);
    console.log(`  Failures: ${failures.length}`);
    if (failures.length) {
      console.log('\nFirst 10 failures:');
      for (const f of failures.slice(0, 10)) console.log(`  [${f.id}] ${f.name}: ${f.error}`);
    }
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error('Fatal:', e.message);
  process.exit(1);
});
