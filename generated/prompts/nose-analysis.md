# Nose observation prompt

<!-- Auto-generated from vocabularies/nose.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs -->

Atlas category: `nose` · Version: 1.0.0
UBERON: `UBERON:0000004`

## Instruction

Assess the following nose-related phenotype dimensions from the photograph. Return one value per dimension, drawn only from the listed valid buckets. If a dimension cannot be assessed (anatomy not visible, image quality too poor, framing too narrow), return `null` for that dimension. Do not guess — `null` is preferred over an unreliable bucket assignment.

For each dimension, also return a per-dimension confidence score (0.0–1.0) reflecting how reliably you could assess that specific dimension in this photograph.

Return a single JSON object, no prose, with shape:

```json
{
  "bridge_profile": "<one of the valid buckets, or null>",
  "bridge_profile_confidence": "<0.0-1.0, or null>",
  "bridge_height": "<one of the valid buckets, or null>",
  "bridge_height_confidence": "<0.0-1.0, or null>",
  "bridge_width": "<one of the valid buckets, or null>",
  "bridge_width_confidence": "<0.0-1.0, or null>",
  "tip_projection": "<one of the valid buckets, or null>",
  "tip_projection_confidence": "<0.0-1.0, or null>",
  "tip_rotation": "<one of the valid buckets, or null>",
  "tip_rotation_confidence": "<0.0-1.0, or null>",
  "tip_shape": "<one of the valid buckets, or null>",
  "tip_shape_confidence": "<0.0-1.0, or null>",
  "nostril_shape": "<one of the valid buckets, or null>",
  "nostril_shape_confidence": "<0.0-1.0, or null>",
  "nostril_visibility_frontal": "<one of the valid buckets, or null>",
  "nostril_visibility_frontal_confidence": "<0.0-1.0, or null>",
  "alar_width": "<one of the valid buckets, or null>",
  "alar_width_confidence": "<0.0-1.0, or null>",
  "columella_shape": "<one of the valid buckets, or null>",
  "columella_shape_confidence": "<0.0-1.0, or null>",
  "nasal_length": "<one of the valid buckets, or null>",
  "nasal_length_confidence": "<0.0-1.0, or null>",
  "radix_depth": "<one of the valid buckets, or null>",
  "radix_depth_confidence": "<0.0-1.0, or null>",
  "dorsal_hump": "<one of the valid buckets, or null>",
  "dorsal_hump_confidence": "<0.0-1.0, or null>",
  "deviation_axis": "<one of the valid buckets, or null>",
  "deviation_axis_confidence": "<0.0-1.0, or null>"
}
```

## Dimensions

### `bridge_profile`

**Type:** categorical · **Scale:** rhinoplasty_dorsal_profile · **Min visible extent:** head_only

> Best assessed from a side-view (lateral) photograph. Frontal view alone allows only coarse classification; supplement with three-quarter view when available.

Valid values:

- `straight` — *Straight*: Linear dorsum from radix to tip; no convex or concave deviation.
- `convex_aquiline` — *Convex / aquiline (Roman)*: Pronounced dorsal hump; the dorsum is convex above the tip. Common in Mediterranean, Middle Eastern, and some indigenous American populations.
- `convex_mild` — *Mildly convex*: Subtle dorsal convexity without a frank hump.
- `concave_snub` — *Concave / snub*: Saddle-shaped dorsum with depression below the radix. Common in some East Asian populations and in post-traumatic noses.
- `concave_mild` — *Mildly concave*: Slight dorsal concavity without frank saddle deformity.
- `wavy_sigmoid` — *Wavy / sigmoid*: Dorsum has both convex and concave segments — typically a hump followed by a supratip depression.

Reference: Tardy ME (1997). Rhinoplasty: The Art and the Science. WB Saunders. Profile classification synthesized across Tardy, Daniel RK (2002), and Rohrich RJ et al. (2002).

### `bridge_height`

**Type:** ordinal · **Scale:** nasal_dorsum_height_qualitative · **Min visible extent:** head_only

> Best assessed from side view; frontal view captures only width, not height. Independent of bridge_profile — a flat bridge can still be straight, concave, or mildly convex.

Valid values:

- `flat_low` — *Flat / low-set*: Dorsum sits close to the facial plane; minimal projection. Common in East Asian, some Sub-Saharan African, and some indigenous populations.
- `medium` — *Medium*: Average dorsal projection.
- `prominent_high` — *Prominent / high-set*: Marked dorsal projection. Common in European, Mediterranean, Middle Eastern, and some indigenous American populations.

Reference: McKinney P, Stalnecker ML (1984). Surgical correction of the Asian nose. Plastic and Reconstructive Surgery, 73(1). Categorical descriptors aligned with subsequent rhinoplasty literature on ethnic-population dorsum heights.

### `bridge_width`

**Type:** ordinal · **Scale:** nasal_dorsum_width_qualitative · **Min visible extent:** head_only

Valid values:

- `narrow` — *Narrow*: Mid-dorsum width less than approximately 60% of intercanthal distance.
- `medium` — *Medium*: Mid-dorsum width approximately 60-80% of intercanthal distance.
- `wide` — *Wide*: Mid-dorsum width approximately equal to or exceeding intercanthal distance.

Reference: Farkas LG (1994). Anthropometry of the Head and Face, 2nd Edition. Raven Press. Width thresholds proportional to intercanthal distance.

### `tip_projection`

**Type:** ordinal · **Scale:** goode_ratio_qualitative · **Min visible extent:** head_only

> Requires lateral or three-quarter view for reliable assessment; frontal view alone is unreliable.

Valid values:

- `under_projected` — *Under-projected*: Tip projection ratio significantly below 0.55. Tip sits close to the facial plane.
- `balanced` — *Balanced*: Tip projection ratio approximately 0.55-0.60. Within Goode aesthetic reference.
- `over_projected` — *Over-projected*: Tip projection ratio significantly above 0.60. Pinocchio-type extension forward of the facial plane.

Reference: Goode RL (1989). A method of tip projection measurement, in Powell N, Humphreys B (eds.), Proportions of the Aesthetic Face. Thieme. Goode's ratio: ratio of tip projection to nasal length, with ~0.55-0.60 considered aesthetically balanced.

### `tip_rotation`

**Type:** categorical · **Scale:** nasolabial_angle_categorical · **Min visible extent:** head_only

> Requires lateral or three-quarter view. Difficult to distinguish neutral_male from neutral_female ranges from photo alone — confidence should be lower for that distinction.

Valid values:

- `downturned` — *Downturned (acute)*: Nasolabial angle below ~85°; tip points downward. Tip droops below the columella line.
- `neutral_male_range` — *Neutral, male-typical range*: Nasolabial angle approximately 85-95°. Aesthetic reference for male physiognomy.
- `neutral_female_range` — *Neutral, female-typical range*: Nasolabial angle approximately 95-105°. Aesthetic reference for female physiognomy.
- `upturned` — *Upturned (obtuse)*: Nasolabial angle above ~110°; tip points upward. Pixie / piggy nose appearance.

Reference: Powell N, Humphreys B (1984). Proportions of the Aesthetic Face. Thieme. Reference values: ~90-95° men, ~100-105° women.

### `tip_shape`

**Type:** categorical · **Scale:** rohrich_tip_morphology · **Min visible extent:** head_only

Valid values:

- `bulbous_round` — *Bulbous / round*: Wide, fleshy, rounded tip with little visible cartilage definition.
- `boxy` — *Boxy*: Wide tip with two distinct domes visible — a flat or slightly concave roof between left and right tip-defining points.
- `defined_refined` — *Defined / refined*: Tip has clear definition with visible tip-defining points but is not pointed; smooth supratip break.
- `pinched_pointed` — *Pinched / pointed*: Narrow, pointed tip with very tight cartilage definition; alar collapse risk in surgical context.
- `bifid` — *Bifid*: Visible vertical cleft between left and right tip domes; intercrural groove prominent.
- `hooked_drooping` — *Hooked / drooping*: Tip projects downward with a hook at the apex; columella sits below the alar base.
- `asymmetric` — *Asymmetric*: Notable left-right tip asymmetry as the dominant feature.

Reference: Rohrich RJ, Liu JH (2007). The dynamic role of the lower lateral cartilage in tip aesthetics. Plastic and Reconstructive Surgery, 120(6). Daniel RK (1992). The nasal tip: anatomy and aesthetics. Plastic and Reconstructive Surgery, 89(2).

### `nostril_shape`

**Type:** categorical · **Scale:** farkas_nostril_typology · **Min visible extent:** head_only

> Best assessed from inferior view (worm's-eye); frontal view captures shape but may compress the long-axis perception.

Valid values:

- `round` — *Round*: Nostril aperture approximately circular; long axis approximately equal to short axis.
- `oval_horizontal` — *Oval, horizontal*: Long axis of nostril roughly parallel to the alar base; common in some Sub-Saharan African populations.
- `oval_vertical` — *Oval, vertical*: Long axis approximately perpendicular to alar base; common in European populations.
- `teardrop` — *Teardrop*: Tapered nostril shape, narrower at the tip and wider at the base.
- `narrow_slit` — *Narrow slit*: Tightly compressed nostril; minimal aperture area.
- `flared` — *Flared*: Nostrils visibly flared outward; alar lobule projects laterally.

Reference: Farkas LG (1994). Anthropometry of the Head and Face, 2nd Edition. Raven Press.

### `nostril_visibility_frontal`

**Type:** ordinal · **Scale:** nostril_show_qualitative · **Min visible extent:** head_only

Valid values:

- `minimal` — *Minimal*: Nostrils barely or not visible from straight frontal view.
- `moderate` — *Moderate*: Nostril aperture partly visible from frontal view.
- `significant` — *Significant*: Full nostril aperture visible from frontal view; consistent with upturned tip rotation or hyperprojected nasal tip.

Reference: Standard rhinoplasty consultation descriptor; quantitative reference values in Sheen JH, Sheen AP (1987). Aesthetic Rhinoplasty, 2nd Edition.

### `alar_width`

**Type:** ordinal · **Scale:** ferreras_garcia_alar_base_qualitative · **Min visible extent:** head_only

Valid values:

- `narrow` — *Narrow*: Alar base width substantially less than intercanthal distance.
- `balanced` — *Balanced*: Alar base width approximately equal to intercanthal distance.
- `wide` — *Wide*: Alar base width substantially greater than intercanthal distance. Common in Sub-Saharan African and some indigenous populations; the European-norm-derived aesthetic descriptor 'wide' should not be read as deviation from a universal ideal.

Reference: Farkas LG (1994). Anthropometry of the Head and Face, 2nd Edition. Reference: alar base width (al-al) approximately equal to intercanthal distance (en-en) is an aesthetic norm in European populations; deviates in other populations.

### `columella_shape`

**Type:** categorical · **Scale:** columellar_show_classification · **Min visible extent:** head_only

> Best assessed from lateral view.

Valid values:

- `straight_balanced` — *Straight, balanced*: Columella sits at the level of the alar margin in lateral view; straight axis.
- `hanging` — *Hanging*: Columella projects below the alar margin; columellar show greater than approximately 4mm in lateral view.
- `retracted` — *Retracted*: Columella sits above the alar margin; minimal or no columellar show.
- `deviated` — *Deviated*: Columella visibly off the midline axis (left or right).

Reference: Gunter JP, Rohrich RJ, Friedman RM (1996). Classification and correction of alar-columellar discrepancies in rhinoplasty. Plastic and Reconstructive Surgery, 97(3).

### `nasal_length`

**Type:** ordinal · **Scale:** facial_thirds_proportion · **Min visible extent:** head_only

Valid values:

- `short` — *Short*: Nasal length less than ~90% of lower facial third.
- `balanced` — *Balanced*: Nasal length approximately 90-110% of lower facial third (Farkas aesthetic reference).
- `long` — *Long*: Nasal length greater than ~110% of lower facial third.

Reference: Farkas LG (1994). Anthropometry of the Head and Face, 2nd Edition. Aesthetic reference: nasal length (radix to subnasale) approximates the lower facial third (subnasale to menton).

### `radix_depth`

**Type:** ordinal · **Scale:** radix_depth_qualitative · **Min visible extent:** head_only

> Best assessed from lateral view; frontal view alone allows only crude classification.

Valid values:

- `deep` — *Deep*: Pronounced depression at the radix; angle approximately 115-130°. Common in European populations.
- `moderate` — *Moderate*: Visible but not pronounced depression.
- `shallow` — *Shallow*: Subtle depression; angle exceeds approximately 140°.
- `continuous` — *Continuous (no break)*: Dorsum continuous with the forehead with no perceptible break. Common in some indigenous American and Sub-Saharan African populations.

Reference: Daniel RK, Lessard ML (1984). Rhinoplasty: a graded aesthetic-anatomical approach. Annals of Plastic Surgery, 13(5). Hinderer KH classification.

### `dorsal_hump`

**Type:** categorical · **Scale:** dorsal_hump_qualitative · **Min visible extent:** head_only

> Best assessed from lateral view; redundant with bridge_profile when bridge_profile = convex_aquiline, but distinct when small humps coexist with otherwise straight or mildly convex bridges.

Valid values:

- `absent` — *Absent*: No discernible bony or cartilaginous hump.
- `mild` — *Mild*: Subtle hump; visible only on close inspection or in lateral view.
- `moderate` — *Moderate*: Clearly visible hump in lateral view; aesthetic concern for many surgical patients.
- `pronounced` — *Pronounced*: Substantial hump dominating the dorsal silhouette.

Reference: Tardy ME (1997). Rhinoplasty: The Art and the Science. Hump morphology classification.

### `deviation_axis`

**Type:** categorical · **Scale:** rohrich_deviation_classification · **Min visible extent:** head_only

> Best assessed from frontal view with neutral head posture.

Valid values:

- `straight` — *Straight*: Nasal axis aligned with facial midline; no significant deviation.
- `mild_deviation` — *Mild deviation*: Subtle deviation visible only on close inspection.
- `c_shape` — *C-shaped*: Nasal axis curves in a single arc to one side.
- `s_shape` — *S-shaped (sigmoid)*: Nasal axis has two opposite curves — typically deviated upper third one direction and lower third the opposite.
- `tilted` — *Tilted (off-axis but straight)*: Nasal axis is straight but tilted off the facial midline.
- `post_traumatic` — *Post-traumatic / saddle*: Visible deformity consistent with prior trauma — typically dorsal saddle, deviated tip, or alar collapse.

Reference: Rohrich RJ, Gunter JP, Deuber MA, Adams WP (2002). The deviated nose: optimizing results using a simplified classification and algorithmic approach. Plastic and Reconstructive Surgery, 110(6).

