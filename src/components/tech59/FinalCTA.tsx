import { Button } from "@/components/ui/button";
import { Countdown } from "./Countdown";
import { ArrowRight, Flame } from "lucide-react";

export const FinalCTA = () => (
  <section id="register" className="py-32 relative overflow-hidden grain bg-aurora">
    <div className="absolute inset-0 grid-bg" />
    <div className="absolute inset-0 light-streak pointer-events-none" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-secondary/25 blur-[160px] animate-pulse-glow" />

    <div className="container relative z-10">
      <div className="text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8">
          <Flame className="h-3.5 w-3.5 text-accent animate-flicker" />
          <span className="text-xs uppercase tracking-widest">Limited access · Not everyone gets in</span>
        </div>

        <h2 className="font-display text-7xl md:text-9xl lg:text-[10rem] font-bold leading-[0.85] mb-6">
          <span className="block text-gradient-animated text-glow">TECH59</span>
          <span className="block">SUMMIT</span>
        </h2>
        <p className="text-2xl md:text-4xl font-display font-semibold text-foreground/90 mb-10">
          Be in the room.
        </p>

        <div className="flex justify-center mb-10">
          <Countdown compact />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl" asChild className="cta-glow">
            <a href="mailto:henry.nguyen@thesentry.com.vn?subject=TECH59%20Summit%202026%20-%20Register">
              Register Now <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outlineGlow" size="xl" asChild>
            <a href="mailto:henry.nguyen@thesentry.com.vn?subject=TECH59%20Summit%202026%20-%20Partnership">Talk to the team</a>
          </Button>
        </div>

        <p className="text-xs text-muted-foreground mt-8 uppercase tracking-[0.25em] animate-flicker">
          ⚡ Last edition sold out · Curated audience only
        </p>
      </div>
    </div>
  </section>
);
