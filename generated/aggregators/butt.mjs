// Auto-generated from vocabularies/butt.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs

/**
 * Aggregate per-image butt observations into a per-group rollup.
 *
 * @param {Array<Object>} observations - rows from `butt_observation` for one ethnic_id
 * @returns {Object} { sample_size, dimensions: { ... }, mean_confidence, caveats }
 */
export function aggregateButtObservations(observations) {
  if (!observations || observations.length === 0) {
    return { sample_size: 0, dimensions: {}, mean_confidence: null, caveats: ["empty_sample"] };
  }

  const result = { sample_size: observations.length, dimensions: {} };

  // buttock_shape_mendieta (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.buttock_shape_mendieta;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['buttock_shape_mendieta'] = { distribution, sample_n: total };
  }

  // buttock_size (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.buttock_size;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["small","moderate","full","very_full"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.buttock_size);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['buttock_size'] = { distribution, sample_n: total, median: medianValue };
  }

  // buttock_projection (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.buttock_projection;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["flat","moderate","high_projection"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.buttock_projection);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['buttock_projection'] = { distribution, sample_n: total, median: medianValue };
  }

  // gluteal_fold_definition (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.gluteal_fold_definition;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["sharp_defined","moderate","soft_blended"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.gluteal_fold_definition);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['gluteal_fold_definition'] = { distribution, sample_n: total, median: medianValue };
  }

  // lateral_concavity (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.lateral_concavity;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['lateral_concavity'] = { distribution, sample_n: total };
  }

  // buttock_to_hip_ratio (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.buttock_to_hip_ratio;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['buttock_to_hip_ratio'] = { distribution, sample_n: total };
  }

  // asymmetry (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.asymmetry;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["symmetric","mild_asymmetry","moderate_asymmetry","marked_asymmetry"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.asymmetry);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['asymmetry'] = { distribution, sample_n: total, median: medianValue };
  }

  // Mean confidence across all photo-assessable per-dimension confidence values
  const confidenceFields = ["buttock_shape_mendieta_confidence","buttock_size_confidence","buttock_projection_confidence","gluteal_fold_definition_confidence","lateral_concavity_confidence","buttock_to_hip_ratio_confidence","asymmetry_confidence"];
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
