import { useEffect, useState } from 'react';

export const useScrollDirection = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      setHidden(currentScroll > lastScroll && currentScroll > 100);
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return hidden;
};
