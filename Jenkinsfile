pipeline {
    agent {
        dockerfile true
    }
	
	environment { CI = 'true' }
	
	#need to build test and deliver stage sh files
    stages {
		stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Test') { 
            steps {
                sh 'npm start' 
            }
        }
    }
}