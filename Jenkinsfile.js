pipeline {
    agent any
    stages {
        stage('Install') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }
        stage('Stop all') {
            steps {
                echo 'Stopping all running instances...'
                sh 'forever stopall || true'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Starting application...'
                sh 'BUILD_ID=dontKillMe pm2 start app.js'
            }
        }
    }
}
