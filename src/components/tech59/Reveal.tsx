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

export const Reveal = ({
  children,
  variant = "up",
  delay = 0,
  duration = 800,
  className,
  as: Tag = "div",
  once = true,
  threshold = 0.15,
  y = 32,
}: RevealProps) => {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") { setShown(true); return; }
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setShown(true); return; }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          if (once) io.disconnect();
        } else if (!once) setShown(false);
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once, threshold]);

  const style: CSSProperties = shown
    ? { opacity: 1, transform: "translate3d(0,0,0) scale(1)", transition: `opacity ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms` }
    : { ...initial(variant, y), transition: `opacity ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`, willChange: "opacity, transform" };

  const Comp = Tag as any;
  return <Comp ref={ref} className={className} style={style}>{children}</Comp>;
};
