import { Heart, Brain, Flame } from "lucide-react";

const SpecialtiesSection = () => {
  const specialties = [
    {
      title: "Anxiety & Panic",
      description:
        "Experiencing constant worry, racing thoughts, physical tension, or difficulty sleeping? I use evidence-based approaches including CBT and mindfulness to help you understand and manage anxiety so you can feel more at ease in daily life.",
      icon: <Heart className="w-6 h-6" />,
      color: "#99BC85"
    },
    {
      title: "Trauma & PTSD",
      description:
        "Whether from a single incident or long-standing patterns from childhood or relationships, I provide a safe, trauma-informed space to process difficult experiences and heal at your own pace using proven therapeutic modalities.",
      icon: <Brain className="w-6 h-6" />,
      color: "#7A9D7E"
    },
    {
      title: "Burnout & Overwhelm",
      description:
        "Feeling exhausted and disconnected after years of pushing through stress? Therapy can help you slow down, reconnect with what matters, and develop more sustainable, compassionate ways of living and working.",
      icon: <Flame className="w-6 h-6" />,
      color: "#B8A88A"
    },
  ];

  return (
    <section className="py-28 md:py-36 relative overflow-hidden scroll-reveal">
      {/* Organic background shapes */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-warm to-background" />
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#99BC85', stopOpacity: 0.2 }} />
            <stop offset="100%" style={{ stopColor: '#E4EFE7', stopOpacity: 0.1 }} />
          </linearGradient>
        </defs>
        <ellipse cx="20%" cy="30%" rx="300" ry="200" fill="url(#grad1)" />
        <ellipse cx="80%" cy="70%" rx="350" ry="250" fill="url(#grad1)" />
      </svg>

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Artistic header */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary/40" />
              <div className="w-3 h-3 rounded-full bg-primary/60" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary/40" />
            </div>
            <h2 className="font-serif text-5xl md:text-6xl text-foreground leading-[1.1]">
              Areas of Focus
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <div 
                key={specialty.title} 
                className="group relative bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-sm rounded-[2rem] p-8 border-2 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ borderColor: `${specialty.color}30` }}
              >
                {/* Decorative corner */}
                <div 
                  className="absolute top-0 right-0 w-20 h-20 rounded-bl-[3rem] rounded-tr-[2rem] opacity-10"
                  style={{ backgroundColor: specialty.color }}
                />
                
                <div className="relative space-y-6">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${specialty.color}20` }}
                  >
                    <div style={{ color: specialty.color }}>
                      {specialty.icon}
                    </div>
                  </div>
                  
                  <h3 className="font-serif text-3xl text-foreground group-hover:text-primary transition-colors">
                    {specialty.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {specialty.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
