import { useEffect, useRef, useState, type ElementType, type ReactNode, type CSSProperties } from "react";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export const Reveal = ({
  children,
  as: Tag = "div",
  delay = 0,
  y = 24,
  duration = 700,
  className = "",
  once = true,
}: RevealProps) => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [once]);

  const style: CSSProperties = {
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
    transitionDelay: `${delay}ms`,
    opacity: visible ? 1 : 0,
    transform: visible ? "translate3d(0,0,0)" : `translate3d(0, ${y}px, 0)`,
    willChange: visible ? "auto" : "opacity, transform",
  };

  return (
    <Tag ref={ref as never} style={style} className={className}>
      {children}
    </Tag>
  );
};
