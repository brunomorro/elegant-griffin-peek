import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { PainPoints } from "@/components/landing/PainPoints";
import { Features } from "@/components/landing/Features";
import { Benefits } from "@/components/landing/Benefits";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] font-sans selection:bg-[#F46A35]/20">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Features />
        <Benefits />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;