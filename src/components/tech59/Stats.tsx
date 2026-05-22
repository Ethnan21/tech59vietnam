import { StatCounter } from "./StatCounter";
import { Reveal } from "./Reveal";


const stats = [
  { end: 2100, label: "In the room" },
  { end: 1800, label: "Investors" },
  { end: 600, label: "Startups" },
  { end: 1000, label: "Speakers" },
];

export const Stats = () => (
  <section className="py-16 relative">
    <div className="container">
      <Reveal variant="scale" className="relative glass-strong rounded-3xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 overflow-hidden grain">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-secondary/15 blur-[120px] animate-pulse-glow pointer-events-none" />
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 120}>
            <StatCounter {...s} />
          </Reveal>
        ))}
      </Reveal>

      <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mt-6 animate-flicker">
        ⚡ Vietnam's most attended tech event · 2025
      </p>
    </div>
  </section>
);
