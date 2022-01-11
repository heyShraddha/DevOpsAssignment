def modules = ['all-post-service', 'edit-post-service'];
pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    modules.each { item -> 
                        dir("${item}"){
                            print("Building Code")
                            bat "npm install"
                            // bat "npm run build"
                        }
                    }
                }
            }
        }
        
         stage('Test') {
            steps {
                script {
                     modules.each { item -> 
                        dir("${item}"){
                        print("Testing Code")
                        bat "npm run sonar"    
                    
                        }
                    }
                }
            }
        }
    }
}