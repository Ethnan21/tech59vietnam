import { useEffect, useRef, useState, ReactNode, CSSProperties } from "react";

type Variant = "up" | "fade" | "scale" | "left" | "right";

interface RevealProps {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  duration?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  once?: boolean;
  threshold?: number;
  y?: number;
}

const initial = (v: Variant, y: number): CSSProperties => {
  switch (v) {
    case "fade": return { opacity: 0 };
    case "scale": return { opacity: 0, transform: "scale(0.95)" };
    case "left": return { opacity: 0, transform: `translateX(-${y}px)` };
    case "right": return { opacity: 0, transform: `translateX(${y}px)` };
    default: return { opacity: 0, transform: `translate3d(0, ${y}px, 0)` };
  }
};

// One shared observer for every Reveal on the page. Cheaper than one-per-element.
type Cb = (visible: boolean) => void;
const callbacks = new WeakMap<Element, Cb>();
let sharedObserver: IntersectionObserver | null = null;

const getObserver = () => {
  if (sharedObserver || typeof IntersectionObserver === "undefined") return sharedObserver;
  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const cb = callbacks.get(entry.target);
        if (cb) cb(entry.isIntersecting);
      }
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  );
  return sharedObserver;
};

export const Reveal = ({
  children,
  variant = "up",
  delay = 0,
  duration = 800,
  className,
  as: Tag = "div",
  once = true,
  threshold: _threshold,
  y = 32,
}: RevealProps) => {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = getObserver();
    if (!obs) { setShown(true); return; }
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setShown(true); return; }
    callbacks.set(el, (visible) => {
      if (visible) {
        setShown(true);
        if (once) {
          obs.unobserve(el);
          callbacks.delete(el);
        }
      } else if (!once) {
        setShown(false);
      }
    });
    obs.observe(el);
    return () => {
      obs.unobserve(el);
      callbacks.delete(el);
    };
  }, [once]);

  const style: CSSProperties = shown
    ? { opacity: 1, transform: "translate3d(0,0,0) scale(1)", transition: `opacity ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms` }
    : { ...initial(variant, y), transition: `opacity ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`, willChange: "opacity, transform" };

  const Comp = Tag as any;
  return <Comp ref={ref} className={className} style={style}>{children}</Comp>;
};
