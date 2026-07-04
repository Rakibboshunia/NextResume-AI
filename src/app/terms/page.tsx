"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  FileText, AlertTriangle, CreditCard, BookOpen, ShieldCheck,
  Ban, RefreshCw, Gavel, Sparkles
} from "lucide-react";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay }
});

const sections = [
  {
    icon: <BookOpen size={20} className="text-cyan-400" />,
    color: "from-cyan-500/20 to-cyan-500/5",
    border: "border-cyan-500/20",
    title: "1. Acceptance of Terms",
    content: [
      "By accessing or using ResumeAI, you agree to be bound by these Terms of Service and our Privacy Policy.",
      "If you are using our services on behalf of an organization, you agree to these terms on behalf of that organization.",
      "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting.",
      "Your continued use of the platform after changes are posted constitutes your acceptance of the modified terms.",
      "If you do not agree with any part of these terms, you must discontinue use of our services immediately."
    ]
  },
  {
    icon: <ShieldCheck size={20} className="text-indigo-400" />,
    color: "from-indigo-500/20 to-indigo-500/5",
    border: "border-indigo-500/20",
    title: "2. User Accounts & Responsibilities",
    content: [
      "You must provide accurate, complete, and current information when creating your account.",
      "You are responsible for maintaining the security of your account credentials and all activities under your account.",
      "You must immediately notify us of any unauthorized access or security breach of your account.",
      "You agree to provide truthful information in your resumes — we are not responsible for misleading content you create.",
      "Users must be at least 16 years of age to create an account and use our services."
    ]
  },
  {
    icon: <CreditCard size={20} className="text-emerald-400" />,
    color: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/20",
    title: "3. Billing & Subscriptions",
    content: [
      "Pro and Enterprise plans are billed on a monthly or annual recurring basis as selected at checkout.",
      "All prices are displayed in USD and are exclusive of applicable taxes unless otherwise stated.",
      "Subscription renewals are processed automatically. You will receive a reminder email 7 days before renewal.",
      "You may cancel your subscription at any time from your account settings; access continues until the end of the billing period.",
      "Refunds are available within 14 days of initial purchase if you are not satisfied with the service."
    ]
  },
  {
    icon: <FileText size={20} className="text-purple-400" />,
    color: "from-purple-500/20 to-purple-500/5",
    border: "border-purple-500/20",
    title: "4. Intellectual Property",
    content: [
      "You retain full ownership of all content you create using ResumeAI, including resumes and cover letters.",
      "The ResumeAI platform, design, branding, templates, and AI models remain our exclusive intellectual property.",
      "Templates may be used for personal and commercial purposes (job applications) but cannot be redistributed or resold.",
      "AI-generated content is provided as suggestions — you are responsible for reviewing and customizing all output.",
      "You may not reverse-engineer, decompile, or attempt to extract our AI models or proprietary algorithms."
    ]
  },
  {
    icon: <Ban size={20} className="text-rose-400" />,
    color: "from-rose-500/20 to-rose-500/5",
    border: "border-rose-500/20",
    title: "5. Prohibited Conduct",
    content: [
      "Using the platform to create fraudulent, deceptive, or misleading resumes or cover letters.",
      "Attempting to exploit, hack, or interfere with the security or functionality of our services.",
      "Scraping, crawling, or using automated tools to access the platform without our written consent.",
      "Sharing your account credentials with others or allowing multiple users on a single-user plan.",
      "Using the platform to transmit malware, spam, or any harmful content through our systems.",
      "Infringing on the intellectual property rights of others through content created on our platform."
    ]
  },
  {
    icon: <AlertTriangle size={20} className="text-amber-400" />,
    color: "from-amber-500/20 to-amber-500/5",
    border: "border-amber-500/20",
    title: "6. Limitation of Liability",
    content: [
      "ResumeAI is provided \"as is\" and \"as available\" without warranties of any kind, express or implied.",
      "We do not guarantee that AI-generated content will result in job interviews, offers, or career advancement.",
      "We are not liable for any indirect, incidental, special, or consequential damages arising from your use of the platform.",
      "Our total liability for any claim shall not exceed the amount you paid for the service in the preceding 12 months.",
      "We are not responsible for ATS compatibility issues that may arise from employer-specific configurations."
    ]
  },
  {
    icon: <RefreshCw size={20} className="text-teal-400" />,
    color: "from-teal-500/20 to-teal-500/5",
    border: "border-teal-500/20",
    title: "7. Termination & Data Handling",
    content: [
      "We may suspend or terminate your account if you violate these terms, with or without notice.",
      "Upon account deletion, your resume data will be permanently removed from our servers within 30 days.",
      "Anonymized, aggregated data may be retained for analytics and service improvement purposes.",
      "You may export all your data (resumes, cover letters, profile) at any time before account deletion.",
      "If your account is terminated for a terms violation, you may not create a new account without our written permission."
    ]
  },
  {
    icon: <Gavel size={20} className="text-violet-400" />,
    color: "from-violet-500/20 to-violet-500/5",
    border: "border-violet-500/20",
    title: "8. Governing Law & Disputes",
    content: [
      "These terms are governed by and construed in accordance with the laws of the State of Delaware, USA.",
      "Any disputes shall first be attempted to be resolved through good-faith negotiation between the parties.",
      "If negotiations fail, disputes will be resolved through binding arbitration under the rules of the American Arbitration Association.",
      "Class action lawsuits and class-wide arbitrations are not permitted under these terms.",
      "The prevailing party in any dispute shall be entitled to recover reasonable attorneys' fees and costs."
    ]
  }
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#05060F] text-slate-200 font-[family-name:var(--font-geist-sans)] overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-purple-600/10 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-20 right-0 w-[400px] h-[400px] bg-indigo-600/8 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mx-auto mb-8">
            <FileText className="size-4 text-purple-400" />
            <span className="text-xs font-semibold text-purple-300 tracking-wide uppercase">Legal Agreement</span>
          </motion.div>

          <motion.h1 {...fadeUp(0.1)} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400">Service</span>
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-4">
            Please read these terms carefully before using ResumeAI. By using our platform, you agree to be bound by these terms and conditions.
          </motion.p>

          <motion.p {...fadeUp(0.25)} className="text-sm text-slate-500">
            Effective date: July 4, 2026
          </motion.p>
        </div>
      </section>

      {/* Sections */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-4xl space-y-8">
          {sections.map((s, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.05)}
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
                    <span className="mt-2 size-1.5 rounded-full bg-purple-500/50 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Quick nav */}
          <motion.div {...fadeUp(0.4)} className="relative bg-gradient-to-r from-purple-900/40 via-indigo-900/30 to-purple-900/40 border border-purple-500/20 rounded-2xl p-8 md:p-10 overflow-hidden">
            <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)", backgroundSize: "20px 20px" }} />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
              <div className="size-14 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center">
                <Gavel size={24} className="text-purple-400" />
              </div>
              <div className="text-center md:text-left flex-1">
                <h3 className="text-lg font-bold text-white mb-2">Need Help Understanding These Terms?</h3>
                <p className="text-sm text-slate-400">Our team is happy to clarify any questions you might have about our terms of service.</p>
              </div>
              <Link href="/contact" className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-all hover:scale-105 shadow-lg shadow-purple-500/20 whitespace-nowrap">
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
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="text-white transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
