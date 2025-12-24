# 🚀 End-to-End DevOps CI/CD Pipeline on AWS

![DevOps](https://img.shields.io/badge/DevOps-Pipeline-blue?style=for-the-badge&logo=githubactions)
![AWS](https://img.shields.io/badge/AWS-EC2-orange?style=for-the-badge&logo=amazon-aws)
![Jenkins](https://img.shields.io/badge/CI%2FCD-Jenkins-red?style=for-the-badge&logo=jenkins)
![Docker](https://img.shields.io/badge/Containerization-Docker-blue?style=for-the-badge&logo=docker)
![Nginx](https://img.shields.io/badge/Reverse_Proxy-Nginx-green?style=for-the-badge&logo=nginx)

> **Author:** Mohamed Elbargui | **Year:** 2025  
> **Project Type:** DevOps Case Study

---

## 📖 Project Overview
This project demonstrates a production-ready **CI/CD Pipeline** deployed on **AWS**.  
It automates the deployment of a web application using **Jenkins**, containerizes it with **Docker**, and serves it securely using **Nginx as a Reverse Proxy** with HTTPS support.

The goal was to simulate a real-world DevOps environment where code changes are automatically built, tested, and deployed to a production server without manual intervention.

---

## 🏗️ Architecture
The infrastructure consists of **3 AWS EC2 Instances** (Ubuntu 24.04) configured with specific Security Groups and Roles:

| Server Name | Role | Ports Open |
|-------------|------|------------|
| **Jenkins Server** | CI/CD Orchestrator | `8080` (UI), `22` (SSH), `80` (Webhooks) |
| **Production Server** | Hosting App (Docker + Nginx) | `80` (HTTP), `443` (HTTPS), `22` (SSH) |
| **Tools/Webhook Node** | Helper & Trigger Handling | `22`, `80` |

### 🖼️ Architecture Diagram
*(Place your architecture diagram screenshot here - e.g., from Page 2)*
![Architecture Diagram](./screenshots/architecture.png)

---

## ⚙️ Tech Stack & Tools
*   **Cloud Provider:** AWS (EC2, Security Groups, IAM).
*   **CI/CD:** Jenkins (Automated Pipelines).
*   **Containerization:** Docker (Images & Containers).
*   **Web Server:** Nginx (Reverse Proxy & SSL Termination).
*   **Version Control:** GitHub (Webhooks for Triggers).
*   **OS:** Linux Ubuntu 24.04 LTS.
*   **Security:** SSH Keys, SSL Certificates, Firewall Rules.

---

## 🔄 The CI/CD Flow
Every time code is pushed to the `main` branch, the following automated steps occur:

1.  **Trigger:** GitHub Webhook detects the push and notifies Jenkins.
2.  **Checkout:** Jenkins pulls the latest code from the repository.
3.  **Build:** Jenkins processes the application files.
4.  **Dockerize:** A new Docker image is built for the application.
5.  **Deploy:**
    *   The image is deployed to the **Production Server**.
    *   The old container is stopped/removed.
    *   The new container runs on Port `8080`.
6.  **Serve:** Nginx receives traffic on Port `80/443` and proxies it to the Docker container.

### 🖼️ Pipeline Visualization
*(Place the Pipeline Diagram screenshot here - from Page 3)*
![Pipeline Flow](./screenshots/pipeline-flow.png)

---

## 🛠️ Implementation Details

### 1. Infrastructure Setup (AWS)
*   Provisioned 3 EC2 instances using **Ubuntu 24.04**.
*   Configured **Security Groups** to allow SSH access and Web Traffic.
*   Assigned Elastic IPs for static access.

### 2. Jenkins Configuration
*   Installed Jenkins on the dedicated CI server.
*   Configured **GitHub Webhooks** to trigger builds automatically.
*   Set up **SSH Agent** to allow Jenkins to deploy artifacts to the Production Server remotely.

### 3. Nginx Reverse Proxy & SSL
*   Configured Nginx to listen on ports `80` and `443`.
*   Set up a **Reverse Proxy** to forward traffic to the Docker container.
*   Implemented **SSL Certificates** for secure HTTPS communication.

```nginx
# Sample Nginx Config Used
server {
    listen 443 ssl http2;
    server_name _;
    ssl_certificate /etc/ssl/certs/mycert.crt;
    ssl_certificate_key /etc/ssl/private/mykey.key;

    location / {
        proxy_pass http://localhost:8080;
    }
}
