"use client"
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const slides = [
  "/slide 1.png",
  "/slide 2.png", 
  "/slide 3.png",
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] bg-[#111113] overflow-hidden px-4">
      {/* Removed sparkles */}
      <div className="text-center mt-20 md:mt-36 z-20">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Crafting Interfaces <br />
          <span className="inline-flex items-center">
            That Inspires...
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Innovative, user-centered design for modern brands
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Link href="#contact" passHref legacyBehavior>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-xl inline-block"
            >
              Start Your Project <span className="ml-2">→</span>
            </motion.a>
          </Link>
        </motion.div>
      </div>

      {/* Enhanced Slider */}
      <motion.div 
        className="relative w-full max-w-6xl mt-16 md:mt-20 flex justify-center items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-full px-4">
          {slides.map((src, idx) => (
            <motion.div
              key={src}
              className={`relative rounded-xl overflow-hidden shadow-2xl transition-all duration-700 ${
                idx === current
                  ? "opacity-100 scale-100 z-20"
                  : "opacity-30 scale-90 blur-sm z-10"
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: idx === current ? 1 : 0.3, 
                scale: idx === current ? 1 : 0.9 
              }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
            >
              <Image
                src={src}
                alt={`Slide ${idx + 1}`}
                width={400}
                height={300}
                className="object-cover w-full h-48 md:h-56 lg:h-64"
                priority={idx === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
        
        {/* Slide indicators */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, idx) => (
            <motion.button
              key={idx}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === current ? 'bg-white scale-125' : 'bg-gray-500'
              }`}
              onClick={() => setCurrent(idx)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
