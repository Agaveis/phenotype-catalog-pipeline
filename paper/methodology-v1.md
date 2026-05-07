# A Vision-Grounded Per-Image Phenotype Dataset Across 239 Ethnic Groups: Construction, Caveats, and Release

**Jason Jacoby**
AgaveIS
admin@agaveis.com

**DOI:** [10.5281/zenodo.20075617](https://doi.org/10.5281/zenodo.20075617)
**Dataset:** https://huggingface.co/datasets/EthnicErotic/phenotype-catalog
**Code:** https://github.com/Agaveis/phenotype-catalog-pipeline
**License:** CC BY 4.0
**Version:** 2.0 (2026-05-07)

---

## Abstract

We release **PhenotypeCatalog v2**, a public dataset of 5,668 per-image phenotype observations across 239 ethnic groups, constructed entirely from public-domain Wikipedia photographs of notable people. Each observation is the structured output of a vision language model (Anthropic Claude Sonnet 4.6 via AWS Bedrock) over 14 phenotype fields, including Fitzpatrick skin type, hair color/texture/pattern, eye color/shape (with epicanthic-fold detection), facial features, build, image quality, and a model-reported confidence score. The dataset accompanies a 484-row ethnographic catalog with synthesized phenotype profiles (484/484 groups) and aggregated observed-distribution summaries (209/484 groups). Source attribution is preserved at the row level via Wikipedia URLs, enabling per-image license verification and audit. We document explicit limitations — most importantly, that "Wikipedia notable people" is a non-population-representative sample biased toward male and public-life subjects — and position the dataset as a complement to existing fairness benchmarks (FairFace, BUPT-Balancedface) rather than a replacement. Intended uses include bias auditing of vision systems, Fitzpatrick-balanced training subsets, and anthropological reference. The dataset is **not** appropriate for individual classification.

---

## 1. Introduction

Demographic bias auditing of computer-vision systems requires phenotype-balanced evaluation data, but the available datasets cluster at coarse race buckets — typically four to seven categories — rather than finer ethnographic grain. The widely-used FairFace dataset (Karkkainen & Joo, 2021) provides seven race buckets across roughly 100,000 images; BUPT-Balancedface (Wang et al., 2020) similarly aggregates to four. These resources are valuable but blind to within-bucket variance: a single "Asian" or "African" label compresses real and meaningful phenotype distinctions, which limits the diagnostic resolution of any audit built on them.

Constructing a finer-grained dataset directly is expensive: crowdworker annotation introduces its own biases (Buolamwini & Gebru, 2018, document this extensively for gender), and most candidate image sources lack the per-image license clarity required for redistribution. We address this with a different construction recipe:

1. **Source images from public-domain Wikipedia photographs** of notable people, sourced via each ethnic group's "List of {Ethnicity} people" article and its referenced biographies. Per-image license is verifiable through the original Wikipedia URL.
2. **Annotate via vision language model** (Anthropic Claude Sonnet 4.6) using a fixed structured prompt that produces 14 phenotype fields plus model-reported confidence and image quality.
3. **Aggregate per-group with deterministic SQL** (no LLM), surfacing sample size, source breakdown, Fitzpatrick distribution, hair/eye/epicanthic-fold distributions, and explicit sample-bias caveats.

The resulting dataset (5,668 image-level rows + 209 per-group aggregations + 484 group-level metadata rows) is released under CC BY 4.0 alongside the source pipeline as open code.

We make no claim that the dataset is population-representative. The Wikipedia "notable people" sampling frame is the dominant source of bias, and we discuss it explicitly in §6. Our position is that surfacing this bias through structured per-image rows with explicit source URLs and confidence scores is more useful than burying it inside aggregated coarse-race labels.

### Contributions

1. A publicly-released structured per-image phenotype dataset at unusual ethnographic grain (239 groups, mean ~24 images/group).
2. A reproducible pipeline (Wikipedia scrape → image URL discovery → vision-LLM annotation → aggregation) released as open code.
3. An empirically-grounded discussion of the failure modes specific to vision-LLM phenotype annotation: source skew, self-reported confidence as a soft signal, and the "available image quality" bucket bias.

---

## 2. Related Work

**Fitzpatrick skin-type scale.** Our skin-tone field uses the Fitzpatrick (1988) classification, originally developed for sun-reactivity assessment but now widely adopted as the de-facto skin-tone vocabulary in computer-vision fairness work. We use the I-VI scale and accept ranges (e.g., "Type II-III") as valid responses where the model judges a single bin to be over-precise.

**Fairness benchmarks for face attribute systems.** Buolamwini & Gebru (2018, *Gender Shades*) demonstrated that commercial gender classification systems exhibit substantial accuracy disparity across phenotype subgroups, motivating subsequent dataset releases. FairFace (Karkkainen & Joo, 2021) provides ~108K face images balanced across seven race buckets, two genders, and nine age buckets. BUPT-Balancedface (Wang et al., 2020) similarly addresses race-imbalance for face recognition training. These resources are foundational to the present work; we view ours as complementary rather than competitive — coarser per-image label space, but finer ethnographic grain, with explicit source attribution.

**Vision-LLM as annotator.** Using a vision-capable language model as a structured annotator is a recent pattern. We do not claim novelty here; we document one full pipeline at scale, with the cost numbers, failure modes, and prompt details that are typically omitted from blog posts.

**Dataset distribution platforms.** The release uses HuggingFace Datasets (Lhoest et al., 2021), which provides a standardized loading interface and is indexed by Google Dataset Search.

---

## 3. Dataset Construction

The pipeline runs end-to-end from a SQL Server `ethniclist` source table to four output configurations (CSV + JSONL). Each stage is idempotent, source-attributed, and re-runnable.

### 3.1 Group-level catalog

The starting point is a curated 484-row catalog of ethnic groups, indexed by name with normalized columns for homeland, region, language, language ISO codes, country ISO codes, religion, and a Wikipedia URL where available. The taxonomy follows a standard continent → sub-region → ethnicity hierarchy (Americas, Europe, Africa, Asia, Oceania at the continent level; 23 sub-regions). This catalog predates the present work and is published as the `ethnicities` config of the dataset.

### 3.2 Notable-people scrape

For each group with a Wikipedia URL, we attempt to fetch the corresponding "List of {Ethnicity} people" article. When such an article exists, we extract names, short "known for" descriptors, birth/death years where surfaced, and per-person reference URLs. **291 of 484 groups** have at least one such article on Wikipedia; **193 do not** (typically small or obscure groups for which no list page has been authored). The scrape produced **13,094** people-rows total. This is published as the `notable_people` config.

### 3.3 Image URL discovery

For each scraped person, we follow the reference URL to that person's individual Wikipedia article and extract a representative image URL — preferring the article's lead `infobox` image, falling back to the first OpenGraph image. **6,243 of 13,094** persons (47.7%) have a discoverable Wikipedia image; the remaining ~52% have no infobox image (often pre-photography figures or low-prominence subjects with text-only articles).

We rate-limit the upload.wikimedia.org fetcher to 2 requests per second per source IP; tighter rates trigger HTTP 429 within batches.

### 3.4 Vision-LLM annotation

Each image with a discoverable URL is submitted to a vision language model with a fixed structured prompt asking for 14 phenotype fields plus a self-reported confidence score (0.0–1.0) and an image quality bucket (`high`/`medium`/`low`/`very_low`). The prompt explicitly instructs the model to:

- Use Fitzpatrick I–VI vocabulary for skin tone, accepting ranges where appropriate.
- Detect and report epicanthic-fold presence as a structured eye-shape sub-field.
- Treat the photograph as one observation of one person, not an ethnic stereotype prototype.
- Return `unknown` or empty for fields that cannot be assessed (e.g., build when only the head is visible).
- Surface obscurations (glasses, hat, makeup, partial-face) explicitly.

The model used is the Anthropic Claude Sonnet 4.6 inference profile on AWS Bedrock (`us.anthropic.claude-sonnet-4-6`). We chose Sonnet 4.6 over higher-tier alternatives because the task is short-context structured extraction; pilot runs showed no measurable accuracy lift from Opus-tier models on this prompt, and Sonnet's per-image cost is substantially lower.

Run statistics:
- **5,668** images successfully analyzed.
- **~575** images failed (load failures, model errors, parse failures); these are not in the released dataset.
- Concurrency: 4 simultaneous calls.
- Throughput: ~0.42 images/second (network-bound; the model call itself completes in ~1.5 seconds per image).
- **Total cost: $44.66 USD** (input tokens for image + prompt, output tokens for structured response, at Bedrock list pricing 2026-05-06).

The structured response is parsed and stored row-by-row; the original raw JSON is retained in the source database (column `ethnic_image_analysis.raw_json`) for audit but not included in the release.

### 3.5 Per-group aggregation

A deterministic SQL/JavaScript aggregator produces a per-group summary card from each group's image-observation rows. The aggregator is non-LLM and re-runnable. For each group with ≥3 image observations (209/484), it produces:

- Sample size and source breakdown.
- Quality split (high/medium/low/very_low percentages).
- Mean self-reported confidence.
- Fitzpatrick distribution (proportion of rows in each bin I–VI).
- Hair color distribution, hair texture distribution.
- Eye color distribution.
- Epicanthic-fold proportion (yes / no / partial).
- Conditional caveat lines:
  - **N < 10**: "small sample — interpret with caution"
  - **N < 25**: "modest sample"
  - **<30% high-quality**: "image quality is mixed"
  - **mean confidence < 0.55**: "low overall confidence"
  - **source breakdown 100% Wikipedia**: "Wikipedia notable people skews male and public-life — not population-representative"

These caveat lines are included as visible text in both the on-site rendering and in the dataset's `image_observed_distribution` column.

---

## 4. Schema

The release contains four configurations, each a separate `config_name` under HuggingFace's `datasets` API:

| Config | Rows | Description |
|---|---|---|
| `ethnicities` | 484 | One row per ethnic group |
| `atlas` | ~21 | Phenotype reference categories (eyes, lips, nose, hair, skin, body) |
| `notable_people` | 13,094 | Wikipedia-sourced people, joinable via `ethnic_id` |
| `image_observations` | 5,668 | Per-image phenotype rows, joinable to `notable_people` via `example_id` |

**`image_observations` columns** (the headline asset):

| Column | Type | Notes |
|---|---|---|
| `id`, `example_id`, `ethnic_id` | int | Identifiers and FKs |
| `ethnic_name`, `person_name` | string | Denormalized for direct use |
| `image_url`, `reference_url` | string | Source attribution at row level |
| `skin_tone` | string | Fitzpatrick I–VI, ranges allowed (e.g., `"II-III"`) |
| `skin_undertone` | string | `cool` / `warm` / `neutral` / descriptive |
| `hair_color` | string | Free text (e.g., `"dark brown"`, `"black with grey"`) |
| `hair_texture` | string | `straight` / `wavy` / `curly` / `coily` / etc. |
| `hair_pattern` | string | Free text (longer descriptor when present) |
| `eye_color` | string | `brown` / `hazel` / `blue` / `green` / etc. |
| `eye_shape` | string | Includes epicanthic-fold subfield |
| `facial_features` | string | Free-text prose |
| `build` | string | Body build descriptor when visible |
| `visible_extent` | string | Which body parts are visible |
| `image_quality` | string | `high` / `medium` / `low` / `very_low` |
| `obscurations` | string | Glasses, hat, makeup, partial-face, etc. |
| `confidence` | float | 0.0–1.0, model self-reported |
| `analysis_model` | string | Model identifier |
| `analyzed_at` | string | ISO-8601 timestamp |

The `ethnicities` config gains four columns in v2: `phenotype_profile` (synthesized prose, 484/484), `image_observed_distribution` (aggregated text, 209/484), `image_observed_at` (timestamp), and `notable_people_count` (denormalized for convenience).

---

## 5. Coverage and Statistics

| Metric | Value |
|---|---|
| Image observations | 5,668 |
| Distinct ethnic groups represented | 239 |
| Mean observations per represented group | 23.7 |
| Median observations per represented group | 14 |
| Largest group (by observations) | Punjabis (n=146) |
| Mean self-reported confidence | 0.67 |
| Quality split (high / medium / low / very_low) | 42% / 39% / 16% / 3% |
| Epicanthic-fold annotated proportion | ~22% (of observations where the field was assessable) |

**Sample size variance.** The 239 groups with image observations have unequal coverage. 209 have ≥3 observations (the threshold for aggregated `image_observed_distribution`); 30 are between 1 and 2. Filtering to `n ≥ 25` per group leaves ~70 groups suitable for stand-alone per-group statistical claims. This variance is structural — Wikipedia article density tracks population size, English-language coverage, and historical prominence, not actual ethnic-group population.

**Confidence and quality as filtering signals.** We recommend that downstream consumers apply at minimum the filter `image_quality IN ('high', 'medium')` (excluding ~19% of rows) and consider `confidence > 0.55` as an additional threshold for high-precision use cases. The released dataset includes all rows; we leave filtering to the consumer.

---

## 6. Limitations and Biases

### 6.1 Wikipedia source skew (primary)

The dominant bias in this dataset is the construction frame: "people Wikipedia has a list-of-X-people article for, with a photograph in their individual article." This sample is:

- **Gender-skewed male.** Public-life prominence on Wikipedia tilts male in most categories (politicians, scientists, athletes, historical figures). We did not measure the per-group gender split, but inspection of the data suggests overall male skew of roughly 70–75%.
- **Biased toward public life.** Scientists, politicians, entertainers, athletes, and historical figures are over-represented relative to the general population.
- **English-language coverage biased.** Groups with stronger English-Wikipedia presence have more image observations; this is loosely correlated with Anglophone diaspora size, not native-population size.
- **Photographic-era biased.** Pre-photography figures have no infobox image, so groups whose Wikipedia presence skews historical have lower image-observation coverage.

The aggregator surfaces this caveat textually whenever the source breakdown is 100% Wikipedia — which is currently every row. Future releases that incorporate user-submitted images or a second public-domain source (see §10) will dilute this skew.

### 6.2 Model self-report

The `confidence` field is the model's own estimate of its annotation quality. It is **not** external validation. Empirical correlation between `confidence` and ground-truth correctness has not been measured at scale on this prompt; treat it as a soft signal for filtering, not as a calibrated probability.

### 6.3 Aggregate-only intent

The dataset is structured per-image but is **not** intended for individual-level inference. Each row is one observation of one photograph. We do not endorse:

- Identification of individuals from these rows.
- Surveillance applications keyed on the image URLs.
- Profiling or matching of individuals by phenotype.

Each `image_observations` row's source URL is a public-domain Wikipedia photograph that already exists publicly; the dataset does not increase any individual's discoverability beyond what a Wikipedia search already provides. We surface this norm explicitly in the dataset card under "Out-of-scope uses."

### 6.4 Anglo-centric phenotype vocabulary

The 14 fields use English anthropological vocabulary (`Fitzpatrick III`, `wavy`, `epicanthic fold`). Self-identifications and exonyms in other languages are not always captured. Researchers working with non-English-speaking populations should treat the field values as approximate translations of locally-meaningful categories.

### 6.5 Sample size

209 of 484 groups have ≥3 observations. 275 groups have fewer than 3 (or none). Smaller groups should not be inferred from individual-image rows alone; the `image_observed_distribution` column is suppressed below the threshold for exactly this reason.

---

## 7. Intended Uses

We describe four use cases the dataset is designed to support, and one it explicitly is not.

### 7.1 Bias auditing of vision systems

Per-group fairness analysis becomes tractable when you have ground-truth structured labels keyed by ethnic-group identifier. A vision system's per-group performance can be measured against the `image_observations` rows directly: pass each `image_url` through the system under test, compare its output (skin tone, age, gender, etc.) against the dataset's structured fields, and report per-group accuracy. The `ethnic_id` column is the join key.

### 7.2 Fitzpatrick-balanced training subsets

The `skin_tone` column allows construction of Fitzpatrick-balanced training/evaluation subsets at higher granularity than the four-bucket race labels typical in existing benchmarks. We recommend constructing such subsets *within* the dataset's quality filter (`image_quality IN ('high', 'medium')`) for any training use.

### 7.3 Anthropological reference

The combination of `ethnicities` (structured group-level metadata) plus `notable_people` (Wikipedia-sourced examples) plus `image_observations` (per-image phenotype) supports anthropological survey work and educational use.

### 7.4 Multi-ethnic AI prompt grounding

Image-generation systems commonly default to phenotype-narrow outputs in the absence of explicit prompts. The synthesized `phenotype_profile` text on the `ethnicities` config provides editorial prose suitable for prompt-grounding multi-ethnic generation systems.

### 7.5 NOT for individual classification

We repeat the §6.3 caveat as a use restriction: this dataset describes ethnic groups in aggregate. It does not describe individuals as ethnic representatives. Individual-row classification, profiling, surveillance, or identification applications are explicitly out of scope.

---

## 8. Ethical Considerations

**Source legality.** All photographs are sourced from Wikipedia / Wikimedia Commons; per-image licenses vary (public domain, CC-BY-SA, various Creative Commons variants) but are uniformly permissive for derivative use with attribution. We redistribute *URLs*, not bytes; downstream consumers fetching the actual image data must comply with the per-image license at the source URL. Each row's `reference_url` field links to the originating Wikipedia article for license verification.

**Aggregate vs individual.** The `image_observations` rows are structured per-image, but the dataset's framing, aggregations (`image_observed_distribution`), and use restrictions (§7.5) are all aggregate-level. We considered whether to publish the per-image rows at all, given individual-identifiability concerns; we concluded that (a) the underlying photographs are already public on Wikipedia, (b) per-image rows are necessary for fairness-audit use cases that aggregate rows alone cannot support, and (c) explicit use restrictions in the dataset card constrain reuse direction.

**Ethnic-group taxonomy.** The 484-group taxonomy is a curatorial choice, not a natural kind. Some groups overlap (sub-groups of larger groups appear separately), some boundaries are contested, and the English-name canonicalization erases multilingual self-identifications. The taxonomy is a starting point for cross-group queries, not a definitive ethnographic ontology. Contributions and corrections are welcomed via the live catalog.

**Adult-content brand.** The publishing organization (`EthnicErotic`) operates an adult-creator platform alongside the catalog. The dataset itself is text-only and contains no adult content. We acknowledge that the brand may filter some downstream academic or institutional adoption; the dataset is published under CC BY 4.0 specifically to permit reuse and re-hosting under different attribution should adopters prefer.

---

## 9. Reproducibility

All construction code is open-sourced under Apache 2.0 at https://github.com/Agaveis/phenotype-catalog-pipeline. The repository contains the six pipeline stages, a Prisma schema excerpt for the three relevant database tables, the exact vision prompt with design notes, and a `.env.example` listing the required environment variables.

| Stage | Script |
|---|---|
| Wikipedia people scrape | `scripts/scrape-wikipedia-notable-people.mjs` |
| Image URL discovery | `scripts/enrich-image-urls-from-wikipedia.mjs` |
| Vision-LLM analysis | `scripts/analyze-images-via-bedrock.mjs` |
| Per-group aggregation | `scripts/aggregate-image-observations.mjs` |
| HuggingFace export | `scripts/build-hf-dataset.mjs` |
| Phenotype-profile drafting (group-level) | `scripts/draft-phenotype-profiles-via-claude.mjs` |

The Bedrock analysis script accepts `--concurrency` and `--limit` flags for batch testing. Authentication uses `fromIni()` from `@aws-sdk/credential-provider-ini` to avoid the default credential chain's stale-resolution failure mode on Windows hosts.

The dataset exports are deterministic: same input data + same scripts = same CSV/JSONL outputs (modulo timestamp fields). The release manifest at `huggingface-dataset/manifest.json` records the schema version (currently 2), generation timestamp, row counts, and per-config coverage statistics.

**Replication pre-requisites:**

- AWS credentials with Bedrock access in `us-east-1` (the Sonnet 4.6 inference profile is region-pinned).
- Anthropic Claude Sonnet 4.6 model access enabled in the AWS account.
- A SQL Server connection to the source `ethniclist` table, or a substitute group taxonomy.
- ~$45 USD in Bedrock vision inference budget for the full 5,668-image run.
- HuggingFace CLI authenticated to a writable dataset repository.

---

## 10. Future Work

**Second-source diversification.** The dominant bias is the Wikipedia source frame (§6.1). Two paths to dilute it:

1. **User-submitted images** under a community-contribution license. The live catalog at ethnicerotic.com plans to add a community-image submission flow; rows from that source would carry `source_type = 'community'` and broaden the gender / public-life / photographic-era distribution.
2. **A second public-domain corpus.** Adult-performer databases (e.g., IAFD) provide a different set of per-individual photographs with phenotype labels, biased differently from Wikipedia. Inclusion is being scoped; the source-attribution column already exists to support multiple sources cleanly.

**Validation of model self-report.** A subset of the `image_observations` rows could be re-annotated by human labelers and the calibration of `confidence` measured directly. We have not done this work and believe it would improve the dataset's utility for fairness-audit applications.

**Methodology generalization.** The pipeline is not specific to the ethnic-group taxonomy used here. The same Wikipedia-scrape → image-discovery → vision-LLM-annotation → SQL-aggregation pipeline can be adapted to any other group taxonomy with Wikipedia coverage (occupation, nationality, historical era, etc.). We invite replication.

---

## References

Buolamwini, J., & Gebru, T. (2018). Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification. *Proceedings of Machine Learning Research*, 81, 77–91. (Conference on Fairness, Accountability and Transparency.)

Fitzpatrick, T. B. (1988). The Validity and Practicality of Sun-Reactive Skin Types I Through VI. *Archives of Dermatology*, 124(6), 869–871.

Karkkainen, K., & Joo, J. (2021). FairFace: Face Attribute Dataset for Balanced Race, Gender, and Age for Bias Measurement and Mitigation. *Proceedings of the IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)*, 1548–1558.

Lhoest, Q., Villanova del Moral, A., Jernite, Y., et al. (2021). Datasets: A Community Library for Natural Language Processing. *Proceedings of the 2021 Conference on Empirical Methods in Natural Language Processing: System Demonstrations*, 175–184.

Wang, M., Deng, W., et al. (2020). Mitigating Bias in Face Recognition Using Skewness-Aware Reinforcement Learning. (BUPT-Balancedface and RFW datasets.) *Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)*.

---

