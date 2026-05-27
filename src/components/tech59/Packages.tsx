import { Check, X, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";

type Cell = boolean | string;
type Row = { feature: string; values: [Cell, Cell, Cell, Cell, Cell] };

const columns = ["VIP Pass", "Partner Pass", "Premium Pass", "Standard Pass", "Start Up Pass"] as const;

const rows: Row[] = [
  { feature: "Main Stage Keynotes Access", values: [true, true, true, true, true] },
  { feature: "All Main Stage Panels Access (Gaming, Venture, Edtech, Enterprise)", values: [true, true, true, true, true] },
  { feature: "VIP / Speaker Lounge Access", values: [true, false, true, false, false] },
  { feature: "Coworking Lounge Access", values: [true, false, true, true, false] },
  { feature: "Workshops (Limited 30–40 Pax)", values: ["All Workshops", "1 Workshop", "1–2 Workshop", false, "1 Workshop"] },
  { feature: "Executive Policy Keynotes (Gov / Consulate – 30 Pax)", values: ["Front Seating", "By Invitation", true, false, false] },
  { feature: "After Party Access", values: ["VIP Lounge Area", true, true, true, false] },
  { feature: "VIP Reception (Night Before)", values: [true, "By Invitation", true, false, false] },
  { feature: "Priority Registration & Fast Track Check-in", values: [true, true, true, false, false] },
  { feature: "Lunch Provision", values: [true, false, false, false, false] },
  { feature: "Welcome Gift Bag", values: [true, true, true, false, false] },
];

const prices: [string, string, string, string, string] = [
  "Exclusive offer",
  "Exclusive Offer",
  "3,000,000 VND",
  "1,250,000 VND",
  "750,000 VND",
];

const renderCell = (v: Cell) => {
  if (v === true) return <Check className="h-5 w-5 text-accent mx-auto" />;
  if (v === false) return <X className="h-5 w-5 text-muted-foreground/50 mx-auto" />;
  return (
    <div className="flex flex-col items-center gap-1">
      <Check className="h-5 w-5 text-accent" />
      <span className="text-xs text-muted-foreground">{v}</span>
    </div>
  );
};

export const Packages = () => (
  <section id="packages" className="py-24 relative overflow-hidden grain">
    <div className="absolute inset-0 bg-hero opacity-90" />
    <div className="absolute inset-0 grid-bg" />
    <div className="absolute inset-0 light-streak pointer-events-none" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-secondary/20 blur-[160px] animate-pulse-glow" />

    <div className="container relative z-10">
      <Reveal className="max-w-2xl mb-12">
        <p className="text-xs uppercase tracking-widest text-accent mb-3 animate-flicker">⚡ Attendee Packages</p>
        <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.9]">
          Pick your pass
        </h2>
      </Reveal>

      <Reveal delay={120} className="glass-strong rounded-3xl p-2 md:p-4 overflow-hidden">
        <div className="overflow-x-auto scrollbar-thin">
          <table className="w-full min-w-[920px] border-separate border-spacing-0 text-sm">
            <thead>
              <tr>
                <th className="text-left font-display font-semibold text-foreground/80 px-5 py-4 border-b border-border/60">
                  Feature / Access
                </th>
                {columns.map((c, i) => (
                  <th
                    key={c}
                    className={`text-center font-display font-semibold px-4 py-4 border-b border-border/60 ${
                      i === 0
                        ? "text-gradient-animated"
                        : i === 2
                          ? "text-accent"
                          : "text-foreground/90"
                    }`}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={row.feature} className={ri % 2 === 0 ? "bg-card/30" : ""}>
                  <td className="px-5 py-4 text-foreground/85 border-b border-border/30">{row.feature}</td>
                  {row.values.map((v, ci) => (
                    <td key={ci} className="px-4 py-4 text-center border-b border-border/30 align-middle">
                      {renderCell(v)}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="bg-card/50">
                <td className="px-5 py-5 font-display text-lg font-semibold border-t-2 border-accent/40">
                  Price
                </td>
                {prices.map((p, i) => (
                  <td
                    key={i}
                    className="px-4 py-5 text-center font-display font-semibold text-base border-t-2 border-accent/40"
                  >
                    <span className="text-gradient-animated">{p}</span>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </Reveal>

      <Reveal delay={200}>
        <p className="text-xs text-muted-foreground mt-6 uppercase tracking-[0.2em]">
          *Pricing and inclusions subject to change
        </p>
      </Reveal>
    </div>
  </section>
);
