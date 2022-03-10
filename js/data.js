window.data = {
  tasks: [
    {
      id: 1,
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
        },
      ],
      taskDescription: "Get an overview of the entire genome.",
      stimuli: [
        {
          output: "genorec",
          spec: {
            tracks: [
              {
                data: {
                  url: "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
                  type: "multivec",
                  row: "sample",
                  column: "position",
                  value: "peak",
                  categories: ["sample 1", "sample 2"],
                },
                mark: "bar",
                x: { field: "position", type: "genomic", axis: "top" },
                y: { field: "peak", type: "quantitative" },
                row: { field: "sample", type: "nominal" },
                color: { field: "sample", type: "nominal", legend: true },
              },
            ],
          },
        },
        {
            output: "random",
            spec: {
              tracks: [
                {
                  data: {
                    url: "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
                    type: "multivec",
                    row: "sample",
                    column: "position",
                    value: "peak",
                    categories: ["sample 1", "sample 2"],
                  },
                  mark: "line",
                  x: { field: "position", type: "genomic", axis: "top" },
                  y: { field: "peak", type: "quantitative" },
                  row: { field: "sample", type: "nominal" },
                  color: { field: "sample", type: "nominal", legend: true },
                },
              ],
            },
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
      taskDescription: "Identify and analyze a region of interest in the genome.",
      stimuli: [
        {
          output: "genorec",
          spec: {
            tracks: [
              {
                data: {
                  url: "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
                  type: "multivec",
                  row: "sample",
                  column: "position",
                  value: "peak",
                  categories: ["sample 1"],
                },
                mark: "point",
                x: { field: "position", type: "genomic", axis: "top" },
                y: { field: "peak", type: "quantitative" },
                row: { field: "sample", type: "nominal" },
                color: { field: "sample", type: "nominal", legend: true },
              },
            ],
          },
        },
        {
            output: "random",
            spec: {
              tracks: [
                {
                  data: {
                    url: "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
                    type: "multivec",
                    row: "sample",
                    column: "position",
                    value: "peak",
                    categories: ["sample 1"],
                  },
                  mark: "line",
                  x: { field: "position", type: "genomic", axis: "top" },
                  y: { field: "peak", type: "quantitative" },
                  row: { field: "sample", type: "nominal" },
                  color: { field: "sample", type: "nominal", legend: true },
                },
              ],
            },
          },
      ],
    },
  ],
};
