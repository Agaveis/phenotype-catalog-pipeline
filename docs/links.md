# Links

- [Live source catalog](https://ethnicerotic.com): the catalog the dataset rows reference back to.
- [Browse by region](https://ethnicerotic.com/world): the catalog by region.
- [Phenotype atlas](https://ethnicerotic.com/atlas): the phenotype reference categories (eyes, lips, nose, hair, skin, body).
- [Methodology](https://ethnicerotic.com/methodology): the catalog's methodology page.
- [Twenty-two controlled vocabularies](https://ethnicerotic.com/devlog/twenty-two-controlled-vocabularies): the devlog entry on the 22 controlled vocabularies.
- [A vocabulary tested for reliability](https://ethnicerotic.com/devlog/a-vocabulary-tested-for-reliability): the devlog entry on the test-retest study.
- [Dataset (CC BY 4.0)](https://huggingface.co/datasets/EthnicErotic/phenotype-catalog): the PhenotypeCatalog dataset on Hugging Face.
- [Concept DOI 10.5281/zenodo.20075616](https://doi.org/10.5281/zenodo.20075616): archived releases, always resolving to the newest version.
- [GitHub repository](https://github.com/Agaveis/phenotype-catalog-pipeline): the pipeline code, the vocabularies and the paper.

## Sample group pages

The HuggingFace dataset rows reference back to the live catalog at ethnicerotic.com. A few example destinations:

- <https://ethnicerotic.com/ethnic/punjabis> (largest sample in `image_observations`, n=146)
- <https://ethnicerotic.com/ethnic/han-chinese>
- <https://ethnicerotic.com/ethnic/yoruba>
- <https://ethnicerotic.com/ethnic/ashkenazi-jewish>
- <https://ethnicerotic.com/ethnic/quechua>
- <https://ethnicerotic.com/ethnic/igbo>
- <https://ethnicerotic.com/ethnic/persians>
- <https://ethnicerotic.com/ethnic/japanese>

Each page renders the synthesized phenotype profile, the aggregated observed distribution (where ≥3 images are available), and a list of notable-people references.

## License

Code in this repository: [Apache License 2.0](https://github.com/Agaveis/phenotype-catalog-pipeline/blob/main/LICENSE).
The dataset itself: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); see the [dataset card](https://huggingface.co/datasets/EthnicErotic/phenotype-catalog) for details.
Image URLs in `notable_people.image_url` and `image_observations.image_url` reference Wikipedia / Wikimedia Commons content under their own per-image licenses; consult each row's `reference_url` before redistributing actual image bytes.

## Citation

If you use this code or the resulting dataset, please cite the **concept DOI** below, which always
resolves to the newest archived version. The v1.0.0 version DOI
([10.5281/zenodo.20075617](https://doi.org/10.5281/zenodo.20075617)) resolves to an archive that
predates the vocabularies and does not contain them, so cite it only if you specifically mean that
snapshot. Version DOIs: v1.0.0 is 10.5281/zenodo.20075617, v2.0.0 is [10.5281/zenodo.22200691](https://doi.org/10.5281/zenodo.22200691), v2.0.1 is [10.5281/zenodo.22205733](https://doi.org/10.5281/zenodo.22205733). Prefer v2.0.1: v2.0.0 carries stale corpus figures in its README.

```bibtex
@misc{phenotype_catalog_pipeline_2026,
  title         = {phenotype-catalog-pipeline: controlled vocabularies and Wikipedia-sourced per-image phenotype observations},
  author        = {Jacoby, Jason},
  year          = {2026},
  publisher     = {Zenodo},
  version       = {v2.0.0},
  doi           = {10.5281/zenodo.20075616},
  url           = {https://doi.org/10.5281/zenodo.20075616}
}

@misc{ethnicerotic_phenotype_catalog_2026,
  title         = {PhenotypeCatalog: controlled vocabularies and vision-grounded per-image phenotype observations},
  author        = {Jacoby, Jason},
  year          = {2026},
  publisher     = {Hugging Face},
  url           = {https://huggingface.co/datasets/EthnicErotic/phenotype-catalog},
  note          = {Pipeline DOI: \url{https://doi.org/10.5281/zenodo.20075616}; Source: \url{https://ethnicerotic.com}}
}
```

## Contact

- Issues / contributions: <https://github.com/Agaveis/phenotype-catalog-pipeline/issues>
- Dataset feedback: <https://huggingface.co/datasets/EthnicErotic/phenotype-catalog/discussions>
- Live catalog: <https://ethnicerotic.com>
