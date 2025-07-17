"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[#111113] px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Creative Design
            <br />
            <span className="text-gray-400">Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We create stunning digital experiences that captivate your audience and drive results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#projects"
              className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
              View Our Work
            </Link>
            <Link
              href="#contact"
              className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-colors"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
