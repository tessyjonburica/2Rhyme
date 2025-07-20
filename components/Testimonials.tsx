"use client"

import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import Image from "next/image"
import "swiper/css"
import "swiper/css/pagination"

// Hardcoded testimonials data
const testimonials = [
  {
    name: "Mariam Awolowo",
    position: "Lagos Trader",
    avatar: "/placeholder.svg?height=64&width=64",
    content:
      "Lorem ipsum dolor sit amet consectetur. Penatibus nec diam pellentesque netus eu dui at habitant. Gravida pellentesque dolor id amet dui at habitant. Gravida pellentesque dolor.",
  },
  {
    name: "Jack Finnigan",
    position: "Business contractor",
    avatar: "/placeholder.svg?height=64&width=64",
    content:
      "Lorem ipsum dolor sit amet consectetur. Penatibus nec diam pellentesque netus eu dui at habitant. Gravida pellentesque dolor id amet dui at habitant. Gravida pellentesque dolor.",
  },
  {
    name: "Remilekun Ade",
    position: "Lagos Trader",
    avatar: "/placeholder.svg?height=64&width=64",
    content:
      "Lorem ipsum dolor sit amet consectetur. Penatibus nec diam pellentesque netus eu dui at habitant. Gravida pellentesque dolor id amet dui at habitant. Gravida pellentesque dolor.",
  },
  {
    name: "John Doe",
    position: "Marketing Specialist",
    avatar: "/placeholder.svg?height=64&width=64",
    content:
      "This service exceeded my expectations! The team was professional and delivered outstanding results. Highly recommend their expertise.",
  },
  {
    name: "Jane Smith",
    position: "Startup Founder",
    avatar: "/placeholder.svg?height=64&width=64",
    content:
      "Incredible attention to detail and a truly collaborative approach. They brought our vision to life perfectly.",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-[#111113] px-4" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#1f1f23] text-gray-400 text-sm mb-4">
            Testimonial
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">What Our Client are Saying</h2>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet bg-white/30",
            bulletActiveClass: "swiper-pagination-bullet-active bg-white",
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2, // Show 2 slides on tablet, active centered
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3, // Show 3 slides on desktop, active centered
              spaceBetween: 40,
            },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className={`
                    p-8 rounded-lg h-full flex flex-col justify-between transition-all duration-300 ease-in-out
                    ${isActive ? "bg-white text-black shadow-lg transform -translate-y-4" : "bg-[#1f1f23] text-gray-300"}
                  `}
                >
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className={`font-bold ${isActive ? "text-black" : "text-white"}`}>{testimonial.name}</h4>
                      <p className={`text-sm ${isActive ? "text-gray-600" : "text-gray-400"}`}>
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                  <p className={`mb-4 ${isActive ? "text-gray-800" : "text-gray-300"}`}>"{testimonial.content}"</p>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
