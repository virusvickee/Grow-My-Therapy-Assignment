"use client";

import { Plus, Minus, MessageCircle, Clock, CreditCard, Video, Calendar } from "lucide-react";
import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      icon: MessageCircle,
      question: "How do I know if therapy is right for me?",
      answer: "If you're feeling stuck, overwhelmed, anxious, or struggling with past experiences, therapy can help. Many clients come in feeling uncertain but find that having a safe, structured space to process their thoughts makes a significant difference. You don't need to have everything figured out - that's what we'll work on together."
    },
    {
      icon: Calendar,
      question: "What can I expect in the first session?",
      answer: "The first session is about getting to know each other. We'll discuss what brought you to therapy, your goals, and any immediate concerns. I'll explain my approach and answer your questions. There's no pressure - just an open, collaborative conversation. Most clients leave feeling relieved and hopeful."
    },
    {
      icon: Clock,
      question: "How long does therapy typically last?",
      answer: "It varies based on your needs and goals. Some clients find relief in 3-6 months of weekly sessions, while others benefit from longer-term work spanning a year or more. We'll regularly check in on your progress and adjust as needed. You're always in control of the timeline and can discuss any concerns about pacing."
    },
    {
      icon: CreditCard,
      question: "Do you accept insurance?",
      answer: "Yes, I accept most major insurance plans including Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. I can also provide superbills for out-of-network reimbursement if your plan isn't directly accepted. Contact me to verify your specific coverage, and I'll help you understand your benefits and any out-of-pocket costs."
    },
    {
      icon: Video,
      question: "Is telehealth as effective as in-person therapy?",
      answer: "Research shows telehealth can be just as effective for many mental health concerns, including anxiety, depression, and trauma. It offers flexibility and comfort while maintaining the same therapeutic relationship. Many clients appreciate being able to attend sessions from home. I offer both options, and we can discuss which format feels best for you."
    },
    {
      icon: MessageCircle,
      question: "What if I don't feel comfortable sharing everything right away?",
      answer: "That's completely normal and expected. Therapy is a process, and trust builds over time. You're in control of what you share and when. I create a safe, non-judgmental space where you can open up at your own pace. Many clients start with surface-level concerns and gradually feel comfortable going deeper as we build our therapeutic relationship."
    }
  ];

  return (
    <section className="py-32 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/20 to-background" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-16 items-start max-w-7xl mx-auto">
          
          {/* Left Section - Sticky */}
          <div className="lg:sticky lg:top-32 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
                <MessageCircle className="w-4 h-4" />
                Common Questions
              </div>
              <h2 className="font-serif text-5xl md:text-6xl text-foreground">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about starting therapy
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl border-2 border-primary/20">
              <h3 className="font-serif text-2xl text-foreground mb-3">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">
                I'm happy to answer any other questions you might have. Feel free to reach out for a free 15-minute consultation.
              </p>
              <button className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Section - FAQs */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              return (
                <div
                  key={index}
                  className={`group bg-background/80 backdrop-blur-sm rounded-2xl border-2 transition-all overflow-hidden ${
                    openIndex === index ? 'border-primary/50 shadow-xl' : 'border-border hover:border-primary/30'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full p-6 flex items-start justify-between gap-4 text-left"
                  >
                    <div className="flex items-start gap-3 flex-1">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                        openIndex === index ? 'bg-primary/20' : 'bg-primary/10 group-hover:bg-primary/15'
                      }`}>
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 pt-1">
                        <h3 className="font-semibold text-lg text-foreground pr-2">{faq.question}</h3>
                      </div>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      openIndex === index ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary group-hover:bg-primary/20'
                    }`}>
                      {openIndex === index ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-6 pl-[70px]">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
