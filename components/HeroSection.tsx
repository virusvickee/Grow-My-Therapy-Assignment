import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Organic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-warm to-secondary/20" />
      <div className="absolute inset-0 opacity-30">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#99BC85', stopOpacity: 0.15 }} />
              <stop offset="100%" style={{ stopColor: '#E4EFE7', stopOpacity: 0.1 }} />
            </linearGradient>
          </defs>
          <circle cx="15%" cy="25%" r="250" fill="url(#heroGrad)" className="animate-pulse" />
          <circle cx="85%" cy="75%" r="300" fill="url(#heroGrad)" className="animate-pulse" style={{ animationDelay: '2s' }} />
        </svg>
      </div>

      <div className="container relative z-10 py-20 sm:py-32 md:py-40 lg:py-44 max-w-7xl mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 sm:gap-16 md:gap-12 lg:gap-20 xl:gap-24 items-center">

          {/* Image - First on mobile, Left on tablet+ */}
          <div className="w-full order-1 md:order-1">
            <div className="relative w-full max-w-md mx-auto md:max-w-none aspect-[3/4] md:aspect-[4/5]">
              <Image
                src="/assets/main.png"
                alt="Peaceful therapy environment promoting calm and healing"
                fill
                className="object-cover rounded-[2rem] shadow-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Content - Second on mobile, Right on tablet+ */}
          <div className="w-full order-2 md:order-2 text-center md:text-left space-y-8 sm:space-y-10">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] text-foreground animate-fade-in-up">
              You don't have to navigate this alone
            </h1>
            
            <p className="text-muted-foreground text-lg sm:text-xl md:text-xl lg:text-2xl leading-relaxed max-w-xl mx-auto md:mx-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Compassionate therapy for anxiety, trauma, and burnout in Santa Monica, CA
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Button
                variant="default"
                size="lg"
                className="px-10 py-7 text-xs uppercase tracking-[0.25em] font-semibold shadow-xl"
              >
                Schedule a Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-10 py-7 text-xs uppercase tracking-[0.25em] font-semibold"
              >
                Learn More
              </Button>
            </div>

            {/* Scroll indicator */}
            <div className="flex justify-center md:justify-start pt-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="flex flex-col items-center gap-2 opacity-60">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Scroll</span>
                <ArrowDown className="w-4 h-4 text-muted-foreground animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
