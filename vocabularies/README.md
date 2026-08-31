# vocabularies/

Controlled medical/anthropological vocabularies for per-anatomy phenotype observation. Each file in this directory defines the structured dimensions, scales, and bucket values used to record per-image observations of one anatomical category.

The vision-LLM analysis prompt, the database schema, and the per-group aggregation logic are all auto-generated from these vocabulary files. Adding a new dimension means editing one JSON file and re-running the generator — there is no hand-written analysis prompt to maintain in parallel.

## Why a controlled vocabulary

Free-text phenotype descriptors are not reproducible, citable, or comparable across observations. Established medical and anthropological scales — Fitzpatrick I–VI for skin, Halls (1998) for breast shape, Regnault (1976) for breast ptosis, Hoffman for nipple morphology, Ferriman-Gallwey for body hair, Heath-Carter for somatotype, Andre Walker for hair texture — solve this problem by giving each phenotype dimension a fixed vocabulary of named buckets with peer-reviewed definitions.

This directory codifies those scales as machine-readable JSON. Downstream:

- **Vision-LLM prompt generation** — the analysis prompt for an atlas category is built from the scale's `values[]` array, so the model is constrained to valid bucket outputs rather than free-text approximations.
- **Database schema generation** — the Prisma columns for storing observations are derived from each `dimension`'s `type` and `values`. Adding a dimension produces an additive migration.
- **Per-group aggregation** — categorical and ordinal dimensions roll up into per-group distributions automatically.
- **Documentation** — the citation field on every scale + the definition field on every value makes each observation defensible to reviewers and citers.

## File structure

One JSON file per atlas category, named after the category in lowercase with hyphens (`breast.json`, `body-shape.json`, `head-hair.json`, etc.). Each file conforms to the meta-schema sketched below and contains:

```
{
  "atlas_category":  "<category-id>",
  "uberon_id":       "<UBERON:NNNNNNN>",     // anatomy ontology ID
  "fma_id":          "<FMA:NNNNN>",          // optional, complements UBERON
  "display_name":    "<human-readable>",
  "version":         "<semver>",
  "license":         "CC-BY-4.0",
  "description":     "<what this category covers>",
  "dimensions": [
    {
      "id":              "<dimension-id>",
      "display_name":    "<human-readable>",
      "type":            "categorical | ordinal | numeric | structured",
      "scale":           "<named-scale-id>",
      "scale_citation":  "<full citation>",
      "description":     "<what this dimension measures>",
      "values": [
        {
          "id":         "<value-id>",
          "display_name": "<human-readable>",
          "definition": "<peer-reviewed-or-cited definition>"
        }
      ],
      "observability": {
        "from_photograph":         "high | medium | low | not_assessable",
        "requires_unclothed":      true | false,
        "minimum_visible_extent":  "head_only | head_shoulders | torso | full_body",
        "notes":                   "optional caveat"
      }
    }
  ]
}
```

## Dimension types

- **`categorical`** — discrete unordered buckets. Example: breast shape (round / teardrop / athletic / slender / asymmetric / tuberous).
- **`ordinal`** — discrete ordered buckets with monotonic meaning. Example: ptosis grade (0 → 3, increasing severity). Aggregations preserve order.
- **`numeric`** — measurement on a continuous scale (cm, kg, BMI, etc.). Reserved for dimensions that come with measurement, not estimated from photos.
- **`structured`** — composite dimension whose value is a nested object with multiple sub-fields. Used when sub-dimensions are tightly coupled (e.g., the areolar complex carries diameter, pigmentation, and nipple morphology together).

## Observability metadata

Every dimension carries an `observability` block that tells downstream tooling whether and how the dimension can be observed from a single photograph. Fields:

- **`from_photograph`** — `high` (reliably observable from a typical photo), `medium` (observable when angle/lighting cooperate), `low` (rarely observable, gate on visibility flags), `not_assessable` (requires modality the photo doesn't carry — e.g., BI-RADS density requires mammography).
- **`requires_unclothed`** — whether the relevant anatomy must be unclothed for assessment.
- **`minimum_visible_extent`** — minimum framing required: `head_only`, `head_shoulders`, `torso`, `full_body`. Maps to the existing `ethnic_image_analysis.visible_extent` field.
- **`notes`** — free-text caveats.

The vision-LLM prompt is generated to skip dimensions whose `from_photograph` is `not_assessable`, even if they're listed in the schema. Including such dimensions matters for academic completeness (the schema documents the comprehensive medical taxonomy, not just the photographically-observable subset), but does not pollute observation data.

## Two-layer extension model

This directory holds the **canonical, public, citable** vocabulary. All terms here are publishable under CC-BY-4.0, have peer-reviewed citations, and are appropriate for academic context. Internal extensions — additional terms used by EE platform features but not appropriate for the public artifact — live separately in the EE monorepo at `Sites/EE/nextjs-app/vocabularies/`. Internal-extension files reference a public canonical file and add dimensions or expand values without overriding canonical definitions; they do not get exported in the HuggingFace dataset build.

## Versioning

Each vocabulary file carries a `version` (semver):

- **major** — bucket values changed, observations from prior versions need re-mapping.
- **minor** — new dimensions or new buckets added; old observations remain valid.
- **patch** — definition refinement, citation correction, or typo fix; no observation impact.

The dataset's `manifest.json` records which vocabulary versions were in use during each build run.

## Current vocabularies

**22 files, 196 dimensions, 853 named values.** Complete: there is no roadmap
left, every atlas category is covered.

| File | Category | Dimensions | Values | Version | Reliability measured |
|---|---|---|---|---|---|
| `arms.json` | Arms | 7 | 25 | 1.0.0 | no |
| `body-hair.json` | Body hair | 8 | 46 | 1.0.0 | no |
| `body-shape.json` | Body shape | 16 | 76 | 1.0.0 | no |
| `breast.json` | Breast | 14 | 62 | 1.0.0 | no |
| `butt.json` | Butt (gluteal region) | 7 | 24 | 1.0.0 | no |
| `ears.json` | Ears | 8 | 29 | 1.1.0 | 8 of 8 |
| `eyes.json` | Eyes | 12 | 66 | 1.1.0 | 12 of 12 |
| `face-proportions.json` | Face proportions | 7 | 31 | 1.1.0 | 7 of 7 |
| `feet.json` | Feet | 7 | 27 | 1.0.0 | no |
| `hands.json` | Hands | 7 | 27 | 1.0.0 | no |
| `head-hair.json` | Head hair | 8 | 60 | 1.1.0 | 8 of 8 |
| `head-shape.json` | Head shape | 4 | 15 | 1.1.0 | 4 of 4 |
| `jaw-and-chin.json` | Jaw and chin | 8 | 29 | 1.1.0 | 8 of 8 |
| `legs.json` | Legs | 7 | 27 | 1.0.0 | no |
| `lips-and-mouth.json` | Lips and mouth | 10 | 43 | 1.1.0 | 10 of 10 |
| `neck.json` | Neck | 7 | 25 | 1.1.0 | 7 of 7 |
| `nose.json` | Nose | 14 | 59 | 1.1.0 | 14 of 14 |
| `penis.json` | Penis **(internal only)** | 12 | 35 | 1.0.0 | no |
| `pubic-region.json` | Pubic region **(internal only)** | 5 | 24 | 1.0.0 | no |
| `skin.json` | Skin | 8 | 46 | 1.1.0 | 8 of 8 |
| `torso.json` | Torso | 11 | 46 | 1.0.0 | no |
| `vulva.json` | Vulva **(internal only)** | 9 | 31 | 1.0.0 | no |

Three files carry `observations_source_policy: internal_only` and are **never
populated from photographs**. Every one of their dimensions is additionally
marked `not_assessable`, and the analysis pipeline excludes them at two separate
points, so the belt and the braces are independent. Measured over a
2,665-portrait corpus run: zero rows.

## Reliability

The ten head-and-neck files are at **1.1.0**, which added a per-dimension
`reliability` record and a file-level `reliability_studies` block. **No value set
changed in that bump**, so an observation coded against 1.0.0 is coded
identically against 1.1.0 and the two are directly comparable.

Each record cites its study rather than asserting a bare number, because
reliability belongs to a measurement made with the vocabulary and not to the
vocabulary in the abstract: another corpus, rater or model gives another number.
A human inter-rater study, when one exists, appends beside this one.

The one study present is `test-retest-2026-08-31`: the same model re-reading 196
portraits with the identical prompt. **It measures reproducibility, not
validity.** Two readings agreeing says the instrument is stable, not that it is
right. Read the block's own `limitations` array before quoting anything from it.

Three dimensions are marked `uninformative`: they return a single value for
nearly every portrait, so the two readings agree without the dimension
distinguishing anything. Their note says in terms not to read the agreement
percentage as evidence the dimension works.

Dimensions whose chance agreement exceeds 85% carry `estimate_is_fragile`. Kappa
divides by `1 - pe`, and where one value dominates that denominator is small
enough for a handful of cells to swing the estimate: measured on this corpus,
between a 78-portrait and a 196-portrait read, dimensions in that regime moved by
up to 0.68 of a kappa point in both directions.
