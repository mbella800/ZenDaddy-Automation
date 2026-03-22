import { Metadata } from 'next';
import SimpleHeader from '@/components/SimpleHeader';

export const metadata: Metadata = {
  title: 'Free NBA 2K Script? Avoid Account Bans & Malware | ZenDaddy',
  description: 'Looking for a free NBA 2K Cronus script? Learn why free scripts have high ban risk, often contain malware, and how premium scripts keep you safe.',
  keywords: 'free nba 2k script, free 2k script, nba 2k cronus zen free, free 2k25 script, free 2k26 script',
  openGraph: {
    title: 'Free NBA 2K Script? Why You Should Avoid Them',
    description: 'Free 2K scripts = high ban risk, malware, and no updates. Get a safe, premium NBA 2K script instead.',
    url: 'https://zendaddy.pro/free-nba-2k-script',
    images: [{
      url: 'https://zendaddy.pro/zendaddy-banner.png',
      width: 1200,
      height: 630,
    }],
  },
};

export default function FreeNBA2KScriptPage() {
  return (
    <>
      <SimpleHeader />
      <main className="min-h-screen bg-black text-white pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 mb-6 border border-red-500/50 rounded-full bg-red-500/10">
              <span className="text-red-400 font-terminal text-sm">⚠️ WARNING: FREE SCRIPTS HIGH RISK</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Looking for a </span>
              <span className="text-matrix-green glow-text">FREE NBA 2K SCRIPT?</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Before you download that "free" Cronus script for NBA 2K, you need to know the hidden dangers that could cost you your MyTEAM, VC, and account.
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
              <span className="text-red-400">Why "Free" NBA 2K Scripts Are Dangerous</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Danger 1 */}
              <div className="border border-red-500/30 rounded-lg p-6 bg-black/50">
                <div className="text-4xl mb-4">🦠</div>
                <h3 className="text-xl font-bold text-red-400 mb-3">VC Stealing Malware</h3>
                <p className="text-gray-400">
                  Free 2K scripts often contain malware that can log into your account and drain your VC (Virtual Currency), sell your MyTEAM cards, and steal credit card info.
                </p>
              </div>

              {/* Danger 2 */}
              <div className="border border-red-500/30 rounded-lg p-6 bg-black/50">
                <div className="text-4xl mb-4">🚫</div>
                <h3 className="text-xl font-bold text-red-400 mb-3">Account Ban Risk</h3>
                <p className="text-gray-400">
                  2K has advanced cheat detection. Poorly-coded free scripts often get flagged. High risk of permanent ban with all your VC, cards, and progress lost.
                </p>
              </div>

              {/* Danger 3 */}
              <div className="border border-red-500/30 rounded-lg p-6 bg-black/50">
                <div className="text-4xl mb-4">⏰</div>
                <h3 className="text-xl font-bold text-red-400 mb-3">Broken After Updates</h3>
                <p className="text-gray-400">
                  2K patches every season. Free scripts break quickly with no updates, leaving you with useless code and high anti-cheat detection risk.
                </p>
              </div>

              {/* Danger 4 */}
              <div className="border border-red-500/30 rounded-lg p-6 bg-black/50">
                <div className="text-4xl mb-4">❌</div>
                <h3 className="text-xl font-bold text-red-400 mb-3">Zero Support</h3>
                <p className="text-gray-400">
                  If you lose your account or get infected, there's no Discord, no refunds, no help. You're completely on your own with free scripts.
                </p>
              </div>

              {/* Danger 5 */}
              <div className="border border-red-500/30 rounded-lg p-6 bg-black/50">
                <div className="text-4xl mb-4">🎣</div>
                <h3 className="text-xl font-bold text-red-400 mb-3">Account Phishing</h3>
                <p className="text-gray-400">
                  "Free" script sites require 2K account login to download. High risk of stolen credentials, drained VC, and accounts sold on black markets.
                </p>
              </div>

              {/* Danger 6 */}
              <div className="border border-red-500/30 rounded-lg p-6 bg-black/50">
                <div className="text-4xl mb-4">🗑️</div>
                <h3 className="text-xl font-bold text-red-400 mb-3">Garbage Shot Timing</h3>
                <p className="text-gray-400">
                  Free scripts use outdated timing from 2K21. No jumpshot-specific tuning, broken green window, making your shooting percentage worse in Park.
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
                    <td className="p-4 text-gray-300">Account Safe</td>
                    <td className="text-center p-4 text-red-400 text-2xl">❌</td>
                    <td className="text-center p-4 text-matrix-green text-2xl">✅</td>
                  </tr>
                  <tr className="border-b border-matrix-dark-green/20">
                    <td className="p-4 text-gray-300">Seasonal Updates</td>
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
                    <td className="p-4 text-gray-300">Jumpshot-Specific Timing</td>
                    <td className="text-center p-4 text-red-400 text-2xl">❌</td>
                    <td className="text-center p-4 text-matrix-green text-2xl">✅</td>
                  </tr>
                  <tr className="border-b border-matrix-dark-green/20">
                    <td className="p-4 text-gray-300">Green Window Optimization</td>
                    <td className="text-center p-4 text-red-400 text-2xl">❌</td>
                    <td className="text-center p-4 text-matrix-green text-2xl">✅</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-300 font-bold">Price</td>
                    <td className="text-center p-4 text-red-400 font-terminal">$0 (+ lose VC/account)</td>
                    <td className="text-center p-4 text-matrix-green font-terminal">$129-299 (safe & updated)</td>
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
              <span className="text-white">Don't Risk Your VC & MyTEAM on </span>
              <span className="text-red-400">Free Garbage</span>
            </h2>
            
            <p className="text-xl text-gray-400 mb-8">
              Get a professional, ban-safe NBA 2K script built by experts. Seasonal updates, jumpshot-specific timing, green window optimization, OLED menu.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="/custom-scripts"
                className="px-10 py-5 bg-matrix-green text-black font-bold rounded-lg hover:bg-lime-400 transition-all font-terminal text-xl"
              >
                ORDER CUSTOM 2K SCRIPT
              </a>
              <a 
                href="/#pricing"
                className="px-10 py-5 border border-matrix-dark-green text-matrix-green font-bold rounded-lg hover:bg-matrix-dark-green/20 transition-all font-terminal text-xl"
              >
                VIEW FORTNITE SCRIPTS
              </a>
            </div>

            <p className="text-gray-500 text-sm font-terminal">
              💎 Lifetime updates • 🛡️ Account safe • 💬 24/7 Discord support
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
