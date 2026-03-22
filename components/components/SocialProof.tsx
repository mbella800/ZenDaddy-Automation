'use client';

import { motion } from 'framer-motion';

export default function SocialProof() {
  return (
    <section className="py-20 px-4 bg-zen-void">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl text-center mb-4 text-glow">
          [ STATUS FEED ]
        </h2>
        <p className="text-center text-gray-500 mb-16 text-xs md:text-sm font-terminal">
          &gt; Community stats
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="glass-card p-8 text-center stat-card"
          >
            <div className="text-3xl md:text-4xl text-matrix-green mb-2 font-terminal">
              24/7
            </div>
            <div className="text-gray-500 text-xs font-terminal">DISCORD SUPPORT</div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="glass-card p-8 text-center stat-card"
          >
            <div className="text-3xl md:text-4xl text-matrix-lime mb-2 font-terminal">
              WEEKLY
            </div>
            <div className="text-gray-500 text-xs font-terminal">UPDATES</div>
          </motion.div>
        </div>

        {/* Discord CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.02 }}
          className="glass-card p-8 md:p-12 text-center mb-16"
        >
          <h3 className="text-xl md:text-2xl mb-4 text-matrix-lime">
            [ HQ ACCESS ]
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto font-terminal text-xs md:text-sm">
            &gt; Join our Discord community<br />
            &gt; Get help, share settings, ask questions
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8 font-terminal text-xs">
            <div className="text-gray-500">[+] ELITE SUPPORT</div>
            <div className="text-gray-500">[+] PRO CONFIGS</div>
            <div className="text-gray-500">[+] PRIORITY UPDATES</div>
          </div>
          <a 
            href="https://discord.gg/zp2HmEgTWq" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-neon inline-block"
          >
            JOIN DISCORD - FREE ACCESS
          </a>
        </motion.div>

        {/* Social Media */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <p className="text-gray-500 mb-6 font-terminal text-xs">&gt; Daily clips + pro configs</p>
          <div className="flex justify-center gap-8">
            <motion.a 
              href="https://tiktok.com/@zendaddy.pro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-matrix-green hover:text-matrix-lime transition-colors font-terminal"
              whileHover={{ scale: 1.1, y: -3 }}
              transition={{ duration: 0.2 }}
            >
              [ TIKTOK ]
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
