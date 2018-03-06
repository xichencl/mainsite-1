pipeline {
    agent {
        dockerfile true
    }
    stages {
        stage('Run') { 
            steps {
                sh 'npm start' 
            }
        }
    }
}