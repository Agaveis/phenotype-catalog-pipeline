// Auto-generated from vocabularies/legs.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs

/**
 * Aggregate per-image legs observations into a per-group rollup.
 *
 * @param {Array<Object>} observations - rows from `legs_observation` for one ethnic_id
 * @returns {Object} { sample_size, dimensions: { ... }, mean_confidence, caveats }
 */
export function aggregateLegsObservations(observations) {
  if (!observations || observations.length === 0) {
    return { sample_size: 0, dimensions: {}, mean_confidence: null, caveats: ["empty_sample"] };
  }

  const result = { sample_size: observations.length, dimensions: {} };

  // leg_length_proportional (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.leg_length_proportional;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["short","balanced","long"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.leg_length_proportional);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['leg_length_proportional'] = { distribution, sample_n: total, median: medianValue };
  }

  // thigh_circumference (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.thigh_circumference;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["slender","average","muscular","very_muscular"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.thigh_circumference);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['thigh_circumference'] = { distribution, sample_n: total, median: medianValue };
  }

  // thigh_definition (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.thigh_definition;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["minimal","moderate","defined","highly_developed"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.thigh_definition);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['thigh_definition'] = { distribution, sample_n: total, median: medianValue };
  }

  // calf_shape (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.calf_shape;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['calf_shape'] = { distribution, sample_n: total };
  }

  // calf_circumference (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.calf_circumference;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["slender","average","muscular","very_muscular"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.calf_circumference);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['calf_circumference'] = { distribution, sample_n: total, median: medianValue };
  }

  // ankle_morphology (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.ankle_morphology;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['ankle_morphology'] = { distribution, sample_n: total };
  }

  // thigh_to_calf_ratio (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.thigh_to_calf_ratio;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['thigh_to_calf_ratio'] = { distribution, sample_n: total };
  }

  // Mean confidence across all photo-assessable per-dimension confidence values
  const confidenceFields = ["leg_length_proportional_confidence","thigh_circumference_confidence","thigh_definition_confidence","calf_shape_confidence","calf_circumference_confidence","ankle_morphology_confidence","thigh_to_calf_ratio_confidence"];
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
