const scanner = require("sonarqube-scanner");
scanner(
  {
    serverUrl: "http://localhost:9000/",
    token: "b47019bb462062def741109afd5778c34f5f05c1",
    options: {
      'sonar.projectName': 'memories-backend',
      "sonar.sources": "./",
    },
  },
  () => process.exit()
);