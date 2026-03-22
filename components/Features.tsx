'use client';

import { motion } from 'framer-motion';

const features = [
  {
    icon: '[MPE]',
    title: 'MULTI-PATTERN ENGINE',
    description: '6 selectable aim patterns per stick: Circle, Diamond, Cross, Figure-8, Jitter + DYN (human-like) - per ADS and Hip-fire mode',
    detail: 'CalcPattern with per-mode independence'
  },
  {
    icon: '[ADS/HIP]',
    title: 'PER-MODE CONTROL',
    description: 'Each stick has separate ADS and Hip-fire settings for pattern, speed, and size. Toggle with Square in menu.',
    detail: 'Independent L + R stick x ADS + HIP'
  },
  {
    icon: '[PRE]',
    title: 'PRE-AIM STICKY',
    description: 'Extra stickiness when aiming without shooting. Perfect for one-shot weapons like shotguns and snipers.',
    detail: 'ADS dampening boost before firing'
  },
  {
    icon: '[HUD]',
    title: 'PROFESSIONAL OLED HUD',
    description: '29 settings across 7 menu pages with live tuning, ADS/HIP toggle, matrix rain splash screen',
    detail: '7 pages: L STICK / R STICK / DAMP / SYSTEM / BOOST / MODS / EXTRA'
  }
];

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1] as any
      }
    }
  };

  return (
    <section id="features" className="py-20 px-4 bg-gradient-matrix">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl text-center mb-4 text-glow">
          [ GOD FLICK v3.0 PRO ]
        </h2>
        <p className="text-center text-gray-500 mb-16 text-xs md:text-sm font-terminal">
          &gt; Most advanced Fortnite aim assist for Cronus Zen<br />
          &gt; 29 real-time OLED settings across 7 pages
        </p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -8,
                transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] }
              }}
              className="glass-card p-6 hover:border-matrix-green/80 transition-all duration-300 hover:shadow-matrix-glow feature-card cursor-pointer"
            >
              <motion.div 
                className="text-2xl mb-4 text-matrix-green font-terminal font-bold"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-lg mb-2 text-matrix-lime">
                {feature.title}
              </h3>
              <p className="text-gray-400 mb-2 text-xs font-terminal">
                {feature.description}
              </p>
              <p className="text-matrix-green text-xs font-terminal">
                {feature.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
