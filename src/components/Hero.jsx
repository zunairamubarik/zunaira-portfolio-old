import React from 'react';
import { ArrowDownRight, Sparkles, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-dots-pattern">
      {/* Ambient Radial Violet Glow Elements */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Desktop 2-Column Layout / Mobile Stack (Text First, Photo Second) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Column 1: Left Text & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Experience Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-950/80 border border-brand-500/30 backdrop-blur-md shadow-glow-sm text-brand-300 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-brand-400" />
              <span>{personalInfo.experienceBadge}</span>
            </div>

            {/* Headlines */}
            <div className="space-y-3">
              <span className="block text-brand-300 text-sm font-semibold tracking-wider uppercase">
                {personalInfo.smallIntro}
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.1]">
                <span className="block text-gradient">Creative Designer</span>
                <span className="block text-gradient-purple font-sans mt-1">
                  & Digital Marketing Specialist
                </span>
              </h1>

              <p className="max-w-2xl text-slate-300 text-base sm:text-lg leading-relaxed pt-2 mx-auto lg:mx-0">
                {personalInfo.tagline}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 text-white font-semibold text-sm shadow-glow-md hover:shadow-glow-lg hover:from-brand-500 hover:to-brand-400 transition-all transform hover:-translate-y-0.5"
              >
                <span>View My Work</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-obsidian-surface hover:bg-obsidian-card text-white font-semibold text-sm border border-brand-500/30 hover:border-brand-500/60 transition-all"
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-4 h-4 text-brand-400" />
              </a>
            </div>

            {/* Core Capability Pills */}
            <div className="pt-6">
              <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 block mb-3">
                Core Specializations:
              </span>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {[
                  "UI/UX Design",
                  "Graphic Design",
                  "WordPress Design",
                  "Meta Ads",
                  "SEO",
                  "GHL Automation"
                ].map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-obsidian-surface/90 border border-brand-900/40 text-xs font-semibold text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Column 2: Right Real Profile Portrait Treatment */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            
            {/* Ambient Violet Glow Backdrop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 bg-brand-600/30 rounded-full blur-[90px] pointer-events-none"></div>

            {/* Editorial Portrait Frame */}
            <div className="relative w-64 sm:w-80 md:w-88 aspect-[3/4] rounded-3xl p-2 bg-gradient-to-b from-brand-500/30 via-brand-900/20 to-obsidian border border-brand-500/30 shadow-2xl shadow-brand-950/60 overflow-hidden group">
              
              {/* Inner Frame */}
              <div className="w-full h-full rounded-2xl overflow-hidden bg-obsidian-surface relative">
                <img
                  src={personalInfo.profileImage}
                  alt="Zunaira Mubarik - Creative Designer & Digital Marketing Specialist"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to jpeg alias if needed
                    e.target.src = 'images/profile.jpg.jpeg';
                  }}
                />

                {/* Subtle Overlay Gradient at Bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-transparent to-transparent pointer-events-none"></div>

                {/* Corner Editorial Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-obsidian/80 backdrop-blur-md p-3 rounded-xl border border-brand-500/30 flex items-center justify-between">
                  <div>
                    <span className="font-display font-bold text-white text-xs block">
                      Zunaira Mubarik
                    </span>
                    <span className="text-[10px] text-brand-300 font-medium">
                      Creative & Digital Specialist
                    </span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
