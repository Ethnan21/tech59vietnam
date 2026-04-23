import { Button } from "@/components/ui/button";
import { Countdown } from "./Countdown";
import { ArrowRight, Flame } from "lucide-react";

export const FinalCTA = () => (
  <section id="register" className="py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-hero opacity-90" />
    <div className="absolute inset-0 grid-bg" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-secondary/20 blur-[160px] animate-pulse-glow" />

    <div className="container relative z-10">
      <div className="text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8">
          <Flame className="h-3.5 w-3.5 text-accent" />
          <span className="text-xs uppercase tracking-widest">Limited spots available</span>
        </div>

        <h2 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] mb-6">
          Join <span className="text-gradient text-glow">TECH59</span><br />Summit
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground mb-10">
          Be where the future is built.
        </p>

        <div className="flex justify-center mb-10">
          <Countdown compact />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl" asChild>
            <a href="mailto:henry.nguyen@thesentry.com.vn?subject=TECH59%20Summit%202026%20-%20Register">
              Register Now <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outlineGlow" size="xl" asChild>
            <a href="mailto:henry.nguyen@thesentry.com.vn?subject=TECH59%20Summit%202026%20-%20Partnership">Talk to the team</a>
          </Button>
        </div>

        <p className="text-xs text-muted-foreground mt-8 uppercase tracking-widest">
          Last edition sold out · Don't miss this one
        </p>
      </div>
    </div>
  </section>
);
