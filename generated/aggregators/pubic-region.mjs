// Auto-generated from vocabularies/pubic-region.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs

/**
 * Aggregate per-image pubic-region observations into a per-group rollup.
 *
 * @param {Array<Object>} observations - rows from `pubic-region_observation` for one ethnic_id
 * @returns {Object} { sample_size, dimensions: { ... }, mean_confidence, caveats }
 */
export function aggregatePubicRegionObservations(observations) {
  if (!observations || observations.length === 0) {
    return { sample_size: 0, dimensions: {}, mean_confidence: null, caveats: ["empty_sample"] };
  }

  const result = { sample_size: observations.length, dimensions: {} };

  // pubic_hair_distribution_pattern (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.pubic_hair_distribution_pattern;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['pubic_hair_distribution_pattern'] = { distribution, sample_n: total };
  }

  // pubic_hair_density (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.pubic_hair_density;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["sparse","moderate","dense","very_dense"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.pubic_hair_density);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['pubic_hair_density'] = { distribution, sample_n: total, median: medianValue };
  }

  // pubic_hair_color (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.pubic_hair_color;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['pubic_hair_color'] = { distribution, sample_n: total };
  }

  // pubic_hair_texture (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.pubic_hair_texture;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['pubic_hair_texture'] = { distribution, sample_n: total };
  }

  // pubic_grooming_style_visible (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.pubic_grooming_style_visible;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['pubic_grooming_style_visible'] = { distribution, sample_n: total };
  }

  // Mean confidence across all photo-assessable per-dimension confidence values
  const confidenceFields = [];
  const allConfidences = [];
  for (const o of observations) {
    for (const f of confidenceFields) {
      if (typeof o[f] === 'number') allConfidences.push(o[f]);
    }
  }
  result.mean_confidence = allConfidences.length
    ? allConfidences.reduce((s, v) => s + v, 0) / allConfidences.length
    : null;

  // Caveats
  result.caveats = [];
  if (result.sample_size < 10) result.caveats.push('small_sample_below_publication_threshold');
  else if (result.sample_size < 25) result.caveats.push('modest_sample');
  if (result.mean_confidence !== null && result.mean_confidence < 0.55) result.caveats.push('low_overall_confidence');

  return result;
}
