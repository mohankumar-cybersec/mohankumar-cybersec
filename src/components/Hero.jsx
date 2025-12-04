import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Terminal, Cloud, Shield } from 'lucide-react';
import { personalDetails } from '../data';
import profileImg from '../assets/profile.png'; // Import local image

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-slate-950">
            {/* Animated Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-3 py-1 mb-4 border border-cyan-500/30 rounded-full bg-cyan-500/5 text-cyan-400 text-sm font-medium tracking-wide">
                        Cybersecurity & Cloud Engineering Student
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
                        {personalDetails.name}
                    </h1>
                    <h2 className="text-xl md:text-2xl text-slate-400 mb-6 font-light">
                        Cybersecurity & Cloud Enthusiast <span className="text-cyan-500">|</span> Linux <span className="text-cyan-500">|</span> AWS <span className="text-cyan-500">|</span> Networking
                    </h2>
                    <p className="text-slate-400 text-lg mb-8 max-w-lg leading-relaxed">
                        Building secure, scalable infrastructures and exploring the depths of digital forensics.
                        Ready to tackle modern security challenges.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-10">
                        <a href="#projects" className="btn-primary flex items-center gap-2">
                            View Projects <ArrowRight size={20} />
                        </a>
                        <a href="#contact" className="btn-outline flex items-center gap-2">
                            Contact Me <Mail size={20} />
                        </a>
                    </div>

                    <div className="flex gap-6">
                        <a href={personalDetails.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                            <Github size={24} />
                        </a>
                        <a href={personalDetails.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href={`mailto:${personalDetails.email}`} className="text-slate-400 hover:text-cyan-400 transition-colors">
                            <Mail size={24} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex justify-center"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        {/* Tech Icons Orbiting */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border border-slate-800"
                        >
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-950 p-2 rounded-full border border-slate-700 text-cyan-400">
                                <Terminal size={24} />
                            </div>
                            <div className="absolute top-1/2 -right-4 -translate-y-1/2 bg-slate-950 p-2 rounded-full border border-slate-700 text-cyan-400">
                                <Cloud size={24} />
                            </div>
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-slate-950 p-2 rounded-full border border-slate-700 text-cyan-400">
                                <Shield size={24} />
                            </div>
                        </motion.div>

                        <div className="absolute inset-8 border border-cyan-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

                        <div className="absolute inset-12 rounded-full overflow-hidden border-4 border-slate-800 bg-slate-900 flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.2)]">
                            {/* User Image */}
                            <img
                                src={profileImg}
                                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=800"; }} // Fallback
                                alt="Mohan Kumar"
                                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
