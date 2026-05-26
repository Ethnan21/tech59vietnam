import { Button } from "@/components/ui/button";
import { Countdown } from "./Countdown";
import { ArrowRight, Sparkles, MapPin, Calendar } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroLogo from "@/assets/tech59-hero-logo-white.png";
import logoSentry from "@/assets/logo-thesentry.png";
import logoSpark from "@/assets/logo-sparkhub.png";
import logoAvv from "@/assets/logo-avv.png";
import { useParallax } from "@/hooks/useParallax";

export const Hero = () => {
  const bgRef = useParallax<HTMLImageElement>(0.25);
  const gridRef = useParallax<HTMLDivElement>(0.1);
  return (
  <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-hero grain">
    <img ref={bgRef} src={heroBg} alt="" className="absolute inset-0 w-full h-[120%] -top-[10%] object-cover opacity-40 mix-blend-screen will-change-transform" width={1920} height={1080} />
    <div ref={gridRef} className="absolute inset-0 grid-bg will-change-transform" />
    <div className="absolute inset-0 light-streak pointer-events-none" />
    <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-secondary/20 blur-[120px] animate-pulse-glow" />
    <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent/15 blur-[140px] animate-pulse-glow [animation-delay:1.5s]" />

    <div className="container relative z-10">
      <div className="max-w-5xl">
        <div className="inline-flex flex-wrap items-center gap-4 md:gap-5 glass rounded-full pl-5 pr-5 py-2.5 mb-8 animate-fade-in">
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Powered by</span>
          <span className="h-4 w-px bg-border" />
          <img src={logoSentry} alt="The Sentry" className="h-6 md:h-7 w-auto object-contain opacity-90" />
          <span className="h-4 w-px bg-border" />
          <img src={logoSpark} alt="SPARK Hub" className="h-6 md:h-7 w-auto object-contain opacity-90" />
          <span className="h-4 w-px bg-border" />
          <img src={logoAvv} alt="Ascend Vietnam Ventures" className="h-6 md:h-7 w-auto object-contain opacity-90" />
        </div>

        <h1 className="mb-6 animate-fade-in-up -ml-[8%]">
          <span className="sr-only">TECH59 Summit Vietnam 2026</span>
          <img src={heroLogo} alt="TECH59 Summit Vietnam" className="w-full max-w-xl lg:max-w-2xl h-auto my-0 py-0 pr-[20px] pt-0 pl-0 pb-0 px-px mx-[80px]" />
        </h1>

        <p className="text-xl md:text-3xl font-display font-semibold text-foreground/90 max-w-2xl mb-8 animate-fade-in-up [animation-delay:120ms]">
          Where the future of tech is decided.
        </p>

        <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground mb-10 animate-fade-in-up [animation-delay:200ms]">
          <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4 text-accent" /> 16–17 July 2026</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> Ho Chi Minh City</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up [animation-delay:280ms]">
          <div className="relative">
            <span className="absolute inset-0 rounded-xl bg-brand blur-xl opacity-60 animate-pulse-glow pointer-events-none" />
            <Button variant="hero" size="xl" asChild className="relative">
              <a href="#register">Get Your Pass <ArrowRight className="h-5 w-5" /></a>
            </Button>
          </div>
          <Button variant="outlineGlow" size="xl" asChild>
            <a href="#partners">Become a Partner</a>
          </Button>
        </div>

        <div className="animate-fade-in-up [animation-delay:360ms]">
          <p className="text-xs uppercase tracking-widest text-accent mb-3 animate-flicker">⚡ Doors open in</p>
          <Countdown />
        </div>
      </div>
    </div>
  </section>
  );
};

