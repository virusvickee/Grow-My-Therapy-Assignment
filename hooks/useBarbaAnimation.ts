"use client";

import { useEffect } from "react";

export function useBarbaAnimation() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        const sections = gsap.utils.toArray("section");

        sections.forEach((section: any) => {
          gsap.fromTo(
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
        });
      });
    });

    return () => {
      if (typeof window !== "undefined") {
        import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        });
      }
    };
  }, []);
}
