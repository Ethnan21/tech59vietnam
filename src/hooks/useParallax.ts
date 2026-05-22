import { useEffect, useRef, useState } from "react";

export const useParallax = <T extends HTMLElement = HTMLDivElement>(factor = 0.2) => {
  const ref = useRef<T>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let inView = false;

    const update = () => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const center = rect.top + rect.height / 2;
      const delta = center - vh / 2;
      setOffset(-delta * factor);
      raf = 0;
    };

    const onScroll = () => {
      if (!inView || raf) return;
      raf = requestAnimationFrame(update);
    };

    const obs = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        if (inView) onScroll();
      },
      { threshold: 0 },
    );
    obs.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [factor]);

  return { ref, style: { transform: `translate3d(0, ${offset}px, 0)`, willChange: "transform" } as const };
};
