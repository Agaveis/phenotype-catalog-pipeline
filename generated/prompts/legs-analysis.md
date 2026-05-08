# Legs observation prompt

<!-- Auto-generated from vocabularies/legs.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs -->

Atlas category: `legs` · Version: 1.0.0
UBERON: `UBERON:0000978`

## Instruction

Assess the following legs-related phenotype dimensions from the photograph. Return one value per dimension, drawn only from the listed valid buckets. If a dimension cannot be assessed (anatomy not visible, image quality too poor, framing too narrow), return `null` for that dimension. Do not guess — `null` is preferred over an unreliable bucket assignment.

For each dimension, also return a per-dimension confidence score (0.0–1.0) reflecting how reliably you could assess that specific dimension in this photograph.

Return a single JSON object, no prose, with shape:

```json
{
  "leg_length_proportional": "<one of the valid buckets, or null>",
  "leg_length_proportional_confidence": "<0.0-1.0, or null>",
  "thigh_circumference": "<one of the valid buckets, or null>",
  "thigh_circumference_confidence": "<0.0-1.0, or null>",
  "thigh_definition": "<one of the valid buckets, or null>",
  "thigh_definition_confidence": "<0.0-1.0, or null>",
  "calf_shape": "<one of the valid buckets, or null>",
  "calf_shape_confidence": "<0.0-1.0, or null>",
  "calf_circumference": "<one of the valid buckets, or null>",
  "calf_circumference_confidence": "<0.0-1.0, or null>",
  "ankle_morphology": "<one of the valid buckets, or null>",
  "ankle_morphology_confidence": "<0.0-1.0, or null>",
  "thigh_to_calf_ratio": "<one of the valid buckets, or null>",
  "thigh_to_calf_ratio_confidence": "<0.0-1.0, or null>"
}
```

## Dimensions

### `leg_length_proportional`

**Type:** ordinal · **Scale:** leg_length_qualitative · **Min visible extent:** full_body

Valid values:

- `short` — *Short*: Legs appear short relative to torso; high cormic index.
- `balanced` — *Balanced*
- `long` — *Long*: Legs appear long relative to torso; low cormic index.

Reference: Aligned with anthropometric descriptors of lower-extremity proportional length, related to but distinct from the trunk_to_leg_ratio dimension in body-shape.json.

### `thigh_circumference`

**Type:** ordinal · **Scale:** thigh_girth_qualitative · **Min visible extent:** full_body

Valid values:

- `slender` — *Slender*
- `average` — *Average*
- `muscular` — *Muscular*
- `very_muscular` — *Very muscular*

Reference: Aligned with anthropometric descriptors of mid-thigh circumference.

### `thigh_definition`

**Type:** ordinal · **Scale:** thigh_definition_qualitative · **Min visible extent:** full_body

Valid values:

- `minimal` — *Minimal*
- `moderate` — *Moderate*
- `defined` — *Defined*: Quadriceps separation visible.
- `highly_developed` — *Highly developed*: Pronounced quadriceps mass and definition.

Reference: Aligned with sports-medicine descriptors of quadriceps / hamstring visibility.

### `calf_shape`

**Type:** categorical · **Scale:** calf_shape_qualitative · **Min visible extent:** full_body

Valid values:

- `flat_minimal` — *Flat / minimal*
- `balanced` — *Balanced*: Standard calf curve.
- `high_muscular` — *High / muscular*: Pronounced gastrocnemius prominence high on the calf.
- `lower_developed` — *Lower-developed*: Calf prominence sits low on the leg.
- `very_developed` — *Very developed*: Pronounced calf mass with strong taper to ankle.

Reference: Aligned with body-contouring descriptors of calf morphology.

### `calf_circumference`

**Type:** ordinal · **Scale:** calf_girth_qualitative · **Min visible extent:** full_body

Valid values:

- `slender` — *Slender*
- `average` — *Average*
- `muscular` — *Muscular*
- `very_muscular` — *Very muscular*

Reference: Aligned with anthropometric descriptors of maximum calf circumference.

### `ankle_morphology`

**Type:** categorical · **Scale:** ankle_qualitative · **Min visible extent:** full_body

Valid values:

- `thin_tapered` — *Thin / tapered*: Pronounced taper from calf to ankle.
- `balanced` — *Balanced*
- `thick` — *Thick*: Minimal taper; ankle approaches calf circumference.
- `edematous` — *Edematous*: Visible swelling obscuring native morphology.

Reference: Aligned with body-contouring descriptors of ankle taper.

### `thigh_to_calf_ratio`

**Type:** categorical · **Scale:** thigh_calf_proportion_qualitative · **Min visible extent:** full_body

Valid values:

- `thigh_dominant` — *Thigh-dominant*: Thigh substantially thicker than calf.
- `balanced` — *Balanced*
- `calf_dominant` — *Calf-dominant*: Calf approaches or exceeds thigh in circumference.

Reference: Aligned with body-contouring descriptors of leg-region proportions.

