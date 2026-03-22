import { Metadata } from 'next';
import Link from 'next/link';
import SimpleHeader from '@/components/SimpleHeader';

export const metadata: Metadata = {
  title: 'Cronus Zen Aim Assist 2026 - Best Script Updated for Chapter 7 | ZenDaddy',
  description: 'Best Cronus Zen aim assist script for 2026. Updated with DYN pattern, human-like movement, 250Hz PS5 sync, 29 OLED settings, 6 aim patterns, per-mode control. Instant download. €59.99.',
  keywords: 'cronus zen aim assist 2026, best cronus zen script 2026, zen script 2026, cronus zen fortnite 2026, aim assist script 2026, cronus zen updated script, best zen script chapter 7',
  openGraph: {
    title: 'Cronus Zen Aim Assist 2026 - Best Script Updated for Chapter 7 | ZenDaddy',
    description: 'The most advanced Cronus Zen aim assist script for 2026. DYN pattern, 29 OLED settings, human-like movement engine.',
    url: 'https://zendaddy.pro/cronus-zen-aim-assist-2026',
    type: 'website',
    images: [
      {
        url: 'https://zendaddy.pro/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'ZenDaddy Cronus Zen Aim Assist 2026'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cronus Zen Aim Assist 2026 - Best Script | ZenDaddy',
    description: 'Best Cronus Zen aim assist script for 2026 with DYN pattern and 29 OLED settings',
    images: ['https://zendaddy.pro/opengraph-image.png']
  }
};

export default function CronusZenAimAssist2026Page() {
  return (
    <>
      <SimpleHeader />
      <main className="min-h-screen bg-black text-white pt-20 md:pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 border-b border-lime-500/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lime-900/20 via-black to-black"></div>

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="bg-lime-500/20 border border-lime-500 text-lime-400 px-4 py-2 rounded-full text-sm font-mono">
                🚀 Updated for 2026 — Chapter 7 Ready
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-lime-400">Cronus Zen</span>{' '}
              <span className="text-white">Aim Assist</span>
              <br />
              <span className="bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent">
                2026 Edition
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-mono max-w-3xl mx-auto mb-8">
              The best Cronus Zen script for 2026. Rebuilt with <span className="text-lime-400">DYN human-like movement</span>,
              <span className="text-lime-400"> 250Hz PS5 polling sync</span>, and <span className="text-lime-400">29 OLED settings</span> for
              per-mode ADS/Hip-fire control. Updated for Fortnite Chapter 7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#pricing"
                className="bg-lime-500 hover:bg-lime-400 text-black font-bold px-8 py-4 rounded-lg transition-all hover:shadow-[0_0_30px_rgba(57,255,20,0.5)] text-lg"
              >
                Get GOD FLICK v3.0 PRO - €59.99
              </Link>
              <Link
                href="#whats-new"
                className="border border-lime-500 text-lime-400 hover:bg-lime-500/10 font-bold px-8 py-4 rounded-lg transition-all text-lg"
              >
                What's New in 2026
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {[
              { number: '23', label: 'OLED Settings' },
              { number: '6', label: 'Aim Patterns' },
              { number: '250Hz', label: 'PS5 Sync' },
              { number: '€59.99', label: 'One-Time' }
            ].map((stat, i) => (
              <div key={i} className="bg-black/60 border border-lime-500/30 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-lime-400 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-400 font-mono">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's New in 2026 */}
      <section id="whats-new" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-lime-400">What's New</span>{' '}
            <span className="text-white">in 2026</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: '🧠',
                title: 'DYN Pattern Engine',
                desc: 'The all-new DYN (Dynamic) aim pattern mimics natural human thumb movement. Unlike fixed circles or crosses, DYN generates organic micro-adjustments that sync perfectly with Fortnite\'s 2026 aim assist system—making your aim enhancement virtually undetectable.'
              },
              {
                icon: '🎲',
                title: 'Human Randomization Engine',
                desc: 'Advanced randomization layer adds natural variance to every stick input. No two movements are identical—eliminating the robotic patterns that outdated scripts produce. Your aim feels genuinely human while getting maximum aim assist pull.'
              },
              {
                icon: '⚡',
                title: '250Hz PS5 Polling Sync',
                desc: 'ZenDaddy now syncs with the PS5\'s 250Hz USB polling rate for ultra-low 4ms response times. Every stick adjustment arrives at the exact right moment—no input lag, no missed frames, pure precision at 120fps.'
              },
              {
                icon: '🎯',
                title: 'Optimized Defaults for 2026',
                desc: 'Factory defaults are tuned specifically for Fortnite Chapter 7\'s aim assist values. Start playing immediately with competition-ready settings—then fine-tune using 29 OLED sliders to match your exact sensitivity and playstyle.'
              }
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-black/60 border border-lime-500/30 rounded-lg p-6 hover:border-lime-400 hover:shadow-[0_0_30px_rgba(57,255,20,0.3)] transition-all"
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-lime-400 font-bold text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm font-mono">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ZenDaddy for 2026 */}
      <section className="py-16 px-4 bg-black/40 border-y border-lime-500/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-white">Why ZenDaddy is the</span>{' '}
            <span className="text-lime-400">Best Choice for 2026</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-950/20 border border-red-500/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-red-400 mb-6">❌ Outdated 2024/2025 Scripts</h3>
              <ul className="space-y-4 text-gray-300 font-mono">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Fixed polar patterns that Fortnite's 2026 system ignores</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>No 250Hz polling support—stuck at 125Hz with input lag</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Robotic, detectable movement patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>No updates for Chapter 7 aim assist changes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Restart required for every setting change</span>
                </li>
              </ul>
            </div>

            <div className="bg-lime-950/20 border border-lime-500/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-lime-400 mb-6">✅ ZenDaddy 2026</h3>
              <ul className="space-y-4 text-gray-300 font-mono">
                <li className="flex items-start gap-2">
                  <span className="text-lime-400 mt-1">✓</span>
                  <span>DYN pattern syncs with Fortnite's latest aim assist engine</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lime-400 mt-1">✓</span>
                  <span>250Hz PS5 polling for 4ms response time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lime-400 mt-1">✓</span>
                  <span>Human randomization engine—feels natural, not scripted</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lime-400 mt-1">✓</span>
                  <span>29 OLED settings with per-mode ADS/Hip-fire control</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lime-400 mt-1">✓</span>
                  <span>6 aim patterns: Circle, Diamond, Cross, Figure-8, Jitter, DYN</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Full Feature List */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-lime-400">Everything</span>{' '}
            <span className="text-white">Included</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🎮', title: '29 OLED Settings', desc: 'Adjust all settings in real-time across 5 OLED menu pages. Per-mode ADS/Hip-fire toggle per stick—no restarts needed.' },
              { icon: '🎯', title: '6 Aim Patterns', desc: 'Circle, Diamond, Cross, Figure-8, Jitter, and the new DYN pattern. Select independently per stick for ADS and Hip-fire.' },
              { icon: '🔒', title: 'Pre-Aim Sticky', desc: 'Extra aim stickiness when ADS without shooting. Perfect for lining up one-shot weapons before firing.' },
              { icon: '⚡', title: 'Instant Download', desc: 'Download immediately after purchase. Load to your Cronus Zen and start playing within 5 minutes.' },
              { icon: '🔄', title: 'Lifetime Updates', desc: 'Free updates for every Fortnite season and Chapter. One payment of €59.99, unlimited access forever.' },
              { icon: '💬', title: '24/7 Discord Support', desc: 'Join our Discord community for setup help, tuning tips, and direct support from the developer.' }
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-black/60 border border-lime-500/30 rounded-lg p-6 hover:border-lime-400 hover:shadow-[0_0_30px_rgba(57,255,20,0.3)] transition-all"
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-lime-400 font-bold text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm font-mono">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black via-lime-950/10 to-black border-y border-lime-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Upgrade to the</span>{' '}
            <span className="bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent">
              Best Zen Script of 2026
            </span>
          </h2>
          <p className="text-xl text-gray-300 font-mono mb-8">
            Stop using outdated scripts. Get ZenDaddy—the only Cronus Zen aim assist built for 2026.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/#pricing"
              className="bg-lime-500 hover:bg-lime-400 text-black font-bold px-10 py-5 rounded-lg transition-all hover:shadow-[0_0_40px_rgba(57,255,20,0.6)] text-xl"
            >
              Get GOD FLICK v3.0 PRO - €59.99
            </Link>
            <Link
              href="https://discord.gg/zp2HmEgTWq"
              target="_blank"
              className="border border-lime-500 text-lime-400 hover:bg-lime-500/10 font-bold px-10 py-5 rounded-lg transition-all text-xl"
            >
              Join Discord
            </Link>
          </div>

          <p className="text-sm text-gray-500 font-mono">
            ✅ Instant Download • 🔄 Free Updates • 💬 24/7 Support
          </p>
        </div>
      </section>
      </main>
    </>
  );
}
