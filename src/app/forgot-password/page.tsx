"use client";

import { motion } from "framer-motion";
import { Sparkles, Mail, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState, FormEvent } from "react";

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#05060F] text-slate-200 font-[family-name:var(--font-geist-sans)] flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/8 blur-[150px] rounded-full pointer-events-none" />

      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)", backgroundSize: "32px 32px" }} />

      <div className="w-full max-w-[440px] relative z-10">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <Link href="/" className="inline-flex items-center gap-2.5 group mb-8">
            <div className="size-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-[1px] shadow-lg shadow-indigo-500/25">
              <div className="w-full h-full bg-[#05060F] rounded-[10px] flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                <Sparkles className="size-5 text-indigo-400 group-hover:text-white transition-colors duration-300" />
              </div>
            </div>
            <span className="font-bold text-2xl tracking-tight text-white">ResumeAI</span>
          </Link>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gradient-to-b from-[#0e1025] to-[#0a0c18] border border-white/8 rounded-3xl p-8 md:p-10 shadow-[0_20px_60px_-16px_rgba(99,102,241,0.15)]"
        >
          {!submitted ? (
            <>
              <div className="text-center mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Reset Password
                </h1>
                <p className="text-slate-400 text-sm">
                  Enter your email address and we&apos;ll send you instructions to reset your password.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 block">Email Address</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading || !email}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-indigo-500/25"
                >
                  {isLoading ? (
                    <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>Send Reset Link <ArrowRight size={16} /></>
                  )}
                </button>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-4"
            >
              <div className="size-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={32} className="text-emerald-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">Check Your Email</h2>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                We&apos;ve sent a password reset link to <span className="text-white font-medium">{email}</span>. Please check your inbox and spam folder.
              </p>
              
              <button
                onClick={() => setSubmitted(false)}
                className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Didn&apos;t receive the email? Try again
              </button>
            </motion.div>
          )}

          <div className="mt-8 text-center">
            <Link href="/login" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
              <ArrowLeft size={14} /> Back to Sign In
            </Link>
          </div>
        </motion.div>

        {/* Footer links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-6 mt-8 text-xs text-slate-600"
        >
          <Link href="/privacy" className="hover:text-slate-400 transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-slate-400 transition-colors">Terms</Link>
          <Link href="/contact" className="hover:text-slate-400 transition-colors">Contact</Link>
        </motion.div>
      </div>
    </div>
  );
}
