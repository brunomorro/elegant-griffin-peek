"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, PhoneCall, Presentation } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Preencha seus dados",
    description: "Você insere as informações básicas da sua academia no formulário acima."
  },
  {
    icon: PhoneCall,
    title: "Análise do nosso time",
    description: "Nossos especialistas analisam o cenário atual da sua operação e entram em contato."
  },
  {
    icon: Presentation,
    title: "Reunião Estratégica",
    description: "Apresentamos o diagnóstico e explicamos como o método GymOnHands transformará seu negócio."
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-32 bg-[#F9F9F9]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-[40px] md:text-[56px] font-medium text-[#0a0a0a] leading-[1.1] tracking-[-2px] mb-6">
            Como funciona o seu diagnóstico gratuito
          </h2>
          <p className="text-xl text-[#3a3a3a] leading-[1.55]">
            Um processo simples e direto para identificar os gargalos do seu crescimento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-full h-[2px] bg-[#e5e5e5] -z-10" />
              )}
              <div className="w-24 h-24 rounded-[24px] bg-white border-2 border-[#F46A35] flex items-center justify-center mb-8 shadow-lg">
                <step.icon className="h-10 w-10 text-[#F46A35]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0a0a0a] mb-4">{step.title}</h3>
              <p className="text-[#3a3a3a] leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};