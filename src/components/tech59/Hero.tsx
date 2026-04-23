import { Button } from "@/components/ui/button";
import { Countdown } from "./Countdown";
import { ArrowRight, Sparkles, MapPin, Calendar } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-hero">
    <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen" width={1920} height={1080} />
    <div className="absolute inset-0 grid-bg" />
    <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-secondary/20 blur-[120px] animate-pulse-glow" />
    <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent/15 blur-[140px]" />

    <div className="container relative z-10">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 animate-fade-in">
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Vietnam's Premier Tech Summit · 2026</span>
        </div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.02] mb-6 animate-fade-in-up">
          Where Vietnam's<br />
          <span className="text-gradient">Tech Future</span> Connects
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-fade-in-up [animation-delay:120ms]">
          Join 2,000+ founders, investors & innovators at TECH59 Summit 2026 — two days that shape Southeast Asia's innovation economy.
        </p>

        <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground mb-10 animate-fade-in-up [animation-delay:200ms]">
          <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4 text-accent" /> 23–24 July 2026</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> Ho Chi Minh City, Vietnam</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up [animation-delay:280ms]">
          <Button variant="hero" size="xl" asChild>
            <a href="#register">Register Now <ArrowRight className="h-5 w-5" /></a>
          </Button>
          <Button variant="outlineGlow" size="xl" asChild>
            <a href="#partners">Become a Partner</a>
          </Button>
        </div>

        <div className="animate-fade-in-up [animation-delay:360ms]">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Summit kicks off in</p>
          <Countdown />
        </div>
      </div>
    </div>
  </section>
);
