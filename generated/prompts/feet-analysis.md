# Feet observation prompt

<!-- Auto-generated from vocabularies/feet.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs -->

Atlas category: `feet` · Version: 1.0.0
UBERON: `UBERON:0002387`

## Instruction

Assess the following feet-related phenotype dimensions from the photograph. Return one value per dimension, drawn only from the listed valid buckets. If a dimension cannot be assessed (anatomy not visible, image quality too poor, framing too narrow), return `null` for that dimension. Do not guess — `null` is preferred over an unreliable bucket assignment.

For each dimension, also return a per-dimension confidence score (0.0–1.0) reflecting how reliably you could assess that specific dimension in this photograph.

Return a single JSON object, no prose, with shape:

```json
{
  "foot_size_relative": "<one of the valid buckets, or null>",
  "foot_size_relative_confidence": "<0.0-1.0, or null>",
  "arch_height": "<one of the valid buckets, or null>",
  "arch_height_confidence": "<0.0-1.0, or null>",
  "toe_length_pattern": "<one of the valid buckets, or null>",
  "toe_length_pattern_confidence": "<0.0-1.0, or null>",
  "forefoot_width": "<one of the valid buckets, or null>",
  "forefoot_width_confidence": "<0.0-1.0, or null>",
  "heel_morphology": "<one of the valid buckets, or null>",
  "heel_morphology_confidence": "<0.0-1.0, or null>",
  "hallux_alignment": "<one of the valid buckets, or null>",
  "hallux_alignment_confidence": "<0.0-1.0, or null>",
  "toenail_morphology": "<one of the valid buckets, or null>",
  "toenail_morphology_confidence": "<0.0-1.0, or null>"
}
```

## Dimensions

### `foot_size_relative`

**Type:** ordinal · **Scale:** foot_size_qualitative · **Min visible extent:** full_body

Valid values:

- `small` — *Small*
- `average` — *Average*
- `large` — *Large*

Reference: Aligned with anthropometric foot-length proportions (typical ratio ~14-15% of body height).

### `arch_height`

**Type:** ordinal · **Scale:** arch_index_qualitative · **Min visible extent:** full_body · **Requires unclothed anatomy**

> Best assessed from medial view of the bare foot; from above with shoes on, only crude approximation is possible.

Valid values:

- `flat_pes_planus` — *Flat (pes planus)*: Reduced or absent arch; medial border of foot rests near the floor.
- `normal` — *Normal*
- `high_pes_cavus` — *High (pes cavus)*: Pronounced arch; reduced foot-floor contact area.

Reference: Cavanagh PR, Rodgers MM (1987). The arch index: a useful measure from footprints. Journal of Biomechanics, 20(5): 547-551. Original quantitative scale; this dimension uses three qualitative buckets aligned with the clinical classification of high-arch / normal / flat-foot.

### `toe_length_pattern`

**Type:** categorical · **Scale:** toe_typology_classical · **Min visible extent:** full_body · **Requires unclothed anatomy**

Valid values:

- `egyptian` — *Egyptian*: Hallux longest; toes decrease in length from first to fifth in a straight diagonal. Most common pattern globally.
- `greek_morton` — *Greek (Morton's)*: Second toe longer than hallux; common variant. Sometimes associated with biomechanical foot-strike patterns.
- `roman_square` — *Roman / square*: First three toes approximately equal in length, then sharp drop. Less common variant.
- `stretched_long` — *Stretched (long-toed)*: All toes long relative to forefoot length.
- `asymmetric` — *Asymmetric*: Notable left-right toe-pattern asymmetry.

Reference: Classical anthropometric foot typology described in podiatry literature; Hawes MR, Sovak D, Miyashita M, Kang SJ, Yoshihuku Y, Tanaka S (1994). Ethnic differences in forefoot shape and the determination of shoe comfort. Ergonomics, 37(1).

### `forefoot_width`

**Type:** ordinal · **Scale:** forefoot_width_qualitative · **Min visible extent:** full_body · **Requires unclothed anatomy**

Valid values:

- `narrow` — *Narrow*
- `average` — *Average*
- `wide` — *Wide*: Broad metatarsal width; common variant in some populations.

Reference: Aligned with shoe-fitting and ergonomics descriptors of forefoot breadth.

### `heel_morphology`

**Type:** categorical · **Scale:** heel_qualitative · **Min visible extent:** full_body · **Requires unclothed anatomy**

Valid values:

- `narrow` — *Narrow*
- `balanced` — *Balanced*
- `broad` — *Broad*
- `haglund_prominent` — *Haglund's prominence*: Visible posterior superior calcaneal prominence; clinical Haglund deformity.

Reference: Aligned with podiatric descriptors of calcaneal soft-tissue silhouette.

### `hallux_alignment`

**Type:** categorical · **Scale:** hallux_alignment_qualitative · **Min visible extent:** full_body · **Requires unclothed anatomy**

Valid values:

- `neutral` — *Neutral*
- `mild_valgus` — *Mild hallux valgus*: Subtle medial deviation; no overlap with adjacent toes.
- `moderate_valgus` — *Moderate hallux valgus*: Clear medial deviation; bunion visible.
- `severe_valgus` — *Severe hallux valgus*: Marked medial deviation; hallux overlaps or underlies second toe.

Reference: Manchester scale for hallux valgus visual grading; Garrow AP, Papageorgiou A, Silman AJ et al. (2001). The grading of hallux valgus. The Manchester Scale. Journal of the American Podiatric Medical Association, 91(2).

### `toenail_morphology`

**Type:** categorical · **Scale:** toenail_qualitative · **Min visible extent:** full_body · **Requires unclothed anatomy**

Valid values:

- `normal` — *Normal*
- `groomed_pedicured` — *Groomed / pedicured*: Visible nail-care; native shape may not be directly observable.
- `thickened` — *Thickened*: Onychogryphosis or age-related thickening.
- `discolored` — *Discolored*: Onychomycosis or other discoloration visible.
- `not_visible` — *Not visible*

Reference: Aligned with descriptors used in dermatology and podiatry literature.

