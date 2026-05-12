"use client";

import React from 'react';
import Hero from '@/components/landing/Hero';
import TargetAudience from '@/components/landing/TargetAudience';
import HowItWorks from '@/components/landing/HowItWorks';
import Benefits from '@/components/landing/Benefits';
import FinalCTA from '@/components/landing/FinalCTA';
import Footer from '@/components/landing/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#171717] selection:bg-[#F46A35]/30 selection:text-[#F46A35]">
      {/* Header / Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#171717]/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <img src="/src/assets/logo.png" alt="GymOnHands" className="h-10 brightness-0 invert" />
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Para quem</a>
            <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Como funciona</a>
            <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Benefícios</a>
            <button className="px-6 py-2.5 bg-[#F46A35] hover:bg-[#d95a2a] text-white text-sm font-bold rounded-xl transition-all active:scale-95">
              Diagnóstico Gratuito
            </button>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <TargetAudience />
        <HowItWorks />
        <Benefits />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
};

export default Index;