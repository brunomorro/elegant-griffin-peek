"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Comparison } from "@/components/landing/Comparison";
import { PainPoints } from "@/components/landing/PainPoints";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-[#fffaf0]">
      <Navbar />
      <Hero />
      <Comparison />
      <PainPoints />
      <Footer />
    </main>
  );
};

export default Index;