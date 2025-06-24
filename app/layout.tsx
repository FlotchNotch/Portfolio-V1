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
  title: "Florian Marie | Développeur Full Stack Junior React Next.js - Rennes",
  description: "Développeur Full Stack Junior spécialisé React, Next.js et Node.js à Rennes. Portfolio de projets web modernes. Reconversion réussie de préparateur pharmacie vers développeur web.",
  keywords: [
    "développeur full stack", "développeur junior", "React développeur", "Next.js développeur", 
    "JavaScript développeur", "Node.js développeur", "développeur web Rennes", "développeur Bretagne",
    "portfolio développeur", "reconversion développeur", "développeur frontend", "développeur backend",
    "La Capsule", "formation développeur", "projets React", "applications web", "TypeScript",
    "développeur freelance", "emploi développeur Rennes", "développeur web junior"
  ],
  authors: [{ name: "Florian Marie", url: "https://florianmarie.dev" }],
  creator: "Florian Marie",
  publisher: "Florian Marie",
  metadataBase: new URL("https://florianmarie.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://florianmarie.dev",
    title: "Florian Marie | Développeur Full Stack Junior React Next.js",
    description: "Portfolio de Florian Marie, développeur Full Stack Junior spécialisé React et Next.js à Rennes. Projets web modernes et code de qualité.",
    siteName: "Florian Marie - Développeur Web",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Florian Marie - Développeur Full Stack Junior React Next.js",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Florian Marie | Développeur Full Stack Junior",
    description: "Développeur Full Stack Junior React Next.js à Rennes. Portfolio de projets web modernes.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "votre-code-google-search-console",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans" suppressHydrationWarning={true}>
        {children}
        
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Florian Marie",
              "jobTitle": "Développeur Full Stack Junior",
              "description": "Développeur Full Stack Junior spécialisé en React, Next.js et Node.js",
              "url": "https://florianmarie.dev",
              "image": "https://florianmarie.dev/flotchlogo.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Rennes",
                "addressRegion": "Bretagne",
                "addressCountry": "France"
              },
              "email": "florianmarie.webdev@gmail.com",
              "sameAs": [
                "https://www.linkedin.com/in/florian-marie-bzh",
                "https://github.com/FlotchNotch"
              ],
              "knowsAbout": [
                "React", "Next.js", "Node.js", "JavaScript", "TypeScript", 
                "Express.js", "MongoDB", "Git", "HTML", "CSS", "Tailwind CSS"
              ],
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "La Capsule",
                "description": "Formation Développeur Fullstack Web et Mobile"
              }
            })
          }}
        />
      </body>
    </html>
  )
}
