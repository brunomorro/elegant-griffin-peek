import { motion } from "framer-motion";
import { LeadForm } from "./LeadForm";
import { Trophy, Users, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 bg-brand-black overflow-hidden flex items-center">
      {/* Glow Effects */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-brand-orange/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              <span className="text-xs font-bold text-white/80 uppercase tracking-widest">Plataforma #1 para Academias</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-brand-white leading-[1.1] tracking-tight mb-8">
              Transforme seus educadores físicos em <span className="text-brand-orange">embaixadores</span> da sua marca.
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-10 max-w-xl">
              A GymOnHands ajuda academias a aumentar engajamento, retenção e cultura através de gamificação social, aprendizado contínuo e marketing interno.
            </p>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-brand-orange" />
                </div>
                <p className="text-sm font-medium text-white/80">Gamificação</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                  <Users className="h-6 w-6 text-brand-orange" />
                </div>
                <p className="text-sm font-medium text-white/80">Comunidade</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-brand-orange" />
                </div>
                <p className="text-sm font-medium text-white/80">Performance</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-orange/20 rounded-full blur-3xl animate-pulse" />
            <LeadForm dark />
            
            {/* Floating Element */}
            <div className="absolute -bottom-6 -left-6 bg-brand-orange p-4 rounded-2xl shadow-2xl hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/70 uppercase">Engajamento</p>
                  <p className="text-lg font-bold text-white">+85%</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};