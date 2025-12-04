import React from 'react';
import { motion } from 'framer-motion';
import { education, personalDetails } from '../data';
import { GraduationCap, Calendar, User } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section-padding relative">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass p-8 rounded-2xl"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <User className="text-cyan-400" size={28} />
                            <h3 className="text-2xl font-bold text-white">Who I Am</h3>
                        </div>
                        <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                            {personalDetails.about}
                        </p>
                        <p className="text-slate-300 leading-relaxed">
                            I thrive on solving complex problems, whether it's configuring a secure Linux environment, architecting a cloud solution on AWS, or analyzing network traffic for vulnerabilities. My goal is to contribute to a safer digital world.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold mb-8 text-white pl-4 border-l-4 border-cyan-500">Education Timeline</h3>
                        <div className="space-y-8 ml-3 pl-8 relative border-l border-slate-800">
                            {education.map((edu, index) => (
                                <div key={edu.id} className="relative group">
                                    <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-slate-950 border-2 border-cyan-500 group-hover:bg-cyan-500 transition-colors duration-300 shadow-[0_0_10px_rgba(6,182,212,0.3)]"></span>
                                    <div className="glass p-6 rounded-xl hover:border-cyan-500/30 transition-all duration-300">
                                        <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
                                            <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{edu.degree}</h4>
                                            <span className="flex items-center text-sm text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                                                <Calendar size={14} className="mr-2" /> {edu.year}
                                            </span>
                                        </div>
                                        <p className="text-slate-400 font-medium mb-2 flex items-center">
                                            <GraduationCap size={16} className="mr-2" /> {edu.institution}
                                        </p>
                                        <p className="text-slate-500 text-sm">{edu.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
