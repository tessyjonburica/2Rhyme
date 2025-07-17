"use client"

import { motion } from "framer-motion"
import { reasons } from "@/data/reasons"

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-[#111113] px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Clients Choose Us</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We deliver exceptional results through our proven approach and dedication to excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-[#1f1f23] p-8 rounded-lg hover:bg-[#27272a] transition-colors"
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{reason.title}</h3>
              <p className="text-gray-300">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
