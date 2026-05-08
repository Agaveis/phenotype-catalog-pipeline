# Head shape observation prompt

<!-- Auto-generated from vocabularies/head-shape.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs -->

Atlas category: `head-shape` · Version: 1.0.0
UBERON: `UBERON:0000033`

## Instruction

Assess the following head shape-related phenotype dimensions from the photograph. Return one value per dimension, drawn only from the listed valid buckets. If a dimension cannot be assessed (anatomy not visible, image quality too poor, framing too narrow), return `null` for that dimension. Do not guess — `null` is preferred over an unreliable bucket assignment.

For each dimension, also return a per-dimension confidence score (0.0–1.0) reflecting how reliably you could assess that specific dimension in this photograph.

Return a single JSON object, no prose, with shape:

```json
{
  "cephalic_index_category": "<one of the valid buckets, or null>",
  "cephalic_index_category_confidence": "<0.0-1.0, or null>",
  "occipital_profile": "<one of the valid buckets, or null>",
  "occipital_profile_confidence": "<0.0-1.0, or null>",
  "cranial_height": "<one of the valid buckets, or null>",
  "cranial_height_confidence": "<0.0-1.0, or null>",
  "head_circumference_qualitative": "<one of the valid buckets, or null>",
  "head_circumference_qualitative_confidence": "<0.0-1.0, or null>"
}
```

## Dimensions

### `cephalic_index_category`

**Type:** ordinal · **Scale:** cephalic_index_clinical · **Min visible extent:** head_only

> Best assessed from a top-down view, which is rarely available in standard photographs. Frontal and lateral views allow only crude approximation. Hair volume substantially affects perceived width; assessment confidence should reflect this.

Valid values:

- `dolichocephalic` — *Dolichocephalic (long)*: Cephalic index < ~76; head substantially longer than wide. Clinical context: scaphocephaly when severe in infants.
- `mesocephalic` — *Mesocephalic (medium)*: Cephalic index ~76-81; balanced head shape.
- `brachycephalic` — *Brachycephalic (short / wide)*: Cephalic index ~81-85; head substantially wider relative to length.
- `hyperbrachycephalic` — *Hyperbrachycephalic*: Cephalic index > ~85; pronounced width-to-length ratio. Clinical context: positional plagiocephaly in infants.
- `unclear` — *Unclear*: Hairstyle or framing prevents reliable head-shape assessment.

Reference: Cephalic index = (maximum head breadth / maximum head length) × 100. Modern clinical use: van Vlimmeren LA et al. (2007). Effect of pediatric physical therapy on deformational plagiocephaly. Archives of Pediatric and Adolescent Medicine. Boas F (1912) demonstrated environmental variability in cephalic index that undermines its use as a stable population-classification marker; included here as a continuous developmental dimension with explicit framing.

### `occipital_profile`

**Type:** categorical · **Scale:** occipital_qualitative · **Min visible extent:** head_only

> Best assessed from lateral or three-quarter view; hair coverage substantially affects assessment.

Valid values:

- `well_rounded` — *Well-rounded*: Smooth posterior curve; pronounced occipital prominence.
- `flat_brachycephalic` — *Flat*: Reduced posterior projection; flatter occipital silhouette. Often correlated with brachycephalic cephalic index.
- `occipital_bun` — *Occipital bun*: Pronounced posterior projection of the occiput; visible bulge.
- `asymmetric_plagiocephaly` — *Asymmetric (plagiocephalic)*: Notable left-right asymmetry of the occipital region.

Reference: Aligned with descriptors used in pediatric-craniofacial literature on occipital morphology.

### `cranial_height`

**Type:** ordinal · **Scale:** cranial_height_qualitative · **Min visible extent:** head_only

Valid values:

- `low` — *Low*: Reduced cranial height; vertex sits close to the level of the supraorbital ridge plus a small margin.
- `average` — *Average*: Standard cranial height.
- `tall` — *Tall*: Pronounced cranial height; vertex sits well above the supraorbital ridge. Associated with sagittal-suture craniosynostosis when extreme in infants; constitutional in adults.

Reference: Aligned with descriptors used in pediatric-orthotic and craniosynostosis literature.

### `head_circumference_qualitative`

**Type:** ordinal · **Scale:** head_circumference_qualitative · **Min visible extent:** full_body

> Reliable assessment requires whole-body framing for proportional comparison; head-only photographs cannot resolve this dimension.

Valid values:

- `small` — *Small*: Head appears small relative to body; clinical microcephaly when extreme in infants.
- `average` — *Average*: Standard proportional head size.
- `large` — *Large*: Head appears large relative to body; clinical macrocephaly when extreme.

Reference: Aligned with the descriptors used in pediatric-growth-curve literature; reliable measurement requires a tape measure across the maximum circumference.

