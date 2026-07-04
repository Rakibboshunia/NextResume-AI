"use client";

import { Bot, Send, Sparkles, User } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function AssistantPage() {
  const [messages, setMessages] = useState([
    { id: 1, role: "assistant", content: "Hello! I'm your AI career assistant. How can I help you today? I can review your resume, suggest improvements, or generate a cover letter." },
    { id: 2, role: "user", content: "Can you suggest some strong action verbs for a Frontend Developer resume?" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = { id: Date.now(), role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        role: "assistant",
        content: "That's a great question! For a Frontend Developer, strong action verbs include: Architected, Optimized, Engineered, Implemented, Streamlined, Spearheaded, and Developed. Would you like me to help you use these in a bullet point?"
      }]);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-10rem)] flex flex-col space-y-6">
      <div>
         <h1 className="text-3xl font-bold text-white flex items-center gap-2">
            AI Assistant <Sparkles className="text-indigo-400" size={24} />
         </h1>
         <p className="text-slate-400 mt-1">Ask anything about your resume, cover letter, or interview preparation.</p>
      </div>

      <div className="flex-1 bg-[#060814] border border-white/5 rounded-2xl overflow-hidden flex flex-col">
         {/* Chat Area */}
         <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((msg) => (
               <div key={msg.id} className={`flex items-start gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`size-10 rounded-full flex items-center justify-center shrink-0 border ${msg.role === 'user' ? 'bg-slate-800 border-white/10' : 'bg-indigo-500/20 border-indigo-500/30'}`}>
                     {msg.role === 'user' ? <span className="text-white text-sm font-bold">R</span> : <Bot size={20} className="text-indigo-400" />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm max-w-[80%] ${
                     msg.role === 'user' 
                        ? 'bg-indigo-600 text-white rounded-tr-sm shadow-lg shadow-indigo-500/10' 
                        : 'bg-white/5 text-slate-300 rounded-tl-sm border border-white/5'
                  }`}>
                     {msg.content}
                  </div>
               </div>
            ))}
            <div ref={messagesEndRef} />
         </div>

         {/* Input Area */}
         <div className="p-4 border-t border-white/5 bg-[#0A0B14]">
            <div className="relative">
               <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..." 
                  className="w-full bg-white/5 border border-white/10 rounded-full py-3.5 pl-6 pr-14 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500/50"
               />
               <button 
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 size-10 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:hover:bg-indigo-600 rounded-full flex items-center justify-center text-white transition-colors"
               >
                  <Send size={18} className="ml-1" />
               </button>
            </div>
         </div>
      </div>
    </div>
  );
}
