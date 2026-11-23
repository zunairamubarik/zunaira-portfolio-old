import React from 'react';
import { Palette, Layers, Globe, Megaphone, Search, Cpu, Sparkles, Image as ImageIcon } from 'lucide-react';

const categoryIcons = {
  'UI/UX': Layers,
  'WordPress': Globe,
  'Automation': Cpu,
  'Marketing': Megaphone,
  'Graphic Design': Palette,
  'SEO': Search,
};

export default function ProjectPlaceholderCard({ project }) {
  const IconComponent = categoryIcons[project.category] || Sparkles;

  if (project.image) {
    return (
      <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden border border-brand-500/20 group-hover:border-brand-500/50 transition-all">
        <img src={project.image} alt={project.name} className="absolute inset-0 w-full h-full object-cover" />
      </div>
    );
  }

  return (
    <div className={`relative w-full h-48 sm:h-52 rounded-2xl bg-gradient-to-br ${project.accentColor || 'from-violet-900 to-obsidian'} border border-brand-500/20 overflow-hidden flex flex-col justify-between p-5 group-hover:border-brand-500/50 transition-all`}>
    {project.image && (
  <img src={project.image} alt={project.name} className="absolute inset-0 w-full h-full object-cover" />
)}
{project.image && (
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40 pointer-events-none"></div>
)}
      {/* Subtle Background Pattern Lines */}
      <div className="absolute inset-0 bg-dots-pattern opacity-20 pointer-events-none"></div>
      
      {/* Radial Glow Pill */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-500/20 rounded-full blur-2xl pointer-events-none"></div>

      {/* Top Bar: Category & Icon */}
      <div className="flex items-center justify-between relative z-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-obsidian/70 backdrop-blur-md border border-brand-500/30 text-[11px] font-semibold text-brand-300">
          <IconComponent className="w-3.5 h-3.5" />
          {project.category}
        </span>
        <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-white/80">
          <ImageIcon className="w-4 h-4" />
        </div>
      </div>

      {/* Center Visual Mock Graphic / Watermark Title */}
      <div className="relative z-10 space-y-1">
        <div className="text-xs font-mono font-medium text-brand-300/80 uppercase tracking-widest">
          {project.industry}
        </div>
        <h4 className="text-lg font-display font-bold text-white tracking-tight drop-shadow-sm line-clamp-1">
          {project.name}
        </h4>
      </div>

      {/* Bottom Bar: Image Placeholder Prompt Badge */}
      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/10 text-[10px] text-slate-300 font-mono">
        <span className="truncate">Visual Creative Placeholder</span>
        <span className="px-2 py-0.5 rounded bg-brand-950/80 border border-brand-500/30 text-brand-300 font-semibold uppercase">
          {project.tools ? project.tools[0] : 'Asset'}
        </span>
      </div>
    </div>
  );
}
