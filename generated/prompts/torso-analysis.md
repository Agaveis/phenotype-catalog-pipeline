# Torso observation prompt

<!-- Auto-generated from vocabularies/torso.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs -->

Atlas category: `torso` · Version: 1.0.0
UBERON: `UBERON:0000915`

## Instruction

Assess the following torso-related phenotype dimensions from the photograph. Return one value per dimension, drawn only from the listed valid buckets. If a dimension cannot be assessed (anatomy not visible, image quality too poor, framing too narrow), return `null` for that dimension. Do not guess — `null` is preferred over an unreliable bucket assignment.

For each dimension, also return a per-dimension confidence score (0.0–1.0) reflecting how reliably you could assess that specific dimension in this photograph.

Return a single JSON object, no prose, with shape:

```json
{
  "shoulder_breadth": "<one of the valid buckets, or null>",
  "shoulder_breadth_confidence": "<0.0-1.0, or null>",
  "shoulder_slope": "<one of the valid buckets, or null>",
  "shoulder_slope_confidence": "<0.0-1.0, or null>",
  "chest_morphology": "<one of the valid buckets, or null>",
  "chest_morphology_confidence": "<0.0-1.0, or null>",
  "pectoral_definition_male": "<one of the valid buckets, or null>",
  "pectoral_definition_male_confidence": "<0.0-1.0, or null>",
  "abdominal_shape": "<one of the valid buckets, or null>",
  "abdominal_shape_confidence": "<0.0-1.0, or null>",
  "abdominal_definition": "<one of the valid buckets, or null>",
  "abdominal_definition_confidence": "<0.0-1.0, or null>",
  "waist_definition": "<one of the valid buckets, or null>",
  "waist_definition_confidence": "<0.0-1.0, or null>",
  "back_morphology": "<one of the valid buckets, or null>",
  "back_morphology_confidence": "<0.0-1.0, or null>",
  "lumbar_curvature": "<one of the valid buckets, or null>",
  "lumbar_curvature_confidence": "<0.0-1.0, or null>",
  "navel_morphology": "<one of the valid buckets, or null>",
  "navel_morphology_confidence": "<0.0-1.0, or null>",
  "linea_alba_visibility": "<one of the valid buckets, or null>",
  "linea_alba_visibility_confidence": "<0.0-1.0, or null>"
}
```

## Dimensions

### `shoulder_breadth`

**Type:** ordinal · **Scale:** biacromial_breadth_qualitative · **Min visible extent:** torso

Valid values:

- `narrow` — *Narrow*: Shoulders narrow relative to hips.
- `balanced` — *Balanced*: Shoulders proportional.
- `wide` — *Wide*: Pronounced shoulder breadth; characteristic V-shape silhouette in lean subjects.

Reference: Aligned with anthropometry references on biacromial breadth as a primary frame-size dimension.

### `shoulder_slope`

**Type:** categorical · **Scale:** shoulder_slope_qualitative · **Min visible extent:** torso

Valid values:

- `square` — *Square (high)*: Shoulders nearly horizontal; minimal slope.
- `moderate_slope` — *Moderate slope*: Average shoulder slope.
- `sloped` — *Sloped*: Substantial downward slope from neck base.

Reference: Aligned with descriptors used in tailoring and artistic-anatomy literature.

### `chest_morphology`

**Type:** categorical · **Scale:** chest_shape_qualitative · **Min visible extent:** torso · **Requires unclothed anatomy**

Valid values:

- `flat` — *Flat*: Anterior chest wall approximately flat in profile.
- `rounded_normal` — *Rounded (normal)*: Standard anterior chest contour.
- `barrel_chest` — *Barrel-chested*: Increased anteroposterior chest diameter.
- `pectus_excavatum` — *Pectus excavatum (sunken)*: Visible sternal depression.
- `pectus_carinatum` — *Pectus carinatum (protruding)*: Visible sternal protrusion ('pigeon chest').

Reference: Aligned with descriptors used in thoracic-surgery and pectus-deformity literature.

### `pectoral_definition_male`

**Type:** ordinal · **Scale:** pectoral_definition_qualitative · **Min visible extent:** torso · **Requires unclothed anatomy**

Valid values:

- `minimal` — *Minimal*: Pectorals not visible as discrete landmarks.
- `moderate` — *Moderate*: Pectorals visible but not prominently defined.
- `defined` — *Defined*: Clear pectoral definition; visible separation between pectoralis and surrounding tissue.
- `highly_developed` — *Highly developed*: Pronounced pectoral mass and definition.
- `not_applicable` — *Not applicable*: Subject not in male physiognomy or chest not visible.

Reference: Aligned with sports-medicine descriptors of pectoral musculature.

### `abdominal_shape`

**Type:** categorical · **Scale:** abdominal_shape_qualitative · **Min visible extent:** torso

Valid values:

- `concave` — *Concave*: Abdominal wall sits posterior to the rib cage / pelvis line.
- `flat` — *Flat*: Abdominal wall in plane with rib cage / pelvis.
- `convex_mild` — *Convex (mild)*: Subtle anterior protrusion.
- `convex_pronounced` — *Convex (pronounced)*: Clearly protruding abdomen.

Reference: Aligned with body-contouring and abdominoplasty literature.

### `abdominal_definition`

**Type:** ordinal · **Scale:** abdominal_definition_qualitative · **Min visible extent:** torso · **Requires unclothed anatomy**

Valid values:

- `none` — *None*: No visible muscular definition.
- `subtle` — *Subtle*: Minor definition visible at the upper abdomen only.
- `two_pack` — *Two-pack visible*: Upper rectus abdominis visible; lower abdomen smooth.
- `four_pack` — *Four-pack visible*
- `six_pack` — *Six-pack visible*
- `eight_pack` — *Eight-pack / pronounced*: Full rectus abdominis visible plus inscriptional definition between segments.

Reference: Aligned with sports-medicine and bodybuilding descriptors of rectus abdominis visibility.

### `waist_definition`

**Type:** ordinal · **Scale:** waist_definition_qualitative · **Min visible extent:** torso

Valid values:

- `absent` — *Absent*: No visible waist; rib cage to pelvis nearly straight.
- `subtle` — *Subtle*: Slight inward curve at waist.
- `defined` — *Defined*: Clear waist taper.
- `pronounced` — *Pronounced*: Strong hourglass-equivalent waist definition.

Reference: Aligned with body-contouring literature on the waist as a perceptual axis.

### `back_morphology`

**Type:** categorical · **Scale:** back_shape_qualitative · **Min visible extent:** torso

Valid values:

- `v_shape` — *V-shape*: Wide upper back tapering to narrow waist.
- `balanced_rectangular` — *Balanced / rectangular*: Approximately equal upper-back and waist breadth.
- `inverted_pear` — *Inverted pear*: Wider at hip/waist than upper back.

Reference: Aligned with sports-medicine and aesthetic-anatomy descriptors of dorsal-trunk silhouette.

### `lumbar_curvature`

**Type:** categorical · **Scale:** lumbar_curvature_qualitative · **Min visible extent:** torso

Valid values:

- `flat` — *Flat*: Reduced lumbar curve; flattened lower back.
- `moderate` — *Moderate*: Standard lumbar lordosis.
- `pronounced_lordotic` — *Pronounced (lordotic)*: Substantial lumbar curve; sometimes called sway-back.

Reference: Aligned with descriptors used in posture-assessment literature; subset of the body-shape posture dimension at higher granularity.

### `navel_morphology`

**Type:** categorical · **Scale:** navel_shape_qualitative · **Min visible extent:** torso · **Requires unclothed anatomy**

Valid values:

- `vertical_oval` — *Vertical oval ('innie' vertical)*: Long axis vertical; common aesthetic reference.
- `horizontal_oval` — *Horizontal oval*
- `round` — *Round*
- `T_shaped` — *T-shaped*
- `outie_protruding` — *Outie / protruding*: Umbilicus projects outward from abdominal plane.
- `asymmetric` — *Asymmetric*

Reference: Aligned with descriptors used in abdominoplasty and umbilicoplasty literature on umbilical aesthetics.

### `linea_alba_visibility`

**Type:** ordinal · **Scale:** linea_alba_qualitative · **Min visible extent:** torso · **Requires unclothed anatomy**

Valid values:

- `not_visible` — *Not visible*
- `subtle` — *Subtle*: Visible under tension only.
- `defined` — *Defined*: Clear vertical midline visible at rest.
- `highly_defined` — *Highly defined*: Pronounced midline; common with very low body-fat percentage.

Reference: Aligned with sports-medicine descriptors of midline-tendon visibility.

