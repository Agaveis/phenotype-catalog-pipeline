// Auto-generated from vocabularies/nose.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs

/**
 * Aggregate per-image nose observations into a per-group rollup.
 *
 * @param {Array<Object>} observations - rows from `nose_observation` for one ethnic_id
 * @returns {Object} { sample_size, dimensions: { ... }, mean_confidence, caveats }
 */
export function aggregateNoseObservations(observations) {
  if (!observations || observations.length === 0) {
    return { sample_size: 0, dimensions: {}, mean_confidence: null, caveats: ["empty_sample"] };
  }

  const result = { sample_size: observations.length, dimensions: {} };

  // bridge_profile (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.bridge_profile;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['bridge_profile'] = { distribution, sample_n: total };
  }

  // bridge_height (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.bridge_height;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["flat_low","medium","prominent_high"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.bridge_height);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['bridge_height'] = { distribution, sample_n: total, median: medianValue };
  }

  // bridge_width (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.bridge_width;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["narrow","medium","wide"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.bridge_width);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['bridge_width'] = { distribution, sample_n: total, median: medianValue };
  }

  // tip_projection (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.tip_projection;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["under_projected","balanced","over_projected"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.tip_projection);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['tip_projection'] = { distribution, sample_n: total, median: medianValue };
  }

  // tip_rotation (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.tip_rotation;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['tip_rotation'] = { distribution, sample_n: total };
  }

  // tip_shape (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.tip_shape;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['tip_shape'] = { distribution, sample_n: total };
  }

  // nostril_shape (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.nostril_shape;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['nostril_shape'] = { distribution, sample_n: total };
  }

  // nostril_visibility_frontal (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.nostril_visibility_frontal;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["minimal","moderate","significant"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.nostril_visibility_frontal);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['nostril_visibility_frontal'] = { distribution, sample_n: total, median: medianValue };
  }

  // alar_width (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.alar_width;
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
      const idx = valueOrder.indexOf(o.alar_width);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['alar_width'] = { distribution, sample_n: total, median: medianValue };
  }

  // columella_shape (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.columella_shape;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['columella_shape'] = { distribution, sample_n: total };
  }

  // nasal_length (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.nasal_length;
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
      const idx = valueOrder.indexOf(o.nasal_length);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['nasal_length'] = { distribution, sample_n: total, median: medianValue };
  }

  // radix_depth (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.radix_depth;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["deep","moderate","shallow","continuous"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.radix_depth);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['radix_depth'] = { distribution, sample_n: total, median: medianValue };
  }

  // dorsal_hump (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.dorsal_hump;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['dorsal_hump'] = { distribution, sample_n: total };
  }

  // deviation_axis (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.deviation_axis;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['deviation_axis'] = { distribution, sample_n: total };
  }

  // Mean confidence across all photo-assessable per-dimension confidence values
  const confidenceFields = ["bridge_profile_confidence","bridge_height_confidence","bridge_width_confidence","tip_projection_confidence","tip_rotation_confidence","tip_shape_confidence","nostril_shape_confidence","nostril_visibility_frontal_confidence","alar_width_confidence","columella_shape_confidence","nasal_length_confidence","radix_depth_confidence","dorsal_hump_confidence","deviation_axis_confidence"];
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
