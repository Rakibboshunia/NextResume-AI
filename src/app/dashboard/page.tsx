"use client";

import { FileText, MoreVertical, Plus, Sparkles, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function DashboardPage() {
  const [recentResumes, setRecentResumes] = useState([
    { id: 1, title: "Frontend Developer Resume", time: "Updated 2 hours ago", views: 48, downloads: 12 },
    { id: 2, title: "Full Stack Developer Resume", time: "Updated 1 day ago", views: 35, downloads: 8 },
    { id: 3, title: "UI/UX Designer Resume", time: "Updated 3 days ago", views: 29, downloads: 6 }
  ]);

  useEffect(() => {
    const draft = localStorage.getItem("draftResume");
    if (draft) {
      try {
        const parsed = JSON.parse(draft);
        if (parsed?.personal?.fullName) {
          setRecentResumes([
            { id: 4, title: `${parsed.personal.jobTitle || 'Untitled'} Resume`, time: "Updated just now", views: 0, downloads: 0 },
            ...recentResumes.slice(0, 2)
          ]);
        }
      } catch (e) {}
    }
  }, []);

  return (
    <div className="max-w-6xl mx-auto space-y-10">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-3xl font-extrabold text-white flex items-center gap-2">
          Welcome back, John <span className="text-2xl animate-bounce">👋</span>
        </h1>
        <p className="text-indigo-200/70 mt-1.5 text-sm">Here's what's happening with your resumes today.</p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        <StatCard title="Resumes Created" value={(recentResumes.length > 3 ? 13 : 12).toString()} trend="+10%" color="blue" delay={0.1} />
        <StatCard title="Profile Views" value="248" trend="+18%" color="cyan" delay={0.2} />
        <StatCard title="Downloads" value="87" trend="+2%" color="emerald" delay={0.3} />
        <StatCard title="Impressions" value="1.2K" trend="+24%" color="purple" delay={0.4} />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Resumes */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
          className="col-span-2 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-xl border border-white/[0.05] rounded-3xl p-7 shadow-xl shadow-black/20">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
               <Sparkles size={18} className="text-indigo-400" /> Recent Resumes
            </h2>
          </div>
          
          <div className="space-y-4">
            {recentResumes.map((resume, idx) => (
               <ResumeItem key={resume.id} title={resume.title} time={resume.time} views={resume.views} downloads={resume.downloads} delay={idx * 0.1} />
            ))}
          </div>
        </motion.div>

        {/* Create New Action */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-br from-indigo-900/40 via-purple-900/20 to-transparent backdrop-blur-xl border border-indigo-500/20 rounded-3xl p-8 flex flex-col items-center justify-center text-center space-y-6 relative overflow-hidden group hover:border-indigo-400/40 transition-colors">
          <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <h2 className="text-lg font-bold text-white relative z-10 group-hover:text-indigo-300 transition-colors">Create New Resume</h2>
          
          <motion.div whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.95 }}
            className="size-16 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-[0_0_40px_rgba(99,102,241,0.5)] cursor-pointer relative z-10">
             <Plus size={32} />
          </motion.div>
          
          <p className="text-indigo-200/60 text-sm max-w-[200px] relative z-10">Start building your professional ATS-friendly resume</p>
          
          <Link href="/dashboard/create" className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-all relative z-10 border border-white/10 backdrop-blur-md text-sm group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Create Resume
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

function StatCard({ title, value, trend, color, delay }: { title: string; value: string; trend: string; color: "blue" | "cyan" | "emerald" | "purple", delay: number }) {
  const colorMap = {
    blue: "text-blue-500 from-blue-500/20 via-blue-500/5",
    cyan: "text-cyan-400 from-cyan-400/20 via-cyan-400/5",
    emerald: "text-emerald-500 from-emerald-500/20 via-emerald-500/5",
    purple: "text-purple-500 from-purple-500/20 via-purple-500/5"
  };
  
  const bgMap = {
    blue: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    cyan: "bg-cyan-500/10 text-cyan-400 border border-cyan-400/20",
    emerald: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    purple: "bg-purple-500/10 text-purple-400 border border-purple-500/20"
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-md border border-white/[0.05] rounded-3xl p-6 relative overflow-hidden group hover:border-${color === 'emerald' ? 'emerald-500' : color === 'cyan' ? 'cyan-400' : color + '-500'}/30 transition-all duration-300 shadow-lg`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${colorMap[color]} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Chart mock graphic */}
      <div className={`absolute bottom-0 left-0 w-full h-1/2 opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity ${colorMap[color].split(' ')[0]}`}>
        <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full fill-transparent stroke-current stroke-2 drop-shadow-md">
           <path d="M0,40 Q10,35 20,40 T40,25 T60,35 T80,20 T100,10" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>

      <p className="text-xs font-semibold text-slate-400 mb-2 relative z-10 tracking-wide uppercase">{title}</p>
      <div className="flex items-end justify-between relative z-10">
        <h3 className="text-4xl font-extrabold text-white drop-shadow-md">{value}</h3>
        <span className={`flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-inner ${bgMap[color]}`}>
          <TrendingUp size={10} /> {trend}
        </span>
      </div>
    </motion.div>
  );
}

function ResumeItem({ title, time, views, downloads, delay }: { title: string; time: string; views: number; downloads: number, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.5 + delay }}
      className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.06] hover:border-indigo-500/30 transition-all duration-300 group cursor-pointer hover:shadow-lg hover:shadow-indigo-500/10"
    >
      <div className="w-12 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg overflow-hidden flex flex-col p-1.5 shrink-0 border border-white/10 group-hover:border-indigo-400/50 transition-colors">
         <div className="h-1/4 w-full bg-white/20 mb-1.5 rounded-[2px]" />
         <div className="h-[2px] w-full bg-white/30 mb-1" />
         <div className="h-[2px] w-3/4 bg-white/30 mb-1" />
         <div className="h-[2px] w-full bg-white/30 mb-1" />
      </div>
      
      <div className="flex-1">
        <h4 className="text-white text-sm font-bold group-hover:text-indigo-300 transition-colors">{title}</h4>
        <p className="text-xs text-indigo-200/50 mt-1">{time}</p>
      </div>

      <div className="flex items-center gap-6 px-4">
         <div className="flex flex-col items-center">
            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider mb-1">views</span>
            <span className="text-white text-sm font-extrabold">{views}</span>
         </div>
         <div className="flex flex-col items-center">
            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider mb-1">downloads</span>
            <span className="text-white text-sm font-extrabold">{downloads}</span>
         </div>
      </div>

      <button onClick={() => alert("Options menu")} className="text-slate-500 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors">
        <MoreVertical size={18} />
      </button>
    </motion.div>
  );
}
