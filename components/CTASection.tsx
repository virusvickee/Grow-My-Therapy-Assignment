import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden py-28 md:py-36 scroll-reveal">
      {/* Split background design */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
      <div className="absolute inset-0 bg-gradient-to-tl from-primary/80 via-transparent to-transparent" />
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-white/5 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-white/5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Floating sparkles */}
      <div className="absolute top-32 left-1/4 animate-bounce">
        <Sparkles className="w-6 h-6 text-white/30" />
      </div>
      <div className="absolute bottom-40 right-1/3 animate-bounce" style={{ animationDelay: '1s' }}>
        <Sparkles className="w-5 h-5 text-white/25" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Asymmetric grid layout */}
          <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12 items-center">
            
            {/* Left side - Content */}
            <div className="space-y-8 text-white">
              {/* Icon badge */}
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <Sparkles className="w-5 h-5 animate-pulse" />
                <span className="text-sm font-medium tracking-wide">Start Your Journey</span>
              </div>

              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] animate-fade-in-up">
                Ready to feel
                <br />
                <span className="text-white/80">grounded again?</span>
              </h2>

              <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Take the first step toward relief from anxiety, trauma, or burnout. 
                Schedule a free consultation to see if we&apos;re the right fit.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <Button
                  size="lg"
                  className="px-10 py-7 text-xs uppercase tracking-[0.25em] font-semibold bg-white text-primary hover:bg-white/90 shadow-xl group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Book Free Consultation
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-10 py-7 text-xs uppercase tracking-[0.25em] font-semibold border-2 border-white/40 text-white hover:bg-white hover:text-primary bg-transparent backdrop-blur-sm"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right side - Trust card */}
            <div className="lg:justify-self-end w-full max-w-md animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/20 shadow-2xl hover:shadow-white/10 transition-all duration-500 hover:scale-105">
                <div className="space-y-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mx-auto">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="font-serif text-2xl text-white text-center">
                    What to Expect
                  </h3>
                  
                  <div className="space-y-4 text-white/80 text-sm">
                    <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                      <span>Free 15-minute consultation call</span>
                    </div>
                    <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                      <span>Discuss your needs and goals</span>
                    </div>
                    <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                      <span>No pressure or commitment</span>
                    </div>
                    <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                      <span>HIPAA-compliant and confidential</span>
                    </div>
                  </div>

                  {/* Trust badges */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3 justify-center">
                    <span className="px-3 py-1.5 bg-white/10 rounded-full text-xs text-white/70 backdrop-blur-sm">Licensed CA</span>
                    <span className="px-3 py-1.5 bg-white/10 rounded-full text-xs text-white/70 backdrop-blur-sm">HIPAA Secure</span>
                    <span className="px-3 py-1.5 bg-white/10 rounded-full text-xs text-white/70 backdrop-blur-sm">Telehealth</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
