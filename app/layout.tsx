import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Orbitron, Share_Tech_Mono, Rubik_Glitch, Rajdhani, JetBrains_Mono, Cinzel } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
const shareTechMono = Share_Tech_Mono({ weight: "400", subsets: ["latin"], variable: "--font-share-tech-mono" });
const rubikGlitch = Rubik_Glitch({ weight: "400", subsets: ["latin"], variable: "--font-rubik-glitch" });
const rajdhani = Rajdhani({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"], variable: "--font-rajdhani" });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });

export const metadata: Metadata = {
  title: 'NeoFoundry - Font Laboratory & Marketplace',
  description: 'Discover and customize minimalist, cyberpunk, and experimental typefaces for your projects. Browse, preview, and download professional fonts.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: true,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${geist.variable} ${geistMono.variable} ${orbitron.variable} ${shareTechMono.variable} ${rubikGlitch.variable} ${rajdhani.variable} ${jetBrainsMono.variable} ${cinzel.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
