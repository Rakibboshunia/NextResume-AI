"use client";

import { CreditCard, CheckCircle2 } from "lucide-react";

export default function BillingPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
         <h1 className="text-3xl font-bold text-white">Billing & Subscription</h1>
         <p className="text-slate-400 mt-1">Manage your payment methods and subscription plan.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
         {/* Current Plan */}
         <div className="bg-gradient-to-br from-indigo-900 to-purple-900 border border-white/10 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-[40px]" />
            <h2 className="text-white font-semibold mb-2">Current Plan</h2>
            <div className="flex items-end gap-2 mb-6">
               <span className="text-4xl font-bold text-white">Pro</span>
               <span className="text-indigo-200 mb-1">/ month</span>
            </div>
            <ul className="space-y-3 mb-8">
               {["Unlimited Resumes", "All Premium Templates", "Advanced AI Writer", "PDF & Word Export"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-indigo-100 text-sm">
                     <CheckCircle2 size={16} className="text-indigo-400" /> {feature}
                  </li>
               ))}
            </ul>
            <button onClick={() => alert("Subscription management coming soon!")} className="w-full py-2.5 bg-white text-black font-semibold rounded-lg hover:bg-slate-200 transition-colors">
               Cancel Subscription
            </button>
         </div>

         {/* Payment Method */}
         <div className="bg-[#060814] border border-white/5 rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-white mb-6">Payment Method</h2>
            <div className="p-4 border border-white/10 rounded-xl bg-white/[0.02] flex items-center gap-4 mb-6">
               <div className="p-3 bg-white/5 rounded-lg">
                  <CreditCard className="text-slate-300" size={24} />
               </div>
               <div>
                  <p className="text-white font-medium">•••• •••• •••• 4242</p>
                  <p className="text-sm text-slate-500">Expires 12/24</p>
               </div>
            </div>
            <button onClick={() => alert("Payment update gateway coming soon!")} className="w-full py-2.5 border border-white/10 text-white font-medium rounded-lg hover:bg-white/5 transition-colors">
               Update Payment Method
            </button>
         </div>
      </div>
    </div>
  );
}
