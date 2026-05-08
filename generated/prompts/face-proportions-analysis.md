# Face proportions observation prompt

<!-- Auto-generated from vocabularies/face-proportions.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs -->

Atlas category: `face-proportions` · Version: 1.0.0
UBERON: `UBERON:0001456`

## Instruction

Assess the following face proportions-related phenotype dimensions from the photograph. Return one value per dimension, drawn only from the listed valid buckets. If a dimension cannot be assessed (anatomy not visible, image quality too poor, framing too narrow), return `null` for that dimension. Do not guess — `null` is preferred over an unreliable bucket assignment.

For each dimension, also return a per-dimension confidence score (0.0–1.0) reflecting how reliably you could assess that specific dimension in this photograph.

Return a single JSON object, no prose, with shape:

```json
{
  "face_shape": "<one of the valid buckets, or null>",
  "face_shape_confidence": "<0.0-1.0, or null>",
  "facial_thirds_balance": "<one of the valid buckets, or null>",
  "facial_thirds_balance_confidence": "<0.0-1.0, or null>",
  "cheekbone_prominence": "<one of the valid buckets, or null>",
  "cheekbone_prominence_confidence": "<0.0-1.0, or null>",
  "cheekbone_width": "<one of the valid buckets, or null>",
  "cheekbone_width_confidence": "<0.0-1.0, or null>",
  "midface_morphology": "<one of the valid buckets, or null>",
  "midface_morphology_confidence": "<0.0-1.0, or null>",
  "forehead_height": "<one of the valid buckets, or null>",
  "forehead_height_confidence": "<0.0-1.0, or null>",
  "forehead_shape": "<one of the valid buckets, or null>",
  "forehead_shape_confidence": "<0.0-1.0, or null>"
}
```

## Dimensions

### `face_shape`

**Type:** categorical · **Scale:** face_shape_qualitative · **Min visible extent:** head_only

Valid values:

- `oval` — *Oval*: Length approximately 1.5x width; balanced forehead and jaw with widest point at cheekbones.
- `round` — *Round*: Length and width approximately equal; soft jaw and forehead curves.
- `square` — *Square*: Length and width approximately equal; angular jaw and forehead.
- `heart` — *Heart*: Wide forehead, narrow jaw, often with a pointed chin.
- `diamond` — *Diamond*: Narrow forehead and jaw with widest point at cheekbones; pronounced cheek prominence.
- `oblong_long` — *Oblong / long*: Length substantially greater than width; balanced forehead and jaw.
- `triangular_inverted` — *Triangular (inverted)*: Wide jaw, narrow forehead — opposite of heart-shape.
- `asymmetric` — *Asymmetric*: Notable left-right facial asymmetry as the dominant feature.

Reference: Aligned with cosmetology-and-anthropometry shape descriptors used in styling and forensic-anthropology literature.

### `facial_thirds_balance`

**Type:** categorical · **Scale:** facial_thirds_qualitative · **Min visible extent:** head_only

> Hairline position can be obscured by hairstyle; trichion may not be reliably visible.

Valid values:

- `balanced_thirds` — *Balanced thirds*: All three vertical thirds approximately equal.
- `long_upper` — *Long upper third*: Forehead substantially longer than the other thirds.
- `long_middle` — *Long middle third*: Midface (glabella to subnasale) substantially longer.
- `long_lower` — *Long lower third*: Lower face (subnasale to menton) substantially longer; common with prognathism or chin elongation.
- `short_upper` — *Short upper third*: Low hairline; reduced forehead height.
- `short_lower` — *Short lower third*: Reduced lower-face vertical dimension; common with retrognathia.

Reference: Farkas LG (1994). Anthropometry of the Head and Face, 2nd Edition. Aesthetic reference: upper third (trichion-glabella), middle third (glabella-subnasale), lower third (subnasale-menton) approximately equal in the European-population norm.

### `cheekbone_prominence`

**Type:** ordinal · **Scale:** zygomatic_prominence_qualitative · **Min visible extent:** head_only

Valid values:

- `flat_minimal` — *Flat / minimal*: Cheekbones not visible as a discrete landmark.
- `moderate` — *Moderate*: Cheekbones visible but not prominent.
- `high_prominent` — *High / prominent*: Pronounced anterior projection; defined cheekbone landmarks. Common in some East Asian, indigenous American, and Slavic populations.

Reference: Aligned with the malar-augmentation literature; Ricketts esthetic plane references the malar region.

### `cheekbone_width`

**Type:** ordinal · **Scale:** bizygomatic_breadth_qualitative · **Min visible extent:** head_only

Valid values:

- `narrow` — *Narrow*: Bizygomatic breadth narrow relative to face height.
- `balanced` — *Balanced*: Bizygomatic breadth in proportional reference range.
- `wide` — *Wide*: Bizygomatic breadth substantially wide; common in East Asian and indigenous populations.

Reference: Farkas LG (1994). Reference: bizygomatic breadth (zy-zy) is typically the widest face dimension in the European-population norm.

### `midface_morphology`

**Type:** categorical · **Scale:** midface_qualitative · **Min visible extent:** head_only

Valid values:

- `full_youthful` — *Full / youthful*: Anterior midface fullness; smooth nasolabial fold; defined cheek apple.
- `balanced` — *Balanced*: Average midface fullness.
- `flattened_aged` — *Flattened / aged*: Reduced midface fullness; deepened nasolabial fold; visible tear-trough; mid-cheek descent.
- `very_full` — *Very full*: Pronounced anterior midface fullness — constitutional or augmented.

Reference: Aligned with facial-aging and aesthetic-medicine descriptors of the midface region.

### `forehead_height`

**Type:** ordinal · **Scale:** forehead_height_proportional · **Min visible extent:** head_only

> Hairstyle and grooming substantially affect visible forehead height; observation should reflect visible state.

Valid values:

- `low` — *Low*: Forehead height substantially below proportional reference; low hairline.
- `balanced` — *Balanced*: Forehead height approximately matches other facial thirds.
- `tall` — *Tall*: Forehead height substantially above proportional reference; high hairline or recession.

Reference: Farkas LG (1994). Anthropometry of the Head and Face. Reference: forehead height (trichion to glabella) approximately equal to the other facial thirds in the aesthetic norm.

### `forehead_shape`

**Type:** categorical · **Scale:** forehead_shape_qualitative · **Min visible extent:** head_only

> Best assessed from lateral view.

Valid values:

- `rounded_convex` — *Rounded / convex*: Smoothly rounded forehead profile; soft slope.
- `flat_vertical` — *Flat / vertical*: Forehead nearly vertical in profile; minimal anterior curvature.
- `sloping` — *Sloping (posterior)*: Forehead slopes posteriorly from glabella; common in male morphology with prominent supraorbital ridges.
- `bossing` — *Frontal bossing*: Pronounced anterior projection of the frontal bone; less common variant.

Reference: Aligned with aesthetic-medicine descriptors of forehead morphology used in fillers / forehead-augmentation context.

