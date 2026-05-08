# Torso — phenotype taxonomy

<!-- Auto-generated from vocabularies/torso.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs -->

> **Atlas category:** `torso` · **Version:** 1.0.0 · **License:** CC-BY-4.0
> **UBERON:** `UBERON:0000915` · **FMA:** `FMA:9576`

Trunk soft-tissue and surface-anatomy dimensions: shoulder breadth and slope, chest morphology, abdominal shape and definition, waist definition, back morphology, navel morphology. Captures the per-region detail that body-shape.json's whole-body composite metrics do not. Dimensions draw from sports-medicine, body-contouring, and aesthetic-anatomy literature.

## Dimensions overview

| Dimension | Type | Scale | Photo-observable | Values |
|---|---|---|---|---|
| `shoulder_breadth` | ordinal | biacromial_breadth_qualitative | high | 3 |
| `shoulder_slope` | categorical | shoulder_slope_qualitative | high | 3 |
| `chest_morphology` | categorical | chest_shape_qualitative | medium | 5 |
| `pectoral_definition_male` | ordinal | pectoral_definition_qualitative | high | 5 |
| `abdominal_shape` | categorical | abdominal_shape_qualitative | high | 4 |
| `abdominal_definition` | ordinal | abdominal_definition_qualitative | high | 6 |
| `waist_definition` | ordinal | waist_definition_qualitative | high | 4 |
| `back_morphology` | categorical | back_shape_qualitative | high | 3 |
| `lumbar_curvature` | categorical | lumbar_curvature_qualitative | medium | 3 |
| `navel_morphology` | categorical | navel_shape_qualitative | high | 6 |
| `linea_alba_visibility` | ordinal | linea_alba_qualitative | medium | 4 |

## `shoulder_breadth` — Shoulder breadth (biacromial)

**Type:** ordinal · **Scale:** biacromial_breadth_qualitative

**Citation:** Aligned with anthropometry references on biacromial breadth as a primary frame-size dimension.

Width across the shoulders relative to overall body proportions.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: torso`

### Valid values

- **`narrow`** — Narrow: Shoulders narrow relative to hips.
- **`balanced`** — Balanced: Shoulders proportional.
- **`wide`** — Wide: Pronounced shoulder breadth; characteristic V-shape silhouette in lean subjects.

## `shoulder_slope` — Shoulder slope

**Type:** categorical · **Scale:** shoulder_slope_qualitative

**Citation:** Aligned with descriptors used in tailoring and artistic-anatomy literature.

Angle of the shoulders from the base of the neck outward.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: torso`

### Valid values

- **`square`** — Square (high): Shoulders nearly horizontal; minimal slope.
- **`moderate_slope`** — Moderate slope: Average shoulder slope.
- **`sloped`** — Sloped: Substantial downward slope from neck base.

## `chest_morphology` — Chest morphology

**Type:** categorical · **Scale:** chest_shape_qualitative

**Citation:** Aligned with descriptors used in thoracic-surgery and pectus-deformity literature.

Anterior chest wall shape.

**Observability:** `from_photograph: medium` · `requires_unclothed: true` · `minimum_visible_extent: torso`

### Valid values

- **`flat`** — Flat: Anterior chest wall approximately flat in profile.
- **`rounded_normal`** — Rounded (normal): Standard anterior chest contour.
- **`barrel_chest`** — Barrel-chested: Increased anteroposterior chest diameter.
- **`pectus_excavatum`** — Pectus excavatum (sunken): Visible sternal depression.
- **`pectus_carinatum`** — Pectus carinatum (protruding): Visible sternal protrusion ('pigeon chest').

## `pectoral_definition_male` — Pectoral definition (male)

**Type:** ordinal · **Scale:** pectoral_definition_qualitative

**Citation:** Aligned with sports-medicine descriptors of pectoral musculature.

Visible pectoral muscle definition in subjects with apparent male physiognomy.

**Observability:** `from_photograph: high` · `requires_unclothed: true` · `minimum_visible_extent: torso`

### Valid values

- **`minimal`** — Minimal: Pectorals not visible as discrete landmarks.
- **`moderate`** — Moderate: Pectorals visible but not prominently defined.
- **`defined`** — Defined: Clear pectoral definition; visible separation between pectoralis and surrounding tissue.
- **`highly_developed`** — Highly developed: Pronounced pectoral mass and definition.
- **`not_applicable`** — Not applicable: Subject not in male physiognomy or chest not visible.

## `abdominal_shape` — Abdominal shape

**Type:** categorical · **Scale:** abdominal_shape_qualitative

**Citation:** Aligned with body-contouring and abdominoplasty literature.

Anterior abdominal contour.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: torso`

### Valid values

- **`concave`** — Concave: Abdominal wall sits posterior to the rib cage / pelvis line.
- **`flat`** — Flat: Abdominal wall in plane with rib cage / pelvis.
- **`convex_mild`** — Convex (mild): Subtle anterior protrusion.
- **`convex_pronounced`** — Convex (pronounced): Clearly protruding abdomen.

## `abdominal_definition` — Abdominal definition (musculature)

**Type:** ordinal · **Scale:** abdominal_definition_qualitative

**Citation:** Aligned with sports-medicine and bodybuilding descriptors of rectus abdominis visibility.

Visible rectus abdominis musculature ('six-pack' visibility).

**Observability:** `from_photograph: high` · `requires_unclothed: true` · `minimum_visible_extent: torso`

### Valid values

- **`none`** — None: No visible muscular definition.
- **`subtle`** — Subtle: Minor definition visible at the upper abdomen only.
- **`two_pack`** — Two-pack visible: Upper rectus abdominis visible; lower abdomen smooth.
- **`four_pack`** — Four-pack visible
- **`six_pack`** — Six-pack visible
- **`eight_pack`** — Eight-pack / pronounced: Full rectus abdominis visible plus inscriptional definition between segments.

## `waist_definition` — Waist definition

**Type:** ordinal · **Scale:** waist_definition_qualitative

**Citation:** Aligned with body-contouring literature on the waist as a perceptual axis.

Visible waist taper between the rib cage and the pelvis.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: torso`

### Valid values

- **`absent`** — Absent: No visible waist; rib cage to pelvis nearly straight.
- **`subtle`** — Subtle: Slight inward curve at waist.
- **`defined`** — Defined: Clear waist taper.
- **`pronounced`** — Pronounced: Strong hourglass-equivalent waist definition.

## `back_morphology` — Back morphology

**Type:** categorical · **Scale:** back_shape_qualitative

**Citation:** Aligned with sports-medicine and aesthetic-anatomy descriptors of dorsal-trunk silhouette.

Posterior trunk silhouette.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: torso`

### Valid values

- **`v_shape`** — V-shape: Wide upper back tapering to narrow waist.
- **`balanced_rectangular`** — Balanced / rectangular: Approximately equal upper-back and waist breadth.
- **`inverted_pear`** — Inverted pear: Wider at hip/waist than upper back.

## `lumbar_curvature` — Lumbar curvature visible

**Type:** categorical · **Scale:** lumbar_curvature_qualitative

**Citation:** Aligned with descriptors used in posture-assessment literature; subset of the body-shape posture dimension at higher granularity.

Lumbar lordosis visibility.

**Observability:** `from_photograph: medium` · `requires_unclothed: false` · `minimum_visible_extent: torso`

### Valid values

- **`flat`** — Flat: Reduced lumbar curve; flattened lower back.
- **`moderate`** — Moderate: Standard lumbar lordosis.
- **`pronounced_lordotic`** — Pronounced (lordotic): Substantial lumbar curve; sometimes called sway-back.

## `navel_morphology` — Navel (umbilicus) morphology

**Type:** categorical · **Scale:** navel_shape_qualitative

**Citation:** Aligned with descriptors used in abdominoplasty and umbilicoplasty literature on umbilical aesthetics.

Shape and orientation of the navel.

**Observability:** `from_photograph: high` · `requires_unclothed: true` · `minimum_visible_extent: torso`

### Valid values

- **`vertical_oval`** — Vertical oval ('innie' vertical): Long axis vertical; common aesthetic reference.
- **`horizontal_oval`** — Horizontal oval
- **`round`** — Round
- **`T_shaped`** — T-shaped
- **`outie_protruding`** — Outie / protruding: Umbilicus projects outward from abdominal plane.
- **`asymmetric`** — Asymmetric

## `linea_alba_visibility` — Linea alba visibility

**Type:** ordinal · **Scale:** linea_alba_qualitative

**Citation:** Aligned with sports-medicine descriptors of midline-tendon visibility.

Visibility of the linea alba — the central midline tendon between the two rectus abdominis muscles.

**Observability:** `from_photograph: medium` · `requires_unclothed: true` · `minimum_visible_extent: torso`

### Valid values

- **`not_visible`** — Not visible
- **`subtle`** — Subtle: Visible under tension only.
- **`defined`** — Defined: Clear vertical midline visible at rest.
- **`highly_defined`** — Highly defined: Pronounced midline; common with very low body-fat percentage.

## References

- Lockwood TE (1991). Superficial fascial system (SFS) of the trunk and extremities. Plastic and Reconstructive Surgery, 87(6).
- Pollock H, Pollock T (2000). Progressive tension sutures: a technique to reduce local complications in abdominoplasty. Plastic and Reconstructive Surgery, 105(7).
- Standring S (ed.) (2020). Gray's Anatomy: The Anatomical Basis of Clinical Practice, 42nd Edition. Elsevier.

