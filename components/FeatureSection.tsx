import { Button } from "@/components/ui/button";
import Image from "next/image";

const FeatureSection = () => {
  return (
    <section className="py-28 md:py-36 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden scroll-reveal">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Content - Left side */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1]">
                You don't have to keep{" "}
                <span className="text-primary italic">pushing through</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Therapy can help if you're experiencing:
              </p>
            </div>

            <ul className="space-y-4">
              {[
                "Constant worry, tension, or difficulty sleeping",
                "Past experiences affecting your relationships or confidence",
                "Feeling 'functional' on the outside but struggling inside",
                "Professional burnout or high internal pressure",
                "Always bracing for something to go wrong"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-primary/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-foreground text-base md:text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                With a warm, collaborative, trauma-informed approach, we'll work together to develop
                insight, build resilience, and create a stronger, more compassionate relationship with yourself.
              </p>
              <Button
                variant="outline"
                size="lg"
                className="px-10 py-7 text-xs uppercase tracking-[0.25em] font-semibold"
              >
                <span className="relative z-10">My Approach</span>
              </Button>
            </div>
          </div>

          {/* Image - Right side */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <Image
                src="/assets/3rd.png"
                alt="Finding moments of reflection and healing"
                width={600}
                height={750}
                className="w-full h-auto object-cover rounded-[2rem] shadow-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
