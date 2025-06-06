import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Manrope } from 'next/font/google'
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const manrope = Manrope({ 
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['200', '300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Florian Marie - Développeur Fullstack",
  description:
    "Portfolio de Florian Marie, développeur fullstack spécialisé en React, Next.js et Node.js",
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${manrope.variable} scroll-smooth`}>
      <body className={`${inter.variable} font-sans antialiased bg-black text-white`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
