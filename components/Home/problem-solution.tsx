"use client"

import { motion } from "framer-motion"
import { Frown, Zap } from "lucide-react"

export function ProblemSolution() {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="space-y-6">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fef3e2] text-[#f1ac13] text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Zap className="w-4 h-4" />
              Problem & Solution
            </motion.div>

            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-balance"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Work breaks when <span className="text-[#f1ac13]">teams aren't connected</span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Communication, ownership, and payments get messy
            </motion.p>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Problem Section */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-gray-900">Problem</h3>
              <div className="space-y-3">
                {[
                  "Freelancers work alone and struggle to scale",
                  "Clients juggle multiple freelancers with no accountability",
                  "Payments get delayed or disputed",
                  "Work is scattered across too many tools",
                ].map((problem, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#fef3e2] flex items-center justify-center mt-0.5">
                      <Frown className="w-4 h-4 text-[#f1ac13]" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{problem}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Divider */}
            <div className="flex items-center justify-center py-2">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-400"
                >
                  <path
                    d="M10 4V16M10 16L14 12M10 16L6 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Solution Section */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-gray-900">Solution</h3>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 flex items-center justify-center">
                  <Zap className="w-10 h-10 text-[#f1ac13]" />
                </div>
                <p className="text-gray-700 leading-relaxed pt-2">
                  HYVE brings{" "}
                  <span className="font-semibold">freelancers, teams, clients, communication, and payments</span> into
                  one platform — so projects move faster and trust stays intact.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
