import { useEffect, useRef, useState } from "react";

export const StatCounter = ({ end, label, suffix = "+" }: { end: number; label: string; suffix?: string }) => {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const dur = 1800;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(end * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center relative group">
      <div className="font-display text-3xl sm:text-5xl md:text-7xl font-bold text-gradient-animated text-slate-50 tabular-nums drop-shadow-[0_0_25px_hsl(258_90%_66%/0.5)]">
        {val.toLocaleString()}{suffix}
      </div>
      <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-[0.2em]">{label}</div>
    </div>
  );
};
