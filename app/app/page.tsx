'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Script from 'next/script';
import MatrixRain from '@/components/MatrixRain';
import ScrollEffects from '@/components/ScrollEffects';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Features from '@/components/Features';
import Evolution from '@/components/Evolution';
import Pricing from '@/components/Pricing';
import ReviewsSlider from '@/components/ReviewsSlider';
import SocialProof from '@/components/SocialProof';
import FinalCTA from '@/components/FinalCTA';
import TrustBadges from '@/components/TrustBadges';
import CustomScriptsPromo from '@/components/CustomScriptsPromo';
import HowItWorks from '@/components/HowItWorks';

function HomeContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || 'Best Fortnite Aim Assist 2026';

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: `ZenDaddy ${query} - GOD FLICK v3.0 PRO`,
        applicationCategory: 'GameApplication',
        operatingSystem: 'Cronus Zen',
        description: `Professional ${query} enhancement for Fortnite with 30 OLED settings, ADS Pulse, and 6 aim patterns.`,
        offers: [
          {
            '@type': 'Offer',
            name: 'GOD FLICK v3.0 PRO',
            price: '59.95',
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            url: 'https://zendaddy.pro',
          },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          ratingCount: '84',
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <MatrixRain />
      <ScrollEffects />
      <Header />
      <main className="relative z-10">
        <Hero dynamicTitle={query} />
        <div className="overlap-section">
          <Problem />
        </div>
        <div className="overlap-section">
          <Features />
        </div>
        <div className="overlap-section">
          <TrustBadges />
        </div>
        <div className="overlap-section">
          <Pricing />
        </div>
        <div className="overlap-section">
          <ReviewsSlider />
        </div>
        <div className="overlap-section">
          <SocialProof />
        </div>
        <div className="overlap-section">
          <HowItWorks />
        </div>
        <div className="overlap-section">
          <Evolution />
        </div>
        <div className="overlap-section">
          <CustomScriptsPromo />
        </div>
        <div className="overlap-section">
          <FinalCTA />
        </div>
      </main>
    </>
  );
}

export default function Home() {
  return (
    <Suspense fallback={null}>
      <HomeContent />
    </Suspense>
  );
}
