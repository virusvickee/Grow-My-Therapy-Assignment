import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import Image from "next/image";

const FAQSection = () => {
  const faqs = [
    {
      question: "Do you offer in-person or virtual sessions?",
      answer:
        "I offer both in-person therapy from my Santa Monica office and secure telehealth sessions for clients located anywhere in California. Many clients appreciate the flexibility to choose based on their schedule and preferences.",
    },
    {
      question: "What is your therapeutic approach?",
      answer:
        "I integrate evidence-based methods including Cognitive-Behavioral Therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques. This helps address both the emotional and physiological aspects of what you&apos;re experiencing.",
    },
    {
      question: "Who do you typically work with?",
      answer:
        "I work with adults who are often high-achieving, thoughtful professionals—entrepreneurs, creatives, and others who may feel disconnected from themselves after years of pushing through stress. My focus areas include anxiety, panic, trauma, and burnout.",
    },
  ];

  return (
    <section className="py-28 md:py-36 relative overflow-hidden scroll-reveal">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm via-background to-secondary/20" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-secondary/10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 space-y-6">
            <div className="inline-flex items-center gap-3 bg-primary/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20">
              <HelpCircle className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm font-medium tracking-wide text-primary">FAQ</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl text-foreground leading-[1.1]">
              Common Questions
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Everything you need to know about starting therapy
            </p>
          </div>

          {/* Grid layout with image */}
          <div className="grid lg:grid-cols-[1fr,1.2fr] gap-12 items-start">
            
            {/* Left - Image card */}
            <div className="lg:sticky lg:top-24">
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-6 bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/10 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Image container */}
                <div className="relative bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-xl rounded-[2.5rem] p-4 border border-primary/20 shadow-xl">
                  <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden">
                    <Image
                      src="/assets/qs.png"
                      alt="Common questions about therapy"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-[3rem] rounded-tr-[2.5rem]" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/10 rounded-tr-[3rem] rounded-bl-[2.5rem]" />
                </div>
              </div>
            </div>

            {/* Right - FAQs */}
            <Accordion type="single" collapsible className="space-y-5">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="group border-2 border-primary/20 rounded-[1.5rem] overflow-hidden bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm hover:border-primary/40 hover:shadow-lg transition-all duration-300"
                >
                  <AccordionTrigger className="text-left px-6 py-5 hover:no-underline group-data-[state=open]:bg-primary/5 transition-colors">
                    <div className="flex items-start gap-4 w-full">
                      <div className="w-8 h-8 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-data-[state=open]:bg-primary/30 transition-all">
                        <span className="text-primary font-semibold text-sm">{index + 1}</span>
                      </div>
                      <span className="font-sans text-base md:text-lg font-medium text-foreground group-data-[state=open]:text-primary transition-colors pr-4">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="pl-12 pr-4">
                      <div className="p-4 bg-background/50 rounded-xl border-l-4 border-primary/40">
                        <p className="text-muted-foreground text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Bottom decorative */}
          <div className="flex items-center justify-center gap-3 mt-16">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-primary/40 animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-primary/60 animate-pulse" style={{ animationDelay: '0.3s' }} />
              <div className="w-2 h-2 rounded-full bg-primary/40 animate-pulse" style={{ animationDelay: '0.6s' }} />
            </div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent via-primary/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
