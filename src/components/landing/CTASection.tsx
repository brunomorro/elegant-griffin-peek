import { LeadForm } from "./LeadForm";

export const CTASection = () => {
  return (
    <section className="py-24 bg-gym-black relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gym-orange/10 rounded-full blur-[120px]" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Descubra o nível de <br />
          <span className="text-gym-orange">engajamento da sua equipe.</span>
        </h2>
        <p className="text-xl text-white/60 mb-12">
          Receba gratuitamente um diagnóstico estratégico da cultura e engajamento da sua academia.
        </p>
        
        <div className="max-w-2xl mx-auto">
          <LeadForm variant="footer" />
        </div>
      </div>
    </section>
  );
};