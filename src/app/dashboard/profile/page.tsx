"use client";

import { User, Mail, Shield, Check, Loader2 } from "lucide-react";
import { useState } from "react";

export default function ProfilePage() {
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [profile, setProfile] = useState({
    fullName: "Rasel Bosunia",
    jobTitle: "Frontend Developer"
  });

  const handleSave = () => {
    setIsSaving(true);
    setSaved(false);
    setTimeout(() => {
      setIsSaving(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
         <h1 className="text-3xl font-bold text-white">Profile</h1>
         <p className="text-slate-400 mt-1">Manage your personal information and account settings.</p>
      </div>

      <div className="bg-[#060814] border border-white/5 rounded-2xl p-8 space-y-8">
         <div className="flex items-center gap-6">
            <div className="size-24 rounded-full bg-slate-800 border-4 border-[#0A0B14] flex items-center justify-center text-3xl font-bold text-white">
               {profile.fullName.charAt(0)}
            </div>
            <div>
               <h2 className="text-xl font-semibold text-white">{profile.fullName}</h2>
               <p className="text-slate-400">{profile.jobTitle}</p>
               <button onClick={() => alert("File upload modal coming soon!")} className="mt-3 px-4 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors">
                  Change Avatar
               </button>
            </div>
         </div>

         <div className="space-y-4">
            <div className="grid grid-cols-2 gap-6">
               <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-400">Full Name</label>
                  <input 
                    type="text" 
                    value={profile.fullName} 
                    onChange={e => setProfile({...profile, fullName: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-indigo-500/50" 
                  />
               </div>
               <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-400">Job Title</label>
                  <input 
                    type="text" 
                    value={profile.jobTitle} 
                    onChange={e => setProfile({...profile, jobTitle: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-indigo-500/50" 
                  />
               </div>
            </div>
            <div className="space-y-1.5">
               <label className="text-sm font-medium text-slate-400">Email Address</label>
               <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                  <input type="email" value="rasel@example.com" disabled className="w-full bg-white/5 border border-white/10 rounded-lg pl-11 pr-4 py-2.5 text-slate-400 opacity-70 cursor-not-allowed" />
               </div>
            </div>
         </div>

         <div className="pt-6 border-t border-white/5 flex justify-end items-center gap-4">
            {saved && (
               <span className="text-emerald-400 text-sm flex items-center gap-1.5">
                  <Check size={16} /> Saved successfully
               </span>
            )}
            <button 
               onClick={handleSave}
               disabled={isSaving}
               className="px-6 py-2.5 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors disabled:opacity-50 flex items-center gap-2"
            >
               {isSaving && <Loader2 size={16} className="animate-spin" />}
               Save Changes
            </button>
         </div>
      </div>
    </div>
  );
}
