"use client"

import { motion } from "framer-motion"

export function Companies() {
  const companies = [
    { name: "Stripe", logo: "https://cdn.brandfetch.io/stripe.com/w/400/h/400" },
    { name: "Notion", logo: "https://cdn.brandfetch.io/notion.so/w/400/h/400" },
    { name: "Slack", logo: "https://cdn.brandfetch.io/slack.com/w/400/h/400" },
    { name: "Figma", logo: "https://cdn.brandfetch.io/figma.com/w/400/h/400" },
    { name: "Webflow", logo: "https://cdn.brandfetch.io/webflow.com/w/400/h/400" },
    { name: "Framer", logo: "https://cdn.brandfetch.io/framer.com/w/400/h/400" },
  ]

  return (
    <section className="relative bg-gray-50 py-12 px-6 lg:pb-12 sm:pb-16 lg:py-20 pt-12 lg:pt-28 ">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-10 lg:gap-12 items-center mb-10 sm:mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.6, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <img
                src={company.logo || "/placeholder.svg"}
                alt={`${company.name} logo`}
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm sm:text-base text-gray-600 font-medium">Trusted by leading teams</p>
        </motion.div>
      </div>
    </section>
  )
}
