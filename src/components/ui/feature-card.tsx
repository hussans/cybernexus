import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface CardProps {
  title: string;
  desc: string;
  icon: LucideIcon;
  className?: string;
  iconColor?: string;
}

export const FeatureCard: React.FC<CardProps> = ({ title, desc, icon: Icon, className = '', iconColor = 'text-blue-500' }) => (
  <div className={`group p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800/50 hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-300 ${className}`}>
    <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
      <Icon className={`w-6 h-6 ${iconColor}`} />
    </div>
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-zinc-400 leading-relaxed text-sm">{desc}</p>
  </div>
);
