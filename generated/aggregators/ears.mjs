// Auto-generated from vocabularies/ears.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs

/**
 * Aggregate per-image ears observations into a per-group rollup.
 *
 * @param {Array<Object>} observations - rows from `ears_observation` for one ethnic_id
 * @returns {Object} { sample_size, dimensions: { ... }, mean_confidence, caveats }
 */
export function aggregateEarsObservations(observations) {
  if (!observations || observations.length === 0) {
    return { sample_size: 0, dimensions: {}, mean_confidence: null, caveats: ["empty_sample"] };
  }

  const result = { sample_size: observations.length, dimensions: {} };

  // helix_morphology (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.helix_morphology;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['helix_morphology'] = { distribution, sample_n: total };
  }

  // antihelix_definition (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.antihelix_definition;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["well_defined","softly_defined","absent_unfurled"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.antihelix_definition);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['antihelix_definition'] = { distribution, sample_n: total, median: medianValue };
  }

  // ear_protrusion (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.ear_protrusion;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["flat_against_head","normal","prominent","very_prominent"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.ear_protrusion);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['ear_protrusion'] = { distribution, sample_n: total, median: medianValue };
  }

  // lobule_attachment (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.lobule_attachment;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['lobule_attachment'] = { distribution, sample_n: total };
  }

  // lobule_size (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.lobule_size;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["small","medium","large","stretched"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.lobule_size);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['lobule_size'] = { distribution, sample_n: total, median: medianValue };
  }

  // tragus_morphology (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.tragus_morphology;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['tragus_morphology'] = { distribution, sample_n: total };
  }

  // ear_axis (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.ear_axis;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['ear_axis'] = { distribution, sample_n: total };
  }

  // ear_size_overall (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.ear_size_overall;
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
      const idx = valueOrder.indexOf(o.ear_size_overall);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['ear_size_overall'] = { distribution, sample_n: total, median: medianValue };
  }

  // Mean confidence across all photo-assessable per-dimension confidence values
  const confidenceFields = ["helix_morphology_confidence","antihelix_definition_confidence","ear_protrusion_confidence","lobule_attachment_confidence","lobule_size_confidence","tragus_morphology_confidence","ear_axis_confidence","ear_size_overall_confidence"];
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
