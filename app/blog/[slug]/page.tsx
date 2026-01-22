"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Heart, Share2, Bookmark, MessageCircle } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { Montserrat } from "next/font/google";
import { blogPosts, relatedPosts } from "@/lib/BlogData";
import { useEffect, useState } from "react";

const montserrat400 = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});

const BlogPost = () => {
  const params = useParams();
  const slug = params?.slug as string;
  const post = blogPosts[slug as keyof typeof blogPosts];

  // Progress bar animation
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (!post) {
    return (
      <div className={`min-h-screen bg-background ${montserrat400.className}`}>
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="text-[#f1ac13] hover:underline">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  const filteredRelated = relatedPosts.filter(p => p.slug !== slug).slice(0, 2);

  return (
    <div className={`min-h-screen bg-background ${montserrat400.className}`}>
      {/* Reading Progress Bar - Fixed at top, directly below navbar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-[#f1ac13] border-b-2 border-[#f1ac13] origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-[#f1ac13] transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block px-4 py-1.5 bg-[#f1ac13]/10 text-[#f1ac13] text-sm font-medium rounded-full mb-4">
                {post.category}
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-3">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-foreground">{post.author.name}</p>
                    <p className="text-sm">{post.author.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <motion.section 
        className="pb-12"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden">
            <img 
              src={post.heroImage} 
              alt={post.title}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          </div>
        </div>
      </motion.section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12 max-w-6xl mx-auto">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="prose prose-lg max-w-none"
            >
              {post.content.map((block, index) => {
                if (block.type === "paragraph") {
                  return (
                    <p key={index} className="text-foreground/80 leading-relaxed mb-6 text-lg">
                      {block.text}
                    </p>
                  );
                }
                if (block.type === "heading") {
                  return (
                    <h2 key={index} className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6">
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "quote") {
                  return (
                    <blockquote key={index} className="border-l-4 border-[#f1ac13] pl-6 py-4 my-8 bg-[#f1ac13]/5 rounded-r-xl">
                      <p className="text-xl italic text-foreground mb-2">&ldquo;{block.text}&rdquo;</p>
                      <cite className="text-muted-foreground not-italic">— {block.author}</cite>
                    </blockquote>
                  );
                }
                if (block.type === "list") {
                  return (
                    <ul key={index} className="space-y-3 my-6">
                      {block.items?.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-foreground/80">
                          <span className="w-2 h-2 rounded-full bg-[#f1ac13] mt-2.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return null;
              })}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-border">
                {post.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm hover:bg-[#f1ac13]/10 hover:text-[#f1ac13] transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Share & Actions */}
              <div className="flex items-center justify-between mt-8 pt-8 border-t border-border">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-muted-foreground hover:text-[#f1ac13] transition-colors">
                    <Heart className="w-5 h-5" />
                    <span>124</span>
                  </button>
                  <button className="flex items-center gap-2 text-muted-foreground hover:text-[#f1ac13] transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span>18</span>
                  </button>
                </div>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-muted-foreground hover:text-[#f1ac13] transition-colors">
                    <Bookmark className="w-5 h-5" />
                    Save
                  </button>
                  <button className="flex items-center gap-2 text-muted-foreground hover:text-[#f1ac13] transition-colors">
                    <Share2 className="w-5 h-5" />
                    Share
                  </button>
                </div>
              </div>
            </motion.article>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Author Card */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-4">About the Author</h3>
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-foreground">{post.author.name}</p>
                    <p className="text-sm text-muted-foreground">{post.author.role}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Passionate about helping freelancers build sustainable careers through collaboration and community.
                </p>
                <button className="w-full py-2 bg-[#f1ac13] text-white rounded-lg hover:bg-[#d99410] transition-colors text-sm font-medium">
                  Follow
                </button>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-[#f1ac13]/10 to-[#f1ac13]/5 rounded-2xl p-6 border border-[#f1ac13]/20">
                <h3 className="font-semibold text-foreground mb-2">Subscribe to Newsletter</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get the latest insights delivered to your inbox weekly.
                </p>
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-[#f1ac13]"
                />
                <button className="w-full py-2 bg-[#f1ac13] text-white rounded-lg hover:bg-[#d99410] transition-colors text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {filteredRelated.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <TiltCard className="group">
                      <div className="relative rounded-2xl overflow-hidden">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <span className="text-[#f1ac13] text-sm font-medium">{relatedPost.category}</span>
                          <h3 className="text-xl font-bold text-foreground mt-1 group-hover:text-[#f1ac13] transition-colors">
                            {relatedPost.title}
                          </h3>
                        </div>
                      </div>
                    </TiltCard>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;