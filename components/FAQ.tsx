"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(5) // Set initial open index to 5 to match screenshot

  const faqData = [
    {
      question: "What industries do you specialize in?",
      answer:
        "We specialize in a wide range of industries including tech startups, e-commerce, healthcare, finance, and creative agencies. Our diverse experience allows us to adapt our design strategies to meet unique industry demands.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on complexity and scope. A typical website design project might take 4-8 weeks, while a full branding and web development package could extend to 10-16 weeks. We provide a detailed timeline after our initial consultation.",
    },
    {
      question: "What is your design process?",
      answer:
        "Our design process typically involves discovery, strategy, design, development, and launch. We emphasize collaboration and feedback at each stage to ensure the final product aligns perfectly with your vision and goals.",
    },
    {
      question: "How much does a project cost?",
      answer:
        "Project costs are determined by the scope of work, complexity, and required features. We offer custom quotes tailored to each client's specific needs. Please contact us for a personalized estimate.",
    },
    {
      question: "How much does a project cost?", // Duplicate question as per screenshot
      answer:
        "Project costs are determined by the scope of work, complexity, and required features. We offer custom quotes tailored to each client's specific needs. Please contact us for a personalized estimate.",
    },
    {
      question: "How do you communicate with clients?",
      answer:
        "We believe in clear, regular communication. We'll set up a primary contact method, whether email, Slack, or scheduled video calls, to keep you updated on progress and gather feedback throughout the project.",
    },
  ]

  return (
    <section className="py-20 bg-background px-4 transition-colors duration-300" id="faq">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-muted-foreground text-sm font-medium mb-4 border border-border">
            FAQ
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
            Here are answers to some of the questions
            <br />
            we get asked the most.
          </h2>
        </motion.div>

        <div className="space-y-4 bg-card border border-border rounded-lg p-4 md:p-8">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              className="border-b border-border last:border-b-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-2 py-4 text-left flex items-center justify-between hover:bg-accent transition-colors rounded-md"
              >
                <span className={`text-foreground font-medium ${openIndex === index ? "font-bold" : ""}`}>
                  {item.question}
                </span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <Plus className="h-5 w-5 text-muted-foreground" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-2 pb-4">
                      <p className="text-muted-foreground">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
