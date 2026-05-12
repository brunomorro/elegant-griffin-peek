"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="GymOnHands Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold tracking-tight text-brand-white">GymOnHands</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#para-quem" className="text-sm font-medium text-brand-white/60 hover:text-brand-orange transition-colors">Para quem</a>
          <a href="#como-fazemos" className="text-sm font-medium text-brand-white/60 hover:text-brand-orange transition-colors">Como fazemos</a>
          <a href="#beneficios" className="text-sm font-medium text-brand-white/60 hover:text-brand-orange transition-colors">Benefícios</a>
          <Button className="bg-brand-orange hover:bg-[#d45a2a] text-white rounded-full px-6 font-bold">
            Diagnóstico Gratuito
          </Button>
        </div>
      </div>
    </nav>
  );
};