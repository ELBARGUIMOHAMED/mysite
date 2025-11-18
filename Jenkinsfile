pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/ELBARGUIMOHAMED/mysite.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t mysite .'
            }
        }

        stage('Deploy to Server') {
            steps {
                sshagent(['aws-ssh-key']) {
                    sh '''
                    ssh -o StrictHostKeyChecking=no ubuntu@44.211.239.155 '
                        docker stop mysite || true &&
                        docker rm mysite || true &&
                        docker run -d -p 80:80 --name mysite mysite
                    '
                    '''
                }
            }
        }
    }
}
