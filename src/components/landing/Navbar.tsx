import { LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#171717]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#F46A35] rounded-xl flex items-center justify-center shadow-lg shadow-[#F46A35]/20">
            <LayoutDashboard className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#F9F9F9]">GymOnHands</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#para-quem" className="text-sm font-medium text-[#F9F9F9]/60 hover:text-[#F46A35] transition-colors">Para quem</a>
          <a href="#como-fazemos" className="text-sm font-medium text-[#F9F9F9]/60 hover:text-[#F46A35] transition-colors">Como fazemos</a>
          <a href="#beneficios" className="text-sm font-medium text-[#F9F9F9]/60 hover:text-[#F46A35] transition-colors">Benefícios</a>
          <Button className="bg-[#F46A35] hover:bg-[#d45a2a] text-white rounded-full px-6 font-bold">
            Diagnóstico Gratuito
          </Button>
        </div>
      </div>
    </nav>
  );
};