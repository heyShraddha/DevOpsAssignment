const scanner = require("sonarqube-scanner");
scanner(
  {
    serverUrl: "http://localhost:9000/",
    token: "7a14d5aa24d47c15a3b3c301a8b08d1426287698",
    options: {
      'sonar.projectName': 'memories-ui',
      "sonar.sources": "./src",
    },
  },
  () => process.exit()
);