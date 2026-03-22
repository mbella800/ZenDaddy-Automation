'use client';

import { motion } from 'framer-motion';

export default function HowItWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] as any
      }
    }
  };

  return (
    <section id="how-it-works" className="py-20 px-4 bg-gradient-to-b from-black via-zen-void to-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-6 text-glow">
            [ HOW IT WORKS ]
          </h2>
          <p className="text-gray-500 text-xs md:text-sm font-terminal max-w-3xl mx-auto">
            &gt; Understanding Cronus Zen &amp; Fortnite aim assist<br />
            &gt; This is NOT an aimbot - here&apos;s why
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={itemVariants} className="glass-card p-8">
            <div className="text-2xl mb-4 text-matrix-green font-terminal font-bold">[CZ]</div>
            <h3 className="text-lg mb-3 text-matrix-lime">What is Cronus Zen?</h3>
            <p className="text-gray-400 text-sm font-terminal leading-relaxed">
              Cronus Zen is a small hardware device that sits between your controller and your console. 
              It reads your controller inputs and sends them to the console. It can run scripts (.gpc files) 
              that modify these inputs before they reach the game.
            </p>
            <p className="text-gray-500 text-xs font-terminal mt-3">
              &gt; Physical device - NOT software on your console
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card p-8">
            <div className="text-2xl mb-4 text-matrix-green font-terminal font-bold">[AA]</div>
            <h3 className="text-lg mb-3 text-matrix-lime">Fortnite&apos;s Aim Assist</h3>
            <p className="text-gray-400 text-sm font-terminal leading-relaxed">
              Fortnite has built-in aim assist for controller players. When your crosshair is near an enemy, 
              two things happen: <span className="text-matrix-green">Slowdown</span> (sensitivity drops so your aim &quot;sticks&quot;) 
              and <span className="text-matrix-green">Rotational Assist</span> (the game helps track moving targets when you move your left stick).
            </p>
            <p className="text-gray-500 text-xs font-terminal mt-3">
              &gt; This is built INTO Fortnite by Epic Games
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card p-8">
            <div className="text-2xl mb-4 text-matrix-green font-terminal font-bold">[ZD]</div>
            <h3 className="text-lg mb-3 text-matrix-lime">What ZenDaddy Does</h3>
            <p className="text-gray-400 text-sm font-terminal leading-relaxed">
              ZenDaddy sends tiny micro-movements through your controller sticks to keep Fortnite&apos;s 
              built-in aim assist constantly active. It also slows down your aim when you&apos;re near a target 
              (dampening) for a &quot;sticky&quot; feel. Think of it as a calibration tool that fine-tunes how 
              your controller talks to the game.
            </p>
            <p className="text-gray-500 text-xs font-terminal mt-3">
              &gt; Enhances what Fortnite already provides
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card p-8 border-red-500/30">
            <div className="text-2xl mb-4 text-red-400 font-terminal font-bold">[!=]</div>
            <h3 className="text-lg mb-3 text-red-400">NOT an Aimbot</h3>
            <p className="text-gray-400 text-sm font-terminal leading-relaxed">
              An aimbot reads game data to know exactly where enemies are and automatically points at them. 
              Cronus Zen <span className="text-red-400">cannot access any game data</span> - it has zero knowledge 
              of where enemies are, what&apos;s on screen, or what&apos;s happening in-game. It only processes 
              controller inputs. The aim assist comes 100% from Fortnite&apos;s own system.
            </p>
            <p className="text-gray-500 text-xs font-terminal mt-3">
              &gt; No game data = no aimbot. Period.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card p-8 md:p-10"
        >
          <h3 className="text-xl text-matrix-green mb-6 font-terminal text-center">
            [ HOW TO ACTIVATE ]
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl text-matrix-green font-terminal mb-3">01</div>
              <p className="text-gray-400 text-sm font-terminal">
                Load the .gpc file on your Cronus Zen via Zen Studio
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl text-matrix-green font-terminal mb-3">02</div>
              <p className="text-gray-400 text-sm font-terminal">
                Connect Zen between your controller and console
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl text-matrix-green font-terminal mb-3">03</div>
              <p className="text-gray-400 text-sm font-terminal">
                Start Fortnite - the script activates automatically (green LED)
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl text-matrix-green font-terminal mb-3">04</div>
              <p className="text-gray-400 text-sm font-terminal">
                Open the OLED menu with L2 + OPTIONS to fine-tune 29 settings
              </p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-xs font-terminal">
              Toggle: <span className="text-matrix-green">R1 + D-pad UP</span> = ON | 
              <span className="text-red-400"> R1 + D-pad DOWN</span> = OFF
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
