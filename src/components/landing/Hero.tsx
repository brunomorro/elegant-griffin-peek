import { motion } from "framer-motion";
import { LeadForm } from "./LeadForm";
import { Trophy, Users, Zap } from "lucide-react";

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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f5f0e0] border border-[#e5e5e5] mb-8">
              <span className="text-[12px] font-bold text-[#0a0a0a] uppercase tracking-[1.5px]">Plataforma de GTM para Academias</span>
            </div>
            <h1 className="text-[56px] md:text-[72px] font-medium text-[#0a0a0a] leading-[1.0] tracking-[-2.5px] mb-8">
              Transforme seu time em uma máquina de <span className="text-[#ff4d8b]">crescimento</span>.
            </h1>
            <p className="text-xl text-[#3a3a3a] leading-[1.55] mb-10 max-w-xl">
              A GymOnHands conecta performance, comunidade e desenvolvimento para transformar educadores físicos em embaixadores da sua marca.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#0a0a0a] hover:bg-[#1a1a1a] text-white rounded-[12px] px-8 h-12 text-base font-semibold">
                Começar agora
              </Button>
              <Button variant="outline" className="bg-transparent border-[#e5e5e5] text-[#0a0a0a] rounded-[12px] px-8 h-12 text-base font-semibold">
                Ver demonstração
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative bg-[#faf5e8] rounded-[24px] p-2 border border-[#e5e5e5] shadow-sm">
              <LeadForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};