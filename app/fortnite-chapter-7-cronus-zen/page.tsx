import { Metadata } from 'next';
import Link from 'next/link';
import SimpleHeader from '@/components/SimpleHeader';

export const metadata: Metadata = {
  title: 'Fortnite Chapter 7 Cronus Zen Script - Updated Aim Assist | ZenDaddy',
  description: 'Fortnite Chapter 7 Cronus Zen script with updated aim assist. DYN pattern syncs with Chapter 7 mechanics, 29 OLED settings, 6 aim patterns, per-mode control. Season-proof design. €59.99.',
  keywords: 'fortnite chapter 7 cronus zen, fortnite chapter 7 aim assist script, chapter 7 zen script, fortnite season cronus zen, chapter 7 aim assist, fortnite chapter 7 script, cronus zen chapter 7 2026',
  openGraph: {
    title: 'Fortnite Chapter 7 Cronus Zen Script - Updated Aim Assist | ZenDaddy',
    description: 'The only Cronus Zen script updated for Fortnite Chapter 7. DYN pattern, 29 OLED settings, season-proof design.',
    url: 'https://zendaddy.pro/fortnite-chapter-7-cronus-zen',
    type: 'website',
    images: [
      {
        url: 'https://zendaddy.pro/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'ZenDaddy Fortnite Chapter 7 Cronus Zen Script'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fortnite Chapter 7 Cronus Zen Script | ZenDaddy',
    description: 'Updated Cronus Zen aim assist for Fortnite Chapter 7 with DYN pattern and 29 OLED settings',
    images: ['https://zendaddy.pro/opengraph-image.png']
  }
};

export default function FortniteChapter7CronusZenPage() {
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
              <span className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-2 rounded-full text-sm font-mono animate-pulse">
                🔥 UPDATED FOR CHAPTER 7
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-lime-400">Fortnite Chapter 7</span>
              <br />
              <span className="text-white">Cronus Zen</span>{' '}
              <span className="bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent">
                Aim Assist
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-mono max-w-3xl mx-auto mb-8">
              The only Cronus Zen script built for <span className="text-lime-400">Fortnite Chapter 7</span>.
              DYN pattern syncs with the latest aim assist mechanics, <span className="text-lime-400">29 OLED settings</span>,
              and season-proof design that never breaks with updates.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#pricing"
                className="bg-lime-500 hover:bg-lime-400 text-black font-bold px-8 py-4 rounded-lg transition-all hover:shadow-[0_0_30px_rgba(57,255,20,0.5)] text-lg"
              >
                Get GOD FLICK v3.0 PRO - €59.99
              </Link>
              <Link
                href="#chapter7"
                className="border border-lime-500 text-lime-400 hover:bg-lime-500/10 font-bold px-8 py-4 rounded-lg transition-all text-lg"
              >
                Chapter 7 Features
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {[
              { number: '23', label: 'OLED Settings' },
              { number: '6', label: 'Aim Patterns' },
              { number: 'Ch.7', label: 'Compatible' },
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

      {/* Chapter 7 Compatibility */}
      <section id="chapter7" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-lime-400">Chapter 7</span>{' '}
            <span className="text-white">Compatibility</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 font-mono mb-4 leading-relaxed">
                Fortnite Chapter 7 brought significant changes to the aim assist system. Epic updated rotational assist values,
                adjusted close-range tracking, and modified how controller input is processed.
                <span className="text-lime-400"> Most old scripts break completely with these changes.</span>
              </p>
              <p className="text-gray-300 font-mono mb-4 leading-relaxed">
                ZenDaddy is the only Cronus Zen script that <span className="text-lime-400">adapts to Chapter 7's mechanics</span>.
                The DYN pattern engine generates movement that works <span className="text-lime-400">with</span> the new aim assist values—not against them.
                Your aim enhancement feels natural because it syncs with how Chapter 7 processes controller input.
              </p>
            </div>

            <div className="bg-black/40 border border-lime-500/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-lime-400 mb-4">✅ Chapter 7 Ready:</h3>
              <ul className="space-y-3 text-gray-300 font-mono">
                <li className="flex items-start gap-2">
                  <span className="text-lime-400 mt-1">▸</span>
                  <span><strong className="text-white">Updated Aim Values:</strong> Tuned for Chapter 7's rotational assist</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lime-400 mt-1">▸</span>
                  <span><strong className="text-white">DYN Pattern:</strong> Syncs with new aim assist processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lime-400 mt-1">▸</span>
                  <span><strong className="text-white">Close-Range Tracking:</strong> Adapted for Chapter 7 combat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lime-400 mt-1">▸</span>
                  <span><strong className="text-white">New Weapons:</strong> Pre-aim sticky works with Chapter 7 arsenal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lime-400 mt-1">▸</span>
                  <span><strong className="text-white">Performance:</strong> Optimized for 120fps on PS5</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Old Scripts Break */}
      <section className="py-16 px-4 bg-black/40 border-y border-lime-500/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-white">Why Old Scripts</span>{' '}
            <span className="text-red-400">Break</span>{' '}
            <span className="text-white">Every Season</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: '💀',
                title: 'Fixed Patterns',
                desc: 'Old scripts use hardcoded circle or polar patterns. When Epic changes aim assist values each season, these patterns stop triggering assist properly—or worse, fight against it.'
              },
              {
                icon: '⏳',
                title: 'No Updates',
                desc: 'Most script developers abandon their projects after selling. When Chapter 7 drops, you\'re stuck with a script tuned for Chapter 5 mechanics. Zero updates, zero support.'
              },
              {
                icon: '🤖',
                title: 'Detectable Movement',
                desc: 'Rigid, repeating patterns are easy for anti-cheat to flag. Without human randomization, your stick movement looks robotic—a red flag in Chapter 7\'s environment.'
              }
            ].map((issue, i) => (
              <div
                key={i}
                className="bg-red-950/10 border border-red-500/30 rounded-lg p-6"
              >
                <div className="text-4xl mb-3">{issue.icon}</div>
                <h3 className="text-red-400 font-bold text-xl mb-2">{issue.title}</h3>
                <p className="text-gray-400 text-sm font-mono">{issue.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-lime-950/20 border border-lime-500/30 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-lime-400 mb-4">ZenDaddy: Season-Proof by Design</h3>
            <p className="text-gray-300 font-mono max-w-3xl mx-auto mb-6">
              ZenDaddy receives <span className="text-lime-400">free lifetime updates</span> for every Fortnite season and Chapter.
              When Epic changes aim assist, we update the script. Your €59.99 one-time purchase covers
              Chapter 7, Chapter 8, and every season that follows. 6 aim patterns (Circle, Diamond, Cross, Figure-8, Jitter, DYN)
              with per-mode ADS/Hip-fire control ensure you're always optimized.
            </p>
            <Link
              href="/#pricing"
              className="inline-block bg-lime-500 hover:bg-lime-400 text-black font-bold px-8 py-4 rounded-lg transition-all hover:shadow-[0_0_30px_rgba(57,255,20,0.5)] text-lg"
            >
              Get GOD FLICK v3.0 PRO - €59.99
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-lime-400">Full</span>{' '}
            <span className="text-white">Feature Set</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🎮', title: '29 OLED Settings', desc: 'Real-time adjustment across 5 menu pages. Per-mode ADS/Hip-fire toggle per stick. No restarts ever needed.' },
              { icon: '🧠', title: 'DYN Pattern', desc: 'Dynamic human-like aim pattern that syncs with Chapter 7\'s aim assist system. Organic movement, maximum pull.' },
              { icon: '🔒', title: 'Pre-Aim Sticky', desc: 'Extra stickiness when ADS without shooting. Line up headshots with Chapter 7\'s new weapons before firing.' },
              { icon: '⚡', title: 'Instant Download', desc: 'Download immediately after purchase. Load to Cronus Zen and play Chapter 7 with enhanced aim in 5 minutes.' },
              { icon: '🔄', title: 'Lifetime Updates', desc: 'Free updates for Chapter 7, 8, and beyond. One payment, every season covered. Never buy a script again.' },
              { icon: '💬', title: '24/7 Discord Support', desc: 'Active community with setup help, Chapter 7 tuning tips, and direct developer support.' }
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
            <span className="text-white">Dominate</span>{' '}
            <span className="bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent">
              Fortnite Chapter 7
            </span>
          </h2>
          <p className="text-xl text-gray-300 font-mono mb-8">
            Join 58+ players using the only Chapter 7 optimized Cronus Zen script. One payment, lifetime access.
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
