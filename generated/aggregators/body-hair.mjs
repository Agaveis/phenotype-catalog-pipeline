// Auto-generated from vocabularies/body-hair.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs

/**
 * Aggregate per-image body-hair observations into a per-group rollup.
 *
 * @param {Array<Object>} observations - rows from `body-hair_observation` for one ethnic_id
 * @returns {Object} { sample_size, dimensions: { ... }, mean_confidence, caveats }
 */
export function aggregateBodyHairObservations(observations) {
  if (!observations || observations.length === 0) {
    return { sample_size: 0, dimensions: {}, mean_confidence: null, caveats: ["empty_sample"] };
  }

  const result = { sample_size: observations.length, dimensions: {} };

  // ferriman_gallwey_visual (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.ferriman_gallwey_visual;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["minimal","mild","moderate","marked","not_assessable"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.ferriman_gallwey_visual);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['ferriman_gallwey_visual'] = { distribution, sample_n: total, median: medianValue };
  }

  // facial_hair_male (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.facial_hair_male;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['facial_hair_male'] = { distribution, sample_n: total };
  }

  // chest_hair_male (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.chest_hair_male;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['chest_hair_male'] = { distribution, sample_n: total };
  }

  // abdominal_hair_pattern (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.abdominal_hair_pattern;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['abdominal_hair_pattern'] = { distribution, sample_n: total };
  }

  // arm_hair_density (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.arm_hair_density;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["minimal","light","moderate","dense","groomed"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.arm_hair_density);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['arm_hair_density'] = { distribution, sample_n: total, median: medianValue };
  }

  // leg_hair_density (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.leg_hair_density;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["minimal","light","moderate","dense","groomed"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.leg_hair_density);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['leg_hair_density'] = { distribution, sample_n: total, median: medianValue };
  }

  // back_hair_male (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.back_hair_male;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['back_hair_male'] = { distribution, sample_n: total };
  }

  // body_hair_color (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.body_hair_color;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['body_hair_color'] = { distribution, sample_n: total };
  }

  // Mean confidence across all photo-assessable per-dimension confidence values
  const confidenceFields = ["ferriman_gallwey_visual_confidence","facial_hair_male_confidence","chest_hair_male_confidence","abdominal_hair_pattern_confidence","arm_hair_density_confidence","leg_hair_density_confidence","back_hair_male_confidence","body_hair_color_confidence"];
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
