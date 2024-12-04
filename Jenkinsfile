pipeline {
    agent any
    stages {
        stage('Install') {
            steps {
                echo 'Installing dependencies...'
                bat 'npm install'
            }
        }
        stage('Stop all') {
            steps {
                echo 'Stopping all running instances...'
                bat 'forever stopall || true'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Starting application...'
                bat 'BUILD_ID=dontKillMe pm2 start app.js'
            }
        }
    }
}
