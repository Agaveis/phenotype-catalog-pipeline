# Breast — phenotype taxonomy

<!-- Auto-generated from vocabularies/breast.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs -->

> **Atlas category:** `breast` · **Version:** 1.0.0 · **License:** CC-BY-4.0
> **UBERON:** `UBERON:0000310` · **FMA:** `FMA:9601`

Anatomical and morphological observations of the female breast. Dimensions are drawn from established plastic-surgery, dermatology, oncology, and aesthetic-anthropometry literature. The schema is comprehensive — some dimensions are not assessable from a single photograph and are flagged accordingly via the `observability` block.

## Dimensions overview

| Dimension | Type | Scale | Photo-observable | Values |
|---|---|---|---|---|
| `shape` | categorical | halls_extended | high | 7 |
| `ptosis_grade` | ordinal | regnault_1976 | high | 5 |
| `size_estimate` | ordinal | us_cup_size_proxy | medium | 9 |
| `base_diameter` | ordinal | narrow_medium_wide_relative_to_chest | high | 3 |
| `projection` | ordinal | low_moderate_high_relative_to_base | high | 3 |
| `upper_pole_fullness` | categorical | mallucci_branford_2014 | high | 3 |
| `lower_pole_fullness` | categorical | mallucci_branford_2014 | high | 3 |
| `inframammary_fold_definition` | ordinal | imf_definition_qualitative | medium | 3 |
| `areolar_diameter_relative` | ordinal | areolar_diameter_relative_to_breast_base | high | 3 |
| `areolar_pigmentation` | ordinal | areolar_pigmentation_qualitative | high | 5 |
| `nipple_morphology` | categorical | hoffman_extended | medium | 5 |
| `symmetry` | ordinal | symmetry_qualitative | high | 4 |
| `density_inference` | categorical | birads_5e | not_assessable | 4 |
| `developmental_stage` | ordinal | tanner_breast_b1_b5 | high | 5 |

## `shape` — Shape

**Type:** categorical · **Scale:** halls_extended

**Citation:** Halls MH (1998). Aesthetic Plastic Surgery, 22(5). Extended with categories described in subsequent plastic-surgery literature (Mallucci & Branford 2014; Goldwyn 1999).

Overall morphology of the breast envelope, classified along an extended categorical scheme combining the original Halls (1998) shape classes with widely-used additions from subsequent aesthetic-anatomy literature.

**Observability:** `from_photograph: high` · `requires_unclothed: true` · `minimum_visible_extent: torso`

### Valid values

- **`round`** — Round: Symmetric upper- and lower-pole fullness with approximately equal projection above and below the nipple-areolar complex (NAC). Base width approximates projection.
- **`teardrop`** — Teardrop: Less upper-pole fullness than lower; greater projection below the NAC than above. NAC sits at or near the apex of projection.
- **`athletic`** — Athletic: Wider base, smaller volume, more muscular and less subcutaneous-fat envelope. Projection is reduced relative to base width.
- **`slender`** — Slender / conical: Narrow base with conical projection; reduced volume; pointed apex at or near the NAC.
- **`asymmetric`** — Asymmetric: Volume or shape difference greater than approximately one-half cup size between left and right breasts. Used when asymmetry is the dominant morphological feature, not as a fine-grained quantification.
- **`tuberous`** — Tuberous: Constricted base diameter, herniated parenchyma into the areola, narrow inframammary fold, and elevated NAC. Per Grolleau et al. (1999) classification.
- **`east_west`** — East-west / wide-set: Lateral splay of the NAC away from midline; intermammary distance approximates or exceeds breast base diameter. Common variant noted in aesthetic-anatomy literature.

## `ptosis_grade` — Ptosis grade

**Type:** ordinal · **Scale:** regnault_1976

**Citation:** Regnault P (1976). Breast ptosis: definition and treatment. Clinics in Plastic Surgery, 3(2): 193-203.

Degree of breast ptosis (descent) defined by the position of the nipple relative to the inframammary fold (IMF) and the lower breast pole.

**Observability:** `from_photograph: high` · `requires_unclothed: true` · `minimum_visible_extent: torso`

> Best assessed from lateral or three-quarter view; frontal view alone can underestimate grade III.

### Valid values

- **`grade_0_none`** — Grade 0 — no ptosis: Nipple sits above the IMF; breast tissue is firm and contained above the IMF.
- **`grade_1_mild`** — Grade I — mild ptosis: Nipple at the level of the IMF, above the lower breast contour.
- **`grade_2_moderate`** — Grade II — moderate ptosis: Nipple below the IMF but above the lower breast contour. NAC visible from frontal view as the most projected point of the lower pole.
- **`grade_3_severe`** — Grade III — severe ptosis: Nipple below the IMF and at or below the lower breast contour, pointing downward.
- **`pseudoptosis`** — Pseudoptosis: Nipple above the IMF, but the breast tissue itself has descended below the IMF — glandular ptosis without NAC ptosis.

## `size_estimate` — Size estimate

**Type:** ordinal · **Scale:** us_cup_size_proxy

**Citation:** Visual proxy for US bra cup-size convention. Volumetric measurement (per Bouman 1994; Smith et al. 1986) is the academically-rigorous alternative but requires direct measurement, not a photograph.

Visual estimate of breast size mapped onto the US cup-size convention, treated as an ordinal scale. Subject to image-angle, posture, and clothing variance; should not be treated as a measured dimension.

**Observability:** `from_photograph: medium` · `requires_unclothed: false` · `minimum_visible_extent: torso`

> Clothing, posture, and camera angle introduce substantial variance. Treat as soft signal, not measurement.

### Valid values

- **`AA`** — AA
- **`A`** — A
- **`B`** — B
- **`C`** — C
- **`D`** — D
- **`DD`** — DD / E
- **`DDD_F`** — DDD / F
- **`G`** — G
- **`H_plus`** — H+

## `base_diameter` — Base diameter (relative)

**Type:** ordinal · **Scale:** narrow_medium_wide_relative_to_chest

**Citation:** Mallucci P, Branford OA (2014). Concepts in aesthetic breast dimensions. Plastic and Reconstructive Surgery, 134(1): 8e-16e.

Width of the breast base as a fraction of chest-wall width. Relative measure rather than absolute distance.

**Observability:** `from_photograph: high` · `requires_unclothed: true` · `minimum_visible_extent: torso`

### Valid values

- **`narrow`** — Narrow: Base diameter substantially less than half of chest-wall width.
- **`medium`** — Medium: Base diameter approximately one-third to one-half of chest-wall width.
- **`wide`** — Wide: Base diameter approaching or exceeding half of chest-wall width.

## `projection` — Projection (relative)

**Type:** ordinal · **Scale:** low_moderate_high_relative_to_base

**Citation:** Mallucci P, Branford OA (2014). Plastic and Reconstructive Surgery, 134(1).

Anterior projection of the breast relative to base diameter. Distinguishes flatter from more conical morphologies independent of overall size.

**Observability:** `from_photograph: high` · `requires_unclothed: true` · `minimum_visible_extent: torso`

> Best assessed from lateral view.

### Valid values

- **`low`** — Low: Projection less than ~40% of base diameter.
- **`moderate`** — Moderate: Projection ~40-60% of base diameter.
- **`high`** — High: Projection greater than ~60% of base diameter.

## `upper_pole_fullness` — Upper-pole fullness

**Type:** categorical · **Scale:** mallucci_branford_2014

**Citation:** Mallucci P, Branford OA (2014). Plastic and Reconstructive Surgery, 134(1): 8e-16e. Defines the aesthetic 45:55 upper-pole-to-lower-pole proportion as the reference for natural breast shape.

Convexity of the upper pole between the clavicle and the NAC. The Mallucci-Branford paper identifies the upper-pole slope as a primary determinant of perceived natural shape.

**Observability:** `from_photograph: high` · `requires_unclothed: true` · `minimum_visible_extent: torso`

> Best assessed from lateral or three-quarter view.

### Valid values

- **`concave`** — Concave / under-filled: Upper pole slopes inward from clavicle to NAC; insufficient soft-tissue fill.
- **`straight`** — Straight / aesthetically natural: Upper pole forms a straight line from approximately the second intercostal space to the NAC. Considered the aesthetic reference per Mallucci & Branford 2014.
- **`convex`** — Convex / over-filled: Upper pole bulges outward; over-projection above the natural reference line.

## `lower_pole_fullness` — Lower-pole fullness

**Type:** categorical · **Scale:** mallucci_branford_2014

**Citation:** Mallucci P, Branford OA (2014). Plastic and Reconstructive Surgery, 134(1).

Distribution of breast volume in the lower pole — between the NAC and the inframammary fold (IMF). Paired with `upper_pole_fullness`; together these capture the 45:55 aesthetic ratio when both are 'balanced'.

**Observability:** `from_photograph: high` · `requires_unclothed: true` · `minimum_visible_extent: torso`

### Valid values

- **`under_projected`** — Under-projected: Lower pole carries less than ~50% of breast volume; gland feels superior-shifted.
- **`balanced`** — Balanced (~55%): Lower pole carries approximately 55% of volume; aesthetic reference per Mallucci & Branford.
- **`over_projected`** — Over-projected: Lower pole substantially overfilled relative to upper; common with ptosis and post-lactational changes.

## `inframammary_fold_definition` — Inframammary fold definition

**Type:** ordinal · **Scale:** imf_definition_qualitative

**Citation:** Boutros S, Kattash M, Wienfeld A, et al. (1998). The intradermal anatomy of the inframammary fold. Plastic and Reconstructive Surgery, 102(4).

Sharpness of the IMF as a visible anatomical landmark.

**Observability:** `from_photograph: medium` · `requires_unclothed: true` · `minimum_visible_extent: torso`

### Valid values

- **`sharp`** — Sharp: Clearly defined fold with a crisp transition from breast to chest wall.
- **`soft`** — Soft: Gradual transition; fold visible but not crisp.
- **`indistinct`** — Indistinct: Fold not clearly visible; breast tissue blends gradually into the chest wall — common in tuberous and constricted-base morphologies.

## `areolar_diameter_relative` — Areolar diameter (relative)

**Type:** ordinal · **Scale:** areolar_diameter_relative_to_breast_base

**Citation:** Hauben DJ, Mahler D (1983). A reappraisal of the importance of areolar pigmentation. Plastic and Reconstructive Surgery, 71(6). Normative areolar-diameter ranges discussed; relative-to-base scale used here as a photo-friendly proxy.

Diameter of the areola relative to the breast base diameter, treated as ordinal.

**Observability:** `from_photograph: high` · `requires_unclothed: true` · `minimum_visible_extent: torso`

### Valid values

- **`small`** — Small: Areolar diameter less than ~25% of breast base diameter.
- **`medium`** — Medium: Areolar diameter approximately 25-40% of breast base diameter.
- **`large`** — Large: Areolar diameter greater than ~40% of breast base diameter.

## `areolar_pigmentation` — Areolar pigmentation

**Type:** ordinal · **Scale:** areolar_pigmentation_qualitative

**Citation:** Pigmentation gradient described qualitatively; Fitzpatrick I–VI does not directly map to areolar pigmentation, which can be substantially darker than surrounding breast skin (Hauben & Mahler 1983).

Pigmentation intensity of the areolar complex, observed independently of overall skin Fitzpatrick category.

**Observability:** `from_photograph: high` · `requires_unclothed: true` · `minimum_visible_extent: torso`

> Lighting and color balance affect this dimension significantly; the model should defer to lower confidence under poor lighting.

### Valid values

- **`very_light`** — Very light: Pink or near-skin-tone; minimal pigmentation contrast against breast skin.
- **`light`** — Light: Slightly pigmented; visible contrast against breast skin.
- **`medium`** — Medium: Moderately pigmented; tan or light brown.
- **`dark`** — Dark: Strongly pigmented; medium to dark brown.
- **`very_dark`** — Very dark: Deep brown to nearly black pigmentation.

## `nipple_morphology` — Nipple morphology

**Type:** categorical · **Scale:** hoffman_extended

**Citation:** Hoffman classification of nipple inversion, as commonly cited in breastfeeding-medicine and aesthetic-surgery literature (e.g., Han & Hong 1999, extending Hoffman's original framework).

Morphology of the nipple itself, including inversion grading.

**Observability:** `from_photograph: medium` · `requires_unclothed: true` · `minimum_visible_extent: torso`

> Distinguishing flat from grade-I inversion typically requires manual assessment; photographs allow only static evaluation.

### Valid values

- **`everted`** — Everted: Nipple protrudes outward at rest. The typical configuration.
- **`flat`** — Flat: Nipple level with the areola at rest; protrudes with cold or stimulation.
- **`inverted_grade_1`** — Inverted — Grade I: Nipple inverted at rest but easily everts manually or with stimulation; no fibrotic banding.
- **`inverted_grade_2`** — Inverted — Grade II: Nipple inverted; everts with difficulty and retracts when released; mild fibrotic banding.
- **`inverted_grade_3`** — Inverted — Grade III: Nipple permanently inverted; cannot be manually everted; significant fibrotic banding.

## `symmetry` — Symmetry

**Type:** ordinal · **Scale:** symmetry_qualitative

**Citation:** Brody GS (1981). Aesthetic and reconstructive symmetry assessment. Surveyed in subsequent aesthetic-surgery literature.

Degree of symmetry between left and right breasts.

**Observability:** `from_photograph: high` · `requires_unclothed: true` · `minimum_visible_extent: torso`

### Valid values

- **`symmetric`** — Symmetric: No discernible asymmetry.
- **`mild_asymmetry`** — Mild asymmetry: Small but observable difference in volume, shape, or NAC position; less than approximately one-quarter cup difference.
- **`moderate_asymmetry`** — Moderate asymmetry: Difference of approximately one-half cup or comparable shape difference.
- **`marked_asymmetry`** — Marked asymmetry: Difference of one full cup or greater, or substantial shape divergence.

## `density_inference` — Tissue density (mammographic)

**Type:** categorical · **Scale:** birads_5e

**Citation:** American College of Radiology (2013). BI-RADS Atlas, 5th Edition.

Mammographic breast density classification. Included in the schema for completeness; assessment requires X-ray imaging and is not derivable from a photograph.

**Observability:** `from_photograph: not_assessable` · `requires_unclothed: false` · `minimum_visible_extent: torso`

> Density is a mammographic finding; the analysis prompt should not attempt to infer this from a photograph. Included in the schema so structured-text use cases can populate it from clinical data when available.

### Valid values

- **`a_almost_entirely_fatty`** — BI-RADS A — almost entirely fatty
- **`b_scattered_fibroglandular`** — BI-RADS B — scattered fibroglandular
- **`c_heterogeneously_dense`** — BI-RADS C — heterogeneously dense
- **`d_extremely_dense`** — BI-RADS D — extremely dense

## `developmental_stage` — Tanner / developmental stage

**Type:** ordinal · **Scale:** tanner_breast_b1_b5

**Citation:** Marshall WA, Tanner JM (1969). Variations in pattern of pubertal changes in girls. Archives of Disease in Childhood, 44(235): 291-303.

Tanner stage of breast development (B1 to B5). Used in pediatric-endocrinology and developmental-anthropology literature.

**Observability:** `from_photograph: high` · `requires_unclothed: true` · `minimum_visible_extent: torso`

> Almost all dataset rows from notable-people photographs will be B5. Lower stages should not appear in adult-only sources; if observed, the source-attribution chain needs review.

### Valid values

- **`b1_prepubertal`** — B1 — prepubertal: No glandular tissue; flat appearance.
- **`b2_breast_bud`** — B2 — breast bud: Small mound of breast tissue with areolar enlargement.
- **`b3_continued_enlargement`** — B3 — continued enlargement: Further breast and areolar enlargement; no separation of contours.
- **`b4_secondary_mound`** — B4 — secondary mound: Areola and papilla project above the breast as a secondary mound.
- **`b5_mature`** — B5 — mature: Areola recesses to the general breast contour; mature adult morphology.

## References

- Halls MH (1998). Aesthetic Plastic Surgery, 22(5).
- Regnault P (1976). Clinics in Plastic Surgery, 3(2): 193-203.
- Mallucci P, Branford OA (2014). Plastic and Reconstructive Surgery, 134(1): 8e-16e.
- Hauben DJ, Mahler D (1983). Plastic and Reconstructive Surgery, 71(6).
- Boutros S, Kattash M, Wienfeld A, et al. (1998). Plastic and Reconstructive Surgery, 102(4).
- Grolleau JL, et al. (1999). Tuberous-breast classification. Plastic and Reconstructive Surgery, 104(7).
- Marshall WA, Tanner JM (1969). Archives of Disease in Childhood, 44(235): 291-303.
- American College of Radiology (2013). BI-RADS Atlas, 5th Edition.
- Bouman FG (1994). Volumetric measurement of the human breast. Plastic and Reconstructive Surgery, 93(5).
- Smith DJ, et al. (1986). Breast volume by photogrammetry. Plastic and Reconstructive Surgery, 78(2).

