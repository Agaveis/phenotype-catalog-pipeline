// Auto-generated from vocabularies/breast.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs

/**
 * Aggregate per-image breast observations into a per-group rollup.
 *
 * @param {Array<Object>} observations - rows from `breast_observation` for one ethnic_id
 * @returns {Object} { sample_size, dimensions: { ... }, mean_confidence, caveats }
 */
export function aggregateBreastObservations(observations) {
  if (!observations || observations.length === 0) {
    return { sample_size: 0, dimensions: {}, mean_confidence: null, caveats: ["empty_sample"] };
  }

  const result = { sample_size: observations.length, dimensions: {} };

  // shape (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.shape;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['shape'] = { distribution, sample_n: total };
  }

  // ptosis_grade (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.ptosis_grade;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["grade_0_none","grade_1_mild","grade_2_moderate","grade_3_severe","pseudoptosis"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.ptosis_grade);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['ptosis_grade'] = { distribution, sample_n: total, median: medianValue };
  }

  // size_estimate (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.size_estimate;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["AA","A","B","C","D","DD","DDD_F","G","H_plus"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.size_estimate);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['size_estimate'] = { distribution, sample_n: total, median: medianValue };
  }

  // base_diameter (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.base_diameter;
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
      const idx = valueOrder.indexOf(o.base_diameter);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['base_diameter'] = { distribution, sample_n: total, median: medianValue };
  }

  // projection (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.projection;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["low","moderate","high"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.projection);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['projection'] = { distribution, sample_n: total, median: medianValue };
  }

  // upper_pole_fullness (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.upper_pole_fullness;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['upper_pole_fullness'] = { distribution, sample_n: total };
  }

  // lower_pole_fullness (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.lower_pole_fullness;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['lower_pole_fullness'] = { distribution, sample_n: total };
  }

  // inframammary_fold_definition (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.inframammary_fold_definition;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["sharp","soft","indistinct"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.inframammary_fold_definition);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['inframammary_fold_definition'] = { distribution, sample_n: total, median: medianValue };
  }

  // areolar_diameter_relative (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.areolar_diameter_relative;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["small","medium","large"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.areolar_diameter_relative);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['areolar_diameter_relative'] = { distribution, sample_n: total, median: medianValue };
  }

  // areolar_pigmentation (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.areolar_pigmentation;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["very_light","light","medium","dark","very_dark"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.areolar_pigmentation);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['areolar_pigmentation'] = { distribution, sample_n: total, median: medianValue };
  }

  // nipple_morphology (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.nipple_morphology;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['nipple_morphology'] = { distribution, sample_n: total };
  }

  // symmetry (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.symmetry;
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
      const idx = valueOrder.indexOf(o.symmetry);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['symmetry'] = { distribution, sample_n: total, median: medianValue };
  }

  // density_inference (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.density_inference;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['density_inference'] = { distribution, sample_n: total };
  }

  // developmental_stage (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.developmental_stage;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["b1_prepubertal","b2_breast_bud","b3_continued_enlargement","b4_secondary_mound","b5_mature"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.developmental_stage);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['developmental_stage'] = { distribution, sample_n: total, median: medianValue };
  }

  // Mean confidence across all photo-assessable per-dimension confidence values
  const confidenceFields = ["shape_confidence","ptosis_grade_confidence","size_estimate_confidence","base_diameter_confidence","projection_confidence","upper_pole_fullness_confidence","lower_pole_fullness_confidence","inframammary_fold_definition_confidence","areolar_diameter_relative_confidence","areolar_pigmentation_confidence","nipple_morphology_confidence","symmetry_confidence","developmental_stage_confidence"];
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
