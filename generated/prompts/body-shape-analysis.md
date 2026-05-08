# Body shape observation prompt

<!-- Auto-generated from vocabularies/body-shape.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs -->

Atlas category: `body-shape` · Version: 1.0.0
UBERON: `UBERON:0000468`

## Instruction

Assess the following body shape-related phenotype dimensions from the photograph. Return one value per dimension, drawn only from the listed valid buckets. If a dimension cannot be assessed (anatomy not visible, image quality too poor, framing too narrow), return `null` for that dimension. Do not guess — `null` is preferred over an unreliable bucket assignment.

For each dimension, also return a per-dimension confidence score (0.0–1.0) reflecting how reliably you could assess that specific dimension in this photograph.

Return a single JSON object, no prose, with shape:

```json
{
  "somatotype_endomorphy": "<one of the valid buckets, or null>",
  "somatotype_endomorphy_confidence": "<0.0-1.0, or null>",
  "somatotype_mesomorphy": "<one of the valid buckets, or null>",
  "somatotype_mesomorphy_confidence": "<0.0-1.0, or null>",
  "somatotype_ectomorphy": "<one of the valid buckets, or null>",
  "somatotype_ectomorphy_confidence": "<0.0-1.0, or null>",
  "somatotype_dominant": "<one of the valid buckets, or null>",
  "somatotype_dominant_confidence": "<0.0-1.0, or null>",
  "bmi_category": "<one of the valid buckets, or null>",
  "bmi_category_confidence": "<0.0-1.0, or null>",
  "whr_estimate": "<one of the valid buckets, or null>",
  "whr_estimate_confidence": "<0.0-1.0, or null>",
  "hip_to_shoulder_ratio": "<one of the valid buckets, or null>",
  "hip_to_shoulder_ratio_confidence": "<0.0-1.0, or null>",
  "frame_size_estimate": "<one of the valid buckets, or null>",
  "frame_size_estimate_confidence": "<0.0-1.0, or null>",
  "body_composition_pattern": "<one of the valid buckets, or null>",
  "body_composition_pattern_confidence": "<0.0-1.0, or null>",
  "musculature_general": "<one of the valid buckets, or null>",
  "musculature_general_confidence": "<0.0-1.0, or null>",
  "trunk_to_leg_ratio": "<one of the valid buckets, or null>",
  "trunk_to_leg_ratio_confidence": "<0.0-1.0, or null>",
  "posture": "<one of the valid buckets, or null>",
  "posture_confidence": "<0.0-1.0, or null>",
  "knee_alignment": "<one of the valid buckets, or null>",
  "knee_alignment_confidence": "<0.0-1.0, or null>",
  "knee_morphology": "<one of the valid buckets, or null>",
  "knee_morphology_confidence": "<0.0-1.0, or null>"
}
```

## Dimensions

### `somatotype_endomorphy`

**Type:** ordinal · **Scale:** heath_carter_1990_1_to_7 · **Min visible extent:** full_body

> Visual estimation correlates moderately with skinfold-measured values. Treat as soft estimate; ground-truth measurement requires three skinfold sites (triceps, subscapular, supraspinale).

Valid values:

- `1` — *1 — very low*: Minimal subcutaneous fat; bony landmarks prominent throughout the trunk and limbs.
- `2` — *2*
- `3` — *3*
- `4` — *4 — moderate*: Average subcutaneous fat envelope; soft-tissue coverage of skeletal landmarks.
- `5` — *5*
- `6` — *6*
- `7` — *7 — very high*: Pronounced subcutaneous fat envelope; bony landmarks substantially obscured.

Reference: Carter JEL, Heath BH (1990). Somatotyping — Development and Applications. Cambridge University Press.

### `somatotype_mesomorphy`

**Type:** ordinal · **Scale:** heath_carter_1990_1_to_7 · **Min visible extent:** full_body

> Originally measured from bone breadths and limb girths corrected for skinfold; visual estimation reasonably accurate.

Valid values:

- `1` — *1 — very low*: Slight musculoskeletal development; narrow bone structure.
- `2` — *2*
- `3` — *3*
- `4` — *4 — moderate*: Average muscle mass and skeletal robustness.
- `5` — *5*
- `6` — *6*
- `7` — *7 — very high*: Pronounced muscle mass and robust skeletal frame.

Reference: Carter JEL, Heath BH (1990). Somatotyping — Development and Applications. Cambridge University Press.

### `somatotype_ectomorphy`

**Type:** ordinal · **Scale:** heath_carter_1990_1_to_7 · **Min visible extent:** full_body

> Computed from height-to-cube-root-of-weight ratio (HWR); visual estimation captures the perceptual linearity correlate.

Valid values:

- `1` — *1 — very low*: Compact, low height-for-mass.
- `2` — *2*
- `3` — *3*
- `4` — *4 — moderate*: Average linearity.
- `5` — *5*
- `6` — *6*
- `7` — *7 — very high*: Highly linear; long-limbed; high height-for-mass.

Reference: Carter JEL, Heath BH (1990). Somatotyping — Development and Applications. Cambridge University Press.

### `somatotype_dominant`

**Type:** categorical · **Scale:** heath_carter_13_class · **Min visible extent:** full_body

> Derived from the three component scores. The model can either output this directly or it can be computed downstream from the three component values.

Valid values:

- `central` — *Central*: All three components within one unit of each other; no single dominance.
- `balanced_endomorph` — *Balanced endomorph*: Endomorphy dominant; mesomorphy and ectomorphy approximately equal and lower.
- `mesomorphic_endomorph` — *Mesomorphic endomorph*: Endomorphy dominant; mesomorphy second.
- `mesomorph_endomorph` — *Mesomorph-endomorph*: Endomorphy and mesomorphy approximately equal and dominant; ectomorphy lower.
- `endomorphic_mesomorph` — *Endomorphic mesomorph*: Mesomorphy dominant; endomorphy second.
- `balanced_mesomorph` — *Balanced mesomorph*: Mesomorphy dominant; endomorphy and ectomorphy approximately equal and lower.
- `ectomorphic_mesomorph` — *Ectomorphic mesomorph*: Mesomorphy dominant; ectomorphy second.
- `mesomorph_ectomorph` — *Mesomorph-ectomorph*: Mesomorphy and ectomorphy approximately equal and dominant; endomorphy lower.
- `mesomorphic_ectomorph` — *Mesomorphic ectomorph*: Ectomorphy dominant; mesomorphy second.
- `balanced_ectomorph` — *Balanced ectomorph*: Ectomorphy dominant; endomorphy and mesomorphy approximately equal and lower.
- `endomorphic_ectomorph` — *Endomorphic ectomorph*: Ectomorphy dominant; endomorphy second.
- `endomorph_ectomorph` — *Endomorph-ectomorph*: Endomorphy and ectomorphy approximately equal and dominant; mesomorphy lower.
- `ectomorphic_endomorph` — *Ectomorphic endomorph*: Endomorphy dominant; ectomorphy second.

Reference: Carter JEL, Heath BH (1990). Somatotyping — Development and Applications. Cambridge University Press.

### `height_cm` *(not assessable from photographs — skipped in prompt)*

> Stature in centimeters. Requires direct measurement; not derivable from a single photograph without a calibrated reference object. Included for structured-text use cases (clinical records, athlete databases) where measured values are available.

Scale: Standard anthropometric stature measurement; standing height from sole to vertex.

### `weight_kg` *(not assessable from photographs — skipped in prompt)*

> Body mass in kilograms. Requires direct measurement; not derivable from a photograph. Included for structured-text use cases.

Scale: Standard anthropometric body-mass measurement.

### `bmi_category`

**Type:** ordinal · **Scale:** who_bmi_with_asian_pacific_thresholds · **Min visible extent:** full_body

> Visual estimation of BMI from a photograph is unreliable across the normal-overweight boundary. Treat as soft estimate at coarse buckets only (e.g. underweight / normal / overweight / obese — without subdividing obese classes from a photo).

Valid values:

- `severe_underweight` — *Severe underweight*: BMI < 16.0 kg/m².
- `underweight` — *Underweight*: BMI 16.0–18.4 kg/m².
- `normal_weight` — *Normal weight*: BMI 18.5–24.9 kg/m² (WHO universal); 18.5–22.9 kg/m² (Asian-Pacific).
- `overweight` — *Overweight*: BMI 25.0–29.9 kg/m² (WHO universal); 23.0–27.4 kg/m² (Asian-Pacific).
- `obese_class_1` — *Obese class I*: BMI 30.0–34.9 kg/m² (WHO universal); 27.5–32.4 kg/m² (Asian-Pacific).
- `obese_class_2` — *Obese class II*: BMI 35.0–39.9 kg/m² (WHO universal); 32.5–37.4 kg/m² (Asian-Pacific).
- `obese_class_3` — *Obese class III*: BMI ≥ 40.0 kg/m² (WHO universal); ≥ 37.5 kg/m² (Asian-Pacific).

Reference: WHO (2000). Obesity: preventing and managing the global epidemic. WHO Technical Report Series 894. Asian-Pacific thresholds: WHO Expert Consultation (2004), The Lancet, 363(9403): 157-163.

### `whr_estimate`

**Type:** ordinal · **Scale:** whr_qualitative · **Min visible extent:** full_body

> Frontal view sufficient; clothing affects accuracy.

Valid values:

- `low` — *Low (pronounced waist)*: Waist substantially narrower than hips; hourglass-equivalent silhouette.
- `moderate` — *Moderate (defined waist)*: Waist clearly narrower than hips but not pronounced.
- `high` — *High (minimal waist definition)*: Waist approximates or exceeds hip width; rectangular or apple-shaped silhouette.

Reference: WHO (2008). Waist Circumference and Waist-Hip Ratio: Report of a WHO Expert Consultation. Singh D (1993). Adaptive significance of female physical attractiveness: role of waist-to-hip ratio. Journal of Personality and Social Psychology, 65(2): 293-307.

### `hip_to_shoulder_ratio`

**Type:** categorical · **Scale:** hip_shoulder_qualitative · **Min visible extent:** full_body

Valid values:

- `narrow_hips` — *Narrow hips relative to shoulders*: Inverted-triangle silhouette; biacromial breadth substantially exceeds biiliac breadth.
- `balanced` — *Balanced*: Approximately equal hip and shoulder breadth.
- `wide_hips` — *Wide hips relative to shoulders*: Pear-shaped silhouette; biiliac breadth approaches or exceeds biacromial breadth.

Reference: Anthropometric proportional reasoning; relative biacromial-to-biiliac breadth used in sports-medicine and aesthetic-anatomy contexts.

### `frame_size_estimate`

**Type:** ordinal · **Scale:** frame_size_qualitative · **Min visible extent:** full_body

> Better estimated from visible wrist/elbow when arms are bare; clothed assessment is approximate.

Valid values:

- `small` — *Small*: Narrow bone structure; slight wrist and elbow.
- `medium` — *Medium*: Average bone structure.
- `large` — *Large*: Broad bone structure; thick wrist and elbow.

Reference: Frisancho AR (1984). New standards of weight and body composition by frame size and height for assessment of nutritional status of adults and the elderly. American Journal of Clinical Nutrition, 40(4): 808-819. Grant JP, DeHoog S (1985). Nutritional Assessment in Clinical Care.

### `body_composition_pattern`

**Type:** categorical · **Scale:** vague_1956_extended · **Min visible extent:** full_body

Valid values:

- `gynoid` — *Gynoid (pear)*: Fat accumulation predominantly in hips, thighs, and buttocks; lower-body distribution.
- `android` — *Android (apple)*: Fat accumulation predominantly in abdominal and visceral regions; upper-body distribution.
- `balanced` — *Balanced*: No strong upper-body or lower-body fat preference.
- `extremity_dominant` — *Extremity-dominant*: Fat accumulation predominantly in arms and legs rather than trunk.

Reference: Vague J (1956). The degree of masculine differentiation of obesities: a factor determining predisposition to diabetes, atherosclerosis, gout, and uric calculous disease. American Journal of Clinical Nutrition, 4(1): 20-34. Subsequent literature refined the gynoid/android distinction.

### `musculature_general`

**Type:** ordinal · **Scale:** musculature_qualitative · **Min visible extent:** torso · **Requires unclothed anatomy**

> Definition assessment requires visible musculature; clothed photographs allow only mass estimation.

Valid values:

- `untrained` — *Untrained*: Soft musculature; no visible definition; no evident strength training.
- `light` — *Lightly active*: Slight musculature; some tone but no definition.
- `moderate` — *Moderate*: Visible muscle tone in major groups; some definition under good lighting.
- `athletic` — *Athletic*: Clear definition in major muscle groups; visible separation between groups.
- `muscular` — *Muscular*: Pronounced muscle mass and definition; evidence of sustained strength training.
- `hypertrophied` — *Hypertrophied*: Bodybuilder-class muscle mass; substantial volumetric hypertrophy.

Reference: Qualitative scale aligned with sports-medicine training-status descriptors (Untrained, Recreationally Active, Trained, Highly Trained, World-Class) — Mann TN, Lamberts RP, Lambert MI (2013). Sports Medicine, 43(7).

### `trunk_to_leg_ratio`

**Type:** categorical · **Scale:** cormic_index_qualitative · **Min visible extent:** full_body

Valid values:

- `long_trunk_short_legs` — *Long trunk, shorter legs*: Cormic index above population mean; trunk dominant.
- `balanced` — *Balanced*: Cormic index near population mean.
- `short_trunk_long_legs` — *Short trunk, longer legs*: Cormic index below population mean; legs dominant.

Reference: Cormic index = sitting height / standing height; population norms in Eveleth PB, Tanner JM (1990). Worldwide Variation in Human Growth, 2nd Edition. Cambridge University Press.

### `posture`

**Type:** categorical · **Scale:** kendall_postural_classification · **Min visible extent:** full_body

> Best assessed from a side-view photograph in habitual standing position; assessment from frontal-only views is unreliable.

Valid values:

- `ideal` — *Ideal alignment*: Vertical line through ear, shoulder, hip, knee, and ankle in side view.
- `kyphotic_lordotic` — *Kyphotic-lordotic*: Increased thoracic kyphosis and lumbar lordosis; head-forward posture.
- `flat_back` — *Flat back*: Reduced lumbar lordosis; flattened lower spine.
- `sway_back` — *Sway back*: Pelvis shifted forward of plumb; thoracic spine compensates posteriorly.
- `forward_head` — *Forward head*: Head positioned anterior to shoulders without other major deviations.

Reference: Kendall FP, McCreary EK, Provance PG (2005). Muscles: Testing and Function with Posture and Pain, 5th Edition. Lippincott Williams & Wilkins.

### `knee_alignment`

**Type:** categorical · **Scale:** tibiofemoral_alignment · **Min visible extent:** full_body

> Best assessed from frontal full-body view with feet together. Mild physiologic valgus is normal in adults; only deviations are flagged here.

Valid values:

- `neutral` — *Neutral*: Tibiofemoral angle approximately 0° in the frontal plane (with normal physiologic valgus); knees and feet aligned.
- `genu_valgum` — *Genu valgum (knock-knees)*: Distal femur and proximal tibia angled medially; knees touch when feet apart.
- `genu_varum` — *Genu varum (bow-legs)*: Distal femur and proximal tibia angled laterally; gap between knees when feet together.
- `windswept` — *Windswept*: Asymmetric — one valgus, one varus.

Reference: Cooke TD, Sled EA, Scudamore RA (2007). Frontal plane knee alignment: a call for standardized measurement. Journal of Rheumatology, 34(9): 1796-1801.

### `knee_morphology`

**Type:** categorical · **Scale:** patellar_morphology_qualitative · **Min visible extent:** full_body

Valid values:

- `square` — *Square*: Wider, more boxy knee profile; pronounced patellar prominence within a broader soft-tissue envelope.
- `round` — *Round*: Smoother, more rounded knee profile; less distinct patellar outline.
- `prominent_patella` — *Prominent patella*: Patella visible as a distinct elevated landmark even at rest.
- `asymmetric` — *Asymmetric*: Notable difference between left and right knee morphology.

Reference: Qualitative descriptors for visible knee morphology; absorbed from the original Knees atlas category. No single canonical scale — descriptive vocabulary aligned with anatomic-anthropology usage.

