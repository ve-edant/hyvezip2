"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, MessageSquare, Clock, ArrowRight } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { Montserrat } from "next/font/google";

const montserrat400 = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});

// TypeScript Interfaces
interface ContactInfo {
  icon: React.ElementType;
  title: string;
  description: string;
  value: string;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

// Contact Information Data
const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Our team will respond within 24 hours",
    value: "hello@hyve.com",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Come say hello at our HQ",
    value: "123 Innovation St, San Francisco, CA",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri from 9am to 6pm PST",
    value: "+1 (555) 123-4567",
  },
];

const SupportPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setShowSuccess(true);
    setFormData({ name: "", email: "", company: "", subject: "", message: "" });
    setIsSubmitting(false);

    // Hide success message after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className={`${montserrat400.className} min-h-screen bg-white dark:bg-gray-950`}>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#f1ac13]/10 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#f1ac13]/10 text-[#f1ac13] text-sm font-semibold mb-6">
              Get in Touch
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Let's{" "}
              <span className="bg-gradient-to-r from-[#f1ac13] to-[#d99410] bg-clip-text text-transparent">
                Connect
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center flex-row gap-6 max-w-5xl mx-auto">
            {contactInfo.map((info, idx) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx, duration: 0.5 }}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 text-center hover:border-[#f1ac13]/30 hover:shadow-lg hover:shadow-[#f1ac13]/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#f1ac13]/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-[#f1ac13]" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  {info.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {info.description}
                </p>
                <p className="text-sm font-medium text-[#f1ac13]">{info.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Toast */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg"
          >
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span className="font-medium">Message sent successfully!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Form Section */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#f1ac13]/10 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-[#f1ac13]" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      Send a Message
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Fill out the form below
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2 block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f1ac13] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2 block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f1ac13] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2 block">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Your company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f1ac13] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2 block">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        required
                        placeholder="How can we help?"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f1ac13] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2 block">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      placeholder="Tell us more about your project or inquiry..."
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f1ac13] focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-gradient-to-r from-[#f1ac13] to-[#d99410] text-white rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#f1ac13]/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Info Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                We're Here to{" "}
                <span className="bg-gradient-to-r from-[#f1ac13] to-[#d99410] bg-clip-text text-transparent">
                  Help
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
                Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#f1ac13]/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#f1ac13]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      Quick Response
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      We typically respond within 24 hours during business days.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#f1ac13]/10 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-[#f1ac13]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      Live Chat
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Need faster help? Chat with our support team in real-time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Looking for Enterprise?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Get custom solutions for your organization with dedicated support.
                </p>
                <button className="px-6 py-2.5 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 rounded-xl font-medium flex items-center gap-2 hover:border-[#f1ac13] hover:text-[#f1ac13] transition-all">
                  Talk to Sales
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};


export default SupportPage;