import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, FileText } from 'lucide-react';

const Resume = () => {
    return (
        <section id="resume" className="py-20 px-6">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="glass p-12 rounded-2xl text-center max-w-4xl mx-auto relative overflow-hidden"
                >
                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px] -z-10"></div>

                    <div className="mb-6 inline-block p-4 bg-slate-950 rounded-full border border-slate-800 text-cyan-400">
                        <FileText size={40} />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Want to know more?</h2>
                    <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
                        Download my resume to get a detailed overview of my education, skills, and professional experience.
                    </p>

                    <a
                        href="/resume.pdf"
                        download="Mohankumar_Resume.pdf"
                        className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
                    >
                        <FileDown size={24} /> Download Resume
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Resume;
