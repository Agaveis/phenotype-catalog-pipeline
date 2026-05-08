# Eyes — phenotype taxonomy

<!-- Auto-generated from vocabularies/eyes.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs -->

> **Atlas category:** `eyes` · **Version:** 1.0.0 · **License:** CC-BY-4.0
> **UBERON:** `UBERON:0000970` · **FMA:** `FMA:54448`

Periocular phenotype: eye globe, eyelid morphology, palpebral fissure metrics, epicanthic fold, brow ridge, eyebrow morphology, and tear-trough region. Absorbs the original Eyelids and Eye Color atlas categories per the granularity decision (eye color is a single dimension, eyelid morphology is tightly coupled to eye morphology, brow region is the soft-tissue continuation of orbital anatomy). Dimensions are drawn from craniofacial anthropometry (Farkas), oculoplastic surgery (Putterman, McCord), Asian-eyelid-surgery classification literature (McCurdy, Liu, Chen), and dermatology / aging-face literature for the brow and tear-trough dimensions.

## Dimensions overview

| Dimension | Type | Scale | Photo-observable | Values |
|---|---|---|---|---|
| `eye_color` | categorical | iris_color_qualitative | high | 12 |
| `eye_shape` | categorical | eye_shape_qualitative | high | 9 |
| `eyelid_crease_type` | categorical | mccurdy_chen_eyelid_crease | high | 7 |
| `epicanthic_fold` | categorical | duke_elder_epicanthus_classification | high | 6 |
| `palpebral_fissure_slant` | categorical | fissure_axis_qualitative | high | 5 |
| `palpebral_fissure_length` | ordinal | palpebral_fissure_length_qualitative | high | 3 |
| `intercanthal_distance` | ordinal | intercanthal_distance_qualitative | high | 3 |
| `brow_ridge_prominence` | ordinal | supraorbital_ridge_qualitative | medium | 3 |
| `eyebrow_density` | ordinal | eyebrow_density_qualitative | high | 5 |
| `eyebrow_shape` | categorical | eyebrow_shape_qualitative | high | 6 |
| `tear_trough_dark_circles` | ordinal | infraorbital_darkness_qualitative | high | 4 |
| `eye_protrusion` | categorical | eye_protrusion_qualitative | medium | 3 |

## `eye_color` — Iris color

**Type:** categorical · **Scale:** iris_color_qualitative

**Citation:** Sturm RA, Larsson M (2009). Genetics of human iris colour and patterns. Pigment Cell & Melanoma Research, 22(5). Categorical descriptors aligned with the OCA2/HERC2 phenotype literature.

Predominant color of the iris. Heterochromia is captured as its own value; mixed colors (e.g. hazel, blue-green) get distinct buckets.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

> Eye color is sensitive to lighting — flash photography and bright daylight can wash out lighter colors; low-light photography can darken lighter eyes toward gray or hazel. Confidence should reflect lighting quality.

### Valid values

- **`very_dark_brown`** — Very dark brown / black-appearing: Iris appears nearly black under typical lighting; high melanin content. Common in East Asian, South Asian, Sub-Saharan African, and indigenous populations.
- **`brown`** — Brown: Medium to dark brown iris; visible iris detail.
- **`light_brown`** — Light brown: Lighter brown with visible warmth; sometimes called amber when more golden.
- **`amber`** — Amber / honey: Golden-yellow to copper iris; relatively rare. Distinct from light brown by the warmth of the hue.
- **`hazel`** — Hazel: Mixed brown and green/gold; central iris differs in color from peripheral iris (central heterochromia).
- **`green`** — Green: True green; uncommon globally, concentrated in Northern and Eastern European populations.
- **`blue_green`** — Blue-green: Mixed blue and green with neither dominant.
- **`blue`** — Blue: True blue; highest frequency in Northern European populations, decreases southward.
- **`gray`** — Gray: Gray to gray-blue iris; lower stromal melanin than blue.
- **`violet`** — Violet: Rare; very low melanin with red light scattering combined with blue stroma.
- **`heterochromia`** — Heterochromia: Two different iris colors — either between eyes (heterochromia iridis) or within one iris (sectoral heterochromia).
- **`unclear`** — Unclear: Lighting, image quality, or angle prevents reliable iris-color assessment.

## `eye_shape` — Eye shape

**Type:** categorical · **Scale:** eye_shape_qualitative

**Citation:** Aligned with oculoplastic-surgery descriptors and aesthetic-anatomy literature (McCord CD Jr, Codner MA — Eyelid and Periorbital Surgery, 2nd Edition, 2016).

Overall shape of the visible eye, considering the silhouette of the upper and lower lid margins together. Independent dimension from eyelid_crease_type and epicanthic_fold, which capture finer morphological variation.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

### Valid values

- **`almond`** — Almond: Slightly elongated horizontal axis; mild taper at lateral and medial canthi. Considered the aesthetic reference shape.
- **`round`** — Round: Vertical and horizontal axes approximately equal; minimal canthal taper. Visible sclera above and below the iris.
- **`hooded`** — Hooded: Upper lid skin descends over the lid crease, partially or fully covering the upper lid platform. Often associated with periorbital aging but can be constitutional.
- **`monolid`** — Monolid (no visible crease): Smooth upper lid with no visible supratarsal crease. Common in East Asian populations; associated with single eyelid morphology.
- **`deep_set`** — Deep-set: Eye sits deep within the orbital socket; pronounced shadow above the upper lid. Brow ridge typically prominent.
- **`protruding`** — Protruding: Eye sits forward of the orbital socket; sclera visible around the entire iris circumference. Constitutional or proptotic.
- **`downturned`** — Downturned: Lateral canthus sits below the medial canthus; outer corner droops downward.
- **`upturned`** — Upturned: Lateral canthus sits above the medial canthus; outer corner angles upward. Common in East Asian populations and as an aging-related lid laxity sign.
- **`asymmetric`** — Asymmetric: Notable left-right shape difference as the dominant feature.

## `eyelid_crease_type` — Upper eyelid crease type

**Type:** categorical · **Scale:** mccurdy_chen_eyelid_crease

**Citation:** McCurdy JA Jr (2005). Cosmetic surgery of the Asian face. Thieme. Chen WP (2007). Asian Blepharoplasty and the Eyelid Crease. Butterworth-Heinemann.

Morphology of the upper eyelid supratarsal crease. The single most ethnically-variant periocular dimension. The Asian-ophthalmology / Asian-blepharoplasty literature provides the canonical classification system, distinguishing several functional and aesthetic patterns.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

> Best assessed when subject is looking straight ahead with relaxed brow; raised brow can artificially expose creases that aren't typically visible.

### Valid values

- **`single_no_crease`** — Single eyelid (monolid, no crease): No visible supratarsal crease; smooth upper lid skin. Approximately 50% of East Asian populations.
- **`double_low`** — Double, low (~3-5mm above lash line): Crease present but sits low on the lid, close to the lash line. Common in East Asian populations with double lids.
- **`double_medium`** — Double, medium (~6-9mm): Mid-position crease; common reference range for European-population eyelids.
- **`double_high`** — Double, high (>9mm): High crease position; substantial visible upper lid platform between lash line and crease.
- **`partial_incomplete`** — Partial / incomplete: Crease present medially but fades or disappears laterally — or vice versa.
- **`multiple_crease`** — Multiple creases: Two or more visible creases on the same lid; commonly age-related but can be constitutional.
- **`asymmetric`** — Asymmetric (single one side, double other): One eye is single and the other double — common variation, particularly in East Asian populations.

## `epicanthic_fold` — Epicanthic fold

**Type:** categorical · **Scale:** duke_elder_epicanthus_classification

**Citation:** Duke-Elder S (1964). System of Ophthalmology, Volume III. CV Mosby. The classical four-type Duke-Elder classification (tarsalis, palpebralis, supraciliaris, inversus) remains the standard ophthalmologic vocabulary.

Presence and morphology of the epicanthic fold — the skin fold of the upper eyelid that may cover the medial canthus. Significant ethnic variation; high prevalence in East Asian, Central Asian, and indigenous American populations.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

### Valid values

- **`absent`** — Absent: No epicanthic fold; medial canthus clearly visible.
- **`epicanthus_tarsalis`** — Tarsalis: Fold begins at the upper lid skin and inserts on the lower lid, covering the medial canthus. The most common epicanthic-fold variant in East Asian populations.
- **`epicanthus_palpebralis`** — Palpebralis: Fold extends from the upper to the lower lid, covering the medial canthus more symmetrically.
- **`epicanthus_supraciliaris`** — Supraciliaris: Fold originates at the eyebrow region and continues down to the lacrimal region. Less common; more characteristic of some Inuit and indigenous American populations.
- **`epicanthus_inversus`** — Inversus: Fold begins at the lower lid and extends upward; partial coverage of the medial canthus from below. Often associated with telecanthus / blepharophimosis syndrome.
- **`partial_residual`** — Partial / residual: Subtle fold residue; medial canthus partially obscured but not fully covered. Can be developmental remnant or post-blepharoplasty result.

## `palpebral_fissure_slant` — Palpebral fissure slant

**Type:** categorical · **Scale:** fissure_axis_qualitative

**Citation:** Farkas LG (1994). Anthropometry of the Head and Face, 2nd Edition. Reference: palpebral fissure axis approximately 10° upslant from horizontal in the European-population aesthetic norm.

Angle of the palpebral fissure axis (line from medial to lateral canthus) relative to horizontal. Significant ethnic variation; East Asian populations average steeper upslant than European populations.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

> Best assessed from a directly-frontal photograph with neutral head posture; head-tilt artifacts can be misread as slant.

### Valid values

- **`horizontal`** — Horizontal: Lateral canthus at the same level as medial canthus; axis approximately 0°.
- **`slight_upslant`** — Slight upslant: Lateral canthus slightly higher than medial; ~5-10° above horizontal. Within the European aesthetic reference range.
- **`marked_upslant`** — Marked upslant: Lateral canthus substantially higher than medial; >10° above horizontal. Common in East Asian populations.
- **`slight_downslant`** — Slight downslant: Lateral canthus slightly below medial; visible fatigue or aging appearance.
- **`marked_downslant`** — Marked downslant: Lateral canthus substantially below medial. Associated with genetic syndromes or significant lid laxity.

## `palpebral_fissure_length` — Palpebral fissure length

**Type:** ordinal · **Scale:** palpebral_fissure_length_qualitative

**Citation:** Farkas LG (1994). Anthropometry of the Head and Face, 2nd Edition. Reference: en-ex (medial-canthus to lateral-canthus distance) approximately 28-32mm in adult European-population norms.

Length of the palpebral fissure (medial canthus to lateral canthus), expressed proportionally relative to intercanthal distance.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

### Valid values

- **`short`** — Short: Fissure length less than intercanthal distance; small visible eye.
- **`normal`** — Normal: Fissure length approximately equal to intercanthal distance.
- **`long`** — Long: Fissure length greater than intercanthal distance; large visible eye.

## `intercanthal_distance` — Intercanthal distance

**Type:** ordinal · **Scale:** intercanthal_distance_qualitative

**Citation:** Farkas LG (1994). Anthropometry of the Head and Face, 2nd Edition. Reference: en-en (medial-to-medial canthus distance) approximately 30-34mm in adult European-population norms; relative reference is en-en ≈ palpebral fissure length.

Distance between the medial canthi, expressed proportionally relative to palpebral fissure length. Captures telecanthus (wide-set eyes) at one extreme.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

### Valid values

- **`narrow`** — Narrow (close-set): Intercanthal distance less than approximately 90% of palpebral fissure length.
- **`normal`** — Normal: Intercanthal distance approximately equal to palpebral fissure length (Farkas European-population norm).
- **`wide_telecanthus`** — Wide (telecanthus): Intercanthal distance substantially greater than palpebral fissure length. Constitutional in some populations; pathologic in genetic syndromes.

## `brow_ridge_prominence` — Brow ridge (supraorbital ridge) prominence

**Type:** ordinal · **Scale:** supraorbital_ridge_qualitative

**Citation:** Aligned with craniofacial-anthropology descriptors of supraorbital torus development. Sex-correlated (more prominent in adult males) and with population-level variation.

Prominence of the supraorbital bony ridge above the eyes. Sex-correlated and with population-level variation.

**Observability:** `from_photograph: medium` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

> Best assessed from lateral or three-quarter view; frontal view alone can underestimate prominence.

### Valid values

- **`flat`** — Flat: No visible bony prominence above the orbital rim; smooth transition between orbit and forehead.
- **`moderate`** — Moderate: Visible but not pronounced supraorbital ridge.
- **`prominent`** — Prominent: Strongly visible supraorbital torus; deep-set appearance to the eyes.

## `eyebrow_density` — Eyebrow density

**Type:** ordinal · **Scale:** eyebrow_density_qualitative

**Citation:** Aligned with cosmetic-and-dermatology descriptors of brow density; no single canonical scale.

Density of native eyebrow hair, untreated. Cosmetic shaping (waxing, threading, microblading, tattooing) affects observed density and should reduce confidence.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

> Cosmetic shaping confounds native-density assessment. If brow shows clear evidence of grooming, observation should reflect the visible state and confidence should reflect the uncertainty about native density.

### Valid values

- **`sparse`** — Sparse: Few visible hairs; gaps within the brow body.
- **`thin`** — Thin: Brow visible but light density throughout.
- **`normal`** — Normal: Average density.
- **`dense`** — Dense: Thick, full brow with little visible skin within the brow body.
- **`very_dense`** — Very dense: Brow extends into bushy or unibrow territory; high terminal-hair count.

## `eyebrow_shape` — Eyebrow shape

**Type:** categorical · **Scale:** eyebrow_shape_qualitative

**Citation:** Cosmetic-industry shape vocabulary aligned with brow-aesthetics literature (Westmore brow-mapping, etc.).

Overall arch and shape of the eyebrow as visible in the photograph.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

> Cosmetic shaping affects observation; flag when shaping is visible.

### Valid values

- **`straight`** — Straight: Minimal arch; nearly horizontal brow line.
- **`soft_arch`** — Soft arch: Gentle, gradual arch; arch peak in the lateral two-thirds.
- **`high_arch`** — High arch: Pronounced arch with a clear peak; stronger lateral-tail descent.
- **`rounded`** — Rounded: Curved brow without a distinct arch peak; smooth crescent shape.
- **`flat_descending`** — Flat / descending: No arch; brow descends laterally toward the temple.
- **`asymmetric`** — Asymmetric: Notable left-right brow shape difference.

## `tear_trough_dark_circles` — Tear-trough / infraorbital darkness

**Type:** ordinal · **Scale:** infraorbital_darkness_qualitative

**Citation:** Aligned with the Hirmand classification of tear-trough deformity (Hirmand H — Plastic and Reconstructive Surgery, 2010, 125(2)) for visible severity.

Visible darkness or hollowness in the infraorbital region (under-eye). Constitutional in some ethnic groups (notably South Asian, Mediterranean populations); also age-related and lifestyle-related.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

> Lighting affects assessment substantially — overhead lighting can artificially deepen tear-trough shadows.

### Valid values

- **`absent`** — Absent: No discernible darkness or hollowness.
- **`mild`** — Mild: Subtle pigmentation or shallow tear-trough; not the dominant feature of the periorbital region.
- **`moderate`** — Moderate: Clearly visible darkness or hollowness; periorbital region appears tired.
- **`marked`** — Marked: Pronounced infraorbital pigmentation or deep tear-trough; significant aesthetic concern in cosmetic-medicine context.

## `eye_protrusion` — Eye protrusion (anteroposterior)

**Type:** categorical · **Scale:** eye_protrusion_qualitative

**Citation:** Aligned with ophthalmologic exophthalmometry descriptors (Hertel exophthalmometry); qualitative-bucket equivalent for visual assessment.

Anteroposterior position of the globe relative to the orbital rim. Constitutional variation; pathologic at the extremes (proptosis / enophthalmos).

**Observability:** `from_photograph: medium` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

> Best assessed from lateral view. Differential diagnosis between constitutional prominence and pathologic proptosis (e.g. thyroid eye disease) is outside the scope of phenotype observation.

### Valid values

- **`recessed`** — Recessed (enophthalmic-leaning): Globe sits posterior to the orbital rim; deep-set appearance.
- **`normal`** — Normal: Globe at typical orbital rim position.
- **`prominent`** — Prominent (proptotic-leaning): Globe sits anterior to the orbital rim; visible sclera around the iris circumference.

## References

- Farkas LG (1994). Anthropometry of the Head and Face, 2nd Edition. Raven Press.
- Duke-Elder S (1964). System of Ophthalmology, Volume III. CV Mosby.
- Sturm RA, Larsson M (2009). Genetics of human iris colour and patterns. Pigment Cell & Melanoma Research, 22(5).
- McCurdy JA Jr (2005). Cosmetic surgery of the Asian face. Thieme.
- Chen WP (2007). Asian Blepharoplasty and the Eyelid Crease. Butterworth-Heinemann.
- McCord CD Jr, Codner MA (2016). Eyelid and Periorbital Surgery, 2nd Edition. Quality Medical Publishing.
- Hirmand H (2010). Anatomy and nonsurgical correction of the tear trough deformity. Plastic and Reconstructive Surgery, 125(2).
- Putterman AM (1999). Cosmetic Oculoplastic Surgery, 3rd Edition. WB Saunders.

