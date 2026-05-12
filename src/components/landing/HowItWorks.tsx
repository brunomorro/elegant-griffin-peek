"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Megaphone, GraduationCap } from 'lucide-react';

const HowItWorks = () => {
  const blocks = [
    {
      title: "Gamificação Social",
      description: "Sistemas de desafios, rankings e reconhecimento para aumentar participação e engajamento dos educadores físicos.",
      icon: Gamepad2
    },
    {
      title: "Marketing & Embaixadores",
      description: "Frameworks e ferramentas para transformar professores em promotores naturais da marca da academia.",
      icon: Megaphone
    },
    {
      title: "Aprendizado Contínuo",
      description: "Treinamentos e conteúdos que desenvolvem habilidades técnicas, comunicação e posicionamento profissional.",
      icon: GraduationCap
    }
  ];

  return (
    <section className="py-24 bg-[#171717] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#F46A35]/30 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Uma plataforma que conecta performance, comunidade e desenvolvimento.
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="space-y-12">
            {blocks.slice(0, 2).map((block, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#F46A35] flex items-center justify-center mb-6 shadow-lg shadow-[#F46A35]/20">
                  <block.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#F46A35] transition-colors">{block.title}</h3>
                <p className="text-gray-400 leading-relaxed">{block.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="relative flex justify-center">
            <div className="w-full max-w-md aspect-[9/16] bg-[#262626] rounded-[40px] border-[8px] border-[#333] shadow-2xl overflow-hidden relative">
              {/* Mockup Content Simulation */}
              <div className="p-6 space-y-6">
                <div className="h-8 w-32 bg-white/5 rounded-lg" />
                <div className="h-48 w-full bg-[#F46A35]/20 rounded-2xl border border-[#F46A35]/30 flex items-center justify-center">
                  <Gamepad2 className="w-12 h-12 text-[#F46A35] opacity-50" />
                </div>
                <div className="space-y-3">
                  <div className="h-4 w-full bg-white/5 rounded" />
                  <div className="h-4 w-2/3 bg-white/5 rounded" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 bg-white/5 rounded-2xl" />
                  <div className="h-24 bg-white/5 rounded-2xl" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent" />
            </div>
            {/* Decorative Glow */}
            <div className="absolute inset-0 bg-[#F46A35] opacity-20 blur-[100px] -z-10" />
          </div>

          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#F46A35] flex items-center justify-center mb-6 shadow-lg shadow-[#F46A35]/20">
                <blocks[2].icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#F46A35] transition-colors">{blocks[2].title}</h3>
              <p className="text-gray-400 leading-relaxed">{blocks[2].description}</p>
            </motion.div>
            
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <p className="text-sm font-bold text-[#F46A35] uppercase tracking-widest mb-4">Resultado Real</p>
              <p className="text-white font-medium italic">"A cultura da nossa academia mudou completamente após 3 meses de GymOnHands."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;