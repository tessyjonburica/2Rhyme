"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  PenTool,
  Code2,
  Smartphone,
  Box,
  SearchCheck
} from "lucide-react";

const services = [
  {
    icon: <LayoutDashboard className="w-5 h-5" />,
    title: "UI/UX Design",
    description:
      "Crafting intuitive, user-centered interfaces that delight and engage."
  },
  {
    icon: <PenTool className="w-5 h-5" />,
    title: "Brand Identity Design",
    description:
      "Creating distinct, memorable brand identities that speak to your audience."
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    title: "Web Design & Development",
    description:
      "Building high-performance, responsive websites optimized for any device."
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: "Mobile App Design",
    description:
      "Designing seamless mobile-first experiences that keep users engaged on the go."
  },
  {
    icon: <Box className="w-5 h-5" />,
    title: "Product Design Consulting",
    description:
      "Offering strategic insights to shape product ideas into scalable solutions."
  },
  {
    icon: <SearchCheck className="w-5 h-5" />,
    title: "Prototyping & Usability Testing",
    description:
      "Bringing ideas to life with prototypes and refining them through testing."
  }
];

export function Expertise() {
  return (
    <section id="expertise" className="bg-[#111113] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm font-medium tracking-widest text-white">
            Expertise
          </span>
          <h2 className="mt-6 text-3xl font-bold text-white md:text-5xl">
            Services Tailored for You.
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-xl border border-white/5 bg-[#1f1f23] p-6 transition hover:bg-[#27272a]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-dashed border-white/20 bg-white/5 backdrop-blur-sm">
                {service.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
