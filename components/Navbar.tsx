"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects", hasDropdown: true },
    { name: "Contact Us", href: "#contact" },
  ]

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-2xl" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Enhanced */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="flex flex-col space-y-1.5 group-hover:scale-110 transition-transform duration-300">
              <div className="w-7 h-0.5 bg-white group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300"></div>
              <div className="w-5 h-0.5 bg-white group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300"></div>
              <div className="w-7 h-0.5 bg-white group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300"></div>
            </div>
            <span className="text-xl font-bold text-white tracking-wide group-hover:text-gray-200 transition-colors duration-300">
              EMMY DESIGNS
            </span>
          </div>

          {/* Desktop Navigation - Enhanced */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative flex items-center space-x-1 text-white/90 hover:text-white transition-all duration-300 group py-2"
              >
                <span className="font-medium text-sm tracking-wide relative">
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </span>
                {item.hasDropdown && (
                  <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                )}
              </a>
            ))}
          </div>

          {/* Right side - Enhanced */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:scale-110"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <a
              href="#contact"
              className="relative bg-white text-black px-8 py-3 rounded-full font-semibold text-sm tracking-wide hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg overflow-hidden group"
            >
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </a>
          </div>

          {/* Mobile menu button - Enhanced */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:scale-110"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Enhanced */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-black/95 backdrop-blur-xl border-t border-white/10 rounded-b-2xl mt-2 shadow-2xl">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-between px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 group"
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="font-medium tracking-wide">{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                  )}
                </a>
              ))}
              <a
                href="#contact"
                className="block w-full text-center bg-white text-black px-6 py-3 rounded-xl font-semibold mt-6 hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                onClick={() => setIsOpen(false)}
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}