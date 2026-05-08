# Head hair — phenotype taxonomy

<!-- Auto-generated from vocabularies/head-hair.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs -->

> **Atlas category:** `head-hair` · **Version:** 1.0.0 · **License:** CC-BY-4.0
> **UBERON:** `UBERON:0001037` · **FMA:** `FMA:54317`

Scalp hair morphology: color, texture, pattern, density, hairline shape, and balding patterns. Expands the existing 3-field analysis schema (color/texture/pattern) into a comprehensive trichology-grounded vocabulary. The Andre Walker texture classification (1A-4C) is the de-facto reference for hair texture across populations; the Hamilton-Norwood (male) and Ludwig (female) scales are the canonical balding-pattern references.

## Dimensions overview

| Dimension | Type | Scale | Photo-observable | Values |
|---|---|---|---|---|
| `hair_color` | categorical | hair_color_qualitative | high | 12 |
| `hair_texture_walker` | categorical | andre_walker_1990s | high | 13 |
| `hair_density` | ordinal | hair_density_qualitative | high | 5 |
| `hairline_shape` | categorical | hairline_shape_qualitative | high | 5 |
| `hairline_position` | ordinal | hairline_position_qualitative | high | 4 |
| `balding_pattern_male` | ordinal | hamilton_norwood | high | 9 |
| `balding_pattern_female` | ordinal | ludwig_classification | high | 5 |
| `graying_pattern` | categorical | graying_pattern_qualitative | high | 7 |

## `hair_color` — Hair color

**Type:** categorical · **Scale:** hair_color_qualitative

**Citation:** Aligned with trichology and pigment-genetics literature (MC1R / TYR / OCA polymorphism studies).

Predominant natural hair color, where determinable. Visibly dyed hair should be flagged via grooming-state metadata.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

> Lighting affects perceived color substantially. Confidence should reflect lighting quality.

### Valid values

- **`black`** — Black: Very dark hair appearing black under normal lighting; high eumelanin.
- **`dark_brown`** — Dark brown: Distinctly brown but darker than medium-brown.
- **`medium_brown`** — Medium brown: Standard brown hair.
- **`light_brown`** — Light brown: Light-brown to caramel range.
- **`blonde_dark`** — Dark blonde: Dark blonde / dirty blonde.
- **`blonde_medium`** — Medium blonde: Standard blonde.
- **`blonde_platinum`** — Platinum / very light blonde: Very light blonde, often near-white. Often dyed in adults.
- **`red_auburn`** — Red / auburn: Red, auburn, or copper. High pheomelanin; correlated with MC1R variants.
- **`gray`** — Gray: Visibly graying hair, mixed pigmented and unpigmented.
- **`white`** — White: Predominantly unpigmented hair.
- **`mixed_unique`** — Mixed / unique: Multiple distinct natural colors (e.g. natural ombre with sun-lightened tips).
- **`dyed_visible`** — Dyed (native color uncertain): Visible dye job; native color cannot be reliably inferred.

## `hair_texture_walker` — Hair texture (Andre Walker)

**Type:** categorical · **Scale:** andre_walker_1990s

**Citation:** The Andre Walker hair-typing system (developed in the 1990s for Oprah Winfrey's stylist and subsequently adopted broadly in trichology and beauty-industry literature).

Andre Walker hair-texture classification covering the spectrum from straight (Type 1) to coily (Type 4), with subdivisions A-C within each numbered type.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

### Valid values

- **`1A_straight_fine`** — 1A — straight, fine: Stick-straight, very fine; minimal body.
- **`1B_straight_medium`** — 1B — straight, medium: Straight with medium body.
- **`1C_straight_coarse`** — 1C — straight, coarse: Straight, thick, coarse strands.
- **`2A_wavy_fine`** — 2A — wavy, fine: Loose S-waves; fine texture.
- **`2B_wavy_medium`** — 2B — wavy, medium: Defined S-waves; medium texture.
- **`2C_wavy_coarse`** — 2C — wavy, coarse: Strong S-waves transitioning to ringlets; coarse.
- **`3A_curly_loose`** — 3A — curly, loose ringlets: Loose, soft ringlets; well-defined curl.
- **`3B_curly_springy`** — 3B — curly, springy: Tighter, springy curls; corkscrew shape.
- **`3C_curly_tight`** — 3C — curly, tight corkscrew: Tight corkscrew curls; densely packed.
- **`4A_coily_S`** — 4A — coily, S-pattern: Defined small S-pattern coils.
- **`4B_coily_Z`** — 4B — coily, Z-pattern: Sharp angular Z-pattern coils.
- **`4C_coily_tight`** — 4C — coily, tightly packed: Tightly packed coils with little visible pattern definition; high shrinkage.
- **`covered_unclear`** — Covered / unclear: Hair covered by head covering or styling that prevents texture assessment.

## `hair_density` — Hair density

**Type:** ordinal · **Scale:** hair_density_qualitative

**Citation:** Aligned with trichology descriptors of follicular density (typical 200-300 follicles/cm² scalp).

Density of native scalp hair when ungroomed.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

> Styling affects perceived density; volumizing products and teasing can mask sparse density.

### Valid values

- **`sparse`** — Sparse: Visible scalp through hair throughout most of the head.
- **`thin`** — Thin: Some visible scalp; reduced density.
- **`average`** — Average: Standard density; minimal visible scalp.
- **`thick`** — Thick: Above-average density.
- **`very_thick`** — Very thick: Pronounced density; voluminous appearance.

## `hairline_shape` — Hairline shape

**Type:** categorical · **Scale:** hairline_shape_qualitative

**Citation:** Aligned with hair-transplant-surgery descriptors of hairline morphology.

Shape of the anterior hairline.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

> Hairstyle affects visibility; bangs or fringe can fully obscure hairline.

### Valid values

- **`straight`** — Straight: Approximately horizontal hairline across the forehead.
- **`rounded`** — Rounded: Smooth curve hairline; no peaks.
- **`widows_peak`** — Widow's peak: V-shaped point at the midline of the hairline.
- **`m_shape_temporal_recession`** — M-shape (temporal recession): Bilateral temporal recession creating an M-shape; common male-pattern feature.
- **`uneven_asymmetric`** — Uneven / asymmetric: Notable left-right asymmetry.

## `hairline_position` — Hairline position (anterior)

**Type:** ordinal · **Scale:** hairline_position_qualitative

**Citation:** Aligned with hair-transplant-surgery descriptors of hairline-height assessment.

Vertical position of the anterior hairline.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

### Valid values

- **`low`** — Low: Hairline sits low on the forehead; reduced visible forehead.
- **`average`** — Average: Standard hairline position.
- **`high`** — High: Hairline sits high; tall visible forehead.
- **`receded`** — Receded: Recession beyond high-normal; balding-pattern signs visible.

## `balding_pattern_male` — Balding pattern (Hamilton-Norwood, male)

**Type:** ordinal · **Scale:** hamilton_norwood

**Citation:** Hamilton JB (1951). Patterned loss of hair in man: types and incidence. Annals of the New York Academy of Sciences, 53. Norwood OT (1975). Male pattern baldness: classification and incidence. Southern Medical Journal, 68(11).

Hamilton-Norwood classification of male-pattern hair loss. Applies primarily to subjects with apparent male physiognomy.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

### Valid values

- **`type_I_no_loss`** — Type I — no recession: No hair loss visible.
- **`type_II_minimal_temporal`** — Type II — minimal temporal recession
- **`type_III_moderate_temporal`** — Type III — moderate temporal recession: Earliest stage commonly classified as balding.
- **`type_III_vertex`** — Type III vertex — vertex thinning
- **`type_IV_advanced_temporal_vertex`** — Type IV — advanced temporal recession + vertex thinning
- **`type_V_loss_meeting`** — Type V — frontal and vertex loss approaching
- **`type_VI_loss_merged`** — Type VI — frontal and vertex loss merged
- **`type_VII_advanced`** — Type VII — most advanced: Only horseshoe band of hair remaining around sides and back.
- **`not_applicable_or_female`** — Not applicable: Subject not in male-pattern population, or no balding.

## `balding_pattern_female` — Balding pattern (Ludwig, female)

**Type:** ordinal · **Scale:** ludwig_classification

**Citation:** Ludwig E (1977). Classification of the types of androgenetic alopecia (common baldness) occurring in the female sex. British Journal of Dermatology, 97(3): 247-254.

Ludwig classification of female-pattern hair loss. Applies primarily to subjects with apparent female physiognomy.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

### Valid values

- **`no_loss`** — No loss
- **`ludwig_I`** — Ludwig I — perceptible thinning of the crown: Anterior hairline preserved.
- **`ludwig_II`** — Ludwig II — pronounced central thinning: Crown thinning pronounced; anterior hairline preserved.
- **`ludwig_III`** — Ludwig III — full central baldness: Crown fully bald; anterior hairline preserved.
- **`not_applicable_or_male`** — Not applicable: Subject not in female-pattern population, or no balding.

## `graying_pattern` — Graying pattern

**Type:** categorical · **Scale:** graying_pattern_qualitative

**Citation:** Aligned with descriptors used in trichology and pigment-aging literature.

Pattern and extent of visible gray / white hair.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: head_only`

### Valid values

- **`none`** — None: No visible gray hairs.
- **`scattered_few`** — Scattered few: A few isolated gray hairs visible.
- **`temple_concentrated`** — Temple-concentrated: Graying concentrated at temples; common early-graying pattern.
- **`salt_and_pepper`** — Salt and pepper: Mixed gray and pigmented hair throughout; often ~50/50.
- **`predominantly_gray`** — Predominantly gray
- **`fully_gray_white`** — Fully gray / white
- **`dyed_likely`** — Dyed (graying suggested): Visible dye job that likely covers gray; native graying state not directly observable.

## References

- Hamilton JB (1951). Patterned loss of hair in man: types and incidence. Annals of the New York Academy of Sciences, 53.
- Norwood OT (1975). Male pattern baldness: classification and incidence. Southern Medical Journal, 68(11).
- Ludwig E (1977). Classification of the types of androgenetic alopecia (common baldness) occurring in the female sex. British Journal of Dermatology, 97(3): 247-254.
- Walker A (1997). Andre Talks Hair. Simon & Schuster.
- Bouhanna P (2014). Topographic phototrichogram for follicular-unit classification. Annales de Dermatologie et de Vénéréologie, 141(11).

