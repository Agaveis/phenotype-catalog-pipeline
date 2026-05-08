// Auto-generated from vocabularies/neck.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs

/**
 * Aggregate per-image neck observations into a per-group rollup.
 *
 * @param {Array<Object>} observations - rows from `neck_observation` for one ethnic_id
 * @returns {Object} { sample_size, dimensions: { ... }, mean_confidence, caveats }
 */
export function aggregateNeckObservations(observations) {
  if (!observations || observations.length === 0) {
    return { sample_size: 0, dimensions: {}, mean_confidence: null, caveats: ["empty_sample"] };
  }

  const result = { sample_size: observations.length, dimensions: {} };

  // neck_length (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.neck_length;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["short","average","long"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.neck_length);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['neck_length'] = { distribution, sample_n: total, median: medianValue };
  }

  // neck_thickness (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.neck_thickness;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["thin","average","thick"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.neck_thickness);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['neck_thickness'] = { distribution, sample_n: total, median: medianValue };
  }

  // cervicomental_angle (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.cervicomental_angle;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['cervicomental_angle'] = { distribution, sample_n: total };
  }

  // laryngeal_prominence (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.laryngeal_prominence;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["minimal","moderate","prominent","very_prominent"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.laryngeal_prominence);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['laryngeal_prominence'] = { distribution, sample_n: total, median: medianValue };
  }

  // sternocleidomastoid_visibility (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.sternocleidomastoid_visibility;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["not_visible","subtle","defined","highly_defined"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.sternocleidomastoid_visibility);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['sternocleidomastoid_visibility'] = { distribution, sample_n: total, median: medianValue };
  }

  // platysmal_bands (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.platysmal_bands;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['platysmal_bands'] = { distribution, sample_n: total };
  }

  // neck_skin_quality (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.neck_skin_quality;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["smooth_youthful","average","loose_lax","wrinkled"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.neck_skin_quality);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['neck_skin_quality'] = { distribution, sample_n: total, median: medianValue };
  }

  // Mean confidence across all photo-assessable per-dimension confidence values
  const confidenceFields = ["neck_length_confidence","neck_thickness_confidence","cervicomental_angle_confidence","laryngeal_prominence_confidence","sternocleidomastoid_visibility_confidence","platysmal_bands_confidence","neck_skin_quality_confidence"];
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
