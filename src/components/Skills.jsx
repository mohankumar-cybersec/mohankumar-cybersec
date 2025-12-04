import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';

const Skills = () => {
    return (
        <section id="skills" className="section-padding bg-slate-900/30">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical & Soft Skills</h2>
                    <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            whileHover={{ scale: 1.05, borderColor: '#06b6d4' }}
                            className="glass flex flex-col items-center justify-center p-6 text-center group cursor-pointer hover:bg-slate-800/50"
                        >
                            <div className="mb-4 p-4 bg-slate-950 rounded-full border border-slate-800 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300">
                                <skill.icon size={32} className="text-cyan-500" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-slate-200 group-hover:text-white">{skill.name}</h3>
                            <span className={`text-xs px-3 py-1 rounded-full border ${skill.level === 'Soft Skill'
                                    ? 'bg-purple-500/10 text-purple-400 border-purple-500/30'
                                    : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
                                }`}>
                                {skill.level}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
