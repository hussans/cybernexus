import React from 'react';
import { CheckCircle2, ShieldCheck, TrendingUp, Server } from 'lucide-react';
import { SectionBadge } from '@/components/ui/section-badge';

export const About: React.FC = () => (
  <section id="about" className="py-24 border-t border-zinc-900">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionBadge text="Our Mission" />
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
            To provide secure, scalable IT solutions that drive innovation.
          </h2>
          <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
            CyberNexus was founded on a simple vision: to make enterprise grade technology and cybersecurity accessible to organizations of all sizes. With a team of experienced engineers, analysts, and digital strategists, we help our clients adopt cutting edge technologies while maintaining the highest standards of data protection and compliance.
          </p>

          <div className="space-y-4">
            {[
              { text: "Integrity: Security and transparency in every engagement.", color: "text-emerald-500" },
              { text: "Innovation: Continuous improvement through modern tools.", color: "text-blue-500" },
              { text: "Excellence: Delivering measurable outcomes.", color: "text-cyan-500" },
              { text: "Partnership: We grow alongside our clients.", color: "text-purple-500" }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className={`w-5 h-5 ${item.color} mt-1 shrink-0`} />
                <span className="text-zinc-300">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-cyan-400/30 via-purple-500/25 via-pink-500/20 to-blue-500/30 blur-2xl rounded-3xl animate-pulse" />
          <div className="relative bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 border-b border-zinc-800 pb-6">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                   <ShieldCheck className="w-6 h-6 text-cyan-500"/>
                </div>
                <div>
                  <p className="font-semibold">Healthcare Sector</p>
                  <p className="text-xs text-zinc-500">HIPAA Compliance & EMR Security</p>
                </div>
              </div>
              <div className="flex items-center gap-4 border-b border-zinc-800 pb-6">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-amber-500"/>
                </div>
                <div>
                  <p className="font-semibold">Finance & Legal</p>
                  <p className="text-xs text-zinc-500">Data Encryption & Audit Readiness</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Server className="w-6 h-6 text-emerald-500"/>
                </div>
                <div>
                  <p className="font-semibold">SMBs</p>
                  <p className="text-xs text-zinc-500">Managed IT & Cloud Growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
