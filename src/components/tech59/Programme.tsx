import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "./Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Slot = {
  start: string;
  end: string;
  tag: string;
  title: string;
  description: string;
};

const day1: Slot[] = [
  {
    start: "6:00 PM",
    end: "7:00 PM",
    tag: "Arrival",
    title: "Guest Check-in & Welcome Drinks",
    description:
      "Doors open for our invited guests. Pick up your badge, grab a signature cocktail, and settle in before the night begins.",
  },
  {
    start: "7:00 PM",
    end: "7:30 PM",
    tag: "Opening Toast",
    title: "Welcome to Tech59 VIP Night",
    description:
      "A short welcome from the Tech59 hosts setting the tone for the evening and the day that follows.",
  },
  {
    start: "7:30 PM",
    end: "8:30 PM",
    tag: "VIP Dinner",
    title: "Curated Tasting Menu",
    description:
      "Seated dinner with a hand-picked menu, shared between speakers, partners and select guests.",
  },
  {
    start: "8:30 PM",
    end: "9:15 PM",
    tag: "Fireside Chat",
    title: "An Intimate Conversation",
    description:
      "An off-the-record fireside with a headline guest. Speaker to be announced soon.",
  },
  {
    start: "9:15 PM",
    end: "10:30 PM",
    tag: "Networking",
    title: "Founders, Investors & Operators Lounge",
    description:
      "Open lounge format — meet the people shaping Vietnam's next chapter in tech and business.",
  },
  {
    start: "10:30 PM",
    end: "Late",
    tag: "Afterparty",
    title: "Live Set & Late-Night Drinks",
    description:
      "A live DJ set, late-night bar and the unofficial start of Summit day.",
  },
];

const placeholder =
  "Session title and speaker coming soon — full details will be published closer to the event.";

const day2: Slot[] = [
  { start: "8:00", end: "9:00", tag: "Check-in", title: "Registration & Coffee", description: "Arrive, collect your badge and start the day with coffee before sessions begin." },
  { start: "9:00", end: "9:10", tag: "Opening", title: "Opening Remarks", description: "Welcome to Day 2 of the Tech59 Summit." },
  { start: "9:10", end: "9:20", tag: "Talk", title: "Topic 1", description: placeholder },
  { start: "9:20", end: "9:30", tag: "Talk", title: "Topic 2", description: placeholder },
  { start: "9:30", end: "9:40", tag: "Talk", title: "Topic 3", description: placeholder },
  { start: "9:40", end: "10:15", tag: "Talk", title: "Topic 4", description: placeholder },
  { start: "10:15", end: "10:50", tag: "Talk", title: "Topic 5", description: placeholder },
  { start: "10:50", end: "11:25", tag: "Talk", title: "Topic 6", description: placeholder },
  { start: "11:25", end: "12:00", tag: "Talk", title: "Topic 7", description: placeholder },
  { start: "12:00", end: "1:30", tag: "Break", title: "Lunch Break", description: "Lunch is served — a chance to keep the conversation going." },
  { start: "1:30", end: "2:05", tag: "Talk", title: "Topic 7", description: placeholder },
  { start: "2:05", end: "2:40", tag: "Talk", title: "Topic 8", description: placeholder },
  { start: "2:40", end: "3:10", tag: "Workshop", title: "Workshop 1", description: placeholder },
  { start: "3:10", end: "3:40", tag: "Workshop", title: "Workshop 2", description: placeholder },
  { start: "3:40", end: "4:00", tag: "Closing", title: "Conclude & Takeaway", description: "Closing remarks and key takeaways from the day." },
];

const days = { day1, day2 } as const;

export const Programme = () => {
  const [active, setActive] = useState<"day1" | "day2">("day1");
  const [openItems, setOpenItems] = useState<string[]>([]);
  const slots = days[active];
  const allValues = slots.map((_, i) => `${active}-${i}`);
  const allOpen = openItems.length === slots.length;

  return (
    <div className="mt-8 mb-24">
      <Reveal className="max-w-2xl mb-8">
        <h2 className="font-display text-4xl md:text-5xl font-bold leading-[0.95]">
          <span className="text-gradient-animated">Programme</span>
        </h2>
        <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          *Agenda is subject to change
        </p>
      </Reveal>

      <Reveal className="flex flex-wrap gap-2 mb-6">
        {([
          { id: "day1", label: "Day 1 — Thu 16 Jul · VIP Night" },
          { id: "day2", label: "Day 2 — Fri 17 Jul" },
        ] as const).map((d) => (
          <button
            key={d.id}
            onClick={() => {
              setActive(d.id);
              setOpenItems([]);
            }}
            className={`rounded-full px-4 py-2 text-[11px] uppercase tracking-widest transition-all duration-300 ${
              active === d.id
                ? "bg-brand text-primary-foreground shadow-[0_10px_30px_-10px_hsl(258_90%_66%/0.6)]"
                : "glass text-foreground/80 hover:text-foreground hover:border-primary/60"
            }`}
          >
            {d.label}
          </button>
        ))}
      </Reveal>

      <div className="flex items-center justify-between mb-3">
        <p className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <ChevronDown className="h-3.5 w-3.5" />
          Tap any session to expand
        </p>
        <button
          onClick={() => setOpenItems(allOpen ? [] : allValues)}
          className="text-[11px] uppercase tracking-[0.18em] text-foreground/80 hover:text-foreground transition-colors"
        >
          {allOpen ? "Collapse all" : "Expand all"}
        </button>
      </div>

      <Accordion
        type="multiple"
        value={openItems}
        onValueChange={setOpenItems}
        className="glass rounded-2xl divide-y divide-border/50 overflow-hidden"
      >
        {slots.map((s, i) => {
          const value = `${active}-${i}`;
          return (
            <AccordionItem key={value} value={value} className="border-0">
              <AccordionTrigger className="px-4 md:px-5 py-3 hover:no-underline hover:bg-foreground/[0.02] group">
                <div className="flex items-center gap-3 md:gap-5 flex-1 text-left">
                  <span className="font-display text-sm md:text-base font-semibold text-gradient-animated tabular-nums whitespace-nowrap min-w-[110px] md:min-w-[140px]">
                    {s.start} – {s.end}
                  </span>
                  <span className="hidden sm:inline-block glass-strong rounded-full px-2.5 py-0.5 text-[10px] uppercase tracking-[0.18em] text-accent whitespace-nowrap">
                    {s.tag}
                  </span>
                  <span className="text-sm md:text-base font-medium leading-snug">
                    {s.title}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 md:px-5 pb-4 pl-[126px] md:pl-[156px]">
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed max-w-2xl">
                  {s.description}
                </p>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};
