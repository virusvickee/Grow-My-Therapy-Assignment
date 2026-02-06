import { Button } from "@/components/ui/button";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="py-28 md:py-36 bg-warm scroll-reveal">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-4">
              About Dr. Maya Reynolds
            </h2>
            <p className="text-primary text-lg">Licensed Clinical Psychologist, PsyD</p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-[380px,1fr] gap-16 mb-20">
            {/* Image */}
            <div>
              <Image
                src="/assets/maya-portrait.png"
                alt="Dr. Maya Reynolds - Licensed Clinical Psychologist in Santa Monica"
                width={380}
                height={475}
                className="w-full object-cover rounded-[2rem] shadow-xl"
                style={{ height: 'auto' }}
                priority
              />
            </div>

            {/* Bio */}
            <div className="space-y-6">
              <p className="text-foreground text-xl leading-relaxed">
                I'm a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults
                who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel
                exhausted, stuck in overthinking, or emotionally on edge. Clients frequently come to me
                feeling "functional" on the outside while quietly struggling with constant worry, tension in their
                body, difficulty sleeping, or a sense that they're always bracing for something to go wrong.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I take a warm, collaborative, and grounded approach to therapy. Sessions are structured
                enough to feel supportive, while still leaving space for reflection and depth. I integrate
                evidence-based methods such as CBT, EMDR, mindfulness-based practices, and body-oriented
                techniques to help clients understand both the emotional and physiological sides of what they're experiencing.
              </p>
            </div>
          </div>

          {/* Specializations */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-foreground">Trauma & PTSD</h3>
              <p className="text-muted-foreground leading-relaxed">
                Single-incident and complex trauma with emphasis on safety, stabilization, and helping clients feel more regulated in daily life.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-foreground">Anxiety & Panic</h3>
              <p className="text-muted-foreground leading-relaxed">
                Support for constant worry, physical tension, sleep difficulties, and the feeling of always bracing for something to go wrong.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-foreground">Burnout & Perfectionism</h3>
              <p className="text-muted-foreground leading-relaxed">
                Help for professionals, entrepreneurs, and creatives feeling disconnected after years of pushing through stress.
              </p>
            </div>
          </div>

          {/* Quote & CTA */}
          <div className="text-center max-w-3xl mx-auto space-y-10 pt-8 border-t border-primary/20">
            <p className="text-foreground text-2xl leading-relaxed font-serif italic">
              "My goal is not just symptom relief, but helping clients develop insight, resilience,
              and a stronger relationship with themselves over time."
            </p>
            <Button
              variant="default"
              size="lg"
              className="px-12 py-7 text-xs uppercase tracking-[0.25em] font-semibold"
            >
              Schedule a Consultation
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
