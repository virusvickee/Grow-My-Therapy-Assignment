"use client";

import { GraduationCap, Award, Briefcase } from "lucide-react";

const BackgroundSection = () => {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Education & Credentials",
      items: [
        "PsyD in Clinical Psychology",
        "Licensed Clinical Psychologist (CA)",
        "Board Certified in Clinical Psychology"
      ]
    },
    {
      icon: Award,
      title: "Specializations",
      items: [
        "Trauma & PTSD Treatment",
        "Anxiety & Panic Disorders",
        "Burnout & Stress Management"
      ]
    },
    {
      icon: Briefcase,
      title: "Therapeutic Approaches",
      items: [
        "Cognitive Behavioral Therapy (CBT)",
        "EMDR for Trauma Processing",
        "Mindfulness & Body-Oriented Techniques"
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
            <Award className="w-4 h-4" />
            Professional Background
          </div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground">
            Training & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Evidence-based care backed by extensive training and experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {credentials.map((cred) => {
            const Icon = cred.icon;
            return (
              <div
                key={cred.title}
                className="group p-8 bg-background/80 backdrop-blur-sm rounded-3xl border-2 border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-6">{cred.title}</h3>
                <ul className="space-y-3">
                  {cred.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BackgroundSection;
