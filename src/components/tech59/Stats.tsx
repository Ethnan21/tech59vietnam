import { StatCounter } from "./StatCounter";

const stats = [
  { end: 2100, label: "In the room" },
  { end: 1800, label: "Investors" },
  { end: 600, label: "Startups building now" },
  { end: 1000, label: "Speakers" },
];

export const Stats = () => (
  <section className="py-16 relative">
    <div className="container">
      <p className="text-center text-xs uppercase tracking-[0.3em] text-accent mb-6 animate-flicker">⚡ Building now</p>
      <div className="relative glass-strong rounded-3xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 overflow-hidden grain hover:shadow-[0_30px_80px_-20px_hsl(258_90%_66%/0.4)] transition-shadow duration-700">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-secondary/15 blur-[120px] animate-pulse-glow pointer-events-none" />
        <div className="absolute inset-0 light-streak opacity-40 pointer-events-none" />
        {stats.map(s => <StatCounter key={s.label} {...s} />)}
      </div>
      <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mt-6 animate-flicker">
        ⚡ Vietnam's most attended tech event · 2025
      </p>
    </div>
  </section>
);
