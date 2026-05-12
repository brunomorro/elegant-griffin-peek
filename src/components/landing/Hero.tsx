import { motion } from "framer-motion";
import { LeadForm } from "./LeadForm";
import { Trophy, Users, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gym-black flex items-center pt-20 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gym-orange/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gym-orange/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            Transforme seus educadores físicos em <span className="text-gym-orange">embaixadores</span> da sua academia.
          </h1>
          <p className="text-xl text-white/60 leading-relaxed mb-8 max-w-xl">
            A GymOnHands ajuda academias a aumentar engajamento, retenção e cultura através de gamificação social, aprendizado contínuo e marketing interno.
          </p>
          
          <div className="flex flex-wrap gap-6 mb-12">
            <div className="flex items-center gap-2 text-white/80">
              <Zap className="h-5 w-5 text-gym-orange" />
              <span className="text-sm font-medium">Gamificação</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Users className="h-5 w-5 text-gym-orange" />
              <span className="text-sm font-medium">Comunidade</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Trophy className="h-5 w-5 text-gym-orange" />
              <span className="text-sm font-medium">Reconhecimento</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <LeadForm variant="hero" />
          
          {/* Floating Cards Simulation */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-10 -right-10 hidden xl:block bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 shadow-2xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gym-orange rounded-full flex items-center justify-center">
                <Trophy className="text-white h-5 w-5" />
              </div>
              <div>
                <p className="text-white text-xs font-bold">Novo Ranking</p>
                <p className="text-white/60 text-[10px]">Professor do Mês</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};