import React from 'react';
import { ArrowDown } from 'lucide-react';
import { SectionBadge } from '@/components/ui/section-badge';
import { CustomButton } from '@/components/ui/custom-button';

const handleSmoothScroll = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const Hero: React.FC = () => (
  <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
    <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-transparent to-transparent" />
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-950/20 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-purple-900/5 to-transparent blur-3xl" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-blue-800/15 via-transparent to-transparent blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-purple-800/15 via-transparent to-transparent blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-indigo-800/10 via-transparent to-transparent blur-3xl" />
    </div>

    <div className="container mx-auto px-6 max-w-7xl text-center">
      <SectionBadge text="Trusted by modern enterprises" />

      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
        <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
          Secure, Scalable, and
        </span>
        <br className="hidden md:block" />
        <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-rose-400 bg-clip-text text-transparent">
          Smart Technology Solutions.
        </span>
      </h1>

      <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
        CyberNexus delivers end to end IT, cybersecurity, and digital transformation solutions, empowering organizations to stay secure, agile, and ahead of the curve.
      </p>

      <div className="flex flex-col items-center justify-center mb-20">
        <CustomButton 
          variant="primary" 
          onClick={() => handleSmoothScroll('#contact')}
        >
          Request a Consultation
        </CustomButton>
        <div className="mt-8">
          <CustomButton 
            variant="outline"
            onClick={() => handleSmoothScroll('#services')}
            className="text-xs py-2 px-4"
          >
            Scroll <ArrowDown className="w-3 h-3 text-white animate-arrow-bounce" />
          </CustomButton>
        </div>
      </div>

      <div className="relative mx-auto max-w-5xl rounded-t-2xl border-t border-l border-r border-white/20 bg-zinc-900/50 backdrop-blur-xl overflow-hidden shadow-2xl shadow-blue-900/20 hover:border-white/30 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.6)] transition-all duration-300 group" style={{ maskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

        <div className="h-12 border-b border-white/10 flex items-center px-4 gap-2 relative z-20">
          <div className="w-3 h-3 rounded-full bg-red-500/30" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
          <div className="w-3 h-3 rounded-full bg-green-500/30" />
        </div>

        <div className="relative" style={{ maskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)' }}>
          <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 opacity-80">
            <div className="space-y-4">
              <div className="h-32 rounded-xl bg-white/5 animate-pulse" />
              <div className="h-16 rounded-xl bg-white/5" />
              <div className="h-16 rounded-xl bg-white/5" />
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-48 rounded-xl bg-white/10 border border-blue-500/40 shadow-[0_0_30px_-10px_rgba(59,130,246,0.5)] group-hover:border-blue-400/60 group-hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.7)] transition-all duration-300" />
              <div className="h-16 rounded-xl bg-white/5" />
            </div>
            <div className="space-y-4">
              <div className="h-16 rounded-xl bg-white/5" />
              <div className="h-32 rounded-xl bg-white/5" />
              <div className="h-16 rounded-xl bg-white/5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
