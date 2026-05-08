# Body shape — phenotype taxonomy

<!-- Auto-generated from vocabularies/body-shape.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs -->

> **Atlas category:** `body-shape` · **Version:** 1.0.0 · **License:** CC-BY-4.0
> **UBERON:** `UBERON:0000468`

Whole-body composite phenotype dimensions: Heath-Carter somatotype, body composition pattern, proportions, frame size, musculature, posture, and lower-limb alignment. This category absorbs the original Height, Weight, Limb, and Knees atlas categories by treating them as composite-body measures rather than discrete body parts. Dimensions are drawn from sports-medicine, public-health, and anthropometric literature. Most dimensions require full-body framing to assess; height and weight require measurement and are flagged not_assessable from photographs.

## Dimensions overview

| Dimension | Type | Scale | Photo-observable | Values |
|---|---|---|---|---|
| `somatotype_endomorphy` | ordinal | heath_carter_1990_1_to_7 | high | 7 |
| `somatotype_mesomorphy` | ordinal | heath_carter_1990_1_to_7 | high | 7 |
| `somatotype_ectomorphy` | ordinal | heath_carter_1990_1_to_7 | high | 7 |
| `somatotype_dominant` | categorical | heath_carter_13_class | high | 13 |
| `height_cm` | numeric | metric_centimeters | not_assessable | 0 |
| `weight_kg` | numeric | metric_kilograms | not_assessable | 0 |
| `bmi_category` | ordinal | who_bmi_with_asian_pacific_thresholds | low | 7 |
| `whr_estimate` | ordinal | whr_qualitative | high | 3 |
| `hip_to_shoulder_ratio` | categorical | hip_shoulder_qualitative | high | 3 |
| `frame_size_estimate` | ordinal | frame_size_qualitative | medium | 3 |
| `body_composition_pattern` | categorical | vague_1956_extended | high | 4 |
| `musculature_general` | ordinal | musculature_qualitative | high | 6 |
| `trunk_to_leg_ratio` | categorical | cormic_index_qualitative | high | 3 |
| `posture` | categorical | kendall_postural_classification | medium | 5 |
| `knee_alignment` | categorical | tibiofemoral_alignment | high | 4 |
| `knee_morphology` | categorical | patellar_morphology_qualitative | medium | 4 |

## `somatotype_endomorphy` — Endomorphy (Heath-Carter)

**Type:** ordinal · **Scale:** heath_carter_1990_1_to_7

**Citation:** Carter JEL, Heath BH (1990). Somatotyping — Development and Applications. Cambridge University Press.

Relative degree of fatness — the endomorphic component of the Heath-Carter somatotype. Higher values indicate greater subcutaneous fat envelope. Originally measured from skinfold sites; visual estimation from photograph correlates moderately.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: full_body`

> Visual estimation correlates moderately with skinfold-measured values. Treat as soft estimate; ground-truth measurement requires three skinfold sites (triceps, subscapular, supraspinale).

### Valid values

- **`1`** — 1 — very low: Minimal subcutaneous fat; bony landmarks prominent throughout the trunk and limbs.
- **`2`** — 2
- **`3`** — 3
- **`4`** — 4 — moderate: Average subcutaneous fat envelope; soft-tissue coverage of skeletal landmarks.
- **`5`** — 5
- **`6`** — 6
- **`7`** — 7 — very high: Pronounced subcutaneous fat envelope; bony landmarks substantially obscured.

## `somatotype_mesomorphy` — Mesomorphy (Heath-Carter)

**Type:** ordinal · **Scale:** heath_carter_1990_1_to_7

**Citation:** Carter JEL, Heath BH (1990). Somatotyping — Development and Applications. Cambridge University Press.

Relative musculoskeletal robustness — the mesomorphic component of the Heath-Carter somatotype. Higher values indicate greater muscle mass and skeletal robustness relative to height.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: full_body`

> Originally measured from bone breadths and limb girths corrected for skinfold; visual estimation reasonably accurate.

### Valid values

- **`1`** — 1 — very low: Slight musculoskeletal development; narrow bone structure.
- **`2`** — 2
- **`3`** — 3
- **`4`** — 4 — moderate: Average muscle mass and skeletal robustness.
- **`5`** — 5
- **`6`** — 6
- **`7`** — 7 — very high: Pronounced muscle mass and robust skeletal frame.

## `somatotype_ectomorphy` — Ectomorphy (Heath-Carter)

**Type:** ordinal · **Scale:** heath_carter_1990_1_to_7

**Citation:** Carter JEL, Heath BH (1990). Somatotyping — Development and Applications. Cambridge University Press.

Relative linearity — the ectomorphic component of the Heath-Carter somatotype. Higher values indicate greater height-for-mass and a more linear physique.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: full_body`

> Computed from height-to-cube-root-of-weight ratio (HWR); visual estimation captures the perceptual linearity correlate.

### Valid values

- **`1`** — 1 — very low: Compact, low height-for-mass.
- **`2`** — 2
- **`3`** — 3
- **`4`** — 4 — moderate: Average linearity.
- **`5`** — 5
- **`6`** — 6
- **`7`** — 7 — very high: Highly linear; long-limbed; high height-for-mass.

## `somatotype_dominant` — Dominant somatotype class

**Type:** categorical · **Scale:** heath_carter_13_class

**Citation:** Carter JEL, Heath BH (1990). Somatotyping — Development and Applications. Cambridge University Press.

Single-label summary of Heath-Carter somatotype based on which component dominates. Derived from the three component scores; included as a discrete categorical for cross-group comparison.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: full_body`

> Derived from the three component scores. The model can either output this directly or it can be computed downstream from the three component values.

### Valid values

- **`central`** — Central: All three components within one unit of each other; no single dominance.
- **`balanced_endomorph`** — Balanced endomorph: Endomorphy dominant; mesomorphy and ectomorphy approximately equal and lower.
- **`mesomorphic_endomorph`** — Mesomorphic endomorph: Endomorphy dominant; mesomorphy second.
- **`mesomorph_endomorph`** — Mesomorph-endomorph: Endomorphy and mesomorphy approximately equal and dominant; ectomorphy lower.
- **`endomorphic_mesomorph`** — Endomorphic mesomorph: Mesomorphy dominant; endomorphy second.
- **`balanced_mesomorph`** — Balanced mesomorph: Mesomorphy dominant; endomorphy and ectomorphy approximately equal and lower.
- **`ectomorphic_mesomorph`** — Ectomorphic mesomorph: Mesomorphy dominant; ectomorphy second.
- **`mesomorph_ectomorph`** — Mesomorph-ectomorph: Mesomorphy and ectomorphy approximately equal and dominant; endomorphy lower.
- **`mesomorphic_ectomorph`** — Mesomorphic ectomorph: Ectomorphy dominant; mesomorphy second.
- **`balanced_ectomorph`** — Balanced ectomorph: Ectomorphy dominant; endomorphy and mesomorphy approximately equal and lower.
- **`endomorphic_ectomorph`** — Endomorphic ectomorph: Ectomorphy dominant; endomorphy second.
- **`endomorph_ectomorph`** — Endomorph-ectomorph: Endomorphy and ectomorphy approximately equal and dominant; mesomorphy lower.
- **`ectomorphic_endomorph`** — Ectomorphic endomorph: Endomorphy dominant; ectomorphy second.

## `height_cm` — Height (cm)

**Type:** numeric · **Scale:** metric_centimeters

**Citation:** Standard anthropometric stature measurement; standing height from sole to vertex.

Stature in centimeters. Requires direct measurement; not derivable from a single photograph without a calibrated reference object. Included for structured-text use cases (clinical records, athlete databases) where measured values are available.

**Observability:** `from_photograph: not_assessable` · `requires_unclothed: false` · `minimum_visible_extent: full_body`

> A photograph alone does not yield reliable height estimates. The dimension is included so external measured values can populate it through structured-text ingestion.

## `weight_kg` — Weight (kg)

**Type:** numeric · **Scale:** metric_kilograms

**Citation:** Standard anthropometric body-mass measurement.

Body mass in kilograms. Requires direct measurement; not derivable from a photograph. Included for structured-text use cases.

**Observability:** `from_photograph: not_assessable` · `requires_unclothed: false` · `minimum_visible_extent: full_body`

## `bmi_category` — BMI category

**Type:** ordinal · **Scale:** who_bmi_with_asian_pacific_thresholds

**Citation:** WHO (2000). Obesity: preventing and managing the global epidemic. WHO Technical Report Series 894. Asian-Pacific thresholds: WHO Expert Consultation (2004), The Lancet, 363(9403): 157-163.

WHO BMI category, ordinal. Asian-Pacific population BMI thresholds are lower than the WHO universal thresholds because of higher body-fat percentage at equivalent BMI in those populations; the scale lists both anchor points where they differ.

**Observability:** `from_photograph: low` · `requires_unclothed: false` · `minimum_visible_extent: full_body`

> Visual estimation of BMI from a photograph is unreliable across the normal-overweight boundary. Treat as soft estimate at coarse buckets only (e.g. underweight / normal / overweight / obese — without subdividing obese classes from a photo).

### Valid values

- **`severe_underweight`** — Severe underweight: BMI < 16.0 kg/m².
- **`underweight`** — Underweight: BMI 16.0–18.4 kg/m².
- **`normal_weight`** — Normal weight: BMI 18.5–24.9 kg/m² (WHO universal); 18.5–22.9 kg/m² (Asian-Pacific).
- **`overweight`** — Overweight: BMI 25.0–29.9 kg/m² (WHO universal); 23.0–27.4 kg/m² (Asian-Pacific).
- **`obese_class_1`** — Obese class I: BMI 30.0–34.9 kg/m² (WHO universal); 27.5–32.4 kg/m² (Asian-Pacific).
- **`obese_class_2`** — Obese class II: BMI 35.0–39.9 kg/m² (WHO universal); 32.5–37.4 kg/m² (Asian-Pacific).
- **`obese_class_3`** — Obese class III: BMI ≥ 40.0 kg/m² (WHO universal); ≥ 37.5 kg/m² (Asian-Pacific).

## `whr_estimate` — Waist-to-hip ratio (estimate)

**Type:** ordinal · **Scale:** whr_qualitative

**Citation:** WHO (2008). Waist Circumference and Waist-Hip Ratio: Report of a WHO Expert Consultation. Singh D (1993). Adaptive significance of female physical attractiveness: role of waist-to-hip ratio. Journal of Personality and Social Psychology, 65(2): 293-307.

Visual-estimate categorization of waist-to-hip ratio. Sex-specific clinical thresholds (≥0.85 women, ≥0.90 men) indicate elevated cardiometabolic risk; this scale is a qualitative-bucket equivalent for visual assessment.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: full_body`

> Frontal view sufficient; clothing affects accuracy.

### Valid values

- **`low`** — Low (pronounced waist): Waist substantially narrower than hips; hourglass-equivalent silhouette.
- **`moderate`** — Moderate (defined waist): Waist clearly narrower than hips but not pronounced.
- **`high`** — High (minimal waist definition): Waist approximates or exceeds hip width; rectangular or apple-shaped silhouette.

## `hip_to_shoulder_ratio` — Hip-to-shoulder ratio

**Type:** categorical · **Scale:** hip_shoulder_qualitative

**Citation:** Anthropometric proportional reasoning; relative biacromial-to-biiliac breadth used in sports-medicine and aesthetic-anatomy contexts.

Relative breadth of the hips compared to the shoulders. A secondary sex characteristic that varies by ethnic group and sex.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: full_body`

### Valid values

- **`narrow_hips`** — Narrow hips relative to shoulders: Inverted-triangle silhouette; biacromial breadth substantially exceeds biiliac breadth.
- **`balanced`** — Balanced: Approximately equal hip and shoulder breadth.
- **`wide_hips`** — Wide hips relative to shoulders: Pear-shaped silhouette; biiliac breadth approaches or exceeds biacromial breadth.

## `frame_size_estimate` — Skeletal frame size

**Type:** ordinal · **Scale:** frame_size_qualitative

**Citation:** Frisancho AR (1984). New standards of weight and body composition by frame size and height for assessment of nutritional status of adults and the elderly. American Journal of Clinical Nutrition, 40(4): 808-819. Grant JP, DeHoog S (1985). Nutritional Assessment in Clinical Care.

Skeletal frame size, qualitative bucket. Originally measured by elbow breadth or wrist circumference; visual estimation captures the silhouette correlate. Important when interpreting weight and BMI within a population.

**Observability:** `from_photograph: medium` · `requires_unclothed: false` · `minimum_visible_extent: full_body`

> Better estimated from visible wrist/elbow when arms are bare; clothed assessment is approximate.

### Valid values

- **`small`** — Small: Narrow bone structure; slight wrist and elbow.
- **`medium`** — Medium: Average bone structure.
- **`large`** — Large: Broad bone structure; thick wrist and elbow.

## `body_composition_pattern` — Body composition pattern (fat distribution)

**Type:** categorical · **Scale:** vague_1956_extended

**Citation:** Vague J (1956). The degree of masculine differentiation of obesities: a factor determining predisposition to diabetes, atherosclerosis, gout, and uric calculous disease. American Journal of Clinical Nutrition, 4(1): 20-34. Subsequent literature refined the gynoid/android distinction.

Pattern of body-fat distribution. Independent dimension from BMI — two individuals with the same BMI can have very different distributions, with different cardiometabolic risk profiles.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: full_body`

### Valid values

- **`gynoid`** — Gynoid (pear): Fat accumulation predominantly in hips, thighs, and buttocks; lower-body distribution.
- **`android`** — Android (apple): Fat accumulation predominantly in abdominal and visceral regions; upper-body distribution.
- **`balanced`** — Balanced: No strong upper-body or lower-body fat preference.
- **`extremity_dominant`** — Extremity-dominant: Fat accumulation predominantly in arms and legs rather than trunk.

## `musculature_general` — General musculature

**Type:** ordinal · **Scale:** musculature_qualitative

**Citation:** Qualitative scale aligned with sports-medicine training-status descriptors (Untrained, Recreationally Active, Trained, Highly Trained, World-Class) — Mann TN, Lamberts RP, Lambert MI (2013). Sports Medicine, 43(7).

Visible musculature, ordinal. Captures training status and muscle hypertrophy as observable from photograph.

**Observability:** `from_photograph: high` · `requires_unclothed: true` · `minimum_visible_extent: torso`

> Definition assessment requires visible musculature; clothed photographs allow only mass estimation.

### Valid values

- **`untrained`** — Untrained: Soft musculature; no visible definition; no evident strength training.
- **`light`** — Lightly active: Slight musculature; some tone but no definition.
- **`moderate`** — Moderate: Visible muscle tone in major groups; some definition under good lighting.
- **`athletic`** — Athletic: Clear definition in major muscle groups; visible separation between groups.
- **`muscular`** — Muscular: Pronounced muscle mass and definition; evidence of sustained strength training.
- **`hypertrophied`** — Hypertrophied: Bodybuilder-class muscle mass; substantial volumetric hypertrophy.

## `trunk_to_leg_ratio` — Trunk-to-leg ratio

**Type:** categorical · **Scale:** cormic_index_qualitative

**Citation:** Cormic index = sitting height / standing height; population norms in Eveleth PB, Tanner JM (1990). Worldwide Variation in Human Growth, 2nd Edition. Cambridge University Press.

Relative length of trunk versus legs. Anthropologically meaningful — varies systematically across populations, with East Asian populations averaging higher cormic indices (longer trunk relative to legs) and Sub-Saharan African populations averaging lower.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: full_body`

### Valid values

- **`long_trunk_short_legs`** — Long trunk, shorter legs: Cormic index above population mean; trunk dominant.
- **`balanced`** — Balanced: Cormic index near population mean.
- **`short_trunk_long_legs`** — Short trunk, longer legs: Cormic index below population mean; legs dominant.

## `posture` — Posture (sagittal alignment)

**Type:** categorical · **Scale:** kendall_postural_classification

**Citation:** Kendall FP, McCreary EK, Provance PG (2005). Muscles: Testing and Function with Posture and Pain, 5th Edition. Lippincott Williams & Wilkins.

Habitual sagittal-plane postural alignment as visible from a side-view photograph. Postural deviations are common and meaningful for body-shape assessment.

**Observability:** `from_photograph: medium` · `requires_unclothed: false` · `minimum_visible_extent: full_body`

> Best assessed from a side-view photograph in habitual standing position; assessment from frontal-only views is unreliable.

### Valid values

- **`ideal`** — Ideal alignment: Vertical line through ear, shoulder, hip, knee, and ankle in side view.
- **`kyphotic_lordotic`** — Kyphotic-lordotic: Increased thoracic kyphosis and lumbar lordosis; head-forward posture.
- **`flat_back`** — Flat back: Reduced lumbar lordosis; flattened lower spine.
- **`sway_back`** — Sway back: Pelvis shifted forward of plumb; thoracic spine compensates posteriorly.
- **`forward_head`** — Forward head: Head positioned anterior to shoulders without other major deviations.

## `knee_alignment` — Knee alignment (frontal plane)

**Type:** categorical · **Scale:** tibiofemoral_alignment

**Citation:** Cooke TD, Sled EA, Scudamore RA (2007). Frontal plane knee alignment: a call for standardized measurement. Journal of Rheumatology, 34(9): 1796-1801.

Tibiofemoral alignment in the frontal plane. Absorbed from the original Knees atlas category. Varus and valgus alignment have systematic ethnic-group variation in the orthopedic literature.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: full_body`

> Best assessed from frontal full-body view with feet together. Mild physiologic valgus is normal in adults; only deviations are flagged here.

### Valid values

- **`neutral`** — Neutral: Tibiofemoral angle approximately 0° in the frontal plane (with normal physiologic valgus); knees and feet aligned.
- **`genu_valgum`** — Genu valgum (knock-knees): Distal femur and proximal tibia angled medially; knees touch when feet apart.
- **`genu_varum`** — Genu varum (bow-legs): Distal femur and proximal tibia angled laterally; gap between knees when feet together.
- **`windswept`** — Windswept: Asymmetric — one valgus, one varus.

## `knee_morphology` — Knee morphology

**Type:** categorical · **Scale:** patellar_morphology_qualitative

**Citation:** Qualitative descriptors for visible knee morphology; absorbed from the original Knees atlas category. No single canonical scale — descriptive vocabulary aligned with anatomic-anthropology usage.

Visible morphology of the knee region as a soft-tissue silhouette.

**Observability:** `from_photograph: medium` · `requires_unclothed: false` · `minimum_visible_extent: full_body`

### Valid values

- **`square`** — Square: Wider, more boxy knee profile; pronounced patellar prominence within a broader soft-tissue envelope.
- **`round`** — Round: Smoother, more rounded knee profile; less distinct patellar outline.
- **`prominent_patella`** — Prominent patella: Patella visible as a distinct elevated landmark even at rest.
- **`asymmetric`** — Asymmetric: Notable difference between left and right knee morphology.

## References

- Carter JEL, Heath BH (1990). Somatotyping — Development and Applications. Cambridge University Press.
- WHO (2000). Obesity: preventing and managing the global epidemic. WHO Technical Report Series 894.
- WHO Expert Consultation (2004). Appropriate body-mass index for Asian populations and its implications for policy and intervention strategies. The Lancet, 363(9403): 157-163.
- WHO (2008). Waist Circumference and Waist-Hip Ratio: Report of a WHO Expert Consultation.
- Singh D (1993). Adaptive significance of female physical attractiveness: role of waist-to-hip ratio. Journal of Personality and Social Psychology, 65(2): 293-307.
- Frisancho AR (1984). New standards of weight and body composition by frame size and height. American Journal of Clinical Nutrition, 40(4): 808-819.
- Vague J (1956). The degree of masculine differentiation of obesities. American Journal of Clinical Nutrition, 4(1): 20-34.
- Mann TN, Lamberts RP, Lambert MI (2013). High responders and low responders: factors associated with individual variation in response to standardized training. Sports Medicine, 43(7).
- Eveleth PB, Tanner JM (1990). Worldwide Variation in Human Growth, 2nd Edition. Cambridge University Press.
- Kendall FP, McCreary EK, Provance PG (2005). Muscles: Testing and Function with Posture and Pain, 5th Edition. Lippincott Williams & Wilkins.
- Cooke TD, Sled EA, Scudamore RA (2007). Frontal plane knee alignment: a call for standardized measurement. Journal of Rheumatology, 34(9): 1796-1801.

