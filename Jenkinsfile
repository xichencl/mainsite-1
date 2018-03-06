pipeline {
    agent {
        dockerfile true
    }
	
	environment { CI = 'true' }
	
	stages {
		stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Run') { 
            steps {
                sh 'npm start' 
            }
        }
    }
}