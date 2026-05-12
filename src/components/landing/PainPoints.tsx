import { motion } from "framer-motion";
import { AlertCircle, ArrowRight } from "lucide-react";

const pains = [
  "Baixo engajamento dos professores",
  "Dificuldade em padronizar cultura",
  "Alta rotatividade de colaboradores",
  "Professores sem incentivo para divulgar a academia",
  "Falta de desenvolvimento contínuo"
];

export const PainPoints = () => {
  return (
    <section id="para-quem" className="py-32 bg-[#F9F9F9]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#171717] mb-6 tracking-tight">
            Para academias que cresceram… mas perderam a conexão com o time.
          </h2>
          <p className="text-lg text-[#171717]/60">
            A GymOnHands foi criada para academias que querem crescer sem virar uma operação impessoal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pains.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-white rounded-3xl border border-[#171717]/5 shadow-sm hover:shadow-xl hover:border-[#F46A35]/20 transition-all group flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F46A35]/10 flex items-center justify-center mb-6 group-hover:bg-[#F46A35] transition-colors shrink-0">
                <AlertCircle className="h-6 w-6 text-[#F46A35] group-hover:text-white" />
              </div>
              <p className="text-xl font-bold text-[#171717] leading-tight">{pain}</p>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 bg-[#F46A35] rounded-3xl flex flex-col justify-between group cursor-pointer min-h-[200px]"
          >
            <h3 className="text-2xl font-bold text-[#171717]">Sua academia sofre com algum desses pontos?</h3>
            <div className="flex items-center gap-2 text-[#171717] font-bold mt-8 group-hover:gap-4 transition-all">
              Falar com um especialista <ArrowRight className="h-5 w-5" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};