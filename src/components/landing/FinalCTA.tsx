import { motion } from "framer-motion";
import { LeadForm } from "./LeadForm";

export const FinalCTA = () => {
  return (
    <section className="py-32 bg-brand-black relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/20 rounded-full blur-[150px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[60px] p-8 md:p-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
                Descubra o nível de engajamento da sua equipe.
              </h2>
              <p className="text-xl text-white/60 mb-10 leading-relaxed">
                Receba gratuitamente um diagnóstico estratégico da cultura e engajamento da sua academia. Nossa equipe de especialistas analisará seus dados e entregará um plano de ação personalizado.
              </p>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange font-bold">1</div>
                  <p className="text-white/80 font-medium">Preencha o formulário ao lado</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange font-bold">2</div>
                  <p className="text-white/80 font-medium">Nossa equipe entrará em contato</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange font-bold">3</div>
                  <p className="text-white/80 font-medium">Receba seu diagnóstico completo</p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <LeadForm />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};