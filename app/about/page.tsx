"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Navbar from "@/components/Home/Navbar";
import {
  Heart,
  Lightbulb,
  Users,
  Globe,
  Award,
  Zap,
  ArrowRight,
  Linkedin,
  Twitter,
  Quote,
  Sparkles,
  Target,
  Rocket,
  Coffee,
  Code,
  Palette,
  TrendingUp,
} from "lucide-react";
import { Montserrat } from "next/font/google";

const montserrat400 = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});

const values = [
  {
    icon: Heart,
    title: "People First",
    description:
      "We believe in empowering individuals to achieve more together than they ever could alone.",
    color: "from-rose-500 to-pink-500",
    bg: "linear-gradient(135deg, #f43f5e, #ec4899)",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Constantly pushing boundaries to create better ways for freelancers to collaborate and succeed.",
    color: "from-amber-500 to-yellow-500",
    bg: "linear-gradient(135deg, #f59e0b, #eab308)",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Building a supportive ecosystem where every member helps each other grow.",
    color: "from-emerald-500 to-teal-500",
    bg: "linear-gradient(135deg, #10b981, #14b8a6)",
  },
  {
    icon: Globe,
    title: "Global Access",
    description:
      "Breaking down barriers so talent from anywhere can access world-class opportunities.",
    color: "from-blue-500 to-indigo-500",
    bg: "linear-gradient(135deg, #3b82f6, #6366f1)",
  },
];

const founders = [
  {
    name: "Alexandra Chen",
    role: "CEO & Co-Founder",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    bio: "After 15 years at Google building marketplaces, Alex saw firsthand how solo freelancers struggled to compete. She left to build something better.",
    quote:
      "The future of work isn't about individuals competing—it's about teams thriving together.",
    linkedin: "#",
    twitter: "#",
    funFact: "Runs ultramarathons for fun",
    icon: Target,
  },
  {
    name: "Marcus Williams",
    role: "CTO & Co-Founder",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Former Stripe engineer who scaled payment infrastructure to billions of transactions. Marcus believes great teams deserve great tools.",
    quote: "Technology should amplify human connection, not replace it.",
    linkedin: "#",
    twitter: "#",
    funFact: "Collects vintage synthesizers",
    icon: Code,
  },
];

const team = [
  {
    name: "Sofia Rodriguez",
    role: "Head of Design",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    bio: "Award-winning designer from Figma and Airbnb.",
    icon: Palette,
  },
  {
    name: "James Park",
    role: "Head of Operations",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    bio: "Scaled operations at Uber and DoorDash.",
    icon: TrendingUp,
  },
  {
    name: "Emma Watson",
    role: "Head of Community",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "Built communities at Discord and Twitch.",
    icon: Users,
  },
  {
    name: "David Chen",
    role: "Head of Engineering",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Former Netflix engineering lead.",
    icon: Code,
  },
];

const milestones = [
  {
    year: "2020",
    title: "The Spark",
    description: "Two friends, one mission: transform freelancing forever.",
    icon: Sparkles,
  },
  {
    year: "2021",
    title: "First 1K Teams",
    description: "Reached our first major milestone of 1,000 active teams.",
    icon: Users,
  },
  {
    year: "2022",
    title: "$10M Raised",
    description: "Backed by top VCs who believe in our vision.",
    icon: Rocket,
  },
  {
    year: "2023",
    title: "Going Global",
    description: "Expanded to 50+ countries with localized support.",
    icon: Globe,
  },
  {
    year: "2024",
    title: "Enterprise Launch",
    description: "Fortune 500 companies join the HYVE ecosystem.",
    icon: Award,
  },
];

// Animated text reveal component
const AnimatedText = ({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Animated counter component
const AnimatedCounter = ({ value }: { value: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  if (isInView && count === 0) {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
  }

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

// Founder card with flip effect
const FounderCard = ({
  founder,
  index,
}: {
  founder: (typeof founders)[0];
  index: number;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const IconComponent = founder.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="relative h-[600px] cursor-pointer group"
      style={{ perspective: "1000px" }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="h-full bg-white border border-gray-200 rounded-3xl overflow-hidden relative shadow-xl">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/90 z-10" />

            {/* Image */}
            <img
              src={founder.image || "/placeholder.svg"}
              alt={founder.name}
              className="w-full h-full object-cover"
            />

            {/* Content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#f1ac13]/20 backdrop-blur-sm flex items-center justify-center">
                  <IconComponent className="w-5 h-5 text-[#f1ac13]" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#f1ac13]/20 backdrop-blur-sm text-[#f1ac13] text-sm font-medium">
                  Co-Founder
                </span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">
                {founder.name}
              </h3>
              <p className="text-white/80 font-medium">{founder.role}</p>

              {/* Flip hint */}
              <motion.div
                className="mt-4 flex items-center gap-2 text-white/60 text-sm"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <span>Click to learn more</span>
                <ArrowRight size={14} />
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-6 right-6 z-20">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 border border-[#f1ac13]/30 rounded-full flex items-center justify-center"
              >
                <Sparkles className="w-5 h-5 text-[#f1ac13]" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="h-full bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-20 h-20 border border-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-[#f1ac13]/20 flex items-center justify-center mb-6">
                <Quote className="w-8 h-8 text-[#f1ac13]" />
              </div>
              <p className="text-2xl font-medium text-white leading-relaxed mb-6">
                &quot;{founder.quote}&quot;
              </p>
            </div>

            <div className="relative z-10">
              <p className="text-white/70 mb-6 leading-relaxed">
                {founder.bio}
              </p>

              <div className="flex items-center gap-3 mb-6">
                <Coffee className="w-5 h-5 text-[#f1ac13]" />
                <span className="text-white/60 text-sm">
                  Fun fact: {founder.funFact}
                </span>
              </div>

              <div className="flex gap-3">
                <a
                  href={founder.linkedin}
                  onClick={(e) => e.stopPropagation()}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-[#f1ac13] hover:bg-[#f1ac13]/20 transition-all"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={founder.twitter}
                  onClick={(e) => e.stopPropagation()}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-[#f1ac13] hover:bg-[#f1ac13]/20 transition-all"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>

            <motion.div
              className="absolute bottom-4 right-4 text-white/40 text-sm"
              animate={{ x: [-5, 0, -5] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              Click to flip back
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function AboutPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main className={`${montserrat400.className} min-h-screen bg-white overflow-hidden`}>
      <Navbar />

      {/* Hero Section - Immersive */}
      <section
        ref={heroRef}
        className="min-h-screen relative flex items-center justify-center overflow-hidden"
      >
        {/* Animated background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, hsl(var(--primary) / 0.15), transparent 70%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, hsl(var(--primary) / 0.1), transparent 70%)",
            }}
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -40, 0],
              y: [0, 40, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="container mx-auto px-4 relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f1ac13]/10 border border-[#f1ac13]/20 mb-8"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-[#f1ac13]" />
              </motion.div>
              <span className="text-[#f1ac13] font-semibold">Our Story</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-4xl sm:text-5xl lg:text-9xl font-medium text-gray-900 leading-none text-balance mb-6"
            >
              {" "}
              We're Building
              <span className="text-[#f1ac13]">The Future of Work</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Two friends. One vision. A platform that transforms how
              freelancers collaborate, compete, and succeed—together.
            </motion.p>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-16"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-8 h-12 rounded-full border-2 border-gray-300 mx-auto flex items-start justify-center p-2"
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1.5 h-3 rounded-full bg-[#f1ac13]"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section - Floating cards */}
      <section className="py-20 relative -mt-32 z-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
          >
            {[
              { value: 15000, suffix: "+", label: "Freelancers", icon: Users },
              { value: 2500, suffix: "+", label: "Active Teams", icon: Target },
              { value: 50, suffix: "+", label: "Countries", icon: Globe },
              { value: 98, suffix: "%", label: "Satisfaction", icon: Heart },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#f1ac13]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <stat.icon className="w-8 h-8 text-[#f1ac13] mb-4" />
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
                    <AnimatedCounter value={stat.value} />
                    <span className="text-[#f1ac13]">{stat.suffix}</span>
                  </div>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Founders Section - Premium spotlight */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1ac13]/10 text-[#f1ac13] text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Meet the Visionaries
            </span>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              The <span className="text-[#f1ac13]">Founders</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Click on a card to discover their story, vision, and what drives
              them to build HYVE.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {founders.map((founder, idx) => (
              <FounderCard key={founder.name} founder={founder} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section - Split screen with parallax */}
      <section className="py-20 lg:py-32 bg-gray-50 border-y border-gray-200 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1ac13]/10 text-[#f1ac13] text-sm font-semibold mb-6">
                <Target className="w-4 h-4" />
                Our Mission
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Empowering Freelancers to{" "}
                <span className="text-[#f1ac13]">Achieve More</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The gig economy promised freedom but often delivered isolation.
                Solo freelancers struggle to land big projects, lack support
                systems, and face income uncertainty.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                HYVE changes this by enabling freelancers to form powerful
                teams, access enterprise-level projects, and build sustainable
                careers together.
              </p>

              {/* Key benefits */}
              <div className="space-y-4 mb-8">
                {[
                  "Form dynamic teams based on project needs",
                  "Access projects 3x larger than solo gigs",
                  "Build lasting professional relationships",
                ].map((benefit, i) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#f1ac13]/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#f1ac13]" />
                    </div>
                    <span className="text-gray-900">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#f1ac13] text-white font-semibold rounded-full shadow-lg shadow-[#f1ac13]/30 hover:bg-[#d99910] transition-colors"
              >
                Join Our Mission
                <ArrowRight size={20} />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Image */}
              <div className="aspect-square rounded-3xl overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>

              {/* ================= LEFT BOTTOM CARD ================= */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25, duration: 0.45, ease: "easeOut" }}
                className="
      absolute 
      left-4 bottom-4 
      sm:left-[-24px] sm:bottom-[-24px]
      bg-card border border-border rounded-2xl 
      p-6 shadow-card
    "
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Award className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground">4.9/5</p>
                    <p className="text-sm text-muted-foreground">
                      Average Rating
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* ================= RIGHT TOP CARD ================= */}
              <motion.div
                initial={{ opacity: 0, y: -24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.45, ease: "easeOut" }}
                className="absolute right-4 top-4 sm:right-[-24px] sm:top-[-24px] bg-card border border-border rounded-2xl p-4 shadow-card"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl text-emerald-500 bg-emerald-500/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 " />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground">+340%</p>
                    <p className="text-xs text-muted-foreground">Team Growth</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section - Interactive grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1ac13]/10 text-[#f1ac13] text-sm font-semibold mb-6">
              <Heart className="w-4 h-4" />
              What We Believe
            </span>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
              Our Core <span className="text-[#f1ac13]">Values</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              These principles guide every decision we make and every feature we
              build.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white border border-gray-200 rounded-2xl p-8 h-full text-center relative overflow-hidden group shadow-lg hover:shadow-xl transition-all"
                >
                  {/* Hover gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                    style={{ background: value.bg }}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium feel */}
      <section className="py-24 lg:py-36">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-[32px] overflow-hidden"
          >
            {/* ================= BACKGROUND ================= */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f0f] via-[#141414] to-[#0f0f0f]" />

            {/* Brand glow mesh */}
            <motion.div
              className="absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(241,172,19,0.35), transparent 65%)",
              }}
              animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-32 -left-32 w-[460px] h-[460px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(241,172,19,0.25), transparent 65%)",
              }}
              animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* ================= CONTENT ================= */}
            <div className="relative z-10 px-8 py-20 lg:px-24 lg:py-28 text-center">
              {/* Icon */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mx-auto mb-10 w-20 h-20 rounded-3xl flex items-center justify-center
                     bg-[#f1ac13]/15 border border-[#f1ac13]/30 shadow-lg shadow-[#f1ac13]/20"
              >
                <Zap className="w-9 h-9 text-[#f1ac13]" />
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
              >
                Ready to Join the{" "}
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#f1ac13] to-[#ffd36a]">
                  Revolution
                </span>
                ?
              </motion.h2>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="text-white/70 text-lg lg:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
              >
                Be part of the movement transforming how freelancers
                collaborate, scale, and win together.
              </motion.p>

              {/* ================= ACTIONS ================= */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                {/* Primary CTA */}
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="
              inline-flex items-center justify-center gap-3
              px-10 py-5 rounded-full
              bg-[#f1ac13] text-[#0f0f0f]
              font-bold text-base
              shadow-xl shadow-[#f1ac13]/40
              hover:bg-[#d99910]
              transition-all
            "
                >
                  Get Started Free
                  <ArrowRight size={20} />
                </motion.button>

                {/* Secondary CTA */}
                <button
                  className="
              px-10 py-5 rounded-full
              border border-white/25
              text-white font-semibold
              hover:bg-white/10
              transition-all
            "
                >
                  Talk to Sales
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
