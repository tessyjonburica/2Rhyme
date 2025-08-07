import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Define the type for a single project
interface Project {
  title: string;
  year: string;
  description: string;
  image: string;
  link: string;
  category: string;
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
      {/* Project Image - Smaller aspect ratio */}
      <div className="relative overflow-hidden aspect-[4/3] bg-secondary">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-1.5 transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <svg 
              className="w-3.5 h-3.5 text-white" 
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
          </div>
        </div>
      </div>

      {/* Project Content - Reduced padding and spacing */}
      <div className="p-3">
        {/* Category Badge */}
        <div className="mb-2">
          <span className="inline-block px-2 py-0.5 rounded-full bg-secondary text-muted-foreground text-xs font-medium border border-border">
            {project.category}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-sm font-bold text-foreground mb-1 group-hover:text-foreground/80 transition-colors duration-300 line-clamp-1">
          {project.title}
        </h3>

        {/* Project Year */}
        <p className="text-muted-foreground text-xs font-medium mb-2">
          {project.year}
        </p>

        {/* Project Description */}
        <p className="text-muted-foreground text-xs leading-relaxed mb-3 line-clamp-2">
          {project.description}
        </p>

        {/* View More Button */}
        <motion.a
          href={project.link}
          whileHover={{ x: 2 }}
          transition={{ duration: 0.2 }}
          className="inline-flex items-center text-foreground hover:text-foreground/70 text-xs font-medium transition-colors duration-300 group/link"
        >
          View Project
          <motion.svg 
            className="w-3 h-3 ml-1 transition-transform duration-200 group-hover/link:translate-x-0.5" 
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
  );
}
