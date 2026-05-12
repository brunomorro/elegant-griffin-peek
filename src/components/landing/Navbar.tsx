import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gym-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="/.dyad/media/10503c7d9f1281f786cc5eee54c1a399.png" 
            alt="GymOnHands Logo" 
            className="h-10 w-auto"
          />
          <span className="text-white font-bold text-xl tracking-tight">GymOnHands</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#para-quem" className="text-white/70 hover:text-gym-orange transition-colors text-sm font-medium">Para quem</a>
          <a href="#como-fazemos" className="text-white/70 hover:text-gym-orange transition-colors text-sm font-medium">Como fazemos</a>
          <a href="#beneficios" className="text-white/70 hover:text-gym-orange transition-colors text-sm font-medium">Benefícios</a>
        </div>

        <Button className="bg-gym-orange hover:bg-gym-orange-hover text-white rounded-full px-6 font-bold text-sm">
          Diagnóstico Gratuito
        </Button>
      </div>
    </nav>
  );
};