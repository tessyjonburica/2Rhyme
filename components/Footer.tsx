"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Instagram,
  Twitter,
  Facebook
} from "lucide-react";

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#0a0a0b] py-32 px-4 text-center">
      {/* ===== Decorative background lines ===== */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 -z-10 h-48 w-full text-white/5 sm:h-56 md:h-64"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        {/* Repeat a few subtle wave / grid lines */}
        <path
          d="M0 288L80 272C160 256 320 224 480 202.7C640 181 800 171 960 197.3C1120 224 1280 288 1360 320L1440 352"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M0 320L80 304C160 288 320 256 480 234.7C640 213 800 203 960 229.3C1120 256 1280 320 1360 352L1440 384"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>

      {/* ===== Main message ===== */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-5xl text-2xl font-bold leading-tight text-white sm:text-4xl md:text-5xl"
      >
        Let’s Build Something
        <br className="hidden md:block" />
        Beautiful Together
      </motion.h2>

      {/* ===== CTA button ===== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-12"
      >
        <Link
          href="#contact"
          className="group inline-flex items-center rounded-full bg-white/90 px-6 py-2 text-sm font-semibold text-gray-900 backdrop-blur transition hover:bg-white focus-visible:outline-none"
        >
          <span>Get in Touch</span>
          <span className="ml-3 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-transform group-hover:translate-x-1">
            <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      </motion.div>

      {/* ===== Bottom bar ===== */}
      <div className="absolute bottom-6 left-4 text-xs text-white/60">
        © {new Date().getFullYear()} Emmy Designs
      </div>

      <div className="absolute bottom-6 right-4 flex items-center gap-6">
        <Link
          href="https://instagram.com"
          aria-label="Instagram"
          target="_blank"
          className="transition hover:text-white/90"
        >
          <Instagram className="h-5 w-5 text-white/60" />
        </Link>
        <Link
          href="https://twitter.com"
          aria-label="Twitter"
          target="_blank"
          className="transition hover:text-white/90"
        >
          <Twitter className="h-5 w-5 text-white/60" />
        </Link>
        <Link
          href="https://facebook.com"
          aria-label="Facebook"
          target="_blank"
          className="transition hover:text-white/90"
        >
          <Facebook className="h-5 w-5 text-white/60" />
        </Link>
      </div>
    </footer>
  );
}
