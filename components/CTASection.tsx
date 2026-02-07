"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Shield, Video, Clock } from "lucide-react";

const CTASection = () => {
  const benefits = [
    "Free 15-minute consultation call",
    "Flexible scheduling options",
    "Insurance accepted"
  ];

  const trustIndicators = [
    { icon: Shield, text: "HIPAA Compliant" },
    { icon: Video, text: "Telehealth Available" },
    { icon: CheckCircle2, text: "Licensed & Certified" }
  ];

  return (
    <section className="py-32 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-16 space-y-6">
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.1]">
              Ready to start your{" "}
              <span className="text-primary">healing journey?</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Take the first step toward feeling more grounded, resilient, and at peace
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 bg-background/80 backdrop-blur-sm rounded-3xl border-2 border-primary/20">
              <h3 className="font-serif text-2xl text-foreground mb-6">What to Expect</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl border-2 border-primary/20">
              <h3 className="font-serif text-2xl text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4 text-muted-foreground">
                <p><strong className="text-foreground">Email:</strong> dr.maya@example.com</p>
                <p><strong className="text-foreground">Location:</strong> Santa Monica, CA 90401</p>
                <p><strong className="text-foreground">Hours:</strong> Mon-Fri 9AM-7PM</p>
              </div>
            </div>
          </div>

          <div className="text-center space-y-8">
            <Button size="lg" className="group px-12 py-6 text-lg">
              Schedule Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="flex flex-wrap items-center justify-center gap-8 pt-4">
              {trustIndicators.map((indicator) => {
                const Icon = indicator.icon;
                return (
                  <div key={indicator.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon className="w-5 h-5 text-primary" />
                    <span>{indicator.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
