"use client";

import { FileText, MoreVertical, Plus } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

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
      <div>
        <h1 className="text-3xl font-bold text-white flex items-center gap-2">
          Welcome back, Rasel <span className="text-2xl">👋</span>
        </h1>
        <p className="text-slate-400 mt-1">Here's what's happening with your resumes today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Resumes Created" value={(recentResumes.length > 3 ? 13 : 12).toString()} trend="+10%" color="blue" />
        <StatCard title="Profile Views" value="248" trend="+18%" color="cyan" />
        <StatCard title="Downloads" value="87" trend="+2%" color="emerald" />
        <StatCard title="Impressions" value="1.2K" trend="+24%" color="purple" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Resumes */}
        <div className="col-span-2 bg-[#131520] border border-white/[0.04] rounded-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-white">Recent Resumes</h2>
          </div>
          
          <div className="space-y-3">
            {recentResumes.map(resume => (
               <ResumeItem key={resume.id} title={resume.title} time={resume.time} views={resume.views} downloads={resume.downloads} />
            ))}
          </div>
        </div>

        {/* Create New Action */}
        <div className="bg-[#131520] border border-white/[0.04] rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-6 relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent pointer-events-none" />
          
          <h2 className="text-lg font-bold text-white relative z-10">Create New Resume</h2>
          
          <div className="size-16 rounded-full bg-indigo-600 flex items-center justify-center text-white shadow-[0_0_40px_rgba(79,70,229,0.3)] relative z-10">
             <Plus size={32} />
          </div>
          
          <p className="text-slate-400 text-sm max-w-[200px] relative z-10">Start building your professional resume</p>
          
          <Link href="/dashboard/create" className="w-full py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors relative z-10">
            Create Resume
          </Link>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, trend, color }: { title: string; value: string; trend: string; color: "blue" | "cyan" | "emerald" | "purple" }) {
  const colorMap = {
    blue: "text-blue-500",
    cyan: "text-cyan-400",
    emerald: "text-emerald-500",
    purple: "text-purple-500"
  };
  
  const bgMap = {
    blue: "bg-blue-500/10 text-blue-400",
    cyan: "bg-cyan-500/10 text-cyan-400",
    emerald: "bg-emerald-500/10 text-emerald-400",
    purple: "bg-purple-500/10 text-purple-400"
  };

  return (
    <div className="bg-[#131520] border border-white/[0.04] rounded-2xl p-6 relative overflow-hidden group">
      {/* Chart mock graphic */}
      <div className={`absolute bottom-0 left-0 w-full h-1/2 opacity-20 pointer-events-none ${colorMap[color]}`}>
        <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full fill-transparent stroke-current stroke-2">
           <path d="M0,40 Q10,35 20,40 T40,25 T60,35 T80,20 T100,10" vectorEffect="non-scaling-stroke" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-b from-current to-transparent opacity-30" style={{ clipPath: "path('M0,40 Q10,35 20,40 T40,25 T60,35 T80,20 T100,10 L100,50 L0,50 Z')" }} />
      </div>

      <p className="text-xs font-medium text-slate-400 mb-2">{title}</p>
      <div className="flex items-end justify-between relative z-10">
        <h3 className="text-3xl font-bold text-white">{value}</h3>
        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${bgMap[color]}`}>
          {trend}
        </span>
      </div>
    </div>
  );
}

function ResumeItem({ title, time, views, downloads }: { title: string; time: string; views: number; downloads: number }) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] transition-colors group">
      <div className="w-10 h-14 bg-white/10 rounded-md overflow-hidden flex flex-col p-1 shrink-0">
         <div className="h-1/4 w-full bg-slate-400/50 mb-1 rounded-[1px]" />
         <div className="h-[1px] w-full bg-white/20 mb-[1px]" />
         <div className="h-[1px] w-3/4 bg-white/20 mb-[1px]" />
         <div className="h-[1px] w-full bg-white/20 mb-[1px]" />
      </div>
      
      <div className="flex-1">
        <h4 className="text-white text-sm font-medium">{title}</h4>
        <p className="text-xs text-slate-500 mt-0.5">{time}</p>
      </div>

      <div className="flex items-center gap-6 px-4">
         <div className="flex flex-col items-center">
            <span className="text-[10px] text-slate-500 uppercase">views</span>
            <span className="text-white text-sm font-semibold">{views}</span>
         </div>
         <div className="flex flex-col items-center">
            <span className="text-[10px] text-slate-500 uppercase">downloads</span>
            <span className="text-white text-sm font-semibold">{downloads}</span>
         </div>
      </div>

      <button onClick={() => alert("Options menu")} className="text-slate-500 hover:text-white p-2">
        <MoreVertical size={16} />
      </button>
    </div>
  );
}
