import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";

const REGISTER_URL = "https://lu.ma/bde1n8vo";

const standardIncludes = [
  "Main Stage Keynotes & Panels",
  "Coworking Lounge Access",
  "Up to 5 Workshops",
];

const vipIncludes = [
  "Priority Seating",
  "VIP / Speaker Lounge",
  "Up to 5 Workshops",
  "Priority Check-in",
  "VIP Reception (Night Before)",
];

export const Packages = () => (
  <section id="packages" className="py-24 relative overflow-hidden grain">
    <div className="absolute inset-0 bg-hero opacity-90" />
    <div className="absolute inset-0 grid-bg" />
    <div className="absolute inset-0 light-streak pointer-events-none" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-secondary/20 blur-[160px] motion-safe:animate-pulse-glow" />

    <div className="container relative z-10">
      <Reveal className="max-w-2xl mb-12">
        <p className="text-xs uppercase tracking-widest text-accent mb-3 animate-flicker">⚡ Attendee Packages</p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-[0.9]">
          Pick your pass
        </h2>
      </Reveal>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 items-stretch">
        {/* Standard Pass */}
        <Reveal delay={100}>
          <article className="group relative h-full flex flex-col p-8 rounded-3xl glass border border-border/40 transition-all duration-500 motion-safe:hover:-translate-y-1 hover:border-border/70 focus-within:ring-2 focus-within:ring-accent/50">
            <header className="mb-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Standard Pass
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-4xl sm:text-5xl font-bold text-foreground">500,000</span>
                <span className="text-sm font-medium text-muted-foreground tracking-wider">VND</span>
              </div>
            </header>

            <ul className="flex-grow space-y-4 mb-10">
              {standardIncludes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/85">
                  <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Button variant="outline" size="lg" asChild className="w-full">
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
                Register <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </article>
        </Reveal>

        {/* VIP Pass */}
        <Reveal delay={180}>
          <article className="group relative h-full flex flex-col p-8 rounded-3xl glass-strong border border-accent/30 ring-1 ring-accent/20 shadow-[0_20px_60px_-20px_hsl(187_92%_53%/0.35)] transition-all duration-500 motion-safe:hover:-translate-y-1 hover:ring-accent/50 hover:shadow-[0_30px_70px_-15px_hsl(187_92%_53%/0.5)] focus-within:ring-2 focus-within:ring-accent">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand text-[10px] font-bold tracking-[0.2em] uppercase text-background shadow-[0_0_24px_hsl(187_92%_53%/0.5)]">
              <Sparkles className="h-3 w-3" /> Most Popular
            </span>

            <header className="mb-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gradient-animated mb-3">
                VIP Pass
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-4xl sm:text-5xl font-bold text-foreground">
                  Invitation Only
                </span>
              </div>
            </header>

            <ul className="flex-grow grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-10">
              {vipIncludes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/90">
                  <Check className="h-4 w-4 text-accent shrink-0 mt-1" strokeWidth={3} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="relative">
              <span className="absolute inset-0 rounded-xl bg-brand blur-xl opacity-50 motion-safe:animate-pulse-glow pointer-events-none" />
              <Button variant="hero" size="lg" asChild className="relative w-full">
                <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
                  Get VIP Access <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </article>
        </Reveal>
      </div>

      <Reveal delay={240}>
        <p className="text-xs text-muted-foreground mt-8 uppercase tracking-[0.2em] text-center">
          *Pricing and inclusions subject to change
        </p>
      </Reveal>
    </div>
  </section>
);
