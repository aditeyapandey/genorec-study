window.data = {
  tasks: [
    {
      id: 1,
      dataDescription: [
        {
          fileFormat: "VCF",
          attributes: "1 Quantitative",
          featureExtent: "Point",
          featureDensity: "Sparse",
        },
      ],
      taskDescription:
        "Identify regions with high or low values of quantitative attribute.",
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
        "Analyze inter-chromosomal connections.",
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
        "Analyze inter-chromosomal connections.",
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
        "Identify patterns in the genome.",
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
        "Find the location of a specific gene.",
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
        "Analyze values in a specific region of the genome.",
      stimuli: [
        {
          output: "genorec",
          spec: "6_g_spec.json"
        },
        {
          output: "random",
          spec: "6_a_spec.json"
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
          spec: "7_g_spec.json"
        },
        {
          output: "random",
          spec: "7_a_spec.json"
        },
      ],
    },
    {
      id: 8,
      dataDescription: [
        {
          fileFormat: "BIGWIG",
          attributes: "1 Quantitative",
          featureExtent: "Point",
          featureDensity: "Contiguous",
        }
      ],
      taskDescription:
        "Identify the highest value in chromosome 3.",
      stimuli: [
        {
          output: "genorec",
          spec: "8_g_spec.json"
        },
        {
          output: "random",
          spec: "8_a_spec.json"
        },
      ],
    },
    {
      id: 9,
      dataDescription: [
        {
          fileFormat: "BED",
          attributes: "1 Categorical",
          featureExtent: "Segment",
          featureDensity: "Sparse",
        },
        {
          fileFormat: "BED",
          attributes: "1 Categorical",
          featureExtent: "Segment",
          featureDensity: "Sparse",
        }
      ],
      taskDescription:
        "Find regions which contain similar categorical data",
      stimuli: [
        {
          output: "genorec",
          spec: "9_g_spec.json"
        },
        {
          output: "random",
          spec: "9_a_spec.json"
        },
      ],
    },
    {
      id: 10,
      dataDescription: [
        {
          fileFormat: "BIGWIG",
          attributes: "1 Quantitative",
          featureExtent: "Point",
          featureDensity: "Contiguous",
        },
        {
          fileFormat: "SEG",
          attributes: "1 Quantitative",
          featureExtent: "Segment",
          featureDensity: "Sparse",
        }
      ],
      taskDescription:
        "Find the areas in the genome where both quantitative attributes have high values.",
      stimuli: [
        {
          output: "genorec",
          spec: "10_g_spec.json"
        },
        {
          output: "random",
          spec: "10_a_spec.json"
        },
      ],
    },
    {
      id: 11,
      dataDescription: [
        {
          fileFormat: "BED",
          attributes: "1 Categorical",
          featureExtent: "Segment",
          featureDensity: "Sparse",
        },
        {
          fileFormat: "BED",
          attributes: "1 Quantitative",
          featureExtent: "Segment",
          featureDensity: "Sparse",
        },
        {
          fileFormat: "BED",
          attributes: "1 Text",
          featureExtent: "Segment",
          featureDensity: "Sparse",
        }
      ],
      taskDescription:
        "Read categorical, quantitative and text values for a specific location.",
      stimuli: [
        {
          output: "genorec",
          spec: "11_g_spec.json"
        },
        {
          output: "random",
          spec: "11_a_spec.json"
        },
      ],
    },
    {
      id: 12,
      dataDescription: [
        {
          fileFormat: "BED",
          attributes: "1 Categorical, 1 Text",
          featureExtent: "Segment",
          featureDensity: "Sparse",
        }
      ],
      taskDescription:
        "Look for a specific gene in the genome",
      stimuli: [
        {
          output: "genorec",
          spec: "12_g_spec.json"
        },
        {
          output: "random",
          spec: "12_a_spec.json"
        },
      ],
    },
    {
      id: 13,
      dataDescription: [
        {
          fileFormat: "BEDPE",
          attributes: "1 Categorical",
          featureExtent: "Segment",
          featureDensity: "Sparse",
          connection: "Yes"
        },
        {
          fileFormat: "VCF",
          attributes: "1 Quantitative",
          featureExtent: "Point",
          featureDensity: "Sparse",
        },
      ],
      taskDescription:
        "Identify inter-chromosomal connectivity between high value regions.",
      stimuli: [
        {
          output: "genorec",
          spec: "13_g_spec.json"
        },
        {
          output: "random",
          spec: "13_a_spec.json"
        },
      ],
    },
    {
      id: 14,
      dataDescription: [
        {
          fileFormat: "COOLER",
          attributes: "N.A.",
          featureExtent: "Segment",
          featureDensity: "Contiguous",
        },
        {
          fileFormat: "BIGWIG",
          attributes: "1 Quantitative",
          featureExtent: "Point",
          featureDensity: "Contiguous",
        },
        {
          fileFormat: "BED",
          attributes: "1 Quantitative",
          featureExtent: "Segment",
          featureDensity: "Sparse",
        }
      ],
      taskDescription:
        "Identify areas of high connectivity.",
      stimuli: [
        {
          output: "genorec",
          spec: "14_g_spec.json"
        },
        {
          output: "random",
          spec: "14_a_spec.json"
        },
      ],
    },
  ],
};
