import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import HeroText from "@/components/Home/HeroText";
import HeroSvg from "@/components/Home/hero-svg";
import { TrustStrip } from "./trust-strip";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-white">
      {/* Hero Content Container */}
      <div className="relative h-screen w-full flex flex-col">
        {/* Main Content Area */}
        <div className="flex-1 relative z-10 px-4 sm:px-6 lg:px-12 pt-4 sm:pt-6 lg:pt-12 pb-4 sm:pb-6 lg:pb-12">
          {/* Top Gradient Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="pointer-events-none absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent z-5"
          />

          {/* Content Grid */}
          <div className="relative h-full flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center justify-center max-w-7xl">
            {/* Animated Cards Section */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] order-1 lg:order-2">
              {/* Background SVG */}
              <div
                className="
    absolute
    pointer-events-none
    overflow-visible
    z-0
    [mask-image:radial-gradient(circle,white_60%,transparent_100%)]
    [-webkit-mask-image:radial-gradient(circle,white_60%,transparent_100%)]

    /* default < md → top-right, half visible */
    -left-1/2
    -translate-y-3/5
    top-2/3

    /* only show half on mobile by scaling & shifting */
    scale-75

    /* md+ → original centered placement */
    md:-top-1/2
    md:left-1/2
    md:-translate-x-1/2
    md:right-auto
    md:scale-90

    lg:-top-5/6
    lg:scale-100
  "
              >
                <HeroSvg />
              </div>

              {/* Animated Gradient Blob 1 */}
              <motion.div
                className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full h-[50%] w-[180%] sm:w-[200%] pointer-events-none z-0"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255, 165, 0, 0.45) 0%, rgba(241, 172, 19, 0.3) 45%, transparent 70%)",
                  filter: "blur(60px)",
                }}
                animate={{
                  x: ["0%", "0%", "20%", "20%", "0%"],
                  y: ["0%", "-50%", "-50%", "0%", "0%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Animated Gradient Blob 2 */}
              <motion.div
                className="absolute top-0 left-0 h-[50%] w-full pointer-events-none z-0"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255, 165, 0, 0.45) 0%, rgba(241, 172, 19, 0.3) 45%, transparent 70%)",
                  filter: "blur(60px)",
                }}
                animate={{
                  x: ["0%", "50%", "50%", "0%", "0%"],
                  y: ["0%", "0%", "100%", "100%", "0%"],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Cards Container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative top-10 md:top-0 w-full h-full max-w-[90%] sm:max-w-[95%] lg:max-w-5xl mx-auto">
                  {/* Left Column - Productivity & Live Activity */}
                  <motion.div
                    className="absolute left-[5%] sm:left-[8%] lg:left-[10%] top-0 w-[38%] sm:w-[40%] space-y-1 sm:space-y-2"
                    animate={{
                      y: [0, -12, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {/* Productivity Card */}
                    <motion.div
                      className="w-full bg-white/95 backdrop-blur-xl rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg overflow-hidden border border-gray-100/50 relative z-30"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                    >
                      <Image
                        src="https://framerusercontent.com/images/XdOPGLrBaym6BAmITdwZdTY.png?scale-down-to=512&lossless=1&width=1372&height=960"
                        alt="Productivity Chart"
                        width={1372}
                        height={960}
                        className="w-full h-auto"
                        priority
                      />
                    </motion.div>

                    {/* Live Activity Card */}
                    <motion.div
                      className="w-full bg-white/95 backdrop-blur-xl rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg overflow-hidden border border-gray-100/50 relative z-30"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.9 }}
                    >
                      <Image
                        src="https://framerusercontent.com/images/g1PGPWi7e5VbNPip4oFTsRLc8zk.png?scale-down-to=1024&lossless=1&width=1372&height=1384"
                        alt="Live Activity"
                        width={1372}
                        height={1384}
                        className="w-full h-auto"
                        priority
                      />
                    </motion.div>
                  </motion.div>

                  {/* Right Column - AI Insights & Today's Summary */}
                  <motion.div
                    className="absolute left-[42%] sm:left-[45%] top-[5%] sm:top-[8%] w-[50%] sm:w-[52%] space-y-1 sm:space-y-2"
                    animate={{
                      y: [0, 12, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {/* AI Insights Card */}
                    <motion.div
                      className="w-full bg-white/95 backdrop-blur-xl rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg overflow-hidden border border-gray-100/50 relative z-30"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    >
                      <Image
                        src="https://framerusercontent.com/images/LfmgjbGlf6N9YfnuOL4yN9xKrc.png?scale-down-to=512&lossless=1&width=1372&height=888"
                        alt="AI Insights"
                        width={1372}
                        height={888}
                        className="w-full h-auto"
                        priority
                      />
                    </motion.div>

                    {/* Today's Summary Card */}
                    <motion.div
                      className="w-full bg-white/95 backdrop-blur-xl rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg overflow-hidden border border-gray-100/50 relative z-30"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1 }}
                    >
                      <Image
                        src="https://framerusercontent.com/images/bbu5Sxmy61oK6pXcLX7ZCTiw4.png?scale-down-to=512&lossless=1&width=1372&height=784"
                        alt="Today's Summary"
                        width={1372}
                        height={784}
                        className="w-full h-auto"
                        priority
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Hero Text Section */}
            <div className="order-2 lg:order-1 w-full">
              <HeroText />
            </div>
          </div>
        </div>

        {/* Bottom Banner - Half Visible */}
        <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-2/3">
          <TrustStrip />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
