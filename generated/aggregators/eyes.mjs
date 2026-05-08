// Auto-generated from vocabularies/eyes.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs

/**
 * Aggregate per-image eyes observations into a per-group rollup.
 *
 * @param {Array<Object>} observations - rows from `eyes_observation` for one ethnic_id
 * @returns {Object} { sample_size, dimensions: { ... }, mean_confidence, caveats }
 */
export function aggregateEyesObservations(observations) {
  if (!observations || observations.length === 0) {
    return { sample_size: 0, dimensions: {}, mean_confidence: null, caveats: ["empty_sample"] };
  }

  const result = { sample_size: observations.length, dimensions: {} };

  // eye_color (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.eye_color;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['eye_color'] = { distribution, sample_n: total };
  }

  // eye_shape (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.eye_shape;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['eye_shape'] = { distribution, sample_n: total };
  }

  // eyelid_crease_type (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.eyelid_crease_type;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['eyelid_crease_type'] = { distribution, sample_n: total };
  }

  // epicanthic_fold (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.epicanthic_fold;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['epicanthic_fold'] = { distribution, sample_n: total };
  }

  // palpebral_fissure_slant (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.palpebral_fissure_slant;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['palpebral_fissure_slant'] = { distribution, sample_n: total };
  }

  // palpebral_fissure_length (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.palpebral_fissure_length;
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
      const idx = valueOrder.indexOf(o.palpebral_fissure_length);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['palpebral_fissure_length'] = { distribution, sample_n: total, median: medianValue };
  }

  // intercanthal_distance (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.intercanthal_distance;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["narrow","normal","wide_telecanthus"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.intercanthal_distance);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['intercanthal_distance'] = { distribution, sample_n: total, median: medianValue };
  }

  // brow_ridge_prominence (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.brow_ridge_prominence;
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
      const idx = valueOrder.indexOf(o.brow_ridge_prominence);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['brow_ridge_prominence'] = { distribution, sample_n: total, median: medianValue };
  }

  // eyebrow_density (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.eyebrow_density;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["sparse","thin","normal","dense","very_dense"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.eyebrow_density);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['eyebrow_density'] = { distribution, sample_n: total, median: medianValue };
  }

  // eyebrow_shape (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.eyebrow_shape;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['eyebrow_shape'] = { distribution, sample_n: total };
  }

  // tear_trough_dark_circles (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.tear_trough_dark_circles;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["absent","mild","moderate","marked"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.tear_trough_dark_circles);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['tear_trough_dark_circles'] = { distribution, sample_n: total, median: medianValue };
  }

  // eye_protrusion (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.eye_protrusion;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['eye_protrusion'] = { distribution, sample_n: total };
  }

  // Mean confidence across all photo-assessable per-dimension confidence values
  const confidenceFields = ["eye_color_confidence","eye_shape_confidence","eyelid_crease_type_confidence","epicanthic_fold_confidence","palpebral_fissure_slant_confidence","palpebral_fissure_length_confidence","intercanthal_distance_confidence","brow_ridge_prominence_confidence","eyebrow_density_confidence","eyebrow_shape_confidence","tear_trough_dark_circles_confidence","eye_protrusion_confidence"];
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
