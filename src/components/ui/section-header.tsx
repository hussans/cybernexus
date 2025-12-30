import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ badge, title, subtitle }) => (
  <div className="text-center mb-16">
    {badge && (
      <div className="inline-flex items-center px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs font-medium text-zinc-400 mb-6 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
        {badge}
      </div>
    )}
    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{title}</h2>
    {subtitle && <p className="text-xl text-zinc-400 max-w-3xl mx-auto">{subtitle}</p>}
  </div>
);
