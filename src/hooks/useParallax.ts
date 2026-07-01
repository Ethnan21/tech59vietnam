import { useEffect, useRef } from "react";

/**
 * Subtle parallax: translates the target element on scroll relative to its
 * own position in the viewport. speed=0.2 means it moves 20% of scroll delta.
 *
 * All parallax instances share a single scroll listener + rAF loop for cheaper
 * runtime cost when many elements register.
 */

type Entry = { el: HTMLElement; speed: number };
const entries: Entry[] = [];
let ticking = false;
let bound = false;

const update = () => {
  const vh = window.innerHeight || 1;
  for (const e of entries) {
    const rect = e.el.getBoundingClientRect();
    // skip work when off-screen
    if (rect.bottom < -200 || rect.top > vh + 200) continue;
    const center = rect.top + rect.height / 2;
    const delta = center - vh / 2;
    const y = -delta * e.speed;
    e.el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
  }
  ticking = false;
};

const onScroll = () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(update);
};

const ensureBound = () => {
  if (bound) return;
  bound = true;
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
};

export const useParallax = <T extends HTMLElement = HTMLElement>(speed = 0.2) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const entry: Entry = { el, speed };
    entries.push(entry);
    ensureBound();
    // initial position
    onScroll();

    return () => {
      const i = entries.indexOf(entry);
      if (i >= 0) entries.splice(i, 1);
    };
  }, [speed]);

  return ref;
};
