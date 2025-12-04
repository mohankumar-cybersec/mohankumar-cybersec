import { Book, Cloud, Code, Globe, Lock, Server, Shield, Terminal, Users, Clock, Brain, Cpu, Database, Layout, Search } from "lucide-react";

export const personalDetails = {
    name: "Mohankumar E M",
    role: "Cybersecurity & AI Student | Aspiring Network Security Engineer",
    email: "mohankumar.cyber25@gmail.com",
    about: "I am a B.E. CSE Cybersecurity student at KGiSL Institute of Technology with a strong passion for securing digital infrastructures and building intelligent AI agents. My expertise spans Linux administration, AWS cloud services, and Network Security. I am currently exploring the intersection of Artificial Intelligence and Cybersecurity, working on projects like AI Negotiators and Emotion Analysis systems.",
    socials: {
        github: "https://github.com/mohankumar-cybersec",
        linkedin: "https://www.linkedin.com/in/mohankumar-e-m",
        twitter: "#",
    }
};

export const skills = [
    { name: "Linux & SysAdmin", icon: Terminal, level: "Advanced" },
    { name: "Network Security", icon: Shield, level: "Advanced" },
    { name: "AWS Cloud", icon: Cloud, level: "Intermediate" },
    { name: "Python & AI", icon: Brain, level: "Intermediate" },
    { name: "Ethical Hacking", icon: Lock, level: "Intermediate" },
    { name: "Web Technologies", icon: Globe, level: "Basic" },
    { name: "Data Science", icon: Database, level: "Basic" },
    { name: "Leadership", icon: Users, level: "Soft Skill" },
];

export const projects = [
    {
        id: 1,
        name: "TNQ PDF Visuals Pipeline",
        description: "An automated pipeline to extract, analyze, and verify visual content from PDF documents using OCR and AI.",
        tech: ["Python", "OCR", "AI/ML", "Pandas"],
        github: "https://github.com/mohankumar-cybersec/mohankumar-cybersec/blob/main/06_AI_DataScience/TNQ_PDF_Visuals_Pipeline.ipynb",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 2,
        name: "Negotiator AI Agent",
        description: "An intelligent AI agent built with Llama-3-8B capable of complex negotiation strategies and dialogue.",
        tech: ["Llama-3", "Python", "Multi-Agent Systems"],
        github: "https://github.com/mohankumar-cybersec/mohankumar-cybersec/tree/main/06_AI_DataScience/Negotiator_AI_Agent",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 3,
        name: "SIH Emotion Analyzer",
        description: "Space Astronaut Emotion Analyzer prototype designed to detect stress and emotional states in real-time.",
        tech: ["AI/ML", "Emotion Recognition", "Python"],
        github: "https://github.com/mohankumar-cybersec/mohankumar-cybersec/tree/main/06_AI_DataScience/SIH_Space_Emotion_Analyzer",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 4,
        name: "Python Port Scanner",
        description: "A multi-threaded network reconnaissance tool to identify open ports and vulnerabilities on target systems.",
        tech: ["Python", "Networking", "Socket Programming"],
        github: "https://github.com/mohankumar-cybersec/mohankumar-cybersec/tree/main/05_Mini_Projects",
        image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 5,
        name: "AWS 2-Tier Architecture",
        description: "Designed a secure 2-tier web architecture with separate web and database layers on AWS VPC.",
        tech: ["AWS", "VPC", "EC2", "RDS"],
        github: "https://github.com/mohankumar-cybersec/mohankumar-cybersec/tree/main/03_AWS",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 6,
        name: "Linux Automation Scripts",
        description: "Collection of Bash scripts for automating system administration tasks and user management.",
        tech: ["Bash", "Linux", "Automation"],
        github: "https://github.com/mohankumar-cybersec/mohankumar-cybersec/tree/main/02_Linux",
        image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=1000"
    }
];

export const education = [
    {
        id: 1,
        degree: "B.E. CSE (Cybersecurity)",
        institution: "KGiSL Institute of Technology",
        year: "2024 – 2028",
        description: "Specializing in Network Security, Cloud Computing, and AI."
    },
    {
        id: 2,
        degree: "IMS & Cybersecurity Program",
        institution: "KG Micro College",
        year: "Completed",
        description: "Intensive hands-on training in Infrastructure Management and Security."
    },
    {
        id: 3,
        degree: "Diploma in EEE",
        institution: "Polytechnic College",
        year: "Completed",
        description: "Foundation in Electrical and Electronics Engineering."
    }
];

export const achievements = [
    {
        id: 1,
        title: "TNQ 90-day Tech Program",
        description: "Successfully completed the intensive technical training program focused on advanced problem solving."
    },
    {
        id: 2,
        title: "AI Negotiator Hackathon",
        description: "Developed a Llama-3 based AI agent for automated negotiation scenarios."
    },
    {
        id: 3,
        title: "Smart India Hackathon (SIH)",
        description: "Prototyped an astronaut emotion analysis system for space missions."
    }
];
