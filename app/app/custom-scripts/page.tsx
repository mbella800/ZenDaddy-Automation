import { Metadata } from 'next';
import SimpleHeader from '@/components/SimpleHeader';

export const metadata: Metadata = {
  title: 'Custom Cronus Zen Scripts - Any Game | ZenDaddy',
  description: 'Professional custom GPC scripts for any game. Warzone, Apex, Destiny, NBA 2K, and more. Built by the experts behind ZenDaddy Fortnite script.',
  keywords: ['custom cronus script', 'cronus zen warzone', 'apex legends script', 'custom gpc script', 'professional cronus scripting'],
  openGraph: {
    title: 'Custom Cronus Zen Scripts - Any Game | ZenDaddy',
    description: 'Professional custom GPC scripts for any game. Built by Fortnite experts.',
    type: 'website',
    url: 'https://zendaddy.pro/custom-scripts',
  },
};

export default function CustomScriptsPage() {
  return (
    <>
      <SimpleHeader />
      <main className="min-h-screen bg-black text-white pt-20 md:pt-16">
      
      {/* Hero */}
      <section className="relative py-20 px-4 border-b border-lime-500/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lime-900/20 via-black to-black"></div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 mb-6 border border-lime-500/30 rounded-full">
            <span className="text-lime-400 text-sm font-mono">💎 CUSTOM DEVELOPMENT</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-lime-400">CUSTOM SCRIPTS</span>
            <br />
            <span className="text-white">FOR ANY GAME</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Need a custom Cronus Zen script for your game? We build professional GPC scripts tailored to your exact needs.
          </p>

          <a 
            href="https://discord.gg/zp2HmEgTWq" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-lime-400 text-black font-bold text-lg rounded-lg hover:bg-lime-300 transition-all hover:scale-105"
          >
            📞 Request Custom Script
          </a>
        </div>
      </section>

      {/* Supported Games */}
      <section className="py-20 px-4 border-b border-lime-500/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-lime-400">WE BUILD FOR</span> ANY GAME
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Call of Duty', subtitle: 'Warzone, MW3, BO6' },
              { name: 'Apex Legends', subtitle: 'Battle Royale' },
              { name: 'Destiny 2', subtitle: 'PvP & PvE' },
              { name: 'XDefiant', subtitle: 'Arena Shooter' },
              { name: 'NBA 2K25', subtitle: 'Shot Timing' },
              { name: 'Madden 25', subtitle: 'Precision Passing' },
              { name: 'Rainbow Six', subtitle: 'Tactical Shooter' },
              { name: 'Your Game', subtitle: 'Just Ask!' },
            ].map((game, i) => (
              <div key={i} className="p-6 border border-lime-500/20 rounded-lg bg-black/50 hover:border-lime-400/50 transition-all">
                <h3 className="text-lime-400 font-bold mb-1">{game.name}</h3>
                <p className="text-gray-400 text-sm">{game.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 border-b border-lime-500/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            WHY <span className="text-lime-400">ZENDADDY?</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-lime-400 mb-3">Proven Expertise</h3>
              <p className="text-gray-300">Built ZenDaddy Enhanced Aim Assist - trusted by 93+ customers. We know what works.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-lime-400 mb-3">OLED UI Mastery</h3>
              <p className="text-gray-300">Professional OLED menus with real-time sliders. Premium quality every time.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-lime-400 mb-3">Tailored to You</h3>
              <p className="text-gray-300">Tell us what you need. We build exactly what you want - no templates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 border-b border-lime-500/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            HOW IT <span className="text-lime-400">WORKS</span>
          </h2>
          
          <div className="space-y-6">
            {[
              { step: '1', title: 'Join Discord', desc: 'Click the button below to join our server' },
              { step: '2', title: 'Tell Us Your Needs', desc: 'Which game? What features? Platform? Budget?' },
              { step: '3', title: 'Get Quote', desc: 'We send you a quote within 24 hours' },
              { step: '4', title: 'We Build It', desc: 'Professional development with updates along the way' },
              { step: '5', title: 'Receive & Test', desc: 'Get your script + revisions until perfect' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start p-6 border border-lime-500/20 rounded-lg bg-black/30">
                <div className="text-3xl font-bold text-lime-400 min-w-[50px]">{item.step}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            READY TO GET YOUR<br />
            <span className="text-lime-400">CUSTOM SCRIPT?</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8">
            Join our Discord server and let's discuss your project.
          </p>

          <a 
            href="https://discord.gg/zp2HmEgTWq" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 bg-lime-400 text-black font-bold text-xl rounded-lg hover:bg-lime-300 transition-all hover:scale-105"
          >
            💬 Join Discord Server
          </a>

          <p className="mt-6 text-gray-400">
            Or message us in the <span className="text-lime-400">#custom-orders</span> channel
          </p>
        </div>
      </section>

      </main>
    </>
  );
}
