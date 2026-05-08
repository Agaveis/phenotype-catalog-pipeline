# Arms observation prompt

<!-- Auto-generated from vocabularies/arms.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs -->

Atlas category: `arms` · Version: 1.0.0
UBERON: `UBERON:0001460`

## Instruction

Assess the following arms-related phenotype dimensions from the photograph. Return one value per dimension, drawn only from the listed valid buckets. If a dimension cannot be assessed (anatomy not visible, image quality too poor, framing too narrow), return `null` for that dimension. Do not guess — `null` is preferred over an unreliable bucket assignment.

For each dimension, also return a per-dimension confidence score (0.0–1.0) reflecting how reliably you could assess that specific dimension in this photograph.

Return a single JSON object, no prose, with shape:

```json
{
  "arm_length_proportional": "<one of the valid buckets, or null>",
  "arm_length_proportional_confidence": "<0.0-1.0, or null>",
  "upper_arm_circumference": "<one of the valid buckets, or null>",
  "upper_arm_circumference_confidence": "<0.0-1.0, or null>",
  "biceps_definition": "<one of the valid buckets, or null>",
  "biceps_definition_confidence": "<0.0-1.0, or null>",
  "forearm_circumference": "<one of the valid buckets, or null>",
  "forearm_circumference_confidence": "<0.0-1.0, or null>",
  "brachioradialis_visibility": "<one of the valid buckets, or null>",
  "brachioradialis_visibility_confidence": "<0.0-1.0, or null>",
  "cubital_carrying_angle": "<one of the valid buckets, or null>",
  "cubital_carrying_angle_confidence": "<0.0-1.0, or null>",
  "shoulder_to_arm_proportion": "<one of the valid buckets, or null>",
  "shoulder_to_arm_proportion_confidence": "<0.0-1.0, or null>"
}
```

## Dimensions

### `arm_length_proportional`

**Type:** ordinal · **Scale:** arm_length_qualitative · **Min visible extent:** full_body

Valid values:

- `short` — *Short*: Arms appear short relative to torso.
- `balanced` — *Balanced*: Standard proportional arm length.
- `long` — *Long*: Arms appear long relative to torso.

Reference: Aligned with anthropometry descriptors of upper-extremity proportional length relative to torso.

### `upper_arm_circumference`

**Type:** ordinal · **Scale:** upper_arm_girth_qualitative · **Min visible extent:** torso

Valid values:

- `slender` — *Slender*
- `average` — *Average*
- `muscular` — *Muscular*
- `very_muscular` — *Very muscular*

Reference: Aligned with anthropometry descriptors of mid-bicep circumference relative to forearm.

### `biceps_definition`

**Type:** ordinal · **Scale:** biceps_definition_qualitative · **Min visible extent:** torso

Valid values:

- `minimal` — *Minimal*: Biceps not visible as a discrete landmark.
- `moderate` — *Moderate*: Biceps visible under tension only.
- `defined` — *Defined*: Biceps clearly visible at rest with separation from triceps.
- `highly_developed` — *Highly developed*: Pronounced biceps mass with peak definition.

Reference: Aligned with sports-medicine descriptors of brachial musculature visibility.

### `forearm_circumference`

**Type:** ordinal · **Scale:** forearm_girth_qualitative · **Min visible extent:** torso

Valid values:

- `slender` — *Slender*
- `average` — *Average*
- `muscular` — *Muscular*
- `very_muscular` — *Very muscular*

Reference: Aligned with anthropometry descriptors of forearm girth.

### `brachioradialis_visibility`

**Type:** ordinal · **Scale:** brachioradialis_qualitative · **Min visible extent:** torso

Valid values:

- `not_visible` — *Not visible*
- `subtle` — *Subtle*: Visible under tension only.
- `defined` — *Defined*: Clearly visible at rest.

Reference: Surface-anatomy descriptor aligned with sports-medicine and aesthetic-anatomy literature.

### `cubital_carrying_angle`

**Type:** categorical · **Scale:** carrying_angle_qualitative · **Min visible extent:** torso

Valid values:

- `minimal_straight` — *Minimal / straight*: Arm extends nearly straight; carrying angle <5°.
- `normal_male_range` — *Male-typical range (~5-10°)*
- `normal_female_range` — *Female-typical range (~10-15°)*
- `pronounced` — *Pronounced (>15°)*: Substantial valgus; cubitus valgus when extreme.

Reference: Aligned with orthopedic descriptors of the elbow carrying angle. Reference: typical female ~10-15° valgus, male ~5-10° valgus.

### `shoulder_to_arm_proportion`

**Type:** categorical · **Scale:** shoulder_arm_proportion_qualitative · **Min visible extent:** torso

Valid values:

- `shoulder_dominant` — *Shoulder-dominant*: Shoulders pronounced relative to arm girth.
- `balanced` — *Balanced*
- `arm_dominant` — *Arm-dominant*: Arm girth pronounced relative to shoulder breadth.

Reference: Aligned with artistic-anatomy proportional descriptors.

