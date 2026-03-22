'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero({ dynamicTitle }: { dynamicTitle?: string }) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });
      
      gsap.from(taglineRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark pt-36 md:pt-32">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zen-neon rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zen-electric rounded-full filter blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 
          ref={titleRef}
          className="text-6xl md:text-8xl font-burbank mb-6 text-glow"
        >
          {dynamicTitle ? dynamicTitle.toUpperCase() : 'ZENDADDY'}
        </h1>
        
        <p 
          ref={taglineRef}
          className="text-base md:text-2xl text-matrix-lime mb-4 font-terminal"
        >
          [ GOD FLICK v3.0 PRO ]
        </p>

        <p className="text-2xl md:text-4xl text-gradient mb-8 font-bold">
          ENHANCED AIM ASSIST
        </p>

        <p className="text-sm md:text-base text-gray-400 mb-16 max-w-3xl mx-auto font-terminal">
          &gt; 29 OLED settings across 7 pages with per-mode ADS/HIP control<br />
          &gt; ADS Pulse + Crouch Spam + Headshot Bias + Anti-Bloom<br />
          &gt; 6 aim patterns including DYN (human-like movement)
        </p>

        <div className="mb-10">
          <button 
            onClick={() => {
              const pricingSection = document.getElementById('pricing');
              pricingSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="btn-neon"
          >
            GET GOD FLICK PRO
          </button>
        </div>

        <p className="text-xs text-gray-600 mb-16 font-terminal mt-10">
          [!] Most advanced Cronus Zen aim script available
        </p>

        <div className="flex flex-wrap justify-center gap-8 text-xs md:text-sm text-gray-500 font-terminal mt-8">
          <div className="flex items-center gap-2">
            <span className="text-matrix-green">[+]</span>
            <span>PS5 | XBOX</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-matrix-green">[+]</span>
            <span>CRONUS ZEN</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-matrix-green">[+]</span>
            <span>INSTANT DOWNLOAD</span>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce z-0">
          <svg className="w-6 h-6 text-matrix-green opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
