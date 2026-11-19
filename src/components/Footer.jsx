import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-obsidian border-t border-brand-900/40 text-slate-400 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-brand-900/30">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center text-white font-display font-bold text-lg shadow-glow-sm">
              ZM
            </div>
            <div>
              <span className="font-display font-bold text-white text-base block">
                Zunaira Mubarik
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {personalInfo.title}
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
            <a href="#home" className="hover:text-brand-300 transition-colors">Home</a>
            <a href="#work" className="hover:text-brand-300 transition-colors">Work</a>
            <a href="#about" className="hover:text-brand-300 transition-colors">About</a>
            <a href="#services" className="hover:text-brand-300 transition-colors">Services</a>
            <a href="#experience" className="hover:text-brand-300 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-brand-300 transition-colors">Contact</a>
          </div>

          {/* Scroll To Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-obsidian-surface border border-brand-900/50 text-slate-300 hover:text-white hover:border-brand-500/50 transition-all shadow-glow-sm"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Zunaira Mubarik. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-slate-400">
            <Sparkles className="w-3.5 h-3.5 text-brand-400" />
            <span>Creative Designer & Digital Marketing Specialist • BSCS Virtual University</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
