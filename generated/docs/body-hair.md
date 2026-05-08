# Body hair — phenotype taxonomy

<!-- Auto-generated from vocabularies/body-hair.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs -->

> **Atlas category:** `body-hair` · **Version:** 1.0.0 · **License:** CC-BY-4.0
> **UBERON:** `UBERON:0008811` · **FMA:** `FMA:54320`

Body- and facial-hair distribution patterns, density, color, and texture. Excludes pubic-region hair (covered in pubic-region.json) and head hair (covered in head-hair.json). The Ferriman-Gallwey scale (1961) is the canonical clinical reference for terminal-hair density across nine body regions; this vocabulary captures that pattern at observability-appropriate granularity for photograph-based assessment.

## Dimensions overview

| Dimension | Type | Scale | Photo-observable | Values |
|---|---|---|---|---|
| `ferriman_gallwey_visual` | ordinal | ferriman_gallwey_1961 | low | 5 |
| `facial_hair_male` | categorical | facial_hair_distribution_qualitative | high | 9 |
| `chest_hair_male` | categorical | chest_hair_pattern_qualitative | high | 7 |
| `abdominal_hair_pattern` | categorical | abdominal_hair_qualitative | high | 5 |
| `arm_hair_density` | ordinal | arm_hair_density_qualitative | high | 5 |
| `leg_hair_density` | ordinal | leg_hair_density_qualitative | high | 5 |
| `back_hair_male` | categorical | back_hair_qualitative | high | 6 |
| `body_hair_color` | categorical | body_hair_color_qualitative | medium | 4 |

## `ferriman_gallwey_visual` — Ferriman-Gallwey terminal-hair density (visual estimate)

**Type:** ordinal · **Scale:** ferriman_gallwey_1961

**Citation:** Ferriman D, Gallwey JE (1961). Clinical assessment of body hair growth in women. Journal of Clinical Endocrinology and Metabolism, 21(11): 1440-1447.

Visual estimate of overall terminal-hair density. The original 0-36 numeric scale (0-3 across nine body regions) summed to a clinical hirsutism cutoff; this dimension uses qualitative buckets that aggregate the per-region scores for photograph-based assessment.

**Observability:** `from_photograph: low` · `requires_unclothed: true` · `minimum_visible_extent: full_body`

> Reliable visual estimation requires multiple body regions visible. Grooming/hair-removal substantially confounds native-density assessment.

### Valid values

- **`minimal`** — Minimal (FG estimated 0-4): Below clinical hirsutism threshold; minimal visible body hair.
- **`mild`** — Mild (FG ~5-8): Borderline; some terminal hair across body regions.
- **`moderate`** — Moderate (FG ~9-15): Above clinical hirsutism threshold for women; substantial terminal hair distribution.
- **`marked`** — Marked (FG ~16+): Pronounced terminal hair distribution.
- **`not_assessable`** — Not assessable: Body coverage prevents assessment.

## `facial_hair_male` — Facial hair (male) — beard distribution

**Type:** categorical · **Scale:** facial_hair_distribution_qualitative

**Citation:** Aligned with descriptors used in dermatology and trichology literature on terminal-hair distribution patterns.

Distribution and density of facial hair in subjects with apparent male physiognomy.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

### Valid values

- **`absent_clean_shaven_or_low`** — Absent / clean-shaven or low capacity
- **`patchy`** — Patchy: Uneven coverage with visible bare patches.
- **`mustache_only`** — Mustache only
- **`goatee_chin_only`** — Goatee / chin only
- **`full_beard_light`** — Full beard — light density
- **`full_beard_dense`** — Full beard — dense
- **`full_beard_very_dense`** — Full beard — very dense
- **`stubble_only`** — Stubble only: Recently shaved; native density not directly assessable.
- **`not_applicable`** — Not applicable: Subject not in male physiognomy.

## `chest_hair_male` — Chest hair distribution (male)

**Type:** categorical · **Scale:** chest_hair_pattern_qualitative

**Citation:** Aligned with descriptors used in trichology literature on chest-hair patterns.

Pattern and density of terminal chest hair in subjects with apparent male physiognomy.

**Observability:** `from_photograph: high` · `requires_unclothed: true` · `minimum_visible_extent: torso`

### Valid values

- **`absent_minimal`** — Absent / minimal
- **`central_strip_only`** — Central strip only: Hair limited to a vertical central band.
- **`moderate_chest_only`** — Moderate, chest only: Hair across the chest but not extending to abdomen.
- **`extensive_chest_to_abdomen`** — Extensive, chest extending to abdomen: Continuous distribution from chest to abdomen.
- **`very_dense_full`** — Very dense / full
- **`groomed_unclear`** — Groomed (waxed/shaved): Visible removal; native distribution not assessable.
- **`not_applicable`** — Not applicable

## `abdominal_hair_pattern` — Abdominal hair pattern

**Type:** categorical · **Scale:** abdominal_hair_qualitative

**Citation:** Aligned with terminal-hair distribution descriptors in dermatology literature.

Pattern of abdominal hair, including the 'happy trail' linea alba pattern.

**Observability:** `from_photograph: high` · `requires_unclothed: true` · `minimum_visible_extent: torso`

### Valid values

- **`absent`** — Absent
- **`linea_alba_strip`** — Linea alba strip ('happy trail'): Vertical strip from navel to pubis only.
- **`diffuse_light`** — Diffuse, light: Light coverage spreading from midline.
- **`diffuse_dense`** — Diffuse, dense: Full abdominal hair coverage.
- **`groomed_unclear`** — Groomed: Visible removal; native pattern not assessable.

## `arm_hair_density` — Arm hair density

**Type:** ordinal · **Scale:** arm_hair_density_qualitative

**Citation:** Aligned with terminal-hair descriptors in dermatology literature.

Density of arm hair on the dorsal forearm.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: torso`

### Valid values

- **`minimal`** — Minimal
- **`light`** — Light
- **`moderate`** — Moderate
- **`dense`** — Dense
- **`groomed`** — Groomed (removal visible)

## `leg_hair_density` — Leg hair density

**Type:** ordinal · **Scale:** leg_hair_density_qualitative

**Citation:** Aligned with terminal-hair descriptors in dermatology literature.

Density of leg hair (anterior tibial / calf region).

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: full_body`

### Valid values

- **`minimal`** — Minimal
- **`light`** — Light
- **`moderate`** — Moderate
- **`dense`** — Dense
- **`groomed`** — Groomed (removal visible)

## `back_hair_male` — Back hair pattern (male)

**Type:** categorical · **Scale:** back_hair_qualitative

**Citation:** Aligned with terminal-hair descriptors in dermatology literature.

Distribution of back hair in subjects with apparent male physiognomy.

**Observability:** `from_photograph: high` · `requires_unclothed: true` · `minimum_visible_extent: torso`

### Valid values

- **`absent_minimal`** — Absent / minimal
- **`shoulder_only`** — Shoulders only
- **`upper_back`** — Upper back
- **`full_back`** — Full back
- **`groomed`** — Groomed
- **`not_applicable`** — Not applicable

## `body_hair_color` — Body hair color

**Type:** categorical · **Scale:** body_hair_color_qualitative

**Citation:** Aligned with trichology descriptors of differential body / scalp hair pigmentation.

Body-hair color relative to scalp hair.

**Observability:** `from_photograph: medium` · `requires_unclothed: false` · `minimum_visible_extent: torso`

### Valid values

- **`matches_scalp`** — Matches scalp
- **`darker_than_scalp`** — Darker than scalp
- **`lighter_than_scalp`** — Lighter than scalp
- **`mixed_aging`** — Mixed (graying)

## References

- Ferriman D, Gallwey JE (1961). Clinical assessment of body hair growth in women. Journal of Clinical Endocrinology and Metabolism, 21(11): 1440-1447.
- Hatch R, Rosenfield RL, Kim MH, Tredway D (1981). Hirsutism: implications, etiology, and management. American Journal of Obstetrics and Gynecology, 140(7).
- Bouhanna P (2014). Topographic phototrichogram for follicular-unit classification. Annales de Dermatologie et de Vénéréologie, 141(11).

