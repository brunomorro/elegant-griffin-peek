"use client";

import React from 'react';
import { motion } from 'framer-motion';
import LeadForm from './LeadForm';

const FinalCTA = () => {
  return (
    <section className="py-24 bg-[#171717] relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F46A35] opacity-10 blur-[150px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-[48px] p-8 lg:p-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Descubra o nível de engajamento da sua equipe.
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Receba gratuitamente um diagnóstico estratégico da cultura e engajamento da sua academia.
            </p>

            <div className="max-w-md mx-auto">
              <LeadForm variant="dark" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;