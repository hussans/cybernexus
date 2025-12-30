import React from 'react';
import { ShieldCheck, Server, Globe, TrendingUp } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';
import { FeatureCard } from '@/components/ui/feature-card';
import { CustomButton } from '@/components/ui/custom-button';

export const Services: React.FC = () => (
  <section id="services" className="py-24 bg-black">
    <div className="container mx-auto px-6 max-w-7xl">
      <SectionHeader
        title="Comprehensive IT & Cybersecurity Solutions"
        subtitle="From securing digital assets to transforming operations. We bridge the gap between technology, security, and digital growth."
      />

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={ShieldCheck}
            title="Cybersecurity Advisory"
            desc="Build, protect, and mature your security program with framework implementation, vCISO services, assessments, and penetration testing."
            className="bg-zinc-900"
            iconColor="text-cyan-500"
          />
          <FeatureCard
            icon={Server}
            title="IT Consulting & Managed Services"
            desc="24/7 monitoring, cloud migration, infrastructure optimization, and strategic IT roadmaps for operational excellence."
            iconColor="text-emerald-500"
          />
          <FeatureCard
            icon={Globe}
            title="Web & Software Development"
            desc="Custom websites, e-commerce, web apps, mobile solutions, and enterprise software built for scale and security."
            iconColor="text-purple-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard
            icon={TrendingUp}
            title="Digital Marketing"
            desc="SEO, PPC, content strategy, social media, email automation, and data-driven growth campaigns."
            iconColor="text-amber-500"
          />
          
          <div className="p-8 rounded-3xl bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-700 flex flex-col justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Government & Public Sector Ready</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Compliant solutions aligned with CJIS, IRS 1075, HIPAA, and FIPS standards.</p>
            </div>
            <CustomButton variant="primary" className="self-start">Learn about Govt Services</CustomButton>
          </div>
        </div>
      </div>
    </div>
  </section>
);
