"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from './ProjectCard'; // Import the new ProjectCard component

const projects = [
  {
    "title": "Fincra",
    "year": "2025",
    "description": "A sleek fintech platform designed with a calming blue-themed interface, Fincra streamlines cross-border payments and digital transactions. Built for speed, security, and clarity, it offers users a frictionless way to manage finances while maintaining a visually engaging and intuitive experience.",
    "image": "/fincra.png",
    "link": "#",
    "category": "Finance"
  },
  {
    "title": "CART",
    "year": "2023",
    "description": "A robust logistics management system engineered for efficiency and ease of use. CART simplifies shipment tracking, delivery coordination, and fleet oversight with an intuitive interface and optimized workflows that enhance both operational performance and user satisfaction.",
    "image": "/cart.png",
    "link": "#",
    "category": "Logistics"
  },
  {
    "title": "SV Vehicles",
    "year": "2023",
    "description": "An elegant automotive marketplace connecting buyers to their ideal vehicles. SV Vehicles blends smart search tools with immersive visuals, enabling users to explore and secure automated car options effortlessly through a polished, mobile-friendly experience.",
    "image": "/sv.png",
    "link": "#",
    "category": "Automative Industry"
  },
  {
    "title": "Food Delivery App",
    "year": "2024",
    "description": "A modern food delivery solution offering smooth ordering, personalized menus, and real-time GPS tracking. Designed for convenience, it ensures customers enjoy a quick, reliable, and visually appealing journey from selection to doorstep delivery.",
    "image": "/food.png",
    "link": "#",
    "category": "Food App"
  },
  {
    "title": "Finance Dashboard",
    "year": "2024",
    "description": "A dynamic finance dashboard that transforms complex data into clear, actionable insights. With interactive charts, progress trackers, and goal monitoring, it empowers users to make informed financial decisions with confidence and precision.",
    "image": "/dashboard.png",
    "link": "#",
    "category": "Dashboard"
  },
  {
    "title": "Tech City",
    "year": "2025",
    "description": "An engaging e-learning platform that integrates course management, student progress tracking, and interactive learning tools. Tech City creates an immersive educational environment that keeps learners motivated and educators in control.",
    "image": "/techcity.png",
    "link": "#",
    "category": "Education"
  },
  {
    "title": "Discovery Place",
    "year": "2025",
    "description": "A next-generation real estate platform offering advanced property search, smart filters, and immersive virtual tours. Discovery Place makes it effortless for buyers to explore and evaluate properties from anywhere, at any time.",
    "image": "/discovery.png",
    "link": "#",
    "category": "Real Estate"
  },
  {
    "title": "Brand Store",
    "year": "2023",
    "description": "A stylish eCommerce platform tailored for clothing brands, combining fast-loading product displays with secure checkout. Brand Store delivers a smooth, visually rich shopping experience that enhances customer engagement and brand identity.",
    "image": "/project4.png",
    "link": "#",
    "category": "Brand App"
  },
  {
    "title": "Akagum",
    "year": "2024",
    "description": "An intelligent savings platform designed for financially savvy users. Akagum offers automated saving plans, goal tracking, and insightful analytics, making it easier than ever to grow wealth with discipline and smart strategy.",
    "image": "/akagum.png",
    "link": "#",
    "category": "Savings"
  }
];

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const initialProjects = projects.slice(0, 3);
  const remainingProjects = projects.slice(3);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section id="projects" className="py-16 bg-background px-4 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs font-medium mb-4 border border-border"
          >
            Projects
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-3xl font-bold text-foreground mb-4"
          >
            We turn bold ideas into engaging, inspiring designs.
          </motion.h2>
        </motion.div>

        {/* Projects Grid - Responsive: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Initial 3 Projects */}
          {initialProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group cursor-pointer"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}

          {/* Remaining Projects with AnimatePresence */}
          <AnimatePresence>
            {showAll && remainingProjects.map((project, index) => (
              <motion.div
                key={index + 3}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.04,
                  ease: "easeOut"
                }}
                className="group cursor-pointer"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More/Less Button */}
        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            onClick={toggleShowAll}
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center px-6 py-2.5 bg-foreground text-background rounded-full font-medium text-sm transition-all duration-300 hover:bg-foreground/90 shadow-md hover:shadow-lg"
          >
            <span className="relative z-10">
              {showAll ? 'Show Less' : `Show More Projects (${remainingProjects.length})`}
            </span>
            <motion.svg 
              className={`w-4 h-4 ml-2 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 9l-7 7-7-7" 
              />
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
