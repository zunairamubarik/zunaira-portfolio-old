import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import SkillsServices from './components/SkillsServices';
import Experience from './components/Experience';
import CaseStudies from './components/CaseStudies';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-obsidian text-slate-100 flex flex-col font-sans selection:bg-brand-500 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Selected Work (Design-Focused, early in page order!) */}
        <Projects />

        {/* Section 3: About */}
        <About />

        {/* Section 4: Services */}
        <SkillsServices />

        {/* Section 5: Experience Timeline */}
        <Experience />

        {/* Section 6: In-Depth Case Studies */}
        <CaseStudies />

        {/* Section 7: Real Certifications & Awards */}
        <Certifications />

        {/* Section 8: Contact */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
