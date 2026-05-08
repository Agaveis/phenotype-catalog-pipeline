# Face proportions — phenotype taxonomy

<!-- Auto-generated from vocabularies/face-proportions.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs -->

> **Atlas category:** `face-proportions` · **Version:** 1.0.0 · **License:** CC-BY-4.0
> **UBERON:** `UBERON:0001456` · **FMA:** `FMA:24728`

Whole-face proportional dimensions: face shape, facial-thirds balance, cheekbone prominence, malar projection, midface morphology, forehead. Captures the macro-level face morphology that's not localized to any single feature. Dimensions draw from craniofacial anthropometry (Farkas), facial-aesthetics literature (Powell-Humphreys, Ricketts), and contemporary aesthetic-medicine references on the diverse-patient-population face.

## Dimensions overview

| Dimension | Type | Scale | Photo-observable | Values |
|---|---|---|---|---|
| `face_shape` | categorical | face_shape_qualitative | high | 8 |
| `facial_thirds_balance` | categorical | facial_thirds_qualitative | medium | 6 |
| `cheekbone_prominence` | ordinal | zygomatic_prominence_qualitative | high | 3 |
| `cheekbone_width` | ordinal | bizygomatic_breadth_qualitative | high | 3 |
| `midface_morphology` | categorical | midface_qualitative | high | 4 |
| `forehead_height` | ordinal | forehead_height_proportional | medium | 3 |
| `forehead_shape` | categorical | forehead_shape_qualitative | medium | 4 |

## `face_shape` — Overall face shape

**Type:** categorical · **Scale:** face_shape_qualitative

**Citation:** Aligned with cosmetology-and-anthropometry shape descriptors used in styling and forensic-anthropology literature.

Macro-level shape of the face derived from facial outline (forehead width, cheekbone width, jaw width, face length).

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

### Valid values

- **`oval`** — Oval: Length approximately 1.5x width; balanced forehead and jaw with widest point at cheekbones.
- **`round`** — Round: Length and width approximately equal; soft jaw and forehead curves.
- **`square`** — Square: Length and width approximately equal; angular jaw and forehead.
- **`heart`** — Heart: Wide forehead, narrow jaw, often with a pointed chin.
- **`diamond`** — Diamond: Narrow forehead and jaw with widest point at cheekbones; pronounced cheek prominence.
- **`oblong_long`** — Oblong / long: Length substantially greater than width; balanced forehead and jaw.
- **`triangular_inverted`** — Triangular (inverted): Wide jaw, narrow forehead — opposite of heart-shape.
- **`asymmetric`** — Asymmetric: Notable left-right facial asymmetry as the dominant feature.

## `facial_thirds_balance` — Facial thirds balance

**Type:** categorical · **Scale:** facial_thirds_qualitative

**Citation:** Farkas LG (1994). Anthropometry of the Head and Face, 2nd Edition. Aesthetic reference: upper third (trichion-glabella), middle third (glabella-subnasale), lower third (subnasale-menton) approximately equal in the European-population norm.

Relative proportions of the three classical facial thirds.

**Observability:** `from_photograph: medium` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

> Hairline position can be obscured by hairstyle; trichion may not be reliably visible.

### Valid values

- **`balanced_thirds`** — Balanced thirds: All three vertical thirds approximately equal.
- **`long_upper`** — Long upper third: Forehead substantially longer than the other thirds.
- **`long_middle`** — Long middle third: Midface (glabella to subnasale) substantially longer.
- **`long_lower`** — Long lower third: Lower face (subnasale to menton) substantially longer; common with prognathism or chin elongation.
- **`short_upper`** — Short upper third: Low hairline; reduced forehead height.
- **`short_lower`** — Short lower third: Reduced lower-face vertical dimension; common with retrognathia.

## `cheekbone_prominence` — Cheekbone (zygomatic) prominence

**Type:** ordinal · **Scale:** zygomatic_prominence_qualitative

**Citation:** Aligned with the malar-augmentation literature; Ricketts esthetic plane references the malar region.

Anterior projection of the zygomatic prominence.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

### Valid values

- **`flat_minimal`** — Flat / minimal: Cheekbones not visible as a discrete landmark.
- **`moderate`** — Moderate: Cheekbones visible but not prominent.
- **`high_prominent`** — High / prominent: Pronounced anterior projection; defined cheekbone landmarks. Common in some East Asian, indigenous American, and Slavic populations.

## `cheekbone_width` — Cheekbone width (bizygomatic breadth)

**Type:** ordinal · **Scale:** bizygomatic_breadth_qualitative

**Citation:** Farkas LG (1994). Reference: bizygomatic breadth (zy-zy) is typically the widest face dimension in the European-population norm.

Width of the face at the cheekbones, proportional to face height.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

### Valid values

- **`narrow`** — Narrow: Bizygomatic breadth narrow relative to face height.
- **`balanced`** — Balanced: Bizygomatic breadth in proportional reference range.
- **`wide`** — Wide: Bizygomatic breadth substantially wide; common in East Asian and indigenous populations.

## `midface_morphology` — Midface morphology

**Type:** categorical · **Scale:** midface_qualitative

**Citation:** Aligned with facial-aging and aesthetic-medicine descriptors of the midface region.

Soft-tissue contour of the midface (the region between the lower eyelid and the upper lip).

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

### Valid values

- **`full_youthful`** — Full / youthful: Anterior midface fullness; smooth nasolabial fold; defined cheek apple.
- **`balanced`** — Balanced: Average midface fullness.
- **`flattened_aged`** — Flattened / aged: Reduced midface fullness; deepened nasolabial fold; visible tear-trough; mid-cheek descent.
- **`very_full`** — Very full: Pronounced anterior midface fullness — constitutional or augmented.

## `forehead_height` — Forehead height

**Type:** ordinal · **Scale:** forehead_height_proportional

**Citation:** Farkas LG (1994). Anthropometry of the Head and Face. Reference: forehead height (trichion to glabella) approximately equal to the other facial thirds in the aesthetic norm.

Vertical dimension of the forehead from hairline (trichion) to glabella, proportional to lower facial thirds.

**Observability:** `from_photograph: medium` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

> Hairstyle and grooming substantially affect visible forehead height; observation should reflect visible state.

### Valid values

- **`low`** — Low: Forehead height substantially below proportional reference; low hairline.
- **`balanced`** — Balanced: Forehead height approximately matches other facial thirds.
- **`tall`** — Tall: Forehead height substantially above proportional reference; high hairline or recession.

## `forehead_shape` — Forehead shape (sagittal)

**Type:** categorical · **Scale:** forehead_shape_qualitative

**Citation:** Aligned with aesthetic-medicine descriptors of forehead morphology used in fillers / forehead-augmentation context.

Profile shape of the forehead in lateral view.

**Observability:** `from_photograph: medium` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

> Best assessed from lateral view.

### Valid values

- **`rounded_convex`** — Rounded / convex: Smoothly rounded forehead profile; soft slope.
- **`flat_vertical`** — Flat / vertical: Forehead nearly vertical in profile; minimal anterior curvature.
- **`sloping`** — Sloping (posterior): Forehead slopes posteriorly from glabella; common in male morphology with prominent supraorbital ridges.
- **`bossing`** — Frontal bossing: Pronounced anterior projection of the frontal bone; less common variant.

## References

- Farkas LG (1994). Anthropometry of the Head and Face, 2nd Edition. Raven Press.
- Powell N, Humphreys B (1984). Proportions of the Aesthetic Face. Thieme.
- Ricketts RM (1982). Divine proportion in facial esthetics. Clinics in Plastic Surgery, 9(4): 401-422.
- Sundaram H, Liew S, Signorini M, et al. (2016). Global aesthetics consensus: hyaluronic acid fillers and botulinum toxin type A — recommendations for combined treatment and optimizing outcomes in diverse patient populations. Plastic and Reconstructive Surgery, 137(5).

