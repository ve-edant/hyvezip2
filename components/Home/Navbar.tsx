"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const Navbar = () => {
  return (
    <motion.header
      className="absolute w-full max-h-20 z-20 flex bg-white items-center justify-between px-6 py-5 lg:px-12"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-2">
        <Image src="/HYVE-logo.png" alt="HYVE Logo" width={120} height={40} className="h-8 w-auto" />
      </div>

      <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
        <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
          Blog
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
          Pricing
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
          Updates
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
          Careers
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
          Contact
        </a>
      </nav>

      <Button className="bg-[#f1ac13] hover:bg-[#d99910] text-white shadow-lg shadow-[#f1ac13]/30">
        Remix Template
      </Button>
    </motion.header>
  )
}

export default Navbar
