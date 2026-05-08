// Auto-generated from vocabularies/jaw-and-chin.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs

/**
 * Aggregate per-image jaw-and-chin observations into a per-group rollup.
 *
 * @param {Array<Object>} observations - rows from `jaw-and-chin_observation` for one ethnic_id
 * @returns {Object} { sample_size, dimensions: { ... }, mean_confidence, caveats }
 */
export function aggregateJawAndChinObservations(observations) {
  if (!observations || observations.length === 0) {
    return { sample_size: 0, dimensions: {}, mean_confidence: null, caveats: ["empty_sample"] };
  }

  const result = { sample_size: observations.length, dimensions: {} };

  // jaw_width_bigonial (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.jaw_width_bigonial;
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
      const idx = valueOrder.indexOf(o.jaw_width_bigonial);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['jaw_width_bigonial'] = { distribution, sample_n: total, median: medianValue };
  }

  // mandibular_angle (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.mandibular_angle;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['mandibular_angle'] = { distribution, sample_n: total };
  }

  // masseter_prominence (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.masseter_prominence;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["flat_minimal","moderate","prominent","hypertrophic"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.masseter_prominence);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['masseter_prominence'] = { distribution, sample_n: total, median: medianValue };
  }

  // chin_projection (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.chin_projection;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["retrognathic","balanced","prognathic"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.chin_projection);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['chin_projection'] = { distribution, sample_n: total, median: medianValue };
  }

  // chin_shape_frontal (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.chin_shape_frontal;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['chin_shape_frontal'] = { distribution, sample_n: total };
  }

  // chin_height (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.chin_height;
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
      const idx = valueOrder.indexOf(o.chin_height);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['chin_height'] = { distribution, sample_n: total, median: medianValue };
  }

  // submental_definition (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.submental_definition;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["well_defined","softly_defined","moderate_submental_fat","marked_submental_fat"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.submental_definition);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['submental_definition'] = { distribution, sample_n: total, median: medianValue };
  }

  // mandibular_contour_definition (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.mandibular_contour_definition;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["highly_defined","defined","soft","obscured"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.mandibular_contour_definition);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['mandibular_contour_definition'] = { distribution, sample_n: total, median: medianValue };
  }

  // Mean confidence across all photo-assessable per-dimension confidence values
  const confidenceFields = ["jaw_width_bigonial_confidence","mandibular_angle_confidence","masseter_prominence_confidence","chin_projection_confidence","chin_shape_frontal_confidence","chin_height_confidence","submental_definition_confidence","mandibular_contour_definition_confidence"];
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
