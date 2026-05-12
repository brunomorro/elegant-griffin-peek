"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    { title: "Mais retenção de colaboradores", value: "+40%" },
    { title: "Mais engajamento interno", value: "+65%" },
    { title: "Mais fortalecimento de marca", value: "Premium" },
    { title: "Mais presença digital orgânica", value: "Viral" },
    { title: "Melhor experiência dos alunos", value: "5 Estrelas" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#171717] mb-8">
              Benefícios que impactam o seu lucro.
            </h2>
            <div className="space-y-6">
              {benefits.map((benefit, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between p-6 rounded-2xl bg-[#F9F9F9] border border-gray-100 group hover:border-[#F46A35]/30 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#F46A35]" />
                    <span className="text-lg font-bold text-[#171717]">{benefit.title}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#F46A35] font-bold">
                    <span>{benefit.value}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6 pt-12">
                <div className="aspect-square bg-[#171717] rounded-3xl p-8 flex flex-col justify-end">
                  <p className="text-4xl font-bold text-white mb-2">92%</p>
                  <p className="text-gray-400 text-sm">Engajamento médio dos professores</p>
                </div>
                <div className="aspect-[4/5] bg-[#F46A35] rounded-3xl p-8 flex flex-col justify-between">
                  <ArrowUpRight className="w-8 h-8 text-white" />
                  <p className="text-2xl font-bold text-white">Cultura que escala.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="aspect-[4/5] bg-gray-100 rounded-3xl p-8 flex flex-col justify-between">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <CheckCircle2 className="w-6 h-6 text-[#F46A35]" />
                  </div>
                  <p className="text-xl font-bold text-[#171717]">Processos automatizados.</p>
                </div>
                <div className="aspect-square bg-[#262626] rounded-3xl p-8 flex flex-col justify-end">
                  <p className="text-4xl font-bold text-[#F46A35] mb-2">3x</p>
                  <p className="text-gray-400 text-sm">Mais indicações orgânicas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;