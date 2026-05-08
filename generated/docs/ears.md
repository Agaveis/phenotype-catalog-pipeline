# Ears — phenotype taxonomy

<!-- Auto-generated from vocabularies/ears.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs -->

> **Atlas category:** `ears` · **Version:** 1.0.0 · **License:** CC-BY-4.0
> **UBERON:** `UBERON:0001690` · **FMA:** `FMA:52780`

External ear anatomy: helix, antihelix, tragus, lobule, ear axis, projection. Dimensions are drawn from craniofacial anthropometry (Farkas) and otoplasty literature (McDowell, Mustardé, Furnas). The earlobe attachment dimension (free/attached/intermediate) is the canonical Mendelian-genetics teaching example, though contemporary research has shown the trait is more polygenic and continuous than the textbook treatment suggests.

## Dimensions overview

| Dimension | Type | Scale | Photo-observable | Values |
|---|---|---|---|---|
| `helix_morphology` | categorical | helix_qualitative | high | 5 |
| `antihelix_definition` | ordinal | antihelix_qualitative | high | 3 |
| `ear_protrusion` | ordinal | auriculocephalic_angle_categorical | high | 4 |
| `lobule_attachment` | categorical | earlobe_attachment_continuum | high | 3 |
| `lobule_size` | ordinal | lobule_size_qualitative | high | 4 |
| `tragus_morphology` | categorical | tragus_qualitative | medium | 4 |
| `ear_axis` | categorical | ear_inclination_categorical | medium | 3 |
| `ear_size_overall` | ordinal | ear_length_qualitative | high | 3 |

## `helix_morphology` — Helix morphology

**Type:** categorical · **Scale:** helix_qualitative

**Citation:** Aligned with otoplasty-literature descriptors of helical-rim morphology.

Curvature and prominence of the helix (the outer rim of the ear).

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

> Best assessed from lateral or three-quarter view; frontal view captures only ear protrusion.

### Valid values

- **`well_curved`** — Well-curved: Smooth, continuous helical curve from superior to lobule.
- **`flattened_superior`** — Flattened superiorly: Reduced curve at the superior helix; common otoplasty correction target.
- **`stahls_ear`** — Stahl's ear: Third crus visible; abnormal cartilage fold creating a pointed superior helix.
- **`cup_ear_constricted`** — Cup ear / constricted: Furled or rolled helical rim creating a cupped appearance.
- **`asymmetric`** — Asymmetric: Notable left-right helical morphology difference.

## `antihelix_definition` — Antihelix definition

**Type:** ordinal · **Scale:** antihelix_qualitative

**Citation:** Mustardé JC (1963). The correction of prominent ears using simple mattress sutures. British Journal of Plastic Surgery, 16. Antihelix-fold definition is the central otoplasty-correction landmark.

Definition of the antihelical fold. Loss of antihelix definition is the primary cause of prominent ears.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

### Valid values

- **`well_defined`** — Well-defined: Clear antihelical fold; ear lies close to head.
- **`softly_defined`** — Softly defined: Antihelix visible but fold not crisp.
- **`absent_unfurled`** — Absent / unfurled: Antihelical fold absent or substantially reduced; ear appears to project from head.

## `ear_protrusion` — Ear protrusion (auriculo-cephalic angle)

**Type:** ordinal · **Scale:** auriculocephalic_angle_categorical

**Citation:** Furnas DW (1968). Correction of prominent ears by concha-mastoid sutures. Plastic and Reconstructive Surgery, 42(3). Reference: auriculo-cephalic angle ~20-25° aesthetic norm.

Angle between the ear and the side of the head, captured ordinally.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

> Best assessed from frontal or posterior view; lateral view alone underestimates protrusion.

### Valid values

- **`flat_against_head`** — Flat against head: Auriculo-cephalic angle below ~15°; ear barely projects from head.
- **`normal`** — Normal: Angle approximately 15-25°.
- **`prominent`** — Prominent: Angle 25-35°; visibly prominent.
- **`very_prominent`** — Very prominent: Angle >35°; pronounced ear protrusion ('lop ear' / 'cup ear' in extreme cases).

## `lobule_attachment` — Earlobe attachment

**Type:** categorical · **Scale:** earlobe_attachment_continuum

**Citation:** Shaffer JR et al. (2017). Genome-wide association study reveals multiple loci influencing normal human earlobe attachment. American Journal of Human Genetics, 101(6). The classic Mendelian-genetics two-state classification is now understood as a polygenic continuum; this scale uses three buckets reflecting that continuum.

Degree of attachment of the earlobe to the side of the head. Classically taught as two-state (free/attached) but contemporary genetics work demonstrates a continuous distribution; three buckets capture the meaningful variation.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

### Valid values

- **`free`** — Free / detached: Earlobe hangs free of the head; clear gap between lobule and adjacent skin.
- **`intermediate`** — Intermediate: Partial attachment; lobule attaches to head along part of its edge but not fully.
- **`attached`** — Attached: Lobule attaches to head along its entire posterior edge; no free hanging.

## `lobule_size` — Earlobe size

**Type:** ordinal · **Scale:** lobule_size_qualitative

**Citation:** Aligned with descriptors used in otoplasty and forensic-anthropology literature.

Relative size of the earlobe.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

### Valid values

- **`small`** — Small: Limited lobule mass; minimal hanging tissue.
- **`medium`** — Medium: Average lobule size.
- **`large`** — Large: Pronounced lobule mass; large hanging tissue.
- **`stretched`** — Stretched (gauge / piercing): Lobule visibly stretched from gauge piercings or repeated heavy earrings; native size not assessable.

## `tragus_morphology` — Tragus morphology

**Type:** categorical · **Scale:** tragus_qualitative

**Citation:** Otologic anatomy descriptors aligned with otologic-surgery references.

Shape of the tragus (the small projection anterior to the ear canal).

**Observability:** `from_photograph: medium` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

### Valid values

- **`single_pointed`** — Single-pointed: One distinct tragal projection.
- **`double_pointed`** — Double-pointed: Two visible projections; common variant.
- **`rounded`** — Rounded: Tragus visible but rounded rather than pointed.
- **`minimal`** — Minimal: Tragus barely visible; small or recessed.

## `ear_axis` — Ear axis (vertical inclination)

**Type:** categorical · **Scale:** ear_inclination_categorical

**Citation:** Farkas LG (1994). Anthropometry of the Head and Face, 2nd Edition. Reference: ear axis approximately 15-20° posterior tilt from vertical.

Inclination of the long ear axis relative to vertical, viewed laterally.

**Observability:** `from_photograph: medium` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

### Valid values

- **`vertical`** — Vertical / minimal tilt: Ear axis nearly vertical.
- **`moderate_posterior_tilt`** — Moderate posterior tilt (~15-25°): Within Farkas reference range.
- **`marked_posterior_tilt`** — Marked posterior tilt (>25°): Pronounced backward inclination.

## `ear_size_overall` — Overall ear size

**Type:** ordinal · **Scale:** ear_length_qualitative

**Citation:** Farkas LG (1994). Reference: total ear height approximately equal to nasal length in European-population aesthetic norm.

Overall ear length proportional to face.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

### Valid values

- **`small`** — Small: Ear length below population median.
- **`medium`** — Medium: Average ear length.
- **`large`** — Large: Ear length above population median; common with aging (ears continue growing through life).

## References

- Farkas LG (1994). Anthropometry of the Head and Face, 2nd Edition. Raven Press.
- Mustardé JC (1963). The correction of prominent ears using simple mattress sutures. British Journal of Plastic Surgery, 16: 170-178.
- Furnas DW (1968). Correction of prominent ears by concha-mastoid sutures. Plastic and Reconstructive Surgery, 42(3): 189-193.
- Shaffer JR, Li J, Lee MK, et al. (2017). Genome-wide association study reveals multiple loci influencing normal human earlobe attachment. American Journal of Human Genetics, 101(6): 913-924.
- McDowell AJ (1968). Goals in otoplasty for protruding ears. Plastic and Reconstructive Surgery, 41(1).

