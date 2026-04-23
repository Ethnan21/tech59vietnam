import { useEffect, useState } from "react";

const TARGET = new Date("2026-07-23T09:00:00+07:00").getTime();

const calc = () => {
  const diff = Math.max(0, TARGET - Date.now());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
};

export const Countdown = ({ compact = false }: { compact?: boolean }) => {
  const [t, setT] = useState(calc());
  useEffect(() => {
    const i = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(i);
  }, []);
  const items: Array<[string, number]> = [["Days", t.d], ["Hours", t.h], ["Min", t.m], ["Sec", t.s]];
  return (
    <div className={`grid grid-cols-4 gap-2 sm:gap-3 ${compact ? "max-w-md" : "max-w-xl"}`}>
      {items.map(([label, val], i) => (
        <div
          key={label}
          className="relative glass rounded-xl px-2 py-3 sm:px-4 sm:py-4 text-center overflow-hidden group hover:border-accent/50 transition-colors"
        >
          <span className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div
            key={val}
            className="relative font-display text-2xl sm:text-4xl font-bold text-gradient-animated tabular-nums animate-scale-in"
          >
            {String(val).padStart(2, "0")}
          </div>
          <div className="relative text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground mt-1 animate-flicker" style={{ animationDelay: `${i * 200}ms` }}>{label}</div>
        </div>
      ))}
    </div>
  );
};
