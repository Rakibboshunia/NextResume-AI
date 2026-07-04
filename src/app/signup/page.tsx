"use client";

import { motion } from "framer-motion";
import { Sparkles, Mail, Lock, Eye, EyeOff, ArrowRight, User, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState, FormEvent } from "react";

const pwChecks = [
  { label: "8+ characters", test: (p: string) => p.length >= 8 },
  { label: "Uppercase", test: (p: string) => /[A-Z]/.test(p) },
  { label: "Number", test: (p: string) => /\d/.test(p) },
  { label: "Special char", test: (p: string) => /[!@#$%^&*]/.test(p) },
];

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function SignupPage() {
  const router = useRouter();
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [agreed, setAgreed] = useState(false);

  const passed = pwChecks.filter(c => c.test(form.password)).length;
  const pct = (passed / 4) * 100;
  const barColor = pct <= 25 ? "bg-red-500" : pct <= 50 ? "bg-amber-500" : pct <= 75 ? "bg-yellow-400" : "bg-emerald-500";

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    setLoading(true);
    setError("");

    // Register
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: form.name, email: form.email, password: form.password }),
    });
    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "Registration failed. Please try again.");
      setLoading(false);
      return;
    }

    // Auto sign-in after registration
    const result = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    });

    setLoading(false);
    if (result?.error) {
      setError("Account created but login failed. Please login manually.");
    } else {
      router.push("/dashboard");
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen bg-[#05060F] text-slate-200 font-[family-name:var(--font-geist-sans)] flex items-center justify-center px-6 py-12 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-purple-600/8 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/6 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)", backgroundSize: "32px 32px" }} />

      <div className="w-full max-w-[460px] relative z-10">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-2.5 group mb-8">
            <div className="size-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-[1px] shadow-lg shadow-indigo-500/25">
              <div className="w-full h-full bg-[#05060F] rounded-[10px] flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                <Sparkles className="size-5 text-indigo-400 group-hover:text-white transition-colors duration-300" />
              </div>
            </div>
            <span className="font-bold text-2xl tracking-tight text-white">ResumeAI</span>
          </Link>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">Create Your Account</h1>
          <p className="text-slate-400 text-sm">Start building professional resumes with AI in minutes</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="bg-gradient-to-b from-[#0e1025] to-[#0a0c18] border border-white/8 rounded-3xl p-8 md:p-10 shadow-[0_20px_60px_-16px_rgba(99,102,241,0.15)]">
          <button className="w-full flex items-center justify-center gap-3 px-4 py-3.5 bg-white/5 hover:bg-white/8 border border-white/10 hover:border-white/20 rounded-xl text-sm font-medium text-white transition-all duration-200 mb-3">
            <svg className="size-[18px]" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/><path fill="none" d="M1 1h22v22H1z"/></svg> Sign up with Google
          </button>
          <button className="w-full flex items-center justify-center gap-3 px-4 py-3.5 bg-white/5 hover:bg-white/8 border border-white/10 hover:border-white/20 rounded-xl text-sm font-medium text-white transition-all duration-200">
            <svg className="size-[18px]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            Sign up with GitHub
          </button>

          <div className="flex items-center gap-4 my-7">
            <div className="flex-1 h-px bg-white/8" />
            <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">or sign up with email</span>
            <div className="flex-1 h-px bg-white/8" />
          </div>

          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 block">Full Name</label>
              <div className="relative">
                <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all" />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 block">Email Address</label>
              <div className="relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all" />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 block">Password</label>
              <div className="relative">
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                <input type={showPw ? "text" : "password"} required value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} placeholder="Create a strong password" className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-12 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all" />
                <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors">
                  {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {form.password.length > 0 && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${pct}%` }} className={`h-full ${barColor} rounded-full transition-all duration-500`} />
                    </div>
                    <span className={`text-xs font-medium ${pct === 100 ? "text-emerald-400" : "text-slate-500"}`}>
                      {pct <= 25 ? "Weak" : pct <= 50 ? "Fair" : pct <= 75 ? "Good" : "Strong"}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {pwChecks.map((c, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 size={12} className={c.test(form.password) ? "text-emerald-400" : "text-slate-600"} />
                        <span className={`text-[11px] ${c.test(form.password) ? "text-slate-300" : "text-slate-600"}`}>{c.label}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            <div className="flex items-start gap-2.5">
              <input type="checkbox" id="terms" checked={agreed} onChange={e => setAgreed(e.target.checked)} className="size-4 mt-0.5 rounded border-white/20 bg-white/5 accent-indigo-600 cursor-pointer" />
              <label htmlFor="terms" className="text-xs text-slate-400 leading-relaxed cursor-pointer">
                I agree to the <Link href="/terms" className="text-indigo-400 hover:text-indigo-300 transition-colors">Terms of Service</Link> and <Link href="/privacy" className="text-indigo-400 hover:text-indigo-300 transition-colors">Privacy Policy</Link>
              </label>
            </div>

            {/* Error Message */}
            {error && (
              <div className="px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-sm text-red-400 flex items-center gap-2">
                <span>⚠</span> {error}
              </div>
            )}

            <button type="submit" disabled={loading || !agreed} className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-indigo-500/25">
              {loading ? <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <>Create Account <ArrowRight size={16} /></>}
            </button>
          </form>

          <div className="mt-8 pt-7 border-t border-white/5 grid grid-cols-3 gap-4 text-center">
            {[{ val: "20+", label: "Templates" }, { val: "AI", label: "Powered" }, { val: "Free", label: "To Start" }].map((s, i) => (
              <div key={i}><p className="text-sm font-bold text-white">{s.val}</p><p className="text-[10px] text-slate-500 uppercase tracking-wider mt-0.5">{s.label}</p></div>
            ))}
          </div>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-center text-sm text-slate-500 mt-8">
          Already have an account?{" "}<Link href="/login" className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors">Sign in</Link>
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex justify-center gap-6 mt-6 text-xs text-slate-600">
          <Link href="/privacy" className="hover:text-slate-400 transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-slate-400 transition-colors">Terms</Link>
          <Link href="/contact" className="hover:text-slate-400 transition-colors">Contact</Link>
        </motion.div>
      </div>
    </div>
  );
}
