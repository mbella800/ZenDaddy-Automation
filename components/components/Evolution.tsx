'use client';

import { motion } from 'framer-motion';

export default function Evolution() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black via-zen-void to-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-6 text-glow">
            [ WHAT YOU GET ]
          </h2>
          <p className="text-gray-500 text-xs md:text-sm font-terminal max-w-3xl mx-auto">
            &gt; Everything included in GOD FLICK v3.0 PRO
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card p-8 md:p-12 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center p-6 border border-matrix-green/50 rounded-lg bg-matrix-green/5"
            >
              <h4 className="text-matrix-green mb-3 font-terminal">PER-MODE PATTERNS</h4>
              <p className="text-gray-400 text-sm font-terminal">
                &gt; 5 patterns per stick<br />
                &gt; Separate ADS settings<br />
                &gt; Separate HIP settings<br />
                &gt; Independent speed/size<br />
                &gt; Per-stick randomness
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-6 border border-matrix-green/50 rounded-lg bg-matrix-green/5"
            >
              <h4 className="text-matrix-green mb-3 font-terminal">29 OLED SETTINGS</h4>
              <p className="text-gray-400 text-sm font-terminal">
                &gt; L STICK: PTN / SPD / SIZ<br />
                &gt; R STICK: PTN / SPD / SIZ<br />
                &gt; DAMP: ADS / HIP / TRN / PRE<br />
                &gt; SYSTEM: DZN / DZR / TFD<br />
                &gt; BOOST: TRK / STK / LRN / RRN
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center p-6 border border-matrix-green/50 rounded-lg bg-matrix-green/5"
            >
              <h4 className="text-matrix-green mb-3 font-terminal">PRE-AIM STICKY</h4>
              <p className="text-gray-400 text-sm font-terminal">
                &gt; Extra sticky when pre-aiming<br />
                &gt; Perfect for shotgun/sniper<br />
                &gt; Aim first, then shoot<br />
                &gt; Adjustable strength 0-100<br />
                &gt; Safe R1+L1 reset
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-black/40 border border-matrix-lime/30 rounded-lg p-6 text-center"
          >
            <p className="text-matrix-lime mb-3 font-terminal text-sm md:text-base">
              [ CONTINUOUSLY UPDATED ]
            </p>
            <p className="text-gray-400 text-sm font-terminal max-w-2xl mx-auto">
              Fortnite changes every update. We adapt. The script is continuously tested and optimized
              to keep your aim assist at peak performance.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
