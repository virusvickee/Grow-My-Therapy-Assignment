"use client";

import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const IntroSection = () => {
  return (
    <section className="py-32 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/30 to-background" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
              <Sparkles className="w-4 h-4" />
              Compassionate, Evidence-Based Care
            </div>
            
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.1]">
              You deserve to feel{" "}
              <span className="text-primary">grounded</span> again
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Many of the adults I work with in Santa Monica are high-achieving, thoughtful, and
                self-aware—but internally feel exhausted, stuck in overthinking, or
                emotionally on edge.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                You may look "functional" on the outside while quietly struggling with
                constant worry, tension in your body, or a sense that you're always
                bracing for something to go wrong.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="group" asChild>
                <Link href="/contact">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#about">
                  My Approach
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/2nd.png"
                alt="Feeling grounded and centered"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-primary/10 rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
