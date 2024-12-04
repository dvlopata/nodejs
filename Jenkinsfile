#!/usr/bin/env groovy
pipeline {
    agent any
    stages {
        stage('Install') {
            steps {
                echo 'Install dependencies..'
                bat 'npm install'
                bat 'npm install -g pm2 forever'
            }
        }
        stage('Stop all') {
            steps {
                echo 'Stop all..'
                bat 'forever stopall'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying.'
                bat 'set BUILD_ID=dontKillMe && pm2 start app.js'
            }
        }
    }
}
