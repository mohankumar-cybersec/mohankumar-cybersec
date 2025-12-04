import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Achievements />
                <Resume />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
