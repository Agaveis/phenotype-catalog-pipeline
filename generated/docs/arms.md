# Arms — phenotype taxonomy

<!-- Auto-generated from vocabularies/arms.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs -->

> **Atlas category:** `arms` · **Version:** 1.0.0 · **License:** CC-BY-4.0
> **UBERON:** `UBERON:0001460` · **FMA:** `FMA:7184`

Upper-extremity morphology: arm length, upper arm and forearm circumference, biceps definition, brachioradialis visibility, cubital alignment. Splits the original 'Limb' atlas category into separate arms.json + legs.json files for finer-grained morphology. Dimensions are drawn from sports-medicine and anthropometry literature.

## Dimensions overview

| Dimension | Type | Scale | Photo-observable | Values |
|---|---|---|---|---|
| `arm_length_proportional` | ordinal | arm_length_qualitative | medium | 3 |
| `upper_arm_circumference` | ordinal | upper_arm_girth_qualitative | high | 4 |
| `biceps_definition` | ordinal | biceps_definition_qualitative | high | 4 |
| `forearm_circumference` | ordinal | forearm_girth_qualitative | high | 4 |
| `brachioradialis_visibility` | ordinal | brachioradialis_qualitative | medium | 3 |
| `cubital_carrying_angle` | categorical | carrying_angle_qualitative | medium | 4 |
| `shoulder_to_arm_proportion` | categorical | shoulder_arm_proportion_qualitative | high | 3 |

## `arm_length_proportional` — Arm length (proportional)

**Type:** ordinal · **Scale:** arm_length_qualitative

**Citation:** Aligned with anthropometry descriptors of upper-extremity proportional length relative to torso.

Total arm length (acromion to fingertip) relative to torso length.

**Observability:** `from_photograph: medium` · `requires_unclothed: false` · `minimum_visible_extent: full_body`

### Valid values

- **`short`** — Short: Arms appear short relative to torso.
- **`balanced`** — Balanced: Standard proportional arm length.
- **`long`** — Long: Arms appear long relative to torso.

## `upper_arm_circumference` — Upper arm circumference (relative)

**Type:** ordinal · **Scale:** upper_arm_girth_qualitative

**Citation:** Aligned with anthropometry descriptors of mid-bicep circumference relative to forearm.

Upper arm girth at mid-bicep, qualitative bucket.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: torso`

### Valid values

- **`slender`** — Slender
- **`average`** — Average
- **`muscular`** — Muscular
- **`very_muscular`** — Very muscular

## `biceps_definition` — Biceps definition

**Type:** ordinal · **Scale:** biceps_definition_qualitative

**Citation:** Aligned with sports-medicine descriptors of brachial musculature visibility.

Visible biceps definition (separation between biceps brachii and surrounding tissue).

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: torso`

### Valid values

- **`minimal`** — Minimal: Biceps not visible as a discrete landmark.
- **`moderate`** — Moderate: Biceps visible under tension only.
- **`defined`** — Defined: Biceps clearly visible at rest with separation from triceps.
- **`highly_developed`** — Highly developed: Pronounced biceps mass with peak definition.

## `forearm_circumference` — Forearm circumference (relative)

**Type:** ordinal · **Scale:** forearm_girth_qualitative

**Citation:** Aligned with anthropometry descriptors of forearm girth.

Forearm girth at maximum proximal circumference.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: torso`

### Valid values

- **`slender`** — Slender
- **`average`** — Average
- **`muscular`** — Muscular
- **`very_muscular`** — Very muscular

## `brachioradialis_visibility` — Brachioradialis visibility

**Type:** ordinal · **Scale:** brachioradialis_qualitative

**Citation:** Surface-anatomy descriptor aligned with sports-medicine and aesthetic-anatomy literature.

Visibility of the brachioradialis muscle as a distinct surface landmark on the lateral forearm.

**Observability:** `from_photograph: medium` · `requires_unclothed: false` · `minimum_visible_extent: torso`

### Valid values

- **`not_visible`** — Not visible
- **`subtle`** — Subtle: Visible under tension only.
- **`defined`** — Defined: Clearly visible at rest.

## `cubital_carrying_angle` — Cubital (carrying) angle

**Type:** categorical · **Scale:** carrying_angle_qualitative

**Citation:** Aligned with orthopedic descriptors of the elbow carrying angle. Reference: typical female ~10-15° valgus, male ~5-10° valgus.

Angle between the upper arm and forearm at the elbow when the arm is extended and supinated. Sex-dimorphic and individually variable.

**Observability:** `from_photograph: medium` · `requires_unclothed: false` · `minimum_visible_extent: torso`

### Valid values

- **`minimal_straight`** — Minimal / straight: Arm extends nearly straight; carrying angle <5°.
- **`normal_male_range`** — Male-typical range (~5-10°)
- **`normal_female_range`** — Female-typical range (~10-15°)
- **`pronounced`** — Pronounced (>15°): Substantial valgus; cubitus valgus when extreme.

## `shoulder_to_arm_proportion` — Shoulder-to-arm proportion

**Type:** categorical · **Scale:** shoulder_arm_proportion_qualitative

**Citation:** Aligned with artistic-anatomy proportional descriptors.

Relative dominance of shoulder breadth versus arm girth — captures the V-shape silhouette differently from torso.json's shoulder_breadth dimension.

**Observability:** `from_photograph: high` · `requires_unclothed: false` · `minimum_visible_extent: torso`

### Valid values

- **`shoulder_dominant`** — Shoulder-dominant: Shoulders pronounced relative to arm girth.
- **`balanced`** — Balanced
- **`arm_dominant`** — Arm-dominant: Arm girth pronounced relative to shoulder breadth.

## References

- Standring S (ed.) (2020). Gray's Anatomy: The Anatomical Basis of Clinical Practice, 42nd Edition. Elsevier.
- Paraskevas G, Papadopoulos A, Papaziogas B, Spanidou S, Argiriadou H, Gigis J (2004). Study of the carrying angle of the human elbow joint in full extension. Surgical and Radiologic Anatomy, 26(1).

