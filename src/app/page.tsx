"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  Sparkles, PenTool, LayoutTemplate, MonitorPlay, Lightbulb,
  FileText, Share2, UserCheck, CheckCircle2, Briefcase, ArrowRight, Star
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay }
});

export default function Home() {
  return (
    <div className="min-h-screen bg-[#05060F] text-slate-200 font-[family-name:var(--font-geist-sans)] overflow-x-hidden">
      <Navbar />

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-600/15 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-20 relative z-10">
          {/* Left */}
          <div className="flex-1 space-y-8">
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 w-fit">
              <Sparkles className="size-3.5 text-indigo-400" />
              <span className="text-xs font-semibold text-indigo-300 tracking-wide uppercase">AI Powered Resume Builder</span>
            </motion.div>

            <motion.h1 {...fadeUp(0.1)} className="text-5xl md:text-6xl lg:text-[72px] font-extrabold tracking-tight leading-[1.1] text-white">
              Create Your<br />Dream Resume<br />With <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400">AI Power</span>
            </motion.h1>

            <motion.p {...fadeUp(0.2)} className="text-lg md:text-xl text-slate-400 max-w-md leading-relaxed">
              Build a professional, ATS-friendly resume in minutes. Choose a template, let AI write the content, and download instantly.
            </motion.p>

            <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4">
              <Link href="/dashboard" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all hover:scale-105 shadow-lg shadow-indigo-500/30">
                Get Started Free <ArrowRight size={18} />
              </Link>
              <Link href="#templates" className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 hover:bg-white/5 text-white font-semibold rounded-xl transition-all">
                View Templates
              </Link>
            </motion.div>

            <motion.div {...fadeUp(0.4)} className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="size-10 rounded-full border-2 border-[#05060F] overflow-hidden">
                    <Image src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" width={40} height={40} />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-1">{[1,2,3,4,5].map(i => <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />)}</div>
                <p className="text-xs text-slate-400">Trusted by <span className="text-white font-semibold">25,000+</span> professionals</p>
              </div>
            </motion.div>
          </div>

          {/* Right — 3D Mockup */}
          <div className="flex-1 w-full relative" style={{ perspective: "1200px" }}>
            <motion.div
              initial={{ opacity: 0, rotateY: 25, rotateX: 10, y: 30 }}
              animate={{ opacity: 1, rotateY: -8, rotateX: 4, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, type: "spring", bounce: 0.3 }}
              className="relative bg-gradient-to-br from-[#1a1d35] to-[#0f1120] border border-white/10 border-t-white/20 border-l-white/15 rounded-3xl p-8 shadow-[25px_35px_80px_-10px_rgba(99,102,241,0.45)]"
            >
              <div className="absolute top-0 right-0 w-56 h-56 bg-indigo-500/10 blur-[70px] rounded-full pointer-events-none" />

              <div className="flex gap-4 mb-7 relative z-10">
                <div className="size-16 rounded-2xl overflow-hidden shrink-0 ring-2 ring-white/10">
                  <Image src="https://i.pravatar.cc/150?img=11" alt="Profile" width={64} height={64} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">John Doe</h3>
                  <p className="text-sm text-indigo-300 mt-0.5">Frontend Developer</p>
                  <div className="flex gap-3 text-[10px] text-slate-500 mt-1.5">
                    <span>john@example.com</span>
                    <span>Dhaka, Bangladesh</span>
                  </div>
                </div>
              </div>

              <div className="mb-6 relative z-10">
                <p className="text-[9px] font-bold text-indigo-400/70 tracking-[0.2em] uppercase mb-2">Professional Summary</p>
                <p className="text-xs text-slate-400 leading-relaxed">Passionate Frontend Developer with 4+ years building modern web apps using React, Next.js and TypeScript...</p>
              </div>

              <div className="relative z-10">
                <p className="text-[9px] font-bold text-indigo-400/70 tracking-[0.2em] uppercase mb-3">Experience</p>
                <div className="relative border-l border-white/10 pl-4 ml-1 space-y-4">
                  {[{ title:"Senior Frontend Dev", co:"Fire AI Software", yr:"2022–Present", active:true},
                    { title:"Frontend Developer", co:"EdCalling IT Ltd.", yr:"2020–2022", active:false}].map((exp,i) => (
                    <div key={i} className="relative">
                      <div className={`absolute -left-[18px] top-1 size-2.5 rounded-full border-2 border-[#0f1120] ${exp.active ? "bg-indigo-500":"bg-slate-600"}`} />
                      <div className="flex justify-between items-start">
                        <p className="text-xs font-semibold text-white">{exp.title}</p>
                        <span className="text-[9px] text-slate-500">{exp.yr}</span>
                      </div>
                      <p className="text-[9px] text-slate-500 mt-0.5">{exp.co}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div animate={{y:[0,-8,0]}} transition={{repeat:Infinity,duration:3,ease:"easeInOut"}}
                className="absolute -right-5 top-1/3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl px-3 py-2 shadow-xl border border-white/10 flex items-center gap-2">
                <Sparkles size={12} className="text-white" />
                <span className="text-xs font-semibold text-white">AI Generated</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─────────────────────────────────────── */}
      <section id="features" className="py-16 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">Powerful Features</h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">Everything you need to create a professional resume that gets you hired.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon:<PenTool size={22} className="text-cyan-400"/>, color:"from-cyan-500/20 to-cyan-500/5", border:"border-cyan-500/20", title:"AI Resume Writer", desc:"Generate polished, tailored content with one click based on your role." },
              { icon:<LayoutTemplate size={22} className="text-indigo-400"/>, color:"from-indigo-500/20 to-indigo-500/5", border:"border-indigo-500/20", title:"Premium Templates", desc:"Choose from 20+ ATS-friendly templates crafted by design experts." },
              { icon:<MonitorPlay size={22} className="text-purple-400"/>, color:"from-purple-500/20 to-purple-500/5", border:"border-purple-500/20", title:"Live Preview", desc:"See every change reflected instantly on your resume as you type." },
              { icon:<Lightbulb size={22} className="text-amber-400"/>, color:"from-amber-500/20 to-amber-500/5", border:"border-amber-500/20", title:"Smart Suggestions", desc:"AI analyzes your resume and suggests improvements in real time." },
              { icon:<FileText size={22} className="text-emerald-400"/>, color:"from-emerald-500/20 to-emerald-500/5", border:"border-emerald-500/20", title:"PDF Export", desc:"Download a pixel-perfect, high-quality PDF ready to send." },
              { icon:<Share2 size={22} className="text-rose-400"/>, color:"from-rose-500/20 to-rose-500/5", border:"border-rose-500/20", title:"Share & Analytics", desc:"Share a public link and track views, downloads, and impressions." },
            ].map((f, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)}
                className={`group bg-gradient-to-b ${f.color} border ${f.border} rounded-2xl p-7 hover:-translate-y-3 hover:shadow-[0_24px_48px_-12px_rgba(99,102,241,0.4)] transition-all duration-400`}>
                <div className="size-12 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center mb-6 shadow-inner">{f.icon}</div>
                <h3 className="text-lg font-bold text-white mb-3">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEMPLATES ────────────────────────────────────── */}
      <section id="templates" className="py-16 px-6 bg-[#03040B]">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeUp(0)} className="flex flex-col md:flex-row justify-between items-end mb-10">
            <div>
              <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">Resume Templates</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Beautiful ATS-Friendly<br />Templates</h2>
            </div>
            <Link href="/dashboard/templates" className="px-6 py-2.5 border border-white/10 hover:bg-white/5 text-white text-sm font-medium rounded-xl transition-colors mt-6 md:mt-0">
              View All Templates →
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Modern","Professional","Creative","Minimal"].map((name,i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)}
                className="group aspect-[1/1.4] bg-white rounded-2xl overflow-hidden relative shadow-[0_12px_32px_-8px_rgba(0,0,0,0.5)] hover:-translate-y-4 hover:shadow-[0_40px_80px_-16px_rgba(99,102,241,0.5)] hover:-rotate-1 transition-all duration-500">
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm z-20 flex flex-col items-center justify-center gap-3">
                  <span className="text-white font-semibold">{name}</span>
                  <Link href="/dashboard/create" className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors">Use Template</Link>
                </div>
                <div className="w-full h-full bg-white p-4 flex flex-col gap-2">
                  <div className="flex items-center gap-2 border-b border-slate-100 pb-3 mb-1">
                    <div className="size-8 rounded-full bg-slate-200" />
                    <div><div className="w-16 h-2 bg-slate-300 rounded mb-1"/><div className="w-10 h-1.5 bg-slate-200 rounded"/></div>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded"/><div className="w-5/6 h-1.5 bg-slate-100 rounded"/><div className="w-4/6 h-1.5 bg-slate-100 rounded mt-1 mb-2"/>
                  <div className="w-8 h-2 bg-slate-300 rounded mb-2"/>
                  {[1,2].map(j => <div key={j} className="bg-slate-50 border border-slate-100 rounded p-2 mb-1">
                    <div className="w-1/3 h-1.5 bg-slate-200 rounded mb-1"/><div className="w-full h-1 bg-slate-100 rounded"/>
                  </div>)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AI COVER LETTER CTA ──────────────────────────── */}
      <section id="ai-tools" className="py-14 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeUp(0)} className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 rounded-3xl p-12 md:p-20 overflow-hidden flex flex-col md:flex-row items-center gap-12">
            <div className="absolute inset-0 opacity-20" style={{backgroundImage:"radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)", backgroundSize:"24px 24px"}} />
            <div className="absolute top-0 left-1/3 w-64 h-64 bg-purple-500/30 blur-[80px] rounded-full" />
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-indigo-500/30 blur-[60px] rounded-full" />

            <div className="relative z-10 flex-1">
              <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full mb-6">
                <Sparkles size={14} className="text-indigo-300" /><span className="text-xs font-semibold text-indigo-200 uppercase tracking-wider">Powered by AI</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">AI Cover Letter Generator</h2>
              <p className="text-indigo-200 leading-relaxed mb-8 max-w-md">Paste any job description and get a personalized, compelling cover letter in seconds.</p>
              <Link href="/dashboard/cover-letters" className="inline-block px-8 py-3.5 bg-white text-indigo-900 font-bold rounded-xl hover:bg-indigo-50 transition-colors shadow-lg shadow-indigo-900/50">Try It Free →</Link>
            </div>

            <div className="relative z-10 w-full max-w-xs bg-white rounded-2xl p-6 shadow-2xl hover:rotate-0 rotate-2 transition-transform duration-500">
              <div className="flex items-center gap-3 mb-5"><div className="size-8 rounded-full bg-slate-200"/><div><div className="w-20 h-2 bg-slate-300 rounded mb-1"/><div className="w-12 h-1.5 bg-slate-200 rounded"/></div></div>
              <div className="space-y-2 mb-4">{[1,2,3,4].map(i=><div key={i} className={`h-2 bg-slate-100 rounded ${i===2?"w-5/6":i===4?"w-4/6":"w-full"}`}/>)}</div>
              <div className="space-y-2">{[1,2,3].map(i=><div key={i} className={`h-2 bg-slate-100 rounded ${i===2?"w-5/6":"w-full"}`}/>)}</div>
              <div className="absolute -right-3 -top-3 bg-indigo-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1">
                <Sparkles size={10}/> AI Generated
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── PRICING ──────────────────────────────────────── */}
      <section id="pricing" className="py-16 px-6 bg-[#03040B]">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">Pricing</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">Simple, Transparent Pricing</h2>
            <p className="text-slate-400 text-lg">Choose the plan that fits your career goals.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {/* Basic */}
            <motion.div {...fadeUp(0.1)} className="bg-gradient-to-br from-[#13162a] to-[#0a0c16] border border-white/8 border-t-white/15 rounded-3xl p-8 hover:-translate-y-2 hover:shadow-[0_20px_40px_-12px_rgba(255,255,255,0.05)] transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-1">Basic</h3>
              <p className="text-slate-400 text-sm mb-6">Perfect for getting started.</p>
              <div className="mb-6"><span className="text-4xl font-extrabold text-white">$0</span><span className="text-slate-500 ml-1 text-sm">/mo</span></div>
              <ul className="space-y-3 mb-8">
                {["1 Resume","3 Basic Templates","Standard PDF Export","Community Support"].map(f=>(
                  <li key={f} className="flex items-center gap-3 text-sm text-slate-300"><CheckCircle2 size={15} className="text-indigo-400 shrink-0"/>{f}</li>
                ))}
              </ul>
              <Link href="/signup" className="block text-center w-full py-3 rounded-xl bg-white/8 hover:bg-white/12 text-white font-semibold transition-colors border border-white/10">Get Started Free</Link>
            </motion.div>

            {/* Pro — highlighted */}
            <motion.div {...fadeUp(0.2)} className="bg-gradient-to-br from-indigo-600/25 via-purple-600/10 to-[#0a0c16] border border-indigo-500/50 border-t-indigo-400/60 rounded-3xl p-8 relative md:-translate-y-4 hover:md:-translate-y-6 hover:shadow-[0_32px_64px_-16px_rgba(99,102,241,0.6)] transition-all duration-500 shadow-[0_0_60px_-16px_rgba(99,102,241,0.4)]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-lg whitespace-nowrap">MOST POPULAR</div>
              <h3 className="text-xl font-bold text-white mb-1">Pro</h3>
              <p className="text-indigo-200 text-sm mb-6">For serious job seekers.</p>
              <div className="mb-6"><span className="text-4xl font-extrabold text-white">$9</span><span className="text-slate-400 ml-1 text-sm">/mo</span></div>
              <ul className="space-y-3 mb-8">
                {["Unlimited Resumes","All 20+ Premium Templates","AI Resume Writer & Suggestions","AI Cover Letter Generator","Priority Support"].map(f=>(
                  <li key={f} className="flex items-center gap-3 text-sm text-slate-200"><CheckCircle2 size={15} className="text-indigo-400 shrink-0"/>{f}</li>
                ))}
              </ul>
              <Link href="/dashboard/billing" className="block text-center w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold transition-all shadow-lg shadow-indigo-600/30">Upgrade to Pro</Link>
            </motion.div>

            {/* Enterprise */}
            <motion.div {...fadeUp(0.3)} className="bg-gradient-to-br from-[#1a1430] to-[#0a0c16] border border-purple-500/20 border-t-purple-400/30 rounded-3xl p-8 hover:-translate-y-2 hover:shadow-[0_20px_40px_-12px_rgba(139,92,246,0.2)] transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-1">Enterprise</h3>
              <p className="text-slate-400 text-sm mb-6">For teams & organizations.</p>
              <div className="mb-6"><span className="text-4xl font-extrabold text-white">$29</span><span className="text-slate-500 ml-1 text-sm">/mo</span></div>
              <ul className="space-y-3 mb-8">
                {["Everything in Pro","Team Management Dashboard","Custom Branding & Logo","API Access","Dedicated Account Manager","SLA & Priority Support"].map(f=>(
                  <li key={f} className="flex items-center gap-3 text-sm text-slate-300"><CheckCircle2 size={15} className="text-purple-400 shrink-0"/>{f}</li>
                ))}
              </ul>
              <Link href="/contact" className="block text-center w-full py-3 rounded-xl border border-purple-500/40 hover:bg-purple-500/10 text-white font-semibold transition-colors">Contact Sales</Link>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ─── RESOURCES ────────────────────────────────────── */}
      <section id="resources" className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeUp(0)} className="flex flex-col md:flex-row justify-between items-end mb-10">
            <div>
              <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">Resources</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Career Resources</h2>
              <p className="text-slate-400 mt-4 text-lg">Expert tips and guides to help you land your dream job.</p>
            </div>
            <Link href="#resources" className="px-6 py-2.5 border border-white/10 hover:bg-white/5 text-white text-sm font-semibold rounded-xl transition-colors mt-6 md:mt-0">View All Articles →</Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { seed:11, tag:"Resume Tips", title:"How to Write a Resume That Passes ATS in 2026", desc:"Learn the exact formatting and keyword strategies applicant tracking systems look for." },
              { seed:12, tag:"Interview Prep", title:"Top 10 Interview Questions and How to Answer Them", desc:"Prepare confident, structured answers to the questions every recruiter asks." },
              { seed:13, tag:"Career Growth", title:"How to Negotiate Your Salary Like a Professional", desc:"Research, timing, and framing — the three pillars of a successful salary negotiation." },
            ].map((a,i) => (
              <motion.div key={i} {...fadeUp(i*0.1)} className="group bg-[#0a0c16] border border-white/5 rounded-2xl overflow-hidden hover:border-indigo-500/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_-12px_rgba(99,102,241,0.3)] transition-all duration-400 cursor-pointer">
                <div className="h-52 relative overflow-hidden">
                  <Image src={`https://picsum.photos/seed/${a.seed}/400/250`} alt={a.tag} fill className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c16] to-transparent"/>
                </div>
                <div className="p-7">
                  <span className="text-xs font-bold text-indigo-400 tracking-widest uppercase">{a.tag}</span>
                  <h3 className="text-lg font-bold text-white mt-3 mb-3 group-hover:text-indigo-300 transition-colors leading-snug">{a.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-5 line-clamp-2">{a.desc}</p>
                  <span className="text-sm font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors">Read article →</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS ────────────────────────────────────────── */}
      <section className="py-12 border-t border-white/5 bg-[#03040B]">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[{ icon:<UserCheck size={28} className="text-indigo-400"/>, val:"25K+", label:"Happy Users" },
              { icon:<FileText size={28} className="text-purple-400"/>, val:"50K+", label:"Resumes Created" },
              { icon:<Briefcase size={28} className="text-pink-400"/>, val:"10K+", label:"Jobs Landed" },
              { icon:<CheckCircle2 size={28} className="text-emerald-400"/>, val:"98%", label:"Satisfaction Rate" }].map((s,i) => (
              <motion.div key={i} {...fadeUp(i*0.1)} className="flex flex-col items-center gap-3">
                <div className="size-14 rounded-2xl bg-white/5 border border-white/8 flex items-center justify-center">{s.icon}</div>
                <h3 className="text-3xl font-extrabold text-white">{s.val}</h3>
                <p className="text-sm text-slate-500">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────── */}
      <footer className="py-16 border-t border-white/5 px-6">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-indigo-600 flex items-center justify-center"><Sparkles size={16} className="text-white"/></div>
            <span className="font-bold text-xl text-white">ResumeAI</span>
          </div>
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} ResumeAI. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-slate-500">
            {[{label:"Privacy",href:"/privacy"},{label:"Terms",href:"/terms"},{label:"Contact",href:"/contact"}].map(l => <Link key={l.label} href={l.href} className="hover:text-white transition-colors">{l.label}</Link>)}
          </div>
        </div>
      </footer>
    </div>
  );
}
