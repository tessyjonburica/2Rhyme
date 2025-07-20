"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "NFT Website",
    year: "2024",
    description:
      "An immersive NFT marketplace designed to showcase, trade, and explore unique digital assets. This project combines visually captivating UI with seamless user experience, blending art and technology for collectors and creators alike.",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
  {
    title: "Flight Booking Website",
    year: "2023",
    description:
      "An intuitive and visually engaging flight booking platform that simplifies the user journey from search to checkout. Designed with a clean layout, streamlined navigation, and personalized filters to help users find, compare, and book flights effortlessly.",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
  {
    title: "Car Sales Website",
    year: "2023",
    description:
      "A sleek, user-friendly car sales website designed to enhance the online shopping experience. With intuitive navigation, high-quality visuals, and detailed car listings, this site connects buyers with their perfect vehicle in a seamless, engaging way.",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
  {
    title: "Food Delivery Mobile App",
    year: "2024",
    description:
      "A seamless, user-friendly design that brings favorite meals to users' fingertips. With a clean interface, smooth navigation, and real-time tracking, this app redefines convenience in food delivery, making it easy to browse, order, and enjoy.",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#111113] px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-4">
            Projects
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            We turn bold ideas into engaging, inspiring designs.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="bg-[#1f1f23] border-none rounded-xl overflow-hidden h-full flex flex-col">
                <CardHeader className="p-0">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-64 object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <CardTitle className="text-2xl font-bold text-white mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400 text-sm mb-4">{project.year}</CardDescription>
                  <p className="text-gray-300 text-base">{project.description}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-end">
                  <Link href={project.link} className="text-white hover:underline text-sm font-medium">
                    View More
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
