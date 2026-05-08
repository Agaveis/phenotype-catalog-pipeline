# Skin — phenotype taxonomy

<!-- Auto-generated from vocabularies/skin.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs -->

> **Atlas category:** `skin` · **Version:** 1.0.0 · **License:** CC-BY-4.0
> **UBERON:** `UBERON:0002097` · **FMA:** `FMA:7163`

Skin pigmentation, surface morphology, and visible quality — formalizing the Fitzpatrick treatment that previously lived only as a column in the 14-field per-image analysis schema. Captures the dimensions that drive skin-related ethnic variation: Fitzpatrick skin type, undertone, pigmentation pattern, acral pigmentation differential, and visible aging. The Fitzpatrick scale (1988) is the canonical medical reference for skin classification across populations and remains the load-bearing dimension here.

## Dimensions overview

| Dimension | Type | Scale | Photo-observable | Values |
|---|---|---|---|---|
| `fitzpatrick_skin_type` | ordinal | fitzpatrick_1988 | high | 11 |
| `undertone` | categorical | undertone_qualitative | medium | 5 |
| `surface_texture` | ordinal | surface_texture_qualitative | medium | 5 |
| `pigmentation_pattern` | categorical | pigmentation_pattern_qualitative | high | 8 |
| `freckling_density` | ordinal | freckle_density_qualitative | high | 4 |
| `acral_pigmentation_difference` | categorical | acral_pigmentation_qualitative | low | 4 |
| `visible_photoaging` | ordinal | glogau_1996 | medium | 5 |
| `erythema_baseline` | ordinal | erythema_qualitative | medium | 4 |

## `fitzpatrick_skin_type` — Fitzpatrick skin type

**Type:** ordinal · **Scale:** fitzpatrick_1988

**Citation:** Fitzpatrick TB (1988). The validity and practicality of sun-reactive skin types I through VI. Archives of Dermatology, 124(6): 869-871.

Six-class ordinal classification of constitutive skin pigmentation, originally developed for sun-reactivity assessment but now the de-facto skin-tone vocabulary in dermatology and computer-vision fairness research.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

> Original Fitzpatrick assessment is questionnaire-based (sunburn / tanning history); visual assessment from photograph is a proxy. Reliability decreases under poor lighting, heavy makeup, B&W photographs, and non-skin obscurations. Use 'unclear' rather than guessing.

### Valid values

- **`I`** — Type I — very fair: Always burns, never tans. Pale white skin, often with red or blonde hair, blue/green eyes, freckles. Common in Northern European populations of Celtic / Scandinavian descent.
- **`II`** — Type II — fair: Burns easily, tans minimally. Fair skin, light hair, light eyes. Common in Northern European populations.
- **`III`** — Type III — medium: Sometimes burns, gradually tans. Light olive to medium skin tone. Common in Mediterranean European, Middle Eastern, and East Asian populations.
- **`IV`** — Type IV — olive / light brown: Burns minimally, tans easily and well. Olive to light brown skin. Common in Mediterranean, Middle Eastern, Latin American, Southeast Asian populations.
- **`V`** — Type V — brown: Rarely burns, tans deeply. Brown skin tone. Common in South Asian, North African, Middle Eastern, some Latin American populations.
- **`VI`** — Type VI — deeply pigmented brown to black: Never burns, deeply pigmented at baseline. Common in Sub-Saharan African, African-diaspora, some South Asian, some Pacific Islander populations.
- **`II-III`** — Range II-III: Bridging type used when assessment indicates the subject sits between Types II and III. Acceptable per the original Fitzpatrick description.
- **`III-IV`** — Range III-IV: Bridging type used when assessment indicates the subject sits between Types III and IV.
- **`IV-V`** — Range IV-V: Bridging type used when assessment indicates the subject sits between Types IV and V.
- **`V-VI`** — Range V-VI: Bridging type used when assessment indicates the subject sits between Types V and VI.
- **`unclear`** — Unclear: Lighting, image quality, makeup, or other obscuration prevents reliable Fitzpatrick assessment.

## `undertone` — Skin undertone

**Type:** categorical · **Scale:** undertone_qualitative

**Citation:** Cosmetic-industry standard color theory; aligned with anatomic descriptors used in Hauben & Mahler (1983) and dermatological literature on hemoglobin vs melanin contributions to skin color.

Hue character of the skin independent of overall depth (Fitzpatrick). Reflects relative balance of hemoglobin (red), melanin (brown), and carotenoid (yellow) contributions to perceived color.

**Observability:** `from_photograph: medium` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

> Highly sensitive to color balance and lighting in the source photograph. White-balanced studio lighting yields reliable assessment; flash photography, fluorescent / mixed lighting, or filtered-image color casts substantially affect this dimension.

### Valid values

- **`warm`** — Warm (yellow / golden): Yellow, peach, or golden cast. Veins on inner wrist appear greenish.
- **`cool`** — Cool (pink / red / blue): Pink, rosy, or bluish cast. Veins on inner wrist appear blue or purple.
- **`neutral`** — Neutral: Balanced; neither warm nor cool dominant.
- **`olive`** — Olive: Greenish-yellow cast; common in Mediterranean, Middle Eastern, and some South / Southeast Asian populations. Often grouped with warm in cosmetic shorthand but anatomically distinct.
- **`unclear`** — Unclear: Lighting or color balance prevents reliable assessment.

## `surface_texture` — Surface texture

**Type:** ordinal · **Scale:** surface_texture_qualitative

**Citation:** Aligned with dermatologic surface-texture descriptors and the Visual Roughness scales used in cosmeceutical research (e.g. Robinson 1997).

Visible surface texture of the facial skin — smoothness or coarseness as observable from a high-resolution close-up.

**Observability:** `from_photograph: medium` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

> Highly dependent on image resolution and post-processing. Flag confidence low when image is heavily filtered or low-resolution.

### Valid values

- **`very_smooth`** — Very smooth: No visible pore structure; flawless surface. Most often a function of image quality / soft-focus / makeup rather than ground-truth skin state.
- **`smooth`** — Smooth: Fine, even surface; visible pores small and uniform.
- **`normal`** — Normal: Average surface texture; pores visible but not prominent.
- **`textured`** — Textured: Visible pore prominence, scarring, or surface irregularity.
- **`coarse`** — Coarse: Pronounced surface roughness, visible pore enlargement, or significant surface irregularity.

## `pigmentation_pattern` — Pigmentation pattern

**Type:** categorical · **Scale:** pigmentation_pattern_qualitative

**Citation:** Categorical descriptors aligned with dermatology-textbook treatment of constitutional and acquired pigmentation patterns (Bolognia, Jorizzo, Schaffer — Dermatology, 4th Edition, 2018).

Distribution pattern of skin pigmentation independent of overall Fitzpatrick depth.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

### Valid values

- **`uniform`** — Uniform: Even pigmentation across visible skin; no obvious lighter or darker patches.
- **`freckled_ephelides`** — Freckled (ephelides): Visible ephelides — small, well-circumscribed, sun-induced macules. Concentrated on sun-exposed areas; common in Fitzpatrick I-III.
- **`lentigines`** — Lentigines: Larger, persistent macules independent of sun exposure. Common with photoaging; can also be constitutional.
- **`mottled`** — Mottled: Irregular patches of varying pigmentation without a single named pattern.
- **`melasma_centrofacial`** — Melasma — centrofacial: Hyperpigmented patches across the central face (forehead, cheeks, upper lip, chin); common in Fitzpatrick III-V.
- **`post_inflammatory_hyperpigmentation`** — Post-inflammatory hyperpigmentation (PIH): Darker patches following inflammation; common in Fitzpatrick IV-VI.
- **`vitiliginous`** — Vitiligo / depigmented patches: Visible loss of pigmentation in well-circumscribed patches.
- **`unclear`** — Unclear: Image conditions prevent reliable assessment.

## `freckling_density` — Freckling density

**Type:** ordinal · **Scale:** freckle_density_qualitative

**Citation:** Aligned with the visual-grading approach used in MC1R polymorphism / freckle phenotype research (Bastiaens et al. 2001). No single canonical scale; descriptive bucket vocabulary.

Density of visible freckles (ephelides) on the face. A separate dimension from pigmentation_pattern because freckling density varies continuously and is meaningful even within the freckled category.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

### Valid values

- **`none`** — None: No discernible freckles.
- **`few`** — Few: Sparse freckles, scattered, easy to count individually.
- **`moderate`** — Moderate: Clearly freckled but countable in clusters.
- **`heavy`** — Heavy: Dense freckling; individual freckles begin to merge into larger pigmented areas.

## `acral_pigmentation_difference` — Acral pigmentation differential

**Type:** categorical · **Scale:** acral_pigmentation_qualitative

**Citation:** Constitutional palmar / plantar pigmentation differential well-documented in dermatology textbooks; relevant ethnic-anthropology dimension. Bolognia, Jorizzo, Schaffer — Dermatology, 4th Edition, 2018.

Difference between palmar/plantar (acral) skin pigmentation and overall body pigmentation. Strong constitutional dimension in higher-Fitzpatrick populations: palms and soles are typically substantially lighter than the rest of the body in Fitzpatrick V-VI individuals, and this differential is itself a phenotype dimension.

**Observability:** `from_photograph: low` · `requires_unclothed: false` · `minimum_visible_extent: torso`

> Requires hands or feet to be visible; head/shoulders portraits cannot assess this dimension. Treat as photo-assessable only when palms or soles appear in frame.

### Valid values

- **`minimal`** — Minimal differential: Palmar/plantar skin tone similar to overall body tone; typical in lower Fitzpatrick types where the differential is small in absolute terms.
- **`moderate`** — Moderate differential: Palms and soles visibly lighter than body skin; differential ~1-2 Fitzpatrick steps.
- **`marked`** — Marked differential: Palms and soles substantially lighter than body skin; differential 2+ Fitzpatrick steps. Typical in Fitzpatrick V-VI populations.
- **`not_assessable`** — Not assessable: Hands and feet not visible in photograph.

## `visible_photoaging` — Visible photoaging

**Type:** ordinal · **Scale:** glogau_1996

**Citation:** Glogau RG (1996). Aesthetic and anatomic analysis of the aging skin. Seminars in Cutaneous Medicine and Surgery, 15(3): 134-138.

Glogau classification of photoaging severity, ordinal I-IV. Captures the visible cumulative effect of UV exposure on skin morphology — fine lines, deeper rhytides, dyschromia, and skin laxity.

**Observability:** `from_photograph: medium` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

> Best assessed under neutral lighting without heavy filtering or post-processing. Heavy makeup or beauty-filtering can mask grades II-III; high-resolution unfiltered photography is required for confident assessment.

### Valid values

- **`none_glogau_0`** — None (subclinical): No visible photoaging; smooth, even-toned skin. Typical of younger subjects with limited UV exposure.
- **`glogau_I`** — Glogau I — early photoaging: Mild dyschromia; minimal wrinkles. No visible keratoses. Typical age range 20s-30s.
- **`glogau_II`** — Glogau II — early-moderate photoaging: Wrinkles in motion only ('expression lines'). Some lentigines visible. Typical age range 30s-40s.
- **`glogau_III`** — Glogau III — advanced photoaging: Wrinkles at rest. Visible dyschromia and telangiectasias. Typical age range 50s-60s.
- **`glogau_IV`** — Glogau IV — severe photoaging: Wrinkles throughout; sallow color; possible actinic keratoses. Typical age range 60s-70s+.

## `erythema_baseline` — Baseline erythema (visible redness)

**Type:** ordinal · **Scale:** erythema_qualitative

**Citation:** Aligned with the Clinician's Erythema Assessment (CEA) scale used in rosacea grading (Tan J et al. 2014, Journal of the American Academy of Dermatology, 71). Adapted to non-rosacea baseline assessment by treating CEA grades 0-1 as constitutional.

Visible facial redness independent of inflammatory state. Captures both constitutional ruddiness (common in Northern European populations) and rosacea-spectrum erythema as a continuum.

**Observability:** `from_photograph: medium` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

> Highly sensitive to color balance, lighting, and post-processing. Confidence should reflect the lighting quality of the source image.

### Valid values

- **`absent`** — Absent: No visible erythema; even baseline tone.
- **`mild`** — Mild: Subtle pink/red flush, particularly on cheeks; constitutional ruddiness.
- **`moderate`** — Moderate: Clear visible erythema across cheeks, central face; possible early rosacea.
- **`marked`** — Marked: Pronounced redness with visible telangiectasias; rosacea-spectrum erythema.

## References

- Fitzpatrick TB (1988). The validity and practicality of sun-reactive skin types I through VI. Archives of Dermatology, 124(6): 869-871.
- Hauben DJ, Mahler D (1983). A reappraisal of the importance of areolar pigmentation. Plastic and Reconstructive Surgery, 71(6).
- Glogau RG (1996). Aesthetic and anatomic analysis of the aging skin. Seminars in Cutaneous Medicine and Surgery, 15(3): 134-138.
- Bolognia JL, Jorizzo JL, Schaffer JV (eds.) (2018). Dermatology, 4th Edition. Elsevier.
- Bastiaens M, Hoefnagel J, Westendorp R, Vermeer BJ, Bouwes Bavinck JN (2001). Solar lentigines are strongly related to sun exposure in contrast to ephelides. Pigment Cell Research, 14(5): 316-320.
- Robinson MK (1997). Population differences in skin structure and physiology and the susceptibility to irritant and allergic contact dermatitis. Archives of Dermatological Research, 289(8).
- Tan J, Liu H, Leyden JJ, Leoni MJ (2014). Reliability of Clinician Erythema Assessment grading scale. Journal of the American Academy of Dermatology, 71(4).

