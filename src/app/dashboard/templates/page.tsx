"use client";

import { LayoutTemplate, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function TemplatesPage() {
  const [selectedTemplate, setSelectedTemplate] = useState(1);
  const [activeTab, setActiveTab] = useState("All Templates");

  const tabs = ["All Templates", "Modern", "Professional", "Creative"];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
         <h1 className="text-3xl font-bold text-white">Templates</h1>
         <p className="text-slate-400 mt-1">Choose from our collection of ATS-friendly templates.</p>
      </div>

      <div className="flex gap-4 mb-8 border-b border-white/5 pb-4 overflow-x-auto">
         {tabs.map(tab => (
            <span 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-medium px-4 py-1.5 cursor-pointer text-sm transition-colors whitespace-nowrap rounded-full ${
                activeTab === tab ? "text-indigo-400 bg-indigo-500/10" : "text-slate-400 hover:text-white"
              }`}
            >
              {tab}
            </span>
         ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
         {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div 
               key={i} 
               onClick={() => setSelectedTemplate(i)}
               className="bg-[#060814] rounded-2xl p-3 border border-white/5 group hover:border-indigo-500/50 transition-all cursor-pointer relative"
            >
               {i === selectedTemplate && (
                  <div className="absolute top-5 right-5 z-20 size-6 bg-indigo-500 rounded-full flex items-center justify-center">
                     <CheckCircle2 size={14} className="text-white" />
                  </div>
               )}
               <div className={`aspect-[1/1.4] rounded-xl overflow-hidden relative ${i === selectedTemplate ? 'ring-2 ring-indigo-500 ring-offset-2 ring-offset-[#060814]' : ''}`}>
                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm z-10">
                     <Link href="/dashboard/create" className="px-5 py-2 bg-indigo-600 text-white text-sm font-medium rounded-full shadow-lg hover:bg-indigo-500 transition-colors">
                       {i === selectedTemplate ? 'Selected' : 'Use Template'}
                     </Link>
                  </div>
                  <div className="w-full h-full bg-slate-200" />
               </div>
               <div className="mt-4 px-2">
                  <h3 className="font-semibold text-white">Template {i}</h3>
                  <p className="text-xs text-slate-500">Free</p>
               </div>
            </div>
         ))}
      </div>
    </div>
  );
}
