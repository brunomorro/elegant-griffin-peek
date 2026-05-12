"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, TrendingDown, UserMinus, Share2, BookOpen } from 'lucide-react';

const TargetAudience = () => {
  const pains = [
    { icon: TrendingDown, text: "Baixo engajamento dos professores" },
    { icon: AlertCircle, text: "Dificuldade em padronizar cultura" },
    { icon: UserMinus, text: "Alta rotatividade de colaboradores" },
    { icon: Share2, text: "Professores sem incentivo para divulgar a academia" },
    { icon: BookOpen, text: "Falta de desenvolvimento contínuo" }
  ];

  return (
    <section className="py-24 bg-[#F9F9F9]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#171717] mb-6">
            Para academias que cresceram… mas perderam a conexão com o time.
          </h2>
          <p className="text-lg text-gray-600">
            A GymOnHands foi criada para academias que querem crescer sem virar uma operação impessoal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pains.map((pain, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F46A35]/10 flex items-center justify-center shrink-0">
                <pain.icon className="w-6 h-6 text-[#F46A35]" />
              </div>
              <p className="text-lg font-medium text-[#171717] leading-tight pt-2">
                {pain.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;