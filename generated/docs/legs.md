# Legs — phenotype taxonomy

<!-- Auto-generated from vocabularies/legs.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs -->

> **Atlas category:** `legs` · **Version:** 1.0.0 · **License:** CC-BY-4.0
> **UBERON:** `UBERON:0000978` · **FMA:** `FMA:7185`

Lower-extremity morphology: leg length, thigh and calf circumference, thigh definition, calf shape, ankle morphology. Splits the original 'Limb' atlas category from the 21-category list into separate arms.json + legs.json files. Knee alignment (genu valgum/varum) is captured in body-shape.json's `knee_alignment` dimension; this file focuses on soft-tissue and silhouette morphology.

## Dimensions overview

| Dimension | Type | Scale | Photo-observable | Values |
|---|---|---|---|---|
| `leg_length_proportional` | ordinal | leg_length_qualitative | high | 3 |
| `thigh_circumference` | ordinal | thigh_girth_qualitative | high | 4 |
| `thigh_definition` | ordinal | thigh_definition_qualitative | high | 4 |
| `calf_shape` | categorical | calf_shape_qualitative | high | 5 |
| `calf_circumference` | ordinal | calf_girth_qualitative | high | 4 |
| `ankle_morphology` | categorical | ankle_qualitative | high | 4 |
| `thigh_to_calf_ratio` | categorical | thigh_calf_proportion_qualitative | high | 3 |

## `leg_length_proportional` — Leg length (proportional)

**Type:** ordinal · **Scale:** leg_length_qualitative

**Citation:** Aligned with anthropometric descriptors of lower-extremity proportional length, related to but distinct from the trunk_to_leg_ratio dimension in body-shape.json.

Total leg length (greater trochanter to floor) relative to torso length.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: full_body`

### Valid values

- **`short`** — Short: Legs appear short relative to torso; high cormic index.
- **`balanced`** — Balanced
- **`long`** — Long: Legs appear long relative to torso; low cormic index.

## `thigh_circumference` — Thigh circumference (relative)

**Type:** ordinal · **Scale:** thigh_girth_qualitative

**Citation:** Aligned with anthropometric descriptors of mid-thigh circumference.

Thigh girth at mid-thigh, qualitative bucket.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: full_body`

### Valid values

- **`slender`** — Slender
- **`average`** — Average
- **`muscular`** — Muscular
- **`very_muscular`** — Very muscular

## `thigh_definition` — Thigh muscular definition

**Type:** ordinal · **Scale:** thigh_definition_qualitative

**Citation:** Aligned with sports-medicine descriptors of quadriceps / hamstring visibility.

Visible musculature definition in the thigh region.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: full_body`

### Valid values

- **`minimal`** — Minimal
- **`moderate`** — Moderate
- **`defined`** — Defined: Quadriceps separation visible.
- **`highly_developed`** — Highly developed: Pronounced quadriceps mass and definition.

## `calf_shape` — Calf shape

**Type:** categorical · **Scale:** calf_shape_qualitative

**Citation:** Aligned with body-contouring descriptors of calf morphology.

Shape of the gastrocnemius / soleus complex visible posteriorly.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: full_body`

### Valid values

- **`flat_minimal`** — Flat / minimal
- **`balanced`** — Balanced: Standard calf curve.
- **`high_muscular`** — High / muscular: Pronounced gastrocnemius prominence high on the calf.
- **`lower_developed`** — Lower-developed: Calf prominence sits low on the leg.
- **`very_developed`** — Very developed: Pronounced calf mass with strong taper to ankle.

## `calf_circumference` — Calf circumference (relative)

**Type:** ordinal · **Scale:** calf_girth_qualitative

**Citation:** Aligned with anthropometric descriptors of maximum calf circumference.

Calf girth at maximum circumference.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: full_body`

### Valid values

- **`slender`** — Slender
- **`average`** — Average
- **`muscular`** — Muscular
- **`very_muscular`** — Very muscular

## `ankle_morphology` — Ankle morphology

**Type:** categorical · **Scale:** ankle_qualitative

**Citation:** Aligned with body-contouring descriptors of ankle taper.

Ankle morphology including taper from calf and malleolar visibility.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: full_body`

### Valid values

- **`thin_tapered`** — Thin / tapered: Pronounced taper from calf to ankle.
- **`balanced`** — Balanced
- **`thick`** — Thick: Minimal taper; ankle approaches calf circumference.
- **`edematous`** — Edematous: Visible swelling obscuring native morphology.

## `thigh_to_calf_ratio` — Thigh-to-calf proportion

**Type:** categorical · **Scale:** thigh_calf_proportion_qualitative

**Citation:** Aligned with body-contouring descriptors of leg-region proportions.

Relative dominance of thigh versus calf circumference.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: full_body`

### Valid values

- **`thigh_dominant`** — Thigh-dominant: Thigh substantially thicker than calf.
- **`balanced`** — Balanced
- **`calf_dominant`** — Calf-dominant: Calf approaches or exceeds thigh in circumference.

## References

- Standring S (ed.) (2020). Gray's Anatomy: The Anatomical Basis of Clinical Practice, 42nd Edition. Elsevier.
- Eveleth PB, Tanner JM (1990). Worldwide Variation in Human Growth, 2nd Edition. Cambridge University Press.

