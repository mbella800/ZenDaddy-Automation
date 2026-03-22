'use client';

import { motion } from 'framer-motion';

export default function Problem() {
  return (
    <section className="py-20 px-4 bg-matrix-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl text-center mb-4 text-glow">
          [ THE PROBLEM ]
        </h2>
        <p className="text-sm md:text-base text-center mb-16 text-matrix-lime font-terminal">
          &gt; Regular controller aim needs better fine-tuning
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Without ZenDaddy */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.02 }}
            className="glass-card p-8 border-red-500/50"
          >
            <h3 className="text-base md:text-xl mb-6 text-gray-400 font-terminal whitespace-nowrap">
              [ WITHOUT SCRIPT ]
            </h3>
            <ul className="space-y-3 font-terminal text-xs md:text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-red-500 shrink-0">[-]</span>
                <span>Crosshair slides off enemies</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 shrink-0">[-]</span>
                <span>Hard to track when they move</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 shrink-0">[-]</span>
                <span>Aim assist doesn't feel strong</span>
              </li>
            </ul>
          </motion.div>

          {/* With ZenDaddy */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0, 255, 0, 0.3)' }}
            className="glass-card p-8 border-matrix-green/50"
          >
            <h3 className="text-base md:text-xl mb-6 text-matrix-green font-terminal whitespace-nowrap">
              [ WITH SCRIPT ]
            </h3>
            <ul className="space-y-3 font-terminal text-xs md:text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-matrix-green shrink-0">[+]</span>
                <span>Enhanced aim tracking and control</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-matrix-green shrink-0">[+]</span>
                <span>Better precision on moving targets</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-matrix-green shrink-0">[+]</span>
                <span>More responsive aim assist activation</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
