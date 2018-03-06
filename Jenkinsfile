pipeline {
    agent {
        dockerfile true
    }
	
	environment { CI = 'true' }
	
	#need to build test and deliver stage sh files
    stages {
        stage('Run') { 
            steps {
                sh 'npm start' 
            }
        }
    }
}