import React from 'react';

interface SectionBadgeProps {
  text: string;
}

export const SectionBadge: React.FC<SectionBadgeProps> = ({ text }) => (
  <div className="inline-flex items-center px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs font-medium text-zinc-400 mb-6 backdrop-blur-sm">
    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
    {text}
  </div>
);
