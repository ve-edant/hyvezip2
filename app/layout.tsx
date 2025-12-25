import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Montserrat } from "next/font/google";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const montserrat = Montserrat();

export const metadata: Metadata = {
  title: 'Hyve App',
  description: 'Hyve Landing Page',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} font-montserrat antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
