"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#hero" }, // Updated to link to hero section
    { name: "Services", href: "#expertise" }, // Updated to link to expertise section
    { name: "Projects", href: "#projects", hasDropdown: true },
    { name: "Contact Us", href: "#contact" },
  ]

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) return null

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-2xl" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 md:space-x-3 group cursor-pointer">
            {/* Icon Image */}
            <div className="relative w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 group-hover:scale-110 transition-transform duration-300">
              <Image
                src={theme === "dark" ? "/icon.png" : "/icon_black.png"}
                alt="Emmy Designs Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Text */}
            <span className="text-lg md:text-xl lg:text-2xl font-bold text-foreground tracking-normal leading-8 group-hover:text-muted-foreground transition-colors duration-300" style={{ fontFamily: 'Intro, sans-serif', fontSize: 'clamp(18px, 4vw, 28px)', lineHeight: '32px' }}>
              EMMYX DESIGNS
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative flex items-center space-x-1 text-foreground/90 hover:text-foreground transition-all duration-300 group py-2"
              >
                <span className="font-medium text-sm tracking-wide relative">
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground group-hover:w-full transition-all duration-300"></span>
                </span>
                {item.hasDropdown && (
                  <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                )}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-secondary hover:bg-accent text-foreground transition-all duration-300 hover:scale-110"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <a
              href="#contact"
              className="relative bg-foreground text-background px-6 lg:px-8 py-2.5 lg:py-3 rounded-full font-semibold text-sm tracking-wide hover:bg-foreground/90 transition-all duration-300 hover:scale-105 hover:shadow-lg overflow-hidden group"
            >
              <span className="relative z-10">Get in Touch</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-secondary hover:bg-accent text-foreground transition-all duration-300"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 rounded-lg bg-secondary hover:bg-accent text-foreground transition-all duration-300 hover:scale-110"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-background/95 backdrop-blur-xl border-t border-border rounded-b-2xl mt-2 shadow-2xl">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-between px-4 py-3 text-foreground/90 hover:text-foreground hover:bg-secondary rounded-xl transition-all duration-300 group"
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
                className="block w-full text-center bg-foreground text-background px-6 py-3 rounded-xl font-semibold mt-6 hover:bg-foreground/90 transition-all duration-300 hover:scale-105"
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