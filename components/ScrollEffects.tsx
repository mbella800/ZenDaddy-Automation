'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollEffects() {
  useEffect(() => {
    // Overlapping sections effect - smoother
    const sections = gsap.utils.toArray('.overlap-section');
    
    sections.forEach((section: any, i) => {
      if (i === 0) return; // Skip first section
      
      ScrollTrigger.create({
        trigger: section,
        start: 'top bottom',
        end: 'top top',
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(section, {
            y: -30 * progress,
            opacity: 0.5 + (0.5 * progress),
            duration: 0,
            ease: 'power2.out',
          });
        },
      });
    });

    // Feature cards horizontal drift
    const featureCards = gsap.utils.toArray('.feature-card');
    featureCards.forEach((card: any, i) => {
      gsap.fromTo(
        card,
        { x: i % 2 === 0 ? -30 : 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 1,
          },
        }
      );
    });

    // Stat counters reveal
    const statCards = gsap.utils.toArray('.stat-card');
    statCards.forEach((card: any, i) => {
      gsap.fromTo(
        card,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return null;
}
