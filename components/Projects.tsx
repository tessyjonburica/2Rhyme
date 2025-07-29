"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: "NFT Website",
    year: "2024",
    description: "An immersive NFT marketplace designed to showcase, trade, and explore unique digital assets. This project combines visually captivating UI with seamless user experience, blending art and technology for collectors and creators alike.",
    image: "/project1.png",
    link: "#",
    category: "Web Design"
  },
  {
    title: "Flight Booking Website", 
    year: "2023",
    description: "An intuitive and visually engaging flight booking platform that simplifies the user journey from search to checkout. Designed with a clean layout, streamlined navigation, and personalized filters to help users find, compare, and book flights effortlessly.",
    image: "/project2.png",
    link: "#",
    category: "Web App"
  },
  {
    title: "Car Sales Website",
    year: "2023", 
    description: "A sleek, user-friendly car sales website designed to enhance the online shopping experience. With intuitive navigation, high-quality visuals, and detailed car listings, this site connects buyers with their perfect vehicle in a seamless, engaging way.",
    image: "/project3.png",
    link: "#",
    category: "E-commerce"
  },
  {
    title: "Food Delivery Mobile App",
    year: "2024",
    description: "A seamless, user-friendly design that brings favorite meals to users' fingertips. With a clean interface, smooth navigation, and real-time tracking, this app redefines convenience in food delivery, making it easy to browse, order, and enjoy.",
    image: "/project4.png",
    link: "#",
    category: "Mobile App"
  }
];

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

        {/* Projects Grid - Responsive: 1 col mobile, 2 cols tablet/desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-[4/3] bg-secondary">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <svg 
                        className="w-8 h-8 text-white" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={1.5} 
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
                        />
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={1.5} 
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" 
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 lg:p-8">
                  {/* Project Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Project Year */}
                  <p className="text-muted-foreground text-sm font-medium mb-4">
                    {project.year}
                  </p>

                  {/* Project Description */}
                  <p className="text-muted-foreground text-sm lg:text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* View More Button */}
                  <motion.a
                    href={project.link}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex items-center text-foreground hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors duration-300 group/link"
                  >
                    View More
                    <motion.svg 
                      className="w-4 h-4 ml-2 transition-transform duration-200 group-hover/link:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M17 8l4 4m0 0l-4 4m4-4H3" 
                      />
                    </motion.svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}