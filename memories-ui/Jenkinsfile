pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    print("Building Code")
                    bat "npm install"
                    bat "npm run build"
                }
            }
        }
        
         stage('Test') {
            steps {
                script {
                    print("Testing Code")
                    bat "npm run sonar"
                }
            }
        }
    }
}