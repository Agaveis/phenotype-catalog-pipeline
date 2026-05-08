# Ears observation prompt

<!-- Auto-generated from vocabularies/ears.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs -->

Atlas category: `ears` · Version: 1.0.0
UBERON: `UBERON:0001690`

## Instruction

Assess the following ears-related phenotype dimensions from the photograph. Return one value per dimension, drawn only from the listed valid buckets. If a dimension cannot be assessed (anatomy not visible, image quality too poor, framing too narrow), return `null` for that dimension. Do not guess — `null` is preferred over an unreliable bucket assignment.

For each dimension, also return a per-dimension confidence score (0.0–1.0) reflecting how reliably you could assess that specific dimension in this photograph.

Return a single JSON object, no prose, with shape:

```json
{
  "helix_morphology": "<one of the valid buckets, or null>",
  "helix_morphology_confidence": "<0.0-1.0, or null>",
  "antihelix_definition": "<one of the valid buckets, or null>",
  "antihelix_definition_confidence": "<0.0-1.0, or null>",
  "ear_protrusion": "<one of the valid buckets, or null>",
  "ear_protrusion_confidence": "<0.0-1.0, or null>",
  "lobule_attachment": "<one of the valid buckets, or null>",
  "lobule_attachment_confidence": "<0.0-1.0, or null>",
  "lobule_size": "<one of the valid buckets, or null>",
  "lobule_size_confidence": "<0.0-1.0, or null>",
  "tragus_morphology": "<one of the valid buckets, or null>",
  "tragus_morphology_confidence": "<0.0-1.0, or null>",
  "ear_axis": "<one of the valid buckets, or null>",
  "ear_axis_confidence": "<0.0-1.0, or null>",
  "ear_size_overall": "<one of the valid buckets, or null>",
  "ear_size_overall_confidence": "<0.0-1.0, or null>"
}
```

## Dimensions

### `helix_morphology`

**Type:** categorical · **Scale:** helix_qualitative · **Min visible extent:** head_only

> Best assessed from lateral or three-quarter view; frontal view captures only ear protrusion.

Valid values:

- `well_curved` — *Well-curved*: Smooth, continuous helical curve from superior to lobule.
- `flattened_superior` — *Flattened superiorly*: Reduced curve at the superior helix; common otoplasty correction target.
- `stahls_ear` — *Stahl's ear*: Third crus visible; abnormal cartilage fold creating a pointed superior helix.
- `cup_ear_constricted` — *Cup ear / constricted*: Furled or rolled helical rim creating a cupped appearance.
- `asymmetric` — *Asymmetric*: Notable left-right helical morphology difference.

Reference: Aligned with otoplasty-literature descriptors of helical-rim morphology.

### `antihelix_definition`

**Type:** ordinal · **Scale:** antihelix_qualitative · **Min visible extent:** head_only

Valid values:

- `well_defined` — *Well-defined*: Clear antihelical fold; ear lies close to head.
- `softly_defined` — *Softly defined*: Antihelix visible but fold not crisp.
- `absent_unfurled` — *Absent / unfurled*: Antihelical fold absent or substantially reduced; ear appears to project from head.

Reference: Mustardé JC (1963). The correction of prominent ears using simple mattress sutures. British Journal of Plastic Surgery, 16. Antihelix-fold definition is the central otoplasty-correction landmark.

### `ear_protrusion`

**Type:** ordinal · **Scale:** auriculocephalic_angle_categorical · **Min visible extent:** head_only

> Best assessed from frontal or posterior view; lateral view alone underestimates protrusion.

Valid values:

- `flat_against_head` — *Flat against head*: Auriculo-cephalic angle below ~15°; ear barely projects from head.
- `normal` — *Normal*: Angle approximately 15-25°.
- `prominent` — *Prominent*: Angle 25-35°; visibly prominent.
- `very_prominent` — *Very prominent*: Angle >35°; pronounced ear protrusion ('lop ear' / 'cup ear' in extreme cases).

Reference: Furnas DW (1968). Correction of prominent ears by concha-mastoid sutures. Plastic and Reconstructive Surgery, 42(3). Reference: auriculo-cephalic angle ~20-25° aesthetic norm.

### `lobule_attachment`

**Type:** categorical · **Scale:** earlobe_attachment_continuum · **Min visible extent:** head_only

Valid values:

- `free` — *Free / detached*: Earlobe hangs free of the head; clear gap between lobule and adjacent skin.
- `intermediate` — *Intermediate*: Partial attachment; lobule attaches to head along part of its edge but not fully.
- `attached` — *Attached*: Lobule attaches to head along its entire posterior edge; no free hanging.

Reference: Shaffer JR et al. (2017). Genome-wide association study reveals multiple loci influencing normal human earlobe attachment. American Journal of Human Genetics, 101(6). The classic Mendelian-genetics two-state classification is now understood as a polygenic continuum; this scale uses three buckets reflecting that continuum.

### `lobule_size`

**Type:** ordinal · **Scale:** lobule_size_qualitative · **Min visible extent:** head_only

Valid values:

- `small` — *Small*: Limited lobule mass; minimal hanging tissue.
- `medium` — *Medium*: Average lobule size.
- `large` — *Large*: Pronounced lobule mass; large hanging tissue.
- `stretched` — *Stretched (gauge / piercing)*: Lobule visibly stretched from gauge piercings or repeated heavy earrings; native size not assessable.

Reference: Aligned with descriptors used in otoplasty and forensic-anthropology literature.

### `tragus_morphology`

**Type:** categorical · **Scale:** tragus_qualitative · **Min visible extent:** head_only

Valid values:

- `single_pointed` — *Single-pointed*: One distinct tragal projection.
- `double_pointed` — *Double-pointed*: Two visible projections; common variant.
- `rounded` — *Rounded*: Tragus visible but rounded rather than pointed.
- `minimal` — *Minimal*: Tragus barely visible; small or recessed.

Reference: Otologic anatomy descriptors aligned with otologic-surgery references.

### `ear_axis`

**Type:** categorical · **Scale:** ear_inclination_categorical · **Min visible extent:** head_only

Valid values:

- `vertical` — *Vertical / minimal tilt*: Ear axis nearly vertical.
- `moderate_posterior_tilt` — *Moderate posterior tilt (~15-25°)*: Within Farkas reference range.
- `marked_posterior_tilt` — *Marked posterior tilt (>25°)*: Pronounced backward inclination.

Reference: Farkas LG (1994). Anthropometry of the Head and Face, 2nd Edition. Reference: ear axis approximately 15-20° posterior tilt from vertical.

### `ear_size_overall`

**Type:** ordinal · **Scale:** ear_length_qualitative · **Min visible extent:** head_only

Valid values:

- `small` — *Small*: Ear length below population median.
- `medium` — *Medium*: Average ear length.
- `large` — *Large*: Ear length above population median; common with aging (ears continue growing through life).

Reference: Farkas LG (1994). Reference: total ear height approximately equal to nasal length in European-population aesthetic norm.

