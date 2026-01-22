"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, User } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { Montserrat } from "next/font/google";

const montserrat400 = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});

const featuredPost = {
  slug: "future-of-freelancing",
  title: "The Future of Freelancing: Why Teams Are the New Solo",
  excerpt: "The freelance economy has undergone a remarkable transformation. Discover how collaborative teams are reshaping the future of independent work.",
  image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop",
  author: { 
    name: "Sarah Chen", 
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face" 
  },
  date: "Dec 20, 2024",
  readTime: "8 min read",
  category: "Industry Insights",
};

const posts = [
  { slug: "building-portfolio", title: "5 Tips for Building a High-Performing Remote Team", excerpt: "Learn the secrets to assembling and managing distributed teams that deliver exceptional results.", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop", author: "Marcus Williams", date: "Dec 18, 2024", readTime: "5 min", category: "Team Building" },
  { slug: "pricing-strategies", title: "How to Price Your Services as a Freelance Team", excerpt: "A comprehensive guide to setting competitive rates that reflect your team's true value.", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop", author: "Sofia Rodriguez", date: "Dec 15, 2024", readTime: "6 min", category: "Business" },
  { slug: "future-of-freelancing", title: "Client Communication: Best Practices for Teams", excerpt: "Master the art of keeping clients informed and happy when working as a collaborative unit.", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop", author: "James Park", date: "Dec 12, 2024", readTime: "4 min", category: "Client Relations" },
  { slug: "building-portfolio", title: "The Ultimate Guide to Project Management for Freelancers", excerpt: "Tools, techniques, and workflows that keep your team projects on track and on budget.", image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&h=400&fit=crop", author: "Alexandra Chen", date: "Dec 10, 2024", readTime: "10 min", category: "Productivity" },
  { slug: "pricing-strategies", title: "Building Your Portfolio as a Team", excerpt: "Showcase collaborative work effectively to attract high-value enterprise clients.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop", author: "Marcus Williams", date: "Dec 8, 2024", readTime: "5 min", category: "Marketing" },
  { slug: "future-of-freelancing", title: "Legal Essentials: Contracts for Freelance Teams", excerpt: "Protect your team with proper agreements, NDAs, and revenue-sharing contracts.", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop", author: "Sofia Rodriguez", date: "Dec 5, 2024", readTime: "7 min", category: "Legal" },
];

const categories = ["All", "Industry Insights", "Career Growth", "Business Tips"];

const Blog = () => {
  return (
    <main className={`min-h-screen bg-background ${montserrat400.className}`}>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#f1ac13]/10 text-[#f1ac13] text-sm font-semibold mb-6">
              Blog
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Insights & <span className="bg-gradient-to-r from-[#f1ac13] to-[#d99410] bg-clip-text text-transparent">Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Tips, trends, and success stories from the world of team-based freelancing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat, idx) => (
              <motion.button 
                key={cat} 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.05 * idx }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  idx === 0 
                    ? "bg-[#f1ac13] text-white" 
                    : "bg-muted text-muted-foreground hover:bg-[#f1ac13]/10 hover:text-[#f1ac13]"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
          >
            <Link href={`/blog/${featuredPost.slug}`}>
              <TiltCard>
                <div className="bg-card border border-border rounded-3xl overflow-hidden hover:border-[#f1ac13]/30 transition-colors">
                  <div className="grid lg:grid-cols-2">
                    <div className="aspect-video lg:aspect-auto overflow-hidden">
                      <img 
                        src={featuredPost.image} 
                        alt={featuredPost.title} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#f1ac13]/10 text-[#f1ac13] text-xs font-semibold mb-4 w-fit">
                        {featuredPost.category}
                      </span>
                      <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 hover:text-[#f1ac13] transition-colors cursor-pointer">
                        {featuredPost.title}
                      </h2>
                      <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                      <div className="flex items-center gap-4">
                        <img 
                          src={featuredPost.author.avatar} 
                          alt={featuredPost.author.name} 
                          className="w-10 h-10 rounded-full object-cover" 
                        />
                        <div>
                          <p className="font-medium text-foreground">{featuredPost.author.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {featuredPost.date} · {featuredPost.readTime}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <Link href={`/blog/${post.slug}`} key={post.slug}>
                <motion.article 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: 0.1 * (idx % 3) }} 
                  whileHover={{ y: -5 }}
                  className="bg-card border border-border rounded-2xl overflow-hidden group cursor-pointer hover:border-[#f1ac13]/30 transition-all h-full"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#f1ac13]/10 text-[#f1ac13] text-xs font-semibold mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-[#f1ac13] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User size={14} />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }} 
            className="text-center mt-12"
          >
            <button className="px-6 py-3 bg-muted text-foreground font-semibold rounded-xl hover:bg-[#f1ac13] hover:text-white transition-colors inline-flex items-center gap-2">
              Load More Articles
              <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Blog;