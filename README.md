# 🚀 End-to-End DevOps CI/CD Pipeline on AWS

![DevOps](https://img.shields.io/badge/DevOps-Pipeline-blue?style=for-the-badge&logo=githubactions)
![AWS](https://img.shields.io/badge/AWS-EC2-orange?style=for-the-badge&logo=amazon-aws)
![Jenkins](https://img.shields.io/badge/CI%2FCD-Jenkins-red?style=for-the-badge&logo=jenkins)
![Docker](https://img.shields.io/badge/Containerization-Docker-blue?style=for-the-badge&logo=docker)
![Nginx](https://img.shields.io/badge/Reverse_Proxy-Nginx-green?style=for-the-badge&logo=nginx)

> **Author:** Mohamed Elbargui | **Year:** 2025  
> **Project Type:** Full DevOps Case Study & Implementation

---

## 📄 Documentation & Proof of Work
This project is fully documented with **architecture diagrams, configuration logs, and deployment verification screenshots**.

### 👉 [Click Here to View the Full Case Study (PDF)](./DevOps-Case-Study.pdf)

---

## 📖 Project Overview
This repository contains the configuration and implementation details of a production-ready **CI/CD Pipeline deployed on AWS**.

I automated the entire software delivery process: starting from a **Git Push**, passing through **Jenkins** for automation, containerizing the application with **Docker**, and finally deploying it to a Production Server behind an **Nginx Reverse Proxy** secured with **HTTPS**.

---

## 🏗️ Architecture & Infrastructure
The project infrastructure consists of **3 AWS EC2 Instances** (running Ubuntu 24.04), communicating securely via SSH and private networking.

| Server Role | Description | Key Services |
|:---:|---|---|
| **Jenkins Node** | The Orchestrator. Handles Webhooks, Builds, and Remote Deployments. | `Jenkins (Port 8080)`, `Java` |
| **Production Node** | The Live Server. Hosts the Dockerized Application. | `Docker`, `Nginx (Reverse Proxy)`, `SSL` |
| **Webhook/Tools Node** | Handles external triggers and utility operations. | `Webhook Listener`, `Git` |

---

## 🔄 The CI/CD Workflow (Pipeline)
The pipeline is fully automated. Here is the lifecycle of a deployment:

1.  **Code Commit:** Developer pushes code to the `main` branch.
2.  **Trigger:** GitHub Webhook detects the event and wakes up Jenkins.
3.  **Build & Test:** Jenkins pulls the code and validates configurations.
4.  **Containerization:** A Docker Image is built from the source code.
5.  **Deployment:**
    *   Jenkins SSHs into the Production Server.
    *   Stops and removes the old container.
    *   Spins up the new container on port `8080`.
6.  **Exposure:** **Nginx** acts as a Reverse Proxy, receiving traffic on Ports `80/443` and forwarding it to the Docker container.

---

## 🛠️ Key Technical Implementations
### 1. Security & Networking
*   Configured **AWS Security Groups** to strictly limit access (SSH only for admins, HTTP/HTTPS for public).
*   Implemented **SSH Key-based authentication** between Jenkins and Production servers.

### 2. Nginx Reverse Proxy
*   Used Nginx to act as a shield for the application container.
*   Configured **SSL Certificates** manually to enable secure HTTPS access.

### 3. Process Management
*   Used `systemd` to manage Jenkins and Nginx services, ensuring high availability and auto-restart on failure.

---

## 🔮 Future Roadmap
As outlined in the Case Study conclusion, the next version of this project will introduce:
- [ ] **Infrastructure as Code:** Migrating manual EC2 creation to **Terraform**.
- [ ] **Orchestration:** Moving from Docker to **Kubernetes (K8s)** cluster.
- [ ] **Monitoring:** Adding **Prometheus & Grafana** dashboards.
- [ ] **SSL Automation:** Using **Certbot (Let's Encrypt)** for auto-renewal.

---

## 👤 Author
**Mohamed Elbargui**  
*Junior DevOps Engineer | Cloud & Automation Enthusiast*

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/mohamed-elbargui-226613252)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-orange?style=for-the-badge&logo=html5)](https://elbarguimohamed.github.io/Portfolio/)
