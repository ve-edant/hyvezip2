"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Navbar from "@/components/Home/Navbar"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import { Montserrat } from "next/font/google";

const montserrat400 = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});


function Loading() {
  return null
}

const categories = [
  {
    name: "Getting Started",
    faqs: [
      {
        q: "What is HYVE?",
        a: "HYVE is a team-based freelancing platform that helps freelancers form or join teams to tackle larger projects, earn more, and grow their careers together. Companies can also hire pre-formed, vetted teams for faster, more reliable project delivery.",
      },
      {
        q: "How do I create an account?",
        a: "Simply click 'Get Started' on our homepage, fill in your details, and verify your email. You can then complete your profile and start exploring teams or creating your own.",
      },
      {
        q: "Is HYVE free to use?",
        a: "Yes! Our Starter plan is completely free and lets you join up to 2 teams. We also offer Professional and Business plans with additional features for serious freelancers and teams.",
      },
      {
        q: "How do I join a team?",
        a: "Browse available teams on the Teams page, find ones that match your skills and interests, and send a request to join. Team leads will review your profile and accept or decline.",
      },
    ],
  },
  {
    name: "For Freelancers",
    faqs: [
      {
        q: "How do I get paid?",
        a: "Payments are handled securely through our platform. Once a project milestone is completed and approved, funds are released to your team. Team leads can distribute payments to members based on agreed splits.",
      },
      {
        q: "Can I work on multiple teams?",
        a: "Absolutely! You can be part of multiple teams simultaneously. Our Professional and Business plans offer unlimited team memberships.",
      },
      {
        q: "How do I create my own team?",
        a: "Go to your dashboard, click 'Create Team', set up your team profile, define roles needed, and start inviting members or accepting applications.",
      },
      {
        q: "What skills are in demand?",
        a: "Development, design, writing, marketing, and project management are always in demand. Check our Jobs board for current opportunities and trending skills.",
      },
    ],
  },
  {
    name: "For Companies",
    faqs: [
      {
        q: "How do I hire a team?",
        a: "Post your project requirements on our platform, browse vetted teams with relevant experience, or let our AI match you with the best teams for your needs.",
      },
      {
        q: "Are teams vetted?",
        a: "Yes! All teams go through our verification process. We check member credentials, review past work, and ensure teams meet our quality standards.",
      },
      {
        q: "What if I'm not satisfied with the work?",
        a: "We have a satisfaction guarantee. If issues arise, our support team mediates to find a resolution. Payments are held in escrow until work is approved.",
      },
      {
        q: "Do you offer enterprise solutions?",
        a: "Yes! We offer custom enterprise plans with dedicated account management, advanced security features, SSO, and volume discounts. Contact our sales team to learn more.",
      },
    ],
  },
  {
    name: "Billing & Payments",
    faqs: [
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards, PayPal, and bank transfers. For enterprise clients, we also offer invoicing with NET 30 terms.",
      },
      {
        q: "Can I get a refund?",
        a: "Subscription fees are refundable within 14 days of purchase. Project payments follow our escrow and milestone-based release system.",
      },
      {
        q: "How do I upgrade my plan?",
        a: "Go to Settings > Billing, select your new plan, and complete the payment. Upgrades take effect immediately.",
      },
      {
        q: "Do you charge transaction fees?",
        a: "We charge a small platform fee on completed projects (5-10% depending on your plan). There are no fees for receiving payments.",
      },
    ],
  },
]

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const searchParams = useSearchParams();

  const filteredCategories = categories.map(category => ({
    ...category,
    faqs: category.faqs.filter(
      faq =>
        faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(category => category.faqs.length > 0)

  return (
    <main className={`${montserrat400.className} min-h-screen bg-white`}>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#f1ac13]/10 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#f1ac13]/10 text-[#f1ac13] text-sm font-semibold mb-6">
              Help Center
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-[#f1ac13] to-[#d99910] bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Everything you need to know about HYVE. Can't find an answer? Chat with our team.
            </p>

            {/* Search */}
            <div className="relative max-w-2xl mx-auto">
              <div className="flex items-center h-16 rounded-2xl border-2 border-gray-200 bg-white shadow-lg hover:border-gray-300 hover:shadow-xl focus-within:border-[#f1ac13] focus-within:shadow-2xl focus-within:shadow-[#f1ac13]/20 transition-all duration-300 overflow-hidden">
                {/* Search icon container */}
                <div className="flex items-center justify-center w-14 h-full flex-shrink-0">
                  <Search className="w-5 h-5 text-gray-400" />
                </div>
                
                {/* Input field */}
                <input
                  type="text"
                  placeholder="Search by keyword, topic, or question..."
                  className="flex-1 h-full text-lg bg-transparent border-none outline-none placeholder:text-gray-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                
                {/* Clear button container */}
                <div className="flex items-center justify-center w-14 h-full flex-shrink-0">
                  {searchQuery ? (
                    <motion.button
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSearchQuery("")}
                      className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#f1ac13]/20 flex items-center justify-center text-gray-500 hover:text-[#f1ac13] transition-all border border-gray-200 hover:border-[#f1ac13]/30"
                    >
                      <span className="text-sm font-bold">x</span>
                    </motion.button>
                  ) : (
                    <kbd className="hidden sm:inline-block px-2 py-1 text-xs font-semibold text-gray-400 bg-gray-100 border border-gray-200 rounded">
                      /
                    </kbd>
                  )}
                </div>
              </div>
              
              {/* Results count */}
              {searchQuery && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center justify-center gap-2"
                >
                  <span className="text-sm font-medium text-gray-600">
                    {filteredCategories.reduce((acc, cat) => acc + cat.faqs.length, 0)}{" "}
                    <span className="text-[#f1ac13]">
                      {filteredCategories.reduce((acc, cat) => acc + cat.faqs.length, 0) === 1 ? "result" : "results"}
                    </span>{" "}
                    found
                  </span>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <Suspense fallback={<Loading />}>
              {filteredCategories.map((category, catIdx) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * catIdx }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.name}</h2>
                  <Accordion type="single" collapsible className="space-y-3">
                    {category.faqs.map((faq, faqIdx) => (
                      <AccordionItem
                        key={faqIdx}
                        value={`${category.name}-${faqIdx}`}
                        className="bg-white border border-gray-200 rounded-xl px-6 data-[state=open]:border-[#f1ac13]/30 data-[state=open]:shadow-lg data-[state=open]:shadow-[#f1ac13]/5 transition-all"
                      >
                        <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-[#f1ac13] hover:no-underline py-5">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 pb-5 leading-relaxed">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              ))}
            </Suspense>

            {filteredCategories.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-gray-500 text-lg">No questions found matching "{searchQuery}"</p>
                <Button
                  variant="link"
                  className="text-[#f1ac13] mt-2"
                  onClick={() => setSearchQuery("")}
                >
                  Clear search
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-16 text-center max-w-4xl mx-auto relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#f1ac13]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#f1ac13]/5 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-[#f1ac13]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-[#f1ac13]" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Still Have Questions?
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-[#f1ac13] hover:bg-[#d99910] text-white gap-2 shadow-lg shadow-[#f1ac13]/30"
                >
                  Contact Support
                  <ArrowRight size={18} />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  Join Community
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              2024 HYVE. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-gray-500 hover:text-[#f1ac13] text-sm transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-500 hover:text-[#f1ac13] text-sm transition-colors">
                About
              </Link>
              <Link href="/faq" className="text-gray-500 hover:text-[#f1ac13] text-sm transition-colors">
                FAQs
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
