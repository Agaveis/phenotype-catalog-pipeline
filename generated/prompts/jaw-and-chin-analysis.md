# Jaw and chin observation prompt

<!-- Auto-generated from vocabularies/jaw-and-chin.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs -->

Atlas category: `jaw-and-chin` · Version: 1.0.0
UBERON: `UBERON:0001684`

## Instruction

Assess the following jaw and chin-related phenotype dimensions from the photograph. Return one value per dimension, drawn only from the listed valid buckets. If a dimension cannot be assessed (anatomy not visible, image quality too poor, framing too narrow), return `null` for that dimension. Do not guess — `null` is preferred over an unreliable bucket assignment.

For each dimension, also return a per-dimension confidence score (0.0–1.0) reflecting how reliably you could assess that specific dimension in this photograph.

Return a single JSON object, no prose, with shape:

```json
{
  "jaw_width_bigonial": "<one of the valid buckets, or null>",
  "jaw_width_bigonial_confidence": "<0.0-1.0, or null>",
  "mandibular_angle": "<one of the valid buckets, or null>",
  "mandibular_angle_confidence": "<0.0-1.0, or null>",
  "masseter_prominence": "<one of the valid buckets, or null>",
  "masseter_prominence_confidence": "<0.0-1.0, or null>",
  "chin_projection": "<one of the valid buckets, or null>",
  "chin_projection_confidence": "<0.0-1.0, or null>",
  "chin_shape_frontal": "<one of the valid buckets, or null>",
  "chin_shape_frontal_confidence": "<0.0-1.0, or null>",
  "chin_height": "<one of the valid buckets, or null>",
  "chin_height_confidence": "<0.0-1.0, or null>",
  "submental_definition": "<one of the valid buckets, or null>",
  "submental_definition_confidence": "<0.0-1.0, or null>",
  "mandibular_contour_definition": "<one of the valid buckets, or null>",
  "mandibular_contour_definition_confidence": "<0.0-1.0, or null>"
}
```

## Dimensions

### `jaw_width_bigonial`

**Type:** ordinal · **Scale:** bigonial_breadth_qualitative · **Min visible extent:** head_only

Valid values:

- `narrow` — *Narrow (tapered)*: Bigonial breadth substantially less than bizygomatic; tapered lower face.
- `balanced` — *Balanced*: Bigonial breadth approximately 75-85% of bizygomatic; aesthetic reference range.
- `wide` — *Wide*: Bigonial breadth approaches or exceeds bizygomatic; squared or wider-than-cheekbones lower face. Common in East Asian populations.

Reference: Farkas LG (1994). Anthropometry of the Head and Face, 2nd Edition. Reference: bigonial breadth (go-go) relative to bizygomatic breadth (zy-zy).

### `mandibular_angle`

**Type:** categorical · **Scale:** gonial_angle_qualitative · **Min visible extent:** head_only

Valid values:

- `sharp_angular` — *Sharp / angular*: Visible 90°-leaning angle at the gonial point; defined jawline. More common in male physiognomy and in East Asian populations.
- `moderate` — *Moderate*: Standard 120-130° angle; defined but rounded gonial transition.
- `soft_obtuse` — *Soft / obtuse*: Smooth, rounded transition with no distinct angle. More common in female physiognomy and with subcutaneous fat coverage.

Reference: Aligned with orthognathic-surgery descriptors of mandibular angle morphology; reference values approximately 120-130° for the angle between the mandibular ramus and body.

### `masseter_prominence`

**Type:** ordinal · **Scale:** masseter_prominence_qualitative · **Min visible extent:** head_only

Valid values:

- `flat_minimal` — *Flat / minimal*: Masseter not visibly contributing to jaw silhouette.
- `moderate` — *Moderate*: Masseter visible at clench but not at rest.
- `prominent` — *Prominent*: Masseter visible as a distinct landmark even at rest; squared lower face.
- `hypertrophic` — *Hypertrophic*: Pronounced masseter mass; visible bulge at the lower jaw.

Reference: Aligned with descriptors used in masseter-reduction (botulinum toxin / surgical) literature on the East Asian face.

### `chin_projection`

**Type:** ordinal · **Scale:** riedel_pogonion_qualitative · **Min visible extent:** head_only

> Best assessed from lateral view.

Valid values:

- `retrognathic` — *Retrognathic / recessed*: Pogonion sits posterior to the Riedel reference plane; receding chin.
- `balanced` — *Balanced*: Pogonion approximately at the Riedel reference plane.
- `prognathic` — *Prognathic / projecting*: Pogonion sits anterior to the reference plane; prominent chin.

Reference: Riedel RA (1957). An analysis of dentofacial relationships. American Journal of Orthodontics, 43(2). Reference: pogonion-to-vertical-line relationship as the standard for chin projection assessment.

### `chin_shape_frontal`

**Type:** categorical · **Scale:** chin_shape_qualitative · **Min visible extent:** head_only

Valid values:

- `pointed` — *Pointed*: V-shaped chin with narrow apex.
- `rounded` — *Rounded*: Smooth U-shape; no distinct point or angle.
- `square` — *Square*: Wide, flat chin with sharp lateral angles.
- `cleft` — *Cleft (dimpled)*: Visible vertical midline indentation in the chin pad.
- `asymmetric` — *Asymmetric*: Notable left-right chin asymmetry.

Reference: Aligned with descriptors used in genioplasty literature.

### `chin_height`

**Type:** ordinal · **Scale:** chin_height_proportional · **Min visible extent:** head_only

Valid values:

- `short` — *Short*: Chin height less than lower facial third reference.
- `balanced` — *Balanced*: Chin height within the reference range.
- `long` — *Long*: Chin height substantially above reference.

Reference: Farkas LG (1994). Reference: chin height (subnasale to menton) proportional to lower facial third.

### `submental_definition`

**Type:** ordinal · **Scale:** ellenbogen_karlin_neck_classification · **Min visible extent:** head_only

Valid values:

- `well_defined` — *Well-defined*: Crisp transition between chin and neck; no submental fat.
- `softly_defined` — *Softly defined*: Visible chin-neck transition with some submental fullness.
- `moderate_submental_fat` — *Moderate submental fullness*: Visible submental fat pad obscuring the chin-neck angle.
- `marked_submental_fat` — *Marked submental fullness ('double chin')*: Pronounced submental fat creating a second visible chin contour.

Reference: Ellenbogen R, Karlin JV (1980). Visual criteria for success in restoring the youthful neck. Plastic and Reconstructive Surgery, 66(6): 826-837. The Ellenbogen-Karlin neck-aesthetics criteria include submental contour as a primary dimension.

### `mandibular_contour_definition`

**Type:** ordinal · **Scale:** jawline_contour_qualitative · **Min visible extent:** head_only

Valid values:

- `highly_defined` — *Highly defined*: Clear mandibular silhouette visible from frontal and profile views; no submental fat coverage.
- `defined` — *Defined*: Mandibular contour visible but soft.
- `soft` — *Soft*: Mandibular contour partially obscured by soft-tissue coverage.
- `obscured` — *Obscured*: Mandibular contour not discernible; full soft-tissue coverage of the jawline.

Reference: Aligned with the contemporary aesthetic-medicine literature on jawline definition (Sundaram et al., Aesthetic Surgery Journal).

