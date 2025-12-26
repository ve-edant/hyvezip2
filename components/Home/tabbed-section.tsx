"use client"

import { useState } from "react"
import { Users, Briefcase, FolderOpen, Zap, ArrowRight, Building2, Shield, TrendingUp, Clock } from "lucide-react"
import { FeatureCard } from "./FeatureCard"
import { ProfileCard } from "./ProfileCard"
import { CompanyCard } from "./CompanyCard"

const tabs = [
  { id: "freelancers", label: "For Freelancers" },
  { id: "companies", label: "For Companies" },
]

const freelancerFeatures = [
  {
    icon: Users,
    title: "Build or Join Teams",
    description: "Collaborate with trusted peers and tackle bigger challenges together.",
  },
  {
    icon: Briefcase,
    title: "Work on Large Projects",
    description: "Access high-value, multi-skill work that solo freelancers can't reach.",
  },
  {
    icon: FolderOpen,
    title: "Showcase Real Work",
    description: "Build your portfolio with verified contributions from real team projects.",
  },
  {
    icon: Zap,
    title: "Stay Connected",
    description: "Ongoing opportunities and network growth keep your career thriving.",
  },
]

const companyFeatures = [
  {
    icon: Shield,
    title: "Vetted Team Talent",
    description: "Access pre-formed teams with proven track records and verified skills.",
  },
  {
    icon: TrendingUp,
    title: "Scale Instantly",
    description: "Spin up entire teams in days, not months. Built for enterprise speed.",
  },
  {
    icon: Clock,
    title: "Faster Delivery",
    description: "Teams that already work together deliver 3x faster than assembled groups.",
  },
  {
    icon: Building2,
    title: "Enterprise Ready",
    description: "SOC2 compliant, NDAs handled, and dedicated account management.",
  },
]

export const TabbedSection = () => {
  const [activeTab, setActiveTab] = useState("freelancers")
  const isFreelancer = activeTab === "freelancers"

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-1/2 bg-gradient-to-bl from-yellow-200 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 rounded-tr-full w-full md:w-1/3 h-1/3 bg-gradient-to-tr from-yellow-200 via-transparent to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="flex flex-col items-center mb-12 sm:mb-16">
          <div className="mb-6 sm:mb-8 animate-fade-in-down">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-yellow-600 to-amber-500 bg-clip-text text-transparent">HYVE</span>
            </h1>
          </div>

          <div className="w-full flex justify-center animate-fade-in-up animate-delay-100">
            <div className="inline-flex items-center gap-1 p-1 bg-gray-100 rounded-full">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base font-medium rounded-full transition-all duration-200 ${
                    activeTab === tab.id ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2   items-center max-w-7xl mx-auto">
          <div className="order-2 lg:order-1">
            <div className="mb-4 sm:mb-6 animate-fade-in-up animate-delay-200">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900 text-balance">
                Grow{" "}
                <span className="bg-gradient-to-r from-yellow-600 to-amber-500 bg-clip-text text-transparent">
                  Together.
                </span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 max-w-lg leading-relaxed animate-fade-in-up animate-delay-300">
              {isFreelancer
                ? "Move beyond solo gigs. Join forces with talented peers to tackle ambitious projects, earn more, and build a career that compounds."
                : "Stop assembling. Start deploying. Access ready-to-work teams that deliver enterprise results without enterprise overhead."}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
              {(isFreelancer ? freelancerFeatures : companyFeatures).map((feature, idx) => (
                <div key={feature.title} className={`animate-fade-in-up animate-delay-${300 + idx * 100}`}>
                  <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} />
                </div>
              ))}
            </div>

            <div className="flex justify-start animate-fade-in-up animate-delay-600">
              <button className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white text-sm sm:text-base font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <span className="relative z-10">{isFreelancer ? "Join a Team" : "Find Your Team"}</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="w-full max-w-md animate-scale-in animate-delay-200">
              {isFreelancer ? <ProfileCard /> : <CompanyCard />}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
