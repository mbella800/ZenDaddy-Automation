import { Metadata } from 'next';
import Link from 'next/link';
import SimpleHeader from '@/components/SimpleHeader';

export const metadata: Metadata = {
  title: 'PS5 Cronus Zen Fortnite Script - 120FPS Optimized | ZenDaddy',
  description: 'PS5 optimized Cronus Zen Fortnite script. 120fps support, 250Hz USB polling, 4ms response time, DualSense compatibility. 29 OLED settings, 6 aim patterns, per-mode control. €59.99.',
  keywords: 'ps5 cronus zen fortnite, cronus zen ps5 script, ps5 aim assist script fortnite, ps5 cronus zen setup, cronus zen ps5 120fps, dualsense cronus zen, ps5 fortnite script 2026',
  openGraph: {
    title: 'PS5 Cronus Zen Fortnite Script - 120FPS Optimized | ZenDaddy',
    description: 'PS5 optimized Cronus Zen script for Fortnite. 120fps, 250Hz polling, DualSense support, 29 OLED settings.',
    url: 'https://zendaddy.pro/ps5-cronus-zen-fortnite',
    type: 'website',
    images: [
      {
        url: 'https://zendaddy.pro/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'ZenDaddy PS5 Cronus Zen Fortnite Script'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PS5 Cronus Zen Fortnite Script - 120FPS | ZenDaddy',
    description: 'PS5 optimized Cronus Zen aim assist for Fortnite with 120fps support and DualSense compatibility',
    images: ['https://zendaddy.pro/opengraph-image.png']
  }
};

export default function PS5CronusZenFortnitePage() {
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
                ⚡ PS5 Optimized — 120FPS / 250Hz / 4ms
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-lime-400">PS5</span>{' '}
              <span className="text-white">Cronus Zen</span>
              <br />
              <span className="bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent">
                Fortnite Script
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-mono max-w-3xl mx-auto mb-8">
              Built for PS5 performance. <span className="text-lime-400">120fps support</span>,
              <span className="text-lime-400"> 250Hz USB polling</span>, and
              <span className="text-lime-400"> DualSense compatibility</span>. 29 OLED settings with per-mode
              ADS/Hip-fire control for the ultimate PS5 Fortnite experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#pricing"
                className="bg-lime-500 hover:bg-lime-400 text-black font-bold px-8 py-4 rounded-lg transition-all hover:shadow-[0_0_30px_rgba(57,255,20,0.5)] text-lg"
              >
                Get GOD FLICK v3.0 PRO - €59.99
              </Link>
              <Link
                href="#ps5-optimized"
                className="border border-lime-500 text-lime-400 hover:bg-lime-500/10 font-bold px-8 py-4 rounded-lg transition-all text-lg"
              >
                PS5 Features
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {[
              { number: '120fps', label: 'PS5 Support' },
              { number: '4ms', label: 'Response Time' },
              { number: '250Hz', label: 'USB Polling' },
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

      {/* PS5 Optimized Section */}
      <section id="ps5-optimized" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-lime-400">PS5</span>{' '}
            <span className="text-white">Optimized</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: '🖥️',
                title: '120FPS Support',
                desc: 'ZenDaddy is optimized for PS5\'s 120fps mode in Fortnite. Every aim adjustment is calculated at double the frame rate of PS4—giving you smoother tracking, tighter aim assist sync, and zero frame-skip artifacts.'
              },
              {
                icon: '⚡',
                title: '250Hz USB Polling Sync',
                desc: 'The PS5 supports 250Hz USB polling compared to PS4\'s 125Hz. ZenDaddy syncs with this higher polling rate for 4ms response times—your stick inputs register twice as fast as on last-gen hardware.'
              },
              {
                icon: '🎮',
                title: 'DualSense Controller Support',
                desc: 'Full compatibility with PS5 DualSense controller through Cronus Zen. All 29 OLED settings, 6 aim patterns (Circle, Diamond, Cross, Figure-8, Jitter, DYN), and per-mode controls work perfectly with DualSense.'
              },
              {
                icon: '🚀',
                title: 'Next-Gen Performance',
                desc: 'PS5\'s faster hardware means ZenDaddy\'s algorithms run with zero overhead. The human randomization engine, DYN pattern, and pre-aim sticky all execute within the PS5\'s faster processing window for seamless aim enhancement.'
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

      {/* PS5 vs PS4 */}
      <section className="py-16 px-4 bg-black/40 border-y border-lime-500/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-lime-400">PS5</span>{' '}
            <span className="text-white">Advantage</span>
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-lime-500">
                  <th className="text-left p-4 font-mono text-gray-400">Spec</th>
                  <th className="text-center p-4 font-bold text-lime-400">PS5 + ZenDaddy</th>
                  <th className="text-center p-4 font-mono text-gray-400">PS4 + Other Scripts</th>
                </tr>
              </thead>
              <tbody className="font-mono text-sm">
                {[
                  ['Frame Rate', '120fps', '60fps'],
                  ['USB Polling', '250Hz (4ms)', '125Hz (8ms)'],
                  ['OLED Settings', '23 Real-Time', '0-2 Basic'],
                  ['Aim Patterns', '6 (incl. DYN)', '1-2 Fixed'],
                  ['Per-Mode Control', '✅ ADS/Hip per stick', '❌ None'],
                  ['Input Lag', '4ms', '8-16ms'],
                  ['DualSense', '✅ Full Support', '❌ N/A'],
                  ['Updates', 'Lifetime Free', 'Paid/None'],
                  ['Pre-Aim Sticky', '✅ Yes', '❌ No']
                ].map((row, i) => (
                  <tr key={i} className="border-b border-lime-500/20 hover:bg-lime-500/5">
                    <td className="p-4 text-gray-300">{row[0]}</td>
                    <td className="p-4 text-center text-lime-400 font-bold">{row[1]}</td>
                    <td className="p-4 text-center text-gray-500">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PS5 Setup Steps */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-lime-400">PS5 Setup</span>{' '}
            <span className="text-white">in 5 Minutes</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Purchase & Download',
                desc: 'Buy ZenDaddy for €59.99 and instantly download the .gpc script file to your PC'
              },
              {
                step: '2',
                title: 'Connect Cronus Zen',
                desc: 'Plug Cronus Zen into your PC via USB. Open Zen Studio software and load the script'
              },
              {
                step: '3',
                title: 'Connect to PS5',
                desc: 'Plug Cronus Zen into PS5 USB port. Connect DualSense controller to Zen via USB or Bluetooth'
              },
              {
                step: '4',
                title: 'Tune & Dominate',
                desc: 'Launch Fortnite, press L2 + OPTIONS to open 29 OLED settings. Fine-tune per-mode ADS/Hip-fire and play'
              }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-black/60 border border-lime-500/30 rounded-lg p-6 h-full">
                  <div className="absolute -top-4 left-6 bg-lime-500 text-black font-bold w-8 h-8 rounded-full flex items-center justify-center text-lg">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-lime-400 mb-3 mt-2">{step.title}</h3>
                  <p className="text-gray-300 font-mono text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/setup-guide"
              className="inline-block border border-lime-500 text-lime-400 hover:bg-lime-500/10 font-bold px-6 py-3 rounded-lg transition-all"
            >
              Read Full Setup Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* Full Features */}
      <section className="py-16 px-4 bg-black/40 border-y border-lime-500/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-lime-400">Everything</span>{' '}
            <span className="text-white">You Get</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🎯', title: '29 OLED Settings', desc: 'Adjust every parameter in real-time on PS5. Per-mode ADS/Hip-fire toggle, 5 menu pages, zero restarts.' },
              { icon: '🧠', title: '6 Aim Patterns', desc: 'Circle, Diamond, Cross, Figure-8, Jitter, and DYN. Select per stick for ADS and Hip-fire independently.' },
              { icon: '🔒', title: 'Pre-Aim Sticky', desc: 'Extra stickiness when ADS without shooting on PS5. Line up precision shots before pulling the trigger.' },
              { icon: '📦', title: 'Instant Download', desc: 'Download instantly after purchase. Load to Cronus Zen and start playing Fortnite on PS5 in under 5 minutes.' },
              { icon: '🔄', title: 'Lifetime Updates', desc: 'Free updates for every Fortnite season. Your €59.99 one-time payment covers all future PS5 updates.' },
              { icon: '💬', title: '24/7 Discord Support', desc: 'Join our Discord for PS5 setup help, DualSense tips, tuning advice, and direct developer support.' }
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
            <span className="text-white">Unlock PS5</span>{' '}
            <span className="bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent">
              Aim Assist Power
            </span>
          </h2>
          <p className="text-xl text-gray-300 font-mono mb-8">
            Get the only PS5 optimized Cronus Zen Fortnite script. 120fps, 250Hz, DualSense—all unlocked.
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
