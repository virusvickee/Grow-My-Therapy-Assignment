"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Shield, Award, Heart, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-accent">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container relative z-10 px-4 py-20 md:py-32 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary animate-fade-in">
              <Shield className="w-4 h-4" />
              Licensed Clinical Psychologist • 15+ Years Experience
            </div>

            {/* Main Headline with animated text */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] text-foreground">
              <span className="block animate-fade-in-up">Find Your Path</span>
              <span className="block animate-fade-in-up text-primary" style={{ animationDelay: '0.1s' }}>To Healing</span>
              <span className="block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>& Growth</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Evidence-based therapy for anxiety, trauma, and burnout. You deserve support that truly understands you.
            </p>

            {/* Key Benefits */}
            <div className="flex flex-col sm:flex-row gap-4 text-sm animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>In-Person & Telehealth</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Insurance Accepted</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <Button
                size="lg"
                className="group px-8 py-6 text-base font-semibold shadow-xl hover:shadow-2xl transition-all"
                asChild
              >
                <Link href="/contact">
                  Book Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-base font-semibold border-2"
                asChild
              >
                <Link href="#specialties">
                  View Specialties
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Clients Helped</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">4.9★</div>
                <div className="text-sm text-muted-foreground">Client Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image/Video */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              {!isVideoPlaying ? (
                <>
                  <Image
                    src="/assets/main.png"
                    alt="Dr. Maya Reynolds - Compassionate therapy in Santa Monica"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  
                  {/* Video Play Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent flex items-end justify-center pb-12">
                    <button
                      onClick={() => setIsVideoPlaying(true)}
                      aria-label="Watch introduction video"
                      className="group flex items-center gap-3 px-6 py-3 bg-background/95 backdrop-blur-sm rounded-full shadow-xl hover:scale-105 transition-transform"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:bg-primary/90 transition-colors">
                        <svg className="w-5 h-5 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <span className="font-semibold">Watch Introduction</span>
                    </button>
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 bg-foreground/90 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <video
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                      src="/assets/intro-video.mp4"
                    >
                      Your browser does not support the video tag.
                    </video>
                    <button
                      onClick={() => setIsVideoPlaying(false)}
                      aria-label="Close video"
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                    >
                      <X className="w-5 h-5 text-foreground" />
                    </button>
                  </div>
                </div>
              )}

              {/* Floating badges */}
              {!isVideoPlaying && (
                <div className="absolute top-6 right-6 flex flex-col gap-3">
                  <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                    <Award className="w-6 h-6 text-primary mb-1" />
                    <div className="text-xs font-semibold">Board Certified</div>
                  </div>
                  <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                    <Heart className="w-6 h-6 text-primary mb-1" />
                    <div className="text-xs font-semibold">Trauma Informed</div>
                  </div>
                </div>
              )}
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 -top-6 -right-6 w-full h-full border-2 border-primary/20 rounded-3xl" />
            <div className="absolute -z-20 -bottom-6 -left-6 w-full h-full bg-primary/5 rounded-3xl" />
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" fillOpacity="0.5"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
