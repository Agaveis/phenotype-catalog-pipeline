// Auto-generated from vocabularies/lips-and-mouth.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs

/**
 * Aggregate per-image lips-and-mouth observations into a per-group rollup.
 *
 * @param {Array<Object>} observations - rows from `lips-and-mouth_observation` for one ethnic_id
 * @returns {Object} { sample_size, dimensions: { ... }, mean_confidence, caveats }
 */
export function aggregateLipsAndMouthObservations(observations) {
  if (!observations || observations.length === 0) {
    return { sample_size: 0, dimensions: {}, mean_confidence: null, caveats: ["empty_sample"] };
  }

  const result = { sample_size: observations.length, dimensions: {} };

  // lip_volume_overall (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.lip_volume_overall;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["thin","moderate","full","very_full"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.lip_volume_overall);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['lip_volume_overall'] = { distribution, sample_n: total, median: medianValue };
  }

  // upper_to_lower_lip_ratio (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.upper_to_lower_lip_ratio;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['upper_to_lower_lip_ratio'] = { distribution, sample_n: total };
  }

  // cupids_bow (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.cupids_bow;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['cupids_bow'] = { distribution, sample_n: total };
  }

  // philtrum (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.philtrum;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['philtrum'] = { distribution, sample_n: total };
  }

  // mouth_width (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.mouth_width;
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
      const idx = valueOrder.indexOf(o.mouth_width);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['mouth_width'] = { distribution, sample_n: total, median: medianValue };
  }

  // lip_corner_orientation (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.lip_corner_orientation;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['lip_corner_orientation'] = { distribution, sample_n: total };
  }

  // vermilion_border (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.vermilion_border;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["sharp_defined","soft","indistinct"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.vermilion_border);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['vermilion_border'] = { distribution, sample_n: total, median: medianValue };
  }

  // dental_visibility (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.dental_visibility;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['dental_visibility'] = { distribution, sample_n: total };
  }

  // dental_alignment (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.dental_alignment;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['dental_alignment'] = { distribution, sample_n: total };
  }

  // tongue_morphology (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.tongue_morphology;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['tongue_morphology'] = { distribution, sample_n: total };
  }

  // Mean confidence across all photo-assessable per-dimension confidence values
  const confidenceFields = ["lip_volume_overall_confidence","upper_to_lower_lip_ratio_confidence","cupids_bow_confidence","philtrum_confidence","mouth_width_confidence","lip_corner_orientation_confidence","vermilion_border_confidence","dental_visibility_confidence","dental_alignment_confidence","tongue_morphology_confidence"];
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
