# Butt (gluteal region) observation prompt

<!-- Auto-generated from vocabularies/butt.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs -->

Atlas category: `butt` · Version: 1.0.0
UBERON: `UBERON:0001783`

## Instruction

Assess the following butt (gluteal region)-related phenotype dimensions from the photograph. Return one value per dimension, drawn only from the listed valid buckets. If a dimension cannot be assessed (anatomy not visible, image quality too poor, framing too narrow), return `null` for that dimension. Do not guess — `null` is preferred over an unreliable bucket assignment.

For each dimension, also return a per-dimension confidence score (0.0–1.0) reflecting how reliably you could assess that specific dimension in this photograph.

Return a single JSON object, no prose, with shape:

```json
{
  "buttock_shape_mendieta": "<one of the valid buckets, or null>",
  "buttock_shape_mendieta_confidence": "<0.0-1.0, or null>",
  "buttock_size": "<one of the valid buckets, or null>",
  "buttock_size_confidence": "<0.0-1.0, or null>",
  "buttock_projection": "<one of the valid buckets, or null>",
  "buttock_projection_confidence": "<0.0-1.0, or null>",
  "gluteal_fold_definition": "<one of the valid buckets, or null>",
  "gluteal_fold_definition_confidence": "<0.0-1.0, or null>",
  "lateral_concavity": "<one of the valid buckets, or null>",
  "lateral_concavity_confidence": "<0.0-1.0, or null>",
  "buttock_to_hip_ratio": "<one of the valid buckets, or null>",
  "buttock_to_hip_ratio_confidence": "<0.0-1.0, or null>",
  "asymmetry": "<one of the valid buckets, or null>",
  "asymmetry_confidence": "<0.0-1.0, or null>"
}
```

## Dimensions

### `buttock_shape_mendieta`

**Type:** categorical · **Scale:** mendieta_four_class · **Min visible extent:** torso

> Best assessed from posterior view.

Valid values:

- `round_A_shape` — *A-shape (square below, narrow above)*: Wider at the lower buttock; trapezoidal silhouette with the wider edge inferior.
- `v_shape` — *V-shape (wide above, narrow below)*: Wider at the upper buttock; trapezoidal silhouette with the wider edge superior.
- `round` — *Round*: Approximately circular silhouette; aesthetic-surgery reference shape.
- `square` — *Square*: Approximately rectangular silhouette with similar width across upper and lower.

Reference: Mendieta CG (2007). Classification system for gluteal evaluation. Clinics in Plastic Surgery, 34(3): 333-346.

### `buttock_size`

**Type:** ordinal · **Scale:** buttock_size_qualitative · **Min visible extent:** torso

Valid values:

- `small` — *Small*: Limited gluteal mass; minimal projection from the trunk silhouette.
- `moderate` — *Moderate*: Average gluteal mass.
- `full` — *Full*: Pronounced gluteal mass.
- `very_full` — *Very full*: Substantial gluteal mass; dominant feature of the trunk silhouette. Constitutional, athletic, or augmented.

Reference: Aligned with gluteal-aesthetic descriptors used in body-contouring literature (Roberts TL et al. Aesthetic Surgery Journal).

### `buttock_projection`

**Type:** ordinal · **Scale:** buttock_projection_qualitative · **Min visible extent:** torso

> Best assessed from lateral view; frontal view alone cannot resolve projection.

Valid values:

- `flat` — *Flat*: Minimal posterior projection.
- `moderate` — *Moderate*: Standard posterior projection.
- `high_projection` — *High projection*: Pronounced posterior projection; 'shelf-like' silhouette in lateral view.

Reference: Aligned with gluteal-aesthetic descriptors used in lateral-view-based aesthetic assessment.

### `gluteal_fold_definition`

**Type:** ordinal · **Scale:** gluteal_fold_qualitative · **Min visible extent:** torso

Valid values:

- `sharp_defined` — *Sharp / defined*: Clear, crisp gluteal fold as a discrete landmark.
- `moderate` — *Moderate*
- `soft_blended` — *Soft / blended*: Gradual buttock-to-thigh transition; reduced fold definition.

Reference: Aligned with descriptors used in gluteal-aesthetic-surgery literature on the gluteal-thigh transition.

### `lateral_concavity`

**Type:** categorical · **Scale:** trochanteric_depression_qualitative · **Min visible extent:** torso

Valid values:

- `absent` — *Absent*: Smooth lateral hip silhouette without visible depression.
- `subtle` — *Subtle*: Slight visible depression.
- `pronounced` — *Pronounced*: Distinct depression; common skeletal-anatomy variant.

Reference: Aligned with descriptors used in gluteal-augmentation literature on lateral hip morphology.

### `buttock_to_hip_ratio`

**Type:** categorical · **Scale:** gluteal_hip_silhouette_qualitative · **Min visible extent:** torso

Valid values:

- `hourglass_pronounced` — *Hourglass (pronounced waist)*: Buttock projection substantially wider than waist creating an hourglass posterior silhouette.
- `balanced` — *Balanced*
- `narrow_continuous` — *Narrow / continuous*: Minimal buttock-to-hip transition; rectangular silhouette.

Reference: Aligned with descriptors used in BBL (Brazilian Butt Lift) aesthetic literature.

### `asymmetry`

**Type:** ordinal · **Scale:** buttock_symmetry_qualitative · **Min visible extent:** torso

Valid values:

- `symmetric` — *Symmetric*
- `mild_asymmetry` — *Mild*
- `moderate_asymmetry` — *Moderate*
- `marked_asymmetry` — *Marked*

Reference: Aligned with surgical-gynecology and gluteal-aesthetic descriptors of bilateral asymmetry.

