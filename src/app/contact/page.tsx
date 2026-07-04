"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  Mail, Phone, MapPin, Clock, Send, MessageSquare,
  HelpCircle, FileQuestion, CreditCard, Sparkles
} from "lucide-react";
import Link from "next/link";
import { useState, FormEvent } from "react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay }
});

const contactInfo = [
  {
    icon: <Mail size={22} className="text-indigo-400" />,
    color: "from-indigo-500/20 to-indigo-500/5",
    border: "border-indigo-500/20",
    title: "Email Us",
    detail: "support@resumeai.com",
    sub: "We'll respond within 24 hours"
  },
  {
    icon: <Phone size={22} className="text-emerald-400" />,
    color: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/20",
    title: "Call Us",
    detail: "+1 (555) 123-4567",
    sub: "Mon – Fri, 9AM – 6PM EST"
  },
  {
    icon: <MapPin size={22} className="text-purple-400" />,
    color: "from-purple-500/20 to-purple-500/5",
    border: "border-purple-500/20",
    title: "Visit Us",
    detail: "123 Innovation Ave",
    sub: "San Francisco, CA 94105"
  },
  {
    icon: <Clock size={22} className="text-amber-400" />,
    color: "from-amber-500/20 to-amber-500/5",
    border: "border-amber-500/20",
    title: "Business Hours",
    detail: "Mon – Fri: 9AM – 6PM",
    sub: "Weekend: Emergency support only"
  }
];

const faqItems = [
  {
    icon: <HelpCircle size={18} className="text-cyan-400" />,
    color: "border-cyan-500/20",
    q: "How do I reset my password?",
    a: "Go to the login page and click \"Forgot Password\". Enter your email address, and we'll send you a secure link to reset your password within minutes."
  },
  {
    icon: <FileQuestion size={18} className="text-indigo-400" />,
    color: "border-indigo-500/20",
    q: "Can I export my resume in different formats?",
    a: "Yes! Pro and Enterprise users can export resumes in PDF, DOCX, and plain text formats. Basic users have access to standard PDF export."
  },
  {
    icon: <CreditCard size={18} className="text-emerald-400" />,
    color: "border-emerald-500/20",
    q: "How do I cancel my subscription?",
    a: "You can cancel anytime from your Account Settings > Billing page. Your access will continue until the end of your current billing cycle."
  },
  {
    icon: <MessageSquare size={18} className="text-purple-400" />,
    color: "border-purple-500/20",
    q: "Is my resume data shared with anyone?",
    a: "Absolutely not. Your resume data is private and encrypted. We never sell, share, or use your personal content for advertising. See our Privacy Policy for details."
  }
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#05060F] text-slate-200 font-[family-name:var(--font-geist-sans)] overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-indigo-600/10 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-600/6 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mx-auto mb-8">
            <MessageSquare className="size-4 text-emerald-400" />
            <span className="text-xs font-semibold text-emerald-300 tracking-wide uppercase">Get In Touch</span>
          </motion.div>

          <motion.h1 {...fadeUp(0.1)} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-indigo-400">Us</span>
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Have a question, feedback, or need help? Our team is here for you.
            Reach out and we&apos;ll get back to you as soon as possible.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((c, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.08)}
                className={`bg-gradient-to-b ${c.color} border ${c.border} rounded-2xl p-7 text-center hover:-translate-y-2 hover:shadow-[0_16px_40px_-12px_rgba(99,102,241,0.2)] transition-all duration-300`}
              >
                <div className="size-12 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center mx-auto mb-5 shadow-inner">
                  {c.icon}
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{c.title}</h3>
                <p className="text-[15px] font-semibold text-slate-200 mb-1">{c.detail}</p>
                <p className="text-xs text-slate-500">{c.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + FAQ */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-5 gap-10">
          {/* Contact Form */}
          <motion.div {...fadeUp(0.1)} className="lg:col-span-3 bg-gradient-to-b from-[#0e1025] to-[#0a0c16] border border-white/8 rounded-3xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="size-11 rounded-xl bg-indigo-600/15 border border-indigo-500/20 flex items-center justify-center">
                <Send size={18} className="text-indigo-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Send Us a Message</h2>
                <p className="text-xs text-slate-500">Fill out the form and we&apos;ll respond within 24 hours</p>
              </div>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <div className="size-20 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mb-6">
                  <Send size={32} className="text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                <p className="text-slate-400 text-sm max-w-sm">Thank you for reaching out. Our team will review your message and get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 block">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 block">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 block">Subject</label>
                  <select
                    required
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#0e1025] text-slate-400">Select a topic</option>
                    <option value="general" className="bg-[#0e1025]">General Inquiry</option>
                    <option value="support" className="bg-[#0e1025]">Technical Support</option>
                    <option value="billing" className="bg-[#0e1025]">Billing & Payments</option>
                    <option value="feedback" className="bg-[#0e1025]">Feedback & Suggestions</option>
                    <option value="partnership" className="bg-[#0e1025]">Partnership & Business</option>
                    <option value="bug" className="bg-[#0e1025]">Report a Bug</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 block">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us how we can help..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-indigo-500/25"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* FAQ */}
          <motion.div {...fadeUp(0.2)} className="lg:col-span-2 space-y-6">
            <div className="mb-2">
              <h2 className="text-xl font-bold text-white mb-1">Frequently Asked Questions</h2>
              <p className="text-sm text-slate-500">Quick answers to common questions</p>
            </div>

            {faqItems.map((faq, i) => (
              <div
                key={i}
                className={`bg-[#0a0c16] border ${faq.color} rounded-2xl p-6 hover:border-white/15 transition-colors`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="size-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center shrink-0 mt-0.5">
                    {faq.icon}
                  </div>
                  <h3 className="text-sm font-bold text-white leading-snug">{faq.q}</h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed ml-11">{faq.a}</p>
              </div>
            ))}

            {/* Extra CTA */}
            <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/20 border border-indigo-500/15 rounded-2xl p-6 text-center">
              <p className="text-sm text-slate-400 mb-4">Can&apos;t find what you&apos;re looking for?</p>
              <a
                href="mailto:support@resumeai.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/8 hover:bg-white/12 border border-white/10 text-white text-sm font-medium rounded-xl transition-colors"
              >
                <Mail size={14} />
                Email Support Directly
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/5 px-6">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-indigo-600 flex items-center justify-center"><Sparkles size={16} className="text-white" /></div>
            <span className="font-bold text-xl text-white">ResumeAI</span>
          </div>
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} ResumeAI. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/contact" className="text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
