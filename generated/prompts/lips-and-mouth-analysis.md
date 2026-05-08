# Lips and mouth observation prompt

<!-- Auto-generated from vocabularies/lips-and-mouth.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs -->

Atlas category: `lips-and-mouth` · Version: 1.0.0
UBERON: `UBERON:0001833`

## Instruction

Assess the following lips and mouth-related phenotype dimensions from the photograph. Return one value per dimension, drawn only from the listed valid buckets. If a dimension cannot be assessed (anatomy not visible, image quality too poor, framing too narrow), return `null` for that dimension. Do not guess — `null` is preferred over an unreliable bucket assignment.

For each dimension, also return a per-dimension confidence score (0.0–1.0) reflecting how reliably you could assess that specific dimension in this photograph.

Return a single JSON object, no prose, with shape:

```json
{
  "lip_volume_overall": "<one of the valid buckets, or null>",
  "lip_volume_overall_confidence": "<0.0-1.0, or null>",
  "upper_to_lower_lip_ratio": "<one of the valid buckets, or null>",
  "upper_to_lower_lip_ratio_confidence": "<0.0-1.0, or null>",
  "cupids_bow": "<one of the valid buckets, or null>",
  "cupids_bow_confidence": "<0.0-1.0, or null>",
  "philtrum": "<one of the valid buckets, or null>",
  "philtrum_confidence": "<0.0-1.0, or null>",
  "mouth_width": "<one of the valid buckets, or null>",
  "mouth_width_confidence": "<0.0-1.0, or null>",
  "lip_corner_orientation": "<one of the valid buckets, or null>",
  "lip_corner_orientation_confidence": "<0.0-1.0, or null>",
  "vermilion_border": "<one of the valid buckets, or null>",
  "vermilion_border_confidence": "<0.0-1.0, or null>",
  "dental_visibility": "<one of the valid buckets, or null>",
  "dental_visibility_confidence": "<0.0-1.0, or null>",
  "dental_alignment": "<one of the valid buckets, or null>",
  "dental_alignment_confidence": "<0.0-1.0, or null>",
  "tongue_morphology": "<one of the valid buckets, or null>",
  "tongue_morphology_confidence": "<0.0-1.0, or null>"
}
```

## Dimensions

### `lip_volume_overall`

**Type:** ordinal · **Scale:** lip_volume_qualitative · **Min visible extent:** head_only

Valid values:

- `thin` — *Thin*: Minimal lip volume; lips barely project from the perioral plane.
- `moderate` — *Moderate*: Average volume; lips clearly visible with modest projection.
- `full` — *Full*: Pronounced volume; lips project substantially from the perioral plane.
- `very_full` — *Very full*: Very pronounced volume — either constitutional or augmented.

Reference: Aligned with the Mallucci-Branford 1:2 upper-to-lower aesthetic ratio framework and contemporary lip-augmentation literature.

### `upper_to_lower_lip_ratio`

**Type:** categorical · **Scale:** mallucci_branford_lip_ratio · **Min visible extent:** head_only

Valid values:

- `upper_dominant` — *Upper dominant*: Upper lip larger than lower; uncommon. Often a sign of cosmetic over-augmentation.
- `balanced` — *Balanced (~1:1)*: Upper and lower lip of approximately equal volume.
- `lower_dominant_natural` — *Lower dominant (natural ratio)*: Lower lip larger than upper, approximating the 1:1.6 aesthetic reference.
- `lower_dominant_pronounced` — *Lower dominant (pronounced)*: Lower lip substantially larger than upper, beyond the natural reference.

Reference: Mallucci P, Branford OA (2012). Aesthetic Plastic Surgery. The 1:1.6 (upper:lower) ratio identified as the perceived-natural reference; deviations captured here as ratio buckets.

### `cupids_bow`

**Type:** categorical · **Scale:** cupids_bow_qualitative · **Min visible extent:** head_only

Valid values:

- `sharp_defined` — *Sharp / defined*: Crisp angular peaks at the philtral columns; clear M-shape.
- `soft` — *Soft / rounded*: Gentle curves at the peaks; M-shape present but rounded.
- `flat` — *Flat*: Minimal definition; vermilion border nearly straight at midline.
- `asymmetric` — *Asymmetric*: Notable left-right peak asymmetry.

Reference: Aesthetic-medicine descriptors aligned with the Niamtu lip-anatomy literature.

### `philtrum`

**Type:** categorical · **Scale:** philtrum_qualitative · **Min visible extent:** head_only

Valid values:

- `defined_columns` — *Defined columns*: Clear philtral columns visible; well-demarcated central groove.
- `soft` — *Soft*: Subtle column definition.
- `smooth_minimal` — *Smooth / minimal*: Philtrum nearly flat; columns not distinct.
- `elongated` — *Elongated (long upper lip)*: Vertical philtrum length above the aesthetic reference range.
- `short` — *Short upper lip*: Vertical philtrum length below the aesthetic reference range.

Reference: Farkas LG (1994). Anthropometry of the Head and Face, 2nd Edition.

### `mouth_width`

**Type:** ordinal · **Scale:** mouth_width_proportional · **Min visible extent:** head_only

Valid values:

- `narrow` — *Narrow*: Mouth width substantially less than inter-iris distance.
- `balanced` — *Balanced*: Mouth width approximately equal to inter-iris distance (Farkas reference).
- `wide` — *Wide*: Mouth width substantially greater than inter-iris distance.

Reference: Farkas LG (1994). Reference: mouth width approximately equal to the distance between the medial limbus of each iris.

### `lip_corner_orientation`

**Type:** categorical · **Scale:** oral_commissure_orientation · **Min visible extent:** head_only

> Best assessed in neutral expression; smiling photographs do not capture resting orientation.

Valid values:

- `upturned` — *Upturned*: Corners angle upward at rest; impression of a slight smile.
- `neutral` — *Neutral*: Corners horizontal at rest.
- `downturned` — *Downturned*: Corners angle downward at rest; impression of resting frown ('marionette' appearance with aging).

Reference: Aligned with descriptors used in facial-aging literature and aesthetic-medicine commissure-correction context.

### `vermilion_border`

**Type:** ordinal · **Scale:** vermilion_border_qualitative · **Min visible extent:** head_only

Valid values:

- `sharp_defined` — *Sharp*: Crisp boundary between vermilion and surrounding skin.
- `soft` — *Soft*: Gradual transition; vermilion edge visible but not sharp.
- `indistinct` — *Indistinct*: Vermilion border barely discernible; common with lip-aging.

Reference: Aesthetic-medicine descriptor aligned with lip-augmentation pre-procedure assessment.

### `dental_visibility`

**Type:** categorical · **Scale:** smile_classification_visibility · **Min visible extent:** head_only

Valid values:

- `covered` — *Covered (lips closed)*: Teeth not visible; mouth closed.
- `minimal_show` — *Minimal show*: Slight tooth visibility (e.g. resting parted lips).
- `low_smile_line` — *Low smile line*: Smile shows less than 75% of upper anterior teeth.
- `average_smile_line` — *Average smile line*: Smile shows 75-100% of upper anterior teeth without gingival show.
- `high_smile_line` — *High smile line / gummy smile*: Smile shows full upper teeth plus a band of gingiva ('gummy smile').

Reference: Aligned with orthodontic / smile-aesthetics literature: Liébart MF et al. (2004). Smile line and periodontium visibility. Periodontal Practice Today, 1(1).

### `dental_alignment`

**Type:** categorical · **Scale:** dental_alignment_qualitative · **Min visible extent:** head_only

Valid values:

- `aligned` — *Aligned*: Anterior teeth straight, evenly spaced.
- `mild_irregularity` — *Mild irregularity*: Subtle crowding or rotation visible.
- `crowded` — *Crowded*: Pronounced crowding; teeth overlap or rotate substantially.
- `spaced_diastema` — *Spaced / diastema*: Visible gap(s) between anterior teeth; central diastema is the most common.
- `missing_teeth_visible` — *Missing teeth visible*
- `orthodontia_visible` — *Orthodontia visible (braces / retainer)*: Active or recent orthodontic appliance visible; native alignment not directly observable.
- `not_visible` — *Not visible*: Teeth not in frame; alignment cannot be assessed.

Reference: Aligned with orthodontic descriptors of anterior dental alignment; Angle classification is occlusion-based and not photo-assessable.

### `tongue_morphology`

**Type:** categorical · **Scale:** tongue_qualitative · **Min visible extent:** head_only

Valid values:

- `not_visible` — *Not visible*
- `normal` — *Normal*
- `geographic_tongue` — *Geographic tongue (visible patches)*
- `fissured_tongue` — *Fissured tongue*
- `long_anteriorly` — *Long / anteriorly extending*

Reference: Aligned with descriptors used in the orofacial-anatomy literature; mostly observable in extended-tongue photographs.

