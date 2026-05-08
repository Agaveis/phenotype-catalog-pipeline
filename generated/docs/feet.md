# Feet — phenotype taxonomy

<!-- Auto-generated from vocabularies/feet.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs -->

> **Atlas category:** `feet` · **Version:** 1.0.0 · **License:** CC-BY-4.0
> **UBERON:** `UBERON:0002387` · **FMA:** `FMA:9664`

Foot morphology: foot size, arch height, toe length pattern, midfoot width, heel and ankle morphology, nail shape. The toe-length-pattern dimension (Greek / Egyptian / Roman / Square) is the canonical anthropometric foot-typology classification, dating to classical-art conventions and used in modern podiatry literature.

## Dimensions overview

| Dimension | Type | Scale | Photo-observable | Values |
|---|---|---|---|---|
| `foot_size_relative` | ordinal | foot_size_qualitative | medium | 3 |
| `arch_height` | ordinal | arch_index_qualitative | medium | 3 |
| `toe_length_pattern` | categorical | toe_typology_classical | high | 5 |
| `forefoot_width` | ordinal | forefoot_width_qualitative | high | 3 |
| `heel_morphology` | categorical | heel_qualitative | medium | 4 |
| `hallux_alignment` | categorical | hallux_alignment_qualitative | high | 4 |
| `toenail_morphology` | categorical | toenail_qualitative | medium | 5 |

## `foot_size_relative` — Foot size (relative to body)

**Type:** ordinal · **Scale:** foot_size_qualitative

**Citation:** Aligned with anthropometric foot-length proportions (typical ratio ~14-15% of body height).

Foot length relative to body height.

**Observability:** `from_photograph: medium` · `requires_unclothed: false` · `minimum_visible_extent: full_body`

### Valid values

- **`small`** — Small
- **`average`** — Average
- **`large`** — Large

## `arch_height` — Arch height (medial longitudinal)

**Type:** ordinal · **Scale:** arch_index_qualitative

**Citation:** Cavanagh PR, Rodgers MM (1987). The arch index: a useful measure from footprints. Journal of Biomechanics, 20(5): 547-551. Original quantitative scale; this dimension uses three qualitative buckets aligned with the clinical classification of high-arch / normal / flat-foot.

Height of the medial longitudinal arch when standing.

**Observability:** `from_photograph: medium` · `requires_unclothed: true` · `minimum_visible_extent: full_body`

> Best assessed from medial view of the bare foot; from above with shoes on, only crude approximation is possible.

### Valid values

- **`flat_pes_planus`** — Flat (pes planus): Reduced or absent arch; medial border of foot rests near the floor.
- **`normal`** — Normal
- **`high_pes_cavus`** — High (pes cavus): Pronounced arch; reduced foot-floor contact area.

## `toe_length_pattern` — Toe length pattern

**Type:** categorical · **Scale:** toe_typology_classical

**Citation:** Classical anthropometric foot typology described in podiatry literature; Hawes MR, Sovak D, Miyashita M, Kang SJ, Yoshihuku Y, Tanaka S (1994). Ethnic differences in forefoot shape and the determination of shoe comfort. Ergonomics, 37(1).

Relative length of the great toe (hallux) versus the second toe and remaining toes. Classical names derive from frequencies in art conventions; modern usage is descriptive.

**Observability:** `from_photograph: high` · `requires_unclothed: true` · `minimum_visible_extent: full_body`

### Valid values

- **`egyptian`** — Egyptian: Hallux longest; toes decrease in length from first to fifth in a straight diagonal. Most common pattern globally.
- **`greek_morton`** — Greek (Morton's): Second toe longer than hallux; common variant. Sometimes associated with biomechanical foot-strike patterns.
- **`roman_square`** — Roman / square: First three toes approximately equal in length, then sharp drop. Less common variant.
- **`stretched_long`** — Stretched (long-toed): All toes long relative to forefoot length.
- **`asymmetric`** — Asymmetric: Notable left-right toe-pattern asymmetry.

## `forefoot_width` — Forefoot width

**Type:** ordinal · **Scale:** forefoot_width_qualitative

**Citation:** Aligned with shoe-fitting and ergonomics descriptors of forefoot breadth.

Width of the forefoot at the metatarsal heads relative to foot length.

**Observability:** `from_photograph: high` · `requires_unclothed: true` · `minimum_visible_extent: full_body`

### Valid values

- **`narrow`** — Narrow
- **`average`** — Average
- **`wide`** — Wide: Broad metatarsal width; common variant in some populations.

## `heel_morphology` — Heel morphology

**Type:** categorical · **Scale:** heel_qualitative

**Citation:** Aligned with podiatric descriptors of calcaneal soft-tissue silhouette.

Soft-tissue heel silhouette in lateral view.

**Observability:** `from_photograph: medium` · `requires_unclothed: true` · `minimum_visible_extent: full_body`

### Valid values

- **`narrow`** — Narrow
- **`balanced`** — Balanced
- **`broad`** — Broad
- **`haglund_prominent`** — Haglund's prominence: Visible posterior superior calcaneal prominence; clinical Haglund deformity.

## `hallux_alignment` — Hallux alignment

**Type:** categorical · **Scale:** hallux_alignment_qualitative

**Citation:** Manchester scale for hallux valgus visual grading; Garrow AP, Papageorgiou A, Silman AJ et al. (2001). The grading of hallux valgus. The Manchester Scale. Journal of the American Podiatric Medical Association, 91(2).

Alignment of the great toe relative to the foot's longitudinal axis. Clinical hallux valgus when significantly deviated medially.

**Observability:** `from_photograph: high` · `requires_unclothed: true` · `minimum_visible_extent: full_body`

### Valid values

- **`neutral`** — Neutral
- **`mild_valgus`** — Mild hallux valgus: Subtle medial deviation; no overlap with adjacent toes.
- **`moderate_valgus`** — Moderate hallux valgus: Clear medial deviation; bunion visible.
- **`severe_valgus`** — Severe hallux valgus: Marked medial deviation; hallux overlaps or underlies second toe.

## `toenail_morphology` — Toenail morphology

**Type:** categorical · **Scale:** toenail_qualitative

**Citation:** Aligned with descriptors used in dermatology and podiatry literature.

Toenail shape and condition.

**Observability:** `from_photograph: medium` · `requires_unclothed: true` · `minimum_visible_extent: full_body`

### Valid values

- **`normal`** — Normal
- **`groomed_pedicured`** — Groomed / pedicured: Visible nail-care; native shape may not be directly observable.
- **`thickened`** — Thickened: Onychogryphosis or age-related thickening.
- **`discolored`** — Discolored: Onychomycosis or other discoloration visible.
- **`not_visible`** — Not visible

## References

- Cavanagh PR, Rodgers MM (1987). The arch index: a useful measure from footprints. Journal of Biomechanics, 20(5): 547-551.
- Hawes MR, Sovak D, Miyashita M, Kang SJ, Yoshihuku Y, Tanaka S (1994). Ethnic differences in forefoot shape and the determination of shoe comfort. Ergonomics, 37(1).
- Garrow AP, Papageorgiou A, Silman AJ, Thomas E, Jayson MI, Macfarlane GJ (2001). The grading of hallux valgus. The Manchester Scale. Journal of the American Podiatric Medical Association, 91(2): 74-78.

