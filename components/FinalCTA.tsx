'use client';

export default function FinalCTA() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="pt-20 pb-8 px-4 bg-matrix-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-matrix-green rounded-full filter blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-2xl md:text-4xl mb-6 text-glow">
          [ LOCK IN YOUR AIM ]
        </h2>
        
        <p className="text-sm md:text-base text-gray-400 mb-12 font-terminal">
          &gt; Dominate every gunfight with enhanced aim tracking<br />
          &gt; Install in 60 seconds. Start winning instantly.
        </p>

        <button 
          onClick={scrollToPricing}
          className="btn-neon mb-4"
        >
          GET GOD FLICK PRO
        </button>
        
        <p className="text-xs text-gray-600 mb-8 mt-8 font-terminal">
          [!] Updated when Fortnite mechanics change
        </p>

        <div className="flex flex-wrap justify-center gap-8 text-xs text-gray-600 font-terminal mb-8">
          <div>[+] INSTANT DOWNLOAD</div>
          <div>[+] DISCORD SUPPORT</div>
          <div>[+] FULL OLED MENU</div>
        </div>
        
        <div className="text-xs text-gray-600 font-terminal max-w-2xl mx-auto text-center border-t border-matrix-dark-green pt-6">
          <p className="mb-2">[!] DISCLAIMER: No refunds. Digital product - all sales final.</p>
          <p>[!] Use at own risk. We are NOT responsible for any bans or account actions.</p>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-12 border-t border-matrix-dark-green">
          <div className="flex flex-wrap justify-center gap-8 mb-8 font-terminal text-xs">
            <a 
              href="https://discord.gg/zp2HmEgTWq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-matrix-green transition-colors"
            >
              DISCORD
            </a>
            <a 
              href="https://tiktok.com/@zendaddy.pro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-matrix-green transition-colors"
            >
              TIKTOK
            </a>
          </div>
          
          <p className="text-gray-700 text-xs font-terminal">
            © 2025 ZENDADDY | EDUCATIONAL USE ONLY | NOT AFFILIATED WITH EPIC GAMES
          </p>
        </div>
      </div>
    </section>
  );
}
