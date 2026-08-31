# reliability/

Measured reliability studies for the controlled vocabularies in `../vocabularies/`.

Each study is a JSON file plus a section here. The per-dimension results are also
written into the vocabulary files themselves, under each dimension's
`reliability` key, citing the study by id.

## Why the results live in two places

A number in `vocabularies/eyes.json` is what a downstream consumer reads without
leaving the schema. The file here is what makes the number checkable: it carries
the raw counts the summary was computed from, so anyone can recompute kappa, use
a different chance correction, or pool the dimensions differently without paying
to re-run the model.

---

## test-retest-2026-08-31

**What it measures: reproducibility. NOT validity.**

The same model was given the identical prompt a second time over portraits it had
already coded, and the two readings were compared dimension by dimension. Two
readings agreeing tells you the instrument is stable. It does not tell you the
instrument is right. **No human rater has scored these images, and no inter-rater
agreement exists for this vocabulary.** Do not cite these numbers as validation,
accuracy, or ground truth.

The honest use is triage: a dimension a model cannot agree with itself on will
not survive human raters either, so this is the cheap gate that says which
dimensions are worth putting a person in front of.

### Method

| | |
|---|---|
| Model | `us.anthropic.claude-sonnet-4-6` on AWS Bedrock |
| Portraits | 196, across 29 ethnic groups |
| Families | the ten head-and-neck vocabularies, 86 photo-assessable dimensions |
| Selection | stride-sampled across the id-ordered corpus, then shuffled on a fixed seed, so a truncated run stays spread across groups rather than collapsing onto the low-id head |
| Corpus | publicly documented portraits of notable people, single frontal or three-quarter images |
| Cost | $5.39 |
| Writes | none. The stored coding is the reference arm and did not move |

**A decline is not an answer.** 13 of the 86 dimensions carry a value that means
"could not assess" (`unclear`, `not_visible`, `not_assessable`, `obscured`,
`covered_unclear`, `not_applicable_or_*`). Those are treated as declines. Scoring
them as answers makes a dimension that is never visible look perfectly reliable:
`lips-and-mouth.tongue_morphology` would otherwise have topped the table at 100%,
because a tongue is not visible in a head-and-shoulders portrait and both
readings faithfully said so. `absent` and `none` are **not** declines: a nose
with no dorsal hump is a finding.

### Results

| | |
|---|---|
| Agreement over dimensions both readings answered | **92.9%** |
| Agreement counting a decline by one reading as a miss | **90.6%** |
| Rankable dimensions at kappa 0.60 or better | **73 of 84** |
| Marked uninformative | **3** |
| Never scored | **1** (`lips-and-mouth.tongue_morphology`) |

Both denominators are reported because the choice between them has reversed a
conclusion on this corpus before.

The three uninformative dimensions are `ears.helix_morphology` and
`nose.deviation_axis`, which return a single value for every portrait, and
`ears.ear_axis` at kappa 0.000 with 99.3% raw agreement. High agreement, no
information. Ranking on raw agreement would have put all three at the top of the
table.

### Kappa is fragile here, and the files say so

An earlier read of the same corpus at 78 portraits put six of these dimensions at
kappa at or below zero. At 196 they read between 0.43 and 0.66:

| dimension | n=78 | n=196 |
|---|---|---|
| `ears.ear_protrusion` | -0.016 | 0.664 |
| `eyes.intercanthal_distance` | 0.000 | 0.652 |
| `head-shape.occipital_profile` | -0.036 | 0.577 |
| `head-shape.cranial_height` | -0.007 | 0.565 |
| `jaw-and-chin.chin_projection` | -0.014 | 0.432 |
| `ears.lobule_size` | 0.394 | 0.571 |

It moves the other way too: `lips-and-mouth.vermilion_border` read a perfect
1.000 at n=72 and 0.535 at n=176.

**Every dimension that moved that far has chance agreement above 85%.** Kappa
divides by `1 - pe`, so where one value dominates the corpus that denominator is
small enough for a handful of cells to swing the estimate. Twenty of the 85
scored dimensions sit in that regime and carry `estimate_is_fragile` in the
vocabulary JSON. Read the band, not the digits.

### Limitations

- One model, one corpus, one re-read.
- No human inter-rater study exists for this vocabulary.
- The corpus is Wikipedia notable people: gender-skewed male, biased toward
  public life, English-coverage biased, photographic-era biased. It is not a
  population sample.
- Only the ten head-and-neck families were measured. The body families have
  tables and a writer but almost no data.
- A dimension can be perfectly reproducible and still not measure what its name
  claims. Reproducibility is a floor, not a warrant.

### Columns in `test-retest-2026-08-31.json`

| Column | Meaning |
|---|---|
| `n_both_answered` | portraits where both readings gave a real value. The denominator for `percent_agreement` |
| `n_coverage_union` | portraits where at least one reading gave a real value |
| `percent_agreement` | raw agreement over `n_both_answered` |
| `percent_agreement_ci95_low` / `_high` | Wilson interval |
| `coverage_agreement_percent` | same numerator over `n_coverage_union` |
| `chance_agreement_percent` | expected agreement from the two marginals. Above 85, treat kappa as fragile |
| `cohens_kappa` | null where chance agreement is 1, which means a single value was returned throughout |
| `declines_one_side` | one reading answered, the other declined |
| `declined_by_both` | neither reading would assess it |
