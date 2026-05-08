// Auto-generated from vocabularies/body-shape.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs

/**
 * Aggregate per-image body-shape observations into a per-group rollup.
 *
 * @param {Array<Object>} observations - rows from `body-shape_observation` for one ethnic_id
 * @returns {Object} { sample_size, dimensions: { ... }, mean_confidence, caveats }
 */
export function aggregateBodyShapeObservations(observations) {
  if (!observations || observations.length === 0) {
    return { sample_size: 0, dimensions: {}, mean_confidence: null, caveats: ["empty_sample"] };
  }

  const result = { sample_size: observations.length, dimensions: {} };

  // somatotype_endomorphy (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.somatotype_endomorphy;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["1","2","3","4","5","6","7"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.somatotype_endomorphy);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['somatotype_endomorphy'] = { distribution, sample_n: total, median: medianValue };
  }

  // somatotype_mesomorphy (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.somatotype_mesomorphy;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["1","2","3","4","5","6","7"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.somatotype_mesomorphy);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['somatotype_mesomorphy'] = { distribution, sample_n: total, median: medianValue };
  }

  // somatotype_ectomorphy (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.somatotype_ectomorphy;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["1","2","3","4","5","6","7"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.somatotype_ectomorphy);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['somatotype_ectomorphy'] = { distribution, sample_n: total, median: medianValue };
  }

  // somatotype_dominant (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.somatotype_dominant;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['somatotype_dominant'] = { distribution, sample_n: total };
  }

  // height_cm (numeric)
  {
    const values = observations.map((o) => o.height_cm).filter((v) => v !== null && v !== undefined);
    if (values.length === 0) {
      result.dimensions['height_cm'] = { sample_n: 0 };
    } else {
      const sum = values.reduce((s, v) => s + v, 0);
      const sorted = [...values].sort((a, b) => a - b);
      const median = sorted[Math.floor(sorted.length / 2)];
      result.dimensions['height_cm'] = {
        sample_n: values.length,
        mean: sum / values.length,
        median,
        min: sorted[0],
        max: sorted[sorted.length - 1],
      };
    }
  }

  // weight_kg (numeric)
  {
    const values = observations.map((o) => o.weight_kg).filter((v) => v !== null && v !== undefined);
    if (values.length === 0) {
      result.dimensions['weight_kg'] = { sample_n: 0 };
    } else {
      const sum = values.reduce((s, v) => s + v, 0);
      const sorted = [...values].sort((a, b) => a - b);
      const median = sorted[Math.floor(sorted.length / 2)];
      result.dimensions['weight_kg'] = {
        sample_n: values.length,
        mean: sum / values.length,
        median,
        min: sorted[0],
        max: sorted[sorted.length - 1],
      };
    }
  }

  // bmi_category (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.bmi_category;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["severe_underweight","underweight","normal_weight","overweight","obese_class_1","obese_class_2","obese_class_3"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.bmi_category);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['bmi_category'] = { distribution, sample_n: total, median: medianValue };
  }

  // whr_estimate (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.whr_estimate;
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
      const idx = valueOrder.indexOf(o.whr_estimate);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['whr_estimate'] = { distribution, sample_n: total, median: medianValue };
  }

  // hip_to_shoulder_ratio (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.hip_to_shoulder_ratio;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['hip_to_shoulder_ratio'] = { distribution, sample_n: total };
  }

  // frame_size_estimate (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.frame_size_estimate;
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
      const idx = valueOrder.indexOf(o.frame_size_estimate);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['frame_size_estimate'] = { distribution, sample_n: total, median: medianValue };
  }

  // body_composition_pattern (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.body_composition_pattern;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['body_composition_pattern'] = { distribution, sample_n: total };
  }

  // musculature_general (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.musculature_general;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["untrained","light","moderate","athletic","muscular","hypertrophied"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.musculature_general);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['musculature_general'] = { distribution, sample_n: total, median: medianValue };
  }

  // trunk_to_leg_ratio (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.trunk_to_leg_ratio;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['trunk_to_leg_ratio'] = { distribution, sample_n: total };
  }

  // posture (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.posture;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['posture'] = { distribution, sample_n: total };
  }

  // knee_alignment (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.knee_alignment;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['knee_alignment'] = { distribution, sample_n: total };
  }

  // knee_morphology (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.knee_morphology;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['knee_morphology'] = { distribution, sample_n: total };
  }

  // Mean confidence across all photo-assessable per-dimension confidence values
  const confidenceFields = ["somatotype_endomorphy_confidence","somatotype_mesomorphy_confidence","somatotype_ectomorphy_confidence","somatotype_dominant_confidence","bmi_category_confidence","whr_estimate_confidence","hip_to_shoulder_ratio_confidence","frame_size_estimate_confidence","body_composition_pattern_confidence","musculature_general_confidence","trunk_to_leg_ratio_confidence","posture_confidence","knee_alignment_confidence","knee_morphology_confidence"];
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
