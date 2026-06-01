import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

const quotes = [
  {
    text: (
      <>
        We are not just building a community.{" "}
        <span className="text-gradient-animated text-slate-50 italic">
          We are shaping the future of Vietnam's innovation economy.
        </span>
      </>
    ),
    meta: "Tech59 · Est. 2024",
  },
  {
    text: (
      <>
        ...We were proud to introduce{" "}
        <span className="text-gradient-animated text-slate-50 italic">FoundersCircle</span>, our new membership
        tier designed to empower early-stage founders building across the Australia-Vietnam corridor.
        Grateful for the partnership and the energy this community brings. Excited for what we'll build together!
      </>
    ),
    meta: "Edwin H. Law · Executive Director, AusCham Vietnam",
  },
  {
    text: (
      <>
        Great event! Thank you for having me and the opportunity to{" "}
        <span className="text-gradient-animated text-slate-50 italic">
          voice a perspective from a cybersecurity angle
        </span>{" "}
        and contrast the differences in working cultures between Vietnam and USA.
      </>
    ),
    meta: "Rui Maximo · VP of Security, Sky Mavis",
  },
];

export const About = () => {
  const [i, setI] = useState(0);
  const total = quotes.length;
  const prev = () => setI((i - 1 + total) % total);
  const next = () => setI((i + 1) % total);
  const cur = quotes[i];

  return (
    <section id="about" className="pt-12 pb-24 relative">
      <div className="container grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <Reveal>
          <p className="text-xs uppercase tracking-widest text-accent mb-3 animate-flicker">⚡ About Us</p>
          <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.9] mb-6">
            What is <span className="text-gradient-animated text-slate-50">Tech59</span>?
          </h2>
          <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
            <p>
              Founded in 2024 by <span className="text-foreground font-medium">The Sentry</span>,{" "}
              <span className="text-foreground font-medium">SPARK Hub</span>, and{" "}
              <span className="text-foreground font-medium">Ascend Vietnam Ventures (AVV)</span> — Tech59 connects
              founders, investors, innovators, and global players shaping Vietnam's innovation economy.
            </p>
            <p>
              More than a network, it's a launchpad. Through monthly gatherings and the flagship summit, Tech59 drives
              collaboration, deal flow, and market entry across Southeast Asia.
            </p>
          </div>
        </Reveal>

        <Reveal variant="scale" delay={120} className="min-w-0">
          <div className="relative glass-strong rounded-3xl p-5 sm:p-6 md:p-8 overflow-hidden grain max-w-full">
            <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-secondary/20 blur-[120px] pointer-events-none animate-pulse-glow" />
            <div className="absolute -bottom-24 -left-24 w-[360px] h-[360px] rounded-full bg-accent/15 blur-[120px] pointer-events-none" />
            <div className="absolute inset-0 light-streak opacity-40 pointer-events-none" />
            <div className="relative flex gap-3 sm:gap-4 md:gap-5 min-h-[300px] md:min-h-[360px]">
              <div className="shrink-0 w-[3px] rounded-full bg-gradient-to-b from-primary via-secondary to-accent" />
              <div className="flex-1 min-w-0 flex flex-col">
                <span aria-hidden="true" className="font-display text-5xl md:text-7xl leading-none text-gradient-animated text-slate-50 -mt-1 mb-1 select-none">“</span>
                <div className="flex-1 flex items-center">
                  <p key={i} className="font-sans text-sm sm:text-base md:text-lg font-medium leading-relaxed text-foreground/90 animate-fade-in break-words">
                    {cur.text}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <button
                      onClick={prev}
                      aria-label="Previous quote"
                      className="h-9 w-9 rounded-full glass grid place-items-center text-muted-foreground hover:text-foreground hover:border-accent/60 transition-all"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={next}
                      aria-label="Next quote"
                      className="h-9 w-9 rounded-full glass grid place-items-center text-muted-foreground hover:text-foreground hover:border-accent/60 transition-all"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                    <div className="flex items-center gap-1.5 ml-2">
                      {quotes.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setI(idx)}
                          aria-label={`Quote ${idx + 1}`}
                          className={`h-1.5 rounded-full transition-all ${idx === i ? "w-6 bg-gradient-to-r from-primary to-accent" : "w-1.5 bg-muted-foreground/40 hover:bg-muted-foreground/70"}`}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:text-right break-words">
                    {cur.meta}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
