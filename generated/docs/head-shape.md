# Head shape — phenotype taxonomy

<!-- Auto-generated from vocabularies/head-shape.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs -->

> **Atlas category:** `head-shape` · **Version:** 1.0.0 · **License:** CC-BY-4.0
> **UBERON:** `UBERON:0000033` · **FMA:** `FMA:46688`

Cranial morphology dimensions visible from photograph: cephalic index (head shape from above), cranial profile in sagittal view, occipital morphology, head circumference proxy. **Important framing note:** these dimensions use contemporary craniofacial-anthropology vocabulary developed for clinical applications such as craniosynostosis screening and pediatric-orthotic assessment. They are explicitly **not** the discredited 19th-century racial-typology cranial measurements that conflated cephalic index with hierarchical population claims (Boas's own 1912 work showed cephalic index changes within a generation under different environments, undermining its use as a stable racial marker). Modern usage treats cephalic index as a developmental and clinical descriptor with substantial individual variation and meaningful but partial population-level differences. The dimensions below capture the photo-observable shape variation; users should resist any interpretation that maps directly onto historical racial categorizations.

## Dimensions overview

| Dimension | Type | Scale | Photo-observable | Values |
|---|---|---|---|---|
| `cephalic_index_category` | ordinal | cephalic_index_clinical | low | 5 |
| `occipital_profile` | categorical | occipital_qualitative | medium | 4 |
| `cranial_height` | ordinal | cranial_height_qualitative | medium | 3 |
| `head_circumference_qualitative` | ordinal | head_circumference_qualitative | low | 3 |

## `cephalic_index_category` — Cephalic index category

**Type:** ordinal · **Scale:** cephalic_index_clinical

**Citation:** Cephalic index = (maximum head breadth / maximum head length) × 100. Modern clinical use: van Vlimmeren LA et al. (2007). Effect of pediatric physical therapy on deformational plagiocephaly. Archives of Pediatric and Adolescent Medicine. Boas F (1912) demonstrated environmental variability in cephalic index that undermines its use as a stable population-classification marker; included here as a continuous developmental dimension with explicit framing.

Ratio of head breadth to head length, captured as ordinal buckets aligned with the standard clinical classification thresholds. Used in pediatric orthopedics for assessing positional plagiocephaly and brachycephaly, not as a population-classification tool.

**Observability:** `from_photograph: low` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

> Best assessed from a top-down view, which is rarely available in standard photographs. Frontal and lateral views allow only crude approximation. Hair volume substantially affects perceived width; assessment confidence should reflect this.

### Valid values

- **`dolichocephalic`** — Dolichocephalic (long): Cephalic index < ~76; head substantially longer than wide. Clinical context: scaphocephaly when severe in infants.
- **`mesocephalic`** — Mesocephalic (medium): Cephalic index ~76-81; balanced head shape.
- **`brachycephalic`** — Brachycephalic (short / wide): Cephalic index ~81-85; head substantially wider relative to length.
- **`hyperbrachycephalic`** — Hyperbrachycephalic: Cephalic index > ~85; pronounced width-to-length ratio. Clinical context: positional plagiocephaly in infants.
- **`unclear`** — Unclear: Hairstyle or framing prevents reliable head-shape assessment.

## `occipital_profile` — Occipital profile

**Type:** categorical · **Scale:** occipital_qualitative

**Citation:** Aligned with descriptors used in pediatric-craniofacial literature on occipital morphology.

Shape of the occipital (back-of-head) region in lateral view.

**Observability:** `from_photograph: medium` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

> Best assessed from lateral or three-quarter view; hair coverage substantially affects assessment.

### Valid values

- **`well_rounded`** — Well-rounded: Smooth posterior curve; pronounced occipital prominence.
- **`flat_brachycephalic`** — Flat: Reduced posterior projection; flatter occipital silhouette. Often correlated with brachycephalic cephalic index.
- **`occipital_bun`** — Occipital bun: Pronounced posterior projection of the occiput; visible bulge.
- **`asymmetric_plagiocephaly`** — Asymmetric (plagiocephalic): Notable left-right asymmetry of the occipital region.

## `cranial_height` — Cranial height (vertex prominence)

**Type:** ordinal · **Scale:** cranial_height_qualitative

**Citation:** Aligned with descriptors used in pediatric-orthotic and craniosynostosis literature.

Vertical height of the cranium from the supraorbital ridge to the vertex.

**Observability:** `from_photograph: medium` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

### Valid values

- **`low`** — Low: Reduced cranial height; vertex sits close to the level of the supraorbital ridge plus a small margin.
- **`average`** — Average: Standard cranial height.
- **`tall`** — Tall: Pronounced cranial height; vertex sits well above the supraorbital ridge. Associated with sagittal-suture craniosynostosis when extreme in infants; constitutional in adults.

## `head_circumference_qualitative` — Head circumference (qualitative)

**Type:** ordinal · **Scale:** head_circumference_qualitative

**Citation:** Aligned with the descriptors used in pediatric-growth-curve literature; reliable measurement requires a tape measure across the maximum circumference.

Overall head circumference relative to body proportions, captured qualitatively.

**Observability:** `from_photograph: low` · `requires_unclothed: false` · `minimum_visible_extent: full_body`

> Reliable assessment requires whole-body framing for proportional comparison; head-only photographs cannot resolve this dimension.

### Valid values

- **`small`** — Small: Head appears small relative to body; clinical microcephaly when extreme in infants.
- **`average`** — Average: Standard proportional head size.
- **`large`** — Large: Head appears large relative to body; clinical macrocephaly when extreme.

## References

- Boas F (1912). Changes in bodily form of descendants of immigrants. American Anthropologist, 14(3): 530-562.
- van Vlimmeren LA, van der Graaf Y, Boere-Boonekamp MM, L'Hoir MP, Helders PJ, Engelbert RH (2008). Effect of pediatric physical therapy on deformational plagiocephaly in children with positional preference: a randomized controlled trial. Archives of Pediatric and Adolescent Medicine, 162(8).
- Farkas LG (1994). Anthropometry of the Head and Face, 2nd Edition. Raven Press.
- Argenta LC, David LR, Wilson JA, Bell WO (1996). An increase in infant cranial deformity with supine sleeping position. Journal of Craniofacial Surgery, 7(1).

