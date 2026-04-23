import { Button } from "@/components/ui/button";
import { Countdown } from "./Countdown";
import { ArrowRight, Flame } from "lucide-react";

export const FinalCTA = () => (
  <section id="register" className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-hero opacity-90" />
    <div className="absolute inset-0 grid-bg" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-secondary/20 blur-[160px]" />

    <div className="container relative z-10">
      <div className="glass-strong rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6">
          <Flame className="h-3.5 w-3.5 text-accent" />
          <span className="text-xs uppercase tracking-widest">Limited tickets · Early-bird closing soon</span>
        </div>
        <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-5">
          Ready to be part of <br />
          <span className="text-gradient">Vietnam's tech future?</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Tickets for the previous edition sold out in weeks. Secure your spot before the room fills up.
        </p>

        <div className="flex justify-center mb-8">
          <Countdown compact />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl" asChild>
            <a href="mailto:henry.nguyen@thesentry.com.vn?subject=TECH59%20Summit%202026%20-%20Register">
              Secure Your Spot <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outlineGlow" size="xl" asChild>
            <a href="mailto:henry.nguyen@thesentry.com.vn?subject=TECH59%20Summit%202026%20-%20Partnership">Talk to the team</a>
          </Button>
        </div>

        <p className="text-xs text-muted-foreground mt-6">
          Spots remaining tracked in real time · Last edition sold out exhibitors SQM venue
        </p>
      </div>
    </div>
  </section>
);
