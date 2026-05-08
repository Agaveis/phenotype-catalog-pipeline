// Auto-generated from vocabularies/face-proportions.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs

/**
 * Aggregate per-image face-proportions observations into a per-group rollup.
 *
 * @param {Array<Object>} observations - rows from `face-proportions_observation` for one ethnic_id
 * @returns {Object} { sample_size, dimensions: { ... }, mean_confidence, caveats }
 */
export function aggregateFaceProportionsObservations(observations) {
  if (!observations || observations.length === 0) {
    return { sample_size: 0, dimensions: {}, mean_confidence: null, caveats: ["empty_sample"] };
  }

  const result = { sample_size: observations.length, dimensions: {} };

  // face_shape (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.face_shape;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['face_shape'] = { distribution, sample_n: total };
  }

  // facial_thirds_balance (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.facial_thirds_balance;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['facial_thirds_balance'] = { distribution, sample_n: total };
  }

  // cheekbone_prominence (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.cheekbone_prominence;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["flat_minimal","moderate","high_prominent"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.cheekbone_prominence);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['cheekbone_prominence'] = { distribution, sample_n: total, median: medianValue };
  }

  // cheekbone_width (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.cheekbone_width;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["narrow","balanced","wide"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.cheekbone_width);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['cheekbone_width'] = { distribution, sample_n: total, median: medianValue };
  }

  // midface_morphology (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.midface_morphology;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['midface_morphology'] = { distribution, sample_n: total };
  }

  // forehead_height (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.forehead_height;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["low","balanced","tall"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.forehead_height);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['forehead_height'] = { distribution, sample_n: total, median: medianValue };
  }

  // forehead_shape (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.forehead_shape;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['forehead_shape'] = { distribution, sample_n: total };
  }

  // Mean confidence across all photo-assessable per-dimension confidence values
  const confidenceFields = ["face_shape_confidence","facial_thirds_balance_confidence","cheekbone_prominence_confidence","cheekbone_width_confidence","midface_morphology_confidence","forehead_height_confidence","forehead_shape_confidence"];
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
