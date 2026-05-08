# Neck observation prompt

<!-- Auto-generated from vocabularies/neck.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs -->

Atlas category: `neck` · Version: 1.0.0
UBERON: `UBERON:0000974`

## Instruction

Assess the following neck-related phenotype dimensions from the photograph. Return one value per dimension, drawn only from the listed valid buckets. If a dimension cannot be assessed (anatomy not visible, image quality too poor, framing too narrow), return `null` for that dimension. Do not guess — `null` is preferred over an unreliable bucket assignment.

For each dimension, also return a per-dimension confidence score (0.0–1.0) reflecting how reliably you could assess that specific dimension in this photograph.

Return a single JSON object, no prose, with shape:

```json
{
  "neck_length": "<one of the valid buckets, or null>",
  "neck_length_confidence": "<0.0-1.0, or null>",
  "neck_thickness": "<one of the valid buckets, or null>",
  "neck_thickness_confidence": "<0.0-1.0, or null>",
  "cervicomental_angle": "<one of the valid buckets, or null>",
  "cervicomental_angle_confidence": "<0.0-1.0, or null>",
  "laryngeal_prominence": "<one of the valid buckets, or null>",
  "laryngeal_prominence_confidence": "<0.0-1.0, or null>",
  "sternocleidomastoid_visibility": "<one of the valid buckets, or null>",
  "sternocleidomastoid_visibility_confidence": "<0.0-1.0, or null>",
  "platysmal_bands": "<one of the valid buckets, or null>",
  "platysmal_bands_confidence": "<0.0-1.0, or null>",
  "neck_skin_quality": "<one of the valid buckets, or null>",
  "neck_skin_quality_confidence": "<0.0-1.0, or null>"
}
```

## Dimensions

### `neck_length`

**Type:** ordinal · **Scale:** neck_length_proportional · **Min visible extent:** head_shoulders

Valid values:

- `short` — *Short*: Neck length less than approximately 70% of facial height.
- `average` — *Average*: Neck length approximately 70-100% of facial height (Farkas reference range).
- `long` — *Long*: Neck length substantially greater than facial height; swan-neck appearance.

Reference: Farkas LG (1994). Anthropometry of the Head and Face, 2nd Edition. Reference: cervical length (gnathion to suprasternal notch) proportional to overall facial height.

### `neck_thickness`

**Type:** ordinal · **Scale:** neck_thickness_proportional · **Min visible extent:** head_shoulders

Valid values:

- `thin` — *Thin*: Neck substantially narrower than head; minimal cervical musculature.
- `average` — *Average*: Neck width proportional to head width.
- `thick` — *Thick*: Neck width approaches or exceeds head width; pronounced cervical musculature or subcutaneous fullness.

Reference: Aligned with sports-medicine descriptors of cervical-girth norms; reference values vary substantially with sex and training.

### `cervicomental_angle`

**Type:** categorical · **Scale:** ellenbogen_karlin_cervicomental · **Min visible extent:** head_shoulders

> Best assessed from lateral view.

Valid values:

- `sharp_youthful` — *Sharp / youthful (~90°)*: Crisp angular transition between submental plane and neck; aesthetic ideal.
- `balanced` — *Balanced (~105-120°)*: Within Ellenbogen-Karlin reference range.
- `obtuse_aged` — *Obtuse / aged (>130°)*: Reduced angle definition; common with submental fat or platysmal banding.

Reference: Ellenbogen R, Karlin JV (1980). Visual criteria for success in restoring the youthful neck. Plastic and Reconstructive Surgery, 66(6): 826-837. Reference: cervicomental angle 105-120° as the youthful aesthetic norm.

### `laryngeal_prominence`

**Type:** ordinal · **Scale:** thyroid_cartilage_prominence_qualitative · **Min visible extent:** head_shoulders

Valid values:

- `minimal` — *Minimal*: Thyroid cartilage barely visible; typical of female adult physiognomy.
- `moderate` — *Moderate*: Visible but not pronounced thyroid cartilage.
- `prominent` — *Prominent*: Pronounced Adam's apple; typical of male adult physiognomy.
- `very_prominent` — *Very prominent*: Substantial thyroid-cartilage projection.

Reference: Anatomic descriptor aligned with otolaryngology and gender-affirming-care literature on thyroid-cartilage prominence (chondrolaryngoplasty references).

### `sternocleidomastoid_visibility`

**Type:** ordinal · **Scale:** scm_visibility_qualitative · **Min visible extent:** head_shoulders

Valid values:

- `not_visible` — *Not visible*: SCM not discernible at the skin surface; soft-tissue coverage obscures muscle outline.
- `subtle` — *Subtle*: SCM faintly visible during rotation or tension.
- `defined` — *Defined*: SCM clearly visible at rest as a distinct landmark.
- `highly_defined` — *Highly defined*: Pronounced SCM definition; very low body-fat percentage in the cervical region.

Reference: Aligned with surface-anatomy descriptors used in sports medicine and aesthetic-medicine literature.

### `platysmal_bands`

**Type:** categorical · **Scale:** platysmal_band_classification · **Min visible extent:** head_shoulders

Valid values:

- `absent` — *Absent*
- `subtle` — *Subtle*: Platysmal cords barely visible at rest.
- `moderate` — *Moderate*: Visible cords at rest; aging-related change.
- `marked` — *Marked*: Pronounced cords creating a 'turkey-wattle' appearance.

Reference: Connell BF, Shamoun JM (1997). The significance of digastric muscle contouring for rejuvenation of the submental area of the face. Plastic and Reconstructive Surgery, 99(6).

### `neck_skin_quality`

**Type:** ordinal · **Scale:** neck_skin_qualitative · **Min visible extent:** head_shoulders

Valid values:

- `smooth_youthful` — *Smooth / youthful*
- `average` — *Average*: Some texture or fine lines visible.
- `loose_lax` — *Loose / lax*: Visible cervical skin laxity; redundant skin folds.
- `wrinkled` — *Wrinkled*: Pronounced cervical wrinkles or 'necklace lines'.

Reference: Aligned with the Connell-Shamoun and Ellenbogen-Karlin neck-aesthetics descriptors.

