"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useBarbaAnimation() {
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let cancelled = false;

    // Register plugin
    gsap.registerPlugin(ScrollTrigger);

    if (cancelled) return;

    // Get sections with proper typing
    const sections = gsap.utils.toArray<HTMLElement>("section");

    // Create animations
    sections.forEach((section) => {
      if (cancelled) return;

      const animation = gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Store the ScrollTrigger instance
      if (animation.scrollTrigger) {
        triggersRef.current.push(animation.scrollTrigger);
      }
    });

    // Cleanup
    return () => {
      cancelled = true;
      triggersRef.current.forEach((trigger) => trigger.kill());
      triggersRef.current = [];
    };
  }, []);
}
