"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  UserRoundCheck,
  TrendingUp,
  Lightbulb,
  Clock
} from "lucide-react";

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
    <section id="why-choose-us" className="py-20 px-4 bg-background transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        {/* Top copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full border border-border bg-secondary px-4 py-1 text-sm font-medium tracking-widest text-foreground">
            Why Clients Choose Us
          </span>

          <h2 className="mx-auto mt-8 max-w-4xl text-2xl font-bold leading-tight text-foreground md:text-4xl">
            Explore our latest projects and the stories
            <br className="hidden lg:block" />
            behind each design.
          </h2>
        </motion.div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8 auto-rows-fr">
          {/* First row - 3 cards spanning 2 columns each on large screens */}
          {reasons.slice(0, 3).map((item, i) => (
            <motion.article
              key={item.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 transition hover:bg-accent h-full flex flex-col lg:col-span-2"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-dashed border-border bg-secondary backdrop-blur-sm transition-all group-hover:scale-105">
                <div className="text-foreground">
                  {item.icon}
                </div>
              </div>

              <h3 className="mb-3 text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground flex-1">
                {item.description}
              </p>
            </motion.article>
          ))}

          {/* Second row - 2 cards spanning 3 columns each on large screens */}
          {reasons.slice(3, 5).map((item, i) => (
            <motion.article
              key={item.title}
              custom={i + 3}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 transition hover:bg-accent h-full flex flex-col lg:col-span-3"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-dashed border-border bg-secondary backdrop-blur-sm transition-all group-hover:scale-105">
                <div className="text-foreground">
                  {item.icon}
                </div>
              </div>

              <h3 className="mb-3 text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground flex-1">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
