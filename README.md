# phenotype-catalog-pipeline

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.20075616.svg)](https://doi.org/10.5281/zenodo.20075616)

Reproducibility code and controlled vocabularies for the **PhenotypeCatalog** dataset: 1,779 indexed ethnic groups, 24,406 notable-people references, and 5,478 vision-grounded per-image phenotype observations spanning 233 groups, constructed from public-domain Wikipedia photographs. Counts measured 2026-08-31; the live dataset is the authority and these move.

- **Dataset (CC BY 4.0):** https://huggingface.co/datasets/EthnicErotic/phenotype-catalog
- **Methodology paper:** [`paper/methodology-v1.pdf`](paper/methodology-v1.pdf). It documents the **14-field** vision analysis of the corpus as it stood in May 2026, then 5,668 images. It does **not** describe the 22-vocabulary system introduced in v2.0.0; that is documented in this README and in `vocabularies/README.md`.
- **Archived releases (concept DOI):** [10.5281/zenodo.20075616](https://doi.org/10.5281/zenodo.20075616), which always resolves to the newest version.
- **Live source catalog:** https://ethnicerotic.com
- **Browse by region:** https://ethnicerotic.com/world

The pipeline runs end-to-end from a SQL Server `ethniclist` source table to four output configurations (CSV + JSONL) suitable for HuggingFace Datasets release. Each stage is idempotent, source-attributed, and re-runnable.

## What's in this repo

| Path | Purpose |
|---|---|
| `scripts/scrape-wikipedia-notable-people.mjs` | Scrape "List of {Ethnicity} people" Wikipedia articles into people-rows (24,406 as of 2026-08-31) |
| `scripts/enrich-image-urls-from-wikipedia.mjs` | For each scraped person, resolve a Wikipedia infobox / OG image URL |
| `scripts/analyze-images-via-bedrock.mjs` | Vision-LLM analysis (Claude Sonnet 4.6 on AWS Bedrock) → 14 structured fields per image |
| `scripts/aggregate-image-observations.mjs` | Deterministic per-group SQL aggregation → group-level `image_observed_distribution` |
| `scripts/draft-phenotype-profiles-via-claude.mjs` | Synthesize editorial-anthropology phenotype prose per group |
| `scripts/build-hf-dataset.mjs` | Export the live database as CSV + JSONL for HuggingFace upload |
| `vocabularies/*.json` | **22 controlled vocabularies**, one per anatomical category: 196 dimensions, 853 named values, each dimension carrying a cited scale and an observability block |
| `vocabularies/README.md` | The vocabulary meta-schema and the per-file index |
| `generated/` | Artifacts emitted from the vocabularies (prompt fragments, flat dimension tables) |
| `reliability/` | Measured reliability studies, with the raw per-dimension counts behind each summary |
| `prisma/schema.prisma` | Excerpt of the source schema (3 tables) |
| `prompts/phenotype-analysis-prompt.md` | The exact vision prompt sent to the model, with design notes |


## Controlled vocabularies (new in v2.0.0)

The v1.0.0 archive contained the 14-field pipeline and nothing else. **The 22
controlled vocabularies were pushed the day after that tag was cut, so they are
absent from DOI 10.5281/zenodo.20075617.** They are the substance of v2.0.0.

**22 files, 196 dimensions, 853 named values.** Every dimension declares a type
(99 ordinal, 91 categorical, 6 numeric), an ordered value list carrying an id, a
display name and a definition per value, a `scale_citation` (196 of 196 carry
one), and an `observability` block stating how well it reads from a single
photograph (120 high, 41 medium, 6 low, 29 not assessable), whether it needs an
unclothed subject, and the minimum visible extent it requires.

That observability contract is the part no comparable resource publishes.
Elements of Morphology defines head and face terms without saying which of them
can be coded from one image; these files answer that per dimension.

Three vocabularies (`penis`, `pubic-region`, `vulva`, 26 dimensions) are marked
`observations_source_policy: internal_only`. **They are never populated from
photographs.** Every one of their dimensions is also `not_assessable`, and the
analysis pipeline excludes them at two separate points. In a full corpus run over
2,665 portraits they held exactly zero rows.

| File | Category | UBERON | Dimensions | Values | Version |
|---|---|---|---|---|---|
| `arms.json` | arms | UBERON:0001460 | 7 | 25 | 1.0.0 |
| `body-hair.json` | body-hair | UBERON:0008811 | 8 | 46 | 1.0.0 |
| `body-shape.json` | body-shape | UBERON:0000468 | 16 | 76 | 1.0.0 |
| `breast.json` | breast | UBERON:0000310 | 14 | 62 | 1.0.0 |
| `butt.json` | butt | UBERON:0001783 | 7 | 24 | 1.0.0 |
| `ears.json` | ears | UBERON:0001690 | 8 | 29 | **1.1.0** |
| `eyes.json` | eyes | UBERON:0000970 | 12 | 66 | **1.1.0** |
| `face-proportions.json` | face-proportions | UBERON:0001456 | 7 | 31 | **1.1.0** |
| `feet.json` | feet | UBERON:0002387 | 7 | 27 | 1.0.0 |
| `hands.json` | hands | UBERON:0002398 | 7 | 27 | 1.0.0 |
| `head-hair.json` | head-hair | UBERON:0001037 | 8 | 60 | **1.1.0** |
| `head-shape.json` | head-shape | UBERON:0000033 | 4 | 15 | **1.1.0** |
| `jaw-and-chin.json` | jaw-and-chin | UBERON:0001684 | 8 | 29 | **1.1.0** |
| `legs.json` | legs | UBERON:0000978 | 7 | 27 | 1.0.0 |
| `lips-and-mouth.json` | lips-and-mouth | UBERON:0001833 | 10 | 43 | **1.1.0** |
| `neck.json` | neck | UBERON:0000974 | 7 | 25 | **1.1.0** |
| `nose.json` | nose | UBERON:0000004 | 14 | 59 | **1.1.0** |
| `penis.json` | penis (internal only) | UBERON:0000989 | 12 | 35 | 1.0.0 |
| `pubic-region.json` | pubic-region (internal only) | UBERON:0008337 | 5 | 24 | 1.0.0 |
| `skin.json` | skin | UBERON:0002097 | 8 | 46 | **1.1.0** |
| `torso.json` | torso | UBERON:0000915 | 11 | 46 | 1.0.0 |
| `vulva.json` | vulva (internal only) | UBERON:0000997 | 9 | 31 | 1.0.0 |

The ten files at 1.1.0 are the head-and-neck families, which gained a measured
reliability record. Value sets did not change in that bump, so a row coded
against 1.0.0 is coded identically against 1.1.0.

Named scales behind the head-and-neck dimensions include Fitzpatrick I to VI and
Glogau photoaging (skin), Hamilton and Norwood and Ludwig (hair loss), Duke-Elder
epicanthus and Sturm and Larsson iris genetics (eyes), Goode, Powell and
Humphreys, Rohrich, Gunter, Farkas, Tardy and Sheen (nose, where all 14
dimensions name a work), Mustarde and Furnas and the Shaffer earlobe GWAS (ears),
Riedel and Ellenbogen-Karlin (jaw and neck), Farkas and Ricketts (face
proportions), and Mallucci and Branford (lips). `head-shape` cites Boas (1912)
explicitly as an anti-typology caveat rather than as support.

## Test-retest reproducibility, one model, and NOT a validity study

On 2026-08-31 the vocabulary analysis was re-run over **196 portraits across 29
ethnic groups** with the identical prompt, and each fresh reading was compared
against the stored one, dimension by dimension, across the ten head-and-neck
families. It cost $5.39 and wrote nothing.

- Over dimensions **both readings answered**: 92.9% agreement.
- Counting a dimension one reading declined as a miss: **90.6%**. Both are given
  because the choice of denominator has reversed a conclusion on this corpus
  before.
- **73 of 84** rankable dimensions reach Cohen's kappa of 0.60 or better.
- **Three are marked uninformative** in the files themselves:
  `ears.helix_morphology` and `nose.deviation_axis` return one value for every
  portrait, and `ears.ear_axis` is kappa 0.000 at 99.3% raw agreement. High
  agreement, no information.

**What this is not.** It is one model agreeing with itself. That says the
instrument is stable, not that it is correct. **No human rater has scored these
images, and no inter-rater agreement exists for this vocabulary.** Do not cite
these numbers as validation, accuracy, or ground truth.

**Kappa is fragile here, and the files say so.** An earlier 78-portrait read of
the same corpus put six of these dimensions at kappa at or below zero; at 196
they read between 0.43 and 0.66. One dimension read a perfect 1.000 at n=72 and
0.535 at n=176. Every dimension that moved that far has chance agreement above
85%, where the (1 - pe) denominator is small enough that a handful of cells
dominates. Those dimensions carry `estimate_is_fragile` in the JSON.

## What this release is honest about

- **The vocabularies are a schema, not a dataset.** The published HuggingFace
  dataset still carries the legacy 14-field analysis over 5,478 images. A
  196-dimension corpus is not published here.
- **The methodology paper predates the vocabularies** and describes only the
  14-field analysis. It has not been rewritten.
- **The reliability study is reproducibility, not validity**: one model, one
  corpus, one re-read, no human rater.
- **Only the ten head-and-neck families were measured.** The body families have
  tables and a writer but almost no data: in a 2,665-portrait run, breast held 22
  rows across zero groups qualifying at n of 10 or more, butt 6, and feet 52.
- **The corpus is Wikipedia notable people** and carries every bias named under
  Limitations below. It is not a population sample, and no dimension here should
  be read as a population claim.
- **The vocabularies infer nothing about ancestry.** They describe what a
  photograph shows. There is no population axis anywhere in the schema, and
  running the mapping backwards, from a face to a population, is not a supported
  use of this work.

## Pipeline

```
                                    ┌─────────────────────────────────┐
                                    │  ethniclist (484 rows, curated) │
                                    └────────────────┬────────────────┘
                                                     │
                  ┌──────────────────────────────────┴──────────────────────────────────┐
                  │                                                                     │
                  ▼                                                                     ▼
   scrape-wikipedia-notable-people.mjs                                draft-phenotype-profiles-via-claude.mjs
   "List of X people" Wikipedia article                               LLM-synthesized 300–450w prose
                  │                                                                     │
                  ▼                                                                     ▼
       ethnic_examples (13,094 rows)                                      ethniclist.PhenotypeProfile
                  │
                  ▼
   enrich-image-urls-from-wikipedia.mjs
   Per-person infobox / OG image
                  │
                  ▼
       ethnic_examples.image_url (6,243 rows)
                  │
                  ▼
   analyze-images-via-bedrock.mjs
   Claude Sonnet 4.6 vision, structured JSON, 14 fields
                  │
                  ▼
    ethnic_image_analysis (5,668 rows)   <- row counts in this diagram are the original
                                          May 2026 run, not the current dataset
                  │
                  ▼
   aggregate-image-observations.mjs (no LLM, deterministic)
                  │
                  ▼
       ethniclist.ImageObservedDistribution (209 groups)

       ┌─────────────────────────────┐
       │   build-hf-dataset.mjs      │
       └──────────────┬──────────────┘
                      │
                      ▼
   data/{ethnicities,atlas,notable_people,image_observations}.{csv,jsonl}
                      │
                      ▼
   hf upload EthnicErotic/phenotype-catalog ./
```

## Quick start

### Prerequisites

- **Node.js 18+** for the pipeline scripts.
- **A SQL Server database** seeded with the schema in `prisma/schema.prisma`. The pipeline is not SQL-Server-specific; porting to PostgreSQL or MySQL is a column-type swap.
- **AWS account** with Bedrock access in `us-east-1` and the `us.anthropic.claude-sonnet-4-6` inference profile enabled.
- **HuggingFace CLI** (`hf`) authenticated to a writable dataset repository, only required for the final upload step.
- **A starting catalog** of ethnic groups in the `ethniclist` table (484 rows in our run; the pipeline works for any taxonomy with Wikipedia coverage).

### Setup

```bash
git clone https://github.com/Agaveis/phenotype-catalog-pipeline.git
cd phenotype-catalog-pipeline

# Install Prisma client
npm install @prisma/client @aws-sdk/client-bedrock-runtime @aws-sdk/credential-provider-ini

# Generate the Prisma client against the schema
npx prisma generate --schema=prisma/schema.prisma

# Configure environment
cp .env.example .env
# Edit .env with your DATABASE_URL and AWS credentials
```

### Run the pipeline

```bash
# 1. Scrape "List of X people" from Wikipedia for every group with a Wiki URL
node scripts/scrape-wikipedia-notable-people.mjs

# 2. For each person, resolve a Wikipedia image URL
node scripts/enrich-image-urls-from-wikipedia.mjs

# 3. Vision-LLM analysis (the expensive step — budget cap is your friend here)
node scripts/analyze-images-via-bedrock.mjs --concurrency=8 --max-budget-usd=50

# 4. Aggregate per-group distributions (deterministic, no LLM)
node scripts/aggregate-image-observations.mjs

# 5. (Optional) Synthesize per-group phenotype prose
node scripts/draft-phenotype-profiles-via-claude.mjs

# 6. Export to CSV/JSONL
node scripts/build-hf-dataset.mjs

# 7. Upload to HuggingFace
hf upload EthnicErotic/phenotype-catalog ./huggingface-dataset --repo-type=dataset
```

Each stage is idempotent: re-running a stage against rows that already have the relevant columns populated is a no-op (or at most a regenerate of the most recent row's content).

## Cost and runtime

| Stage | Time | Cost |
|---|---|---|
| Wikipedia people scrape | ~30 min | $0 |
| Image URL discovery | ~2 hours (rate-limited to 2 req/sec by Wikimedia) | $0 |
| Vision-LLM analysis (5,668 images, concurrency=4) | ~4 hours | **$44.66** |
| Per-group aggregation | <1 minute | $0 |
| Phenotype-profile synthesis (480 groups via local Claude Code) | ~75 min | $0 with Claude Max plan, ~$5 via API |
| HF export | <1 minute | $0 |

Total: roughly half a day of wall time, ~$45 in Bedrock spend, end-to-end.

## Reproducibility notes

- **Bedrock model ID.** The script defaults to `us.anthropic.claude-sonnet-4-6` (the inference profile, not the bare model ID). Bare model IDs return `ValidationException: Invocation with on-demand throughput isn't supported`. List active profiles via `aws bedrock list-inference-profiles --region us-east-1`.

- **AWS SDK credentials on Windows.** The default credential chain on some Windows configurations resolves to stale credentials and produces `"The security token included in the request is invalid"` — which sounds like an expired token but is actually a chain-resolution issue. The script uses `fromIni()` from `@aws-sdk/credential-provider-ini` to force `~/.aws/credentials` and bypass the broken default chain. If you hit this on a different platform, replace with whichever provider matches your auth setup.

- **Wikipedia rate limits.** `upload.wikimedia.org` rate-limits aggressively per source IP. We tested 250ms between fetches (= 4 req/sec) and still hit 429s in batches. 500ms (= 2 req/sec) is sustainable. Use a single global gate, not per-worker delays.

- **5MB per-image cap.** Bedrock vision input is capped at 5MB per image. ~3 of 6,243 Wikipedia images (uncompressed JPEGs) exceed this; the script logs and skips them.

- **`raw_json` column not redistributed.** Each row in `ethnic_image_analysis` has a `raw_json` column with the model's complete JSON response for audit purposes. This is intentionally **excluded** from the HuggingFace export (would 5x the dataset size for marginal value); the structured columns capture the same information cleanly.

- **Determinism.** The exports (CSV / JSONL files) are deterministic given the same source database state. The vision-LLM step is **not** deterministic (model temperature is non-zero); we make no claim that re-running the analysis produces bit-identical outputs row-by-row, but per-group aggregations are stable to within a few percentage points across runs.

## Data outputs

The `build-hf-dataset.mjs` script produces six CSV files (and matching JSONL) at `huggingface-dataset/data/`, plus the nested `vocabularies.jsonl`. Row counts measured 2026-08-31:

| Config | Rows | Description |
|---|---|---|
| `ethnicities.csv` | 1,779 | Group-level metadata + synthesized phenotype profile + aggregated image-observed distribution |
| `atlas.csv` | ~21 | Phenotype reference categories (eyes, lips, nose, hair, skin, body) — auxiliary, not produced by this pipeline |
| `notable_people.csv` | 24,406 | Wikipedia-sourced people, ethnic-grouped, joinable to `ethnicities` via `ethnic_id` (15,228 carry an image URL) |
| `image_observations.csv` | 5,478 | Per-image phenotype rows with 14 structured fields each, spanning 233 groups |
| `reader_verdicts.csv` | 560 | Reader likeness judgements from 525 distinct raters, identifiers stripped |
| `vocabulary_dimensions.csv` | 196 | Flat view of the 22 controlled vocabularies, with observability and reliability columns |

See the [dataset card](https://huggingface.co/datasets/EthnicErotic/phenotype-catalog) for full column definitions and limitations.

## Sample group pages

The HuggingFace dataset rows reference back to the live catalog at ethnicerotic.com. A few example destinations:

- https://ethnicerotic.com/ethnic/punjabis (largest sample in `image_observations`, n=146)
- https://ethnicerotic.com/ethnic/han-chinese
- https://ethnicerotic.com/ethnic/yoruba
- https://ethnicerotic.com/ethnic/ashkenazi-jews
- https://ethnicerotic.com/ethnic/quechuas
- https://ethnicerotic.com/ethnic/igbo
- https://ethnicerotic.com/ethnic/persians
- https://ethnicerotic.com/ethnic/japanese-people

Each page renders the synthesized phenotype profile, the aggregated observed distribution (where ≥3 images are available), and a list of notable-people references.

## Limitations

The dominant bias is the construction frame: **"people Wikipedia has a list-of-X-people article for, with a photograph in their individual article"**. This sample is gender-skewed male, biased toward public life (politicians, scientists, athletes, entertainers, historical figures), English-language-coverage-biased, and photographic-era-biased.

The aggregator surfaces this caveat textually whenever the source breakdown is 100% Wikipedia — which is currently every row. Future releases that incorporate user-submitted images or a second public-domain source will dilute this skew.

See the dataset card and the methodology paper for the full limitations discussion.

## License

Code in this repository: [Apache License 2.0](LICENSE).
The dataset itself: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — see the [dataset card](https://huggingface.co/datasets/EthnicErotic/phenotype-catalog) for details.
Image URLs in `notable_people.image_url` and `image_observations.image_url` reference Wikipedia / Wikimedia Commons content under their own per-image licenses; consult each row's `reference_url` before redistributing actual image bytes.

## Citation

If you use this code or the resulting dataset, please cite the **concept DOI** below, which always
resolves to the newest archived version. The v1.0.0 version DOI
([10.5281/zenodo.20075617](https://doi.org/10.5281/zenodo.20075617)) resolves to an archive that
predates the vocabularies and does not contain them, so cite it only if you specifically mean that
snapshot. Version DOIs: v1.0.0 is 10.5281/zenodo.20075617, v2.0.0 is [10.5281/zenodo.22200691](https://doi.org/10.5281/zenodo.22200691).

```bibtex
@misc{phenotype_catalog_pipeline_2026,
  title         = {phenotype-catalog-pipeline: controlled vocabularies and Wikipedia-sourced per-image phenotype observations},
  author        = {Jacoby, Jason},
  year          = {2026},
  publisher     = {Zenodo},
  version       = {v2.0.0},
  doi           = {10.5281/zenodo.20075616},
  url           = {https://doi.org/10.5281/zenodo.20075616}
}

@misc{ethnicerotic_phenotype_catalog_2026,
  title         = {PhenotypeCatalog: controlled vocabularies and vision-grounded per-image phenotype observations},
  author        = {Jacoby, Jason},
  year          = {2026},
  publisher     = {Hugging Face},
  url           = {https://huggingface.co/datasets/EthnicErotic/phenotype-catalog},
  note          = {Pipeline DOI: \url{https://doi.org/10.5281/zenodo.20075616}; Source: \url{https://ethnicerotic.com}}
}
```

## Contact

- Issues / contributions: https://github.com/Agaveis/phenotype-catalog-pipeline/issues
- Dataset feedback: https://huggingface.co/datasets/EthnicErotic/phenotype-catalog/discussions
- Live catalog: https://ethnicerotic.com
