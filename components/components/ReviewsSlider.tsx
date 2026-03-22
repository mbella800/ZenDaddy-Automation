'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const reviews = [
  {
    name: "xToxic",
    location: "UK",
    rating: 5,
    text: "Been using this for 2 weeks now. Plug and play, no setup needed. My aim feels way more consistent in fights.",
    date: "3 days ago"
  },
  {
    name: "GhostFN",
    location: "USA",
    rating: 5,
    text: "Finally a script that actually works with Fortnite's mechanics. The aim assist feels natural and the flick shots are crispy.",
    date: "1 week ago"
  },
  {
    name: "FaZe_Pro",
    location: "Canada",
    rating: 4,
    text: "Simple but effective. Load it up and you're good to go. No menus to mess with, just pure aim improvement.",
    date: "5 days ago"
  },
  {
    name: "Wraith92",
    location: "Australia",
    rating: 5,
    text: "Worth every penny. The beta is already solid and the Discord support is quick when you need help.",
    date: "2 weeks ago"
  },
  {
    name: "DemonAce",
    location: "Germany",
    rating: 5,
    text: "Best plug-and-play script I've tried. No complicated setup, just load and frag. The aim assist is on point.",
    date: "4 days ago"
  },
  {
    name: "NoMercy",
    location: "USA",
    rating: 5,
    text: "Love how simple it is. Toggle on/off with R1+Dpad and you're set. Been climbing ranks since I got this.",
    date: "1 week ago"
  },
  {
    name: "ViperYT",
    location: "Netherlands",
    rating: 4,
    text: "Good script for what it does. Pure aim assist without all the extra fluff. Works great for Fortnite.",
    date: "6 days ago"
  },
  {
    name: "ShadowX",
    location: "USA",
    rating: 5,
    text: "Tried other scripts but they were too complicated. This one just works - aim assist feels smooth and natural.",
    date: "3 days ago"
  }
];

export default function ReviewsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  return (
    <section className="py-12 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="text-matrix-green glow-text">CUSTOMER REVIEWS</span>
          </h2>
          <p className="text-gray-400">Real feedback from ZenDaddy users</p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative">
          {/* Review Card */}
          <div className="overflow-hidden relative h-64 md:h-56">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0"
              >
                <div className="border border-matrix-dark-green/30 rounded-xl p-6 sm:p-8 backdrop-blur-sm bg-black/50 h-full flex flex-col justify-between min-h-[320px]">
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < reviews[currentIndex].rating ? 'text-matrix-green' : 'text-gray-600'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed flex-1 line-clamp-4">"{reviews[currentIndex].text}"</p>

                  {/* Author Info */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mt-4">
                    <div className="min-w-0">
                      <p className="text-matrix-green font-semibold font-terminal text-sm">{reviews[currentIndex].name}</p>
                      <p className="text-gray-500 text-xs">{reviews[currentIndex].location}</p>
                    </div>
                    <p className="text-gray-500 text-xs">{reviews[currentIndex].date}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-black/60 border border-matrix-dark-green/40 text-matrix-green p-3 rounded-full hover:bg-matrix-dark-green/20 transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-black/60 border border-matrix-dark-green/40 text-matrix-green p-3 rounded-full hover:bg-matrix-dark-green/20 transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-matrix-green w-8' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-3 border border-matrix-dark-green/30 rounded-full px-6 py-3 backdrop-blur-sm bg-black/40">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-matrix-green"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xl font-bold text-matrix-green">4.8</span>
            <span className="text-gray-400 text-sm">/5 from {reviews.length} reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
