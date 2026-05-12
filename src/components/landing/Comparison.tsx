"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";

const beforeItems = [
  "Sem desenvolvimento dos educadores físicos",
  "Menor satisfação dos clientes",
  "Perda de clientes",
  "Equipe desengajada"
];

const afterItems = [
  "Desenvolvimento e retenção dos educadores físicos",
  "Satisfação dos clientes",
  "Crescimento para sua academia",
  "Equipe engajada e promovendo sua marca"
];

export const Comparison = () => {
  return (
    <section id="comparativo" className="py-32 bg-[#fffaf0]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-[40px] md:text-[56px] font-medium text-[#0a0a0a] leading-[1.1] tracking-[-2px] mb-6">
            O impacto da cultura da sua academia no crescimento do negócio
          </h2>
          <p className="text-xl text-[#3a3a3a] leading-[1.55]">
            A diferença entre apenas operar uma academia e construir uma equipe que impulsiona crescimento.
          </p>
        </div>

        <div className="relative grid md:grid-cols-2 gap-8 md:gap-0 items-stretch max-w-5xl mx-auto">
          {/* Divider for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#e5e5e5] z-10" />

          {/* Coluna Esquerda - Sua academia hoje */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 bg-[#f5f0e0] rounded-t-[24px] md:rounded-tr-none md:rounded-l-[24px] border border-[#e5e5e5] border-r-0"
          >
            <div className="mb-8">
              <span className="text-sm font-bold text-[#6a6a6a] uppercase tracking-widest">Sua academia hoje</span>
              <h3 className="text-2xl font-bold text-[#0a0a0a] mt-2">Apenas operando</h3>
            </div>
            
            <ul className="space-y-6">
              {beforeItems.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-[#6a6a6a]">
                  <XCircle className="h-6 w-6 text-[#ef4444] shrink-0 mt-0.5" />
                  <span className="text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Coluna Direita - Sua academia com GymOnHands */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 bg-white rounded-b-[24px] md:rounded-bl-none md:rounded-r-[24px] border-2 border-[#F46A35] shadow-2xl relative z-20 transform md:scale-105"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F46A35] text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
              Recomendado
            </div>
            
            <div className="mb-8">
              <span className="text-sm font-bold text-[#F46A35] uppercase tracking-widest">Com o método GymOnHands</span>
              <h3 className="text-2xl font-bold text-[#0a0a0a] mt-2">Crescimento Real</h3>
            </div>
            
            <ul className="space-y-6">
              {afterItems.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-[#0a0a0a] group">
                  <CheckCircle2 className="h-6 w-6 text-[#F46A35] shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
                  <span className="text-lg font-bold">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 pt-8 border-t border-[#e5e5e5]">
              <button className="flex items-center gap-2 text-[#F46A35] font-bold text-lg hover:gap-4 transition-all">
                Quero transformar minha academia <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};