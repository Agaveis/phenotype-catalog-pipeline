# Penis — phenotype taxonomy

<!-- Auto-generated from vocabularies/penis.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs -->

> **Atlas category:** `penis` · **Version:** 1.0.0 · **License:** CC-BY-4.0
> **UBERON:** `UBERON:0000989` · **FMA:** `FMA:9707`

External penile anatomy: shaft, glans, foreskin, vasculature, curvature, and scrotal morphology. Dimensions are drawn from urology, sexual medicine, and aesthetic-anatomy literature (Wessells, Veale, Hodgson, Yachia, Kelâmi). The schema is published in the canonical vocabulary for academic transparency and ontology interoperability; **observations against these dimensions are not populated from public-domain photographs**, are not exported to the HuggingFace dataset, and any data collection requires explicit consent and source documentation. See the `observations_source_policy: "internal_only"` file-level flag and the README's two-layer extension model.

## Dimensions overview

| Dimension | Type | Scale | Photo-observable | Values |
|---|---|---|---|---|
| `flaccid_length_cm` | numeric | wessells_1996_pubic_to_glans_tip | not_assessable | 0 |
| `erect_length_cm` | numeric | veale_2015_pubic_to_glans_tip | not_assessable | 0 |
| `flaccid_girth_cm` | numeric | veale_2015_mid_shaft_circumference | not_assessable | 0 |
| `erect_girth_cm` | numeric | veale_2015_mid_shaft_circumference | not_assessable | 0 |
| `glans_morphology` | categorical | glans_shape_qualitative | not_assessable | 5 |
| `circumcision_status` | categorical | circumcision_status_qualitative | not_assessable | 4 |
| `foreskin_morphology` | categorical | foreskin_length_qualitative | not_assessable | 5 |
| `curvature_severity` | ordinal | yachia_kelami_curvature | not_assessable | 4 |
| `curvature_direction` | categorical | curvature_direction_qualitative | not_assessable | 6 |
| `scrotal_position` | ordinal | scrotal_position_qualitative | not_assessable | 3 |
| `suprapubic_fat_pad` | ordinal | suprapubic_fat_qualitative | not_assessable | 4 |
| `vascularity_visibility` | ordinal | surface_vascularity_qualitative | not_assessable | 4 |

## `flaccid_length_cm` — Flaccid length (cm)

**Type:** numeric · **Scale:** wessells_1996_pubic_to_glans_tip

**Citation:** Wessells H, Lue TF, McAninch JW (1996). Penile length in the flaccid and erect states: guidelines for penile augmentation. Journal of Urology, 156(3): 995-997.

Stretched flaccid length measured from the pubic bone to the tip of the glans, with the suprapubic fat pad fully compressed. Wessells's protocol is the standard urologic measurement.

**Observability:** `from_photograph: not_assessable` · `requires_unclothed: true` · `minimum_visible_extent: full_body`

> Reliable measurement requires direct measurement with a calibrated ruler; photographs do not provide a stable scale reference. Included for structured-text ingestion from clinical or self-reported records.

## `erect_length_cm` — Erect length (cm)

**Type:** numeric · **Scale:** veale_2015_pubic_to_glans_tip

**Citation:** Veale D, Miles S, Bramley S, Muir G, Hodsoll J (2015). Am I normal? A systematic review and construction of nomograms for flaccid and erect penis length and circumference in up to 15,521 men. BJU International, 115(6): 978-986.

Erect length measured from the pubic bone to the tip of the glans. The Veale 2015 systematic review provides population-level nomograms with mean ~13.12 cm and SD ~1.66 cm across the analyzed cohort.

**Observability:** `from_photograph: not_assessable` · `requires_unclothed: true` · `minimum_visible_extent: full_body`

## `flaccid_girth_cm` — Flaccid girth (cm)

**Type:** numeric · **Scale:** veale_2015_mid_shaft_circumference

**Citation:** Veale D et al. (2015). BJU International, 115(6): 978-986. Mid-shaft circumference protocol.

Mid-shaft circumference measured in flaccid state.

**Observability:** `from_photograph: not_assessable` · `requires_unclothed: true` · `minimum_visible_extent: full_body`

## `erect_girth_cm` — Erect girth (cm)

**Type:** numeric · **Scale:** veale_2015_mid_shaft_circumference

**Citation:** Veale D et al. (2015). BJU International, 115(6): 978-986.

Mid-shaft circumference measured in erect state. Veale 2015 nomogram mean ~11.66 cm, SD ~1.10 cm.

**Observability:** `from_photograph: not_assessable` · `requires_unclothed: true` · `minimum_visible_extent: full_body`

## `glans_morphology` — Glans morphology

**Type:** categorical · **Scale:** glans_shape_qualitative

**Citation:** Aesthetic-urology and reconstructive-urology descriptors; aligned with terminology used in the Bondil et al. literature on penile aesthetics.

Shape of the glans penis as a soft-tissue silhouette.

**Observability:** `from_photograph: not_assessable` · `requires_unclothed: true` · `minimum_visible_extent: full_body`

### Valid values

- **`acorn`** — Acorn: Tapered conical glans with a clear coronal ridge; the most common morphology.
- **`mushroom`** — Mushroom: Glans wider than the shaft below it, with a pronounced coronal ridge that overhangs the shaft circumference.
- **`conical`** — Conical / pointed: Smoothly tapered glans with minimal coronal ridge prominence.
- **`blunt_rounded`** — Blunt / rounded: Rounded glans without strong taper; coronal ridge subtle.
- **`asymmetric`** — Asymmetric: Notable left-right glans asymmetry as the dominant feature.

## `circumcision_status` — Circumcision status

**Type:** categorical · **Scale:** circumcision_status_qualitative

**Citation:** Standard urologic terminology.

Status of foreskin presence and surgical history.

**Observability:** `from_photograph: not_assessable` · `requires_unclothed: true` · `minimum_visible_extent: full_body`

### Valid values

- **`intact`** — Intact (uncircumcised): Full foreskin present and functional.
- **`circumcised_low`** — Circumcised — low-and-loose: Circumcision performed leaving more residual penile shaft skin.
- **`circumcised_high_tight`** — Circumcised — high-and-tight: Circumcision performed with most or all foreskin removed; tight residual skin.
- **`partial`** — Partial / subincision / non-standard: Foreskin partially altered through circumcision style or other procedure.

## `foreskin_morphology` — Foreskin morphology (when intact)

**Type:** categorical · **Scale:** foreskin_length_qualitative

**Citation:** Aligned with foreskin-anatomy descriptors used in pediatric-urology and circumcision literature; Hodgson NB and subsequent classifications.

Morphology of the foreskin in intact subjects. N/A when circumcised.

**Observability:** `from_photograph: not_assessable` · `requires_unclothed: true` · `minimum_visible_extent: full_body`

### Valid values

- **`long`** — Long (excess overhang): Foreskin extends substantially beyond the glans tip when flaccid; redundant prepuce.
- **`average`** — Average: Foreskin covers the glans when flaccid with modest overhang; retracts cleanly.
- **`short`** — Short: Foreskin partially covers the glans when flaccid; glans visible at rest.
- **`phimotic_tight`** — Tight (phimotic): Foreskin cannot easily retract over the glans; clinical phimosis spectrum.
- **`n_a_circumcised`** — Not applicable (circumcised): No foreskin present.

## `curvature_severity` — Curvature severity

**Type:** ordinal · **Scale:** yachia_kelami_curvature

**Citation:** Yachia D (1990). Treatment of curvature of the penis: a new operative technique. Journal of Urology, 143(1). Kelâmi A (1983). Classification of congenital and acquired penile deviation. Urologia Internationalis, 38(4).

Severity of penile curvature, measured along the angular deviation from straight axis. Used for both congenital curvature and Peyronie's disease assessment.

**Observability:** `from_photograph: not_assessable` · `requires_unclothed: true` · `minimum_visible_extent: full_body`

### Valid values

- **`none_straight`** — None / straight: Less than approximately 10° deviation; visually straight axis.
- **`mild`** — Mild: Approximately 10-30° deviation; functional, no surgical indication typically.
- **`moderate`** — Moderate: Approximately 30-60° deviation; may affect intercourse comfort; commonly the surgical-consideration threshold.
- **`severe`** — Severe: Greater than approximately 60° deviation; substantial functional impact.

## `curvature_direction` — Curvature direction

**Type:** categorical · **Scale:** curvature_direction_qualitative

**Citation:** Standard urologic terminology aligned with Kelâmi (1983) and Yachia (1990) directional classifications.

Direction of curvature deviation when present.

**Observability:** `from_photograph: not_assessable` · `requires_unclothed: true` · `minimum_visible_extent: full_body`

### Valid values

- **`none_straight`** — None / straight
- **`ventral_downward`** — Ventral (downward): Curves toward the underside; most common direction in congenital curvature.
- **`dorsal_upward`** — Dorsal (upward): Curves toward the upper side.
- **`lateral_left`** — Lateral left: Curves to the subject's left.
- **`lateral_right`** — Lateral right: Curves to the subject's right.
- **`multiplane_complex`** — Multiplane / complex: Curvature has components in more than one plane (e.g. ventral + lateral); Peyronie's disease commonly produces complex deviations.

## `scrotal_position` — Scrotal hang / position

**Type:** ordinal · **Scale:** scrotal_position_qualitative

**Citation:** Aligned with descriptors used in the urology / scrotoplasty literature; no single canonical scale.

Position of the scrotum relative to the inguinal region — affected by cremasteric tone, ambient temperature, and constitutional anatomy.

**Observability:** `from_photograph: not_assessable` · `requires_unclothed: true` · `minimum_visible_extent: full_body`

### Valid values

- **`high_tight`** — High / tight: Scrotum sits high and tight against the perineum; cremasteric contraction or constitutional pattern.
- **`normal`** — Normal: Average scrotal hang.
- **`low_pendulous`** — Low / pendulous: Scrotum hangs significantly below the base of the penis; relaxed cremasteric state or constitutional pattern.

## `suprapubic_fat_pad` — Suprapubic fat pad

**Type:** ordinal · **Scale:** suprapubic_fat_qualitative

**Citation:** Aligned with the descriptors used in penile-augmentation and bariatric-urology literature on apparent vs measured length differential.

Subcutaneous fat over the pubic bone. Significantly affects apparent (visible) penile length without changing measured (Wessells-protocol) length. Captured here because the differential between apparent and measured length is itself a constitutional dimension.

**Observability:** `from_photograph: not_assessable` · `requires_unclothed: true` · `minimum_visible_extent: full_body`

### Valid values

- **`absent`** — Absent / minimal: Pubic bone palpable just under skin; minimal subcutaneous fat.
- **`mild`** — Mild: Modest fat pad; minor reduction of apparent length vs measured.
- **`moderate`** — Moderate: Visible fat pad; noticeable apparent-vs-measured length differential.
- **`marked`** — Marked: Pronounced suprapubic fat pad; substantial apparent length reduction. Common with elevated BMI.

## `vascularity_visibility` — Vascularity visibility

**Type:** ordinal · **Scale:** surface_vascularity_qualitative

**Citation:** Surface anatomy descriptor aligned with andrology / sexual-medicine clinical examination terminology.

Visibility of surface veins on the penile shaft. Constitutional variation correlated with overall body fat percentage, vascular morphology, and erection state.

**Observability:** `from_photograph: not_assessable` · `requires_unclothed: true` · `minimum_visible_extent: full_body`

### Valid values

- **`none_visible`** — None visible: Surface veins not visible at rest or under engorgement.
- **`minimal`** — Minimal: Subtle vein outline under engorgement only.
- **`moderate`** — Moderate: Visible vein pattern under engorgement.
- **`prominent`** — Prominent: Pronounced vein pattern visible at rest and under engorgement; common with low body-fat percentage.

## References

- Wessells H, Lue TF, McAninch JW (1996). Penile length in the flaccid and erect states: guidelines for penile augmentation. Journal of Urology, 156(3): 995-997.
- Veale D, Miles S, Bramley S, Muir G, Hodsoll J (2015). Am I normal? A systematic review and construction of nomograms for flaccid and erect penis length and circumference in up to 15,521 men. BJU International, 115(6): 978-986.
- Yachia D (1990). Treatment of curvature of the penis: a new operative technique. Journal of Urology, 143(1).
- Kelâmi A (1983). Classification of congenital and acquired penile deviation. Urologia Internationalis, 38(4).
- Hodgson NB (1981). Use of vascularized flaps in hypospadias repair. Urologic Clinics of North America, 8(3).
- Bondil P, Costa P, Daures JP, Louis JF, Navratil H (1992). Clinical study of the longitudinal deformation of the flaccid penis and of its variations with aging. European Urology, 21(4).

