"use client"
import { useState, useEffect } from "react"

// Hardcoded testimonials data
const testimonials = [
  {
    name: "Mariam Awolowo",
    position: "Lagos Trader",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
    content:
      "Lorem ipsum dolor sit amet consectetur. Penatibus nec diam pellentesque netus eu dui at habitant. Gravida pellentesque dolor id amet dui at habitant. Gravida pellentesque dolor.",
  },
  {
    name: "Jack Finnigan",
    position: "Business contractor",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
    content:
      "Lorem ipsum dolor sit amet consectetur. Penatibus nec diam pellentesque netus eu dui at habitant. Gravida pellentesque dolor id amet dui at habitant. Gravida pellentesque dolor.",
  },
  {
    name: "Remilekun Ade",
    position: "Lagos Trader",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=face",
    content:
      "Lorem ipsum dolor sit amet consectetur. Penatibus nec diam pellentesque netus eu dui at habitant. Gravida pellentesque dolor id amet dui at habitant. Gravida pellentesque dolor.",
  },
  {
    name: "John Doe",
    position: "Marketing Specialist",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
    content:
      "This service exceeded my expectations! The team was professional and delivered outstanding results. Highly recommend their expertise.",
  },
  {
    name: "Jane Smith",
    position: "Startup Founder",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
    content:
      "Incredible attention to detail and a truly collaborative approach. They brought our vision to life perfectly.",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(1) // Start with middle testimonial

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const getPrevIndex = () => (currentIndex - 1 + testimonials.length) % testimonials.length
  const getNextIndex = () => (currentIndex + 1) % testimonials.length

  return (
    <section className="py-20 bg-[#0a0a0b] px-4" id="testimonials">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-[#1f1f23] text-gray-400 text-sm mb-6 border border-gray-700">
            Testimonial
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What Our Client are Saying
          </h2>
        </div>

        {/* Three Card Layout - Exact match to image */}
        <div className="flex items-center justify-center gap-6 max-w-6xl mx-auto">
          {/* Left Card - Dark */}
          <div className="w-80 hidden lg:block">
            <div className="bg-[#1a1a1d] p-6 rounded-2xl h-80">
              <div className="flex items-center mb-4">
                <img
                  src={testimonials[getPrevIndex()].avatar}
                  alt={testimonials[getPrevIndex()].name}
                  className="w-12 h-12 rounded-full mr-3 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-white text-sm">
                    {testimonials[getPrevIndex()].name}
                  </h4>
                  <p className="text-gray-400 text-xs">
                    {testimonials[getPrevIndex()].position}
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {testimonials[getPrevIndex()].content}
              </p>
            </div>
          </div>

          {/* Center Card - White (Active) */}
          <div className="w-96 flex-shrink-0">
            <div className="bg-white p-8 rounded-2xl h-80 shadow-xl">
              <div className="flex items-center mb-6">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-14 h-14 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonials[currentIndex].position}
                  </p>
                </div>
              </div>
              <p className="text-gray-800 leading-relaxed">
                {testimonials[currentIndex].content}
              </p>
            </div>
          </div>

          {/* Right Card - Dark */}
          <div className="w-80 hidden lg:block">
            <div className="bg-[#1a1a1d] p-6 rounded-2xl h-80">
              <div className="flex items-center mb-4">
                <img
                  src={testimonials[getNextIndex()].avatar}
                  alt={testimonials[getNextIndex()].name}
                  className="w-12 h-12 rounded-full mr-3 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-white text-sm">
                    {testimonials[getNextIndex()].name}
                  </h4>
                  <p className="text-gray-400 text-xs">
                    {testimonials[getNextIndex()].position}
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {testimonials[getNextIndex()].content}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-12 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`
                w-2 h-2 rounded-full transition-all duration-300
                ${index === currentIndex 
                  ? 'bg-white w-8' 
                  : 'bg-gray-600 hover:bg-gray-500'
                }
              `}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}