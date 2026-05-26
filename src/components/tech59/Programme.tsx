import { useState } from "react";
import { Reveal } from "./Reveal";

type Slot = { time: string; tag: string; title: string; people?: string; moderator?: string };

const day1: Slot[] = [
  { time: "8:30 AM", tag: "Check-in", title: "Registration, Coffee & Networking" },
  {
    time: "9:00 AM",
    tag: "Opening Remarks",
    title: "Welcome to Tech59 Summit 2026",
    people: "Astrid Lindqvist (Chair, Nordic Tech Council) · H.E. Johan Bergström (Ambassador of Sweden to Vietnam)",
  },
  {
    time: "9:10 AM",
    tag: "Keynote #1",
    title: "Southeast Asia's Decade: Capital, Talent, and the New Operating Model",
    people: "Dr. Mai Nguyen-Hartwell (Chief Economist, Mekong Ventures)",
  },
  {
    time: "9:25 AM",
    tag: "Fireside Chat #1",
    title: "Scaling With Soul: Lessons From Building a Regional Champion",
    people: "Henrik Olsen (CEO, Polaris Logistics)",
    moderator: "Priya Ramaswamy (Partner, Northwind Capital)",
  },
  {
    time: "9:45 AM",
    tag: "Panel Discussion #1",
    title: "Agents at Work: Where AI Is Actually Moving the Needle",
    people: "Tuan Phan (Co-founder, Vega.AI) · Sofia Kallio (Head of AI, Norse Bank) · Diego Martín (VP Engineering, Helix Robotics)",
    moderator: "Emma Sørensen (Editor-in-Chief, Tech Quarterly)",
  },
  {
    time: "10:05 AM",
    tag: "Panel Discussion #2",
    title: "The Talent Equation: Hiring, Retaining, and Developing Across Borders",
    people: "Lars Bjørn (CHRO, Atlas Materials) · Yuki Tanaka (Director of People, Lumen Health) · Anh Tran (Founder, Hatch Talent Lab)",
    moderator: "Rebecca Hoffmann (Managing Partner, North Star Advisory)",
  },
];

const day2: Slot[] = [
  { time: "9:00 AM", tag: "Day 2 Opening", title: "Welcome Back & Day 2 Agenda Overview" },
  { time: "10:00 AM", tag: "Startup Pitch", title: "Startup Pitch Competition — Finals", people: "Curated cohort × jury of investors & operators" },
  { time: "1:30 PM", tag: "Tech Tours", title: "Behind-the-scenes access to Vietnam's tech ecosystem" },
  { time: "7:00 PM", tag: "Closing Night", title: "Tech59 Summit VIP Closing Night", people: "Invite-only · Speakers, partners, founders & investors" },
];

const days = { day1, day2 } as const;

export const Programme = () => {
  const [active, setActive] = useState<"day1" | "day2">("day1");
  const slots = days[active];

  return (
    <div className="mt-8 mb-24">
      <Reveal className="max-w-2xl mb-10">
        <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.9]">
          <span className="text-gradient-animated">Programme</span>
        </h2>
        <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">*Agenda is subject to change</p>
      </Reveal>

      <Reveal className="flex flex-wrap gap-3 mb-10">
        {([
          { id: "day1", label: "Day 1 — Thu 16 Jul" },
          { id: "day2", label: "Day 2 — Fri 17 Jul" },
        ] as const).map((d) => (
          <button
            key={d.id}
            onClick={() => setActive(d.id)}
            className={`rounded-full px-5 py-2.5 text-xs uppercase tracking-widest transition-all duration-300 ${
              active === d.id
                ? "bg-brand text-primary-foreground shadow-[0_10px_30px_-10px_hsl(258_90%_66%/0.6)]"
                : "glass text-foreground/80 hover:text-foreground hover:border-primary/60"
            }`}
          >
            {d.label}
          </button>
        ))}
      </Reveal>

      <div className="relative pl-8 md:pl-12">
        <div className="absolute left-2 md:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-accent/50" />
        <div className="space-y-5">
          {slots.map((s, i) => (
            <Reveal key={`${active}-${i}`} delay={i * 70}>
              <article className="relative glass rounded-2xl p-6 md:p-7 hover:border-primary/60 hover:-translate-y-1 transition-all duration-500 group overflow-hidden">
                <span className="absolute -left-[34px] md:-left-[42px] top-8 h-3 w-3 rounded-full bg-brand ring-4 ring-background shadow-[0_0_15px_hsl(258_90%_66%/0.8)]" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 light-streak pointer-events-none" />
                <div className="relative grid md:grid-cols-[140px_1fr] gap-3 md:gap-6">
                  <div className="font-display text-2xl md:text-3xl font-bold text-gradient-animated tabular-nums leading-none pt-1">
                    {s.time}
                  </div>
                  <div>
                    <span className="inline-block glass-strong rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-accent mb-3">
                      {s.tag}
                    </span>
                    <h3 className="font-display text-xl md:text-2xl font-semibold leading-tight mb-2">{s.title}</h3>
                    {s.people && <p className="text-sm text-muted-foreground leading-relaxed">{s.people}</p>}
                    {s.moderator && (
                      <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                        <span className="text-foreground/80 font-medium">Moderator:</span> {s.moderator}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};
