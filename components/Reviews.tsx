'use client';

import { motion } from 'framer-motion';

const reviews = [
  {
    name: "Marcus",
    location: "UK",
    rating: 5,
    text: "Been using this for 2 weeks now. Plug and play, no setup needed. My aim feels way more consistent in fights.",
    date: "3 days ago"
  },
  {
    name: "Jake R.",
    location: "USA",
    rating: 5,
    text: "Finally a script that actually works with Fortnite's mechanics. The aim assist feels natural and the flick shots are crispy.",
    date: "1 week ago"
  },
  {
    name: "Chris",
    location: "Canada",
    rating: 4,
    text: "Simple but effective. Load it up and you're good to go. No menus to mess with, just pure aim improvement.",
    date: "5 days ago"
  },
  {
    name: "Daniel M.",
    location: "Australia",
    rating: 5,
    text: "Worth every penny. The beta is already solid and the Discord support is quick when you need help.",
    date: "2 weeks ago"
  },
  {
    name: "Alex",
    location: "Germany",
    rating: 5,
    text: "Best plug-and-play script I've tried. No complicated setup, just load and frag. The aim assist is on point.",
    date: "4 days ago"
  },
  {
    name: "Ryan P.",
    location: "USA",
    rating: 5,
    text: "Love how simple it is. Toggle on/off with R1+Dpad and you're set. Been climbing ranks since I got this.",
    date: "1 week ago"
  },
  {
    name: "Tom",
    location: "Netherlands",
    rating: 4,
    text: "Good script for what it does. Pure aim assist without all the extra fluff. Works great for Fortnite.",
    date: "6 days ago"
  },
  {
    name: "Brandon",
    location: "USA",
    rating: 5,
    text: "Tried other scripts but they were too complicated. This one just works - aim assist feels smooth and natural.",
    date: "3 days ago"
  }
];

export default function Reviews() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#00ff00] glow-text">CUSTOMER REVIEWS</span>
          </h2>
          <p className="text-gray-400 text-lg">Real feedback from ZenDaddy users</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-[#00ff00]/20 rounded-lg p-6 backdrop-blur-sm bg-black/40 hover:border-[#00ff00]/40 transition-all"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < review.rating ? 'text-[#00ff00]' : 'text-gray-600'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-300 mb-4 leading-relaxed">"{review.text}"</p>

              {/* Author Info */}
              <div className="flex items-center justify-between text-sm">
                <div>
                  <p className="text-[#00ff00] font-semibold">{review.name}</p>
                  <p className="text-gray-500">{review.location}</p>
                </div>
                <p className="text-gray-500">{review.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 border border-[#00ff00]/30 rounded-full px-8 py-4 backdrop-blur-sm bg-black/40">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-[#00ff00]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-2xl font-bold text-[#00ff00]">4.8</span>
            <span className="text-gray-400">/5 from {reviews.length} reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
