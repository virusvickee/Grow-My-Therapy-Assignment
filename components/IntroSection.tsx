import { Button } from "@/components/ui/button";
import Image from "next/image";

const IntroSection = () => {
  return (
    <section className="py-28 md:py-36 scroll-reveal">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-10 leading-[1.15]">
              You deserve to feel grounded again
            </h2>
            <div className="space-y-7 mb-14">
              <p className="text-muted-foreground text-lg md:text-xl leading-[1.75]">
                Many of the adults I work with in Santa Monica are high-achieving, thoughtful, and
                self-aware—but internally feel exhausted, stuck in overthinking, or
                emotionally on edge.
              </p>
              <p className="text-muted-foreground text-lg md:text-xl leading-[1.75]">
                You may look &quot;functional&quot; on the outside while quietly struggling with
                constant worry, tension in your body, or a sense that you&apos;re always
                bracing for something to go wrong. Using a trauma-informed, evidence-based approach, I&apos;m here to help you heal.
              </p>
            </div>
            <Button
              variant="outline"
              size="lg"
              className="px-12 py-8 text-xs uppercase tracking-[0.25em] font-semibold border-foreground hover:bg-foreground hover:text-background relative before:absolute before:inset-0 before:bg-foreground before:scale-y-0 hover:before:scale-y-100 before:transition-transform before:duration-500 before:origin-bottom before:-z-10 overflow-hidden"
            >
              <span className="relative z-10">Learn More About My Approach</span>
            </Button>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-lg">
              <Image
                src="/assets/2nd.png"
                alt="Feeling grounded and centered"
                width={600}
                height={750}
                className="w-full h-auto object-cover rounded-[3rem] shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
