import { useEffect, useState } from 'react';

export const useScrollPosition = (threshold = 40) => {
  const [isPastThreshold, setIsPastThreshold] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > threshold;
      setIsPastThreshold((prev) => (prev === next ? prev : next));
    };

    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return isPastThreshold;
};
