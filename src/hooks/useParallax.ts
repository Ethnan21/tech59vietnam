import { useEffect, useRef } from "react";

/**
 * Subtle parallax: translates the target element on scroll relative to its
 * own position in the viewport. speed=0.2 means it moves 20% of scroll delta.
 */
export const useParallax = <T extends HTMLElement = HTMLElement>(speed = 0.2) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = 0;
    let ticking = false;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // distance of element center from viewport center, normalized [-1,1]ish
      const center = rect.top + rect.height / 2;
      const delta = (center - vh / 2);
      const y = -delta * speed;
      el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [speed]);

  return ref;
};
