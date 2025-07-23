"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  UserRoundCheck,
  TrendingUp,
  Lightbulb,
  Clock
} from "lucide-react";

/**
 * Centralised data to keep the JSX tidy.
 */
const reasons = [
  {
    icon: <BadgeCheck className="w-6 h-6" />,
    title: "Expertise & Experience",
    description:
      "Our team brings years of experience across diverse industries, ensuring top‑notch design solutions."
  },
  {
    icon: <UserRoundCheck className="w-6 h-6" />,
    title: "Client‑Centric Approach",
    description:
      "We prioritise understanding your vision, working together to create exceptional results."
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Proven Results",
    description:
      "Our designs are crafted to boost engagement and drive results, backed by measurable success."
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovative Solutions",
    description:
      "We think outside the box to deliver unique design solutions tailored to your needs."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "On‑Time Delivery",
    description:
      "We value your time and consistently meet project deadlines without compromising quality."
  }
];

/**
 * Helpful Framer variants so every card can share animation props.
 */
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 }
  })
};

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 px-4 bg-[#0E0E11]">
      <div className="mx-auto max-w-7xl">
        {/* Top copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm font-medium tracking-widest text-white">
            Why Clients Choose Us
          </span>

          <h2 className="mx-auto mt-8 max-w-4xl text-2xl font-bold leading-tight text-white md:text-4xl">
            Explore our latest projects and the stories
            <br className="hidden lg:block" />
            behind each design.
          </h2>
        </motion.div>

        {/* Card grid - matches the image layout */}
        <div className="space-y-8">
          {/* First row - 3 cards on desktop, responsive on smaller screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {reasons.slice(0, 3).map((item, i) => (
              <motion.article
                key={item.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="group relative overflow-hidden rounded-xl border border-white/5 bg-[#1B1B1E] p-8 transition hover:bg-[#27272A]/80 h-full flex flex-col"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-dashed border-white/20 bg-white/5 backdrop-blur-sm transition-all group-hover:scale-105">
                  {item.icon}
                </div>

                <h3 className="mb-3 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-300 flex-1">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>

          {/* Second row - 2 cards centered on desktop, responsive on smaller screens */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-2xl lg:max-w-4xl">
              {reasons.slice(3, 5).map((item, i) => (
                <motion.article
                  key={item.title}
                  custom={i + 3}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="group relative overflow-hidden rounded-xl border border-white/5 bg-[#1B1B1E] p-8 transition hover:bg-[#27272A]/80 h-full flex flex-col"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-dashed border-white/20 bg-white/5 backdrop-blur-sm transition-all group-hover:scale-105">
                    {item.icon}
                  </div>

                  <h3 className="mb-3 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-300 flex-1">
                    {item.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}