"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Shield, Eye, Cookie, Lock, Globe, Scale, UserCheck, Sparkles } from "lucide-react";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay }
});

const sections = [
  {
    icon: <Eye size={20} className="text-cyan-400" />,
    color: "from-cyan-500/20 to-cyan-500/5",
    border: "border-cyan-500/20",
    title: "Information We Collect",
    content: [
      "Personal information you provide when creating an account (name, email address, phone number).",
      "Resume content including work history, education, skills, and professional summary.",
      "Usage data such as pages visited, features used, time spent, and interaction patterns.",
      "Device and browser information including IP address, browser type, operating system, and device identifiers.",
      "Payment information processed securely through our third-party payment provider (we do not store card details)."
    ]
  },
  {
    icon: <Shield size={20} className="text-indigo-400" />,
    color: "from-indigo-500/20 to-indigo-500/5",
    border: "border-indigo-500/20",
    title: "How We Use Your Information",
    content: [
      "To provide, maintain, and improve our AI-powered resume building services.",
      "To personalize your experience and deliver relevant content and recommendations.",
      "To process transactions and send related information, including confirmations and invoices.",
      "To send technical notices, updates, security alerts, and support messages.",
      "To train and improve our AI models — your resume data is anonymized before any model training.",
      "To respond to your comments, questions, and provide customer service."
    ]
  },
  {
    icon: <Cookie size={20} className="text-amber-400" />,
    color: "from-amber-500/20 to-amber-500/5",
    border: "border-amber-500/20",
    title: "Cookies & Tracking",
    content: [
      "Essential cookies required for the application to function properly (authentication, preferences).",
      "Analytics cookies that help us understand how users interact with our platform (Google Analytics).",
      "Marketing cookies used to deliver relevant advertisements and measure campaign effectiveness.",
      "You can manage cookie preferences through your browser settings at any time.",
      "We use local storage to save your in-progress resume data for a seamless editing experience."
    ]
  },
  {
    icon: <Lock size={20} className="text-emerald-400" />,
    color: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/20",
    title: "Data Security",
    content: [
      "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption.",
      "We implement strict access controls and audit logs for all internal systems.",
      "Regular security assessments and penetration testing are conducted by third-party firms.",
      "Your resume data is stored in SOC 2 Type II compliant data centers.",
      "We maintain a comprehensive incident response plan and will notify affected users within 72 hours of any breach."
    ]
  },
  {
    icon: <Globe size={20} className="text-purple-400" />,
    color: "from-purple-500/20 to-purple-500/5",
    border: "border-purple-500/20",
    title: "Third-Party Services",
    content: [
      "OpenAI — powers our AI resume writer and content suggestions (data is not used to train their models).",
      "Stripe — processes all payment transactions securely with PCI DSS compliance.",
      "Google Analytics — provides anonymized usage analytics to improve our services.",
      "AWS — hosts our infrastructure with enterprise-grade security and reliability.",
      "We do not sell, rent, or share your personal information with third parties for marketing purposes."
    ]
  },
  {
    icon: <Scale size={20} className="text-rose-400" />,
    color: "from-rose-500/20 to-rose-500/5",
    border: "border-rose-500/20",
    title: "Your Rights (GDPR & CCPA)",
    content: [
      "Right to access — request a copy of all personal data we hold about you.",
      "Right to rectification — correct any inaccurate or incomplete personal data.",
      "Right to erasure — request deletion of your account and all associated data.",
      "Right to portability — receive your data in a structured, machine-readable format.",
      "Right to opt out — withdraw consent for data processing at any time.",
      "To exercise any of these rights, contact us at privacy@resumeai.com."
    ]
  }
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#05060F] text-slate-200 font-[family-name:var(--font-geist-sans)] overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-purple-600/8 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mx-auto mb-8">
            <Shield className="size-4 text-indigo-400" />
            <span className="text-xs font-semibold text-indigo-300 tracking-wide uppercase">Your Privacy Matters</span>
          </motion.div>

          <motion.h1 {...fadeUp(0.1)} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400">Policy</span>
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-4">
            We are committed to protecting your personal information and being transparent about what data we collect and how we use it.
          </motion.p>

          <motion.p {...fadeUp(0.25)} className="text-sm text-slate-500">
            Last updated: July 4, 2026
          </motion.p>
        </div>
      </section>

      {/* Sections */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-4xl space-y-8">
          {sections.map((s, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.06)}
              className={`bg-gradient-to-b ${s.color} border ${s.border} rounded-2xl p-8 md:p-10 hover:shadow-[0_12px_32px_-8px_rgba(99,102,241,0.15)] transition-all duration-300`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="size-11 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center shadow-inner">
                  {s.icon}
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white">{s.title}</h2>
              </div>
              <ul className="space-y-4">
                {s.content.map((item, j) => (
                  <li key={j} className="flex gap-3 text-sm md:text-[15px] text-slate-400 leading-relaxed">
                    <span className="mt-2 size-1.5 rounded-full bg-indigo-500/50 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Banner */}
          <motion.div {...fadeUp(0.4)} className="relative bg-gradient-to-r from-indigo-900/40 via-purple-900/30 to-indigo-900/40 border border-indigo-500/20 rounded-2xl p-8 md:p-10 overflow-hidden">
            <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)", backgroundSize: "20px 20px" }} />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
              <div className="size-14 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center">
                <UserCheck size={24} className="text-indigo-400" />
              </div>
              <div className="text-center md:text-left flex-1">
                <h3 className="text-lg font-bold text-white mb-2">Have Questions About Your Privacy?</h3>
                <p className="text-sm text-slate-400">We're here to help. Contact our privacy team for any concerns about your data.</p>
              </div>
              <Link href="/contact" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all hover:scale-105 shadow-lg shadow-indigo-500/20 whitespace-nowrap">
                Contact Us
              </Link>
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
            <Link href="/privacy" className="text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
