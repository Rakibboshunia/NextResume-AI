"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, Calendar, MapPin, MoreHorizontal, Plus, Search, CheckCircle2, Clock, XCircle, ChevronRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

// Mock data for real-world simulation
const initialJobs = [
  { id: 1, role: "Senior Frontend Engineer", company: "Google", location: "Remote", date: "2 days ago", status: "interviewing", logo: "G" },
  { id: 2, role: "React Developer", company: "Meta", location: "Menlo Park, CA", date: "1 week ago", status: "applied", logo: "M" },
  { id: 3, role: "UI/UX Designer", company: "Spotify", location: "New York, NY", date: "3 days ago", status: "offered", logo: "S" },
  { id: 4, role: "Full Stack Developer", company: "Amazon", location: "Seattle, WA", date: "2 weeks ago", status: "rejected", logo: "A" },
];

export default function JobTrackerPage() {
  const [jobs, setJobs] = useState(initialJobs);

  const columns = [
    { id: "applied", title: "Applied", icon: <Clock size={16} />, color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20" },
    { id: "interviewing", title: "Interviewing", icon: <Briefcase size={16} />, color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/20" },
    { id: "offered", title: "Offered", icon: <CheckCircle2 size={16} />, color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20" },
    { id: "rejected", title: "Rejected", icon: <XCircle size={16} />, color: "text-rose-400", bg: "bg-rose-400/10", border: "border-rose-400/20" },
  ];

  return (
    <div className="max-w-[1400px] mx-auto h-full flex flex-col">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-white flex items-center gap-3">
            Job Tracker <span className="text-sm font-semibold px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/30">Beta</span>
          </h1>
          <p className="text-indigo-200/70 mt-1.5 text-sm">Organize and track your job applications in one place.</p>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search applications..." 
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all"
            />
          </div>
          <button onClick={() => toast.success("New job added successfully!", { description: "We've added a blank template to your tracking board." })} className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-indigo-600/20 whitespace-nowrap">
            <Plus size={16} /> Add Job
          </button>
        </div>
      </motion.div>

      {/* Kanban Board */}
      <div className="flex-1 overflow-x-auto custom-scrollbar pb-4">
        <div className="flex gap-6 min-w-max h-full">
          {columns.map((column, colIndex) => {
            const columnJobs = jobs.filter(j => j.status === column.id);
            
            return (
              <motion.div 
                key={column.id}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: colIndex * 0.1 }}
                className="w-[320px] flex flex-col h-full bg-[#131520]/50 backdrop-blur-sm border border-white/[0.04] rounded-2xl overflow-hidden"
              >
                {/* Column Header */}
                <div className={`p-4 border-b border-white/[0.04] flex items-center justify-between`}>
                  <div className="flex items-center gap-2">
                    <div className={`size-6 rounded flex items-center justify-center ${column.bg} ${column.color}`}>
                       {column.icon}
                    </div>
                    <h3 className="font-bold text-white">{column.title}</h3>
                  </div>
                  <span className="text-xs font-semibold text-slate-400 bg-white/5 px-2 py-1 rounded-md">{columnJobs.length}</span>
                </div>

                {/* Column Body / Cards */}
                <div className="flex-1 p-3 overflow-y-auto custom-scrollbar space-y-3">
                  {columnJobs.length === 0 ? (
                    <div className="h-24 border-2 border-dashed border-white/5 rounded-xl flex items-center justify-center">
                       <span className="text-xs text-slate-500 font-medium">Drop jobs here</span>
                    </div>
                  ) : (
                    columnJobs.map((job, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 + (idx * 0.05) }}
                        key={job.id}
                        className="bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.08] hover:border-indigo-500/40 p-4 rounded-xl cursor-pointer group hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div className="size-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center text-white font-bold text-lg shadow-inner group-hover:from-indigo-500 group-hover:to-purple-500 transition-colors">
                            {job.logo}
                          </div>
                          <button className="text-slate-500 hover:text-white p-1 rounded hover:bg-white/10 transition-colors">
                            <MoreHorizontal size={16} />
                          </button>
                        </div>
                        
                        <h4 className="font-bold text-white text-sm mb-1 group-hover:text-indigo-300 transition-colors">{job.role}</h4>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4">
                           <Building2 size={12} /> {job.company}
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="flex items-center gap-1 text-[10px] font-medium text-slate-300 bg-white/5 px-2 py-1 rounded-md">
                            <MapPin size={10} /> {job.location}
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-between text-xs border-t border-white/5 pt-3">
                          <span className="flex items-center gap-1 text-slate-500">
                             <Calendar size={12} /> {job.date}
                          </span>
                          <span className="flex items-center gap-1 text-indigo-400 font-medium opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                            Details <ChevronRight size={14} />
                          </span>
                        </div>
                      </motion.div>
                    ))
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
