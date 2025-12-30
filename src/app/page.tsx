'use client';

import React, { useState, useEffect } from 'react';
import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { About } from '@/components/sections/about';
import { Industries } from '@/components/sections/industries';
import { Resources } from '@/components/sections/resources';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        !target.closest('input') &&
        !target.closest('textarea') &&
        !target.closest('button') &&
        !target.closest('a') &&
        !target.closest('[contenteditable="true"]')
      ) {
        if (document.activeElement && 
            document.activeElement !== document.body &&
            document.activeElement.tagName !== 'INPUT' &&
            document.activeElement.tagName !== 'TEXTAREA') {
          (document.activeElement as HTMLElement).blur();
        }
      }
    };

    document.addEventListener('mousedown', handleMouseDown);
    return () => document.removeEventListener('mousedown', handleMouseDown);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-zinc-800 selection:text-white">
      <Navigation isScrolled={isScrolled} />
      <Hero />
      <Services />
      <About />
      <Industries />
      <Resources />
      <Contact />
      <Footer />
    </div>
  );
}
