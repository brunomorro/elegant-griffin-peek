import { motion } from "framer-motion";
import { Gamepad2, Megaphone, GraduationCap } from "lucide-react";

const features = [
  {
    icon: <Gamepad2 className="h-8 w-8 text-white" />,
    title: "Gamificação Social",
    desc: "Sistemas de desafios, rankings e reconhecimento para aumentar participação e engajamento dos educadores físicos."
  },
  {
    icon: <Megaphone className="h-8 w-8 text-white" />,
    title: "Marketing & Embaixadores",
    desc: "Frameworks e ferramentas para transformar professores em promotores naturais da marca da academia."
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-white" />,
    title: "Aprendizado Contínuo",
    desc: "Treinamentos e conteúdos que desenvolvem habilidades técnicas, comunicação e posicionamento profissional."
  }
];

export const Features = () => {
  return (
    <section id="como-fazemos" className="py-24 bg-gym-black relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(244,106,53,0.05)_0%,transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Uma plataforma que conecta <br />
            <span className="text-gym-orange">performance, comunidade e desenvolvimento.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="mb-6 w-16 h-16 bg-gym-orange rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(244,106,53,0.3)] group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed text-lg">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 relative">
          <div className="aspect-video bg-white/5 rounded-[32px] border border-white/10 overflow-hidden shadow-2xl backdrop-blur-sm flex items-center justify-center">
            <div className="text-white/20 text-center">
              <img 
                src="/.dyad/media/10503c7d9f1281f786cc5eee54c1a399.png" 
                alt="Mockup" 
                className="w-32 h-auto opacity-20 mb-4 mx-auto grayscale"
              />
              <p className="text-sm font-medium uppercase tracking-widest">Mockup da Plataforma GymOnHands</p>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-gym-orange/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gym-orange/20 rounded-full blur-2xl" />
        </div>
      </div>
    </section>
  );
};