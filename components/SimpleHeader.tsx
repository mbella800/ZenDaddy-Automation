'use client';

import { useState, useEffect, useRef } from 'react';

export default function SimpleHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[60] backdrop-blur-lg border-b border-lime-500/20 transition-all duration-300 ${scrolled ? 'bg-black/10' : 'bg-black/95'}`}>
      <div ref={menuRef} className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-lime-400"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            <a href="/" className="flex items-center gap-2 group">
              <span className="text-lime-400 text-2xl font-bold group-hover:text-lime-300 transition-colors font-terminal">
                ZENDADDY
              </span>
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="/#features" className="text-gray-400 hover:text-lime-400 transition-colors font-terminal text-sm">FEATURES</a>
            <a href="/#pricing" className="text-gray-400 hover:text-lime-400 transition-colors font-terminal text-sm">PRICING</a>
            <a href="/docs" className="text-gray-400 hover:text-lime-400 transition-colors font-terminal text-sm">DOCS</a>
            <a href="/setup-guide" className="text-gray-400 hover:text-lime-400 transition-colors font-terminal text-sm">SETUP</a>
            <a href="/changelog" className="text-gray-400 hover:text-lime-400 transition-colors font-terminal text-sm">UPDATES</a>
            <a href="/faq" className="text-gray-400 hover:text-lime-400 transition-colors font-terminal text-sm">FAQ</a>
            <a href="https://discord.gg/zp2HmEgTWq" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-lime-400 transition-colors font-terminal text-sm">DISCORD</a>
          </nav>

          <a 
            href="/#pricing"
            className="bg-lime-500 hover:bg-lime-400 text-black font-bold px-4 md:px-6 py-2 rounded transition-all font-terminal text-xs md:text-sm"
          >
            BUY NOW
          </a>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-3 pt-3 border-t border-lime-500/20">
            <div className="flex flex-col gap-3 pb-3">
              <a href="/#features" onClick={closeMenu} className="text-gray-400 hover:text-lime-400 transition-colors font-terminal text-sm">FEATURES</a>
              <a href="/#pricing" onClick={closeMenu} className="text-gray-400 hover:text-lime-400 transition-colors font-terminal text-sm">PRICING</a>
              <a href="/docs" onClick={closeMenu} className="text-gray-400 hover:text-lime-400 transition-colors font-terminal text-sm">DOCS</a>
              <a href="/setup-guide" onClick={closeMenu} className="text-gray-400 hover:text-lime-400 transition-colors font-terminal text-sm">SETUP GUIDE</a>
              <a href="/changelog" onClick={closeMenu} className="text-gray-400 hover:text-lime-400 transition-colors font-terminal text-sm">UPDATES</a>
              <a href="/faq" onClick={closeMenu} className="text-gray-400 hover:text-lime-400 transition-colors font-terminal text-sm">FAQ</a>
              <div className="border-t border-lime-500/10 pt-3 mt-1">
                <div className="flex flex-col gap-3">
                  <a href="https://discord.gg/zp2HmEgTWq" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="text-lime-400 hover:text-lime-300 transition-colors font-terminal text-sm">DISCORD</a>
                  <a href="https://tiktok.com/@zendaddy.pro" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="text-lime-400 hover:text-lime-300 transition-colors font-terminal text-sm">TIKTOK</a>
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
