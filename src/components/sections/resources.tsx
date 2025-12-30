import React from 'react';
import { BookOpen, FileText, Video } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';
import { FeatureCard } from '@/components/ui/feature-card';

export const Resources: React.FC = () => (
  <section id="resources" className="py-24 bg-black border-t border-zinc-900">
    <div className="container mx-auto px-6 max-w-7xl">
      <SectionHeader
        title="Resources & Insights"
        subtitle="Stay informed with expert articles, guides, and interactive sessions on cybersecurity, IT strategy, and digital transformation."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          icon={BookOpen}
          title="Blog"
          desc="Regular articles covering cyber threats, cloud strategies, digital marketing trends, and case studies to keep you ahead of the curve."
          iconColor="text-blue-500"
        />
        <FeatureCard
          icon={FileText}
          title="Whitepapers & Guides"
          desc="Download detailed framework guides, checklists, and implementation roadmaps for ISO 27001, NIST CSF, and cloud migration."
          iconColor="text-indigo-500"
        />
        <FeatureCard
          icon={Video}
          title="Webinars"
          desc="Join our experts for interactive sessions on cybersecurity resilience, IT strategy, and digital growth best practices."
          iconColor="text-rose-500"
        />
      </div>
    </div>
  </section>
);
