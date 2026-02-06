import Link from "next/link";
import { Mail, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-warm via-background to-secondary/30">
      {/* Organic shapes background */}
      <div className="absolute inset-0 opacity-40">
        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#99BC85', stopOpacity: 0.1 }} />
              <stop offset="100%" style={{ stopColor: '#E4EFE7', stopOpacity: 0.2 }} />
            </linearGradient>
          </defs>
          <circle cx="10%" cy="20%" r="200" fill="url(#grad1)" className="animate-pulse" />
          <circle cx="90%" cy="80%" r="250" fill="url(#grad1)" className="animate-pulse" style={{ animationDelay: '2s' }} />
          <circle cx="50%" cy="50%" r="150" fill="url(#grad1)" className="animate-pulse" style={{ animationDelay: '4s' }} />
        </svg>
      </div>

      {/* Wavy top border */}
      <div className="absolute top-0 left-0 right-0 h-2">
        <svg viewBox="0 0 1200 20" className="w-full h-full">
          <path d="M0,10 Q300,0 600,10 T1200,10 L1200,20 L0,20 Z" fill="url(#grad1)" />
        </svg>
      </div>

      <div className="container relative z-10 py-24 md:py-32">
        {/* Top section - Brand with creative layout */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid lg:grid-cols-[1fr,auto,1fr] gap-12 items-center">
            
            {/* Left decorative */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-primary/50" />
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-primary/40" />
                <div className="w-2 h-2 rounded-full bg-primary/60" />
                <div className="w-2 h-2 rounded-full bg-primary/40" />
              </div>
            </div>

            {/* Center - Brand */}
            <div className="text-center space-y-3">
              <h2 className="font-serif text-5xl md:text-6xl text-foreground tracking-tight">
                Dr. Maya Reynolds
              </h2>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <p className="text-sm font-medium text-primary">Licensed Clinical Psychologist, PsyD</p>
              </div>
              <p className="text-muted-foreground text-sm">
                Trauma-Informed Therapy • Santa Monica, CA
              </p>
            </div>

            {/* Right decorative */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-primary/40" />
                <div className="w-2 h-2 rounded-full bg-primary/60" />
                <div className="w-2 h-2 rounded-full bg-primary/40" />
              </div>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-primary/30 to-primary/50" />
            </div>
          </div>
        </div>

        {/* Main content - Bento grid style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-6 mb-16 max-w-6xl mx-auto">
          
          {/* Contact - Large card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-xl rounded-[2.5rem] p-10 border border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-500 group">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-2xl text-foreground">Visit Us</h3>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-primary mb-2">Office Location</p>
                <address className="not-italic text-muted-foreground leading-relaxed">
                  123th Street 45 W<br />
                  Santa Monica, CA 90401
                </address>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary mb-2">Email</p>
                <a href="mailto:dr.maya@example.com" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group/link">
                  dr.maya@example.com
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Sessions - Medium card */}
          <div className="lg:col-span-4 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-xl rounded-[2.5rem] p-8 border border-primary/20 hover:border-primary/40 transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground">Sessions</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl hover:bg-white/70 transition-colors group/item">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">In-Person</p>
                  <p className="text-xs text-muted-foreground">Santa Monica Office</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl hover:bg-white/70 transition-colors group/item">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">Telehealth</p>
                  <p className="text-xs text-muted-foreground">California-wide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links - Small card */}
          <div className="lg:col-span-3 bg-gradient-to-br from-secondary/30 to-secondary/10 backdrop-blur-xl rounded-[2.5rem] p-8 border border-primary/20">
            <h3 className="font-serif text-xl text-foreground mb-6">Quick Links</h3>
            <nav className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" }
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all group/link text-sm hover:translate-x-1"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom section - Creative layout */}
        <div className="max-w-6xl mx-auto space-y-8 pt-8 border-t border-primary/10">
          {/* Legal links with creative separator */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-primary transition-colors px-4 py-2 rounded-full hover:bg-primary/5"
            >
              Privacy Policy & HIPAA
            </Link>
            <div className="w-1 h-1 rounded-full bg-primary/30" />
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-primary transition-colors px-4 py-2 rounded-full hover:bg-primary/5"
            >
              Terms & Conditions
            </Link>
          </div>

          {/* Copyright with decorative elements */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-primary/30" />
              <div className="flex gap-1.5">
                <div className="w-1 h-1 rounded-full bg-primary/30 animate-pulse" />
                <div className="w-1 h-1 rounded-full bg-primary/50 animate-pulse" style={{ animationDelay: '0.3s' }} />
                <div className="w-1 h-1 rounded-full bg-primary/30 animate-pulse" style={{ animationDelay: '0.6s' }} />
              </div>
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-primary/30" />
            </div>
            <p className="text-xs text-muted-foreground">
              © 2024 Dr. Maya Reynolds, PsyD • All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
