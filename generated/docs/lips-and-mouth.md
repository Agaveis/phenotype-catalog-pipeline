# Lips and mouth — phenotype taxonomy

<!-- Auto-generated from vocabularies/lips-and-mouth.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs -->

> **Atlas category:** `lips-and-mouth` · **Version:** 1.0.0 · **License:** CC-BY-4.0
> **UBERON:** `UBERON:0001833` · **FMA:** `FMA:59816`

Lip morphology, perioral anatomy, and visible oral structures (teeth, tongue when in frame). Absorbs the original Lips, Mouth, and Tongue atlas categories per the granularity decision. Dimensions are drawn from craniofacial anthropometry (Farkas), aesthetic-medicine literature (Mallucci, Powell-Humphreys), and orofacial-anatomy references. Lip volume varies dramatically across ethnic groups; the contemporary aesthetic-medicine literature provides the relevant categorical frameworks.

## Dimensions overview

| Dimension | Type | Scale | Photo-observable | Values |
|---|---|---|---|---|
| `lip_volume_overall` | ordinal | lip_volume_qualitative | high | 4 |
| `upper_to_lower_lip_ratio` | categorical | mallucci_branford_lip_ratio | high | 4 |
| `cupids_bow` | categorical | cupids_bow_qualitative | high | 4 |
| `philtrum` | categorical | philtrum_qualitative | high | 5 |
| `mouth_width` | ordinal | mouth_width_proportional | high | 3 |
| `lip_corner_orientation` | categorical | oral_commissure_orientation | high | 3 |
| `vermilion_border` | ordinal | vermilion_border_qualitative | medium | 3 |
| `dental_visibility` | categorical | smile_classification_visibility | high | 5 |
| `dental_alignment` | categorical | dental_alignment_qualitative | high | 7 |
| `tongue_morphology` | categorical | tongue_qualitative | low | 5 |

## `lip_volume_overall` — Overall lip volume

**Type:** ordinal · **Scale:** lip_volume_qualitative

**Citation:** Aligned with the Mallucci-Branford 1:2 upper-to-lower aesthetic ratio framework and contemporary lip-augmentation literature.

Combined lip volume from a frontal view. Independent ethnic-correlated dimension; West African and African-diaspora populations average higher native lip volume than European populations, with substantial individual variation.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

### Valid values

- **`thin`** — Thin: Minimal lip volume; lips barely project from the perioral plane.
- **`moderate`** — Moderate: Average volume; lips clearly visible with modest projection.
- **`full`** — Full: Pronounced volume; lips project substantially from the perioral plane.
- **`very_full`** — Very full: Very pronounced volume — either constitutional or augmented.

## `upper_to_lower_lip_ratio` — Upper-to-lower lip volume ratio

**Type:** categorical · **Scale:** mallucci_branford_lip_ratio

**Citation:** Mallucci P, Branford OA (2012). Aesthetic Plastic Surgery. The 1:1.6 (upper:lower) ratio identified as the perceived-natural reference; deviations captured here as ratio buckets.

Relative volume of the upper lip compared to the lower lip in frontal view.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

### Valid values

- **`upper_dominant`** — Upper dominant: Upper lip larger than lower; uncommon. Often a sign of cosmetic over-augmentation.
- **`balanced`** — Balanced (~1:1): Upper and lower lip of approximately equal volume.
- **`lower_dominant_natural`** — Lower dominant (natural ratio): Lower lip larger than upper, approximating the 1:1.6 aesthetic reference.
- **`lower_dominant_pronounced`** — Lower dominant (pronounced): Lower lip substantially larger than upper, beyond the natural reference.

## `cupids_bow` — Cupid's bow morphology

**Type:** categorical · **Scale:** cupids_bow_qualitative

**Citation:** Aesthetic-medicine descriptors aligned with the Niamtu lip-anatomy literature.

Shape of the upper-lip vermilion border at midline (Cupid's bow).

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

### Valid values

- **`sharp_defined`** — Sharp / defined: Crisp angular peaks at the philtral columns; clear M-shape.
- **`soft`** — Soft / rounded: Gentle curves at the peaks; M-shape present but rounded.
- **`flat`** — Flat: Minimal definition; vermilion border nearly straight at midline.
- **`asymmetric`** — Asymmetric: Notable left-right peak asymmetry.

## `philtrum` — Philtrum definition

**Type:** categorical · **Scale:** philtrum_qualitative

**Citation:** Farkas LG (1994). Anthropometry of the Head and Face, 2nd Edition.

Shape and definition of the philtrum (the vertical groove between the nose and upper lip).

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

### Valid values

- **`defined_columns`** — Defined columns: Clear philtral columns visible; well-demarcated central groove.
- **`soft`** — Soft: Subtle column definition.
- **`smooth_minimal`** — Smooth / minimal: Philtrum nearly flat; columns not distinct.
- **`elongated`** — Elongated (long upper lip): Vertical philtrum length above the aesthetic reference range.
- **`short`** — Short upper lip: Vertical philtrum length below the aesthetic reference range.

## `mouth_width` — Mouth width

**Type:** ordinal · **Scale:** mouth_width_proportional

**Citation:** Farkas LG (1994). Reference: mouth width approximately equal to the distance between the medial limbus of each iris.

Width of the mouth (cheilion to cheilion) relative to the inter-iris distance.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

### Valid values

- **`narrow`** — Narrow: Mouth width substantially less than inter-iris distance.
- **`balanced`** — Balanced: Mouth width approximately equal to inter-iris distance (Farkas reference).
- **`wide`** — Wide: Mouth width substantially greater than inter-iris distance.

## `lip_corner_orientation` — Lip corner orientation

**Type:** categorical · **Scale:** oral_commissure_orientation

**Citation:** Aligned with descriptors used in facial-aging literature and aesthetic-medicine commissure-correction context.

Resting orientation of the oral commissures.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

> Best assessed in neutral expression; smiling photographs do not capture resting orientation.

### Valid values

- **`upturned`** — Upturned: Corners angle upward at rest; impression of a slight smile.
- **`neutral`** — Neutral: Corners horizontal at rest.
- **`downturned`** — Downturned: Corners angle downward at rest; impression of resting frown ('marionette' appearance with aging).

## `vermilion_border` — Vermilion border definition

**Type:** ordinal · **Scale:** vermilion_border_qualitative

**Citation:** Aesthetic-medicine descriptor aligned with lip-augmentation pre-procedure assessment.

Sharpness of the vermilion-cutaneous junction.

**Observability:** `from_photograph: medium` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

### Valid values

- **`sharp_defined`** — Sharp: Crisp boundary between vermilion and surrounding skin.
- **`soft`** — Soft: Gradual transition; vermilion edge visible but not sharp.
- **`indistinct`** — Indistinct: Vermilion border barely discernible; common with lip-aging.

## `dental_visibility` — Dental visibility (smile)

**Type:** categorical · **Scale:** smile_classification_visibility

**Citation:** Aligned with orthodontic / smile-aesthetics literature: Liébart MF et al. (2004). Smile line and periodontium visibility. Periodontal Practice Today, 1(1).

Visibility of teeth and gingiva in the photographed expression.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

### Valid values

- **`covered`** — Covered (lips closed): Teeth not visible; mouth closed.
- **`minimal_show`** — Minimal show: Slight tooth visibility (e.g. resting parted lips).
- **`low_smile_line`** — Low smile line: Smile shows less than 75% of upper anterior teeth.
- **`average_smile_line`** — Average smile line: Smile shows 75-100% of upper anterior teeth without gingival show.
- **`high_smile_line`** — High smile line / gummy smile: Smile shows full upper teeth plus a band of gingiva ('gummy smile').

## `dental_alignment` — Dental alignment (when visible)

**Type:** categorical · **Scale:** dental_alignment_qualitative

**Citation:** Aligned with orthodontic descriptors of anterior dental alignment; Angle classification is occlusion-based and not photo-assessable.

Alignment of visible anterior teeth when teeth are in frame.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

### Valid values

- **`aligned`** — Aligned: Anterior teeth straight, evenly spaced.
- **`mild_irregularity`** — Mild irregularity: Subtle crowding or rotation visible.
- **`crowded`** — Crowded: Pronounced crowding; teeth overlap or rotate substantially.
- **`spaced_diastema`** — Spaced / diastema: Visible gap(s) between anterior teeth; central diastema is the most common.
- **`missing_teeth_visible`** — Missing teeth visible
- **`orthodontia_visible`** — Orthodontia visible (braces / retainer): Active or recent orthodontic appliance visible; native alignment not directly observable.
- **`not_visible`** — Not visible: Teeth not in frame; alignment cannot be assessed.

## `tongue_morphology` — Tongue morphology (when visible)

**Type:** categorical · **Scale:** tongue_qualitative

**Citation:** Aligned with descriptors used in the orofacial-anatomy literature; mostly observable in extended-tongue photographs.

Morphology of the tongue when in frame. Most photographs do not show the tongue; this dimension is included for schema completeness and rare cases where the tongue is visible (e.g. tongue-out expressions).

**Observability:** `from_photograph: low` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

### Valid values

- **`not_visible`** — Not visible
- **`normal`** — Normal
- **`geographic_tongue`** — Geographic tongue (visible patches)
- **`fissured_tongue`** — Fissured tongue
- **`long_anteriorly`** — Long / anteriorly extending

## References

- Farkas LG (1994). Anthropometry of the Head and Face, 2nd Edition. Raven Press.
- Mallucci P, Branford OA (2012). Population analysis of the perfect breast: a morphometric analysis. Aesthetic Plastic Surgery, 36(2). [Same authors' lip-aesthetic reference work.]
- Niamtu J (2011). Cosmetic Facial Surgery. Mosby. [Lip-anatomy descriptors.]
- Liébart MF, Fouque-Deruelle C, Santini A et al. (2004). Smile line and periodontium visibility. Periodontal Practice Today, 1(1).
- Powell N, Humphreys B (1984). Proportions of the Aesthetic Face. Thieme.

