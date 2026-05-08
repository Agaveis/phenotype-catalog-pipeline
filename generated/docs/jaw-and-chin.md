# Jaw and chin — phenotype taxonomy

<!-- Auto-generated from vocabularies/jaw-and-chin.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs -->

> **Atlas category:** `jaw-and-chin` · **Version:** 1.0.0 · **License:** CC-BY-4.0
> **UBERON:** `UBERON:0001684` · **FMA:** `FMA:52748`

Mandibular morphology and chin (mental) anatomy: jaw width, mandibular angle, masseter prominence, chin shape and projection, submental contour. Dimensions are drawn from craniofacial anthropometry (Farkas), facial-aesthetics literature (González-Ulloa, Riedel), and orthognathic-surgery references. Mandibular morphology has substantial population-level variation; East Asian populations average wider bigonial breadth and more prominent masseter musculature than European populations.

## Dimensions overview

| Dimension | Type | Scale | Photo-observable | Values |
|---|---|---|---|---|
| `jaw_width_bigonial` | ordinal | bigonial_breadth_qualitative | high | 3 |
| `mandibular_angle` | categorical | gonial_angle_qualitative | high | 3 |
| `masseter_prominence` | ordinal | masseter_prominence_qualitative | medium | 4 |
| `chin_projection` | ordinal | riedel_pogonion_qualitative | high | 3 |
| `chin_shape_frontal` | categorical | chin_shape_qualitative | high | 5 |
| `chin_height` | ordinal | chin_height_proportional | high | 3 |
| `submental_definition` | ordinal | ellenbogen_karlin_neck_classification | high | 4 |
| `mandibular_contour_definition` | ordinal | jawline_contour_qualitative | high | 4 |

## `jaw_width_bigonial` — Jaw width (bigonial)

**Type:** ordinal · **Scale:** bigonial_breadth_qualitative

**Citation:** Farkas LG (1994). Anthropometry of the Head and Face, 2nd Edition. Reference: bigonial breadth (go-go) relative to bizygomatic breadth (zy-zy).

Width of the lower jaw at the gonial angles (bigonial breadth) relative to the cheekbones (bizygomatic breadth).

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

### Valid values

- **`narrow`** — Narrow (tapered): Bigonial breadth substantially less than bizygomatic; tapered lower face.
- **`balanced`** — Balanced: Bigonial breadth approximately 75-85% of bizygomatic; aesthetic reference range.
- **`wide`** — Wide: Bigonial breadth approaches or exceeds bizygomatic; squared or wider-than-cheekbones lower face. Common in East Asian populations.

## `mandibular_angle` — Mandibular angle (gonial angle)

**Type:** categorical · **Scale:** gonial_angle_qualitative

**Citation:** Aligned with orthognathic-surgery descriptors of mandibular angle morphology; reference values approximately 120-130° for the angle between the mandibular ramus and body.

Sharpness of the gonial angle.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

### Valid values

- **`sharp_angular`** — Sharp / angular: Visible 90°-leaning angle at the gonial point; defined jawline. More common in male physiognomy and in East Asian populations.
- **`moderate`** — Moderate: Standard 120-130° angle; defined but rounded gonial transition.
- **`soft_obtuse`** — Soft / obtuse: Smooth, rounded transition with no distinct angle. More common in female physiognomy and with subcutaneous fat coverage.

## `masseter_prominence` — Masseter prominence

**Type:** ordinal · **Scale:** masseter_prominence_qualitative

**Citation:** Aligned with descriptors used in masseter-reduction (botulinum toxin / surgical) literature on the East Asian face.

Prominence of the masseter muscle as a visible jaw-region landmark. Hypertrophic masseter is the basis for the 'square jaw' appearance distinct from skeletal jaw width.

**Observability:** `from_photograph: medium` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

### Valid values

- **`flat_minimal`** — Flat / minimal: Masseter not visibly contributing to jaw silhouette.
- **`moderate`** — Moderate: Masseter visible at clench but not at rest.
- **`prominent`** — Prominent: Masseter visible as a distinct landmark even at rest; squared lower face.
- **`hypertrophic`** — Hypertrophic: Pronounced masseter mass; visible bulge at the lower jaw.

## `chin_projection` — Chin projection (sagittal)

**Type:** ordinal · **Scale:** riedel_pogonion_qualitative

**Citation:** Riedel RA (1957). An analysis of dentofacial relationships. American Journal of Orthodontics, 43(2). Reference: pogonion-to-vertical-line relationship as the standard for chin projection assessment.

Anterior projection of the chin (pogonion) in lateral view.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

> Best assessed from lateral view.

### Valid values

- **`retrognathic`** — Retrognathic / recessed: Pogonion sits posterior to the Riedel reference plane; receding chin.
- **`balanced`** — Balanced: Pogonion approximately at the Riedel reference plane.
- **`prognathic`** — Prognathic / projecting: Pogonion sits anterior to the reference plane; prominent chin.

## `chin_shape_frontal` — Chin shape (frontal)

**Type:** categorical · **Scale:** chin_shape_qualitative

**Citation:** Aligned with descriptors used in genioplasty literature.

Shape of the chin in frontal view.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

### Valid values

- **`pointed`** — Pointed: V-shaped chin with narrow apex.
- **`rounded`** — Rounded: Smooth U-shape; no distinct point or angle.
- **`square`** — Square: Wide, flat chin with sharp lateral angles.
- **`cleft`** — Cleft (dimpled): Visible vertical midline indentation in the chin pad.
- **`asymmetric`** — Asymmetric: Notable left-right chin asymmetry.

## `chin_height` — Chin height (vertical)

**Type:** ordinal · **Scale:** chin_height_proportional

**Citation:** Farkas LG (1994). Reference: chin height (subnasale to menton) proportional to lower facial third.

Vertical chin height proportional to the lower facial third.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

### Valid values

- **`short`** — Short: Chin height less than lower facial third reference.
- **`balanced`** — Balanced: Chin height within the reference range.
- **`long`** — Long: Chin height substantially above reference.

## `submental_definition` — Submental (under-chin) definition

**Type:** ordinal · **Scale:** ellenbogen_karlin_neck_classification

**Citation:** Ellenbogen R, Karlin JV (1980). Visual criteria for success in restoring the youthful neck. Plastic and Reconstructive Surgery, 66(6): 826-837. The Ellenbogen-Karlin neck-aesthetics criteria include submental contour as a primary dimension.

Visibility of the chin-to-neck transition; presence of submental fat or laxity ('double chin').

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

### Valid values

- **`well_defined`** — Well-defined: Crisp transition between chin and neck; no submental fat.
- **`softly_defined`** — Softly defined: Visible chin-neck transition with some submental fullness.
- **`moderate_submental_fat`** — Moderate submental fullness: Visible submental fat pad obscuring the chin-neck angle.
- **`marked_submental_fat`** — Marked submental fullness ('double chin'): Pronounced submental fat creating a second visible chin contour.

## `mandibular_contour_definition` — Mandibular contour definition

**Type:** ordinal · **Scale:** jawline_contour_qualitative

**Citation:** Aligned with the contemporary aesthetic-medicine literature on jawline definition (Sundaram et al., Aesthetic Surgery Journal).

Visibility of the mandibular contour from gonial angle to chin.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

### Valid values

- **`highly_defined`** — Highly defined: Clear mandibular silhouette visible from frontal and profile views; no submental fat coverage.
- **`defined`** — Defined: Mandibular contour visible but soft.
- **`soft`** — Soft: Mandibular contour partially obscured by soft-tissue coverage.
- **`obscured`** — Obscured: Mandibular contour not discernible; full soft-tissue coverage of the jawline.

## References

- Farkas LG (1994). Anthropometry of the Head and Face, 2nd Edition. Raven Press.
- Riedel RA (1957). An analysis of dentofacial relationships. American Journal of Orthodontics, 43(2): 103-119.
- Ellenbogen R, Karlin JV (1980). Visual criteria for success in restoring the youthful neck. Plastic and Reconstructive Surgery, 66(6): 826-837.
- González-Ulloa M (1968). Quantitative principles in cosmetic surgery of the face: profile-plasty. Plastic and Reconstructive Surgery, 41(2).
- Sundaram H, Liew S, Signorini M, et al. (2016). Global aesthetics consensus: hyaluronic acid fillers and botulinum toxin type A — recommendations for combined treatment and optimizing outcomes in diverse patient populations. Plastic and Reconstructive Surgery, 137(5).

