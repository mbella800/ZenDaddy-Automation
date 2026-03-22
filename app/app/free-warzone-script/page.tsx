import { Metadata } from 'next';
import SimpleHeader from '@/components/SimpleHeader';

export const metadata: Metadata = {
  title: 'Free Warzone Script? Why You Should Avoid Them | ZenDaddy',
  description: 'Looking for a free Warzone Cronus script? Learn why free scripts are dangerous (malware, bans, outdated) and how premium scripts keep you safe.',
  keywords: 'free warzone script, free warzone cronus script, warzone zen script free, free cronus zen warzone',
  openGraph: {
    title: 'Free Warzone Script? Why You Should Avoid Them',
    description: 'Free scripts = malware risks, bans, and no updates. Get a safe, premium Warzone script instead.',
    url: 'https://zendaddy.pro/free-warzone-script',
    images: [{
      url: 'https://zendaddy.pro/zendaddy-banner.png',
      width: 1200,
      height: 630,
    }],
  },
};

export default function FreeWarzoneScriptPage() {
  return (
    <>
      <SimpleHeader />
      <main className="min-h-screen bg-black text-white pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 mb-6 border border-red-500/50 rounded-full bg-red-500/10">
              <span className="text-red-400 font-terminal text-sm">⚠️ WARNING: FREE SCRIPTS ARE DANGEROUS</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Looking for a </span>
              <span className="text-matrix-green glow-text">FREE WARZONE SCRIPT?</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Before you download that "free" Cronus script for Warzone, you need to know the hidden dangers that could cost you your account, personal data, or worse.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/custom-scripts"
                className="px-8 py-4 bg-matrix-green text-black font-bold rounded-lg hover:bg-lime-400 transition-all font-terminal text-lg"
              >
                GET SAFE PREMIUM SCRIPT
              </a>
              <a 
                href="#comparison"
                className="px-8 py-4 border border-matrix-dark-green text-matrix-green font-bold rounded-lg hover:bg-matrix-dark-green/20 transition-all font-terminal text-lg"
              >
                SEE COMPARISON
              </a>
            </div>
          </div>
        </section>

        {/* Dangers Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-red-950/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-red-400">Why "Free" Scripts Are NOT Free</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Danger 1 */}
              <div className="border border-red-500/30 rounded-lg p-6 bg-black/50">
                <div className="text-4xl mb-4">🦠</div>
                <h3 className="text-xl font-bold text-red-400 mb-3">Malware & Viruses</h3>
                <p className="text-gray-400">
                  Free scripts often contain hidden malware that steals passwords, credit cards, and game accounts. Your "free" script could cost you thousands.
                </p>
              </div>

              {/* Danger 2 */}
              <div className="border border-red-500/30 rounded-lg p-6 bg-black/50">
                <div className="text-4xl mb-4">🚫</div>
                <h3 className="text-xl font-bold text-red-400 mb-3">Instant Bans</h3>
                <p className="text-gray-400">
                  Free scripts are poorly coded and easily detected by anti-cheat systems. Result? Permanent hardware ban within days or even hours.
                </p>
              </div>

              {/* Danger 3 */}
              <div className="border border-red-500/30 rounded-lg p-6 bg-black/50">
                <div className="text-4xl mb-4">⏰</div>
                <h3 className="text-xl font-bold text-red-400 mb-3">Outdated Code</h3>
                <p className="text-gray-400">
                  Game updates break free scripts constantly. No updates = you're stuck with broken code that doesn't work or gets you banned.
                </p>
              </div>

              {/* Danger 4 */}
              <div className="border border-red-500/30 rounded-lg p-6 bg-black/50">
                <div className="text-4xl mb-4">❌</div>
                <h3 className="text-xl font-bold text-red-400 mb-3">Zero Support</h3>
                <p className="text-gray-400">
                  When things break (and they will), you're on your own. No Discord, no updates, no help. Good luck figuring it out yourself.
                </p>
              </div>

              {/* Danger 5 */}
              <div className="border border-red-500/30 rounded-lg p-6 bg-black/50">
                <div className="text-4xl mb-4">🎣</div>
                <h3 className="text-xl font-bold text-red-400 mb-3">Account Phishing</h3>
                <p className="text-gray-400">
                  "Free" script sites often require login credentials to download. They steal your accounts and sell them on the dark web.
                </p>
              </div>

              {/* Danger 6 */}
              <div className="border border-red-500/30 rounded-lg p-6 bg-black/50">
                <div className="text-4xl mb-4">🗑️</div>
                <h3 className="text-xl font-bold text-red-400 mb-3">Garbage Quality</h3>
                <p className="text-gray-400">
                  Free scripts are copy-paste code from 2019. No optimization, terrible aim assist, and they make you play worse, not better.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section id="comparison" className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-white">Free Scripts vs </span>
              <span className="text-matrix-green glow-text">Premium ZenDaddy</span>
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
                    <td className="p-4 text-gray-300">Engineered to Avoid Bans</td>
                    <td className="text-center p-4 text-red-400 text-2xl">❌</td>
                    <td className="text-center p-4 text-matrix-green text-2xl">✅</td>
                  </tr>
                  <tr className="border-b border-matrix-dark-green/20">
                    <td className="p-4 text-gray-300">Regular Updates</td>
                    <td className="text-center p-4 text-red-400 text-2xl">❌</td>
                    <td className="text-center p-4 text-matrix-green text-2xl">✅</td>
                  </tr>
                  <tr className="border-b border-matrix-dark-green/20">
                    <td className="p-4 text-gray-300">24/7 Discord Support</td>
                    <td className="text-center p-4 text-red-400 text-2xl">❌</td>
                    <td className="text-center p-4 text-matrix-green text-2xl">✅</td>
                  </tr>
                  <tr className="border-b border-matrix-dark-green/20">
                    <td className="p-4 text-gray-300">OLED Customization</td>
                    <td className="text-center p-4 text-red-400 text-2xl">❌</td>
                    <td className="text-center p-4 text-matrix-green text-2xl">✅</td>
                  </tr>
                  <tr className="border-b border-matrix-dark-green/20">
                    <td className="p-4 text-gray-300">Works After Updates</td>
                    <td className="text-center p-4 text-red-400 text-2xl">❌</td>
                    <td className="text-center p-4 text-matrix-green text-2xl">✅</td>
                  </tr>
                  <tr className="border-b border-matrix-dark-green/20">
                    <td className="p-4 text-gray-300">Advanced Algorithms</td>
                    <td className="text-center p-4 text-red-400 text-2xl">❌</td>
                    <td className="text-center p-4 text-matrix-green text-2xl">✅</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-300 font-bold">Price</td>
                    <td className="text-center p-4 text-red-400 font-terminal">$0 (+ risk your account)</td>
                    <td className="text-center p-4 text-matrix-green font-terminal">$129-299 (safe & legit)</td>
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
              <span className="text-white">Don't Risk Your Account on </span>
              <span className="text-red-400">Free Garbage</span>
            </h2>
            
            <p className="text-xl text-gray-400 mb-8">
              Get a professional, safe, and regularly updated Warzone script built by experts. Designed to minimize ban risk, optimized for performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="/custom-scripts"
                className="px-10 py-5 bg-matrix-green text-black font-bold rounded-lg hover:bg-lime-400 transition-all font-terminal text-xl"
              >
                ORDER CUSTOM WARZONE SCRIPT
              </a>
              <a 
                href="/#pricing"
                className="px-10 py-5 border border-matrix-dark-green text-matrix-green font-bold rounded-lg hover:bg-matrix-dark-green/20 transition-all font-terminal text-xl"
              >
                VIEW FORTNITE SCRIPTS
              </a>
            </div>

            <p className="text-gray-500 text-sm font-terminal">
              💎 Lifetime updates • 🛡️ Designed to avoid bans • 💬 24/7 Discord support
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
