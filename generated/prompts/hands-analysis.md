# Hands observation prompt

<!-- Auto-generated from vocabularies/hands.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs -->

Atlas category: `hands` · Version: 1.0.0
UBERON: `UBERON:0002398`

## Instruction

Assess the following hands-related phenotype dimensions from the photograph. Return one value per dimension, drawn only from the listed valid buckets. If a dimension cannot be assessed (anatomy not visible, image quality too poor, framing too narrow), return `null` for that dimension. Do not guess — `null` is preferred over an unreliable bucket assignment.

For each dimension, also return a per-dimension confidence score (0.0–1.0) reflecting how reliably you could assess that specific dimension in this photograph.

Return a single JSON object, no prose, with shape:

```json
{
  "hand_size_relative": "<one of the valid buckets, or null>",
  "hand_size_relative_confidence": "<0.0-1.0, or null>",
  "palm_shape": "<one of the valid buckets, or null>",
  "palm_shape_confidence": "<0.0-1.0, or null>",
  "digit_ratio_2D_4D": "<one of the valid buckets, or null>",
  "digit_ratio_2D_4D_confidence": "<0.0-1.0, or null>",
  "finger_morphology": "<one of the valid buckets, or null>",
  "finger_morphology_confidence": "<0.0-1.0, or null>",
  "knuckle_prominence": "<one of the valid buckets, or null>",
  "knuckle_prominence_confidence": "<0.0-1.0, or null>",
  "nail_shape": "<one of the valid buckets, or null>",
  "nail_shape_confidence": "<0.0-1.0, or null>",
  "wrist_breadth_relative": "<one of the valid buckets, or null>",
  "wrist_breadth_relative_confidence": "<0.0-1.0, or null>"
}
```

## Dimensions

### `hand_size_relative`

**Type:** ordinal · **Scale:** hand_size_qualitative · **Min visible extent:** full_body

Valid values:

- `small` — *Small*
- `average` — *Average*
- `large` — *Large*

Reference: Aligned with anthropometric descriptors of hand-length proportional to height (typical ratio ~10.4-11.0%).

### `palm_shape`

**Type:** categorical · **Scale:** palm_shape_qualitative · **Min visible extent:** torso

Valid values:

- `square` — *Square*: Palm length approximately equal to palm width.
- `rectangular_long` — *Rectangular / long*: Palm length substantially exceeds width.
- `wide_short` — *Wide / short*: Palm width approaches or exceeds length.

Reference: Aligned with descriptors used in chiromancy-adjacent hand-anthropometry literature.

### `digit_ratio_2D_4D`

**Type:** categorical · **Scale:** manning_2D_4D · **Min visible extent:** torso

> Best assessed when hand is open, palm-up or palm-down with extended fingers; finger curl confounds assessment.

Valid values:

- `low_4D_dominant` — *Low (ring finger longer)*: 2D:4D ratio < ~0.95; ring finger clearly longer than index. More common in males.
- `balanced` — *Balanced*: 2D:4D ratio ~0.95-1.00; subtle or no length difference.
- `high_2D_dominant` — *High (index finger longer)*: 2D:4D ratio > ~1.00; index finger clearly longer than ring. Less common; more common in females.

Reference: Manning JT, Scutt D, Wilson J, Lewis-Jones DI (1998). The ratio of 2nd to 4th digit length: a predictor of sperm numbers and concentrations of testosterone, luteinizing hormone and oestrogen. Human Reproduction, 13(11): 3000-3004.

### `finger_morphology`

**Type:** categorical · **Scale:** finger_thickness_qualitative · **Min visible extent:** torso

Valid values:

- `slender` — *Slender*: Long, thin fingers; narrow fingertips.
- `balanced` — *Balanced*: Average finger thickness.
- `thick` — *Thick*: Substantial finger girth.
- `tapered` — *Tapered*: Wider at the base, narrower at the tips.
- `spatulate` — *Spatulate*: Widening at the fingertips.

Reference: Aligned with hand-anthropometry descriptors used in glove-fitting and ergonomics literature.

### `knuckle_prominence`

**Type:** ordinal · **Scale:** knuckle_prominence_qualitative · **Min visible extent:** torso

Valid values:

- `subtle` — *Subtle*: Knuckles barely visible; soft-tissue coverage smooth.
- `moderate` — *Moderate*
- `prominent` — *Prominent*: Clear knuckle landmarks even at rest.

Reference: Aligned with surface-anatomy descriptors of metacarpophalangeal-joint visibility.

### `nail_shape`

**Type:** categorical · **Scale:** nail_shape_qualitative · **Min visible extent:** torso

Valid values:

- `square` — *Square*
- `round` — *Round*
- `oval` — *Oval*
- `almond` — *Almond*
- `stiletto` — *Stiletto / pointed*: Often artificial; native nails rarely take this shape.
- `groomed_artificial` — *Groomed / artificial*: Visible manicure or artificial nails; native shape not assessable.
- `not_visible` — *Not visible*

Reference: Aligned with descriptors used in dermatology and manicure literature.

### `wrist_breadth_relative`

**Type:** ordinal · **Scale:** wrist_breadth_qualitative · **Min visible extent:** torso

Valid values:

- `narrow` — *Narrow*
- `average` — *Average*
- `wide` — *Wide*

Reference: Aligned with frame-size literature; wrist circumference is the standard Frisancho frame-size proxy.

