import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Florian Marie | Développeur Fullstack Junior",
  description:
    "Développeur Fullstack Junior spécialisé en React et Node.js. Ancien préparateur en pharmacie reconverti dans le développement web.",
  keywords: ["développeur fullstack", "React", "Node.js", "JavaScript", "junior", "reconversion", "portfolio"],
  generator: 'Next.js'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body className="font-sans" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
