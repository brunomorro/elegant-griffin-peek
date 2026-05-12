import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { PainPoints } from "@/components/landing/PainPoints";
import { Features } from "@/components/landing/Features";
import { Benefits } from "@/components/landing/Benefits";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen bg-gym-black font-sans selection:bg-gym-orange/30">
      <Navbar />
      
      <main>
        <Hero />
        <PainPoints />
        <Features />
        <Benefits />
        <CTASection />
      </main>

      <Footer />
      
      <div className="bg-black pb-8">
        <MadeWithDyad />
      </div>
    </div>
  );
};

export default Index;