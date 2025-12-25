import React from 'react'
import { motion } from "framer-motion";
import { Zap, Activity, CheckCircle2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroText from "@/components/Home/HeroText";
import HeroSvg from "@/components/Home/hero-svg";

const HeroSection = () => {
  return (
    <main className="relative z-10 px-6 lg:px-12 pt-6 lg:pt-8 pb-12 lg:pb-16">
        <div className="pointer-events-none absolute inset-0 z-5">
          <motion.div initial={{ opacity: 0}}
                    animate={{
                      opacity: 1,
                      animationDuration:2,
                    }}  className="absolute top-0 h-[2%] md:h-[10%] w-full bg-linear-to-b from-white" />
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
          <div className="relative w-full h-[280px] sm:h-[460px] md:h-[420px] lg:h-[550px] order-1 lg:order-2">
            {/* Background SVG and gradients */}
            <div className=" absolute -top-5/6 left-1/2 -translate-x-1/2 overflow-visible pointer-events-none [mask-image:radial-gradient(circle,white_60%,transparent_100%)] [-webkit-mask-image:radial-gradient(circle,white_60%,transparent_100%)] z-0">
              <HeroSvg />
            </div>

            {/* Animated gradient blobs */}
            <motion.div
              className="absolute rounded-full pointer-events-none z-0"
              style={{
                background:
                  "radial-gradient(circle, rgba(243, 172, 20, 1.0) 0%, rgba(243, 172, 20, 1.0) 100%)",
                filter: "",
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/3 right-1/3 w-[450px] h-[450px] rounded-full pointer-events-none z-0"
              style={{
                background:
                  "radial-gradient(circle, rgba(255, 165, 0, 0.45) 0%, rgba(241, 172, 19, 0.3) 45%, transparent 70%)",
                filter: "blur(70px)",
              }}
              animate={{
                scale: [1.2, 0.9, 1.2],
                opacity: [0.35, 0.55, 0.35],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1.5,
              }}
            />

            <div className="absolute inset-0 flex items-center h-full w-full justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              {/* Container wrapper for centering */}
              <div className="relative w-full max-w-5xl mx-auto h-full">
                {/* Left Column - Productivity & Live Activity */}
                <motion.div
                  className="absolute left-[10%] top-0 w-[40%] space-y-1"
                  animate={{
                    y: [0, -12, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  {/* Productivity Card */}
                  <motion.div
                    className="w-full bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-gray-100 z-30"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    <Image
                      src="https://framerusercontent.com/images/XdOPGLrBaym6BAmITdwZdTY.png?scale-down-to=512&lossless=1&width=1372&height=960"
                      alt="Productivity Chart"
                      width={1372}
                      height={960}
                      className="w-full md:w-[80%] lg:w-full h-auto"
                    />
                  </motion.div>

                  {/* Live Activity Card */}
                  <motion.div
                    className="w-full bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-gray-100 z-30"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                  >
                    <Image
                      src="https://framerusercontent.com/images/g1PGPWi7e5VbNPip4oFTsRLc8zk.png?scale-down-to=1024&lossless=1&width=1372&height=1384"
                      alt="Live Activity"
                      width={1372}
                      height={1384}
                      className="w-full md:w-[80%] lg:w-full h-auto"
                    />
                  </motion.div>
                </motion.div>

                {/* Right Column - AI Insights & Today's Summary */}
                <motion.div
                  animate={{
                    y: [0, 12, 0], // Subtle floating
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    repeatDelay: 0,
                  }}
                  className="absolute left-[45%] top-[8%] w-[52%] space-y-1"
                >
                  {/* AI Insights Card */}
                  <motion.div
                    className="w-full bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-gray-100 z-30"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  >
                    <Image
                      src="https://framerusercontent.com/images/LfmgjbGlf6N9YfnuOL4yN9xKrc.png?scale-down-to=512&lossless=1&width=1372&height=888"
                      alt="AI Insights"
                      width={1372}
                      height={888}
                      className="w-full h-auto"
                    />
                  </motion.div>

                  {/* Today's Summary Card */}
                  <motion.div
                    className="w-full bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-gray-100 z-30"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{ duration: 0.8, delay: 1 }}
                  >
                    <Image
                      src="https://framerusercontent.com/images/bbu5Sxmy61oK6pXcLX7ZCTiw4.png?scale-down-to=512&lossless=1&width=1372&height=784"
                      alt="Today's Summary"
                      width={1372}
                      height={784}
                      className="w-full md:w-[80%] lg:w-full h-auto"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>

          <HeroText />
        </div>
      </main>
  )
}

export default HeroSection;
