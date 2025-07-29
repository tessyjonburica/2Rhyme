"use client"
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "NFT Website",
    year: "2024",
    description: "An intuitive and visually engaging flight booking platform that simplifies the user journey from search to checkout. Designed with a clean layout, streamlined navigation, and personalized filters to help users find, compare, and book flights effortlessly.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop&crop=center",
    link: "#",
    category: "Web App"
  },
  {
    title: "Car Sales Website",
    year: "2023", 
    description: "A sleek, user-friendly car sales website designed to enhance the online shopping experience. With intuitive navigation, high-quality visuals, and detailed car listings, this site connects buyers with their perfect vehicle in a seamless, engaging way.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop&crop=center",
    link: "#",
    category: "E-commerce"
  },
  {
    title: "Food Delivery Mobile App",
    year: "2024",
    description: "A seamless, user-friendly design that brings favorite meals to users' fingertips. With a clean interface, smooth navigation, and real-time tracking, this app redefines convenience in food delivery, making it easy to browse, order, and enjoy.",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=600&h=400&fit=crop&crop=center",
    link: "#",
    category: "Mobile App"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const imageVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const cardVariants = {
  hover: {
    y: -8,
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-background px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-4 py-1 rounded-full bg-secondary text-muted-foreground text-sm font-medium mb-4 border border-border"
          >
            Projects
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl md:text-4xl font-bold text-foreground mb-6"
          >
            We turn bold ideas into engaging, inspiring designs.
          </motion.h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="group cursor-pointer"
            >
              <motion.div
                variants={cardVariants}
                className="bg-card border border-border rounded-xl overflow-hidden h-full shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <motion.img
                    variants={imageVariants}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  
                  {/* Overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black/40 flex items-center justify-center"
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white/20 backdrop-blur-sm rounded-full p-3"
                    >
                      <svg 
                        className="w-6 h-6 text-white" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
                        />
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" 
                        />
                      </svg>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8 flex-grow flex flex-col">
                  {/* Category & Year */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                      {project.category}
                    </span>
                    <span className="text-sm text-muted-foreground font-medium">
                      {project.year}
                    </span>
                  </div>

                  {/* Title */}
                  <motion.h3 
                    className="text-xl lg:text-2xl font-bold text-foreground mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                  >
                    {project.title}
                  </motion.h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm lg:text-base leading-relaxed flex-grow mb-6">
                    {project.description}
                  </p>

                  {/* View More Link */}
                  <motion.div
                    className="flex items-center justify-between"
                  >
                    <motion.a
                      href={project.link}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      className="inline-flex items-center text-foreground hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors duration-300"
                    >
                      View More
                      <motion.svg 
                        className="w-4 h-4 ml-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M17 8l4 4m0 0l-4 4m4-4H3" 
                        />
                      </motion.svg>
                    </motion.a>

                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                      className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}