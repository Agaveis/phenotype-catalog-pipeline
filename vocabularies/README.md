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

One JSON file per atlas category, named after the category in lowercase with hyphens (`breast.json`, `body-shape.json`, `head-hair.json`, etc.). Each file conforms to the meta-schema described in `_schema.md` (forthcoming) and contains:

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

| File | Atlas category | Status |
|---|---|---|
| `breast.json` | Breast | v1.0.0 — pilot |

Roadmap: 20 remaining atlas categories.
