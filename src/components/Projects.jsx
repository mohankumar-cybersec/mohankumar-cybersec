import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data';
import { Github, ExternalLink, X, Code2 } from 'lucide-react';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="section-padding relative">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass overflow-hidden group rounded-xl"
                        >
                            <div className="relative h-48 overflow-hidden mb-4">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="btn-primary text-sm py-2 px-4"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                            <div className="p-6 pt-0">
                                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">{project.name}</h3>
                                <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.slice(0, 3).map((tech) => (
                                        <span key={tech} className="text-xs bg-slate-950 px-2 py-1 rounded text-cyan-400 border border-slate-800">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.tech.length > 3 && (
                                        <span className="text-xs bg-slate-950 px-2 py-1 rounded text-slate-500 border border-slate-800">
                                            +{project.tech.length - 3}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="glass p-6 md:p-8 rounded-2xl max-w-2xl w-full relative shadow-[0_0_50px_rgba(6,182,212,0.1)]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-950/50 p-2 rounded-full"
                            >
                                <X size={24} />
                            </button>

                            <img
                                src={selectedProject.image}
                                alt={selectedProject.name}
                                className="w-full h-64 object-cover rounded-xl mb-6 border border-slate-700"
                            />

                            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{selectedProject.name}</h3>
                            <p className="text-slate-300 mb-6 leading-relaxed">
                                {selectedProject.description}
                            </p>

                            <div className="mb-8">
                                <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider flex items-center gap-2">
                                    <Code2 size={16} /> Technologies Used
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.tech.map((tech) => (
                                        <span key={tech} className="bg-slate-950 px-3 py-1 rounded-full text-cyan-400 border border-slate-800 text-sm shadow-inner">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <a
                                    href={selectedProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary flex items-center gap-2 flex-1 justify-center"
                                >
                                    <Github size={20} /> Source Code
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
