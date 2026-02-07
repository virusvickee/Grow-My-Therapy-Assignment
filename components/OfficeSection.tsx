"use client";

import { MapPin, Video, Shield, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const OfficeSection = () => {
  const [activeImage, setActiveImage] = useState(0);
  const images = [
    { src: "/assets/office-1.jpg", alt: "Comfortable therapy office" },
    { src: "/assets/office-2.jpg", alt: "Calm healing environment" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const features = [
    { icon: MapPin, title: "Santa Monica", description: "123th Street 45 W, CA 90401" },
    { icon: Video, title: "Hybrid Sessions", description: "In-person & Telehealth" },
    { icon: Shield, title: "Private & Safe", description: "HIPAA Compliant Space" },
    { icon: Clock, title: "Flexible Hours", description: "Evening & Weekend Available" }
  ];

  return (
    <section className="py-32 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container relative z-10">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
            <MapPin className="w-4 h-4" />
            Visit Our Office
          </div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground">
            A Space for Healing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comfortable, private, and designed with your wellbeing in mind
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            {images.map((img, idx) => (
              <Image
                key={idx}
                src={img.src}
                alt={img.alt}
                fill
                className={`object-cover transition-opacity duration-1000 ${idx === activeImage ? 'opacity-100' : 'opacity-0'}`}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ))}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  aria-label={`Show image ${idx + 1}`}
                  aria-current={idx === activeImage ? "true" : "false"}
                  className={`w-2 h-2 rounded-full transition-all ${idx === activeImage ? 'bg-white w-8' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="p-6 bg-background/80 backdrop-blur-sm rounded-2xl border-2 border-border hover:border-primary/50 hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeSection;
