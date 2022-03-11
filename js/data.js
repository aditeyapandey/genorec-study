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
    {
      id: 3,
      dataDescription: [
        {
          fileFormat: "BEDPE",
          attributes: "N.A.",
          featureExtent: "Segment",
          featureDensity: "Sparse",
        },
      ],
      taskDescription:
        "Identify chromosomes with more interconnections.",
      stimuli: [
        {
          output: "genorec",
          spec: "3_g_spec.json"
        },
        {
          output: "random",
          spec: "3_a_spec.json"
        },
      ],
    },
    {
      id: 4,
      dataDescription: [
        {
          fileFormat: "BIGWIG",
          attributes: "1 Quantitative",
          featureExtent: "Point",
          featureDensity: "Contiguous",
        },
      ],
      taskDescription:
        "Identify repeating patterns in the genome.",
      stimuli: [
        {
          output: "genorec",
          spec: "4_g_spec.json"
        },
        {
          output: "random",
          spec: "4_a_spec.json"
        },
      ],
    },
    {
      id: 5,
      dataDescription: [
        {
          fileFormat: "BED",
          attributes: "1 Text",
          featureExtent: "Segment",
          featureDensity: "Sparse",
        }
      ],
      taskDescription:
        "Look for a specific gene in the genome",
      stimuli: [
        {
          output: "genorec",
          spec: "5_g_spec.json"
        },
        {
          output: "random",
          spec: "5_a_spec.json"
        },
      ],
    },
    {
      id: 6,
      dataDescription: [
        {
          fileFormat: "BIGWIG",
          attributes: "1 Quantitative",
          featureExtent: "Point",
          featureDensity: "Contiguous",
        },
        {
          fileFormat: "BED",
          attributes: "1 Categorical",
          featureExtent: "Segment",
          featureDensity: "Sparse",
        }
      ],
      taskDescription:
        "Analyze values in a specific region of the genome",
      stimuli: [
        {
          output: "genorec",
          spec: "5_g_spec.json"
        },
        {
          output: "random",
          spec: "5_a_spec.json"
        },
      ],
    },
    {
      id: 7,
      dataDescription: [
        {
          fileFormat: "BIGWIG",
          attributes: "1 Quantitative",
          featureExtent: "Point",
          featureDensity: "Contiguous",
        },
        {
          fileFormat: "BIGWIG",
          attributes: "1 Quantitative",
          featureExtent: "Point",
          featureDensity: "Contiguous",
        }
      ],
      taskDescription:
        "Compare values between two regions of the genome.",
      stimuli: [
        {
          output: "genorec",
          spec: "5_g_spec.json"
        },
        {
          output: "random",
          spec: "5_a_spec.json"
        },
      ],
    },
    {
      id: 8,
      dataDescription: [
        {
          fileFormat: "BED",
          attributes: "1 Text",
          featureExtent: "Segment",
          featureDensity: "Sparse",
        }
      ],
      taskDescription:
        "Look for a specific gene in the genome",
      stimuli: [
        {
          output: "genorec",
          spec: "5_g_spec.json"
        },
        {
          output: "random",
          spec: "5_a_spec.json"
        },
      ],
    },
    {
      id: 9,
      dataDescription: [
        {
          fileFormat: "BED",
          attributes: "1 Text",
          featureExtent: "Segment",
          featureDensity: "Sparse",
        }
      ],
      taskDescription:
        "Look for a specific gene in the genome",
      stimuli: [
        {
          output: "genorec",
          spec: "5_g_spec.json"
        },
        {
          output: "random",
          spec: "5_a_spec.json"
        },
      ],
    },
    {
      id: 10,
      dataDescription: [
        {
          fileFormat: "BED",
          attributes: "1 Text",
          featureExtent: "Segment",
          featureDensity: "Sparse",
        }
      ],
      taskDescription:
        "Look for a specific gene in the genome",
      stimuli: [
        {
          output: "genorec",
          spec: "5_g_spec.json"
        },
        {
          output: "random",
          spec: "5_a_spec.json"
        },
      ],
    },
    {
      id: 11,
      dataDescription: [
        {
          fileFormat: "BED",
          attributes: "1 Text",
          featureExtent: "Segment",
          featureDensity: "Sparse",
        }
      ],
      taskDescription:
        "Look for a specific gene in the genome",
      stimuli: [
        {
          output: "genorec",
          spec: "5_g_spec.json"
        },
        {
          output: "random",
          spec: "5_a_spec.json"
        },
      ],
    },
    {
      id: 12,
      dataDescription: [
        {
          fileFormat: "BED",
          attributes: "1 Text",
          featureExtent: "Segment",
          featureDensity: "Sparse",
        }
      ],
      taskDescription:
        "Look for a specific gene in the genome",
      stimuli: [
        {
          output: "genorec",
          spec: "5_g_spec.json"
        },
        {
          output: "random",
          spec: "5_a_spec.json"
        },
      ],
    },
    {
      id: 13,
      dataDescription: [
        {
          fileFormat: "BED",
          attributes: "1 Text",
          featureExtent: "Segment",
          featureDensity: "Sparse",
        }
      ],
      taskDescription:
        "Look for a specific gene in the genome",
      stimuli: [
        {
          output: "genorec",
          spec: "5_g_spec.json"
        },
        {
          output: "random",
          spec: "5_a_spec.json"
        },
      ],
    },
    {
      id: 14,
      dataDescription: [
        {
          fileFormat: "BED",
          attributes: "1 Text",
          featureExtent: "Segment",
          featureDensity: "Sparse",
        }
      ],
      taskDescription:
        "Look for a specific gene in the genome",
      stimuli: [
        {
          output: "genorec",
          spec: "5_g_spec.json"
        },
        {
          output: "random",
          spec: "5_a_spec.json"
        },
      ],
    },
  ],
};
