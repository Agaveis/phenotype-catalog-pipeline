# Body hair observation prompt

<!-- Auto-generated from vocabularies/body-hair.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs -->

Atlas category: `body-hair` · Version: 1.0.0
UBERON: `UBERON:0008811`

## Instruction

Assess the following body hair-related phenotype dimensions from the photograph. Return one value per dimension, drawn only from the listed valid buckets. If a dimension cannot be assessed (anatomy not visible, image quality too poor, framing too narrow), return `null` for that dimension. Do not guess — `null` is preferred over an unreliable bucket assignment.

For each dimension, also return a per-dimension confidence score (0.0–1.0) reflecting how reliably you could assess that specific dimension in this photograph.

Return a single JSON object, no prose, with shape:

```json
{
  "ferriman_gallwey_visual": "<one of the valid buckets, or null>",
  "ferriman_gallwey_visual_confidence": "<0.0-1.0, or null>",
  "facial_hair_male": "<one of the valid buckets, or null>",
  "facial_hair_male_confidence": "<0.0-1.0, or null>",
  "chest_hair_male": "<one of the valid buckets, or null>",
  "chest_hair_male_confidence": "<0.0-1.0, or null>",
  "abdominal_hair_pattern": "<one of the valid buckets, or null>",
  "abdominal_hair_pattern_confidence": "<0.0-1.0, or null>",
  "arm_hair_density": "<one of the valid buckets, or null>",
  "arm_hair_density_confidence": "<0.0-1.0, or null>",
  "leg_hair_density": "<one of the valid buckets, or null>",
  "leg_hair_density_confidence": "<0.0-1.0, or null>",
  "back_hair_male": "<one of the valid buckets, or null>",
  "back_hair_male_confidence": "<0.0-1.0, or null>",
  "body_hair_color": "<one of the valid buckets, or null>",
  "body_hair_color_confidence": "<0.0-1.0, or null>"
}
```

## Dimensions

### `ferriman_gallwey_visual`

**Type:** ordinal · **Scale:** ferriman_gallwey_1961 · **Min visible extent:** full_body · **Requires unclothed anatomy**

> Reliable visual estimation requires multiple body regions visible. Grooming/hair-removal substantially confounds native-density assessment.

Valid values:

- `minimal` — *Minimal (FG estimated 0-4)*: Below clinical hirsutism threshold; minimal visible body hair.
- `mild` — *Mild (FG ~5-8)*: Borderline; some terminal hair across body regions.
- `moderate` — *Moderate (FG ~9-15)*: Above clinical hirsutism threshold for women; substantial terminal hair distribution.
- `marked` — *Marked (FG ~16+)*: Pronounced terminal hair distribution.
- `not_assessable` — *Not assessable*: Body coverage prevents assessment.

Reference: Ferriman D, Gallwey JE (1961). Clinical assessment of body hair growth in women. Journal of Clinical Endocrinology and Metabolism, 21(11): 1440-1447.

### `facial_hair_male`

**Type:** categorical · **Scale:** facial_hair_distribution_qualitative · **Min visible extent:** head_only

Valid values:

- `absent_clean_shaven_or_low` — *Absent / clean-shaven or low capacity*
- `patchy` — *Patchy*: Uneven coverage with visible bare patches.
- `mustache_only` — *Mustache only*
- `goatee_chin_only` — *Goatee / chin only*
- `full_beard_light` — *Full beard — light density*
- `full_beard_dense` — *Full beard — dense*
- `full_beard_very_dense` — *Full beard — very dense*
- `stubble_only` — *Stubble only*: Recently shaved; native density not directly assessable.
- `not_applicable` — *Not applicable*: Subject not in male physiognomy.

Reference: Aligned with descriptors used in dermatology and trichology literature on terminal-hair distribution patterns.

### `chest_hair_male`

**Type:** categorical · **Scale:** chest_hair_pattern_qualitative · **Min visible extent:** torso · **Requires unclothed anatomy**

Valid values:

- `absent_minimal` — *Absent / minimal*
- `central_strip_only` — *Central strip only*: Hair limited to a vertical central band.
- `moderate_chest_only` — *Moderate, chest only*: Hair across the chest but not extending to abdomen.
- `extensive_chest_to_abdomen` — *Extensive, chest extending to abdomen*: Continuous distribution from chest to abdomen.
- `very_dense_full` — *Very dense / full*
- `groomed_unclear` — *Groomed (waxed/shaved)*: Visible removal; native distribution not assessable.
- `not_applicable` — *Not applicable*

Reference: Aligned with descriptors used in trichology literature on chest-hair patterns.

### `abdominal_hair_pattern`

**Type:** categorical · **Scale:** abdominal_hair_qualitative · **Min visible extent:** torso · **Requires unclothed anatomy**

Valid values:

- `absent` — *Absent*
- `linea_alba_strip` — *Linea alba strip ('happy trail')*: Vertical strip from navel to pubis only.
- `diffuse_light` — *Diffuse, light*: Light coverage spreading from midline.
- `diffuse_dense` — *Diffuse, dense*: Full abdominal hair coverage.
- `groomed_unclear` — *Groomed*: Visible removal; native pattern not assessable.

Reference: Aligned with terminal-hair distribution descriptors in dermatology literature.

### `arm_hair_density`

**Type:** ordinal · **Scale:** arm_hair_density_qualitative · **Min visible extent:** torso

Valid values:

- `minimal` — *Minimal*
- `light` — *Light*
- `moderate` — *Moderate*
- `dense` — *Dense*
- `groomed` — *Groomed (removal visible)*

Reference: Aligned with terminal-hair descriptors in dermatology literature.

### `leg_hair_density`

**Type:** ordinal · **Scale:** leg_hair_density_qualitative · **Min visible extent:** full_body

Valid values:

- `minimal` — *Minimal*
- `light` — *Light*
- `moderate` — *Moderate*
- `dense` — *Dense*
- `groomed` — *Groomed (removal visible)*

Reference: Aligned with terminal-hair descriptors in dermatology literature.

### `back_hair_male`

**Type:** categorical · **Scale:** back_hair_qualitative · **Min visible extent:** torso · **Requires unclothed anatomy**

Valid values:

- `absent_minimal` — *Absent / minimal*
- `shoulder_only` — *Shoulders only*
- `upper_back` — *Upper back*
- `full_back` — *Full back*
- `groomed` — *Groomed*
- `not_applicable` — *Not applicable*

Reference: Aligned with terminal-hair descriptors in dermatology literature.

### `body_hair_color`

**Type:** categorical · **Scale:** body_hair_color_qualitative · **Min visible extent:** torso

Valid values:

- `matches_scalp` — *Matches scalp*
- `darker_than_scalp` — *Darker than scalp*
- `lighter_than_scalp` — *Lighter than scalp*
- `mixed_aging` — *Mixed (graying)*

Reference: Aligned with trichology descriptors of differential body / scalp hair pigmentation.

