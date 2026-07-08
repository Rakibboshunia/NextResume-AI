
import Link from "next/link";
import { ChevronDown, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#070913]/90 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="size-8 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-[1px]">
            <div className="w-full h-full bg-[#070913] rounded-[3px] flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
               <Sparkles className="size-4 text-indigo-400 group-hover:text-white transition-colors duration-300" />
            </div>
          </div>
          <span className="font-bold text-xl tracking-tight text-white">ResumeAI</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#features" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="/#templates" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Templates
          </Link>
          <Link href="/#ai-tools" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            AI Tools
          </Link>
          <Link href="/#pricing" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="/#resources" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Resources
          </Link>
          <Link href="/contact" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <Link href="/login" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Log in
          </Link>
          
          <Link href="/signup" className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-md px-5 py-2 text-sm font-medium transition-colors">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
