import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { CustomButton } from '@/components/ui/custom-button';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Industries', href: '#industries' },
  { label: 'Resources', href: '#resources' }
];

interface NavigationProps {
  isScrolled: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSmoothScroll = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/10 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent backdrop-blur-xl py-6'}`}>
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <button
          onClick={handleScrollToTop}
          className="flex items-center gap-2 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-200 cursor-pointer select-none outline-none focus:outline-none relative"
          style={{
            willChange: 'transform'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = 'scale(0.95)';
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          aria-label="Scroll to top"
        >
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <div className="w-3 h-3 bg-black rounded-sm" />
          </div>
          <span className="font-bold text-xl tracking-tighter text-white drop-shadow-lg">CyberNexus</span>
        </button>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll(link.href);
              }}
              className="hover:text-white text-white/90 drop-shadow-md transition-all duration-200 cursor-pointer relative"
              style={{
                willChange: 'transform'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = 'scale(0.95)';
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button
            className="inline-flex items-center justify-center py-2 px-4 text-xs rounded-full font-medium transition-all duration-200 bg-white text-black hover:bg-white/20 hover:backdrop-blur-sm hover:text-white hover:border hover:border-white/50 active:bg-white/30 active:border-white/70 relative whitespace-nowrap"
            style={{
              width: '96px',
              height: '32px',
              transformOrigin: 'center',
              willChange: 'transform'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = 'scale(0.95)';
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onClick={() => handleSmoothScroll('#contact')}
          >
            Get Started
          </button>
        </div>

        <button
          className="md:hidden text-white drop-shadow-lg"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-xl border-b border-white/10 absolute top-full left-0 right-0">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleSmoothScroll(link.href);
                }}
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
