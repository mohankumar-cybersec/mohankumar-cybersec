# ☁️ AWS – EC2 & Cloud Basics

## 🌐 What is AWS?
Amazon Web Services (AWS) is a cloud platform offering services like computing, storage, databases, networking, and more.

## 🔧 What is EC2?
Amazon EC2 (Elastic Compute Cloud) provides resizable virtual machines in the cloud.

### EC2 Key Concepts:
- **AMI**: Amazon Machine Image – OS template to launch EC2
- **Instance Type**: Defines hardware (CPU, RAM)
- **Key Pair**: For SSH access
- **Security Group**: Acts as a virtual firewall
- **Elastic IP**: Static IP for public access

## 🚀 Steps to Launch EC2:
1. Choose AMI (e.g., Amazon Linux 2, Ubuntu)
2. Select Instance Type (e.g., t2.micro for free tier)
3. Configure Instance (Network, IAM role, etc.)
4. Add Storage (default 8GB or more)
5. Add Tags (Name=MyEC2)
6. Configure Security Group (open port 22 for SSH, 80 for HTTP)
7. Review and Launch with a key pair

## 🧠 Why EC2 in Cybersecurity?
- Host tools (Kali, Metasploit)
- Run web apps for testing
- Practice firewall rules
- Capture logs via CloudWatch

---

> 📁 This file is part of the "03_AWS" folder in Mohankumar's Cybersecurity GitHub Repository.
