import { motion } from "framer-motion";
import { AlertCircle, UserMinus, Share2, BookOpen, Target } from "lucide-react";

const pains = [
  {
    icon: <AlertCircle className="h-6 w-6 text-gym-orange" />,
    title: "Baixo engajamento",
    desc: "Professores que apenas cumprem horário sem conexão real."
  },
  {
    icon: <Target className="h-6 w-6 text-gym-orange" />,
    title: "Cultura fragmentada",
    desc: "Dificuldade em padronizar o atendimento em todas as unidades."
  },
  {
    icon: <UserMinus className="h-6 w-6 text-gym-orange" />,
    title: "Alta rotatividade",
    desc: "Perda constante de talentos para a concorrência ou personal."
  },
  {
    icon: <Share2 className="h-6 w-6 text-gym-orange" />,
    title: "Falta de divulgação",
    desc: "Professores que não incentivam os alunos nas redes sociais."
  },
  {
    icon: <BookOpen className="h-6 w-6 text-gym-orange" />,
    title: "Estagnação técnica",
    desc: "Equipe sem incentivo para desenvolvimento contínuo."
  }
];

export const PainPoints = () => {
  return (
    <section id="para-quem" className="py-24 bg-gym-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gym-black mb-6 tracking-tight">
            Para academias que cresceram… <br className="hidden md:block" />
            <span className="text-gym-orange">mas perderam a conexão com o time.</span>
          </h2>
          <p className="text-lg text-gym-black/60 max-w-2xl mx-auto">
            A GymOnHands foi criada para academias que querem crescer sem virar uma operação impessoal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {pains.map((pain, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="mb-4 p-3 bg-gym-orange/10 rounded-xl">
                {pain.icon}
              </div>
              <h3 className="text-lg font-bold text-gym-black mb-2">{pain.title}</h3>
              <p className="text-sm text-gym-black/60 leading-relaxed">{pain.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};