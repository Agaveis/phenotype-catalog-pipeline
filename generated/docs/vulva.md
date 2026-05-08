# Vulva — phenotype taxonomy

<!-- Auto-generated from vocabularies/vulva.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs -->

> **Atlas category:** `vulva` · **Version:** 1.0.0 · **License:** CC-BY-4.0
> **UBERON:** `UBERON:0000997` · **FMA:** `FMA:20462`

External female genital anatomy: mons pubis, labia majora, labia minora, clitoral hood, perineum. Dimensions are drawn from aesthetic-gynecology and plastic-surgery literature (Hodgkinson, Motakef, Felicio, Lloyd) and from the Lloyd 2005 study of female genital morphological variation. The schema is published in the canonical vocabulary for academic transparency and ontology interoperability; **observations against these dimensions are not populated from public-domain photographs**, are not exported to the HuggingFace dataset, and any data collection requires explicit consent and source documentation. See the `observations_source_policy: "internal_only"` file-level flag and the README's two-layer extension model.

## Dimensions overview

| Dimension | Type | Scale | Photo-observable | Values |
|---|---|---|---|---|
| `labia_majora_size` | ordinal | labia_majora_size_qualitative | not_assessable | 3 |
| `labia_majora_pigmentation` | ordinal | labial_pigmentation_qualitative | not_assessable | 3 |
| `labia_minora_protrusion` | categorical | motakef_2015 | not_assessable | 4 |
| `labia_minora_morphology` | categorical | labia_minora_shape_qualitative | not_assessable | 4 |
| `labial_symmetry` | ordinal | labial_symmetry_qualitative | not_assessable | 4 |
| `clitoral_hood_morphology` | categorical | clitoral_hood_qualitative | not_assessable | 4 |
| `mons_pubis_prominence` | ordinal | mons_prominence_qualitative | not_assessable | 3 |
| `perineal_distance` | ordinal | perineal_body_qualitative | not_assessable | 3 |
| `introitus_visibility_at_rest` | ordinal | introitus_visibility_qualitative | not_assessable | 3 |

## `labia_majora_size` — Labia majora — size

**Type:** ordinal · **Scale:** labia_majora_size_qualitative

**Citation:** Lloyd J, Crouch NS, Minto CL, Liao LM, Creighton SM (2005). Female genital appearance: 'normality' unfolds. BJOG, 112(5): 643-646.

Relative size of the labia majora envelope from the mons pubis to the perineum.

**Observability:** `from_photograph: not_assessable` · `requires_unclothed: true` · `minimum_visible_extent: full_body`

### Valid values

- **`small_atrophic`** — Small / atrophic: Limited subcutaneous fullness; minimal coverage of underlying structures. Common with low body-fat percentage and after menopause.
- **`moderate`** — Moderate: Average labia majora fullness.
- **`full`** — Full: Pronounced subcutaneous fullness; substantial coverage of underlying structures.

## `labia_majora_pigmentation` — Labia majora — pigmentation

**Type:** ordinal · **Scale:** labial_pigmentation_qualitative

**Citation:** Pigmentation differential common in dermatology and aesthetic-gynecology literature; aligned with the descriptors used in Hauben & Mahler 1983-style relative-pigmentation analysis.

Pigmentation of the labia majora relative to surrounding pubic / inner-thigh skin.

**Observability:** `from_photograph: not_assessable` · `requires_unclothed: true` · `minimum_visible_extent: full_body`

### Valid values

- **`matches_surrounding`** — Matches surrounding skin: Labial pigmentation similar to surrounding pubic skin.
- **`moderately_darker`** — Moderately darker: Visible darkening of labial skin relative to surrounding.
- **`markedly_darker`** — Markedly darker: Strongly pigmented labia substantially darker than surrounding skin. Constitutional in some populations; also age- and hormone-related.

## `labia_minora_protrusion` — Labia minora — protrusion

**Type:** categorical · **Scale:** motakef_2015

**Citation:** Motakef S, Rodriguez-Feliz J, Chung MT, Ingargiola MJ, Wong VW, Patel A (2015). Vaginal labiaplasty: current practices and a simplified classification system for labial protrusion. Plastic and Reconstructive Surgery, 135(3): 774-788.

Position of the labia minora edge relative to the labia majora edge. The Motakef simplified classification is the contemporary standard.

**Observability:** `from_photograph: not_assessable` · `requires_unclothed: true` · `minimum_visible_extent: full_body`

### Valid values

- **`class_1_no_protrusion`** — Class I — no protrusion: Labia minora contained entirely within the labia majora; not visible at rest with legs together.
- **`class_2_protrusion_under_3cm`** — Class II — protrusion <3 cm: Labia minora protrude beyond the labia majora by less than approximately 3 cm.
- **`class_3_protrusion_over_3cm`** — Class III — protrusion ≥3 cm: Labia minora protrude beyond the labia majora by approximately 3 cm or more.
- **`asymmetric`** — Asymmetric: Notable left-right protrusion difference as the dominant feature.

## `labia_minora_morphology` — Labia minora — morphology

**Type:** categorical · **Scale:** labia_minora_shape_qualitative

**Citation:** Aesthetic-gynecology shape descriptors aligned with Felicio (1992) and subsequent classification literature.

Edge morphology and contour of the labia minora.

**Observability:** `from_photograph: not_assessable` · `requires_unclothed: true` · `minimum_visible_extent: full_body`

### Valid values

- **`smooth_edged`** — Smooth-edged: Even, smooth labial edges without significant ruffling or scalloping.
- **`ruffled`** — Ruffled / scalloped: Visible scalloping or rippling along the labial edge.
- **`thickened`** — Thickened: Visibly thicker labial tissue along the edge.
- **`thin_attenuated`** — Thin / attenuated: Reduced labial tissue thickness.

## `labial_symmetry` — Labial symmetry

**Type:** ordinal · **Scale:** labial_symmetry_qualitative

**Citation:** Aligned with surgical-gynecology symmetry descriptors.

Degree of left-right labial symmetry. Substantial constitutional asymmetry is common; this dimension captures the visible degree.

**Observability:** `from_photograph: not_assessable` · `requires_unclothed: true` · `minimum_visible_extent: full_body`

### Valid values

- **`symmetric`** — Symmetric: No discernible left-right asymmetry.
- **`mild_asymmetry`** — Mild asymmetry: Subtle left-right size or shape difference.
- **`moderate_asymmetry`** — Moderate asymmetry: Clearly visible left-right difference.
- **`marked_asymmetry`** — Marked asymmetry: Substantial left-right divergence; one side notably larger or differently shaped.

## `clitoral_hood_morphology` — Clitoral hood morphology

**Type:** categorical · **Scale:** clitoral_hood_qualitative

**Citation:** Aesthetic-gynecology descriptors; aligned with the Hodgkinson tradition and subsequent labiaplasty / hoodoplasty literature.

Coverage of the clitoral glans by the prepuce (clitoral hood).

**Observability:** `from_photograph: not_assessable` · `requires_unclothed: true` · `minimum_visible_extent: full_body`

### Valid values

- **`covered`** — Covered: Glans fully concealed by prepuce at rest.
- **`partial_exposure`** — Partially exposed: Glans partially visible at rest; prepuce covers a portion.
- **`fully_exposed`** — Fully exposed: Glans visible at rest; minimal prepuce coverage.
- **`redundant_hooded`** — Redundant / hooded: Pronounced prepuce with excess folds; multiple visible folds laterally.

## `mons_pubis_prominence` — Mons pubis prominence

**Type:** ordinal · **Scale:** mons_prominence_qualitative

**Citation:** Aligned with body-contouring and abdominoplasty literature on suprapubic / mons-pubis fullness.

Anterior projection of the mons pubis from the pubic bone, primarily a function of subcutaneous fat.

**Observability:** `from_photograph: not_assessable` · `requires_unclothed: true` · `minimum_visible_extent: full_body`

### Valid values

- **`flat`** — Flat: Minimal subcutaneous fullness; pubic bone palpable just under skin.
- **`moderate`** — Moderate: Average mons pubis prominence.
- **`prominent`** — Prominent: Substantial subcutaneous fullness; pronounced anterior projection. Common with elevated BMI.

## `perineal_distance` — Perineal distance

**Type:** ordinal · **Scale:** perineal_body_qualitative

**Citation:** Aligned with obstetric and pelvic-floor literature on perineal-body length (PBL).

Distance from posterior fourchette to anterior anal margin (perineal body length).

**Observability:** `from_photograph: not_assessable` · `requires_unclothed: true` · `minimum_visible_extent: full_body`

### Valid values

- **`short`** — Short: Perineal body shorter than approximately 2.5 cm.
- **`normal`** — Normal: Perineal body approximately 2.5-4 cm.
- **`long`** — Long: Perineal body longer than approximately 4 cm.

## `introitus_visibility_at_rest` — Introitus visibility at rest

**Type:** ordinal · **Scale:** introitus_visibility_qualitative

**Citation:** Aligned with pelvic-anatomy descriptors used in obstetric / aesthetic-gynecology literature on labial morphology.

Visibility of the vaginal introitus at rest, a function of labial size and protrusion together.

**Observability:** `from_photograph: not_assessable` · `requires_unclothed: true` · `minimum_visible_extent: full_body`

### Valid values

- **`concealed`** — Concealed: Introitus not visible at rest with legs together; fully covered by labia.
- **`partial_visible`** — Partially visible: Introitus partially visible; labia minora separated or short.
- **`exposed`** — Exposed: Introitus visible at rest; minimal labial coverage.

## References

- Lloyd J, Crouch NS, Minto CL, Liao LM, Creighton SM (2005). Female genital appearance: 'normality' unfolds. BJOG, 112(5): 643-646.
- Motakef S, Rodriguez-Feliz J, Chung MT, Ingargiola MJ, Wong VW, Patel A (2015). Vaginal labiaplasty: current practices and a simplified classification system for labial protrusion. Plastic and Reconstructive Surgery, 135(3): 774-788.
- Hodgkinson DJ, Hait G (1984). Aesthetic vaginal labioplasty. Plastic and Reconstructive Surgery, 74(3): 414-416.
- Felicio Y de A (1992). Labial surgery. Aesthetic Surgery Journal, 27(3).
- Hauben DJ, Mahler D (1983). A reappraisal of the importance of areolar pigmentation. Plastic and Reconstructive Surgery, 71(6).

