'use client';

import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className="backdrop-blur-lg border-b border-matrix-green/40 bg-black"
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 9998,
        WebkitTransform: 'translateZ(0)',
        transform: 'translateZ(0)'
      }}
    >
      <div ref={menuRef} className="max-w-7xl mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button - LEFT SIDE */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-matrix-green"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation - LEFT SIDE */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="/#features" className="text-gray-400 hover:text-matrix-green transition-colors font-terminal text-sm">
              FEATURES
            </a>
            <a href="/#pricing" className="text-gray-400 hover:text-matrix-green transition-colors font-terminal text-sm">
              PRICING
            </a>
            <a href="/docs" className="text-gray-400 hover:text-matrix-green transition-colors font-terminal text-sm">
              DOCS
            </a>
            <a href="/setup-guide" className="text-gray-400 hover:text-matrix-green transition-colors font-terminal text-sm">
              SETUP
            </a>
            <a href="/changelog" className="text-gray-400 hover:text-matrix-green transition-colors font-terminal text-sm">
              UPDATES
            </a>
            <a href="/faq" className="text-gray-400 hover:text-matrix-green transition-colors font-terminal text-sm">
              FAQ
            </a>
            <a 
              href="https://discord.gg/zp2HmEgTWq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-matrix-green transition-colors font-terminal text-sm"
            >
              DISCORD
            </a>
          </nav>

          {/* Download Button - RIGHT SIDE (desktop and mobile) */}
          <div className="ml-auto">
            <button 
              onClick={scrollToPricing}
              className="bg-matrix-black border-2 border-matrix-green px-4 md:px-6 font-terminal text-xs md:text-sm hover:bg-matrix-dark-green transition-all"
              style={{ paddingTop: '7px', paddingBottom: '7px' }}
            >
              DOWNLOAD
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-matrix-dark-green bg-matrix-black/95 backdrop-blur-lg rounded-lg p-4">
            <div className="flex flex-col gap-4">
              <a href="/#features" onClick={closeMenu} className="text-gray-400 hover:text-matrix-green transition-colors font-terminal text-sm">
                FEATURES
              </a>
              <a href="/#pricing" onClick={closeMenu} className="text-gray-400 hover:text-matrix-green transition-colors font-terminal text-sm">
                PRICING
              </a>
              <a href="/docs" className="text-gray-400 hover:text-matrix-green transition-colors font-terminal text-sm">
                DOCUMENTATION
              </a>
              <a href="/setup-guide" className="text-gray-400 hover:text-matrix-green transition-colors font-terminal text-sm">
                SETUP GUIDE
              </a>
              <a href="/changelog" className="text-gray-400 hover:text-matrix-green transition-colors font-terminal text-sm">
                UPDATES
              </a>
              <a href="/faq" className="text-gray-400 hover:text-matrix-green transition-colors font-terminal text-sm">
                FAQ
              </a>
              <div className="border-t border-matrix-dark-green pt-4 mt-2">
                <p className="text-gray-500 text-xs font-terminal mb-3">&gt; More Info</p>
                <div className="flex flex-col gap-3">
                  <a 
                    href="/best-fortnite-aim-assist" 
                    className="text-gray-400 hover:text-matrix-green transition-colors font-terminal text-sm"
                  >
                    COMPARE SCRIPTS
                  </a>
                  <a 
                    href="/cronus-zen-fortnite" 
                    className="text-gray-400 hover:text-matrix-green transition-colors font-terminal text-sm"
                  >
                    ABOUT CRONUS ZEN
                  </a>
                </div>
              </div>
              <div className="border-t border-matrix-dark-green pt-4 mt-2">
                <p className="text-gray-500 text-xs font-terminal mb-3">&gt; Follow us</p>
                <div className="flex flex-col gap-3">
                  <a 
                    href="https://discord.gg/zp2HmEgTWq" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-matrix-green hover:text-matrix-lime transition-colors font-terminal text-sm"
                  >
                    DISCORD
                  </a>
                  <a 
                    href="https://tiktok.com/@zendaddy.pro" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-matrix-green hover:text-matrix-lime transition-colors font-terminal text-sm"
                  >
                    TIKTOK
                  </a>
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
