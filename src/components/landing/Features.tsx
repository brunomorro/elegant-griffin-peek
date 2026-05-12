import { motion } from "framer-motion";
import { Share2, GraduationCap, Gamepad2, ArrowRight } from "lucide-react";

const features = [
  {
    title: "Gamificação Social",
    description: "Sistemas de desafios e rankings para aumentar a participação dos educadores.",
    icon: Gamepad2,
    color: "bg-[#ff4d8b]", // Brand Pink
    textColor: "text-white"
  },
  {
    title: "Marketing Interno",
    description: "Transforme seus professores em promotores naturais da marca.",
    icon: Share2,
    color: "#1a3a3a", // Brand Teal
    textColor: "text-white"
  },
  {
    title: "Desenvolvimento",
    description: "Treinamentos que desenvolvem habilidades técnicas e comunicação.",
    icon: GraduationCap,
    color: "bg-[#b8a4ed]", // Brand Lavender
    textColor: "text-[#0a0a0a]"
  }
];

export const Features = () => {
  return (
    <section id="como-fazemos" className="py-32 bg-[#fffaf0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h2 className="text-[40px] md:text-[56px] font-medium text-[#0a0a0a] leading-[1.05] tracking-[-2px] mb-6">
            Uma plataforma feita para <br />conectar seu time.
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Card Pink */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#ff4d8b] rounded-[24px] p-10 text-white flex flex-col justify-between min-h-[400px]"
          >
            <div>
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-8">
                <Gamepad2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-medium tracking-tight mb-4">Gamificação Social</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                Sistemas de desafios, rankings e reconhecimento para aumentar participação e engajamento.
              </p>
            </div>
            <div className="flex items-center gap-2 font-semibold cursor-pointer group">
              Saiba mais <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* Card Teal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#1a3a3a] rounded-[24px] p-10 text-white flex flex-col justify-between min-h-[400px]"
          >
            <div>
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-8">
                <Share2 className="h-6 w-6 text-[#a4d4c5]" />
              </div>
              <h3 className="text-2xl font-medium tracking-tight mb-4">Marketing & Embaixadores</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                Frameworks para transformar professores em promotores naturais da marca da academia.
              </p>
            </div>
            <div className="flex items-center gap-2 font-semibold cursor-pointer group">
              Saiba mais <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* Card Lavender */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#b8a4ed] rounded-[24px] p-10 text-[#0a0a0a] flex flex-col justify-between min-h-[400px]"
          >
            <div>
              <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center mb-8">
                <GraduationCap className="h-6 w-6 text-[#0a0a0a]" />
              </div>
              <h3 className="text-2xl font-medium tracking-tight mb-4">Aprendizado Contínuo</h3>
              <p className="text-[#0a0a0a]/70 text-lg leading-relaxed">
                Treinamentos e conteúdos que desenvolvem habilidades técnicas e posicionamento.
              </p>
            </div>
            <div className="flex items-center gap-2 font-semibold cursor-pointer group">
              Saiba mais <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};