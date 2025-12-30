import React from 'react';
import { Check } from 'lucide-react';

const timelineSteps = [
  {
    title: 'Audit',
    description: 'We conduct a comprehensive assessment of your current infrastructure, security posture, and operational processes. Our team identifies vulnerabilities, compliance gaps, and optimization opportunities to establish a clear baseline for transformation.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=400&fit=crop',
    deliverables: [
      'Security assessment report',
      'Infrastructure audit findings',
      'Compliance gap analysis',
      'Risk assessment documentation'
    ]
  },
  {
    title: 'Strategy',
    description: 'Based on audit findings, we develop a tailored roadmap that aligns with your business objectives. Our strategic plan includes prioritized recommendations, implementation timelines, and resource requirements to ensure successful execution.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=400&fit=crop',
    deliverables: [
      'Strategic roadmap document',
      'Implementation timeline',
      'Resource allocation plan',
      'Budget and cost analysis'
    ]
  },
  {
    title: 'Implement',
    description: 'Our expert team executes the strategic plan with precision, deploying security solutions, optimizing infrastructure, and implementing best practices. We ensure minimal disruption to your operations while achieving measurable improvements.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=400&fit=crop',
    deliverables: [
      'Deployed security solutions',
      'Optimized infrastructure',
      'Configuration documentation',
      'Training materials and sessions'
    ]
  },
  {
    title: 'Optimize',
    description: 'Continuous monitoring and refinement ensure your systems remain secure, efficient, and aligned with evolving threats and business needs. We provide ongoing support, performance tuning, and strategic guidance for sustained excellence.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=400&fit=crop',
    deliverables: [
      'Performance monitoring dashboard',
      'Ongoing support plan',
      'Regular optimization reports',
      'Strategic advisory services'
    ]
  }
];

export const Industries: React.FC = () => (
  <section id="industries" className="py-24 bg-black border-t border-zinc-900">
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          <span className="italic" style={{ fontFamily: 'Georgia, serif' }}>From Audit</span>{' '}
          <span>to AI Excellence in Weeks</span>
        </h2>
        <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
          CyberNexus partners with diverse industries, bringing deep technical expertise and security know how to address each sector's unique challenges.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-4 md:left-6 top-1 bottom-0 w-0.5 bg-zinc-800"></div>
        
        <div className="space-y-12 md:space-y-16">
          {timelineSteps.map((step, index) => (
            <div key={index} className="relative">
              <div className="absolute left-4 md:left-6 w-4 h-4 md:w-5 md:h-5 z-10 transform -translate-x-1/2" style={{ top: '0.25rem' }}>
                <div className="w-full h-full bg-white/30 backdrop-blur-sm rounded-full shadow-lg border border-white/50"></div>
              </div>

              <div className="pl-16 md:pl-20">
                <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-white md:flex-shrink-0 md:w-32">{step.title}</h3>

                  <div className="flex-1 space-y-4">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-40 md:h-48 object-cover rounded-lg"
                    />

                    <p className="text-sm md:text-base text-zinc-400 leading-relaxed">{step.description}</p>

                    <div>
                      <h4 className="text-xs md:text-sm font-bold text-zinc-300 mb-2">Deliverables</h4>
                      <ul className="space-y-1.5">
                        {step.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-3 h-3 md:w-4 md:h-4 text-green-400 mt-0.5 shrink-0" />
                            <span className="text-xs md:text-sm text-zinc-400">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
