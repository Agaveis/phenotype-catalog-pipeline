// Auto-generated from vocabularies/head-hair.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs

/**
 * Aggregate per-image head-hair observations into a per-group rollup.
 *
 * @param {Array<Object>} observations - rows from `head-hair_observation` for one ethnic_id
 * @returns {Object} { sample_size, dimensions: { ... }, mean_confidence, caveats }
 */
export function aggregateHeadHairObservations(observations) {
  if (!observations || observations.length === 0) {
    return { sample_size: 0, dimensions: {}, mean_confidence: null, caveats: ["empty_sample"] };
  }

  const result = { sample_size: observations.length, dimensions: {} };

  // hair_color (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.hair_color;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['hair_color'] = { distribution, sample_n: total };
  }

  // hair_texture_walker (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.hair_texture_walker;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['hair_texture_walker'] = { distribution, sample_n: total };
  }

  // hair_density (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.hair_density;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["sparse","thin","average","thick","very_thick"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.hair_density);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['hair_density'] = { distribution, sample_n: total, median: medianValue };
  }

  // hairline_shape (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.hairline_shape;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['hairline_shape'] = { distribution, sample_n: total };
  }

  // hairline_position (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.hairline_position;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["low","average","high","receded"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.hairline_position);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['hairline_position'] = { distribution, sample_n: total, median: medianValue };
  }

  // balding_pattern_male (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.balding_pattern_male;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["type_I_no_loss","type_II_minimal_temporal","type_III_moderate_temporal","type_III_vertex","type_IV_advanced_temporal_vertex","type_V_loss_meeting","type_VI_loss_merged","type_VII_advanced","not_applicable_or_female"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.balding_pattern_male);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['balding_pattern_male'] = { distribution, sample_n: total, median: medianValue };
  }

  // balding_pattern_female (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.balding_pattern_female;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["no_loss","ludwig_I","ludwig_II","ludwig_III","not_applicable_or_male"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.balding_pattern_female);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['balding_pattern_female'] = { distribution, sample_n: total, median: medianValue };
  }

  // graying_pattern (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.graying_pattern;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['graying_pattern'] = { distribution, sample_n: total };
  }

  // Mean confidence across all photo-assessable per-dimension confidence values
  const confidenceFields = ["hair_color_confidence","hair_texture_walker_confidence","hair_density_confidence","hairline_shape_confidence","hairline_position_confidence","balding_pattern_male_confidence","balding_pattern_female_confidence","graying_pattern_confidence"];
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
