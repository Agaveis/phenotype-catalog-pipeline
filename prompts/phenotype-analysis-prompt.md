# Phenotype-analysis vision prompt

The exact prompt sent to the vision LLM for each image is defined inline in `scripts/analyze-images-via-bedrock.mjs` as the `ANALYSIS_PROMPT` constant. It is reproduced here verbatim for review and citation.

## Prompt text

```
Analyze this portrait photograph for a phenotype reference catalog. Be honest about what you can and can't see — if features are obscured (sunglasses, full beard, low resolution, B&W image, painting/engraving, partial face), say so via the obscurations and image_quality fields rather than guessing.

Return a single JSON object, no prose. Schema:

{
  "skin_tone":       "<Fitzpatrick I|II|III|IV|V|VI or 'unclear'>",
  "skin_undertone":  "<warm|cool|neutral|olive|other>",
  "hair_color":      "<descriptive>",
  "hair_texture":    "<straight|wavy|curly|coily|bald|shaved|covered>",
  "hair_pattern":    "<short notes — graying pattern, density, etc.>",
  "eye_color":       "<descriptive>",
  "eye_shape":       "<almond|round|hooded|monolid|deep-set|other — include epicanthic fold y/n>",
  "facial_features": "<2-3 sentences — nose bridge/width, lip fullness, jaw shape, cheekbone prominence, brow ridge>",
  "build":           "<visible build only — frame width, posture, body composition if visible>",
  "visible_extent":  "<head_only|head_shoulders|upper_body|full_body>",
  "image_quality":   "<high|medium|low|very_low>",
  "obscurations":    "<list any: glasses, hat, mask, beard, makeup, low_res, b&w, painting, partial_face, none>",
  "confidence":      <0.0-1.0>
}
```

## Design notes

- **Honesty pressure.** The opening sentence explicitly tells the model to defer to `obscurations` and `image_quality` rather than fabricate values. Pilot runs without this language produced hallucinated skin-tone calls on B&W and painted-portrait images.
- **Fitzpatrick + 'unclear'.** The skin-tone enum includes an explicit `unclear` option. Without it the model picks a Fitzpatrick bin even when the lighting is unreliable; with it the model uses `unclear` for ~3% of inputs.
- **Range answers tolerated.** Pilot runs showed many subjects sit between two Fitzpatrick bins (e.g. ambiguous II/III). The downstream parser accepts ranges (`"II-III"`) without splitting them; aggregation buckets such ranges proportionally between the two bins.
- **Epicanthic fold inside `eye_shape`, not as its own field.** Earlier pilots had a separate boolean. The model returned `false` on inputs where the eye shape was assessable but the fold not specifically inspected, biasing the count low. Embedding the y/n inside the descriptive `eye_shape` field forces the model to decide each time.
- **Confidence is the model's own number.** Not externally calibrated. We use it for filtering, not for any kind of probabilistic claim.
- **No prose.** "Return a single JSON object, no prose" eliminates the typical "Here is my analysis: ..." preamble. The downstream parser still tolerates a leading preamble (extracts the first `{...}` block) but the prompt-side instruction reduces failure rate.

## Model choice

The script defaults to `us.anthropic.claude-sonnet-4-6` (AWS Bedrock inference profile ID). Pilot runs against Opus-tier models showed no measurable accuracy improvement on this prompt — the task is short-context structured extraction with a fixed schema, which Sonnet handles at full quality at lower cost.

The model ID is overridable via `--model` CLI flag.

## Cost

Roughly $0.005 per image at Bedrock list pricing (input image at ~$0.0024 + ~500 output tokens at ~$0.0026). 5,668 images cost $44.66 total in our run. The script enforces a `--max-budget-usd` flag; when total estimated spend reaches the cap, the worker pool drains and the script exits cleanly.
