import { StatCounter } from "./StatCounter";
import { Reveal } from "./Reveal";

const stats = [
  { end: 1900, label: "Attendees" },
  { end: 1000, label: "Investors" },
  { end: 1500, label: "Tech Brands" },
  { end: 600, label: "Startups" },
];

export const Stats = () => (
  <section className="pt-16 pb-8 relative">
    <div className="container">
      <Reveal className="text-center mb-8">
        <h2 className="font-display md:text-7xl font-bold leading-[0.9] text-slate-50 text-2xl">
          Tech59 <span className="text-gradient-animated text-slate-50">2025 Impact</span>
        </h2>
      </Reveal>
      <Reveal variant="scale" className="relative glass-strong rounded-3xl p-5 sm:p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 overflow-hidden grain">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-secondary/15 blur-[120px] animate-pulse-glow pointer-events-none" />
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 120}>
            <StatCounter {...s} />
          </Reveal>
        ))}
      </Reveal>
    </div>
  </section>
);
