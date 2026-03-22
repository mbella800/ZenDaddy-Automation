import { Metadata } from 'next';
import Link from 'next/link';
import SimpleHeader from '@/components/SimpleHeader';

export const metadata: Metadata = {
  title: 'Cronus Zen Fortnite Script 2026 - ZenDaddy Enhanced Aim Assist | Best Settings',
  description: 'Professional Cronus Zen script for Fortnite 2026. 29 OLED settings with per-mode control, 6 aim patterns including DYN, advanced aim assist enhancement. Instant download. €59.99.',
  keywords: 'cronus zen fortnite, fortnite zen script, cronus zen aim assist, fortnite controller script, best cronus zen script 2026, fortnite aim script, zen fortnite settings, cronus zen fortnite 2026, fortnite chapter 7 zen script',
  openGraph: {
    title: 'Cronus Zen Fortnite Script 2026 - ZenDaddy Enhanced Aim Assist',
    description: 'Professional Cronus Zen script for Fortnite with 29 OLED settings with per-mode control and advanced aim assist enhancement.',
    url: 'https://zendaddy.pro/cronus-zen-fortnite',
    type: 'website',
    images: [
      {
        url: 'https://zendaddy.pro/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'ZenDaddy Cronus Zen Fortnite Script'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cronus Zen Fortnite Script 2026 - ZenDaddy',
    description: 'Professional aim enhancement for Fortnite with 29 OLED settings with per-mode control',
    images: ['https://zendaddy.pro/opengraph-image.png']
  }
};

export default function CronusZenFortnitePage() {
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
                #1 Cronus Zen Script for Fortnite 2026
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-lime-400">Cronus Zen</span>{' '}
              <span className="text-white">Fortnite</span>
              <br />
              <span className="bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent">
                Enhanced Aim Assist
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-mono max-w-3xl mx-auto mb-8">
              Professional aim enhancement with <span className="text-lime-400">23 real-time OLED settings</span>, 
              advanced algorithms, and <span className="text-lime-400">per-mode ADS/Hip-fire control</span>. 
              No restarts needed—tune while you play.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#pricing"
                className="bg-lime-500 hover:bg-lime-400 text-black font-bold px-8 py-4 rounded-lg transition-all hover:shadow-[0_0_30px_rgba(57,255,20,0.5)] text-lg"
              >
                Get GOD FLICK v3.0 PRO - €59.99
              </Link>
              <Link
                href="#features"
                className="border border-lime-500 text-lime-400 hover:bg-lime-500/10 font-bold px-8 py-4 rounded-lg transition-all text-lg"
              >
                See Features
              </Link>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {[
              { number: '23', label: 'OLED Settings' },
              { number: '58+', label: 'Happy Users' },
              { number: '4.8★', label: 'Rating' },
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

      {/* What is Cronus Zen for Fortnite */}
      <section id="about" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-lime-400">What is</span>{' '}
            <span className="text-white">Cronus Zen for Fortnite?</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 font-mono mb-4 leading-relaxed">
                Cronus Zen is a controller adapter that allows you to run custom scripts on PlayStation and Xbox. 
                <span className="text-lime-400"> ZenDaddy is the most advanced Fortnite script available</span>, 
                designed specifically to enhance your controller aim without feeling unnatural.
              </p>
              <p className="text-gray-300 font-mono mb-4 leading-relaxed">
                Unlike basic scripts that use fixed patterns, ZenDaddy uses <span className="text-lime-400">intelligent algorithms</span> that 
                work <span className="text-lime-400">with</span> Fortnite's native aim assist—not against it. The result? Smoother tracking, 
                better target acquisition, and <span className="text-lime-400">professional-grade precision</span>.
              </p>
            </div>
            
            <div className="bg-black/40 border border-lime-500/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-lime-400 mb-4">✅ Why ZenDaddy Stands Out:</h3>
              <ul className="space-y-3 text-gray-300 font-mono">
                <li className="flex items-start gap-2">
                  <span className="text-lime-400 mt-1">▸</span>
                  <span><strong className="text-white">29 OLED Settings with ADS/HIP toggle:</strong> Tune settings without restarting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lime-400 mt-1">▸</span>
                  <span><strong className="text-white">Per-Mode Control:</strong> Separate ADS and Hip-fire settings per stick</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lime-400 mt-1">▸</span>
                  <span><strong className="text-white">Smart Algorithms:</strong> Adapts to your playstyle</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lime-400 mt-1">▸</span>
                  <span><strong className="text-white">OLED Display:</strong> Professional UI with visual feedback</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lime-400 mt-1">▸</span>
                  <span><strong className="text-white">Instant Download:</strong> Start using in minutes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Menu Pages */}
      <section id="features" className="py-16 px-4 bg-black/40 border-y border-lime-500/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-lime-400">5 Menu Pages,</span>{' '}
            <span className="text-white">23 Settings</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'L STICK',
                desc: 'Per-mode pattern, speed, size (ADS/HIP toggle)',
                icon: '🕹️'
              },
              {
                name: 'R STICK',
                desc: 'Per-mode pattern, speed, size (ADS/HIP toggle)',
                icon: '🎯'
              },
              {
                name: 'DAMP',
                desc: 'ADS dampening, Hip dampening, Turn threshold, Pre-Aim sticky',
                icon: '🌊'
              },
              {
                name: 'SYSTEM',
                desc: 'Deadzone, R-Stick DZ, Tapfire delay',
                icon: '⚙️'
              },
              {
                name: 'BOOST',
                desc: 'Track boost, Stick boost, L Random, R Random',
                icon: '🚀'
              }
            ].map((module, i) => (
              <div
                key={i}
                className="bg-black/60 border border-lime-500/30 rounded-lg p-6 hover:border-lime-400 hover:shadow-[0_0_30px_rgba(57,255,20,0.3)] transition-all group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{module.icon}</div>
                <h3 className="text-lime-400 font-bold text-lg mb-2">{module.name}</h3>
                <p className="text-gray-400 text-sm font-mono">{module.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-lime-400">How to Setup</span>{' '}
            <span className="text-white">Cronus Zen for Fortnite</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Purchase & Download',
                desc: 'Buy ZenDaddy and instantly download the .gpc script file'
              },
              {
                step: '2',
                title: 'Load to Cronus Zen',
                desc: 'Use Zen Studio to upload the script to your Cronus Zen device'
              },
              {
                step: '3',
                title: 'Tune & Play',
                desc: 'Fine-tune 23 settings across 5 pages using L2 + OPTIONS'
              }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-black/60 border border-lime-500/30 rounded-lg p-8 h-full">
                  <div className="absolute -top-4 left-6 bg-lime-500 text-black font-bold w-8 h-8 rounded-full flex items-center justify-center text-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-lime-400 mb-3 mt-2">{step.title}</h3>
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black via-lime-950/10 to-black border-y border-lime-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Ready to Dominate</span>{' '}
            <span className="bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent">
              Fortnite?
            </span>
          </h2>
          <p className="text-xl text-gray-300 font-mono mb-8">
            Join 58+ players using ZenDaddy. One-time payment, lifetime access.
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

      <section className="py-12 px-4 border-t border-lime-500/20">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-lime-400 mb-6 text-center">Related Pages</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            <Link href="/best-fortnite-aim-assist" className="text-gray-400 hover:text-lime-400 font-mono text-sm transition-colors">Best Aim Assist Comparison</Link>
            <Link href="/fortnite-zen-script" className="text-gray-400 hover:text-lime-400 font-mono text-sm transition-colors">Fortnite Zen Script</Link>
            <Link href="/cronus-zen-aim-assist-2026" className="text-gray-400 hover:text-lime-400 font-mono text-sm transition-colors">Cronus Zen 2026</Link>
            <Link href="/fortnite-chapter-7-cronus-zen" className="text-gray-400 hover:text-lime-400 font-mono text-sm transition-colors">Chapter 7 Script</Link>
            <Link href="/ps5-cronus-zen-fortnite" className="text-gray-400 hover:text-lime-400 font-mono text-sm transition-colors">PS5 Optimized</Link>
            <Link href="/faq" className="text-gray-400 hover:text-lime-400 font-mono text-sm transition-colors">FAQ</Link>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
