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
  const [currentIndex, setCurrentIndex] = useState(1)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const getPrevIndex = () => (currentIndex - 1 + testimonials.length) % testimonials.length
  const getNextIndex = () => (currentIndex + 1) % testimonials.length

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }
    if (isRightSwipe) {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#0a0a0b] px-4 sm:px-6 lg:px-8" id="testimonials">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block px-3 sm:px-4 py-2 rounded-full bg-[#1f1f23] text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6 border border-gray-700">
            Testimonial
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white px-4">
            What Our Client are Saying
          </h2>
        </div>

        {/* Responsive Layout */}
        <div 
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Mobile: Single Card View */}
          <div className="block lg:hidden">
            <div className="max-w-sm mx-auto">
              <div className="bg-white p-6 sm:p-8 rounded-2xl min-h-[280px] sm:min-h-[320px] shadow-xl">
                <div className="flex items-center mb-4 sm:mb-6">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full mr-3 sm:mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-base sm:text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {testimonials[currentIndex].position}
                    </p>
                  </div>
                </div>
                <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                  {testimonials[currentIndex].content}
                </p>
              </div>
            </div>
          </div>

          {/* Desktop: Three Card Layout */}
          <div className="hidden lg:flex items-center justify-center gap-4 xl:gap-6 max-w-6xl mx-auto">
            {/* Left Card - Dark */}
            <div className="w-72 xl:w-80 flex-shrink-0">
              <div className="bg-[#1a1a1d] p-5 xl:p-6 rounded-2xl h-72 xl:h-80">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonials[getPrevIndex()].avatar}
                    alt={testimonials[getPrevIndex()].name}
                    className="w-11 h-11 xl:w-12 xl:h-12 rounded-full mr-3 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-white text-sm xl:text-base">
                      {testimonials[getPrevIndex()].name}
                    </h4>
                    <p className="text-gray-400 text-xs xl:text-sm">
                      {testimonials[getPrevIndex()].position}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm xl:text-base leading-relaxed">
                  {testimonials[getPrevIndex()].content}
                </p>
              </div>
            </div>

            {/* Center Card - White (Active) */}
            <div className="w-80 xl:w-96 flex-shrink-0">
              <div className="bg-white p-6 xl:p-8 rounded-2xl h-72 xl:h-80 shadow-xl">
                <div className="flex items-center mb-4 xl:mb-6">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-12 h-12 xl:w-14 xl:h-14 rounded-full mr-3 xl:mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-base xl:text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-600 text-sm xl:text-base">
                      {testimonials[currentIndex].position}
                    </p>
                  </div>
                </div>
                <p className="text-gray-800 text-sm xl:text-base leading-relaxed">
                  {testimonials[currentIndex].content}
                </p>
              </div>
            </div>

            {/* Right Card - Dark */}
            <div className="w-72 xl:w-80 flex-shrink-0">
              <div className="bg-[#1a1a1d] p-5 xl:p-6 rounded-2xl h-72 xl:h-80">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonials[getNextIndex()].avatar}
                    alt={testimonials[getNextIndex()].name}
                    className="w-11 h-11 xl:w-12 xl:h-12 rounded-full mr-3 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-white text-sm xl:text-base">
                      {testimonials[getNextIndex()].name}
                    </h4>
                    <p className="text-gray-400 text-xs xl:text-sm">
                      {testimonials[getNextIndex()].position}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm xl:text-base leading-relaxed">
                  {testimonials[getNextIndex()].content}
                </p>
              </div>
            </div>
          </div>


        </div>


      </div>
    </section>
  )
}