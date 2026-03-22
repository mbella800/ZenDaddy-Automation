'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const games = [
  { name: 'Warzone', icon: '🎯' },
  { name: 'Apex Legends', icon: '🔫' },
  { name: 'Destiny 2', icon: '🌟' },
  { name: 'NBA 2K', icon: '🏀' },
  { name: 'Madden NFL', icon: '🏈' },
  { name: 'R6 Siege', icon: '🛡️' }
];

export default function CustomScriptsPromo() {
  return (
    <section className="relative py-20 px-4 md:px-8 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <div className="inline-block px-4 py-2 mb-4 border border-matrix-dark-green rounded-full">
            <span className="text-matrix-green font-terminal text-sm">💎 CUSTOM DEVELOPMENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">NEED A SCRIPT FOR </span>
            <span className="text-matrix-green glow-text">ANOTHER GAME?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            We build professional Cronus Zen scripts for ANY game. Same enhanced precision, tailored to your exact needs.
          </p>
        </motion.div>

        {/* Games Grid */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10"
        >
          {games.map((game, index) => (
            <div
              key={index}
              className="bg-black/40 border border-matrix-dark-green/30 rounded-lg p-4 text-center hover:border-matrix-green/60 transition-all duration-300"
            >
              <div className="text-3xl mb-2">{game.icon}</div>
              <div className="text-gray-300 font-terminal text-sm">{game.name}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          variants={itemVariants}
          className="bg-gradient-to-r from-matrix-dark-green/10 to-transparent border border-matrix-dark-green/40 rounded-2xl p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Custom Script Development
              </h3>
              <p className="text-gray-400 font-terminal text-sm md:text-base">
                Professional GPC scripts with OLED menus, advanced algorithms, and lifetime support. 
                <span className="text-matrix-green"> From $99-299 depending on complexity.</span>
              </p>
            </div>
            <Link 
              href="/custom-scripts"
              className="group relative px-8 py-4 bg-matrix-green text-black font-bold rounded-lg hover:bg-lime-400 transition-all duration-300 whitespace-nowrap font-terminal text-lg"
            >
              <span className="relative z-10">REQUEST CUSTOM SCRIPT</span>
              <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
