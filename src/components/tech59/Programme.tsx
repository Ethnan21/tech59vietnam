import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "./Reveal";

type Slot = {
  start: string;
  tag: string;
  title: string;
  description?: string;
};

const day1: Slot[] = [
  { start: "18:00", tag: "Check-in", title: "Registration, Coffee & Networking" },
  { start: "19:00", tag: "Opening", title: "Opening Remarks, Drinks & Dinner" },
];

const mainStage: Slot[] = [
  { start: "08:30", tag: "Check-in", title: "Registration & Coffee" },
  { start: "09:00", tag: "Opening", title: "Opening Remarks — Introduction to TECH59" },
  { start: "09:10", tag: "Keynote", title: "Government Speech" },
  { start: "09:30", tag: "Topic 1", title: "Gaming" },
  { start: "10:05", tag: "Topic 2", title: "Corporate Diplomacy" },
  { start: "10:40", tag: "Topic 3", title: "AI" },
  { start: "11:15", tag: "Topic 4", title: "VC Investment" },
  { start: "12:00", tag: "Break", title: "Lunch & Networking" },
  { start: "13:15", tag: "Topic 5", title: "Real Estate & Tech" },
  { start: "13:50", tag: "Topic 6", title: "Fashion Tech" },
  { start: "14:25", tag: "Topic 7", title: "Outsourcing" },
  { start: "15:00", tag: "Topic 8", title: "EdTech" },
  { start: "15:45", tag: "Closing", title: "Conclusion & Key Takeaways" },
];

const workshopStage: Slot[] = [
  {
    start: "09:45",
    tag: "Workshop 1",
    title: "Tech Talent Development & Recruiting",
    description: "Attract, hire and retain top talent in Vietnam.",
  },
  {
    start: "11:00",
    tag: "Workshop 2",
    title: "Building Software Teams",
    description: "Lessons on scaling high-performing product and teams.",
  },
  {
    start: "13:15",
    tag: "Workshop 3",
    title: "To be announced soon",
    description: "",
  },
  {
    start: "14:20",
    tag: "Workshop 4",
    title: "To be announced soon",
    description: "",
  },
  {
    start: "15:30",
    tag: "Workshop 5",
    title: "To be announced soon",
    description: "",
  },
];

const SlotList = ({ slots, compact = false }: { slots: Slot[]; compact?: boolean }) => (
  <div className="relative pl-5 md:pl-8 mt-4">
    <div className="absolute left-1 md:left-2.5 top-2 bottom-2 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-accent/50" />
    <div className="space-y-3">
      {slots.map((s, i) => (
        <Reveal key={i} delay={i * 40}>
          <article className="relative glass rounded-xl p-4 md:p-5 hover:border-primary/60 hover:-translate-y-0.5 transition-all duration-500 group overflow-hidden">
            <span className="absolute -left-[22px] md:-left-[30px] top-6 h-2 w-2 rounded-full bg-brand ring-4 ring-background shadow-[0_0_12px_hsl(258_90%_66%/0.7)]" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 light-streak pointer-events-none" />
            <div className="relative flex flex-col md:flex-row md:items-start gap-2 md:gap-5">
              <span
                className={`font-display font-bold text-gradient-animated tabular-nums leading-none shrink-0 ${
                  compact ? "text-xl md:text-2xl md:w-[88px]" : "text-2xl md:text-3xl md:w-[110px]"
                }`}
              >
                {s.start}
              </span>
              <div className="flex flex-col gap-1.5 min-w-0">
                <span className="inline-block self-start glass-strong rounded-full px-2.5 py-0.5 text-[9px] md:text-[10px] uppercase tracking-[0.16em] text-accent">
                  {s.tag}
                </span>
                <h4 className="font-display text-sm md:text-base font-semibold leading-snug">
                  {s.title}
                </h4>
                {s.description && (
                  <p className="text-xs md:text-[13px] text-muted-foreground leading-relaxed">
                    {s.description}
                  </p>
                )}
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  </div>
);

const TrackHeader = ({ label, accentClass }: { label: string; accentClass: string }) => (
  <div className="flex items-center gap-2 mb-1">
    <span className={`h-2 w-2 rounded-full ${accentClass}`} />
    <span className="font-display text-xs md:text-sm uppercase tracking-[0.2em] text-foreground/80">
      {label}
    </span>
  </div>
);

const Day2Tracks = () => {
  const [tab, setTab] = useState<"main" | "workshop">("main");

  return (
    <div className="mt-2">
      {/* Mobile tabs */}
      <div className="lg:hidden flex gap-2 mb-4 glass-strong rounded-full p-1 w-full max-w-sm">
        {[
          { id: "main" as const, label: "Main Stage" },
          { id: "workshop" as const, label: "Workshop" },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`flex-1 rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition-all ${
              tab === t.id
                ? "bg-brand text-primary-foreground shadow-[0_0_15px_hsl(258_90%_66%/0.5)]"
                : "text-foreground/70 hover:text-foreground"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Desktop: 3:2 split — main stage dominant */}
      <div className="hidden lg:grid lg:grid-cols-5 lg:gap-8">
        <div className="lg:col-span-3">
          <TrackHeader label="Main Stage" accentClass="bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
          <SlotList slots={mainStage} />
        </div>
        <div className="lg:col-span-2 lg:border-l lg:border-foreground/10 lg:pl-8">
          <TrackHeader label="WORKSHOPS" accentClass="bg-accent shadow-[0_0_10px_hsl(var(--accent))]" />
          <SlotList slots={workshopStage} compact />
        </div>
      </div>

      {/* Mobile: one track at a time */}
      <div className="lg:hidden">
        {tab === "main" ? (
          <div>
            <TrackHeader label="Main Stage" accentClass="bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
            <SlotList slots={mainStage} />
          </div>
        ) : (
          <div>
            <TrackHeader label="WORKSHOPS" accentClass="bg-accent shadow-[0_0_10px_hsl(var(--accent))]" />
            <SlotList slots={workshopStage} />
          </div>
        )}
      </div>
    </div>
  );
};

const dayList = [
  { id: "day1" as const, label: "Day 1 — VIP Reception · Thu 16 Jul" },
  { id: "day2" as const, label: "Day 2 — Main Event · Fri 17 Jul" },
];

export const Programme = () => {
  const [open, setOpen] = useState<"day1" | "day2" | null>("day1");

  return (
    <div className="mt-8 mb-24">
      <Reveal className="max-w-2xl mb-10">
        <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.9]">
          <span className="text-gradient-animated">Program</span>
        </h2>
        <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">*Agenda is subject to change</p>
      </Reveal>

      <div className="space-y-4">
        {dayList.map((d) => {
          const isOpen = open === d.id;
          return (
            <Reveal key={d.id}>
              <div className="glass rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : d.id)}
                  className={`w-full flex items-center justify-between px-5 md:px-6 py-4 md:py-5 text-left transition-all duration-300 ${
                    isOpen ? "bg-brand/10" : "hover:bg-foreground/5"
                  }`}
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg md:text-xl font-semibold tracking-tight">
                    {d.label}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-foreground/70 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 md:px-6 pb-6">
                      {d.id === "day1" ? <SlotList slots={day1} /> : <Day2Tracks />}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
};
