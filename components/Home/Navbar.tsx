"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const navLinks = [
    { label: "For freelancers", href: "#freelancers" },
    { label: "For companies", href: "#companies" },
    { label: "Blog", href: "#blog" },
    { label: "Support", href: "#support" },
    { label: "About", href: "#about" },
  ];

  const sidebarVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  const linkVariants = {
    closed: { x: 20, opacity: 0 },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    }),
  };

  return (
    <>
      <motion.header
        className="fixed w-full max-h-20 z-50 flex bg-white/80 backdrop-blur-md items-center justify-between px-6 py-5 lg:px-12 shadow-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2">
          <Image
            src="/HYVE-logo.png"
            alt="HYVE Logo"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-700 hover:text-gray-900 transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f1ac13] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4 text-sm font-medium">
          <Button className="border border-[#f1ac13] bg-white hover:bg-[#fde7b6] text-[#f1ac13] shadow-lg shadow-[#f1ac13]/30 transition-all duration-300">
            Login
          </Button>
          <Button className="bg-[#f1ac13] hover:bg-[#d99910] text-white shadow-lg shadow-[#f1ac13]/30 transition-all duration-300">
            Sign Up
          </Button>
        </div>

        <button
          onClick={toggleSidebar}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
      </motion.header>

      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={toggleSidebar}
            />

            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 md:hidden"
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <Image
                    src="/HYVE-logo.png"
                    alt="HYVE Logo"
                    width={100}
                    height={33}
                    className="h-7 w-auto"
                  />
                  <button
                    onClick={toggleSidebar}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6 text-gray-700" />
                  </button>
                </div>

                <nav className="flex flex-col gap-2 p-6 flex-1">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      custom={i}
                      variants={linkVariants}
                      initial="closed"
                      animate="open"
                      className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-4 py-3 rounded-lg transition-colors text-base font-medium"
                      onClick={toggleSidebar}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </nav>

                <motion.div
                  className="flex flex-col gap-3 p-6 border-t border-gray-200"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Button className="w-full border border-[#f1ac13] bg-white hover:bg-[#fde7b6] text-[#f1ac13] shadow-lg shadow-[#f1ac13]/30 transition-all duration-300">
                    Login
                  </Button>
                  <Button className="w-full bg-[#f1ac13] hover:bg-[#d99910] text-white shadow-lg shadow-[#f1ac13]/30 transition-all duration-300">
                    Sign Up
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;