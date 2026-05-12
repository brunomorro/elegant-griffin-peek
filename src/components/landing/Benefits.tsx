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
    <section id="beneficios" className="py-32 bg-[#F9F9F9] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-[#171717] mb-8 tracking-tight">
              Resultados que transformam o seu negócio.
            </h2>
            <p className="text-xl text-[#171717]/60 mb-12 leading-relaxed">
              Não é apenas sobre tecnologia, é sobre pessoas. Nossa metodologia foca no que realmente importa para o crescimento sustentável da sua academia.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#171717]/5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-full bg-[#F46A35]/10 flex items-center justify-center shrink-0">
                    <benefit.icon className="h-5 w-5 text-[#F46A35]" />
                  </div>
                  <span className="text-lg font-bold text-[#171717]">{benefit.title}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4 md:gap-6">
            <div className="space-y-4 md:space-y-6 pt-8 md:pt-12">
              {/* Card Laranja com texto Preto */}
              <div className="aspect-square bg-[#F46A35] rounded-[32px] md:rounded-[40px] p-6 md:p-8 flex flex-col justify-end relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 md:p-6">
                  <TrendingUp className="h-8 w-8 md:h-12 md:w-12 text-[#171717] opacity-20 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-[#171717] mb-1 md:mb-2">40%</p>
                <p className="text-[#171717]/70 text-sm md:text-base font-medium">Aumento na retenção</p>
              </div>
              {/* Card Branco com texto Preto */}
              <div className="aspect-[4/5] bg-white border-2 border-[#171717] rounded-[32px] md:rounded-[40px] p-6 md:p-8 flex flex-col justify-end">
                <p className="text-3xl md:text-4xl font-bold text-[#171717] mb-1 md:mb-2">10x</p>
                <p className="text-[#171717]/60 text-sm md:text-base font-medium">Mais alcance orgânico</p>
              </div>
            </div>
            <div className="space-y-4 md:space-y-6">
              {/* Card Cinza com texto Preto */}
              <div className="aspect-[4/5] bg-[#F9F9F9] border border-[#e5e5e5] rounded-[32px] md:rounded-[40px] p-6 md:p-8 flex flex-col justify-end">
                <p className="text-3xl md:text-4xl font-bold text-[#171717] mb-1 md:mb-2">95%</p>
                <p className="text-[#171717]/60 text-sm md:text-base font-medium">Satisfação do time</p>
              </div>
              {/* Card Preto com texto Laranja (para manter visibilidade) */}
              <div className="aspect-square bg-[#171717] rounded-[32px] md:rounded-[40px] p-6 md:p-8 flex flex-col justify-end">
                <p className="text-3xl md:text-4xl font-bold text-[#F46A35] mb-1 md:mb-2">+500</p>
                <p className="text-white/60 text-sm md:text-base font-medium">Líderes formados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};