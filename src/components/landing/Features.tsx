import { motion } from "framer-motion";
import { Share2, GraduationCap, Gamepad2 } from "lucide-react";

const features = [
  {
    title: "Gamificação Social",
    description: "Sistemas de desafios, rankings e reconhecimento para aumentar participação e engajamento dos educadores físicos.",
    icon: Gamepad2,
    color: "bg-purple-500"
  },
  {
    title: "Marketing & Embaixadores",
    description: "Frameworks e ferramentas para transformar professores em promotores naturais da marca da academia.",
    icon: Share2,
    color: "bg-brand-orange"
  },
  {
    title: "Aprendizado Contínuo",
    description: "Treinamentos e conteúdos que desenvolvem habilidades técnicas, comunicação e posicionamento profissional.",
    icon: GraduationCap,
    color: "bg-blue-500"
  }
];

export const Features = () => {
  return (
    <section id="como-fazemos" className="py-32 bg-brand-black relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(244,106,53,0.05)_0%,transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-white mb-6 tracking-tight">
            Uma plataforma que conecta performance, comunidade e desenvolvimento.
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative p-10 rounded-[40px] bg-white/5 border border-white/10 hover:border-brand-orange/30 transition-all group"
            >
              <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-8 shadow-lg shadow-black/20`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed text-lg">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mockup Placeholder */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 relative mx-auto max-w-5xl aspect-video bg-gradient-to-b from-white/10 to-transparent rounded-t-[40px] border-x border-t border-white/10 p-4"
        >
          <div className="w-full h-full bg-brand-black rounded-t-[32px] overflow-hidden flex items-center justify-center border border-white/5">
             <div className="text-white/20 font-bold text-2xl uppercase tracking-widest">Mockup da Plataforma</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};