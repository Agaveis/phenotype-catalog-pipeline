# Head hair observation prompt

<!-- Auto-generated from vocabularies/head-hair.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs -->

Atlas category: `head-hair` · Version: 1.0.0
UBERON: `UBERON:0001037`

## Instruction

Assess the following head hair-related phenotype dimensions from the photograph. Return one value per dimension, drawn only from the listed valid buckets. If a dimension cannot be assessed (anatomy not visible, image quality too poor, framing too narrow), return `null` for that dimension. Do not guess — `null` is preferred over an unreliable bucket assignment.

For each dimension, also return a per-dimension confidence score (0.0–1.0) reflecting how reliably you could assess that specific dimension in this photograph.

Return a single JSON object, no prose, with shape:

```json
{
  "hair_color": "<one of the valid buckets, or null>",
  "hair_color_confidence": "<0.0-1.0, or null>",
  "hair_texture_walker": "<one of the valid buckets, or null>",
  "hair_texture_walker_confidence": "<0.0-1.0, or null>",
  "hair_density": "<one of the valid buckets, or null>",
  "hair_density_confidence": "<0.0-1.0, or null>",
  "hairline_shape": "<one of the valid buckets, or null>",
  "hairline_shape_confidence": "<0.0-1.0, or null>",
  "hairline_position": "<one of the valid buckets, or null>",
  "hairline_position_confidence": "<0.0-1.0, or null>",
  "balding_pattern_male": "<one of the valid buckets, or null>",
  "balding_pattern_male_confidence": "<0.0-1.0, or null>",
  "balding_pattern_female": "<one of the valid buckets, or null>",
  "balding_pattern_female_confidence": "<0.0-1.0, or null>",
  "graying_pattern": "<one of the valid buckets, or null>",
  "graying_pattern_confidence": "<0.0-1.0, or null>"
}
```

## Dimensions

### `hair_color`

**Type:** categorical · **Scale:** hair_color_qualitative · **Min visible extent:** head_only

> Lighting affects perceived color substantially. Confidence should reflect lighting quality.

Valid values:

- `black` — *Black*: Very dark hair appearing black under normal lighting; high eumelanin.
- `dark_brown` — *Dark brown*: Distinctly brown but darker than medium-brown.
- `medium_brown` — *Medium brown*: Standard brown hair.
- `light_brown` — *Light brown*: Light-brown to caramel range.
- `blonde_dark` — *Dark blonde*: Dark blonde / dirty blonde.
- `blonde_medium` — *Medium blonde*: Standard blonde.
- `blonde_platinum` — *Platinum / very light blonde*: Very light blonde, often near-white. Often dyed in adults.
- `red_auburn` — *Red / auburn*: Red, auburn, or copper. High pheomelanin; correlated with MC1R variants.
- `gray` — *Gray*: Visibly graying hair, mixed pigmented and unpigmented.
- `white` — *White*: Predominantly unpigmented hair.
- `mixed_unique` — *Mixed / unique*: Multiple distinct natural colors (e.g. natural ombre with sun-lightened tips).
- `dyed_visible` — *Dyed (native color uncertain)*: Visible dye job; native color cannot be reliably inferred.

Reference: Aligned with trichology and pigment-genetics literature (MC1R / TYR / OCA polymorphism studies).

### `hair_texture_walker`

**Type:** categorical · **Scale:** andre_walker_1990s · **Min visible extent:** head_only

Valid values:

- `1A_straight_fine` — *1A — straight, fine*: Stick-straight, very fine; minimal body.
- `1B_straight_medium` — *1B — straight, medium*: Straight with medium body.
- `1C_straight_coarse` — *1C — straight, coarse*: Straight, thick, coarse strands.
- `2A_wavy_fine` — *2A — wavy, fine*: Loose S-waves; fine texture.
- `2B_wavy_medium` — *2B — wavy, medium*: Defined S-waves; medium texture.
- `2C_wavy_coarse` — *2C — wavy, coarse*: Strong S-waves transitioning to ringlets; coarse.
- `3A_curly_loose` — *3A — curly, loose ringlets*: Loose, soft ringlets; well-defined curl.
- `3B_curly_springy` — *3B — curly, springy*: Tighter, springy curls; corkscrew shape.
- `3C_curly_tight` — *3C — curly, tight corkscrew*: Tight corkscrew curls; densely packed.
- `4A_coily_S` — *4A — coily, S-pattern*: Defined small S-pattern coils.
- `4B_coily_Z` — *4B — coily, Z-pattern*: Sharp angular Z-pattern coils.
- `4C_coily_tight` — *4C — coily, tightly packed*: Tightly packed coils with little visible pattern definition; high shrinkage.
- `covered_unclear` — *Covered / unclear*: Hair covered by head covering or styling that prevents texture assessment.

Reference: The Andre Walker hair-typing system (developed in the 1990s for Oprah Winfrey's stylist and subsequently adopted broadly in trichology and beauty-industry literature).

### `hair_density`

**Type:** ordinal · **Scale:** hair_density_qualitative · **Min visible extent:** head_only

> Styling affects perceived density; volumizing products and teasing can mask sparse density.

Valid values:

- `sparse` — *Sparse*: Visible scalp through hair throughout most of the head.
- `thin` — *Thin*: Some visible scalp; reduced density.
- `average` — *Average*: Standard density; minimal visible scalp.
- `thick` — *Thick*: Above-average density.
- `very_thick` — *Very thick*: Pronounced density; voluminous appearance.

Reference: Aligned with trichology descriptors of follicular density (typical 200-300 follicles/cm² scalp).

### `hairline_shape`

**Type:** categorical · **Scale:** hairline_shape_qualitative · **Min visible extent:** head_only

> Hairstyle affects visibility; bangs or fringe can fully obscure hairline.

Valid values:

- `straight` — *Straight*: Approximately horizontal hairline across the forehead.
- `rounded` — *Rounded*: Smooth curve hairline; no peaks.
- `widows_peak` — *Widow's peak*: V-shaped point at the midline of the hairline.
- `m_shape_temporal_recession` — *M-shape (temporal recession)*: Bilateral temporal recession creating an M-shape; common male-pattern feature.
- `uneven_asymmetric` — *Uneven / asymmetric*: Notable left-right asymmetry.

Reference: Aligned with hair-transplant-surgery descriptors of hairline morphology.

### `hairline_position`

**Type:** ordinal · **Scale:** hairline_position_qualitative · **Min visible extent:** head_only

Valid values:

- `low` — *Low*: Hairline sits low on the forehead; reduced visible forehead.
- `average` — *Average*: Standard hairline position.
- `high` — *High*: Hairline sits high; tall visible forehead.
- `receded` — *Receded*: Recession beyond high-normal; balding-pattern signs visible.

Reference: Aligned with hair-transplant-surgery descriptors of hairline-height assessment.

### `balding_pattern_male`

**Type:** ordinal · **Scale:** hamilton_norwood · **Min visible extent:** head_only

Valid values:

- `type_I_no_loss` — *Type I — no recession*: No hair loss visible.
- `type_II_minimal_temporal` — *Type II — minimal temporal recession*
- `type_III_moderate_temporal` — *Type III — moderate temporal recession*: Earliest stage commonly classified as balding.
- `type_III_vertex` — *Type III vertex — vertex thinning*
- `type_IV_advanced_temporal_vertex` — *Type IV — advanced temporal recession + vertex thinning*
- `type_V_loss_meeting` — *Type V — frontal and vertex loss approaching*
- `type_VI_loss_merged` — *Type VI — frontal and vertex loss merged*
- `type_VII_advanced` — *Type VII — most advanced*: Only horseshoe band of hair remaining around sides and back.
- `not_applicable_or_female` — *Not applicable*: Subject not in male-pattern population, or no balding.

Reference: Hamilton JB (1951). Patterned loss of hair in man: types and incidence. Annals of the New York Academy of Sciences, 53. Norwood OT (1975). Male pattern baldness: classification and incidence. Southern Medical Journal, 68(11).

### `balding_pattern_female`

**Type:** ordinal · **Scale:** ludwig_classification · **Min visible extent:** head_only

Valid values:

- `no_loss` — *No loss*
- `ludwig_I` — *Ludwig I — perceptible thinning of the crown*: Anterior hairline preserved.
- `ludwig_II` — *Ludwig II — pronounced central thinning*: Crown thinning pronounced; anterior hairline preserved.
- `ludwig_III` — *Ludwig III — full central baldness*: Crown fully bald; anterior hairline preserved.
- `not_applicable_or_male` — *Not applicable*: Subject not in female-pattern population, or no balding.

Reference: Ludwig E (1977). Classification of the types of androgenetic alopecia (common baldness) occurring in the female sex. British Journal of Dermatology, 97(3): 247-254.

### `graying_pattern`

**Type:** categorical · **Scale:** graying_pattern_qualitative · **Min visible extent:** head_only

Valid values:

- `none` — *None*: No visible gray hairs.
- `scattered_few` — *Scattered few*: A few isolated gray hairs visible.
- `temple_concentrated` — *Temple-concentrated*: Graying concentrated at temples; common early-graying pattern.
- `salt_and_pepper` — *Salt and pepper*: Mixed gray and pigmented hair throughout; often ~50/50.
- `predominantly_gray` — *Predominantly gray*
- `fully_gray_white` — *Fully gray / white*
- `dyed_likely` — *Dyed (graying suggested)*: Visible dye job that likely covers gray; native graying state not directly observable.

Reference: Aligned with descriptors used in trichology and pigment-aging literature.

