"use client"; // Ensure this is at the top

import { useRouter } from "next/navigation"; // Import router
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Mic, MessageCircle } from "lucide-react";

export default function HomePage() {
  const router = useRouter(); // Initialize router

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-black text-white flex flex-col items-center justify-center p-8">
      <motion.h1 
        className="text-5xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        AI Interview Assistant
      </motion.h1>

      <motion.p 
        className="text-lg text-gray-300 text-center max-w-2xl mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Prepare for your dream job with AI-powered mock interviews, instant feedback, and real-time analysis.
      </motion.p>

      <motion.div 
        className="flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Fixed onClick event */}
        <Button onClick={() => router.replace("/sign-in")} className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 flex items-center gap-2 rounded-lg shadow-lg">
          <Mic size={20} /> Start Interview
        </Button>
        <Button className="bg-gray-800 hover:bg-gray-600 text-white px-6 py-3 flex items-center gap-2 rounded-lg shadow-lg">
          <MessageCircle size={20} /> Learn More
        </Button>
      </motion.div>

      <motion.div 
        className="absolute top-10 right-10 opacity-30"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        <Sparkles size={60} />
      </motion.div>
    </div>
  );
}
