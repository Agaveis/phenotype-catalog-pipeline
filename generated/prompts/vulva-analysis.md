# Vulva observation prompt

<!-- Auto-generated from vocabularies/vulva.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs -->

Atlas category: `vulva` · Version: 1.0.0
UBERON: `UBERON:0000997`

## Instruction

Assess the following vulva-related phenotype dimensions from the photograph. Return one value per dimension, drawn only from the listed valid buckets. If a dimension cannot be assessed (anatomy not visible, image quality too poor, framing too narrow), return `null` for that dimension. Do not guess — `null` is preferred over an unreliable bucket assignment.

For each dimension, also return a per-dimension confidence score (0.0–1.0) reflecting how reliably you could assess that specific dimension in this photograph.

Return a single JSON object, no prose, with shape:

```json
{}
```

## Dimensions

### `labia_majora_size` *(not assessable from photographs — skipped in prompt)*

> Relative size of the labia majora envelope from the mons pubis to the perineum.

Scale: Lloyd J, Crouch NS, Minto CL, Liao LM, Creighton SM (2005). Female genital appearance: 'normality' unfolds. BJOG, 112(5): 643-646.

### `labia_majora_pigmentation` *(not assessable from photographs — skipped in prompt)*

> Pigmentation of the labia majora relative to surrounding pubic / inner-thigh skin.

Scale: Pigmentation differential common in dermatology and aesthetic-gynecology literature; aligned with the descriptors used in Hauben & Mahler 1983-style relative-pigmentation analysis.

### `labia_minora_protrusion` *(not assessable from photographs — skipped in prompt)*

> Position of the labia minora edge relative to the labia majora edge. The Motakef simplified classification is the contemporary standard.

Scale: Motakef S, Rodriguez-Feliz J, Chung MT, Ingargiola MJ, Wong VW, Patel A (2015). Vaginal labiaplasty: current practices and a simplified classification system for labial protrusion. Plastic and Reconstructive Surgery, 135(3): 774-788.

### `labia_minora_morphology` *(not assessable from photographs — skipped in prompt)*

> Edge morphology and contour of the labia minora.

Scale: Aesthetic-gynecology shape descriptors aligned with Felicio (1992) and subsequent classification literature.

### `labial_symmetry` *(not assessable from photographs — skipped in prompt)*

> Degree of left-right labial symmetry. Substantial constitutional asymmetry is common; this dimension captures the visible degree.

Scale: Aligned with surgical-gynecology symmetry descriptors.

### `clitoral_hood_morphology` *(not assessable from photographs — skipped in prompt)*

> Coverage of the clitoral glans by the prepuce (clitoral hood).

Scale: Aesthetic-gynecology descriptors; aligned with the Hodgkinson tradition and subsequent labiaplasty / hoodoplasty literature.

### `mons_pubis_prominence` *(not assessable from photographs — skipped in prompt)*

> Anterior projection of the mons pubis from the pubic bone, primarily a function of subcutaneous fat.

Scale: Aligned with body-contouring and abdominoplasty literature on suprapubic / mons-pubis fullness.

### `perineal_distance` *(not assessable from photographs — skipped in prompt)*

> Distance from posterior fourchette to anterior anal margin (perineal body length).

Scale: Aligned with obstetric and pelvic-floor literature on perineal-body length (PBL).

### `introitus_visibility_at_rest` *(not assessable from photographs — skipped in prompt)*

> Visibility of the vaginal introitus at rest, a function of labial size and protrusion together.

Scale: Aligned with pelvic-anatomy descriptors used in obstetric / aesthetic-gynecology literature on labial morphology.

