import { StatCounter } from "./StatCounter";

const stats = [
  { end: 2100, label: "Attendees" },
  { end: 1800, label: "Investors" },
  { end: 600, label: "Startups" },
  { end: 1000, label: "Speakers" },
];

export const Stats = () => (
  <section className="py-16 relative">
    <div className="container">
      <div className="glass-strong rounded-3xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map(s => <StatCounter key={s.label} {...s} />)}
      </div>
      <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mt-6">
        Vietnam's most attended tech event · 2025
      </p>
    </div>
  </section>
);
