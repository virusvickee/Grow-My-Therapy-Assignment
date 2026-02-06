import { GraduationCap, Award, Lightbulb } from "lucide-react";

const BackgroundSection = () => {
  const credentials = [
    {
      title: "Credentials",
      icon: <GraduationCap className="w-5 h-5" />,
      content:
        "Doctor of Psychology (PsyD). Licensed Clinical Psychologist in the state of California.",
      color: "#99BC85"
    },
    {
      title: "Specializations",
      icon: <Award className="w-5 h-5" />,
      content:
        "Anxiety and panic disorders. Trauma and PTSD (including complex trauma). Professional burnout and perfectionism. High-achieving professionals and creatives.",
      color: "#7A9D7E"
    },
    {
      title: "Therapeutic Approaches",
      icon: <Lightbulb className="w-5 h-5" />,
      content:
        "Cognitive-Behavioral Therapy (CBT). Eye Movement Desensitization and Reprocessing (EMDR). Mindfulness-based practices. Body-oriented techniques.",
      color: "#B8A88A"
    },
  ];

  return (
    <section className="py-28 md:py-36 relative overflow-hidden bg-gradient-to-b from-background via-warm to-background scroll-reveal">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header with modern design */}
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center gap-3 bg-primary/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20">
              <GraduationCap className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium tracking-wide text-primary">Professional Background</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl text-foreground leading-[1.1]">
              Training & Expertise
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Evidence-based qualifications and specialized training in trauma-informed care
            </p>
          </div>

          {/* Grid layout for credentials */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {credentials.map((credential, index) => (
              <div
                key={index}
                className="group relative bg-white/50 backdrop-blur-sm rounded-[2rem] p-8 border-2 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                style={{ borderColor: `${credential.color}40` }}
              >
                {/* Icon */}
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${credential.color}20` }}
                >
                  <div style={{ color: credential.color }}>{credential.icon}</div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl text-foreground mb-4 group-hover:text-primary transition-colors">
                  {credential.title}
                </h3>

                {/* Content */}
                <p className="text-muted-foreground text-base leading-relaxed">
                  {credential.content}
                </p>

                {/* Decorative corner */}
                <div 
                  className="absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-10 transition-opacity group-hover:opacity-20"
                  style={{ backgroundColor: credential.color }}
                />
              </div>
            ))}
          </div>

          {/* Bottom accent */}
          <div className="flex items-center justify-center gap-3 pt-8">
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

export default BackgroundSection;
