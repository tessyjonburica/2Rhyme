"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from './ProjectCard'; // Import the new ProjectCard component

const projects = [
  {
    title: "NFT Marketplace",
    year: "2024",
    description: "Immersive NFT marketplace for trading unique digital assets with seamless UX.",
    image: "/project1.png",
    link: "#",
    category: "Web Design"
  },
  {
    title: "Flight Booking App", 
    year: "2023",
    description: "Intuitive flight booking platform with streamlined navigation and filters.",
    image: "/project2.png",
    link: "#",
    category: "Web App"
  },
  {
    title: "Car Sales Platform",
    year: "2023", 
    description: "Sleek car sales website connecting buyers with their perfect vehicle.",
    image: "/project3.png",
    link: "#",
    category: "E-commerce"
  },
  {
    title: "Food Delivery App",
    year: "2024",
    description: "User-friendly food delivery app with real-time tracking and smooth ordering.",
    image: "/project4.png",
    link: "#",
    category: "Mobile App"
  },
  {
    title: "Fitness Dashboard",
    year: "2024",
    description: "Comprehensive fitness dashboard with data visualization and progress tracking.",
    image: "/project1.png",
    link: "#",
    category: "Dashboard"
  },
  {
    title: "E-learning Platform",
    year: "2023",
    description: "Interactive learning platform with course management and student tracking.",
    image: "/project2.png",
    link: "#",
    category: "Education"
  },
  {
    title: "Real Estate Portal",
    year: "2024",
    description: "Modern real estate platform with advanced search and virtual tours.",
    image: "/project3.png",
    link: "#",
    category: "Real Estate"
  },
  {
    title: "Social Media App",
    year: "2023",
    description: "Engaging social platform with content sharing and community features.",
    image: "/project4.png",
    link: "#",
    category: "Social"
  },
  {
    title: "Crypto Dashboard",
    year: "2024",
    description: "Advanced trading interface with real-time market data and portfolio management.",
    image: "/project1.png",
    link: "#",
    category: "Fintech"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
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
