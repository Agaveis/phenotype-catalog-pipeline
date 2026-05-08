// Auto-generated from vocabularies/head-shape.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs

/**
 * Aggregate per-image head-shape observations into a per-group rollup.
 *
 * @param {Array<Object>} observations - rows from `head-shape_observation` for one ethnic_id
 * @returns {Object} { sample_size, dimensions: { ... }, mean_confidence, caveats }
 */
export function aggregateHeadShapeObservations(observations) {
  if (!observations || observations.length === 0) {
    return { sample_size: 0, dimensions: {}, mean_confidence: null, caveats: ["empty_sample"] };
  }

  const result = { sample_size: observations.length, dimensions: {} };

  // cephalic_index_category (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.cephalic_index_category;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["dolichocephalic","mesocephalic","brachycephalic","hyperbrachycephalic","unclear"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.cephalic_index_category);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['cephalic_index_category'] = { distribution, sample_n: total, median: medianValue };
  }

  // occipital_profile (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.occipital_profile;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['occipital_profile'] = { distribution, sample_n: total };
  }

  // cranial_height (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.cranial_height;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["low","average","tall"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.cranial_height);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['cranial_height'] = { distribution, sample_n: total, median: medianValue };
  }

  // head_circumference_qualitative (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.head_circumference_qualitative;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["small","average","large"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.head_circumference_qualitative);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['head_circumference_qualitative'] = { distribution, sample_n: total, median: medianValue };
  }

  // Mean confidence across all photo-assessable per-dimension confidence values
  const confidenceFields = ["cephalic_index_category_confidence","occipital_profile_confidence","cranial_height_confidence","head_circumference_qualitative_confidence"];
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
