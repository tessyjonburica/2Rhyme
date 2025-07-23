import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Emmy Designs | Creative Design Solutions",
  description:
    "We create stunning digital experiences that captivate your audience and drive results. Specializing in UI/UX design, web development, and brand identity.",
  keywords: "design, web development, UI/UX, branding, digital marketing, creative agency",
  authors: [{ name: "Emmy Designs" }],
  creator: "Emmy Designs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://emmydesigns.vercel.app",
    title: "Emmy Designs | Creative Design Solutions",
    description: "We create stunning digital experiences that captivate your audience and drive results.",
    siteName: "Emmy Designs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmy Designs | Creative Design Solutions",
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </Head>
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
