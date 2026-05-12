"use client";

import { motion } from "framer-motion";
import { LeadForm } from "./LeadForm";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 bg-[#fffaf0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <h1 className="text-[56px] md:text-[72px] font-medium text-[#0a0a0a] leading-[1.0] tracking-[-2.5px] mb-8">
              Transforme seu time em uma máquina de <span className="text-[#F46A35]">crescimento</span>.
            </h1>
            <p className="text-xl text-[#3a3a3a] leading-[1.55] mb-10 max-w-xl">
              A GymOnHands é uma plataforma que gera crescimento real para a sua academia, através do desenvolvimento e transformação de educadores físicos em embaixadores da sua marca.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#0a0a0a] hover:bg-[#2a2a2a] text-white rounded-[12px] px-8 h-14 text-lg font-semibold shadow-lg transition-all hover:scale-105">
                Obter diagnóstico gratuito
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative bg-white rounded-[24px] p-2 border border-[#e5e5e5] shadow-sm">
              <LeadForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};