"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FileText, Plus, LayoutTemplate, Bot, FileSignature, User, Settings, CreditCard, LogOut, Search, Bell } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#0F111A] text-slate-300 flex font-[family-name:var(--font-geist-sans)] selection:bg-indigo-500/30">
      {/* Sidebar */}
      <aside className="w-[260px] border-r border-white/[0.04] bg-[#131520] flex flex-col shrink-0 overflow-y-auto">
        <div className="p-6">
          <Link href="/" className="flex items-center gap-2 mb-8">
            <div className="size-7 rounded bg-indigo-600 flex items-center justify-center">
               <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="font-bold text-lg text-white tracking-tight">ResumeAI</span>
          </Link>
        </div>

        <div className="px-4 flex-1">
          <nav className="space-y-1.5">
            <SidebarItem href="/dashboard" icon={<LayoutDashboard size={18} />} label="Dashboard" active={pathname === "/dashboard"} />
            <SidebarItem href="/dashboard/resumes" icon={<FileText size={18} />} label="My Resumes" active={pathname === "/dashboard/resumes"} />
            
            <Link href="/dashboard/create" className={`flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors group ${pathname === "/dashboard/create" ? "bg-indigo-600/10 text-indigo-400" : "text-slate-400 hover:text-white hover:bg-white/5"}`}>
               <div className="flex items-center gap-3">
                 <div className="size-[18px] flex items-center justify-center"><Plus size={18} /></div>
                 <span className="font-medium text-sm">Create Resume</span>
               </div>
               <div className="size-5 rounded bg-indigo-600 text-white flex items-center justify-center text-xs font-bold shadow-lg shadow-indigo-600/20">+</div>
            </Link>

            <SidebarItem href="/dashboard/templates" icon={<LayoutTemplate size={18} />} label="Templates" active={pathname === "/dashboard/templates"} />
            <SidebarItem href="/dashboard/assistant" icon={<Bot size={18} />} label="AI Assistant" active={pathname === "/dashboard/assistant"} />
            <SidebarItem href="/dashboard/cover-letters" icon={<FileSignature size={18} />} label="Cover Letters" active={pathname === "/dashboard/cover-letters"} />
            
            <div className="my-6 border-t border-white/[0.04] pt-4"></div>
            
            <SidebarItem href="/dashboard/profile" icon={<User size={18} />} label="Profile" active={pathname === "/dashboard/profile"} />
            <SidebarItem href="/dashboard/settings" icon={<Settings size={18} />} label="Settings" active={pathname === "/dashboard/settings"} />
            <SidebarItem href="/dashboard/billing" icon={<CreditCard size={18} />} label="Billing" active={pathname === "/dashboard/billing"} />
          </nav>
        </div>

        <div className="p-4 mt-auto">
          <SidebarItem href="/login" icon={<LogOut size={18} />} label="Logout" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen overflow-hidden relative">
        {/* Header */}
        <header className="h-20 flex items-center justify-end px-8 shrink-0 absolute top-0 right-0 left-0 pointer-events-none z-10">
           <div className="flex items-center gap-6 pointer-events-auto">
              <button onClick={() => alert("Search coming soon!")} className="text-slate-400 hover:text-white transition-colors">
                <Search size={20} />
              </button>
              <button onClick={() => alert("You have 3 new notifications!")} className="text-slate-400 hover:text-white transition-colors relative">
                <Bell size={20} />
                <span className="absolute 1 top-0 right-0 size-2 bg-rose-500 rounded-full border-2 border-[#0F111A]"></span>
              </button>
              <div className="flex items-center gap-3 pl-4 border-l border-white/10 cursor-pointer group">
                 <div className="size-9 rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Profile" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                 </div>
                 <div className="flex flex-col hidden sm:flex">
                    <span className="text-sm font-semibold text-white leading-tight group-hover:text-indigo-400 transition-colors">Rasel Bosunia</span>
                    <span className="text-xs text-slate-500 leading-tight">Frontend Developer</span>
                 </div>
              </div>
           </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-8 pt-24 custom-scrollbar">
           {children}
        </div>
      </main>
    </div>
  );
}

function SidebarItem({ href, icon, label, active = false }: { href: string; icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <Link 
      href={href} 
      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${
        active 
          ? "bg-indigo-600/10 text-indigo-400" 
          : "text-slate-400 hover:text-white hover:bg-white/5"
      }`}
    >
      <div className="size-[18px] flex items-center justify-center">
         {icon}
      </div>
      {label}
    </Link>
  );
}
