import { Button } from "@/components/ui/button";
import { Countdown } from "./Countdown";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { Particles } from "./Particles";
import { Reveal } from "./Reveal";
import { useParallax } from "@/hooks/useParallax";

export const Hero = () => {
  const bg = useParallax<HTMLImageElement>(0.15);
  const orbA = useParallax<HTMLDivElement>(0.25);
  const orbB = useParallax<HTMLDivElement>(0.3);

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-aurora grain">
      <img
        ref={bg.ref}
        style={bg.style}
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 light-streak pointer-events-none" />
      <div ref={orbA.ref} style={orbA.style} className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-secondary/20 blur-[120px] animate-pulse-glow" />
      <div ref={orbB.ref} style={orbB.style} className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent/15 blur-[140px] animate-pulse-glow [animation-delay:1.5s]" />
      <Particles count={45} />

      <div className="container relative z-10">
        <div className="max-w-5xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent animate-pulse-ring" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Organised by The Sentry · Curated audience</span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display font-bold leading-[0.9] mb-6">
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] tracking-tight text-gradient-animated text-glow">
                TECH59
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-2">
                SUMMIT <span className="text-muted-foreground font-light">/ 2026</span>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="text-xl md:text-3xl font-display font-semibold text-foreground/90 max-w-2xl mb-8">
              Where the future of tech is decided.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground mb-10">
              <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4 text-accent" /> 23–24 July 2026</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> Ho Chi Minh City</span>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="xl" asChild className="cta-glow">
                <a href="#register">Get Your Pass <ArrowRight className="h-5 w-5" /></a>
              </Button>
              <Button variant="outlineGlow" size="xl" asChild>
                <a href="#partners">Become a Partner</a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={420}>
            <div>
              <p className="text-xs uppercase tracking-widest text-accent mb-3 animate-flicker">⚡ Doors open in</p>
              <Countdown />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
