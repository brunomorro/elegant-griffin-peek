import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, ShieldCheck, Globe, Heart } from "lucide-react";

const benefits = [
  { icon: <Heart className="text-gym-orange" />, text: "Mais retenção de colaboradores" },
  { icon: <TrendingUp className="text-gym-orange" />, text: "Mais engajamento interno" },
  { icon: <ShieldCheck className="text-gym-orange" />, text: "Mais fortalecimento de marca" },
  { icon: <Globe className="text-gym-orange" />, text: "Mais presença digital orgânica" },
  { icon: <CheckCircle2 className="text-gym-orange" />, text: "Melhor experiência dos alunos" }
];

export const Benefits = () => {
  return (
    <section id="beneficios" className="py-24 bg-gym-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gym-black mb-8 tracking-tight">
              Resultados que impactam <br />
              <span className="text-gym-orange">o seu faturamento.</span>
            </h2>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100"
                >
                  <div className="p-2 bg-gym-orange/10 rounded-lg">
                    {benefit.icon}
                  </div>
                  <span className="text-lg font-bold text-gym-black">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-gym-black p-8 rounded-[32px] text-white">
                <p className="text-4xl font-bold text-gym-orange mb-2">+40%</p>
                <p className="text-sm text-white/60 font-medium uppercase tracking-wider">Engajamento</p>
              </div>
              <div className="bg-gym-orange p-8 rounded-[32px] text-white">
                <p className="text-4xl font-bold mb-2">-25%</p>
                <p className="text-sm text-white/80 font-medium uppercase tracking-wider">Turnover</p>
              </div>
            </div>
            <div className="pt-12 space-y-6">
              <div className="bg-white border border-gray-100 p-8 rounded-[32px] shadow-xl">
                <p className="text-4xl font-bold text-gym-black mb-2">2x</p>
                <p className="text-sm text-gym-black/40 font-medium uppercase tracking-wider">Presença Digital</p>
              </div>
              <div className="bg-gym-black/5 p-8 rounded-[32px]">
                <p className="text-4xl font-bold text-gym-black mb-2">98%</p>
                <p className="text-sm text-gym-black/40 font-medium uppercase tracking-wider">Satisfação</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};