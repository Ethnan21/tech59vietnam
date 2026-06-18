import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";
import quoteGreg from "@/assets/quote-greg-v2.jpg.asset.json";
import quoteEdwin from "@/assets/quote-edwin-v2.jpg.asset.json";
import quoteRui from "@/assets/quote-rui-v2.jpg.asset.json";

const quotes = [
  {
    bg: quoteGreg.url,
    imgClass: "scale-105",
    text: (
      <span>
        We are not just building a community.{" "}
        <span className="text-gradient-animated text-slate-50 italic">
          We are shaping the future of Vietnam's innovation economy.
        </span>
      </span>
    ),
    meta: "Tech59 · Est. 2024",
  },
  {
    bg: quoteEdwin.url,
    imgClass: "scale-125 object-[center_75%]",
    text: (
      <span>
        Grateful for the partnership and the energy this community brings.{" "}
        <span className="text-gradient-animated text-slate-50 italic">
          Excited for what we'll build together!
        </span>
      </span>
    ),
    meta: "Edwin H. Law · Executive Director, AusCham Vietnam",
  },
  {
    bg: quoteRui.url,
    imgClass: "scale-125 object-[center_75%]",
    text: (
      <span>
        Great event! Thank you for having me and the opportunity to{" "}
        <span className="text-gradient-animated text-slate-50 italic">
          voice a perspective from a cybersecurity angle
        </span>{" "}
        and contrast the differences in working cultures between Vietnam and USA.
      </span>
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
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-[0.9] mb-6">
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
            {quotes.map((q, idx) => (
              <img
                key={q.bg}
                src={q.bg}
                alt=""
                aria-hidden="true"
                className={`absolute inset-0 w-full h-full object-cover ${q.imgClass} pointer-events-none transition-opacity duration-700 ease-out ${idx === i ? "opacity-30" : "opacity-0"}`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-br from-card/80 via-card/60 to-card/80 pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-secondary/20 blur-[120px] pointer-events-none animate-pulse-glow" />
            <div className="absolute -bottom-24 -left-24 w-[360px] h-[360px] rounded-full bg-accent/15 blur-[120px] pointer-events-none" />
            <div className="absolute inset-0 light-streak opacity-40 pointer-events-none" />
            <div className="relative flex gap-3 sm:gap-4 md:gap-5 min-h-[300px] md:min-h-[360px]">
              <div className="shrink-0 w-[3px] rounded-full bg-gradient-to-b from-primary via-secondary to-accent" />
              <div className="flex-1 min-w-0 flex flex-col">
                <span aria-hidden="true" className="font-display text-5xl md:text-7xl leading-none text-gradient-animated text-slate-50 -mt-1 mb-1 select-none">“</span>
                <div className="flex-1 flex items-center">
                  <p className="font-sans text-sm sm:text-base md:text-lg font-medium leading-relaxed text-foreground/90 break-words">
                    <span key={i} className="animate-fade-in inline">{cur.text}</span>
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground break-words order-2 sm:order-1">
                    {cur.meta}
                  </span>
                  <div className="flex items-center gap-2 flex-wrap order-1 sm:order-2 sm:justify-end">
                    <div className="flex items-center gap-1.5 mr-2">
                      {quotes.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setI(idx)}
                          aria-label={`Quote ${idx + 1}`}
                          className={`h-1.5 rounded-full transition-all ${idx === i ? "w-6 bg-gradient-to-r from-primary to-accent" : "w-1.5 bg-muted-foreground/40 hover:bg-muted-foreground/70"}`}
                        />
                      ))}
                    </div>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
