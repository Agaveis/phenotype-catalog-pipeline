# Pubic region — phenotype taxonomy

<!-- Auto-generated from vocabularies/pubic-region.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs -->

> **Atlas category:** `pubic-region` · **Version:** 1.0.0 · **License:** CC-BY-4.0
> **UBERON:** `UBERON:0008337`

Pubic-region phenotype: pubic hair distribution pattern, density, color, texture, and visible grooming state. Mons pubis prominence is captured in the corresponding vulva.json or penis.json suprapubic_fat_pad dimensions and is not duplicated here. The schema is published in the canonical vocabulary for academic transparency; observations from public-domain photographs are not populated and the file carries `observations_source_policy: "internal_only"`.

## Dimensions overview

| Dimension | Type | Scale | Photo-observable | Values |
|---|---|---|---|---|
| `pubic_hair_distribution_pattern` | categorical | escutcheon_shape_qualitative | not_assessable | 6 |
| `pubic_hair_density` | ordinal | pubic_hair_density_qualitative | not_assessable | 4 |
| `pubic_hair_color` | categorical | pubic_hair_color_qualitative | not_assessable | 5 |
| `pubic_hair_texture` | categorical | andre_walker_adapted | not_assessable | 4 |
| `pubic_grooming_style_visible` | categorical | grooming_style_qualitative | not_assessable | 5 |

## `pubic_hair_distribution_pattern` — Pubic hair distribution pattern (escutcheon)

**Type:** categorical · **Scale:** escutcheon_shape_qualitative

**Citation:** Aligned with descriptors used in dermatologic and endocrinologic literature on pubic-hair escutcheon morphology; Tanner staging (P1-P5) covers developmental progression but not adult escutcheon shape, which this dimension captures.

Shape of the adult pubic hair distribution above and around the genitals. Sex-correlated (typically inverted-triangle in females, diamond extending up the midline in males) but with substantial individual variation including ethnic-correlated patterns.

**Observability:** `from_photograph: not_assessable` · `requires_unclothed: true` · `minimum_visible_extent: full_body`

> Visibility heavily affected by grooming. The `pubic_grooming_style_visible` dimension should be assessed concurrently to interpret native distribution.

### Valid values

- **`absent_prepubertal`** — Absent / prepubertal (Tanner P1): No terminal pubic hair; only vellus hair.
- **`sparse_minimal`** — Sparse / minimal: Limited terminal-hair presence; well below typical Tanner P5 density.
- **`triangular_inferior`** — Triangular, inferior base (typical female): Inverted-triangle pattern with the base above the genitals; minimal extension up the abdominal midline. Tanner female P5.
- **`diamond_extending_midline`** — Diamond / midline extension (typical male): Diamond-shape pattern with terminal hair extending up the abdominal midline toward the umbilicus. Tanner male P5.
- **`extended_horizontal`** — Extended laterally: Distribution extending laterally onto inner thigh / hip; common variant in some populations.
- **`discrete_patch`** — Discrete patch: Small, sharply demarcated patch only; reduced from typical adult distribution.

## `pubic_hair_density` — Pubic hair density

**Type:** ordinal · **Scale:** pubic_hair_density_qualitative

**Citation:** Aligned with descriptors used in dermatologic and endocrinologic literature; no single canonical scale beyond Tanner staging which addresses developmental progression rather than adult density variation.

Density of native pubic hair when ungroomed.

**Observability:** `from_photograph: not_assessable` · `requires_unclothed: true` · `minimum_visible_extent: full_body`

> Grooming substantially affects observed density; native density assessment requires ungroomed presentation.

### Valid values

- **`sparse`** — Sparse: Visible terminal hairs scattered with substantial visible skin between.
- **`moderate`** — Moderate: Average density; terminal hairs cover most of the distribution area but with visible skin in between.
- **`dense`** — Dense: High terminal-hair count; minimal visible skin within the distribution.
- **`very_dense`** — Very dense: Extremely high terminal-hair count; covers the entire distribution thickly.

## `pubic_hair_color` — Pubic hair color

**Type:** categorical · **Scale:** pubic_hair_color_qualitative

**Citation:** Aligned with descriptors used in trichology literature; pubic hair color does not always match scalp hair color (commonly slightly darker; can be substantially different).

Predominant color of native pubic hair.

**Observability:** `from_photograph: not_assessable` · `requires_unclothed: true` · `minimum_visible_extent: full_body`

### Valid values

- **`matches_scalp`** — Matches scalp: Color similar to scalp hair.
- **`darker_than_scalp`** — Darker than scalp: Pubic hair noticeably darker than scalp hair; common variant.
- **`lighter_than_scalp`** — Lighter than scalp: Pubic hair noticeably lighter than scalp hair; less common.
- **`mixed_partial_gray`** — Mixed / partial gray: Mixed pigmented and gray hairs; common with aging.
- **`predominantly_gray`** — Predominantly gray: Majority of hairs gray or white.

## `pubic_hair_texture` — Pubic hair texture

**Type:** categorical · **Scale:** andre_walker_adapted

**Citation:** Andre Walker hair-texture classification (1A-4C) was originally developed for scalp hair; pubic-hair texture descriptors aligned to that vocabulary by trichology and dermatology references.

Texture of native pubic hair shafts. Pubic hair is typically curlier than scalp hair due to anatomical follicle orientation, but degree of curl varies by individual and population.

**Observability:** `from_photograph: not_assessable` · `requires_unclothed: true` · `minimum_visible_extent: full_body`

### Valid values

- **`straight`** — Straight (1): No discernible curl; hair lies flat. Less common for pubic hair.
- **`wavy`** — Wavy (2): Loose S-curves; some body.
- **`curly`** — Curly (3): Tight S-curves to spiral curls; the typical pubic-hair pattern.
- **`coily`** — Coily / kinky (4): Tight coils or zig-zag pattern; common in Sub-Saharan African and African-diaspora populations.

## `pubic_grooming_style_visible` — Visible grooming state

**Type:** categorical · **Scale:** grooming_style_qualitative

**Citation:** Aligned with the descriptors used in survey-based pubic-grooming research (Herbenick D et al. 2017, Journal of Sexual Medicine).

Visible grooming state — not a native phenotype dimension, but observability metadata that affects interpretation of every other dimension in this file. Captured here so that downstream analysis can flag native-phenotype dimensions as unreliable when grooming is detected.

**Observability:** `from_photograph: not_assessable` · `requires_unclothed: true` · `minimum_visible_extent: full_body`

> Grooming state is observability metadata, not a native phenotype dimension. When grooming is `shaped` or `fully_removed`, the other dimensions in this file should not be populated from the same photograph.

### Valid values

- **`natural_ungroomed`** — Natural / ungroomed: No visible grooming; native distribution and density observable.
- **`trimmed`** — Trimmed: Length reduced uniformly; distribution and density close to native but length altered.
- **`shaped`** — Shaped (partial removal): Partial removal in a defined shape (e.g. landing strip, triangle); native distribution not directly observable.
- **`fully_removed`** — Fully removed: Complete hair removal; no native phenotype observable from this presentation.
- **`unclear`** — Unclear: Image quality or framing prevents grooming-state assessment.

## References

- Marshall WA, Tanner JM (1969). Variations in pattern of pubertal changes in girls. Archives of Disease in Childhood, 44(235): 291-303.
- Marshall WA, Tanner JM (1970). Variations in the pattern of pubertal changes in boys. Archives of Disease in Childhood, 45(239): 13-23.
- Herbenick D, Schick V, Reece M, Sanders SA, Fortenberry JD (2010). Pubic hair removal among women in the United States: prevalence, methods, and characteristics. Journal of Sexual Medicine, 7(10).
- Herbenick D, Hensel D, Smith NK, Schick V, Reece M, Sanders SA, Fortenberry JD (2017). Pubic hair removal and sexual behavior: findings from a prospective daily diary study of sexually active women in the United States. Journal of Sexual Medicine, 14(8).

