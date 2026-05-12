import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, ShieldCheck, Globe, Heart } from "lucide-react";

const benefits = [
  { title: "Mais retenção de colaboradores", icon: Heart },
  { title: "Mais engajamento interno", icon: TrendingUp },
  { title: "Mais fortalecimento de marca", icon: ShieldCheck },
  { title: "Mais presença digital orgânica", icon: Globe },
  { title: "Melhor experiência dos alunos", icon: CheckCircle2 },
];

export const Benefits = () => {
  return (
    <section id="beneficios" className="py-32 bg-brand-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-8 tracking-tight">
              Resultados que transformam o seu negócio.
            </h2>
            <p className="text-xl text-black/60 mb-12 leading-relaxed">
              Não é apenas sobre tecnologia, é sobre pessoas. Nossa metodologia foca no que realmente importa para o crescimento sustentável da sua academia.
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-black/5 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0">
                    <benefit.icon className="h-5 w-5 text-brand-orange" />
                  </div>
                  <span className="text-lg font-bold text-brand-black">{benefit.title}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6 pt-12">
              <div className="aspect-square bg-brand-black rounded-[40px] p-8 flex flex-col justify-end relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6">
                  <TrendingUp className="h-12 w-12 text-brand-orange opacity-20 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-4xl font-bold text-white mb-2">40%</p>
                <p className="text-white/60 font-medium">Aumento na retenção</p>
              </div>
              <div className="aspect-[4/5] bg-brand-orange rounded-[40px] p-8 flex flex-col justify-end">
                <p className="text-4xl font-bold text-white mb-2">10x</p>
                <p className="text-white/80 font-medium">Mais alcance orgânico</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="aspect-[4/5] bg-brand-white border-2 border-brand-black rounded-[40px] p-8 flex flex-col justify-end">
                <p className="text-4xl font-bold text-brand-black mb-2">95%</p>
                <p className="text-black/60 font-medium">Satisfação do time</p>
              </div>
              <div className="aspect-square bg-zinc-200 rounded-[40px] p-8 flex flex-col justify-end">
                <p className="text-4xl font-bold text-brand-black mb-2">+500</p>
                <p className="text-black/60 font-medium">Líderes formados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};