import React from 'react';

interface IndustryCardProps {
  title: string;
  description: string;
  focus: string;
}

export const IndustryCard: React.FC<IndustryCardProps> = ({ title, description, focus }) => (
  <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800/50 hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-300">
    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
    <p className="text-zinc-400 mb-6 leading-relaxed">{description}</p>
    <p className="text-blue-400 text-sm font-medium">Focus: {focus}</p>
  </div>
);
