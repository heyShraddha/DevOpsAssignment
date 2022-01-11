const scanner = require("sonarqube-scanner");
scanner(
  {
    serverUrl: "http://localhost:9000/",
    token: "278824d0c252916a28a9bed2ce5357223745aaa7",
    options: {
      'sonar.projectName': 'all-post-service',
      "sonar.sources": "./",
    },
  },
  () => process.exit()
);