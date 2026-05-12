"use client";

import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fffaf0]/80 backdrop-blur-md border-b border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/src/assets/logo.png" alt="GymOnHands Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold text-[#0a0a0a] tracking-tight">GymOnHands</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#comparativo" className="text-sm font-medium text-[#3a3a3a] hover:text-[#F46A35] transition-colors">Por que nós?</a>
          <a href="#para-quem" className="text-sm font-medium text-[#3a3a3a] hover:text-[#F46A35] transition-colors">Para sua academia</a>
          <Button className="bg-[#0a0a0a] hover:bg-[#2a2a2a] text-white rounded-[12px] px-6 h-10 text-sm font-semibold">
            Obter Diagnóstico
          </Button>
        </div>
      </div>
    </nav>
  );
};