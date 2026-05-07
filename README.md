# phenotype-catalog-pipeline

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.20075617.svg)](https://doi.org/10.5281/zenodo.20075617)

Reproducibility code for the **PhenotypeCatalog** dataset — a public dataset of 5,668 per-image phenotype observations across 239 ethnic groups, constructed from public-domain Wikipedia photographs.

- **Dataset (CC BY 4.0):** https://huggingface.co/datasets/EthnicErotic/phenotype-catalog
- **Methodology paper:** [`paper/methodology-v1.pdf`](paper/methodology-v1.pdf) · DOI [10.5281/zenodo.20075617](https://doi.org/10.5281/zenodo.20075617)
- **Live source catalog:** https://ethnicerotic.com
- **Browse by region:** https://ethnicerotic.com/world

The pipeline runs end-to-end from a SQL Server `ethniclist` source table to four output configurations (CSV + JSONL) suitable for HuggingFace Datasets release. Each stage is idempotent, source-attributed, and re-runnable.

## What's in this repo

| Path | Purpose |
|---|---|
| `scripts/scrape-wikipedia-notable-people.mjs` | Scrape "List of {Ethnicity} people" Wikipedia articles → 13K people-rows |
| `scripts/enrich-image-urls-from-wikipedia.mjs` | For each scraped person, resolve a Wikipedia infobox / OG image URL |
| `scripts/analyze-images-via-bedrock.mjs` | Vision-LLM analysis (Claude Sonnet 4.6 on AWS Bedrock) → 14 structured fields per image |
| `scripts/aggregate-image-observations.mjs` | Deterministic per-group SQL aggregation → group-level `image_observed_distribution` |
| `scripts/draft-phenotype-profiles-via-claude.mjs` | Synthesize editorial-anthropology phenotype prose per group |
| `scripts/build-hf-dataset.mjs` | Export the live database as CSV + JSONL for HuggingFace upload |
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
    ethnic_image_analysis (5,668 rows)
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

The `build-hf-dataset.mjs` script produces four CSV files (and matching JSONL) at `huggingface-dataset/data/`:

| Config | Rows | Description |
|---|---|---|
| `ethnicities.csv` | 484 | Group-level metadata + synthesized phenotype profile + aggregated image-observed distribution |
| `atlas.csv` | ~21 | Phenotype reference categories (eyes, lips, nose, hair, skin, body) — auxiliary, not produced by this pipeline |
| `notable_people.csv` | 13,094 | Wikipedia-sourced people, ethnic-grouped, joinable to `ethnicities` via `ethnic_id` |
| `image_observations.csv` | 5,668 | Per-image phenotype rows with 14 structured fields each |

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

If you use this code or the resulting dataset, please cite:

```bibtex
@misc{phenotype_catalog_pipeline_2026,
  title         = {phenotype-catalog-pipeline: Wikipedia-sourced per-image phenotype observations across 239 ethnic groups},
  author        = {Jacoby, Jason},
  year          = {2026},
  publisher     = {Zenodo},
  version       = {v1.0.0},
  doi           = {10.5281/zenodo.20075617},
  url           = {https://doi.org/10.5281/zenodo.20075617}
}

@misc{ethnicerotic_phenotype_catalog_2026,
  title         = {PhenotypeCatalog: a public dataset of 5,668 per-image phenotype observations},
  author        = {Jacoby, Jason},
  year          = {2026},
  publisher     = {Hugging Face},
  url           = {https://huggingface.co/datasets/EthnicErotic/phenotype-catalog},
  note          = {Pipeline DOI: \url{https://doi.org/10.5281/zenodo.20075617}; Source: \url{https://ethnicerotic.com}}
}
```

## Contact

- Issues / contributions: https://github.com/Agaveis/phenotype-catalog-pipeline/issues
- Dataset feedback: https://huggingface.co/datasets/EthnicErotic/phenotype-catalog/discussions
- Live catalog: https://ethnicerotic.com
