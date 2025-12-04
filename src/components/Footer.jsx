import React from 'react';
import { personalDetails } from '../data';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-secondary py-8 border-t border-slate-800">
            <div className="container mx-auto px-6 text-center">
                <div className="flex justify-center gap-6 mb-6">
                    <a href={personalDetails.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent transition-colors">
                        <Github size={20} />
                    </a>
                    <a href={personalDetails.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href={personalDetails.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent transition-colors">
                        <Twitter size={20} />
                    </a>
                </div>
                <p className="text-slate-500 text-sm">
                    &copy; {new Date().getFullYear()} {personalDetails.name}. All rights reserved.
                </p>
                <p className="text-slate-600 text-xs mt-2">
                    Built with React, Tailwind CSS & Framer Motion
                </p>
            </div>
        </footer>
    );
};

export default Footer;
