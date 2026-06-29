import { Countdown } from "./Countdown";
import { Flame } from "lucide-react";
import { Reveal } from "./Reveal";
import { EnquiryForm } from "./EnquiryForm";

export const FinalCTA = () => {
  return (
    <section id="contact" className="py-20 sm:py-24 md:py-32 relative overflow-hidden grain">
      <div className="absolute inset-0 bg-hero opacity-90" />
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 light-streak pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full bg-secondary/25 blur-[160px] animate-pulse-glow" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Reveal variant="scale" className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8">
              <Flame className="h-3.5 w-3.5 text-accent animate-flicker" />
              <span className="text-xs uppercase tracking-widest">Limited access · Not everyone gets in</span>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="font-display text-5xl md:text-6xl font-bold mb-3 text-gradient-animated text-slate-50 text-glow">
                Get in touch
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-base md:text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
                Partnerships, booths, or anything else — send us an enquiry and our team will get back to you shortly.
              </p>
            </Reveal>

            <Reveal delay={240} className="flex justify-center">
              <Countdown compact />
            </Reveal>
          </div>

          <Reveal delay={320} variant="up">
            <EnquiryForm />
          </Reveal>

          <div className="text-center mt-12">
            <p className="text-xs text-muted-foreground uppercase tracking-[0.25em] animate-flicker">
              ⚡ TECH59 SUMMIT · CURATED AUDIENCE ONLY
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
