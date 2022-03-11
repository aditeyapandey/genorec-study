window.data = {
  tasks: [
    {
      id: 1,
      dataDescription: [
        {
          fileFormat: "VCF",
          attributes: "1 Quantitative",
          featureExtent: "Point",
          featureDensity: "Contiguous",
        },
      ],
      taskDescription:
        "Identify regions with high or low values of quantitative score across genomes",
      stimuli: [
        {
          output: "genorec",
          spec: "1_g_spec.json"
        },
        {
          output: "random",
          spec: "1_a_spec.json"
        },
      ],
    },
    {
      id: 2,
      dataDescription: [
        {
          fileFormat: "BIGWIG",
          attributes: "1 Quantitative",
          featureExtent: "Point",
          featureDensity: "Contiguous",
        },
      ],
      taskDescription:
        "Identify and analyze a region of interest in the genome.",
      stimuli: [
        {
          output: "genorec",
          spec: "1_g_spec.json"
        },
        {
          output: "random",
          spec: "1_a_spec.json"
        },
      ],
    },
  ],
};
