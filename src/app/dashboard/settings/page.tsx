"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export default function SettingsPage() {
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
         <h1 className="text-3xl font-bold text-white">Settings</h1>
         <p className="text-slate-400 mt-1">Manage your application preferences and settings.</p>
      </div>

      <div className="bg-[#060814] border border-white/5 rounded-2xl p-8 space-y-8">
         <div>
            <h2 className="text-xl font-semibold text-white mb-4">Preferences</h2>
            <div className="space-y-4">
               <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5">
                  <div>
                     <h3 className="font-medium text-white">Email Notifications</h3>
                     <p className="text-sm text-slate-400">Receive emails about new features and updates.</p>
                  </div>
                  <button 
                    onClick={() => setEmailNotifs(!emailNotifs)}
                    className={`w-11 h-6 rounded-full relative cursor-pointer transition-colors ${emailNotifs ? 'bg-indigo-600' : 'bg-slate-700'}`}
                  >
                     <div className={`absolute top-1 size-4 bg-white rounded-full transition-transform ${emailNotifs ? 'right-1' : 'translate-x-[4px]'}`} />
                  </button>
               </div>
               <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5">
                  <div>
                     <h3 className="font-medium text-white">Dark Mode</h3>
                     <p className="text-sm text-slate-400">Use dark theme by default.</p>
                  </div>
                  <button 
                    onClick={() => setDarkMode(!darkMode)}
                    className={`w-11 h-6 rounded-full relative cursor-pointer transition-colors ${darkMode ? 'bg-indigo-600' : 'bg-slate-700'}`}
                  >
                     <div className={`absolute top-1 size-4 bg-white rounded-full transition-transform ${darkMode ? 'right-1' : 'translate-x-[4px]'}`} />
                  </button>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
