import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "2Rhyme - Emmy Designs | Creative Design Solutions",
  description:
    "We create stunning digital experiences that captivate your audience and drive results. Specializing in UI/UX design, web development, and brand identity.",
  keywords: "design, web development, UI/UX, branding, digital marketing, creative agency",
  authors: [{ name: "Emmy Designs" }],
  creator: "Emmy Designs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://2rhyme.com",
    title: "2Rhyme - Emmy Designs | Creative Design Solutions",
    description: "We create stunning digital experiences that captivate your audience and drive results.",
    siteName: "2Rhyme - Emmy Designs",
  },
  twitter: {
    card: "summary_large_image",
    title: "2Rhyme - Emmy Designs | Creative Design Solutions",
    description: "We create stunning digital experiences that captivate your audience and drive results.",
    creator: "@emmydesigns",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#111113] text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
