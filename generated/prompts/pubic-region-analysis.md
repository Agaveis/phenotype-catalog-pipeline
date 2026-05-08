# Pubic region observation prompt

<!-- Auto-generated from vocabularies/pubic-region.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs -->

Atlas category: `pubic-region` · Version: 1.0.0
UBERON: `UBERON:0008337`

## Instruction

Assess the following pubic region-related phenotype dimensions from the photograph. Return one value per dimension, drawn only from the listed valid buckets. If a dimension cannot be assessed (anatomy not visible, image quality too poor, framing too narrow), return `null` for that dimension. Do not guess — `null` is preferred over an unreliable bucket assignment.

For each dimension, also return a per-dimension confidence score (0.0–1.0) reflecting how reliably you could assess that specific dimension in this photograph.

Return a single JSON object, no prose, with shape:

```json
{}
```

## Dimensions

### `pubic_hair_distribution_pattern` *(not assessable from photographs — skipped in prompt)*

> Shape of the adult pubic hair distribution above and around the genitals. Sex-correlated (typically inverted-triangle in females, diamond extending up the midline in males) but with substantial individual variation including ethnic-correlated patterns.

Scale: Aligned with descriptors used in dermatologic and endocrinologic literature on pubic-hair escutcheon morphology; Tanner staging (P1-P5) covers developmental progression but not adult escutcheon shape, which this dimension captures.

### `pubic_hair_density` *(not assessable from photographs — skipped in prompt)*

> Density of native pubic hair when ungroomed.

Scale: Aligned with descriptors used in dermatologic and endocrinologic literature; no single canonical scale beyond Tanner staging which addresses developmental progression rather than adult density variation.

### `pubic_hair_color` *(not assessable from photographs — skipped in prompt)*

> Predominant color of native pubic hair.

Scale: Aligned with descriptors used in trichology literature; pubic hair color does not always match scalp hair color (commonly slightly darker; can be substantially different).

### `pubic_hair_texture` *(not assessable from photographs — skipped in prompt)*

> Texture of native pubic hair shafts. Pubic hair is typically curlier than scalp hair due to anatomical follicle orientation, but degree of curl varies by individual and population.

Scale: Andre Walker hair-texture classification (1A-4C) was originally developed for scalp hair; pubic-hair texture descriptors aligned to that vocabulary by trichology and dermatology references.

### `pubic_grooming_style_visible` *(not assessable from photographs — skipped in prompt)*

> Visible grooming state — not a native phenotype dimension, but observability metadata that affects interpretation of every other dimension in this file. Captured here so that downstream analysis can flag native-phenotype dimensions as unreliable when grooming is detected.

Scale: Aligned with the descriptors used in survey-based pubic-grooming research (Herbenick D et al. 2017, Journal of Sexual Medicine).

