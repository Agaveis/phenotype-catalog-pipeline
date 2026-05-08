# Breast observation prompt

<!-- Auto-generated from vocabularies/breast.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs -->

Atlas category: `breast` · Version: 1.0.0
UBERON: `UBERON:0000310`

## Instruction

Assess the following breast-related phenotype dimensions from the photograph. Return one value per dimension, drawn only from the listed valid buckets. If a dimension cannot be assessed (anatomy not visible, image quality too poor, framing too narrow), return `null` for that dimension. Do not guess — `null` is preferred over an unreliable bucket assignment.

For each dimension, also return a per-dimension confidence score (0.0–1.0) reflecting how reliably you could assess that specific dimension in this photograph.

Return a single JSON object, no prose, with shape:

```json
{
  "shape": "<one of the valid buckets, or null>",
  "shape_confidence": "<0.0-1.0, or null>",
  "ptosis_grade": "<one of the valid buckets, or null>",
  "ptosis_grade_confidence": "<0.0-1.0, or null>",
  "size_estimate": "<one of the valid buckets, or null>",
  "size_estimate_confidence": "<0.0-1.0, or null>",
  "base_diameter": "<one of the valid buckets, or null>",
  "base_diameter_confidence": "<0.0-1.0, or null>",
  "projection": "<one of the valid buckets, or null>",
  "projection_confidence": "<0.0-1.0, or null>",
  "upper_pole_fullness": "<one of the valid buckets, or null>",
  "upper_pole_fullness_confidence": "<0.0-1.0, or null>",
  "lower_pole_fullness": "<one of the valid buckets, or null>",
  "lower_pole_fullness_confidence": "<0.0-1.0, or null>",
  "inframammary_fold_definition": "<one of the valid buckets, or null>",
  "inframammary_fold_definition_confidence": "<0.0-1.0, or null>",
  "areolar_diameter_relative": "<one of the valid buckets, or null>",
  "areolar_diameter_relative_confidence": "<0.0-1.0, or null>",
  "areolar_pigmentation": "<one of the valid buckets, or null>",
  "areolar_pigmentation_confidence": "<0.0-1.0, or null>",
  "nipple_morphology": "<one of the valid buckets, or null>",
  "nipple_morphology_confidence": "<0.0-1.0, or null>",
  "symmetry": "<one of the valid buckets, or null>",
  "symmetry_confidence": "<0.0-1.0, or null>",
  "developmental_stage": "<one of the valid buckets, or null>",
  "developmental_stage_confidence": "<0.0-1.0, or null>"
}
```

## Dimensions

### `shape`

**Type:** categorical · **Scale:** halls_extended · **Min visible extent:** torso · **Requires unclothed anatomy**

Valid values:

- `round` — *Round*: Symmetric upper- and lower-pole fullness with approximately equal projection above and below the nipple-areolar complex (NAC). Base width approximates projection.
- `teardrop` — *Teardrop*: Less upper-pole fullness than lower; greater projection below the NAC than above. NAC sits at or near the apex of projection.
- `athletic` — *Athletic*: Wider base, smaller volume, more muscular and less subcutaneous-fat envelope. Projection is reduced relative to base width.
- `slender` — *Slender / conical*: Narrow base with conical projection; reduced volume; pointed apex at or near the NAC.
- `asymmetric` — *Asymmetric*: Volume or shape difference greater than approximately one-half cup size between left and right breasts. Used when asymmetry is the dominant morphological feature, not as a fine-grained quantification.
- `tuberous` — *Tuberous*: Constricted base diameter, herniated parenchyma into the areola, narrow inframammary fold, and elevated NAC. Per Grolleau et al. (1999) classification.
- `east_west` — *East-west / wide-set*: Lateral splay of the NAC away from midline; intermammary distance approximates or exceeds breast base diameter. Common variant noted in aesthetic-anatomy literature.

Reference: Halls MH (1998). Aesthetic Plastic Surgery, 22(5). Extended with categories described in subsequent plastic-surgery literature (Mallucci & Branford 2014; Goldwyn 1999).

### `ptosis_grade`

**Type:** ordinal · **Scale:** regnault_1976 · **Min visible extent:** torso · **Requires unclothed anatomy**

> Best assessed from lateral or three-quarter view; frontal view alone can underestimate grade III.

Valid values:

- `grade_0_none` — *Grade 0 — no ptosis*: Nipple sits above the IMF; breast tissue is firm and contained above the IMF.
- `grade_1_mild` — *Grade I — mild ptosis*: Nipple at the level of the IMF, above the lower breast contour.
- `grade_2_moderate` — *Grade II — moderate ptosis*: Nipple below the IMF but above the lower breast contour. NAC visible from frontal view as the most projected point of the lower pole.
- `grade_3_severe` — *Grade III — severe ptosis*: Nipple below the IMF and at or below the lower breast contour, pointing downward.
- `pseudoptosis` — *Pseudoptosis*: Nipple above the IMF, but the breast tissue itself has descended below the IMF — glandular ptosis without NAC ptosis.

Reference: Regnault P (1976). Breast ptosis: definition and treatment. Clinics in Plastic Surgery, 3(2): 193-203.

### `size_estimate`

**Type:** ordinal · **Scale:** us_cup_size_proxy · **Min visible extent:** torso

> Clothing, posture, and camera angle introduce substantial variance. Treat as soft signal, not measurement.

Valid values:

- `AA` — *AA*
- `A` — *A*
- `B` — *B*
- `C` — *C*
- `D` — *D*
- `DD` — *DD / E*
- `DDD_F` — *DDD / F*
- `G` — *G*
- `H_plus` — *H+*

Reference: Visual proxy for US bra cup-size convention. Volumetric measurement (per Bouman 1994; Smith et al. 1986) is the academically-rigorous alternative but requires direct measurement, not a photograph.

### `base_diameter`

**Type:** ordinal · **Scale:** narrow_medium_wide_relative_to_chest · **Min visible extent:** torso · **Requires unclothed anatomy**

Valid values:

- `narrow` — *Narrow*: Base diameter substantially less than half of chest-wall width.
- `medium` — *Medium*: Base diameter approximately one-third to one-half of chest-wall width.
- `wide` — *Wide*: Base diameter approaching or exceeding half of chest-wall width.

Reference: Mallucci P, Branford OA (2014). Concepts in aesthetic breast dimensions. Plastic and Reconstructive Surgery, 134(1): 8e-16e.

### `projection`

**Type:** ordinal · **Scale:** low_moderate_high_relative_to_base · **Min visible extent:** torso · **Requires unclothed anatomy**

> Best assessed from lateral view.

Valid values:

- `low` — *Low*: Projection less than ~40% of base diameter.
- `moderate` — *Moderate*: Projection ~40-60% of base diameter.
- `high` — *High*: Projection greater than ~60% of base diameter.

Reference: Mallucci P, Branford OA (2014). Plastic and Reconstructive Surgery, 134(1).

### `upper_pole_fullness`

**Type:** categorical · **Scale:** mallucci_branford_2014 · **Min visible extent:** torso · **Requires unclothed anatomy**

> Best assessed from lateral or three-quarter view.

Valid values:

- `concave` — *Concave / under-filled*: Upper pole slopes inward from clavicle to NAC; insufficient soft-tissue fill.
- `straight` — *Straight / aesthetically natural*: Upper pole forms a straight line from approximately the second intercostal space to the NAC. Considered the aesthetic reference per Mallucci & Branford 2014.
- `convex` — *Convex / over-filled*: Upper pole bulges outward; over-projection above the natural reference line.

Reference: Mallucci P, Branford OA (2014). Plastic and Reconstructive Surgery, 134(1): 8e-16e. Defines the aesthetic 45:55 upper-pole-to-lower-pole proportion as the reference for natural breast shape.

### `lower_pole_fullness`

**Type:** categorical · **Scale:** mallucci_branford_2014 · **Min visible extent:** torso · **Requires unclothed anatomy**

Valid values:

- `under_projected` — *Under-projected*: Lower pole carries less than ~50% of breast volume; gland feels superior-shifted.
- `balanced` — *Balanced (~55%)*: Lower pole carries approximately 55% of volume; aesthetic reference per Mallucci & Branford.
- `over_projected` — *Over-projected*: Lower pole substantially overfilled relative to upper; common with ptosis and post-lactational changes.

Reference: Mallucci P, Branford OA (2014). Plastic and Reconstructive Surgery, 134(1).

### `inframammary_fold_definition`

**Type:** ordinal · **Scale:** imf_definition_qualitative · **Min visible extent:** torso · **Requires unclothed anatomy**

Valid values:

- `sharp` — *Sharp*: Clearly defined fold with a crisp transition from breast to chest wall.
- `soft` — *Soft*: Gradual transition; fold visible but not crisp.
- `indistinct` — *Indistinct*: Fold not clearly visible; breast tissue blends gradually into the chest wall — common in tuberous and constricted-base morphologies.

Reference: Boutros S, Kattash M, Wienfeld A, et al. (1998). The intradermal anatomy of the inframammary fold. Plastic and Reconstructive Surgery, 102(4).

### `areolar_diameter_relative`

**Type:** ordinal · **Scale:** areolar_diameter_relative_to_breast_base · **Min visible extent:** torso · **Requires unclothed anatomy**

Valid values:

- `small` — *Small*: Areolar diameter less than ~25% of breast base diameter.
- `medium` — *Medium*: Areolar diameter approximately 25-40% of breast base diameter.
- `large` — *Large*: Areolar diameter greater than ~40% of breast base diameter.

Reference: Hauben DJ, Mahler D (1983). A reappraisal of the importance of areolar pigmentation. Plastic and Reconstructive Surgery, 71(6). Normative areolar-diameter ranges discussed; relative-to-base scale used here as a photo-friendly proxy.

### `areolar_pigmentation`

**Type:** ordinal · **Scale:** areolar_pigmentation_qualitative · **Min visible extent:** torso · **Requires unclothed anatomy**

> Lighting and color balance affect this dimension significantly; the model should defer to lower confidence under poor lighting.

Valid values:

- `very_light` — *Very light*: Pink or near-skin-tone; minimal pigmentation contrast against breast skin.
- `light` — *Light*: Slightly pigmented; visible contrast against breast skin.
- `medium` — *Medium*: Moderately pigmented; tan or light brown.
- `dark` — *Dark*: Strongly pigmented; medium to dark brown.
- `very_dark` — *Very dark*: Deep brown to nearly black pigmentation.

Reference: Pigmentation gradient described qualitatively; Fitzpatrick I–VI does not directly map to areolar pigmentation, which can be substantially darker than surrounding breast skin (Hauben & Mahler 1983).

### `nipple_morphology`

**Type:** categorical · **Scale:** hoffman_extended · **Min visible extent:** torso · **Requires unclothed anatomy**

> Distinguishing flat from grade-I inversion typically requires manual assessment; photographs allow only static evaluation.

Valid values:

- `everted` — *Everted*: Nipple protrudes outward at rest. The typical configuration.
- `flat` — *Flat*: Nipple level with the areola at rest; protrudes with cold or stimulation.
- `inverted_grade_1` — *Inverted — Grade I*: Nipple inverted at rest but easily everts manually or with stimulation; no fibrotic banding.
- `inverted_grade_2` — *Inverted — Grade II*: Nipple inverted; everts with difficulty and retracts when released; mild fibrotic banding.
- `inverted_grade_3` — *Inverted — Grade III*: Nipple permanently inverted; cannot be manually everted; significant fibrotic banding.

Reference: Hoffman classification of nipple inversion, as commonly cited in breastfeeding-medicine and aesthetic-surgery literature (e.g., Han & Hong 1999, extending Hoffman's original framework).

### `symmetry`

**Type:** ordinal · **Scale:** symmetry_qualitative · **Min visible extent:** torso · **Requires unclothed anatomy**

Valid values:

- `symmetric` — *Symmetric*: No discernible asymmetry.
- `mild_asymmetry` — *Mild asymmetry*: Small but observable difference in volume, shape, or NAC position; less than approximately one-quarter cup difference.
- `moderate_asymmetry` — *Moderate asymmetry*: Difference of approximately one-half cup or comparable shape difference.
- `marked_asymmetry` — *Marked asymmetry*: Difference of one full cup or greater, or substantial shape divergence.

Reference: Brody GS (1981). Aesthetic and reconstructive symmetry assessment. Surveyed in subsequent aesthetic-surgery literature.

### `density_inference` *(not assessable from photographs — skipped in prompt)*

> Mammographic breast density classification. Included in the schema for completeness; assessment requires X-ray imaging and is not derivable from a photograph.

Scale: American College of Radiology (2013). BI-RADS Atlas, 5th Edition.

### `developmental_stage`

**Type:** ordinal · **Scale:** tanner_breast_b1_b5 · **Min visible extent:** torso · **Requires unclothed anatomy**

> Almost all dataset rows from notable-people photographs will be B5. Lower stages should not appear in adult-only sources; if observed, the source-attribution chain needs review.

Valid values:

- `b1_prepubertal` — *B1 — prepubertal*: No glandular tissue; flat appearance.
- `b2_breast_bud` — *B2 — breast bud*: Small mound of breast tissue with areolar enlargement.
- `b3_continued_enlargement` — *B3 — continued enlargement*: Further breast and areolar enlargement; no separation of contours.
- `b4_secondary_mound` — *B4 — secondary mound*: Areola and papilla project above the breast as a secondary mound.
- `b5_mature` — *B5 — mature*: Areola recesses to the general breast contour; mature adult morphology.

Reference: Marshall WA, Tanner JM (1969). Variations in pattern of pubertal changes in girls. Archives of Disease in Childhood, 44(235): 291-303.

