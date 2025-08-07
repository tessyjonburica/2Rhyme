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
    <section id="expertise" className="bg-background py-20 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Top heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full border border-border bg-secondary px-4 py-1 text-sm font-medium tracking-widest text-foreground">
            Expertise
          </span>
          <h2 className="mt-6 text-2xl font-bold text-foreground md:text-4xl">
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
              className="rounded-xl border border-border bg-card p-6 transition hover:bg-accent"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-dashed border-border bg-secondary backdrop-blur-sm">
                <div className="text-foreground">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-foreground font-semibold text-lg mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
