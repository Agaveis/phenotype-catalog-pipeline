# Penis observation prompt

<!-- Auto-generated from vocabularies/penis.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs -->

Atlas category: `penis` · Version: 1.0.0
UBERON: `UBERON:0000989`

## Instruction

Assess the following penis-related phenotype dimensions from the photograph. Return one value per dimension, drawn only from the listed valid buckets. If a dimension cannot be assessed (anatomy not visible, image quality too poor, framing too narrow), return `null` for that dimension. Do not guess — `null` is preferred over an unreliable bucket assignment.

For each dimension, also return a per-dimension confidence score (0.0–1.0) reflecting how reliably you could assess that specific dimension in this photograph.

Return a single JSON object, no prose, with shape:

```json
{}
```

## Dimensions

### `flaccid_length_cm` *(not assessable from photographs — skipped in prompt)*

> Stretched flaccid length measured from the pubic bone to the tip of the glans, with the suprapubic fat pad fully compressed. Wessells's protocol is the standard urologic measurement.

Scale: Wessells H, Lue TF, McAninch JW (1996). Penile length in the flaccid and erect states: guidelines for penile augmentation. Journal of Urology, 156(3): 995-997.

### `erect_length_cm` *(not assessable from photographs — skipped in prompt)*

> Erect length measured from the pubic bone to the tip of the glans. The Veale 2015 systematic review provides population-level nomograms with mean ~13.12 cm and SD ~1.66 cm across the analyzed cohort.

Scale: Veale D, Miles S, Bramley S, Muir G, Hodsoll J (2015). Am I normal? A systematic review and construction of nomograms for flaccid and erect penis length and circumference in up to 15,521 men. BJU International, 115(6): 978-986.

### `flaccid_girth_cm` *(not assessable from photographs — skipped in prompt)*

> Mid-shaft circumference measured in flaccid state.

Scale: Veale D et al. (2015). BJU International, 115(6): 978-986. Mid-shaft circumference protocol.

### `erect_girth_cm` *(not assessable from photographs — skipped in prompt)*

> Mid-shaft circumference measured in erect state. Veale 2015 nomogram mean ~11.66 cm, SD ~1.10 cm.

Scale: Veale D et al. (2015). BJU International, 115(6): 978-986.

### `glans_morphology` *(not assessable from photographs — skipped in prompt)*

> Shape of the glans penis as a soft-tissue silhouette.

Scale: Aesthetic-urology and reconstructive-urology descriptors; aligned with terminology used in the Bondil et al. literature on penile aesthetics.

### `circumcision_status` *(not assessable from photographs — skipped in prompt)*

> Status of foreskin presence and surgical history.

Scale: Standard urologic terminology.

### `foreskin_morphology` *(not assessable from photographs — skipped in prompt)*

> Morphology of the foreskin in intact subjects. N/A when circumcised.

Scale: Aligned with foreskin-anatomy descriptors used in pediatric-urology and circumcision literature; Hodgson NB and subsequent classifications.

### `curvature_severity` *(not assessable from photographs — skipped in prompt)*

> Severity of penile curvature, measured along the angular deviation from straight axis. Used for both congenital curvature and Peyronie's disease assessment.

Scale: Yachia D (1990). Treatment of curvature of the penis: a new operative technique. Journal of Urology, 143(1). Kelâmi A (1983). Classification of congenital and acquired penile deviation. Urologia Internationalis, 38(4).

### `curvature_direction` *(not assessable from photographs — skipped in prompt)*

> Direction of curvature deviation when present.

Scale: Standard urologic terminology aligned with Kelâmi (1983) and Yachia (1990) directional classifications.

### `scrotal_position` *(not assessable from photographs — skipped in prompt)*

> Position of the scrotum relative to the inguinal region — affected by cremasteric tone, ambient temperature, and constitutional anatomy.

Scale: Aligned with descriptors used in the urology / scrotoplasty literature; no single canonical scale.

### `suprapubic_fat_pad` *(not assessable from photographs — skipped in prompt)*

> Subcutaneous fat over the pubic bone. Significantly affects apparent (visible) penile length without changing measured (Wessells-protocol) length. Captured here because the differential between apparent and measured length is itself a constitutional dimension.

Scale: Aligned with the descriptors used in penile-augmentation and bariatric-urology literature on apparent vs measured length differential.

### `vascularity_visibility` *(not assessable from photographs — skipped in prompt)*

> Visibility of surface veins on the penile shaft. Constitutional variation correlated with overall body fat percentage, vascular morphology, and erection state.

Scale: Surface anatomy descriptor aligned with andrology / sexual-medicine clinical examination terminology.

