# Reproduce

The pipeline runs end-to-end from a SQL Server `ethniclist` source table to output configurations (CSV + JSONL) suitable for the [HuggingFace Datasets release](https://huggingface.co/datasets/EthnicErotic/phenotype-catalog). Each stage is idempotent, source-attributed, and re-runnable. The dataset rows reference back to the live catalog at [ethnicerotic.com](https://ethnicerotic.com/methodology). Archived releases have a [concept DOI](https://doi.org/10.5281/zenodo.20075616), which always resolves to the newest version.

## What's in the repository

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
   "List of X people" Wikipedia article                               LLM-synthesized 300-450w prose
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

# 3. Vision-LLM analysis
node scripts/analyze-images-via-bedrock.mjs --concurrency=8 --max-budget-usd=<cap>

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

## Reproducibility notes

- **Bedrock model ID.** The script defaults to `us.anthropic.claude-sonnet-4-6` (the inference profile, not the bare model ID). Bare model IDs return `ValidationException: Invocation with on-demand throughput isn't supported`. List active profiles via `aws bedrock list-inference-profiles --region us-east-1`.

- **AWS SDK credentials on Windows.** The default credential chain on some Windows configurations resolves to stale credentials and produces `"The security token included in the request is invalid"`, which sounds like an expired token but is actually a chain-resolution issue. The script uses `fromIni()` from `@aws-sdk/credential-provider-ini` to force `~/.aws/credentials` and bypass the broken default chain. If you hit this on a different platform, replace with whichever provider matches your auth setup.

- **Wikipedia rate limits.** `upload.wikimedia.org` rate-limits aggressively per source IP. We tested 250ms between fetches (= 4 req/sec) and still hit 429s in batches. 500ms (= 2 req/sec) is sustainable. Use a single global gate, not per-worker delays.

- **5MB per-image cap.** Bedrock vision input is capped at 5MB per image. ~3 of 6,243 Wikipedia images (uncompressed JPEGs) exceed this; the script logs and skips them.

- **`raw_json` column not redistributed.** Each row in `ethnic_image_analysis` has a `raw_json` column with the model's complete JSON response for audit purposes. This is intentionally **excluded** from the HuggingFace export (would 5x the dataset size for marginal value); the structured columns capture the same information cleanly.

- **Determinism.** The exports (CSV / JSONL files) are deterministic given the same source database state. The vision-LLM step is **not** deterministic (model temperature is non-zero); we make no claim that re-running the analysis produces bit-identical outputs row-by-row, but per-group aggregations are stable to within a few percentage points across runs.
