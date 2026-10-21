# phenotype-catalog-pipeline

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.20075616.svg)](https://doi.org/10.5281/zenodo.20075616)

Reproducibility code and controlled vocabularies for the **PhenotypeCatalog** dataset: 1,779 indexed ethnic groups, 24,406 notable-people references, and 5,478 vision-grounded per-image phenotype observations spanning 233 groups, constructed from public-domain Wikipedia photographs. Counts measured 2026-08-31; the live dataset is the authority and these move.

- **Dataset (CC BY 4.0):** <https://huggingface.co/datasets/EthnicErotic/phenotype-catalog>
- **Methodology paper:** the [methodology page](methodology.md) documents the **14-field** vision analysis of the corpus as it stood in May 2026, then 5,668 images. It does **not** describe the 22-vocabulary system introduced in v2.0.0; that is documented on the [data page](data.md) and in `vocabularies/README.md`.
- **Archived releases (concept DOI):** [10.5281/zenodo.20075616](https://doi.org/10.5281/zenodo.20075616), which always resolves to the newest version.
- **Live source catalog:** <https://ethnicerotic.com>
- **Browse by region:** <https://ethnicerotic.com/world>

The pipeline runs end-to-end from a SQL Server `ethniclist` source table to four output configurations (CSV + JSONL) suitable for HuggingFace Datasets release. Each stage is idempotent, source-attributed, and re-runnable.
