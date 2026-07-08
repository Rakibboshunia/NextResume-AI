"use client";

import { FileText, MoreVertical, Plus } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ResumesPage() {
  const [resumes, setResumes] = useState<any[]>([]);

  useEffect(() => {
    const draft = localStorage.getItem("draftResume");
    if (draft) {
      try {
        const parsed = JSON.parse(draft);
        if (parsed?.personal?.fullName) {
          setResumes([{ id: 1, title: `${parsed.personal.jobTitle || 'Untitled'} Resume`, updated: "Just now" }]);
        }
      } catch (e) {}
    } else {
      setResumes([
         { id: 1, title: "Frontend Developer CV", updated: "2 days ago" },
         { id: 2, title: "Full Stack Resume", updated: "1 week ago" }
      ]);
    }
  }, []);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
           <h1 className="text-3xl font-bold text-white">My Resumes</h1>
           <p className="text-slate-400 mt-1">Manage and edit all your created resumes here.</p>
        </div>
        <Link href="/dashboard/create" className="px-5 py-2.5 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors flex items-center gap-2">
           <Plus size={18} /> Create New
        </Link>
      </div>

      {resumes.length === 0 ? (
         <div className="py-20 text-center border border-white/5 bg-[#060814] rounded-2xl">
            <p className="text-slate-400 mb-4">You haven't created any resumes yet.</p>
            <Link href="/dashboard/create" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white font-medium">
               <Plus size={18} /> Create Your First Resume
            </Link>
         </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {resumes.map((resume) => (
              <div key={resume.id} className="bg-[#060814] border border-white/5 rounded-2xl overflow-hidden group hover:border-indigo-500/30 transition-colors">
                 <div className="aspect-[1/1.2] bg-white/5 p-4 relative">
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-sm z-10">
                       <Link href="/dashboard/create" className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500">Edit</Link>
                       <button onClick={() => alert("Download started")} className="px-4 py-2 bg-white/10 text-white text-sm font-medium rounded hover:bg-white/20">Download</button>
                    </div>
                   
                    {/* Mock Resume Paper */}
                    <div className="w-full h-full bg-white rounded shadow-sm p-4 overflow-hidden pointer-events-none">
                       <div className="w-1/3 h-4 bg-slate-200 rounded mb-2" />
                       <div className="w-1/4 h-2 bg-slate-200 rounded mb-4" />
                       <div className="h-px w-full bg-slate-100 mb-4" />
                       <div className="w-full h-2 bg-slate-100 rounded mb-2" />
                       <div className="w-5/6 h-2 bg-slate-100 rounded mb-2" />
                       <div className="w-4/6 h-2 bg-slate-100 rounded mb-2" />
                    </div>
                 </div>
                 <div className="p-5 flex items-center justify-between border-t border-white/5">
                    <div>
                       <h3 className="font-semibold text-white">{resume.title}</h3>
                       <p className="text-xs text-slate-500 mt-1">Updated {resume.updated}</p>
                    </div>
                    <button onClick={() => alert("Options menu")} className="text-slate-400 hover:text-white"><MoreVertical size={18} /></button>
                 </div>
              </div>
           ))}
        </div>
      )}
    </div>
  );
}
