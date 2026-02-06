"use client";

import Link from "next/link";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const hidden = useScrollDirection();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}>
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/80 backdrop-blur-xl border-b border-primary/10" />
      
      <div className="container relative z-10 flex items-center justify-between py-6 md:py-8">
        {/* Logo with decorative elements */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform">
              <span className="text-primary font-serif text-lg font-bold">M</span>
            </div>
          </div>
          <div>
            <h1 className="font-serif text-xl md:text-2xl tracking-tight text-foreground font-bold group-hover:text-primary transition-colors">
              Dr. Maya Reynolds
            </h1>
            <p className="text-xs text-muted-foreground hidden sm:block">Licensed Clinical Psychologist</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          <Link
            href="/about"
            className="relative px-6 py-2.5 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-xl hover:bg-primary/5 group"
          >
            <span className="relative z-10">About</span>
            <div className="absolute inset-0 bg-primary/10 rounded-xl scale-0 group-hover:scale-100 transition-transform origin-center" />
          </Link>
          <Link
            href="/contact"
            className="relative px-6 py-2.5 text-sm font-medium text-white bg-primary hover:bg-primary/90 transition-all rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
          >
            Get in Touch
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden relative w-10 h-10 rounded-xl bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-primary" /> : <Menu className="w-5 h-5 text-primary" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-primary/10 bg-background/98 backdrop-blur-xl">
          <nav className="container py-6 flex flex-col gap-3">
            <Link
              href="/about"
              className="px-4 py-3 text-base font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all rounded-xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-4 py-3 text-base font-medium text-white bg-primary hover:bg-primary/90 transition-all rounded-xl text-center shadow-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
