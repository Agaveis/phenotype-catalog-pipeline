# Hands — phenotype taxonomy

<!-- Auto-generated from vocabularies/hands.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs -->

> **Atlas category:** `hands` · **Version:** 1.0.0 · **License:** CC-BY-4.0
> **UBERON:** `UBERON:0002398` · **FMA:** `FMA:9712`

Hand morphology: hand size, palm shape, finger length proportions (digit ratio 2D:4D), finger morphology, nail morphology, knuckle prominence. The 2D:4D digit ratio is the most-cited individual hand-anthropometry dimension; Manning's prenatal-androgen-exposure hypothesis remains debated but the ratio itself is a well-established measurement with population-level variation.

## Dimensions overview

| Dimension | Type | Scale | Photo-observable | Values |
|---|---|---|---|---|
| `hand_size_relative` | ordinal | hand_size_qualitative | medium | 3 |
| `palm_shape` | categorical | palm_shape_qualitative | high | 3 |
| `digit_ratio_2D_4D` | categorical | manning_2D_4D | medium | 3 |
| `finger_morphology` | categorical | finger_thickness_qualitative | high | 5 |
| `knuckle_prominence` | ordinal | knuckle_prominence_qualitative | high | 3 |
| `nail_shape` | categorical | nail_shape_qualitative | high | 7 |
| `wrist_breadth_relative` | ordinal | wrist_breadth_qualitative | medium | 3 |

## `hand_size_relative` — Hand size (relative to body)

**Type:** ordinal · **Scale:** hand_size_qualitative

**Citation:** Aligned with anthropometric descriptors of hand-length proportional to height (typical ratio ~10.4-11.0%).

Hand length relative to body height, captured qualitatively.

**Observability:** `from_photograph: medium` · `requires_unclothed: false` · `minimum_visible_extent: full_body`

### Valid values

- **`small`** — Small
- **`average`** — Average
- **`large`** — Large

## `palm_shape` — Palm shape

**Type:** categorical · **Scale:** palm_shape_qualitative

**Citation:** Aligned with descriptors used in chiromancy-adjacent hand-anthropometry literature.

Shape of the palm in proportional terms.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: torso`

### Valid values

- **`square`** — Square: Palm length approximately equal to palm width.
- **`rectangular_long`** — Rectangular / long: Palm length substantially exceeds width.
- **`wide_short`** — Wide / short: Palm width approaches or exceeds length.

## `digit_ratio_2D_4D` — 2D:4D digit ratio

**Type:** categorical · **Scale:** manning_2D_4D

**Citation:** Manning JT, Scutt D, Wilson J, Lewis-Jones DI (1998). The ratio of 2nd to 4th digit length: a predictor of sperm numbers and concentrations of testosterone, luteinizing hormone and oestrogen. Human Reproduction, 13(11): 3000-3004.

Ratio of index-finger length (2D) to ring-finger length (4D). Sex-dimorphic on average (males ~0.95-0.98, females ~0.97-1.00) with substantial individual variation.

**Observability:** `from_photograph: medium` · `requires_unclothed: false` · `minimum_visible_extent: torso`

> Best assessed when hand is open, palm-up or palm-down with extended fingers; finger curl confounds assessment.

### Valid values

- **`low_4D_dominant`** — Low (ring finger longer): 2D:4D ratio < ~0.95; ring finger clearly longer than index. More common in males.
- **`balanced`** — Balanced: 2D:4D ratio ~0.95-1.00; subtle or no length difference.
- **`high_2D_dominant`** — High (index finger longer): 2D:4D ratio > ~1.00; index finger clearly longer than ring. Less common; more common in females.

## `finger_morphology` — Finger morphology

**Type:** categorical · **Scale:** finger_thickness_qualitative

**Citation:** Aligned with hand-anthropometry descriptors used in glove-fitting and ergonomics literature.

Overall thickness and shape of the fingers.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: torso`

### Valid values

- **`slender`** — Slender: Long, thin fingers; narrow fingertips.
- **`balanced`** — Balanced: Average finger thickness.
- **`thick`** — Thick: Substantial finger girth.
- **`tapered`** — Tapered: Wider at the base, narrower at the tips.
- **`spatulate`** — Spatulate: Widening at the fingertips.

## `knuckle_prominence` — Knuckle prominence

**Type:** ordinal · **Scale:** knuckle_prominence_qualitative

**Citation:** Aligned with surface-anatomy descriptors of metacarpophalangeal-joint visibility.

Visibility of the metacarpophalangeal joints as surface landmarks.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: torso`

### Valid values

- **`subtle`** — Subtle: Knuckles barely visible; soft-tissue coverage smooth.
- **`moderate`** — Moderate
- **`prominent`** — Prominent: Clear knuckle landmarks even at rest.

## `nail_shape` — Nail shape (when ungroomed)

**Type:** categorical · **Scale:** nail_shape_qualitative

**Citation:** Aligned with descriptors used in dermatology and manicure literature.

Native fingernail shape when not artificially shaped.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: torso`

### Valid values

- **`square`** — Square
- **`round`** — Round
- **`oval`** — Oval
- **`almond`** — Almond
- **`stiletto`** — Stiletto / pointed: Often artificial; native nails rarely take this shape.
- **`groomed_artificial`** — Groomed / artificial: Visible manicure or artificial nails; native shape not assessable.
- **`not_visible`** — Not visible

## `wrist_breadth_relative` — Wrist breadth (relative)

**Type:** ordinal · **Scale:** wrist_breadth_qualitative

**Citation:** Aligned with frame-size literature; wrist circumference is the standard Frisancho frame-size proxy.

Wrist circumference relative to body proportions. Different from but related to body-shape.json's frame_size_estimate.

**Observability:** `from_photograph: medium` · `requires_unclothed: false` · `minimum_visible_extent: torso`

### Valid values

- **`narrow`** — Narrow
- **`average`** — Average
- **`wide`** — Wide

## References

- Manning JT, Scutt D, Wilson J, Lewis-Jones DI (1998). The ratio of 2nd to 4th digit length: a predictor of sperm numbers and concentrations of testosterone, luteinizing hormone and oestrogen. Human Reproduction, 13(11): 3000-3004.
- Frisancho AR (1984). New standards of weight and body composition by frame size and height. American Journal of Clinical Nutrition, 40(4): 808-819.
- Greiner TM, Gordon CC (1990). Anthropometry and Mass Distribution for Human Analogues. US Army Natick Laboratories Technical Report.

