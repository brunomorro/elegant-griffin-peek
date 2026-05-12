"use client";

import { motion } from "framer-motion";
import { ArrowDown, TrendingDown, TrendingUp, Users, Heart, DollarSign, UserMinus, UserPlus } from "lucide-react";

const ChainItem = ({ icon: Icon, text, color, isLast = false }: { icon: any, text: string, color: string, isLast?: boolean }) => (
  <div className="flex flex-col items-center text-center">
    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-sm border border-[#e5e5e5] bg-white`}>
      <Icon className={`h-8 w-8 ${color}`} />
    </div>
    <p className="text-lg font-medium text-[#0a0a0a] max-w-[200px]">{text}</p>
    {!isLast && (
      <div className="my-6">
        <ArrowDown className="h-6 w-6 text-[#6a6a6a]/30" />
      </div>
    )}
  </div>
);

export const Comparison = () => {
  return (
    <section id="comparativo" className="py-32 bg-[#F9F9F9]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-[40px] md:text-[56px] font-medium text-[#0a0a0a] leading-[1.1] tracking-[-2px] mb-6">
            O impacto da cultura da sua academia no crescimento do negócio
          </h2>
          <p className="text-xl text-[#3a3a3a] leading-[1.55]">
            A diferença entre apenas operar uma academia e construir uma equipe que impulsiona crescimento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Coluna Esquerda - Efeito Negativo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 bg-[#f5f0e0]/50 rounded-[32px] border border-[#e5e5e5]"
          >
            <div className="text-center mb-12">
              <span className="text-xs font-bold text-[#6a6a6a] uppercase tracking-[0.2em]">Sua academia hoje</span>
              <h3 className="text-2xl font-bold text-[#0a0a0a] mt-2">Ciclo de Estagnação</h3>
            </div>
            
            <div className="flex flex-col items-center">
              <ChainItem icon={UserMinus} text="Sem desenvolvimento dos professores" color="text-[#6a6a6a]" />
              <ChainItem icon={Users} text="Equipe desengajada e sem propósito" color="text-[#6a6a6a]" />
              <ChainItem icon={TrendingDown} text="Menor satisfação dos seus alunos" color="text-[#ef4444]" />
              <ChainItem icon={DollarSign} text="Perda de clientes e baixa rentabilidade" color="text-[#ef4444]" isLast />
            </div>
          </motion.div>

          {/* Coluna Direita - Efeito Positivo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 bg-white rounded-[32px] border-2 border-[#F46A35] shadow-2xl relative transform md:scale-105"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F46A35] text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em]">
              Método GymOnHands
            </div>
            
            <div className="text-center mb-12">
              <span className="text-xs font-bold text-[#F46A35] uppercase tracking-[0.2em]">O caminho do crescimento</span>
              <h3 className="text-2xl font-bold text-[#0a0a0a] mt-2">Ciclo de Prosperidade</h3>
            </div>
            
            <div className="flex flex-col items-center">
              <ChainItem icon={UserPlus} text="Desenvolvimento contínuo do time" color="text-[#F46A35]" />
              <ChainItem icon={Heart} text="Equipe engajada e embaixadora" color="text-[#F46A35]" />
              <ChainItem icon={TrendingUp} text="Máxima satisfação dos seus alunos" color="text-[#22c55e]" />
              <ChainItem icon={DollarSign} text="Alta rentabilidade e crescimento real" color="text-[#22c55e]" isLast />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};