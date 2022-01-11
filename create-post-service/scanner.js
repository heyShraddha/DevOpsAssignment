const scanner = require("sonarqube-scanner");
scanner(
  {
    serverUrl: "http://localhost:9000/",
    token: "fbd0549fcb1259eaa5fc77ead461b4248aaf690e",
    options: {
      'sonar.projectName': 'create-post-service',
      "sonar.sources": "./",
    },
  },
  () => process.exit()
);