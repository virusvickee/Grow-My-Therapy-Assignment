"use client";

import { Button } from "@/components/ui/button";
import { Award, Heart, Brain, ArrowRight } from "lucide-react";
import Image from "next/image";

const AboutSection = () => {
  const specializations = [
    {
      icon: Heart,
      title: "Trauma & PTSD",
      description: "Single-incident and complex trauma with emphasis on safety, stabilization, and helping clients feel more regulated in daily life."
    },
    {
      icon: Brain,
      title: "Anxiety & Panic",
      description: "Support for constant worry, physical tension, sleep difficulties, and the feeling of always bracing for something to go wrong."
    },
    {
      icon: Award,
      title: "Burnout & Perfectionism",
      description: "Help for professionals, entrepreneurs, and creatives feeling disconnected after years of pushing through stress."
    }
  ];

  return (
    <section className="py-32 md:py-40 relative overflow-hidden bg-gradient-to-b from-background via-accent/30 to-background">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
              <Award className="w-4 h-4" />
              Licensed Clinical Psychologist, PsyD
            </div>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground">
              Meet Dr. Maya Reynolds
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/maya-portrait.png"
                  alt="Dr. Maya Reynolds - Licensed Clinical Psychologist in Santa Monica"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-primary/10 rounded-3xl" />
              <div className="absolute -z-20 -top-6 -left-6 w-full h-full border-2 border-primary/20 rounded-3xl" />
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-primary/5 border-l-4 border-primary rounded-r-2xl">
                <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed">
                  I'm a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults
                  who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.
                </p>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel
                exhausted, stuck in overthinking, or emotionally on edge. Clients frequently come to me
                feeling "functional" on the outside while quietly struggling with constant worry, tension in their
                body, difficulty sleeping, or a sense that they're always bracing for something to go wrong.
              </p>
              
              <div className="p-6 bg-background/80 backdrop-blur-sm rounded-2xl border-2 border-primary/20">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I take a warm, collaborative, and grounded approach to therapy. I integrate
                  evidence-based methods such as <span className="text-primary font-semibold">CBT, EMDR, mindfulness-based practices, and body-oriented
                  techniques</span> to help clients understand both the emotional and physiological sides of what they're experiencing.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {specializations.map((spec) => {
              const Icon = spec.icon;
              return (
                <div key={spec.title} className="group p-8 bg-background/80 backdrop-blur-sm rounded-3xl border-2 border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl text-foreground mb-4">{spec.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{spec.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center max-w-4xl mx-auto space-y-10 pt-12">
            <div className="relative p-8 md:p-12 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl">
              <p className="text-2xl md:text-3xl text-foreground font-serif italic leading-relaxed">
                "My goal is not just symptom relief, but helping clients develop insight, resilience,
                and a stronger relationship with themselves over time."
              </p>
            </div>
            <Button size="lg" className="group">
              Schedule a Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
