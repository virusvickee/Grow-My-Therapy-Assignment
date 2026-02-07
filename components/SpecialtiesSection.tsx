"use client";

import { Heart, Brain, Flame, ArrowRight } from "lucide-react";

const SpecialtiesSection = () => {
  const specialties = [
    {
      title: "Anxiety & Panic",
      description:
        "Experiencing constant worry, racing thoughts, physical tension, or difficulty sleeping? I use evidence-based approaches including CBT and mindfulness to help you understand and manage anxiety.",
      icon: Heart,
      gradient: "from-emerald-500/20 to-teal-500/20"
    },
    {
      title: "Trauma & PTSD",
      description:
        "Whether from a single incident or long-standing patterns, I provide a safe, trauma-informed space to process difficult experiences and heal at your own pace using proven therapeutic modalities.",
      icon: Brain,
      gradient: "from-primary/20 to-emerald-600/20"
    },
    {
      title: "Burnout & Overwhelm",
      description:
        "Feeling exhausted and disconnected after years of pushing through stress? Therapy can help you slow down, reconnect with what matters, and develop more sustainable ways of living.",
      icon: Flame,
      gradient: "from-teal-500/20 to-primary/20"
    },
  ];

  return (
    <section className="py-32 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container relative z-10">
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
            Specialized Support
          </div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground">
            Areas of Focus
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Evidence-based therapy tailored to your unique needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {specialties.map((specialty) => {
            const Icon = specialty.icon;
            return (
              <div 
                key={specialty.title} 
                className="group relative bg-background/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${specialty.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="font-serif text-3xl text-foreground">
                    {specialty.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {specialty.description}
                  </p>

                  <div className="flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
