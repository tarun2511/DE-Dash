import React from "react";
import { Button } from "@/components/ui/button";

export default function AdminForm() {
    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 p-8 flex items-center justify-center">
      {/* CARD CONTAINER: White on light mode, deep zinc on dark mode with sharp brand-matching borders */}
      <div className="w-full max-w-lg bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 p-8 rounded-2xl shadow-xl dark:shadow-2xl">
        
        <header className="mb-8">
          <h2 className="text-2xl font-black text-zinc-900 dark:text-white tracking-tight">
            Add New <span className="text-[#ff7614]">University</span>
          </h2>
        </header>

        {/* Form action routes directly to your secure server function */}
        <form className="space-y-5">
          
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
              University Name
            </label>
            <input 
              name="name" 
              type="text" 
              required 
              placeholder="e.g., Technical University of Munich" 
              className="p-3 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-900 dark:text-white text-sm placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#ff7614]/20 focus:border-[#ff7614] transition-all" 
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
              City Location
            </label>
            <input 
              name="city" 
              type="text" 
              required 
              placeholder="e.g., Munich" 
              className="p-3 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-900 dark:text-white text-sm placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#ff7614]/20 focus:border-[#ff7614] transition-all" 
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                Image CDN URL
              </label>
              <input 
                name="image_src" 
                type="text" 
                required 
                placeholder="/images/tum.jpg" 
                className="p-3 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-900 dark:text-white text-sm placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#ff7614]/20 focus:border-[#ff7614] transition-all" 
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                Image Alt Text
              </label>
              <input 
                name="image_alt" 
                type="text" 
                required 
                placeholder="Exterior view of campus" 
                className="p-3 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-900 dark:text-white text-sm placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#ff7614]/20 focus:border-[#ff7614] transition-all" 
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
              Campus Overview Description
            </label>
            <textarea 
              name="description" 
              rows={4} 
              placeholder="Provide a historical or structural summary of the institution..." 
              className="p-3 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-900 dark:text-white text-sm placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#ff7614]/20 focus:border-[#ff7614] transition-all resize-none" 
            />
          </div>

          {/* THE BRAND BUTTON: Features smooth color transitions and a modern glowing orange shadow */}
          <button 
            type="submit" 
            className="w-full mt-3 py-3.5 bg-[#ff7614] hover:bg-[#e0630b] text-white rounded-xl font-bold tracking-wide transition-all duration-150 shadow-md shadow-orange-500/10 hover:shadow-lg hover:shadow-orange-500/20 active:scale-[0.99]"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
    )
}