import { useEffect, useRef } from 'react';

export const useImageReveal = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    const images = document.querySelectorAll('.image-reveal');
    images.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, []);

  return ref;
};
