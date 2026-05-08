// Auto-generated from vocabularies/feet.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs

/**
 * Aggregate per-image feet observations into a per-group rollup.
 *
 * @param {Array<Object>} observations - rows from `feet_observation` for one ethnic_id
 * @returns {Object} { sample_size, dimensions: { ... }, mean_confidence, caveats }
 */
export function aggregateFeetObservations(observations) {
  if (!observations || observations.length === 0) {
    return { sample_size: 0, dimensions: {}, mean_confidence: null, caveats: ["empty_sample"] };
  }

  const result = { sample_size: observations.length, dimensions: {} };

  // foot_size_relative (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.foot_size_relative;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["small","average","large"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.foot_size_relative);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['foot_size_relative'] = { distribution, sample_n: total, median: medianValue };
  }

  // arch_height (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.arch_height;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["flat_pes_planus","normal","high_pes_cavus"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.arch_height);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['arch_height'] = { distribution, sample_n: total, median: medianValue };
  }

  // toe_length_pattern (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.toe_length_pattern;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['toe_length_pattern'] = { distribution, sample_n: total };
  }

  // forefoot_width (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.forefoot_width;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["narrow","average","wide"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.forefoot_width);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['forefoot_width'] = { distribution, sample_n: total, median: medianValue };
  }

  // heel_morphology (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.heel_morphology;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['heel_morphology'] = { distribution, sample_n: total };
  }

  // hallux_alignment (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.hallux_alignment;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['hallux_alignment'] = { distribution, sample_n: total };
  }

  // toenail_morphology (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.toenail_morphology;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['toenail_morphology'] = { distribution, sample_n: total };
  }

  // Mean confidence across all photo-assessable per-dimension confidence values
  const confidenceFields = ["foot_size_relative_confidence","arch_height_confidence","toe_length_pattern_confidence","forefoot_width_confidence","heel_morphology_confidence","hallux_alignment_confidence","toenail_morphology_confidence"];
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
