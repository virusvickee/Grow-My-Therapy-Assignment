"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const FeatureSection = () => {
  const features = [
    "Constant worry, tension, or difficulty sleeping",
    "Past experiences affecting your relationships or confidence",
    "Feeling 'functional' on the outside but struggling inside",
    "Professional burnout or high internal pressure",
    "Always bracing for something to go wrong"
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/20 to-background" />
      <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-10">
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.1]">
              You don't have to keep{" "}
              <span className="text-primary italic">pushing through</span>
            </h2>
            
            <p className="text-xl text-muted-foreground">
              Therapy can help if you're experiencing:
            </p>

            <div className="space-y-4">
              {features.map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-primary transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <span className="text-lg text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a warm, collaborative, trauma-informed approach, we'll work together to develop
                insight, build resilience, and create a stronger, more compassionate relationship with yourself.
              </p>
              <Button size="lg">
                Explore My Approach
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/3rd.png"
                alt="Finding moments of reflection and healing"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -z-10 -top-6 -right-6 w-full h-full border-2 border-primary/20 rounded-3xl" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
