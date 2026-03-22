'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Pricing() {
  const [loading, setLoading] = useState(false);
  const [supportLoading, setSupportLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Something went wrong. Please try again or contact support on Discord.');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Connection error. Please try again or contact support on Discord.');
    }
    setLoading(false);
  };

  const handleSupportCheckout = async () => {
    setSupportLoading(true);
    try {
      const response = await fetch('/api/create-checkout-support', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}),
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Something went wrong. Please try again or contact support on Discord.');
      }
    } catch (error) {
      console.error('Support checkout error:', error);
      alert('Connection error. Please try again.');
    }
    setSupportLoading(false);
  };

  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-dark">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl text-center mb-4 text-glow">
          [ GET ZENDADDY ]
        </h2>
        <p className="text-center text-gray-500 mb-16 text-xs md:text-sm font-terminal">
          &gt; The most advanced Fortnite aim assist script for Cronus Zen
        </p>

        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ 
              scale: 1.03,
              boxShadow: '0 0 50px rgba(0, 255, 0, 0.5)',
              transition: { duration: 0.3 }
            }}
            className="glass-card p-8 border-matrix-green/80 relative max-w-md w-full"
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-matrix-green px-4 py-1 text-sm font-terminal text-black font-bold">
              [ PRO ]
            </div>
            <h3 className="text-lg mb-4 text-matrix-green">GOD FLICK v3.0 PRO</h3>
            <div className="text-4xl text-matrix-green mb-2 font-terminal">&euro;59.99</div>
            <p className="text-xs text-gray-500 mb-6 font-terminal">One-time payment</p>
            <ul className="space-y-2 mb-8 text-xs font-terminal text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-matrix-green shrink-0">[+]</span>
                <span>29 real-time OLED settings across 7 menu pages</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-matrix-green shrink-0">[+]</span>
                <span>6 aim patterns including DYN (human-like movement)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-matrix-green shrink-0">[+]</span>
                <span>ADS Pulse + Crouch Spam for maximum aim assist triggers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-matrix-green shrink-0">[+]</span>
                <span>Headshot Bias + Anti-Bloom for precision combat</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-matrix-green shrink-0">[+]</span>
                <span>Per-stick, per-mode control (ADS &amp; Hip-fire independent)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-matrix-green shrink-0">[+]</span>
                <span>Pre-aim sticky + full <a href="/docs" className="text-matrix-lime underline">documentation</a></span>
              </li>
            </ul>
            <button 
              onClick={handleCheckout}
              disabled={loading}
              className="w-full btn-neon mb-4 inline-block text-center disabled:opacity-50"
            >
              {loading ? 'LOADING...' : 'GET GOD FLICK PRO - \u20ac59.99'}
            </button>
            <p className="text-xs text-gray-600 mt-6 font-terminal">[!] Instant download - no refunds on digital products</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ 
              scale: 1.03,
              boxShadow: '0 0 50px rgba(234, 179, 8, 0.4)',
              transition: { duration: 0.3 }
            }}
            className="glass-card p-8 border-yellow-500/50 relative max-w-md w-full"
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 px-4 py-1 text-sm font-terminal text-black font-bold">
              [ ADD-ON ]
            </div>
            <h3 className="text-lg mb-4 text-yellow-400">SETUP SUPPORT</h3>
            <div className="text-4xl text-yellow-400 mb-2 font-terminal">&euro;14.99</div>
            <p className="text-xs text-gray-500 mb-6 font-terminal">One-time - optional add-on</p>
            <ul className="space-y-2 mb-8 text-xs font-terminal text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 shrink-0">[+]</span>
                <span>Live 1-on-1 Discord screenshare session with developer</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 shrink-0">[+]</span>
                <span>Full installation on your Cronus Zen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 shrink-0">[+]</span>
                <span>Settings tuned to your playstyle</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 shrink-0">[+]</span>
                <span>30 days priority Discord support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 shrink-0">[+]</span>
                <span>Perfect for first-time Cronus Zen users</span>
              </li>
            </ul>
            <button 
              onClick={handleSupportCheckout}
              disabled={supportLoading}
              className="w-full py-3 px-6 font-terminal text-sm border border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 transition-all rounded disabled:opacity-50"
            >
              {supportLoading ? 'LOADING...' : 'GET SETUP SUPPORT - \u20ac14.99'}
            </button>
            <p className="text-xs text-gray-600 mt-6 font-terminal">[!] Also available after script purchase on download page</p>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-12 text-xs text-gray-600 font-terminal">
          <div className="flex items-center gap-2">
            <span className="text-matrix-green">[+]</span>
            <span>INSTANT DOWNLOAD</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-matrix-green">[+]</span>
            <span>SECURE CHECKOUT</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-matrix-green">[+]</span>
            <span>DISCORD SUPPORT</span>
          </div>
        </div>
      </div>
    </section>
  );
}
