# Data

The dataset (CC BY 4.0) is published at [EthnicErotic/phenotype-catalog](https://huggingface.co/datasets/EthnicErotic/phenotype-catalog). The HuggingFace dataset rows reference back to the live catalog at [ethnicerotic.com](https://ethnicerotic.com/atlas). Archived releases have a [concept DOI](https://doi.org/10.5281/zenodo.20075616), which always resolves to the newest version.

## Data outputs

The `build-hf-dataset.mjs` script produces six CSV files (and matching JSONL) at `huggingface-dataset/data/`, plus the nested `vocabularies.jsonl`. Row counts measured 2026-08-31:

| Config | Rows | Description |
|---|---|---|
| `ethnicities.csv` | 1,779 | Group-level metadata + synthesized phenotype profile + aggregated image-observed distribution |
| `atlas.csv` | ~21 | Phenotype reference categories (eyes, lips, nose, hair, skin, body); auxiliary, not produced by this pipeline |
| `notable_people.csv` | 24,406 | Wikipedia-sourced people, ethnic-grouped, joinable to `ethnicities` via `ethnic_id` (15,228 carry an image URL) |
| `image_observations.csv` | 5,478 | Per-image phenotype rows with 14 structured fields each, spanning 233 groups |
| `reader_verdicts.csv` | 560 | Reader likeness judgements from 525 distinct raters, identifiers stripped |
| `vocabulary_dimensions.csv` | 196 | Flat view of the 22 controlled vocabularies, with observability and reliability columns |

See the [dataset card](https://huggingface.co/datasets/EthnicErotic/phenotype-catalog) for full column definitions and limitations.

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

On 2026-08-31 the vocabulary analysis was [re-run](https://ethnicerotic.com/devlog/a-vocabulary-tested-for-reliability) over **196 portraits across 29
ethnic groups** with the identical prompt, and each fresh reading was compared
against the stored one, dimension by dimension, across the ten head-and-neck
families. It wrote nothing.

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

## Limitations

The dominant bias is the construction frame: **"people Wikipedia has a list-of-X-people article for, with a photograph in their individual article"**. This sample is gender-skewed male, biased toward public life (politicians, scientists, athletes, entertainers, historical figures), English-language-coverage-biased, and photographic-era-biased.

The aggregator surfaces this caveat textually whenever the source breakdown is 100% Wikipedia, which is currently every row. Future releases that incorporate user-submitted images or a second public-domain source will dilute this skew.

See the dataset card and the methodology paper for the full limitations discussion.
