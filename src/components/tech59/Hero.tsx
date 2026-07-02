import { Button } from "@/components/ui/button";
import { Countdown } from "./Countdown";
import { ArrowRight, Sparkles, MapPin, Calendar, ArrowUpRight } from "lucide-react";
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
  <section className="relative min-h-screen flex items-center pt-20 sm:pt-24 md:pt-28 pb-16 overflow-x-clip overflow-hidden bg-hero grain">
    <img ref={bgRef} src={heroBg} alt="" fetchPriority="high" decoding="async" className="absolute inset-0 w-full h-[120%] -top-[10%] object-cover opacity-40 mix-blend-screen will-change-transform" width={1920} height={1080} />
    <div ref={gridRef} className="absolute inset-0 grid-bg will-change-transform" />
    <div className="absolute inset-0 light-streak pointer-events-none" />
    <div className="absolute -top-40 -left-40 w-[60vw] max-w-[500px] aspect-square rounded-full bg-secondary/20 blur-[120px] animate-pulse-glow" />
    <div className="absolute -bottom-40 -right-40 w-[70vw] max-w-[600px] aspect-square rounded-full bg-accent/15 blur-[140px] animate-pulse-glow [animation-delay:1.5s]" />

    <div className="container relative z-10">
      <div className="max-w-5xl">
        <div className="inline-flex flex-nowrap items-center gap-2 md:gap-5 glass rounded-full pl-3 pr-3 md:pl-5 md:pr-5 py-2 md:py-2.5 mb-8 animate-fade-in max-w-full">
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.18em] md:tracking-[0.25em] text-muted-foreground shrink-0">Powered by</span>
          <span className="inline-block h-3 md:h-4 w-px bg-border shrink-0" />
          <img src={logoSentry} alt="The Sentry" className="h-4 md:h-7 w-auto object-contain opacity-90 shrink-0" />
          <span className="inline-block h-3 md:h-4 w-px bg-border shrink-0" />
          <img src={logoSpark} alt="SPARK Hub" className="h-4 md:h-7 w-auto object-contain opacity-90 shrink-0" />
          <span className="inline-block h-3 md:h-4 w-px bg-border shrink-0" />
          <img src={logoAvv} alt="Ascend Vietnam Ventures" className="h-4 md:h-7 w-auto object-contain opacity-90 shrink-0" />
        </div>


        <h1 className="mb-6 animate-fade-in-up md:-ml-[8%]">
          <span className="sr-only">TECH59 Summit Vietnam 2026</span>
          <div className="relative inline-block max-w-full">
            <img src={heroLogo} alt="TECH59 Summit Vietnam" width={1400} height={873} fetchPriority="high" decoding="async" className="relative w-full max-w-2xl lg:max-w-3xl h-auto my-0 py-0 md:pr-[20px] pt-4 pl-0 pb-0 px-px sm:mx-4 md:mx-[70px] motion-safe:animate-breathe" />
          </div>
        </h1>




        <div className="flex flex-wrap items-center gap-3 md:gap-5 text-sm text-muted-foreground mb-10 animate-fade-in-up [animation-delay:200ms] md:mx-[25px]">
          <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4 text-accent" /> 17 July 2026</span>
          <span className="hidden md:inline-block h-1 w-1 rounded-full bg-border" />
          <a href="https://www.google.com/maps/place/The+Sentry+Q/@10.8541176,106.6266831,19z/data=!4m6!3m5!1s0x31752bfeccec4c8f:0x7016c09c7a7134a3!8m2!3d10.8541178!4d106.6267169!16s%2Fg%2F11xmnv6w1b?entry=ttu&g_ep=EgoyMDI2MDUyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="inline-flex items-start md:items-center gap-2 md:whitespace-nowrap hover:text-foreground transition-colors"><MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5 md:mt-0" /><span>The Sentry Q, Ho Chi Minh City</span><ArrowUpRight className="h-3.5 w-3.5 shrink-0 mt-0.5 md:mt-0" /></a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up [animation-delay:280ms] md:mx-[25px]">
          <div className="relative">
            <span className="absolute inset-0 rounded-xl bg-brand blur-xl opacity-60 animate-pulse-glow pointer-events-none" />
            <Button variant="hero" size="xl" asChild className="relative w-full sm:w-auto">
              <a href="https://lu.ma/bde1n8vo" target="_blank" rel="noopener noreferrer">Get Your Pass <ArrowRight className="h-5 w-5" /></a>
            </Button>
          </div>
          <Button variant="outlineGlow" size="xl" asChild className="w-full sm:w-auto">
            <a href="#contact">Become a Partner</a>
          </Button>
        </div>

        <div className="animate-fade-in-up [animation-delay:360ms] md:mx-[25px]">
          <p className="text-xs uppercase tracking-widest text-accent mb-3 animate-flicker">⚡ Doors open in</p>
          <Countdown />
        </div>


      </div>
    </div>
  </section>
  );
};

