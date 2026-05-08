# Skin observation prompt

<!-- Auto-generated from vocabularies/skin.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs -->

Atlas category: `skin` · Version: 1.0.0
UBERON: `UBERON:0002097`

## Instruction

Assess the following skin-related phenotype dimensions from the photograph. Return one value per dimension, drawn only from the listed valid buckets. If a dimension cannot be assessed (anatomy not visible, image quality too poor, framing too narrow), return `null` for that dimension. Do not guess — `null` is preferred over an unreliable bucket assignment.

For each dimension, also return a per-dimension confidence score (0.0–1.0) reflecting how reliably you could assess that specific dimension in this photograph.

Return a single JSON object, no prose, with shape:

```json
{
  "fitzpatrick_skin_type": "<one of the valid buckets, or null>",
  "fitzpatrick_skin_type_confidence": "<0.0-1.0, or null>",
  "undertone": "<one of the valid buckets, or null>",
  "undertone_confidence": "<0.0-1.0, or null>",
  "surface_texture": "<one of the valid buckets, or null>",
  "surface_texture_confidence": "<0.0-1.0, or null>",
  "pigmentation_pattern": "<one of the valid buckets, or null>",
  "pigmentation_pattern_confidence": "<0.0-1.0, or null>",
  "freckling_density": "<one of the valid buckets, or null>",
  "freckling_density_confidence": "<0.0-1.0, or null>",
  "acral_pigmentation_difference": "<one of the valid buckets, or null>",
  "acral_pigmentation_difference_confidence": "<0.0-1.0, or null>",
  "visible_photoaging": "<one of the valid buckets, or null>",
  "visible_photoaging_confidence": "<0.0-1.0, or null>",
  "erythema_baseline": "<one of the valid buckets, or null>",
  "erythema_baseline_confidence": "<0.0-1.0, or null>"
}
```

## Dimensions

### `fitzpatrick_skin_type`

**Type:** ordinal · **Scale:** fitzpatrick_1988 · **Min visible extent:** head_only

> Original Fitzpatrick assessment is questionnaire-based (sunburn / tanning history); visual assessment from photograph is a proxy. Reliability decreases under poor lighting, heavy makeup, B&W photographs, and non-skin obscurations. Use 'unclear' rather than guessing.

Valid values:

- `I` — *Type I — very fair*: Always burns, never tans. Pale white skin, often with red or blonde hair, blue/green eyes, freckles. Common in Northern European populations of Celtic / Scandinavian descent.
- `II` — *Type II — fair*: Burns easily, tans minimally. Fair skin, light hair, light eyes. Common in Northern European populations.
- `III` — *Type III — medium*: Sometimes burns, gradually tans. Light olive to medium skin tone. Common in Mediterranean European, Middle Eastern, and East Asian populations.
- `IV` — *Type IV — olive / light brown*: Burns minimally, tans easily and well. Olive to light brown skin. Common in Mediterranean, Middle Eastern, Latin American, Southeast Asian populations.
- `V` — *Type V — brown*: Rarely burns, tans deeply. Brown skin tone. Common in South Asian, North African, Middle Eastern, some Latin American populations.
- `VI` — *Type VI — deeply pigmented brown to black*: Never burns, deeply pigmented at baseline. Common in Sub-Saharan African, African-diaspora, some South Asian, some Pacific Islander populations.
- `II-III` — *Range II-III*: Bridging type used when assessment indicates the subject sits between Types II and III. Acceptable per the original Fitzpatrick description.
- `III-IV` — *Range III-IV*: Bridging type used when assessment indicates the subject sits between Types III and IV.
- `IV-V` — *Range IV-V*: Bridging type used when assessment indicates the subject sits between Types IV and V.
- `V-VI` — *Range V-VI*: Bridging type used when assessment indicates the subject sits between Types V and VI.
- `unclear` — *Unclear*: Lighting, image quality, makeup, or other obscuration prevents reliable Fitzpatrick assessment.

Reference: Fitzpatrick TB (1988). The validity and practicality of sun-reactive skin types I through VI. Archives of Dermatology, 124(6): 869-871.

### `undertone`

**Type:** categorical · **Scale:** undertone_qualitative · **Min visible extent:** head_only

> Highly sensitive to color balance and lighting in the source photograph. White-balanced studio lighting yields reliable assessment; flash photography, fluorescent / mixed lighting, or filtered-image color casts substantially affect this dimension.

Valid values:

- `warm` — *Warm (yellow / golden)*: Yellow, peach, or golden cast. Veins on inner wrist appear greenish.
- `cool` — *Cool (pink / red / blue)*: Pink, rosy, or bluish cast. Veins on inner wrist appear blue or purple.
- `neutral` — *Neutral*: Balanced; neither warm nor cool dominant.
- `olive` — *Olive*: Greenish-yellow cast; common in Mediterranean, Middle Eastern, and some South / Southeast Asian populations. Often grouped with warm in cosmetic shorthand but anatomically distinct.
- `unclear` — *Unclear*: Lighting or color balance prevents reliable assessment.

Reference: Cosmetic-industry standard color theory; aligned with anatomic descriptors used in Hauben & Mahler (1983) and dermatological literature on hemoglobin vs melanin contributions to skin color.

### `surface_texture`

**Type:** ordinal · **Scale:** surface_texture_qualitative · **Min visible extent:** head_only

> Highly dependent on image resolution and post-processing. Flag confidence low when image is heavily filtered or low-resolution.

Valid values:

- `very_smooth` — *Very smooth*: No visible pore structure; flawless surface. Most often a function of image quality / soft-focus / makeup rather than ground-truth skin state.
- `smooth` — *Smooth*: Fine, even surface; visible pores small and uniform.
- `normal` — *Normal*: Average surface texture; pores visible but not prominent.
- `textured` — *Textured*: Visible pore prominence, scarring, or surface irregularity.
- `coarse` — *Coarse*: Pronounced surface roughness, visible pore enlargement, or significant surface irregularity.

Reference: Aligned with dermatologic surface-texture descriptors and the Visual Roughness scales used in cosmeceutical research (e.g. Robinson 1997).

### `pigmentation_pattern`

**Type:** categorical · **Scale:** pigmentation_pattern_qualitative · **Min visible extent:** head_only

Valid values:

- `uniform` — *Uniform*: Even pigmentation across visible skin; no obvious lighter or darker patches.
- `freckled_ephelides` — *Freckled (ephelides)*: Visible ephelides — small, well-circumscribed, sun-induced macules. Concentrated on sun-exposed areas; common in Fitzpatrick I-III.
- `lentigines` — *Lentigines*: Larger, persistent macules independent of sun exposure. Common with photoaging; can also be constitutional.
- `mottled` — *Mottled*: Irregular patches of varying pigmentation without a single named pattern.
- `melasma_centrofacial` — *Melasma — centrofacial*: Hyperpigmented patches across the central face (forehead, cheeks, upper lip, chin); common in Fitzpatrick III-V.
- `post_inflammatory_hyperpigmentation` — *Post-inflammatory hyperpigmentation (PIH)*: Darker patches following inflammation; common in Fitzpatrick IV-VI.
- `vitiliginous` — *Vitiligo / depigmented patches*: Visible loss of pigmentation in well-circumscribed patches.
- `unclear` — *Unclear*: Image conditions prevent reliable assessment.

Reference: Categorical descriptors aligned with dermatology-textbook treatment of constitutional and acquired pigmentation patterns (Bolognia, Jorizzo, Schaffer — Dermatology, 4th Edition, 2018).

### `freckling_density`

**Type:** ordinal · **Scale:** freckle_density_qualitative · **Min visible extent:** head_only

Valid values:

- `none` — *None*: No discernible freckles.
- `few` — *Few*: Sparse freckles, scattered, easy to count individually.
- `moderate` — *Moderate*: Clearly freckled but countable in clusters.
- `heavy` — *Heavy*: Dense freckling; individual freckles begin to merge into larger pigmented areas.

Reference: Aligned with the visual-grading approach used in MC1R polymorphism / freckle phenotype research (Bastiaens et al. 2001). No single canonical scale; descriptive bucket vocabulary.

### `acral_pigmentation_difference`

**Type:** categorical · **Scale:** acral_pigmentation_qualitative · **Min visible extent:** torso

> Requires hands or feet to be visible; head/shoulders portraits cannot assess this dimension. Treat as photo-assessable only when palms or soles appear in frame.

Valid values:

- `minimal` — *Minimal differential*: Palmar/plantar skin tone similar to overall body tone; typical in lower Fitzpatrick types where the differential is small in absolute terms.
- `moderate` — *Moderate differential*: Palms and soles visibly lighter than body skin; differential ~1-2 Fitzpatrick steps.
- `marked` — *Marked differential*: Palms and soles substantially lighter than body skin; differential 2+ Fitzpatrick steps. Typical in Fitzpatrick V-VI populations.
- `not_assessable` — *Not assessable*: Hands and feet not visible in photograph.

Reference: Constitutional palmar / plantar pigmentation differential well-documented in dermatology textbooks; relevant ethnic-anthropology dimension. Bolognia, Jorizzo, Schaffer — Dermatology, 4th Edition, 2018.

### `visible_photoaging`

**Type:** ordinal · **Scale:** glogau_1996 · **Min visible extent:** head_only

> Best assessed under neutral lighting without heavy filtering or post-processing. Heavy makeup or beauty-filtering can mask grades II-III; high-resolution unfiltered photography is required for confident assessment.

Valid values:

- `none_glogau_0` — *None (subclinical)*: No visible photoaging; smooth, even-toned skin. Typical of younger subjects with limited UV exposure.
- `glogau_I` — *Glogau I — early photoaging*: Mild dyschromia; minimal wrinkles. No visible keratoses. Typical age range 20s-30s.
- `glogau_II` — *Glogau II — early-moderate photoaging*: Wrinkles in motion only ('expression lines'). Some lentigines visible. Typical age range 30s-40s.
- `glogau_III` — *Glogau III — advanced photoaging*: Wrinkles at rest. Visible dyschromia and telangiectasias. Typical age range 50s-60s.
- `glogau_IV` — *Glogau IV — severe photoaging*: Wrinkles throughout; sallow color; possible actinic keratoses. Typical age range 60s-70s+.

Reference: Glogau RG (1996). Aesthetic and anatomic analysis of the aging skin. Seminars in Cutaneous Medicine and Surgery, 15(3): 134-138.

### `erythema_baseline`

**Type:** ordinal · **Scale:** erythema_qualitative · **Min visible extent:** head_only

> Highly sensitive to color balance, lighting, and post-processing. Confidence should reflect the lighting quality of the source image.

Valid values:

- `absent` — *Absent*: No visible erythema; even baseline tone.
- `mild` — *Mild*: Subtle pink/red flush, particularly on cheeks; constitutional ruddiness.
- `moderate` — *Moderate*: Clear visible erythema across cheeks, central face; possible early rosacea.
- `marked` — *Marked*: Pronounced redness with visible telangiectasias; rosacea-spectrum erythema.

Reference: Aligned with the Clinician's Erythema Assessment (CEA) scale used in rosacea grading (Tan J et al. 2014, Journal of the American Academy of Dermatology, 71). Adapted to non-rosacea baseline assessment by treating CEA grades 0-1 as constitutional.

