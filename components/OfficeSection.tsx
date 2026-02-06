"use client";

import { MapPin, Video, Shield } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const OfficeSection = () => {
  const [activeImage, setActiveImage] = useState(0);
  const images = [
    { src: "/assets/office-1.jpg", alt: "Dr. Maya Reynolds therapy office - comfortable seating area" },
    { src: "/assets/office-2.jpg", alt: "Dr. Maya Reynolds therapy office - calm healing environment" }
  ];

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="py-28 md:py-36 relative overflow-hidden bg-gradient-to-b from-background via-warm to-secondary/20 scroll-reveal">
      {/* Organic background shapes */}
      <div className="absolute inset-0 opacity-30">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="officeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#99BC85', stopOpacity: 0.15 }} />
              <stop offset="100%" style={{ stopColor: '#E4EFE7', stopOpacity: 0.1 }} />
            </linearGradient>
          </defs>
          <ellipse cx="20%" cy="30%" rx="300" ry="200" fill="url(#officeGrad)" className="animate-pulse" />
          <ellipse cx="80%" cy="70%" rx="350" ry="250" fill="url(#officeGrad)" className="animate-pulse" style={{ animationDelay: '2s' }} />
        </svg>
      </div>

      <div className="container relative z-10">
        {/* Creative Header */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center backdrop-blur-sm border border-primary/30">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
            </div>
            
            <div className="text-center space-y-6">
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
                <span className="text-foreground">Our Office</span>
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                My Santa Monica office is designed to feel warm, grounding, and safe. Natural light fills the space, creating a calm and uncluttered environment where you can feel at ease from the moment you arrive. Whether you choose in-person sessions or prefer the flexibility of telehealth, you'll find a private, confidential space dedicated to your healing journey.
              </p>
            </div>
          </div>
        </div>

        {/* Bento-style layout */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-6">
          
          {/* Large image card - spans 8 columns */}
          <div className="lg:col-span-8 group">
            <div className="relative h-full min-h-[500px]">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-secondary/20 to-primary/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Main image container */}
              <div className="relative h-full bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-2xl rounded-[2.5rem] p-3 border-2 border-primary/30 shadow-2xl overflow-hidden">
                <div className="relative h-full rounded-[2rem] overflow-hidden">
                  {images.map((image, index) => (
                    <Image
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      fill
                      className={`object-cover transition-all duration-1000 ${activeImage === index ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
                      sizes="(max-width: 1024px) 100vw, 66vw"
                    />
                  ))}
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                  
                  {/* Image info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="flex items-end justify-between">
                      <div className="space-y-2">
                        <p className="text-sm font-medium opacity-90">Comfortable & Confidential</p>
                        <h3 className="font-serif text-3xl">A Space for Healing</h3>
                      </div>
                      
                      {/* Navigation dots */}
                      <div className="flex gap-2">
                        {images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveImage(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${activeImage === index ? 'bg-white w-8' : 'bg-white/40 w-2 hover:bg-white/60'}`}
                            aria-label={`View image ${index + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 rounded-bl-[3rem] rounded-tr-[2.5rem]" />
              </div>
            </div>
          </div>

          {/* Right column - Info cards - spans 4 columns */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Location card */}
            <div className="group bg-gradient-to-br from-primary/20 via-primary/10 to-transparent backdrop-blur-xl rounded-[2rem] p-6 border-2 border-primary/30 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl text-foreground mb-2">Santa Monica</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Convenient location with easy parking and accessibility
                  </p>
                </div>
              </div>
            </div>

            {/* Telehealth card */}
            <div className="group bg-gradient-to-br from-secondary/30 via-secondary/20 to-transparent backdrop-blur-xl rounded-[2rem] p-6 border-2 border-primary/30 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Video className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl text-foreground mb-2">Hybrid Sessions</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    In-person or secure telehealth options available
                  </p>
                </div>
              </div>
            </div>

            {/* Privacy card */}
            <div className="group bg-gradient-to-br from-white/60 via-white/40 to-transparent backdrop-blur-xl rounded-[2rem] p-6 border-2 border-primary/30 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl text-foreground mb-2">Safe & Private</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Confidential space focused on your comfort and safety
                  </p>
                </div>
              </div>
            </div>

            {/* Thumbnail preview */}
            <div className="flex gap-3">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative flex-1 aspect-video rounded-xl overflow-hidden transition-all duration-300 ${activeImage === index ? 'ring-2 ring-primary scale-105' : 'opacity-50 hover:opacity-100'}`}
                >
                  <Image
                    src={image.src}
                    alt={`View ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="150px"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeSection;
