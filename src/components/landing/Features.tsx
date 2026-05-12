import { motion } from "framer-motion";
import { Share2, GraduationCap, Gamepad2, ArrowRight } from "lucide-react";

export const Features = () => {
  return (
    <section id="como-fazemos" className="py-32 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h2 className="text-[40px] md:text-[56px] font-medium text-[#171717] leading-[1.05] tracking-[-2px] mb-6">
            Uma plataforma feita para <br />conectar seu time.
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Card Orange */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#F46A35] rounded-[24px] p-10 text-[#171717] flex flex-col justify-between min-h-[400px]"
          >
            <div>
              <div className="w-12 h-12 bg-[#171717]/10 rounded-xl flex items-center justify-center mb-8">
                <Gamepad2 className="h-6 w-6 text-[#171717]" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-4">Gamificação Social</h3>
              <p className="text-[#171717]/80 text-lg leading-relaxed">
                Sistemas de desafios, rankings e reconhecimento para aumentar participação e engajamento.
              </p>
            </div>
            <div className="flex items-center gap-2 font-bold cursor-pointer group">
              Saiba mais <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* Card Dark */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#171717] rounded-[24px] p-10 text-white flex flex-col justify-between min-h-[400px]"
          >
            <div>
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-8">
                <Share2 className="h-6 w-6 text-[#F46A35]" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-4">Marketing & Embaixadores</h3>
              <p className="text-white/70 text-lg leading-relaxed">
                Frameworks para transformar professores em promotores naturais da marca da academia.
              </p>
            </div>
            <div className="flex items-center gap-2 font-bold cursor-pointer group text-[#F46A35]">
              Saiba mais <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* Card Light */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-[#e5e5e5] rounded-[24px] p-10 text-[#171717] flex flex-col justify-between min-h-[400px]"
          >
            <div>
              <div className="w-12 h-12 bg-[#F46A35]/10 rounded-xl flex items-center justify-center mb-8">
                <GraduationCap className="h-6 w-6 text-[#F46A35]" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-4">Aprendizado Contínuo</h3>
              <p className="text-[#171717]/60 text-lg leading-relaxed">
                Treinamentos e conteúdos que desenvolvem habilidades técnicas e posicionamento.
              </p>
            </div>
            <div className="flex items-center gap-2 font-bold cursor-pointer group">
              Saiba mais <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};