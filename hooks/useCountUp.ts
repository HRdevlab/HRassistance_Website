
import { useState, useEffect, useRef } from 'react';

const useCountUp = (endValue: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const frameRef = useRef<number | null>(null);

  const animate = (startTime: number) => {
    const now = performance.now();
    const progress = Math.min((now - startTime) / duration, 1);
    const current = Math.floor(progress * endValue);
    setCount(current);

    if (progress < 1) {
      frameRef.current = requestAnimationFrame(() => animate(startTime));
    }
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const startTime = performance.now();
          frameRef.current = requestAnimationFrame(() => animate(startTime));
          if (ref.current && observerRef.current) {
             observerRef.current.unobserve(ref.current);
          }
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observerRef.current.observe(ref.current);
    }

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      if (observerRef.current && ref.current) {
        observerRef.current.unobserve(ref.current);
      }
    };
  }, [endValue, duration]);

  return { count, ref };
};

export default useCountUp;
