"use client";

import Link from "next/link";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const hidden = useScrollDirection();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#specialties", label: "Specialties" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="absolute inset-0 bg-background/95 backdrop-blur-xl border-b border-border" />
      
      <div className="container relative z-10 flex items-center justify-between py-4 md:py-6">
        <Link href="/" className="group flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border-2 border-primary/20 group-hover:scale-110 transition-transform">
            <span className="text-primary font-serif text-xl font-bold">M</span>
          </div>
          <div>
            <h1 className="font-serif text-xl md:text-2xl text-foreground font-bold group-hover:text-primary transition-colors">
              Dr. Maya Reynolds
            </h1>
            <p className="text-xs text-muted-foreground hidden sm:block">Licensed Clinical Psychologist</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-xl hover:bg-primary/5"
            >
              {link.label}
            </Link>
          ))}
          <Button size="sm" className="ml-2">
            <Phone className="w-4 h-4 mr-2" />
            Book Now
          </Button>
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-primary" /> : <Menu className="w-5 h-5 text-primary" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-xl border-b border-border">
          <nav className="container py-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-foreground hover:bg-primary/5 rounded-xl transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button className="w-full mt-4">
              <Phone className="w-4 h-4 mr-2" />
              Book Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
