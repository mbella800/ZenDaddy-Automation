import { Metadata } from 'next';
import SimpleHeader from '@/components/SimpleHeader';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Free Fortnite Script? Why Premium is Worth It | ZenDaddy',
  description: 'Want a free Fortnite Cronus Zen script? Learn why free scripts get detected, break constantly, and how ZenDaddy premium keeps you safe and winning.',
  keywords: 'free fortnite script, free fortnite zen script, free cronus fortnite script, fortnite zen script free download',
  openGraph: {
    title: 'Free Fortnite Script? Why Premium is Worth It',
    description: 'Free scripts = broken code, instant bans, malware. ZenDaddy premium = safe, updated, expert support.',
    url: 'https://zendaddy.pro/free-fortnite-script',
    images: [{
      url: 'https://zendaddy.pro/zendaddy-banner.png',
      width: 1200,
      height: 630,
    }],
  },
};

export default function FreeFortniteScriptPage() {
  return (
    <>
      <SimpleHeader />
      <main className="min-h-screen bg-black text-white pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 mb-6 border border-red-500/50 rounded-full bg-red-500/10">
              <span className="text-red-400 font-terminal text-sm">⚠️ FREE SCRIPTS = HARDWARE BAN</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Free </span>
              <span className="text-matrix-green glow-text">FORTNITE SCRIPT?</span>
              <br />
              <span className="text-white text-3xl md:text-4xl">Think Again.</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Epic Games doesn't mess around. Their anti-cheat system is one of the most aggressive in gaming. That free Fortnite script? It's a one-way ticket to a permanent ban.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#pricing"
                className="px-8 py-4 bg-matrix-green text-black font-bold rounded-lg hover:bg-lime-400 transition-all font-terminal text-lg"
              >
                GET ZENDADDY v3.0
              </Link>
              <a 
                href="#why"
                className="px-8 py-4 border border-matrix-dark-green text-matrix-green font-bold rounded-lg hover:bg-matrix-dark-green/20 transition-all font-terminal text-lg"
              >
                WHY PREMIUM?
              </a>
            </div>
          </div>
        </section>

        {/* Why Free Scripts Fail */}
        <section id="why" className="py-20 px-4 bg-gradient-to-b from-black to-red-950/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-red-400">Why Free Fortnite Scripts Always Fail</span>
            </h2>

            <div className="space-y-6">
              {/* Reason 1 */}
              <div className="border border-red-500/30 rounded-lg p-6 bg-black/50">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🎯</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-red-400 mb-2">Epic's Anti-Cheat Evolves Daily</h3>
                    <p className="text-gray-400">
                      Fortnite updates their detection algorithms every single day. Free scripts are reverse-engineered once and never updated. You'll be detected within hours, guaranteed.
                    </p>
                  </div>
                </div>
              </div>

              {/* Reason 2 */}
              <div className="border border-red-500/30 rounded-lg p-6 bg-black/50">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🔧</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-red-400 mb-2">Breaks Every Single Update</h3>
                    <p className="text-gray-400">
                      Fortnite updates weekly. Free scripts don't. Every Tuesday at 4am EST = your script is broken and you're searching forums for a "working 2026" version that doesn't exist.
                    </p>
                  </div>
                </div>
              </div>

              {/* Reason 3 */}
              <div className="border border-red-500/30 rounded-lg p-6 bg-black/50">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">💻</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-red-400 mb-2">No Understanding of Fortnite Mechanics</h3>
                    <p className="text-gray-400">
                      Free scripts use generic aim assist that fights AGAINST Fortnite's native mechanics. Result? Jittery aim, missed shots, and you play worse than without it.
                    </p>
                  </div>
                </div>
              </div>

              {/* Reason 4 */}
              <div className="border border-red-500/30 rounded-lg p-6 bg-black/50">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🦠</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-red-400 mb-2">Bundled with Malware</h3>
                    <p className="text-gray-400">
                      That "free download" comes with cryptominers, keyloggers, and account stealers. Your Epic Games account gets sold on dark web marketplaces for $50.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ZenDaddy Difference */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-white">Why </span>
              <span className="text-matrix-green glow-text">ZenDaddy Premium</span>
              <span className="text-white"> is Different</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-matrix-dark-green/30 rounded-lg p-6 bg-black/40">
                <div className="text-3xl mb-3">🧠</div>
                <h3 className="text-xl font-bold text-matrix-green mb-2">Built for Fortnite</h3>
                <p className="text-gray-400">
                  We reverse-engineered Fortnite's aim assist mechanics. Our script works WITH the game, not against it. Smooth, natural, undetectable.
                </p>
              </div>

              <div className="border border-matrix-dark-green/30 rounded-lg p-6 bg-black/40">
                <div className="text-3xl mb-3">🔄</div>
                <h3 className="text-xl font-bold text-matrix-green mb-2">Updated Every Patch</h3>
                <p className="text-gray-400">
                  Fortnite updates? We update within hours. You get automatic updates in Discord. Zero downtime, always working.
                </p>
              </div>

              <div className="border border-matrix-dark-green/30 rounded-lg p-6 bg-black/40">
                <div className="text-3xl mb-3">🎚️</div>
                <h3 className="text-xl font-bold text-matrix-green mb-2">8 OLED Sliders</h3>
                <p className="text-gray-400">
                  Adjust everything in real-time without restarting. STRENGTH, SMOOTHNESS, ROTATION, distance zones - all customizable while playing.
                </p>
              </div>

              <div className="border border-matrix-dark-green/30 rounded-lg p-6 bg-black/40">
                <div className="text-3xl mb-3">🛡️</div>
                <h3 className="text-xl font-bold text-matrix-green mb-2">Ban Protection</h3>
                <p className="text-gray-400">
                  Tested for months against Epic's anti-cheat. Uses natural input patterns that look 100% human. Zero bans in our community.
                </p>
              </div>

              <div className="border border-matrix-dark-green/30 rounded-lg p-6 bg-black/40">
                <div className="text-3xl mb-3">💬</div>
                <h3 className="text-xl font-bold text-matrix-green mb-2">Expert Support</h3>
                <p className="text-gray-400">
                  Stuck? Our Discord has 24/7 support. Setup help, troubleshooting, custom configs - we've got you covered.
                </p>
              </div>

              <div className="border border-matrix-dark-green/30 rounded-lg p-6 bg-black/40">
                <div className="text-3xl mb-3">♾️</div>
                <h3 className="text-xl font-bold text-matrix-green mb-2">Lifetime Updates</h3>
                <p className="text-gray-400">
                  Pay once, get updates forever. New Fortnite chapter? New mechanics? We adapt and you get it free.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Real User Stats */}
        <section className="py-16 px-4 bg-gradient-to-b from-black to-matrix-dark-green/10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-black/60 border border-matrix-dark-green/40 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-center text-matrix-green mb-8">Real ZenDaddy Users</h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-matrix-green mb-2">4.8/5</div>
                  <div className="text-gray-400">Average Rating</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-matrix-green mb-2">57+</div>
                  <div className="text-gray-400">Active Users</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-matrix-green mb-2">0</div>
                  <div className="text-gray-400">Bans Reported So Far</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-white">Free Scripts vs </span>
              <span className="text-matrix-green glow-text">ZenDaddy v3.0</span>
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-matrix-dark-green/30">
                    <th className="text-left p-4 text-gray-400 font-terminal">Feature</th>
                    <th className="text-center p-4 text-red-400 font-terminal">Free Scripts</th>
                    <th className="text-center p-4 text-matrix-green font-terminal">ZenDaddy v3.0</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-matrix-dark-green/20">
                    <td className="p-4 text-gray-300">Designed to Avoid Bans</td>
                    <td className="text-center p-4 text-red-400 text-2xl">❌</td>
                    <td className="text-center p-4 text-matrix-green text-2xl">✅</td>
                  </tr>
                  <tr className="border-b border-matrix-dark-green/20">
                    <td className="p-4 text-gray-300">Works with Fortnite Updates</td>
                    <td className="text-center p-4 text-red-400 text-2xl">❌</td>
                    <td className="text-center p-4 text-matrix-green text-2xl">✅</td>
                  </tr>
                  <tr className="border-b border-matrix-dark-green/20">
                    <td className="p-4 text-gray-300">8 OLED Sliders</td>
                    <td className="text-center p-4 text-red-400 text-2xl">❌</td>
                    <td className="text-center p-4 text-matrix-green text-2xl">✅</td>
                  </tr>
                  <tr className="border-b border-matrix-dark-green/20">
                    <td className="p-4 text-gray-300">Malware Free</td>
                    <td className="text-center p-4 text-red-400 text-2xl">❌</td>
                    <td className="text-center p-4 text-matrix-green text-2xl">✅</td>
                  </tr>
                  <tr className="border-b border-matrix-dark-green/20">
                    <td className="p-4 text-gray-300">Natural Aim Assist</td>
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
                    <td className="text-center p-4 text-red-400 font-terminal">$0 (hardware ban risk)</td>
                    <td className="text-center p-4 text-matrix-green font-terminal">€59.99 (safe & proven)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-white">Stop Searching for </span>
              <span className="text-red-400">"Free" Scripts</span>
            </h2>
            
            <p className="text-xl text-gray-400 mb-8">
              Get the script that actually works. Built by experts, updated constantly, backed by a community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link 
                href="/#pricing"
                className="px-10 py-5 bg-matrix-green text-black font-bold rounded-lg hover:bg-lime-400 transition-all font-terminal text-xl"
              >
                GET GOD FLICK v3.0 PRO - €59.99
              </Link>
              <Link 
                href="/custom-scripts"
                className="px-10 py-5 border border-matrix-dark-green text-matrix-green font-bold rounded-lg hover:bg-matrix-dark-green/20 transition-all font-terminal text-xl"
              >
                CUSTOM SCRIPTS
              </Link>
            </div>

            <p className="text-gray-500 text-sm font-terminal">
              ⚡ Instant download • 🔄 Lifetime updates • 💎 25% off future versions
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
