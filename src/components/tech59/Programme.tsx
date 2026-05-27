import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "./Reveal";

type Slot = { time: string; tag: string; title: string; people?: string; moderator?: string };

const day1: Slot[] = [
  { time: "6:00 PM", tag: "Check-in", title: "Registration, Coffee & Networking" },
  { time: "7:00 PM", tag: "Opening", title: "Opening Remarks, Drinks & Dinner" },
];

const day2: Slot[] = [
  { time: "8:00 AM", tag: "Check-in", title: "Registration & Coffee" },
  { time: "9:00 AM", tag: "Opening Remarks", title: "Welcome to Tech59 Summit 2026" },
  { time: "9:30 AM", tag: "Keynote", title: "Featured Speaker", people: "Speaker & topic to be announced" },
  { time: "10:15 AM", tag: "Panel Discussion", title: "Presentation + Panel", people: "Panelists & topic to be announced" },
  { time: "11:00 AM", tag: "Keynote", title: "Keynote Speech", people: "Speaker & topic to be announced" },
  { time: "12:00 PM", tag: "Break", title: "Lunch & Networking" },
  { time: "1:30 PM", tag: "Panel Discussion", title: "Industry Leaders Roundtable", people: "Panelists & topic to be announced" },
  { time: "3:00 PM", tag: "Workshop", title: "Interactive Session", people: "Details to be announced" },
  { time: "4:30 PM", tag: "Closing", title: "Conclusion & Key Takeaways" },
];

const dayList = [
  { id: "day1" as const, label: "Day 1 — VIP Reception · Thu 16 Jul", slots: day1 },
  { id: "day2" as const, label: "Day 2 — Main Event · Fri 17 Jul", slots: day2 },
];

const SlotList = ({ slots }: { slots: Slot[] }) => (
  <div className="relative pl-6 md:pl-10 mt-6">
    <div className="absolute left-1.5 md:left-3 top-2 bottom-2 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-accent/50" />
    <div className="space-y-3">
      {slots.map((s, i) => (
        <Reveal key={i} delay={i * 50}>
          <article className="relative glass rounded-xl p-4 md:p-5 hover:border-primary/60 hover:-translate-y-0.5 transition-all duration-500 group overflow-hidden">
            <span className="absolute -left-[26px] md:-left-[34px] top-6 h-2.5 w-2.5 rounded-full bg-brand ring-4 ring-background shadow-[0_0_15px_hsl(258_90%_66%/0.8)]" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 light-streak pointer-events-none" />
            <div className="relative grid md:grid-cols-[110px_1fr] gap-2 md:gap-5">
              <div className="font-display text-xl md:text-2xl font-bold text-gradient-animated tabular-nums leading-none pt-0.5">
                {s.time}
              </div>
              <div>
                <span className="inline-block glass-strong rounded-full px-2.5 py-0.5 text-[10px] uppercase tracking-[0.18em] text-accent mb-2">
                  {s.tag}
                </span>
                <h3 className="font-display text-base md:text-lg font-semibold leading-snug mb-1.5">{s.title}</h3>
                {s.people && <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{s.people}</p>}
                {s.moderator && (
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mt-1">
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
);

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
                      <SlotList slots={d.slots} />
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
