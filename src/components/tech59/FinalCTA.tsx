import { Countdown } from "./Countdown";
import { Flame, Mail, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const contacts = [
  {
    name: "Maisy Vo",
    title: "Event Leader",
    email: "events@thesentry.com.vn",
  },
  {
    name: "Henry Nguyen",
    title: "Leasing & Event Manager",
    email: "henry.nguyen@thesentry.com.vn",
  },
];

export const FinalCTA = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden grain">
      <div className="absolute inset-0 bg-hero opacity-90" />
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 light-streak pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-secondary/25 blur-[160px] animate-pulse-glow" />

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal variant="scale" className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8">
            <Flame className="h-3.5 w-3.5 text-accent animate-flicker" />
            <span className="text-xs uppercase tracking-widest">Limited access · Not everyone gets in</span>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-3 text-gradient-animated text-glow">
              Get in touch
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-base md:text-lg text-foreground/70 mb-8">
              Partnerships, booths, or anything else — reach our team directly.
            </p>
          </Reveal>

          <Reveal delay={240} className="flex justify-center mb-12">
            <Countdown compact />
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-3 sm:gap-5 text-left">
            {contacts.map((c, i) => (
              <Reveal key={c.email} delay={320 + i * 100} variant="up">
                <div
                  className="group relative block glass-strong rounded-2xl p-4 sm:p-7 md:p-8 border border-primary/20 hover:border-primary/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_hsl(258_90%_66%/0.6)] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-secondary/0 to-accent/0 group-hover:from-primary/10 group-hover:via-secondary/5 group-hover:to-accent/10 transition-all duration-700 pointer-events-none" />
                  <div className="relative flex items-start justify-between gap-3 mb-3 sm:mb-5">
                    <div className="h-9 w-9 sm:h-12 sm:w-12 rounded-xl bg-brand grid place-items-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                      <Mail className="h-4 w-4 sm:h-6 sm:w-6 text-primary-foreground" />
                    </div>
                    <a
                      href={`mailto:${c.email}`}
                      aria-label={`Email ${c.name}`}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      <ArrowUpRight className="h-5 w-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                    </a>
                  </div>
                  <h3 className="relative font-display text-lg sm:text-2xl md:text-3xl font-semibold leading-tight mb-1">
                    {c.name}
                  </h3>
                  <p className="relative text-[10px] sm:text-xs uppercase tracking-[0.2em] text-accent mb-2 sm:mb-4">
                    {c.title}
                  </p>
                  <p className="relative text-xs sm:text-sm md:text-base text-foreground/80 break-all select-all cursor-text">
                    {c.email}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>


          <p className="text-xs text-muted-foreground mt-10 uppercase tracking-[0.25em] animate-flicker">
            ⚡ TECH59 SUMMIT · CURATED AUDIENCE ONLY
          </p>
        </div>
      </div>
    </section>
  );
};
