"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import FeatureSection from "@/components/FeatureSection";
import AboutSection from "@/components/AboutSection";
import OfficeSection from "@/components/OfficeSection";
import FAQSection from "@/components/FAQSection";
import BackgroundSection from "@/components/BackgroundSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CursorTrail from "@/components/CursorTrail";
import { useImageReveal } from "@/hooks/useImageReveal";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Home() {
  useImageReveal();
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <CursorTrail />
      <ScrollProgress />
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <SpecialtiesSection />
        <FeatureSection />
        <AboutSection />
        <OfficeSection />
        <FAQSection />
        <BackgroundSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
