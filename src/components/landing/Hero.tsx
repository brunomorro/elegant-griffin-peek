"use client";

import React from 'react';
import { motion } from 'framer-motion';
import LeadForm from './LeadForm';
import { Trophy, Users, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#171717] flex items-center overflow-hidden pt-20">
      {/* Glow Effects */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#F46A35] opacity-10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#F46A35] opacity-10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#F46A35] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Plataforma B2B Fitness</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
              Transforme seus educadores físicos em <span className="text-[#F46A35]">embaixadores</span> da sua academia.
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed mb-12 max-w-xl">
              A GymOnHands ajuda academias a aumentar engajamento, retenção e cultura através de gamificação social, aprendizado contínuo e marketing interno.
            </p>

            <div className="hidden lg:grid grid-cols-3 gap-6">
              {[
                { icon: Trophy, label: "Gamificação" },
                { icon: Users, label: "Comunidade" },
                { icon: Zap, label: "Performance" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <item.icon className="w-6 h-6 text-[#F46A35]" />
                  <span className="text-sm font-medium text-gray-300">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-[#262626]/50 backdrop-blur-xl p-8 lg:p-10 rounded-[32px] border border-white/10 shadow-2xl">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Faça um diagnóstico gratuito</h2>
                <p className="text-gray-400 text-sm">Preencha os dados abaixo para começar.</p>
              </div>
              <LeadForm variant="dark" />
            </div>

            {/* Floating Cards Simulation */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-[#F46A35] p-4 rounded-2xl shadow-xl hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white/80 uppercase">Novo Ranking</p>
                  <p className="text-sm font-bold text-white">Professor do Mês</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;