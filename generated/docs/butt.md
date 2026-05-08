# Butt (gluteal region) — phenotype taxonomy

<!-- Auto-generated from vocabularies/butt.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs -->

> **Atlas category:** `butt` · **Version:** 1.0.0 · **License:** CC-BY-4.0
> **UBERON:** `UBERON:0001783` · **FMA:** `FMA:64910`

Gluteal-region morphology: shape, size, projection, gluteal-fold definition, and transitions to surrounding regions. Dimensions are drawn from gluteal-aesthetic-surgery literature (Cuenca-Guerra, Mendieta, Roberts) which has produced the contemporary classification systems for buttock shape and proportions. Significant ethnic and individual variation; the Mendieta four-class system is the most-cited classification for buttock shape in plastic-surgery literature.

## Dimensions overview

| Dimension | Type | Scale | Photo-observable | Values |
|---|---|---|---|---|
| `buttock_shape_mendieta` | categorical | mendieta_four_class | high | 4 |
| `buttock_size` | ordinal | buttock_size_qualitative | high | 4 |
| `buttock_projection` | ordinal | buttock_projection_qualitative | high | 3 |
| `gluteal_fold_definition` | ordinal | gluteal_fold_qualitative | high | 3 |
| `lateral_concavity` | categorical | trochanteric_depression_qualitative | high | 3 |
| `buttock_to_hip_ratio` | categorical | gluteal_hip_silhouette_qualitative | high | 3 |
| `asymmetry` | ordinal | buttock_symmetry_qualitative | high | 4 |

## `buttock_shape_mendieta` — Buttock shape (Mendieta)

**Type:** categorical · **Scale:** mendieta_four_class

**Citation:** Mendieta CG (2007). Classification system for gluteal evaluation. Clinics in Plastic Surgery, 34(3): 333-346.

Four-class buttock-shape classification developed for gluteal-aesthetic surgery, based on the silhouette from a posterior view.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: torso`

> Best assessed from posterior view.

### Valid values

- **`round_A_shape`** — A-shape (square below, narrow above): Wider at the lower buttock; trapezoidal silhouette with the wider edge inferior.
- **`v_shape`** — V-shape (wide above, narrow below): Wider at the upper buttock; trapezoidal silhouette with the wider edge superior.
- **`round`** — Round: Approximately circular silhouette; aesthetic-surgery reference shape.
- **`square`** — Square: Approximately rectangular silhouette with similar width across upper and lower.

## `buttock_size` — Buttock size (relative)

**Type:** ordinal · **Scale:** buttock_size_qualitative

**Citation:** Aligned with gluteal-aesthetic descriptors used in body-contouring literature (Roberts TL et al. Aesthetic Surgery Journal).

Overall buttock size relative to body proportions.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: torso`

### Valid values

- **`small`** — Small: Limited gluteal mass; minimal projection from the trunk silhouette.
- **`moderate`** — Moderate: Average gluteal mass.
- **`full`** — Full: Pronounced gluteal mass.
- **`very_full`** — Very full: Substantial gluteal mass; dominant feature of the trunk silhouette. Constitutional, athletic, or augmented.

## `buttock_projection` — Buttock projection (lateral view)

**Type:** ordinal · **Scale:** buttock_projection_qualitative

**Citation:** Aligned with gluteal-aesthetic descriptors used in lateral-view-based aesthetic assessment.

Posterior projection of the buttock from the sacral plane in lateral view.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: torso`

> Best assessed from lateral view; frontal view alone cannot resolve projection.

### Valid values

- **`flat`** — Flat: Minimal posterior projection.
- **`moderate`** — Moderate: Standard posterior projection.
- **`high_projection`** — High projection: Pronounced posterior projection; 'shelf-like' silhouette in lateral view.

## `gluteal_fold_definition` — Gluteal fold definition

**Type:** ordinal · **Scale:** gluteal_fold_qualitative

**Citation:** Aligned with descriptors used in gluteal-aesthetic-surgery literature on the gluteal-thigh transition.

Sharpness of the gluteal fold (the crease between the buttock and the posterior thigh).

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: torso`

### Valid values

- **`sharp_defined`** — Sharp / defined: Clear, crisp gluteal fold as a discrete landmark.
- **`moderate`** — Moderate
- **`soft_blended`** — Soft / blended: Gradual buttock-to-thigh transition; reduced fold definition.

## `lateral_concavity` — Lateral hip concavity (hip dip)

**Type:** categorical · **Scale:** trochanteric_depression_qualitative

**Citation:** Aligned with descriptors used in gluteal-augmentation literature on lateral hip morphology.

Visible depression at the lateral hip ('hip dip' / 'violin hip') between the iliac crest and the greater trochanter.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: torso`

### Valid values

- **`absent`** — Absent: Smooth lateral hip silhouette without visible depression.
- **`subtle`** — Subtle: Slight visible depression.
- **`pronounced`** — Pronounced: Distinct depression; common skeletal-anatomy variant.

## `buttock_to_hip_ratio` — Buttock-to-hip silhouette

**Type:** categorical · **Scale:** gluteal_hip_silhouette_qualitative

**Citation:** Aligned with descriptors used in BBL (Brazilian Butt Lift) aesthetic literature.

Relationship between buttock width and hip width in the posterior silhouette.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: torso`

### Valid values

- **`hourglass_pronounced`** — Hourglass (pronounced waist): Buttock projection substantially wider than waist creating an hourglass posterior silhouette.
- **`balanced`** — Balanced
- **`narrow_continuous`** — Narrow / continuous: Minimal buttock-to-hip transition; rectangular silhouette.

## `asymmetry` — Buttock asymmetry

**Type:** ordinal · **Scale:** buttock_symmetry_qualitative

**Citation:** Aligned with surgical-gynecology and gluteal-aesthetic descriptors of bilateral asymmetry.

Degree of left-right buttock asymmetry.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: torso`

### Valid values

- **`symmetric`** — Symmetric
- **`mild_asymmetry`** — Mild
- **`moderate_asymmetry`** — Moderate
- **`marked_asymmetry`** — Marked

## References

- Mendieta CG (2007). Classification system for gluteal evaluation. Clinics in Plastic Surgery, 34(3): 333-346.
- Cuenca-Guerra R, Quezada J (2004). What makes buttocks beautiful? A review and classification of the determinants of gluteal beauty and the surgical techniques to achieve them. Aesthetic Plastic Surgery, 28(5): 340-347.
- Roberts TL III, Toledo LS, Badin AZ (2001). Augmentation of the buttocks by micro fat grafting. Aesthetic Surgery Journal, 21(4).

