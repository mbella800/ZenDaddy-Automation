import { Metadata } from 'next';
import SimpleHeader from '@/components/SimpleHeader';

export const metadata: Metadata = {
  title: 'Free Apex Legends Script? The Hidden Dangers | ZenDaddy',
  description: 'Searching for a free Apex Legends Cronus script? Discover why free scripts contain malware, cause bans, and how premium scripts keep you protected.',
  keywords: 'free apex legends script, free apex cronus script, apex zen script free, free cronus zen apex',
  openGraph: {
    title: 'Free Apex Legends Script? The Hidden Dangers',
    description: 'Free scripts = account bans, malware risks, zero support. Get a safe premium Apex script instead.',
    url: 'https://zendaddy.pro/free-apex-script',
    images: [{
      url: 'https://zendaddy.pro/zendaddy-banner.png',
      width: 1200,
      height: 630,
    }],
  },
};

export default function FreeApexScriptPage() {
  return (
    <>
      <SimpleHeader />
      <main className="min-h-screen bg-black text-white pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 mb-6 border border-red-500/50 rounded-full bg-red-500/10">
              <span className="text-red-400 font-terminal text-sm">⚠️ WARNING: FREE SCRIPTS = BAN RISK</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Free </span>
              <span className="text-matrix-green glow-text">APEX LEGENDS SCRIPT?</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              That "free" Apex Legends Cronus script you found on YouTube or Reddit? It's a trap. Here's what they don't tell you about free scripts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/custom-scripts"
                className="px-8 py-4 bg-matrix-green text-black font-bold rounded-lg hover:bg-lime-400 transition-all font-terminal text-lg"
              >
                GET SAFE PREMIUM SCRIPT
              </a>
              <a 
                href="#risks"
                className="px-8 py-4 border border-matrix-dark-green text-matrix-green font-bold rounded-lg hover:bg-matrix-dark-green/20 transition-all font-terminal text-lg"
              >
                SEE THE RISKS
              </a>
            </div>
          </div>
        </section>

        {/* Risks Section */}
        <section id="risks" className="py-20 px-4 bg-gradient-to-b from-black to-red-950/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-red-400">The REAL Cost of "Free" Apex Scripts</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Risk 1 */}
              <div className="border border-red-500/30 rounded-lg p-6 bg-black/50">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🚨</div>
                  <div>
                    <h3 className="text-xl font-bold text-red-400 mb-2">Easy Anti-Cheat Detection</h3>
                    <p className="text-gray-400">
                      Apex's Easy Anti-Cheat system is ADVANCED. Free scripts use outdated techniques that get flagged instantly. Hardware ban = new PC or permanent goodbye to Apex.
                    </p>
                  </div>
                </div>
              </div>

              {/* Risk 2 */}
              <div className="border border-red-500/30 rounded-lg p-6 bg-black/50">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">💀</div>
                  <div>
                    <h3 className="text-xl font-bold text-red-400 mb-2">Keyloggers & Spyware</h3>
                    <p className="text-gray-400">
                      Free script creators make money by embedding malware. Your Discord tokens, Steam password, PayPal login - all stolen and sold within hours.
                    </p>
                  </div>
                </div>
              </div>

              {/* Risk 3 */}
              <div className="border border-red-500/30 rounded-lg p-6 bg-black/50">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">📉</div>
                  <div>
                    <h3 className="text-xl font-bold text-red-400 mb-2">Broken After Every Update</h3>
                    <p className="text-gray-400">
                      Apex updates weekly. Free scripts break with every patch and never get fixed. You'll waste hours searching for "working" scripts that don't exist.
                    </p>
                  </div>
                </div>
              </div>

              {/* Risk 4 */}
              <div className="border border-red-500/30 rounded-lg p-6 bg-black/50">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🤡</div>
                  <div>
                    <h3 className="text-xl font-bold text-red-400 mb-2">Makes Your Aim WORSE</h3>
                    <p className="text-gray-400">
                      Free scripts use generic settings that fight against YOUR muscle memory. Instead of improving, you'll whiff shots and die more. Congrats, you played yourself.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="border border-matrix-dark-green/40 rounded-xl p-8 bg-black/60">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-matrix-green" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 text-lg mb-4 italic">
                "I wasted 2 months downloading 'free' Apex scripts from YouTube. Every single one either didn't work or got me shadowbanned. Finally paid for a custom ZenDaddy script and holy sh*t, it actually works. Should've done this from day 1."
              </p>
              <p className="text-matrix-green font-terminal">- Jake, Masters Ranked</p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-white">Free Scripts vs </span>
              <span className="text-matrix-green glow-text">ZenDaddy Premium</span>
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-matrix-dark-green/30">
                    <th className="text-left p-4 text-gray-400 font-terminal">Feature</th>
                    <th className="text-center p-4 text-red-400 font-terminal">Free Scripts</th>
                    <th className="text-center p-4 text-matrix-green font-terminal">ZenDaddy Premium</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-matrix-dark-green/20">
                    <td className="p-4 text-gray-300">Malware Free</td>
                    <td className="text-center p-4 text-red-400 text-2xl">❌</td>
                    <td className="text-center p-4 text-matrix-green text-2xl">✅</td>
                  </tr>
                  <tr className="border-b border-matrix-dark-green/20">
                    <td className="p-4 text-gray-300">Designed to Avoid Detection</td>
                    <td className="text-center p-4 text-red-400 text-2xl">❌</td>
                    <td className="text-center p-4 text-matrix-green text-2xl">✅</td>
                  </tr>
                  <tr className="border-b border-matrix-dark-green/20">
                    <td className="p-4 text-gray-300">Weekly Updates</td>
                    <td className="text-center p-4 text-red-400 text-2xl">❌</td>
                    <td className="text-center p-4 text-matrix-green text-2xl">✅</td>
                  </tr>
                  <tr className="border-b border-matrix-dark-green/20">
                    <td className="p-4 text-gray-300">All-Weapon Recoil</td>
                    <td className="text-center p-4 text-red-400 text-2xl">❌</td>
                    <td className="text-center p-4 text-matrix-green text-2xl">✅</td>
                  </tr>
                  <tr className="border-b border-matrix-dark-green/20">
                    <td className="p-4 text-gray-300">OLED Customization</td>
                    <td className="text-center p-4 text-red-400 text-2xl">❌</td>
                    <td className="text-center p-4 text-matrix-green text-2xl">✅</td>
                  </tr>
                  <tr className="border-b border-matrix-dark-green/20">
                    <td className="p-4 text-gray-300">Discord Support</td>
                    <td className="text-center p-4 text-red-400 text-2xl">❌</td>
                    <td className="text-center p-4 text-matrix-green text-2xl">✅</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-300 font-bold">Price</td>
                    <td className="text-center p-4 text-red-400 font-terminal">$0 (+ ban risk)</td>
                    <td className="text-center p-4 text-matrix-green font-terminal">$129 (safe & updated)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-matrix-dark-green/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-white">Stop Wasting Time on </span>
              <span className="text-red-400">Broken Free Scripts</span>
            </h2>
            
            <p className="text-xl text-gray-400 mb-8">
              Get a professional Apex Legends script that's updated for every patch, optimized for your playstyle, and backed by expert support.
            </p>

            <div className="bg-black/60 border border-matrix-dark-green/40 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-matrix-green mb-4">What You Get With Premium:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center gap-3">
                  <span className="text-matrix-green text-xl">✓</span>
                  <span className="text-gray-300">Recoil control for all weapons</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-matrix-green text-xl">✓</span>
                  <span className="text-gray-300">Advanced aim assist algorithms</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-matrix-green text-xl">✓</span>
                  <span className="text-gray-300">OLED menu customization</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-matrix-green text-xl">✓</span>
                  <span className="text-gray-300">Weekly updates for patches</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-matrix-green text-xl">✓</span>
                  <span className="text-gray-300">24/7 Discord support</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-matrix-green text-xl">✓</span>
                  <span className="text-gray-300">Lifetime updates included</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a 
                href="/custom-scripts"
                className="px-10 py-5 bg-matrix-green text-black font-bold rounded-lg hover:bg-lime-400 transition-all font-terminal text-xl"
              >
                ORDER APEX SCRIPT - $129
              </a>
              <a 
                href="/#pricing"
                className="px-10 py-5 border border-matrix-dark-green text-matrix-green font-bold rounded-lg hover:bg-matrix-dark-green/20 transition-all font-terminal text-xl"
              >
                VIEW ALL SCRIPTS
              </a>
            </div>

            <p className="text-gray-500 text-sm font-terminal">
              🎯 Custom-built for you • 🛡️ Safe from bans • ⚡ Instant Discord access
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
