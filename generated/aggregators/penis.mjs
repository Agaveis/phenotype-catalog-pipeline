// Auto-generated from vocabularies/penis.json (v1.0.0). Do not edit by hand. Regenerate via: node scripts/generate-from-vocabulary.mjs

/**
 * Aggregate per-image penis observations into a per-group rollup.
 *
 * @param {Array<Object>} observations - rows from `penis_observation` for one ethnic_id
 * @returns {Object} { sample_size, dimensions: { ... }, mean_confidence, caveats }
 */
export function aggregatePenisObservations(observations) {
  if (!observations || observations.length === 0) {
    return { sample_size: 0, dimensions: {}, mean_confidence: null, caveats: ["empty_sample"] };
  }

  const result = { sample_size: observations.length, dimensions: {} };

  // flaccid_length_cm (numeric)
  {
    const values = observations.map((o) => o.flaccid_length_cm).filter((v) => v !== null && v !== undefined);
    if (values.length === 0) {
      result.dimensions['flaccid_length_cm'] = { sample_n: 0 };
    } else {
      const sum = values.reduce((s, v) => s + v, 0);
      const sorted = [...values].sort((a, b) => a - b);
      const median = sorted[Math.floor(sorted.length / 2)];
      result.dimensions['flaccid_length_cm'] = {
        sample_n: values.length,
        mean: sum / values.length,
        median,
        min: sorted[0],
        max: sorted[sorted.length - 1],
      };
    }
  }

  // erect_length_cm (numeric)
  {
    const values = observations.map((o) => o.erect_length_cm).filter((v) => v !== null && v !== undefined);
    if (values.length === 0) {
      result.dimensions['erect_length_cm'] = { sample_n: 0 };
    } else {
      const sum = values.reduce((s, v) => s + v, 0);
      const sorted = [...values].sort((a, b) => a - b);
      const median = sorted[Math.floor(sorted.length / 2)];
      result.dimensions['erect_length_cm'] = {
        sample_n: values.length,
        mean: sum / values.length,
        median,
        min: sorted[0],
        max: sorted[sorted.length - 1],
      };
    }
  }

  // flaccid_girth_cm (numeric)
  {
    const values = observations.map((o) => o.flaccid_girth_cm).filter((v) => v !== null && v !== undefined);
    if (values.length === 0) {
      result.dimensions['flaccid_girth_cm'] = { sample_n: 0 };
    } else {
      const sum = values.reduce((s, v) => s + v, 0);
      const sorted = [...values].sort((a, b) => a - b);
      const median = sorted[Math.floor(sorted.length / 2)];
      result.dimensions['flaccid_girth_cm'] = {
        sample_n: values.length,
        mean: sum / values.length,
        median,
        min: sorted[0],
        max: sorted[sorted.length - 1],
      };
    }
  }

  // erect_girth_cm (numeric)
  {
    const values = observations.map((o) => o.erect_girth_cm).filter((v) => v !== null && v !== undefined);
    if (values.length === 0) {
      result.dimensions['erect_girth_cm'] = { sample_n: 0 };
    } else {
      const sum = values.reduce((s, v) => s + v, 0);
      const sorted = [...values].sort((a, b) => a - b);
      const median = sorted[Math.floor(sorted.length / 2)];
      result.dimensions['erect_girth_cm'] = {
        sample_n: values.length,
        mean: sum / values.length,
        median,
        min: sorted[0],
        max: sorted[sorted.length - 1],
      };
    }
  }

  // glans_morphology (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.glans_morphology;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['glans_morphology'] = { distribution, sample_n: total };
  }

  // circumcision_status (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.circumcision_status;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['circumcision_status'] = { distribution, sample_n: total };
  }

  // foreskin_morphology (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.foreskin_morphology;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['foreskin_morphology'] = { distribution, sample_n: total };
  }

  // curvature_severity (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.curvature_severity;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["none_straight","mild","moderate","severe"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.curvature_severity);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['curvature_severity'] = { distribution, sample_n: total, median: medianValue };
  }

  // curvature_direction (categorical)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.curvature_direction;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    result.dimensions['curvature_direction'] = { distribution, sample_n: total };
  }

  // scrotal_position (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.scrotal_position;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["high_tight","normal","low_pendulous"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.scrotal_position);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['scrotal_position'] = { distribution, sample_n: total, median: medianValue };
  }

  // suprapubic_fat_pad (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.suprapubic_fat_pad;
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
      const idx = valueOrder.indexOf(o.suprapubic_fat_pad);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['suprapubic_fat_pad'] = { distribution, sample_n: total, median: medianValue };
  }

  // vascularity_visibility (ordinal)
  {
    const counts = {};
    let total = 0;
    for (const o of observations) {
      const v = o.vascularity_visibility;
      if (!v) continue;
      counts[v] = (counts[v] || 0) + 1;
      total += 1;
    }
    const distribution = {};
    for (const [k, c] of Object.entries(counts)) distribution[k] = c / total;
    // Median bucket (ordinal — values listed in canonical order)
    const valueOrder = ["none_visible","minimal","moderate","prominent"];
    const sortedIdx = [];
    for (const o of observations) {
      const idx = valueOrder.indexOf(o.vascularity_visibility);
      if (idx >= 0) sortedIdx.push(idx);
    }
    sortedIdx.sort((a, b) => a - b);
    const medianIdx = sortedIdx.length ? sortedIdx[Math.floor(sortedIdx.length / 2)] : null;
    const medianValue = medianIdx !== null ? valueOrder[medianIdx] : null;
    result.dimensions['vascularity_visibility'] = { distribution, sample_n: total, median: medianValue };
  }

  // Mean confidence across all photo-assessable per-dimension confidence values
  const confidenceFields = [];
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
