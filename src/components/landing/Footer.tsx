import { Instagram, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="/.dyad/media/10503c7d9f1281f786cc5eee54c1a399.png" 
                alt="GymOnHands Logo" 
                className="h-8 w-auto"
              />
              <span className="text-white font-bold text-xl tracking-tight">GymOnHands</span>
            </div>
            <p className="text-white/40 max-w-sm leading-relaxed">
              Transformando educadores físicos em embaixadores da marca através de tecnologia e gamificação.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/40 hover:text-gym-orange transition-colors cursor-pointer">
                <Mail className="h-4 w-4" />
                <span className="text-sm">contato@gymonhands.com.br</span>
              </li>
              <li className="flex items-center gap-3 text-white/40 hover:text-gym-orange transition-colors cursor-pointer">
                <Phone className="h-4 w-4" />
                <span className="text-sm">(11) 99999-9999</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Social</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white/40 hover:bg-gym-orange hover:text-white transition-all">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} GymOnHands. Todos os direitos reservados.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/20 text-xs hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="text-white/20 text-xs hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};