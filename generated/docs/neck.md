# Neck — phenotype taxonomy

<!-- Auto-generated from vocabularies/neck.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs -->

> **Atlas category:** `neck` · **Version:** 1.0.0 · **License:** CC-BY-4.0
> **UBERON:** `UBERON:0000974` · **FMA:** `FMA:7155`

Cervical region morphology: neck length and thickness, cervicomental angle, laryngeal prominence, sternocleidomastoid visibility, posterior neck. Dimensions are drawn from craniofacial anthropometry (Farkas) and cervicofacial-aesthetics literature (Ellenbogen-Karlin, Connell). The cervicomental angle is the central aesthetic landmark of the neck region; laryngeal prominence (Adam's apple) is sex-dimorphic.

## Dimensions overview

| Dimension | Type | Scale | Photo-observable | Values |
|---|---|---|---|---|
| `neck_length` | ordinal | neck_length_proportional | high | 3 |
| `neck_thickness` | ordinal | neck_thickness_proportional | high | 3 |
| `cervicomental_angle` | categorical | ellenbogen_karlin_cervicomental | high | 3 |
| `laryngeal_prominence` | ordinal | thyroid_cartilage_prominence_qualitative | high | 4 |
| `sternocleidomastoid_visibility` | ordinal | scm_visibility_qualitative | medium | 4 |
| `platysmal_bands` | categorical | platysmal_band_classification | medium | 4 |
| `neck_skin_quality` | ordinal | neck_skin_qualitative | high | 4 |

## `neck_length` — Neck length

**Type:** ordinal · **Scale:** neck_length_proportional

**Citation:** Farkas LG (1994). Anthropometry of the Head and Face, 2nd Edition. Reference: cervical length (gnathion to suprasternal notch) proportional to overall facial height.

Vertical neck length proportional to face height.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_shoulders`

### Valid values

- **`short`** — Short: Neck length less than approximately 70% of facial height.
- **`average`** — Average: Neck length approximately 70-100% of facial height (Farkas reference range).
- **`long`** — Long: Neck length substantially greater than facial height; swan-neck appearance.

## `neck_thickness` — Neck thickness

**Type:** ordinal · **Scale:** neck_thickness_proportional

**Citation:** Aligned with sports-medicine descriptors of cervical-girth norms; reference values vary substantially with sex and training.

Neck thickness relative to head width.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_shoulders`

### Valid values

- **`thin`** — Thin: Neck substantially narrower than head; minimal cervical musculature.
- **`average`** — Average: Neck width proportional to head width.
- **`thick`** — Thick: Neck width approaches or exceeds head width; pronounced cervical musculature or subcutaneous fullness.

## `cervicomental_angle` — Cervicomental angle

**Type:** categorical · **Scale:** ellenbogen_karlin_cervicomental

**Citation:** Ellenbogen R, Karlin JV (1980). Visual criteria for success in restoring the youthful neck. Plastic and Reconstructive Surgery, 66(6): 826-837. Reference: cervicomental angle 105-120° as the youthful aesthetic norm.

Angle between the submental plane and the anterior neck.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_shoulders`

> Best assessed from lateral view.

### Valid values

- **`sharp_youthful`** — Sharp / youthful (~90°): Crisp angular transition between submental plane and neck; aesthetic ideal.
- **`balanced`** — Balanced (~105-120°): Within Ellenbogen-Karlin reference range.
- **`obtuse_aged`** — Obtuse / aged (>130°): Reduced angle definition; common with submental fat or platysmal banding.

## `laryngeal_prominence` — Laryngeal prominence (Adam's apple)

**Type:** ordinal · **Scale:** thyroid_cartilage_prominence_qualitative

**Citation:** Anatomic descriptor aligned with otolaryngology and gender-affirming-care literature on thyroid-cartilage prominence (chondrolaryngoplasty references).

Visibility of the thyroid cartilage prominence. Sex-dimorphic — typically more prominent in adult-male physiognomy due to differing thyroid-cartilage angles.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_shoulders`

### Valid values

- **`minimal`** — Minimal: Thyroid cartilage barely visible; typical of female adult physiognomy.
- **`moderate`** — Moderate: Visible but not pronounced thyroid cartilage.
- **`prominent`** — Prominent: Pronounced Adam's apple; typical of male adult physiognomy.
- **`very_prominent`** — Very prominent: Substantial thyroid-cartilage projection.

## `sternocleidomastoid_visibility` — Sternocleidomastoid visibility

**Type:** ordinal · **Scale:** scm_visibility_qualitative

**Citation:** Aligned with surface-anatomy descriptors used in sports medicine and aesthetic-medicine literature.

Visibility of the sternocleidomastoid muscle as a distinct surface landmark.

**Observability:** `from_photograph: medium` · `requires_unclothed: false` · `minimum_visible_extent: head_shoulders`

### Valid values

- **`not_visible`** — Not visible: SCM not discernible at the skin surface; soft-tissue coverage obscures muscle outline.
- **`subtle`** — Subtle: SCM faintly visible during rotation or tension.
- **`defined`** — Defined: SCM clearly visible at rest as a distinct landmark.
- **`highly_defined`** — Highly defined: Pronounced SCM definition; very low body-fat percentage in the cervical region.

## `platysmal_bands` — Platysmal banding

**Type:** categorical · **Scale:** platysmal_band_classification

**Citation:** Connell BF, Shamoun JM (1997). The significance of digastric muscle contouring for rejuvenation of the submental area of the face. Plastic and Reconstructive Surgery, 99(6).

Visibility of platysmal bands — the vertical neck cords that become more visible with aging or low body-fat percentage.

**Observability:** `from_photograph: medium` · `requires_unclothed: false` · `minimum_visible_extent: head_shoulders`

### Valid values

- **`absent`** — Absent
- **`subtle`** — Subtle: Platysmal cords barely visible at rest.
- **`moderate`** — Moderate: Visible cords at rest; aging-related change.
- **`marked`** — Marked: Pronounced cords creating a 'turkey-wattle' appearance.

## `neck_skin_quality` — Neck skin quality

**Type:** ordinal · **Scale:** neck_skin_qualitative

**Citation:** Aligned with the Connell-Shamoun and Ellenbogen-Karlin neck-aesthetics descriptors.

Skin quality in the cervical region — common site for visible aging changes.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_shoulders`

### Valid values

- **`smooth_youthful`** — Smooth / youthful
- **`average`** — Average: Some texture or fine lines visible.
- **`loose_lax`** — Loose / lax: Visible cervical skin laxity; redundant skin folds.
- **`wrinkled`** — Wrinkled: Pronounced cervical wrinkles or 'necklace lines'.

## References

- Farkas LG (1994). Anthropometry of the Head and Face, 2nd Edition. Raven Press.
- Ellenbogen R, Karlin JV (1980). Visual criteria for success in restoring the youthful neck. Plastic and Reconstructive Surgery, 66(6): 826-837.
- Connell BF, Shamoun JM (1997). The significance of digastric muscle contouring for rejuvenation of the submental area of the face. Plastic and Reconstructive Surgery, 99(6).

