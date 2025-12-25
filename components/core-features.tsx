"use client"

import { motion } from "framer-motion"
import { Users, Briefcase, Shield, Folder, TrendingUp, Star } from "lucide-react"
import Image from "next/image"

export function CoreFeatures() {
  const teamMembers = [
    { id: 1, name: "User 1", image: "/placeholder.svg?height=40&width=40" },
    { id: 2, name: "User 2", image: "/placeholder.svg?height=40&width=40" },
    { id: 3, name: "User 3", image: "/placeholder.svg?height=40&width=40" },
    { id: 4, name: "User 4", image: "/placeholder.svg?height=40&width=40" },
  ]

  return (
    <section className="container mx-auto px-4 py-16 sm:py-20 lg:py-24">
      <div className="text-center mb-16">
        <motion.span
          className="inline-block px-4 py-1.5 rounded-full bg-accent text-sm font-medium text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Core Features
        </motion.span>
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex flex-wrap justify-center gap-2">
            {["Everything", "You", "Need", "to"].map((word, i) => (
              <span key={i} className="inline-block">
                {word}
              </span>
            ))}
            <span className="inline-block bg-gradient-to-r from-[#f1ac13] to-[#f1ac13] bg-clip-text text-transparent">
              Thrive
            </span>
          </div>
        </motion.h2>
        <motion.p
          className="text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          HYVE provides all the tools and structure for teams to collaborate effectively and get paid fairly.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Left side - 2x2 grid */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Build or Join Teams */}
          <motion.div
            className="group relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="h-full p-6 rounded-2xl border border-border bg-card transition-all duration-300 hover:border-[#f1ac13]/50 hover:shadow-lg hover:shadow-[#f1ac13]/5 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#fff4e5] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <Users className="w-6 h-6 text-[#f1ac13]" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Build or Join Teams</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Create your own team with handpicked talent or discover teams that need your skills.
              </p>
            </div>
          </motion.div>

          {/* Work on Large Projects */}
          <motion.div
            className="group relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="h-full p-6 rounded-2xl border border-border bg-card transition-all duration-300 hover:border-[#f1ac13]/50 hover:shadow-lg hover:shadow-[#f1ac13]/5 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#fff4e5] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <Briefcase className="w-6 h-6 text-[#f1ac13]" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Work on Large Projects</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Access enterprise-level projects that require diverse skills — impossible for solo freelancers.
              </p>
            </div>
          </motion.div>

          {/* Secure Milestone Payments */}
          <motion.div
            className="group relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="h-full p-6 rounded-2xl border border-border bg-card transition-all duration-300 hover:border-[#f1ac13]/50 hover:shadow-lg hover:shadow-[#f1ac13]/5 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#fff4e5] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <Shield className="w-6 h-6 text-[#f1ac13]" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Secure Milestone Payments</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Funds held in escrow and released as milestones are completed. No payment anxiety.
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Milestone Progress</span>
                  <span className="text-[#f1ac13] font-semibold">75%</span>
                </div>
                <div className="h-2 bg-[#fff4e5] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#f1ac13] to-[#d99910] w-3/4 rounded-full transition-all duration-500" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Portfolio with Real Work */}
          <motion.div
            className="group relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="h-full p-6 rounded-2xl border border-border bg-card transition-all duration-300 hover:border-[#f1ac13]/50 hover:shadow-lg hover:shadow-[#f1ac13]/5 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <Folder className="w-6 h-6 text-[#f1ac13]" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Portfolio with Real Work</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Showcase collaborative projects and verified client reviews.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right side - Featured card */}
        <motion.div
          className="group relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="h-full p-6 rounded-2xl border border-border bg-gradient-to-br from-card via-card to-[#f1ac13]/5 transition-all duration-300 hover:border-[#f1ac13]/50 hover:shadow-xl hover:shadow-[#f1ac13]/10 hover:-translate-y-1 relative overflow-hidden">
            {/* Decorative gradient circle */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#f1ac13]/20 to-transparent rounded-full blur-2xl -mr-16 -mt-16" />

            {/* Top Rated Badge */}
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-4 h-4 text-[#f1ac13] fill-[#f1ac13]" />
              <span className="text-sm font-medium text-[#f1ac13]">Top Rated Team</span>
            </div>

            {/* Team Name */}
            <h3 className="text-2xl font-bold text-foreground mb-2">PixelCraft Studio</h3>
            <p className="text-sm text-muted-foreground mb-6">Full-stack design & development</p>

            {/* Team Members */}
            <div className="mb-6">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2 block">
                Team Members
              </span>
              <div className="flex -space-x-2">
                {teamMembers.map((member, index) => (
                  <div
                    key={member.id}
                    className="relative w-10 h-10 rounded-full border-2 border-card overflow-hidden transition-transform duration-300 hover:scale-110 hover:z-10"
                    style={{ zIndex: teamMembers.length - index }}
                  >
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide block mb-1">
                  Total Earned
                </span>
                <span className="text-2xl font-bold text-foreground">₹24L+</span>
              </div>
              <div>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide block mb-1">
                  Projects
                </span>
                <span className="text-2xl font-bold text-foreground">47+</span>
              </div>
            </div>

            {/* Growth indicator */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#f1ac13]/10 border border-[#f1ac13]/20">
              <TrendingUp className="w-4 h-4 text-[#f1ac13]" />
              <span className="text-sm font-medium text-[#f1ac13]">+32%</span>
              <span className="text-sm text-muted-foreground">earnings this month</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
