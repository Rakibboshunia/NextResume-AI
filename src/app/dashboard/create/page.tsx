"use client";

import { useState, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2, Wand2, ArrowLeft, ArrowRight, Check, Monitor, Tablet, Smartphone, ZoomIn, ZoomOut, Download } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Validation Schema
const resumeSchema = z.object({
  personal: z.object({
    fullName: z.string().min(2, "Name is required"),
    jobTitle: z.string().min(2, "Job title is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string(),
    location: z.string(),
    portfolio: z.string(),
    summary: z.string().min(10, "Summary must be at least 10 characters")
  }),
  experience: z.array(z.object({
    jobTitle: z.string().min(2, "Required"),
    company: z.string().min(2, "Required"),
    location: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    current: z.boolean(),
    description: z.string()
  })),
  education: z.array(z.object({
    degree: z.string().min(2, "Required"),
    university: z.string().min(2, "Required"),
    startDate: z.string(),
    endDate: z.string(),
  })),
  skills: z.string()
});

type ResumeFormValues = z.infer<typeof resumeSchema>;

const STEPS = ["Personal Info", "Experience", "Education", "Skills", "Review & Download"];

export default function CreateResumePage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const form = useForm<ResumeFormValues>({
    resolver: zodResolver(resumeSchema),
    defaultValues: {
      personal: { fullName: "John Doe", jobTitle: "Frontend Developer", email: "john@example.com", phone: "+880 1234 567890", location: "Dhaka, Bangladesh", portfolio: "", summary: "Passionate Frontend Developer with 4+ years of experience building modern web applications using React, Next.js and TypeScript. Skilled in creating responsive, user-friendly interfaces and optimizing performance." },
      experience: [{ jobTitle: "Senior Frontend Developer", company: "Fire AI Software Ltd.", location: "Dhaka, Bangladesh", startDate: "Jan 2022", endDate: "Present", current: true, description: "• Developed and maintained scalable web applications using React, Next.js and TypeScript.\n• Collaborated with design and backend teams to build high-quality products.\n• Improved application performance by 40% through optimization." }],
      education: [{ degree: "", university: "", startDate: "", endDate: "" }],
      skills: ""
    }
  });

  const { fields: expFields, append: appendExp, remove: removeExp } = useFieldArray({ control: form.control, name: "experience" });
  const { fields: eduFields, append: appendEdu, remove: removeEdu } = useFieldArray({ control: form.control, name: "education" });

  const watchAllFields = form.watch();

  useEffect(() => {
    const saved = localStorage.getItem("draftResume");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed) form.reset(parsed);
      } catch (e) {}
    }
  }, [form]);

  useEffect(() => {
    localStorage.setItem("draftResume", JSON.stringify(watchAllFields));
  }, [watchAllFields]);

  const nextStep = () => {
     if (currentStep < STEPS.length - 1) setCurrentStep(curr => curr + 1);
  };
  
  const prevStep = () => {
     if (currentStep > 0) setCurrentStep(curr => curr - 1);
  };

  const onFinish = async (data: ResumeFormValues) => {
    setIsSaving(true);
    setSaveMsg(null);
    try {
      const title = `${data.personal.jobTitle || "Resume"} — ${data.personal.fullName}`;
      const res = await fetch("/api/resumes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content: data }),
      });
      if (res.ok) {
        setSaveMsg({ type: "success", text: "Resume saved successfully!" });
        localStorage.removeItem("draftResume");
      } else {
        const err = await res.json();
        setSaveMsg({ type: "error", text: err.error || "Failed to save. Please try again." });
      }
    } catch {
      setSaveMsg({ type: "error", text: "Network error. Please check your connection." });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="h-[calc(100vh-10rem)] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 px-2">
         <Link href="/dashboard" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
            <ArrowLeft size={16} /> Back to Dashboard
         </Link>
         
         <div className="flex items-center gap-4">
            {/* Save status */}
            {saveMsg && (
              <span className={`text-sm flex items-center gap-1.5 font-medium ${saveMsg.type === "success" ? "text-emerald-400" : "text-red-400"}`}>
                {saveMsg.type === "success" ? <Check size={16} /> : <span>⚠</span>} {saveMsg.text}
              </span>
            )}
            {!saveMsg && (
              <span className="text-emerald-500 text-sm flex items-center gap-1.5 font-medium">
                <Check size={16} /> Auto-saved
              </span>
            )}
            {currentStep > 0 && (
               <Button variant="outline" className="border-white/10 text-slate-300 hover:bg-white/5 hover:text-white rounded-lg px-6" onClick={prevStep}>
                 <ArrowLeft size={16} className="mr-2" /> Previous
               </Button>
            )}
            {currentStep < STEPS.length - 1 ? (
              <Button className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg px-6" onClick={nextStep}>
                Next <ArrowRight size={16} className="ml-2" />
              </Button>
            ) : (
              <Button
                className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg px-6"
                disabled={isSaving}
                onClick={form.handleSubmit(onFinish)}
              >
                {isSaving ? <div className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" /> : <Check size={16} className="mr-2" />}
                {isSaving ? "Saving…" : "Save Resume"}
              </Button>
            )}
         </div>
      </div>

      {/* Stepper */}
      <div className="flex items-center justify-center gap-2 mb-8">
         {STEPS.map((step, idx) => (
            <div key={idx} className="flex items-center gap-2">
               <div className={`size-6 rounded-full flex items-center justify-center text-xs font-bold border ${
                  idx === currentStep ? "bg-indigo-600 border-indigo-600 text-white shadow-[0_0_15px_rgba(79,70,229,0.5)]" : 
                  idx < currentStep ? "border-indigo-500 text-indigo-400 bg-transparent" : "border-white/10 text-slate-500 bg-transparent"
               }`}>
                  {idx < currentStep ? <Check size={12} /> : idx + 1}
               </div>
               <span className={`text-sm hidden md:block ${idx === currentStep ? "text-white font-medium" : idx < currentStep ? "text-indigo-400" : "text-slate-500"}`}>
                  {step}
               </span>
               {idx < STEPS.length - 1 && <div className={`w-8 h-[1px] hidden md:block ${idx < currentStep ? "bg-indigo-500/50" : "bg-white/10"}`} />}
            </div>
         ))}
      </div>

      <div className="flex-1 flex gap-6 min-h-0 overflow-hidden">
         {/* Form Section */}
         <div className="w-full lg:w-[400px] bg-[#131520] border border-white/[0.04] rounded-2xl p-6 overflow-y-auto custom-scrollbar shrink-0">
            <form className="space-y-6">
               {/* Step 1: Experience (as shown in screenshot) */}
               {currentStep === 1 && (
                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                   <div>
                     <h2 className="text-xl font-bold text-white mb-2">Experience Details</h2>
                     <p className="text-slate-400 text-sm">Add your work experience. AI will help you write better bullet points.</p>
                   </div>
                   
                   {expFields.map((field, index) => (
                     <div key={field.id} className="space-y-4 relative group">
                        {index > 0 && (
                          <button type="button" onClick={() => removeExp(index)} className="absolute top-0 right-0 text-slate-500 hover:text-red-400 transition-opacity">
                             <Trash2 size={16} />
                          </button>
                        )}
                        
                        <div>
                           <label className="text-xs font-medium text-slate-400 mb-1.5 block">Job Title <span className="text-rose-500">*</span></label>
                           <Input {...form.register(`experience.${index}.jobTitle`)} className="bg-[#1B1E2B] border-transparent focus-visible:border-indigo-500/50 text-slate-200" />
                        </div>
                        <div>
                           <label className="text-xs font-medium text-slate-400 mb-1.5 block">Company <span className="text-rose-500">*</span></label>
                           <Input {...form.register(`experience.${index}.company`)} className="bg-[#1B1E2B] border-transparent focus-visible:border-indigo-500/50 text-slate-200" />
                        </div>
                        <div>
                           <label className="text-xs font-medium text-slate-400 mb-1.5 block">Location</label>
                           <Input {...form.register(`experience.${index}.location`)} className="bg-[#1B1E2B] border-transparent focus-visible:border-indigo-500/50 text-slate-200" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                           <div>
                              <label className="text-xs font-medium text-slate-400 mb-1.5 block">Start Date</label>
                              <Input {...form.register(`experience.${index}.startDate`)} className="bg-[#1B1E2B] border-transparent focus-visible:border-indigo-500/50 text-slate-200" />
                           </div>
                           <div>
                              <label className="text-xs font-medium text-slate-400 mb-1.5 block">End Date</label>
                              <Input {...form.register(`experience.${index}.endDate`)} className="bg-[#1B1E2B] border-transparent focus-visible:border-indigo-500/50 text-slate-200" />
                           </div>
                        </div>
                        
                        <div className="flex items-center gap-2 mt-2 mb-4">
                           <input type="checkbox" className="rounded border-white/20 bg-[#1B1E2B] text-indigo-600 focus:ring-indigo-500/30 accent-indigo-600 cursor-pointer" defaultChecked={true} />
                           <span className="text-sm text-slate-300">I currently work here</span>
                        </div>
                        
                        <div>
                           <label className="text-xs font-medium text-slate-400 mb-1.5 block">Description</label>
                           <Textarea {...form.register(`experience.${index}.description`)} rows={6} className="bg-[#1B1E2B] border-transparent focus-visible:border-indigo-500/50 text-slate-200 resize-none font-sans text-sm" />
                        </div>
                     </div>
                   ))}
                   
                   <Button type="button" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_20px_rgba(79,70,229,0.3)] border-0">
                      <Wand2 size={16} className="mr-2" /> Improve with AI
                   </Button>
                   <Button type="button" variant="outline" onClick={() => appendExp({ jobTitle: "", company: "", location: "", startDate: "", endDate: "", current: false, description: "" })} className="w-full border-indigo-600 text-indigo-400 bg-indigo-600/10 hover:bg-indigo-600/20 hover:text-indigo-300 transition-colors">
                      <Plus size={16} className="mr-2" /> Add Experience
                   </Button>
                 </motion.div>
               )}
               
               {/* Step 0: Personal Info */}
               {currentStep === 0 && (
                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                   <div>
                     <h2 className="text-xl font-bold text-white mb-2">Personal Information</h2>
                     <p className="text-slate-400 text-sm">Let's start with your basic contact details.</p>
                   </div>
                   
                   <div className="space-y-4">
                     <div>
                        <label className="text-xs font-medium text-slate-400 mb-1.5 block">Full Name <span className="text-rose-500">*</span></label>
                        <Input {...form.register("personal.fullName")} className="bg-[#1B1E2B] border-transparent focus-visible:border-indigo-500/50 text-slate-200" />
                     </div>
                     <div>
                        <label className="text-xs font-medium text-slate-400 mb-1.5 block">Job Title <span className="text-rose-500">*</span></label>
                        <Input {...form.register("personal.jobTitle")} className="bg-[#1B1E2B] border-transparent focus-visible:border-indigo-500/50 text-slate-200" />
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                        <div>
                           <label className="text-xs font-medium text-slate-400 mb-1.5 block">Email <span className="text-rose-500">*</span></label>
                           <Input type="email" {...form.register("personal.email")} className="bg-[#1B1E2B] border-transparent focus-visible:border-indigo-500/50 text-slate-200" />
                        </div>
                        <div>
                           <label className="text-xs font-medium text-slate-400 mb-1.5 block">Phone</label>
                           <Input {...form.register("personal.phone")} className="bg-[#1B1E2B] border-transparent focus-visible:border-indigo-500/50 text-slate-200" />
                        </div>
                     </div>
                     <div>
                        <label className="text-xs font-medium text-slate-400 mb-1.5 block">Location</label>
                        <Input {...form.register("personal.location")} className="bg-[#1B1E2B] border-transparent focus-visible:border-indigo-500/50 text-slate-200" />
                     </div>
                     <div>
                        <label className="text-xs font-medium text-slate-400 mb-1.5 block">Portfolio / LinkedIn</label>
                        <Input {...form.register("personal.portfolio")} className="bg-[#1B1E2B] border-transparent focus-visible:border-indigo-500/50 text-slate-200" />
                     </div>
                     <div>
                        <label className="text-xs font-medium text-slate-400 mb-1.5 block">Professional Summary <span className="text-rose-500">*</span></label>
                        <Textarea {...form.register("personal.summary")} rows={5} className="bg-[#1B1E2B] border-transparent focus-visible:border-indigo-500/50 text-slate-200 resize-none" />
                     </div>
                   </div>
                 </motion.div>
               )}

               {/* Step 2: Education */}
               {currentStep === 2 && (
                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                   <div>
                     <h2 className="text-xl font-bold text-white mb-2">Education</h2>
                     <p className="text-slate-400 text-sm">Add your educational background.</p>
                   </div>
                   
                   {eduFields.map((field, index) => (
                     <div key={field.id} className="space-y-4 relative group">
                        {index > 0 && (
                          <button type="button" onClick={() => removeEdu(index)} className="absolute top-0 right-0 text-slate-500 hover:text-red-400 transition-opacity">
                             <Trash2 size={16} />
                          </button>
                        )}
                        <div>
                           <label className="text-xs font-medium text-slate-400 mb-1.5 block">Degree <span className="text-rose-500">*</span></label>
                           <Input {...form.register(`education.${index}.degree`)} className="bg-[#1B1E2B] border-transparent focus-visible:border-indigo-500/50 text-slate-200" />
                        </div>
                        <div>
                           <label className="text-xs font-medium text-slate-400 mb-1.5 block">University <span className="text-rose-500">*</span></label>
                           <Input {...form.register(`education.${index}.university`)} className="bg-[#1B1E2B] border-transparent focus-visible:border-indigo-500/50 text-slate-200" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                           <div>
                              <label className="text-xs font-medium text-slate-400 mb-1.5 block">Start Date</label>
                              <Input {...form.register(`education.${index}.startDate`)} className="bg-[#1B1E2B] border-transparent focus-visible:border-indigo-500/50 text-slate-200" />
                           </div>
                           <div>
                              <label className="text-xs font-medium text-slate-400 mb-1.5 block">End Date</label>
                              <Input {...form.register(`education.${index}.endDate`)} className="bg-[#1B1E2B] border-transparent focus-visible:border-indigo-500/50 text-slate-200" />
                           </div>
                        </div>
                     </div>
                   ))}
                   
                   <Button type="button" variant="outline" onClick={() => appendEdu({ degree: "", university: "", startDate: "", endDate: "" })} className="w-full border-indigo-600 text-indigo-400 bg-indigo-600/10 hover:bg-indigo-600/20 hover:text-indigo-300 transition-colors">
                      <Plus size={16} className="mr-2" /> Add Education
                   </Button>
                 </motion.div>
               )}

               {/* Step 3: Skills */}
               {currentStep === 3 && (
                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                   <div>
                     <h2 className="text-xl font-bold text-white mb-2">Skills</h2>
                     <p className="text-slate-400 text-sm">List your key skills, separated by commas.</p>
                   </div>
                   
                   <div>
                      <label className="text-xs font-medium text-slate-400 mb-1.5 block">Skills</label>
                      <Textarea {...form.register("skills")} placeholder="React, Next.js, TypeScript, Node.js..." rows={5} className="bg-[#1B1E2B] border-transparent focus-visible:border-indigo-500/50 text-slate-200 resize-none" />
                   </div>
                 </motion.div>
               )}

               {/* Step 4: Review & Download */}
               {currentStep === 4 && (
                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                   <div>
                     <h2 className="text-xl font-bold text-white mb-2">Review & Download</h2>
                     <p className="text-slate-400 text-sm">Your resume is ready! Review the preview on the right and download.</p>
                   </div>
                   
                   <div className="bg-indigo-500/10 border border-indigo-500/20 p-6 rounded-xl text-center space-y-4">
                      <div className="size-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto">
                         <Check className="text-indigo-400" size={32} />
                      </div>
                      <h3 className="text-lg font-semibold text-white">Looks Good!</h3>
                      <p className="text-sm text-slate-400">All required information has been filled correctly.</p>
                   </div>
                   
                   <Button type="button" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_20px_rgba(79,70,229,0.3)] border-0 py-6 text-lg rounded-xl">
                      <Download size={20} className="mr-2" /> Download PDF
                   </Button>
                 </motion.div>
               )}
            </form>
         </div>

         {/* Live Preview Section */}
         <div className="hidden lg:flex flex-1 flex-col bg-[#131520] border border-white/[0.04] rounded-2xl overflow-hidden shadow-2xl relative">
             <div className="h-14 border-b border-white/[0.04] flex items-center justify-between px-6 shrink-0 bg-[#0F111A]/50">
                <span className="text-sm font-medium text-white">Live Preview</span>
                <div className="flex items-center gap-4 text-slate-400">
                   <Monitor size={18} className="text-indigo-400 cursor-pointer" />
                   <Tablet size={18} className="hover:text-white cursor-pointer transition-colors" />
                   <Smartphone size={18} className="hover:text-white cursor-pointer transition-colors" />
                   <div className="w-px h-4 bg-white/10 mx-2" />
                   <ZoomOut size={18} className="hover:text-white cursor-pointer transition-colors" />
                   <ZoomIn size={18} className="hover:text-white cursor-pointer transition-colors" />
                   <Download size={18} className="hover:text-white cursor-pointer transition-colors ml-2" />
                </div>
             </div>

             <div className="flex-1 overflow-auto custom-scrollbar p-8 bg-[#0B0C10] flex justify-center items-start">
                {/* Resume Paper */}
                <div className="w-full max-w-[800px] min-h-[297mm] p-12 bg-white text-black shadow-2xl rounded-sm">
                   {/* Header */}
                   <div className="flex items-center gap-6 mb-8 border-b-2 border-slate-200 pb-8">
                      <div className="size-24 rounded-full overflow-hidden shrink-0 border border-slate-200">
                         {/* eslint-disable-next-line @next/next/no-img-element */}
                         <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Profile" className="w-full h-full object-cover" />
                      </div>
                      <div>
                         <h1 className="text-4xl font-bold text-slate-900 mb-1">{watchAllFields.personal?.fullName}</h1>
                         <h2 className="text-xl text-slate-600 font-medium mb-3">{watchAllFields.personal?.jobTitle}</h2>
                         
                         <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500 font-medium">
                            <span className="flex items-center gap-1.5">✉ {watchAllFields.personal?.email}</span>
                            <span className="flex items-center gap-1.5">📞 {watchAllFields.personal?.phone}</span>
                            <span className="flex items-center gap-1.5">📍 {watchAllFields.personal?.location}</span>
                         </div>
                      </div>
                   </div>

                   <div className="space-y-8">
                      {/* Summary */}
                      <div>
                         <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-2 mb-4 flex items-center gap-2">
                           Professional Summary
                         </h3>
                         <p className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">
                            {watchAllFields.personal?.summary}
                         </p>
                      </div>

                      {/* Experience */}
                      <div>
                         <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-2 mb-4 flex items-center gap-2">
                           Experience
                         </h3>
                         <div className="space-y-6">
                            {watchAllFields.experience?.map((exp, idx) => (
                               <div key={idx} className="relative pl-6">
                                  <div className="absolute left-0 top-1.5 size-2 bg-indigo-600 rounded-sm" />
                                  <div className="absolute left-1 top-4 bottom-[-16px] w-[1px] bg-slate-200" />
                                  <div className="flex justify-between items-baseline mb-1">
                                     <h4 className="font-bold text-slate-900 text-base">{exp.jobTitle || "Job Title"}</h4>
                                     <span className="text-xs text-slate-500 font-medium">{exp.startDate} - {exp.endDate}</span>
                                  </div>
                                  <div className="text-sm text-slate-600 mb-3">{exp.company}{exp.location ? ` | ${exp.location}` : ''}</div>
                                  <p className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">
                                     {exp.description}
                                  </p>
                               </div>
                            ))}
                         </div>
                      </div>

                      {/* Education */}
                      {watchAllFields.education && watchAllFields.education.length > 0 && watchAllFields.education[0].degree !== "" && (
                        <div>
                           <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-2 mb-4 flex items-center gap-2">
                             Education
                           </h3>
                           <div className="space-y-4">
                              {watchAllFields.education.map((edu, idx) => (
                                 <div key={idx} className="flex justify-between items-baseline">
                                    <div>
                                       <h4 className="font-bold text-slate-900 text-base">{edu.degree}</h4>
                                       <div className="text-sm text-slate-600">{edu.university}</div>
                                    </div>
                                    <span className="text-xs text-slate-500 font-medium">{edu.startDate} - {edu.endDate}</span>
                                 </div>
                              ))}
                           </div>
                        </div>
                      )}

                      {/* Skills */}
                      {watchAllFields.skills && (
                        <div>
                           <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-2 mb-4 flex items-center gap-2">
                             Skills
                           </h3>
                           <div className="flex flex-wrap gap-2">
                              {watchAllFields.skills.split(',').filter(skill => skill.trim() !== '').map((skill, idx) => (
                                 <span key={idx} className="text-sm font-medium text-slate-700 bg-slate-100 px-2 py-1 rounded">
                                    {skill.trim()}
                                 </span>
                              ))}
                           </div>
                        </div>
                      )}
                   </div>
                </div>
             </div>
         </div>
      </div>
    </div>
  );
}
