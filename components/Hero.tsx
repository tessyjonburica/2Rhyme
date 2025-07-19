"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

export function Hero() {
  return (
    <section id="home" className="min-h-screen bg-[#111113] px-4 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="font-[500] text-white text-[40px] md:text-[64px] leading-[110px] text-center font-sora"
          >
            Crafting Interfaces<br />
            <span className="text-white">That Inspires...</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mt-4 mb-8">
            Innovative, user-centered design for modern brands
          </p>
          <div className="flex justify-center">
            <Link
              href="#contact"
              className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              Start Your Project
              <span className="inline-block transform transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Slideshow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16"
        >
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full"
          >
            {["/slide1.png", "/slide2.png", "/slide3.png"].map((src, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={src}
                  alt={`Slide ${idx + 1}`}
                  className="rounded-xl shadow-lg object-cover w-full h-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}
