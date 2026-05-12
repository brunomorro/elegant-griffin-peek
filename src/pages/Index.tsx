"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Comparison } from "@/components/landing/Comparison";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { PainPoints } from "@/components/landing/PainPoints";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-[#F9F9F9]">
      <Navbar />
      <Hero />
      <Comparison />
      <HowItWorks />
      <PainPoints />
      <Footer />
    </main>
  );
};

export default Index;