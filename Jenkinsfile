pipeline {
    agent any

    triggers {
        githubPush()
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                credentialsId: 'github-ssh',
                url: 'git@github.com:ELBARGUIMOHAMED/mysite.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t mysite .'
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker stop mysite || true
                docker rm mysite || true
                docker run -d -p 80:80 --name mysite mysite
                '''
            }
        }
    }
}
