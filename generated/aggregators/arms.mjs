// Auto-generated from vocabularies/arms.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs

/**
 * Aggregate per-image arms observations into a per-group rollup.
 *
 * @param {Array<Object>} observations - rows from `arms_observation` for one ethnic_id
 * @returns {Object} { sample_size, dimensions: { ... }, mean_confidence, caveats }
 */
export function aggregateArmsObservations(observations) {
  if (!observations || observations.length === 0) {
    return { sample_size: 0, dimensions: {}, mean_confidence: null, caveats: ["empty_sample"] };
  }

  const result = { sample_size: observations.length, dimensions: {} };

  // arm_length_proportional (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.arm_length_proportional;
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
      const idx = valueOrder.indexOf(o.arm_length_proportional);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['arm_length_proportional'] = { distribution, sample_n: total, median: medianValue };
  }

  // upper_arm_circumference (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.upper_arm_circumference;
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
      const idx = valueOrder.indexOf(o.upper_arm_circumference);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['upper_arm_circumference'] = { distribution, sample_n: total, median: medianValue };
  }

  // biceps_definition (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.biceps_definition;
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
      const idx = valueOrder.indexOf(o.biceps_definition);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['biceps_definition'] = { distribution, sample_n: total, median: medianValue };
  }

  // forearm_circumference (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.forearm_circumference;
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
      const idx = valueOrder.indexOf(o.forearm_circumference);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['forearm_circumference'] = { distribution, sample_n: total, median: medianValue };
  }

  // brachioradialis_visibility (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.brachioradialis_visibility;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["not_visible","subtle","defined"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.brachioradialis_visibility);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['brachioradialis_visibility'] = { distribution, sample_n: total, median: medianValue };
  }

  // cubital_carrying_angle (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.cubital_carrying_angle;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['cubital_carrying_angle'] = { distribution, sample_n: total };
  }

  // shoulder_to_arm_proportion (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.shoulder_to_arm_proportion;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['shoulder_to_arm_proportion'] = { distribution, sample_n: total };
  }

  // Mean confidence across all photo-assessable per-dimension confidence values
  const confidenceFields = ["arm_length_proportional_confidence","upper_arm_circumference_confidence","biceps_definition_confidence","forearm_circumference_confidence","brachioradialis_visibility_confidence","cubital_carrying_angle_confidence","shoulder_to_arm_proportion_confidence"];
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
