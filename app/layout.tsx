import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import '@/styles/globals.css'
import { Montserrat } from "next/font/google";
import Navbar from '@/components/Home/Navbar';
import { Footer } from '@/components/layout/Footer';

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const montserrat = Montserrat();

export const metadata: Metadata = {
  title: 'HYVE App',
  description: 'HYVE Landing Page',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} font-montserrat antialiased`}>
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
