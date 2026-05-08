// Auto-generated from vocabularies/skin.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs

/**
 * Aggregate per-image skin observations into a per-group rollup.
 *
 * @param {Array<Object>} observations - rows from `skin_observation` for one ethnic_id
 * @returns {Object} { sample_size, dimensions: { ... }, mean_confidence, caveats }
 */
export function aggregateSkinObservations(observations) {
  if (!observations || observations.length === 0) {
    return { sample_size: 0, dimensions: {}, mean_confidence: null, caveats: ["empty_sample"] };
  }

  const result = { sample_size: observations.length, dimensions: {} };

  // fitzpatrick_skin_type (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.fitzpatrick_skin_type;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["I","II","III","IV","V","VI","II-III","III-IV","IV-V","V-VI","unclear"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.fitzpatrick_skin_type);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['fitzpatrick_skin_type'] = { distribution, sample_n: total, median: medianValue };
  }

  // undertone (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.undertone;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['undertone'] = { distribution, sample_n: total };
  }

  // surface_texture (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.surface_texture;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["very_smooth","smooth","normal","textured","coarse"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.surface_texture);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['surface_texture'] = { distribution, sample_n: total, median: medianValue };
  }

  // pigmentation_pattern (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.pigmentation_pattern;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['pigmentation_pattern'] = { distribution, sample_n: total };
  }

  // freckling_density (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.freckling_density;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["none","few","moderate","heavy"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.freckling_density);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['freckling_density'] = { distribution, sample_n: total, median: medianValue };
  }

  // acral_pigmentation_difference (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.acral_pigmentation_difference;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['acral_pigmentation_difference'] = { distribution, sample_n: total };
  }

  // visible_photoaging (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.visible_photoaging;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["none_glogau_0","glogau_I","glogau_II","glogau_III","glogau_IV"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.visible_photoaging);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['visible_photoaging'] = { distribution, sample_n: total, median: medianValue };
  }

  // erythema_baseline (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.erythema_baseline;
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
      const idx = valueOrder.indexOf(o.erythema_baseline);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['erythema_baseline'] = { distribution, sample_n: total, median: medianValue };
  }

  // Mean confidence across all photo-assessable per-dimension confidence values
  const confidenceFields = ["fitzpatrick_skin_type_confidence","undertone_confidence","surface_texture_confidence","pigmentation_pattern_confidence","freckling_density_confidence","acral_pigmentation_difference_confidence","visible_photoaging_confidence","erythema_baseline_confidence"];
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
