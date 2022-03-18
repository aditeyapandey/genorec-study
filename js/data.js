window.data = {
  tasks: [
    {
      id: 1,
      dataDescription: [
        {
          fileFormat: "VCF",
          attributes: "1 Categorical",
          featureExtent: "Point",
          featureDensity: "Sparse",
          connection: "No",
        },
      ],
      taskDescription:
        "Navigate to the window: Chr19: 20,000,000 - Chr19: 80,000,000 and characterize the distribution of the categorical variable i.e. similar values or distinct values.",
      stimuli: [
        {
          output: "genorec",
          spec: "1_g_spec.json",
        },
        {
          output: "random",
          spec: "1_a_spec.json",
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
          connection: "No",
        },
        {
          fileFormat: "VCF",
          attributes: "1 Quantitative",
          featureExtent: "Point",
          featureDensity: "Sparse",
          connection: "No",
        },
      ],
      taskDescription:
        "In this overview, find the areas in the genome where both quantitative attributes have high values. Do not change the zoom level.",
      stimuli: [
        {
          output: "genorec",
          spec: "2_g_spec.json",
        },
        {
          output: "random",
          spec: "2_a_spec.json",
        },
      ],
    },
    {
      id: 3,
      dataDescription: [
        {
          fileFormat: "BIGWIG",
          attributes: "1 Quantitative",
          featureExtent: "Point",
          featureDensity: "Contiguous",
          connection: "No",
        },
      ],
      taskDescription: "Identify if there are any global patterns of interest in the data. Do not change the zoom level.",
      stimuli: [
        {
          output: "genorec",
          spec: "3_g_spec.json",
        },
        {
          output: "random",
          spec: "3_a_spec.json",
        },
      ],
    },
    {
      id: 4,
      dataDescription: [
        {
          fileFormat: "BED",
          attributes: "1 Text",
          featureExtent: "Segment",
          featureDensity: "Sparse",
          connection: "No",
        },
      ],
      taskDescription: "Navigate to the window: Chr6: 149,650,000 - Chr6: 149,750,000, and identify the approximate location of gene 'LOC645967'.",
      stimuli: [
        {
          output: "genorec",
          spec: "4_g_spec.json",
        },
        {
          output: "random",
          spec: "4_a_spec.json",
        },
      ],
    },
    {
      id: 5,
      dataDescription: [
        {
          fileFormat: "BIGWIG",
          attributes: "1 Quantitative",
          featureExtent: "Point",
          featureDensity: "Contiguous",
          connection: "No",
        },
        {
          fileFormat: "BED",
          attributes: "1 Categorical",
          featureExtent: "Segment",
          featureDensity: "Sparse",
          connection: "No",
        },
      ],
      taskDescription: "Navigate to the window: Chr3: 60,000,000 - Chr3: 100,750,000. In this window, find the approximate location of the peak value and characterize the distribution of the categorical variable, i.e., are its values similar or do they vary?",
      stimuli: [
        {
          output: "genorec",
          spec: "5_g_spec.json",
        },
        {
          output: "random",
          spec: "5_a_spec.json",
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
          connection: "No",
        },
        {
          fileFormat: "BIGWIG",
          attributes: "1 Quantitative",
          featureExtent: "Point",
          featureDensity: "Contiguous",
          connection: "No",
        },
      ],
      taskDescription: "Compare values of the quantitative variable  Chr3:100,000,000 and Chr3:150,000,000 with values between Chr6:50,000,000 and Chr6:100,000,000.",
      stimuli: [
        {
          output: "genorec",
          spec: "6_g_spec.json",
        },
        {
          output: "random",
          spec: "6_a_spec.json",
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
          connection: "No",
        },
      ],
      taskDescription: "Navigate to window Chr6:160,000,000 - Chr6: 165,000,000 and look for the gene “PRKN”.  Find the second smallest value within the gene body.",
      stimuli: [
        {
          output: "genorec",
          spec: "7_g_spec.json",
        },
        {
          output: "random",
          spec: "7_a_spec.json",
        },
      ],
    },
    {
      id: 8,
      dataDescription: [
        {
          fileFormat: "BED",
          attributes: "1 Categorical",
          featureExtent: "Segment",
          featureDensity: "Sparse",
          connection: "No",
        },
        {
          fileFormat: "BED",
          attributes: "1 Categorical",
          featureExtent: "Segment",
          featureDensity: "Sparse",
          connection: "No",
        },
      ],
      taskDescription: "Identify regions where both categorical variables have high data density in Chr1 - Chr7.",
      stimuli: [
        {
          output: "genorec",
          spec: "8_g_spec.json",
        },
        {
          output: "random",
          spec: "8_a_spec.json",
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
          connection: "No",
        },
        {
          fileFormat: "BED",
          attributes: "1 Quantitative",
          featureExtent: "Segment",
          featureDensity: "Sparse",
          connection: "No",
        },
        {
          fileFormat: "BED",
          attributes: "1 Text",
          featureExtent: "Segment",
          featureDensity: "Sparse",
          connection: "No",
        },
      ],
      taskDescription:
        "Navigate to window Chr13:48,000,000 - Chr13: 52,000,000. Find the region with a peak and corresponding to the peak value find the category and gene annotation.",
      stimuli: [
        {
          output: "genorec",
          spec: "9_g_spec.json",
        },
        {
          output: "random",
          spec: "9_a_spec.json",
        },
      ],
    },
    {
      id: 10,
      dataDescription: [
        {
          fileFormat: "BEDPE",
          attributes: "1 Categorical",
          featureExtent: "Segment",
          featureDensity: "Sparse",
          connection: "Yes",
        } 
      ],
      taskDescription:
        "Compared to Ch3 does Ch 8 have a lower or higher number of intrachromosomal connections (connections that start and end within the chromsome)?",
      stimuli: [
        {
          output: "genorec",
          spec: "10_g_spec.json",
        },
        {
          output: "random",
          spec: "10_a_spec.json",
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
          connection: "No",
        },
      ],
      taskDescription: "Overview ?",
      stimuli: [
        {
          output: "genorec",
          spec: "12_g_spec.json",
        },
        {
          output: "random",
          spec: "12_a_spec.json",
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
          connection: "Yes",
        },
        {
          fileFormat: "VCF",
          attributes: "1 Quantitative",
          featureExtent: "Point",
          featureDensity: "Sparse",
          connection: "No",
        },
      ],
      taskDescription:
        "Identify inter-chromosomal connectivity between high value regions.",
      stimuli: [
        {
          output: "genorec",
          spec: "13_g_spec.json",
        },
        {
          output: "random",
          spec: "13_a_spec.json",
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
          connection: "Yes",
        },
        {
          fileFormat: "BIGWIG",
          attributes: "1 Quantitative",
          featureExtent: "Point",
          featureDensity: "Contiguous",
          connection: "No",
        },
        {
          fileFormat: "BED",
          attributes: "1 Quantitative",
          featureExtent: "Segment",
          featureDensity: "Sparse",
          connection: "No",
        },
      ],
      taskDescription: "Identify areas of high connectivity.",
      stimuli: [
        {
          output: "genorec",
          spec: "14_g_spec.json",
        },
        {
          output: "random",
          spec: "14_a_spec.json",
        },
      ],
    },
  ],
};

// window.data = {
//   tasks: [
//     {
//       id: 1,
//       dataDescription: [
//         {
//           fileFormat: "VCF",
//           attributes: "1 Quantitative",
//           featureExtent: "Point",
//           featureDensity: "Sparse",
//           connection: "No",
//         },
//       ],
//       taskDescription:
//         "Identify regions with high or low values of quantitative attribute.",
//       stimuli: [
//         {
//           output: "genorec",
//           spec: "1_g_spec.json",
//         },
//         {
//           output: "random",
//           spec: "1_a_spec.json",
//         },
//       ],
//     },
//     {
//       id: 2,
//       dataDescription: [
//         {
//           fileFormat: "VCF",
//           attributes: "1 Categorical",
//           featureExtent: "Point",
//           featureDensity: "Sparse",
//           connection: "No",
//         }
//       ],
//       taskDescription: "Find the most common category in Chr 3.",
//       stimuli: [
//         {
//           output: "genorec",
//           spec: "2_g_spec.json",
//         },
//         {
//           output: "random",
//           spec: "2_a_spec.json",
//         },
//       ],
//     },
//     {
//       id: 3,
//       dataDescription: [
//         {
//           fileFormat: "BEDPE",
//           attributes: "N.A.",
//           featureExtent: "Segment",
//           featureDensity: "Sparse",
//           connection: "Yes",
//         },
//       ],
//       taskDescription: "Analyze inter-chromosomal connections.",
//       stimuli: [
//         {
//           output: "genorec",
//           spec: "3_g_spec.json",
//         },
//         {
//           output: "random",
//           spec: "3_a_spec.json",
//         },
//       ],
//     },
//     {
//       id: 4,
//       dataDescription: [
//         {
//           fileFormat: "BIGWIG",
//           attributes: "1 Quantitative",
//           featureExtent: "Point",
//           featureDensity: "Contiguous",
//           connection: "No",
//         },
//       ],
//       taskDescription: "Identify patterns in the genome.",
//       stimuli: [
//         {
//           output: "genorec",
//           spec: "4_g_spec.json",
//         },
//         {
//           output: "random",
//           spec: "4_a_spec.json",
//         },
//       ],
//     },
//     {
//       id: 5,
//       dataDescription: [
//         {
//           fileFormat: "BED",
//           attributes: "1 Text",
//           featureExtent: "Segment",
//           featureDensity: "Sparse",
//           connection: "No",
//         },
//       ],
//       taskDescription: "Find the location of a specific gene.",
//       stimuli: [
//         {
//           output: "genorec",
//           spec: "5_g_spec.json",
//         },
//         {
//           output: "random",
//           spec: "5_a_spec.json",
//         },
//       ],
//     },
//     {
//       id: 6,
//       dataDescription: [
//         {
//           fileFormat: "BIGWIG",
//           attributes: "1 Quantitative",
//           featureExtent: "Point",
//           featureDensity: "Contiguous",
//           connection: "No",
//         },
//         {
//           fileFormat: "BED",
//           attributes: "1 Categorical",
//           featureExtent: "Segment",
//           featureDensity: "Sparse",
//           connection: "No",
//         },
//       ],
//       taskDescription: "Analyze values in a specific region of the genome.",
//       stimuli: [
//         {
//           output: "genorec",
//           spec: "6_g_spec.json",
//         },
//         {
//           output: "random",
//           spec: "6_a_spec.json",
//         },
//       ],
//     },
//     {
//       id: 7,
//       dataDescription: [
//         {
//           fileFormat: "BIGWIG",
//           attributes: "1 Quantitative",
//           featureExtent: "Point",
//           featureDensity: "Contiguous",
//           connection: "No",
//         },
//         {
//           fileFormat: "BIGWIG",
//           attributes: "1 Quantitative",
//           featureExtent: "Point",
//           featureDensity: "Contiguous",
//           connection: "No",
//         },
//       ],
//       taskDescription: "Compare values between two regions of the genome.",
//       stimuli: [
//         {
//           output: "genorec",
//           spec: "7_g_spec.json",
//         },
//         {
//           output: "random",
//           spec: "7_a_spec.json",
//         },
//       ],
//     },
//     {
//       id: 8,
//       dataDescription: [
//         {
//           fileFormat: "BIGWIG",
//           attributes: "1 Quantitative",
//           featureExtent: "Point",
//           featureDensity: "Contiguous",
//           connection: "No",
//         },
//       ],
//       taskDescription: "Identify the highest value in chromosome 3.",
//       stimuli: [
//         {
//           output: "genorec",
//           spec: "8_g_spec.json",
//         },
//         {
//           output: "random",
//           spec: "8_a_spec.json",
//         },
//       ],
//     },
//     {
//       id: 9,
//       dataDescription: [
//         {
//           fileFormat: "BED",
//           attributes: "1 Categorical",
//           featureExtent: "Segment",
//           featureDensity: "Sparse",
//           connection: "No",
//         },
//         {
//           fileFormat: "BED",
//           attributes: "1 Categorical",
//           featureExtent: "Segment",
//           featureDensity: "Sparse",
//           connection: "No",
//         },
//       ],
//       taskDescription: "Identify regions with maximum combined data density.",
//       stimuli: [
//         {
//           output: "genorec",
//           spec: "9_g_spec.json",
//         },
//         {
//           output: "random",
//           spec: "9_a_spec.json",
//         },
//       ],
//     },
//     {
//       id: 10,
//       dataDescription: [
//         {
//           fileFormat: "BIGWIG",
//           attributes: "1 Quantitative",
//           featureExtent: "Point",
//           featureDensity: "Contiguous",
//           connection: "No",
//         },
//         {
//           fileFormat: "SEG",
//           attributes: "1 Quantitative",
//           featureExtent: "Segment",
//           featureDensity: "Sparse",
//           connection: "No",
//         },
//       ],
//       taskDescription:
//         "Find the areas in the genome where both quantitative attributes have high values.",
//       stimuli: [
//         {
//           output: "genorec",
//           spec: "10_g_spec.json",
//         },
//         {
//           output: "random",
//           spec: "10_a_spec.json",
//         },
//       ],
//     },
//     {
//       id: 11,
//       dataDescription: [
//         {
//           fileFormat: "BED",
//           attributes: "1 Categorical",
//           featureExtent: "Segment",
//           featureDensity: "Sparse",
//           connection: "No",
//         },
//         {
//           fileFormat: "BED",
//           attributes: "1 Quantitative",
//           featureExtent: "Segment",
//           featureDensity: "Sparse",
//           connection: "No",
//         },
//         {
//           fileFormat: "BED",
//           attributes: "1 Text",
//           featureExtent: "Segment",
//           featureDensity: "Sparse",
//           connection: "No",
//         },
//       ],
//       taskDescription:
//         "Read categorical, quantitative and text values for a specific location.",
//       stimuli: [
//         {
//           output: "genorec",
//           spec: "11_g_spec.json",
//         },
//         {
//           output: "random",
//           spec: "11_a_spec.json",
//         },
//       ],
//     },
//     {
//       id: 12,
//       dataDescription: [
//         {
//           fileFormat: "BED",
//           attributes: "1 Categorical, 1 Text",
//           featureExtent: "Segment",
//           featureDensity: "Sparse",
//           connection: "No",
//         },
//       ],
//       taskDescription: "Overview ?",
//       stimuli: [
//         {
//           output: "genorec",
//           spec: "12_g_spec.json",
//         },
//         {
//           output: "random",
//           spec: "12_a_spec.json",
//         },
//       ],
//     },
//     {
//       id: 13,
//       dataDescription: [
//         {
//           fileFormat: "BEDPE",
//           attributes: "1 Categorical",
//           featureExtent: "Segment",
//           featureDensity: "Sparse",
//           connection: "Yes",
//         },
//         {
//           fileFormat: "VCF",
//           attributes: "1 Quantitative",
//           featureExtent: "Point",
//           featureDensity: "Sparse",
//           connection: "No",
//         },
//       ],
//       taskDescription:
//         "Identify inter-chromosomal connectivity between high value regions.",
//       stimuli: [
//         {
//           output: "genorec",
//           spec: "13_g_spec.json",
//         },
//         {
//           output: "random",
//           spec: "13_a_spec.json",
//         },
//       ],
//     },
//     {
//       id: 14,
//       dataDescription: [
//         {
//           fileFormat: "COOLER",
//           attributes: "N.A.",
//           featureExtent: "Segment",
//           featureDensity: "Contiguous",
//           connection: "Yes"
//         },
//         {
//           fileFormat: "BIGWIG",
//           attributes: "1 Quantitative",
//           featureExtent: "Point",
//           featureDensity: "Contiguous",
//           connection: "No"
//         },
//         {
//           fileFormat: "BED",
//           attributes: "1 Quantitative",
//           featureExtent: "Segment",
//           featureDensity: "Sparse",
//           connection: "No"
//         },
//       ],
//       taskDescription: "Identify areas of high connectivity.",
//       stimuli: [
//         {
//           output: "genorec",
//           spec: "14_g_spec.json",
//         },
//         {
//           output: "random",
//           spec: "14_a_spec.json",
//         },
//       ],
//     },
//   ],
// };
