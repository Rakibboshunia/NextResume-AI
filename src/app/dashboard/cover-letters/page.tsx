"use client";

import { FileSignature, Plus } from "lucide-react";

export default function CoverLettersPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
           <h1 className="text-3xl font-bold text-white">Cover Letters</h1>
           <p className="text-slate-400 mt-1">Generate tailored cover letters for specific job applications.</p>
        </div>
        <button onClick={() => alert("Cover Letter Generation coming soon!")} className="px-5 py-2.5 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors flex items-center gap-2">
           <Plus size={18} /> New Cover Letter
        </button>
      </div>

      <div className="bg-[#060814] border border-white/5 rounded-2xl p-16 flex flex-col items-center justify-center text-center">
         <div className="size-24 rounded-full bg-indigo-500/10 flex items-center justify-center mb-6">
            <FileSignature size={40} className="text-indigo-400" />
         </div>
         <h2 className="text-xl font-semibold text-white mb-2">No cover letters yet</h2>
         <p className="text-slate-400 max-w-md mx-auto mb-8">
            Create a highly converting cover letter tailored to the exact job description using our AI cover letter generator.
         </p>
         <button onClick={() => alert("AI Cover Letter feature coming soon!")} className="px-6 py-3 rounded-md bg-white text-black font-semibold hover:bg-slate-200 transition-colors">
            Generate with AI
         </button>
      </div>
    </div>
  );
}
