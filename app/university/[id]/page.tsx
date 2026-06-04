"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { createClient } from "@/utils/supabase/client"; // Notice we use the client here!
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function UniversityPage() {
  const params = useParams();
  const id = params.id as string;
  
  const [university, setUniversity] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fetch the data on the client side when the page loads
  useEffect(() => {
    async function fetchUniversity() {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("university")
        .select("*")
        .eq("id", parseInt(id, 10))
        .single();

      if (error || !data) {
        setError(true);
      } else {
        setUniversity(data);
      }
      setLoading(false);
    }

    if (id) fetchUniversity();
  }, [id]);

  // Animation variants for Framer Motion
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVars: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 20 } },
  };

  const textVars: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { 
          opacity: 1, 
          y: 0, 
          transition: { type: "spring", stiffness: 100, damping: 20 } 
        },
      } as const;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-orange-500 border-t-transparent animate-spin" />
      </div>
    );
  }

  if (error || !university) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-orange-500 font-bold mb-2">Error 404</p>
        <p className="text-neutral-400 text-sm mb-4">Could not find a matching record for the university.</p>
        <Link href="/" className="text-sm font-medium text-orange-400 hover:text-orange-300">
          ← Back
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen selection:bg-orange-500 selection:text-white relative overflow-hidden font-sans pb-24">
      
      {/* --- Ambient Background Glows --- */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      {/* --- Navigation --- */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="relative z-10 max-w-7xl mx-auto px-6 py-8 flex justify-between items-center"
      >
        <Link href="/" className="group flex items-center gap-2 text-sm text-neutral-400 hover:text-orange-400 transition-colors">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Back
        </Link>
      </motion.nav>

      {/* --- Bento Grid Layout --- */}
      <motion.main 
        variants={containerVars} 
        initial="hidden" 
        animate="show" 
        className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]"
      >
        <motion.div variants={itemVars} className="md:col-span-8 md:row-span-2 group relative rounded-3xl overflow-hidden bg-neutral-900 border border-white/5 hover:border-orange-500/30 transition-colors duration-500">
          <div className="absolute inset-0 z-0">
            <Image 
              src={university.image_src || "/placeholder.jpg"} 
              alt={university.name}
              fill
              priority
              className="object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            {/* Dramatic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent" />
          </div>
          
          <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 sm:p-12">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
              <h1 className="text-5xl sm:text-7xl font-black tracking-tighter text-white mb-2 leading-[0.9]">
                {university.name}
              </h1>
              <div className="flex items-center gap-2 text-neutral-300 text-lg">
                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                {university.city}, Germany
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          variants={textVars} 
          className="md:col-span-4 md:row-span-2 flex flex-col justify-between p-8 rounded-3xl bg-neutral-900 border border-white/5 hover:border-orange-500/30 transition-colors duration-500"
        >
          <div>
            <h3 className="text-xs font-bold tracking-widest text-orange-500 uppercase mb-4">
              About the University
            </h3>
            <p className="text-neutral-300 text-base leading-relaxed font-normal">
              {university.description || "No description available yet."}
            </p>
          </div>

          <div className="text-xs text-neutral-500 mt-6 pt-4 border-t border-white/5">
            Source: Wikipedia
          </div>
        </motion.div>

      </motion.main>
    </div>
  );
}