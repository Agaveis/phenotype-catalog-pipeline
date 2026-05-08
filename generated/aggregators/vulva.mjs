// Auto-generated from vocabularies/vulva.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs

/**
 * Aggregate per-image vulva observations into a per-group rollup.
 *
 * @param {Array<Object>} observations - rows from `vulva_observation` for one ethnic_id
 * @returns {Object} { sample_size, dimensions: { ... }, mean_confidence, caveats }
 */
export function aggregateVulvaObservations(observations) {
  if (!observations || observations.length === 0) {
    return { sample_size: 0, dimensions: {}, mean_confidence: null, caveats: ["empty_sample"] };
  }

  const result = { sample_size: observations.length, dimensions: {} };

  // labia_majora_size (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.labia_majora_size;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["small_atrophic","moderate","full"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.labia_majora_size);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['labia_majora_size'] = { distribution, sample_n: total, median: medianValue };
  }

  // labia_majora_pigmentation (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.labia_majora_pigmentation;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["matches_surrounding","moderately_darker","markedly_darker"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.labia_majora_pigmentation);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['labia_majora_pigmentation'] = { distribution, sample_n: total, median: medianValue };
  }

  // labia_minora_protrusion (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.labia_minora_protrusion;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['labia_minora_protrusion'] = { distribution, sample_n: total };
  }

  // labia_minora_morphology (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.labia_minora_morphology;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['labia_minora_morphology'] = { distribution, sample_n: total };
  }

  // labial_symmetry (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.labial_symmetry;
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
      const idx = valueOrder.indexOf(o.labial_symmetry);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['labial_symmetry'] = { distribution, sample_n: total, median: medianValue };
  }

  // clitoral_hood_morphology (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.clitoral_hood_morphology;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['clitoral_hood_morphology'] = { distribution, sample_n: total };
  }

  // mons_pubis_prominence (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.mons_pubis_prominence;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["flat","moderate","prominent"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.mons_pubis_prominence);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['mons_pubis_prominence'] = { distribution, sample_n: total, median: medianValue };
  }

  // perineal_distance (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.perineal_distance;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["short","normal","long"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.perineal_distance);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['perineal_distance'] = { distribution, sample_n: total, median: medianValue };
  }

  // introitus_visibility_at_rest (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.introitus_visibility_at_rest;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["concealed","partial_visible","exposed"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.introitus_visibility_at_rest);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['introitus_visibility_at_rest'] = { distribution, sample_n: total, median: medianValue };
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
