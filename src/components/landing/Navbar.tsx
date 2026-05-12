"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fffaf0]/80 backdrop-blur-md border-b border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="GymOnHands Logo" className="h-8 w-auto" />
          <span className="text-lg font-bold tracking-tight text-[#0a0a0a]">GymOnHands</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#para-quem" className="text-sm font-medium text-[#3a3a3a] hover:text-[#0a0a0a] transition-colors">Produto</a>
          <a href="#como-fazemos" className="text-sm font-medium text-[#3a3a3a] hover:text-[#0a0a0a] transition-colors">Soluções</a>
          <a href="#beneficios" className="text-sm font-medium text-[#3a3a3a] hover:text-[#0a0a0a] transition-colors">Preços</a>
          <div className="flex items-center gap-4 ml-4">
            <button className="text-sm font-medium text-[#0a0a0a]">Entrar</button>
            <Button className="bg-[#0a0a0a] hover:bg-[#1a1a1a] text-white rounded-[12px] px-5 h-10 text-sm font-semibold">
              Teste grátis
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};