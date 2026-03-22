'use client';

import { Suspense } from 'react';
import HomeContent from '../page'; // Reuse the main page logic

// ZENBOT AUTONOMOUS SEO LANDING PAGE v1.0
// This page automatically turns ANY URL into a high-converting landing page.
// Example: zendaddy.pro/best-fortnite-script-2026

export default function DynamicSEOPage({ params }: { params: { slug: string } }) {
  // Convert slug (best-fortnite-script) to human readable (Best Fortnite Script)
  const query = params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <Suspense fallback={null}>
      {/* We pass the slug-based query to the main HomeContent */}
      <HomeContent overrideQuery={query} />
    </Suspense>
  );
}
