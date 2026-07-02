import themeMarket from "@/assets/theme-market.jpg";
import themeOutsourcing from "@/assets/theme-outsourcing.jpg";
import themeGaming from "@/assets/theme-gaming.jpg";
import themeEdu from "@/assets/theme-edu.jpg";
import themeAi from "@/assets/theme-ai.jpg";
import themeGov from "@/assets/theme-gov.jpg";
import themeVc from "@/assets/theme-vc.jpg";
import themeRealEstate from "@/assets/theme-real-estate.jpg";
import themeWorkshop from "@/assets/theme-workshop.jpg";
import { Reveal } from "./Reveal";
import { Programme } from "./Programme";
import { ThemesCarousel } from "./ThemesCarousel";
import { Packages } from "./Packages";


const themes = [
  { title: "Vietnam Market Outlook", desc: "Where capital flows next.", bg: themeMarket },
  { title: "Outsourcing", desc: "Why Vietnam wins next.", bg: themeOutsourcing },
  { title: "Gaming & Creator Economy", desc: "Inside the creator boom.", bg: themeGaming },
  { title: "Education & EdTech", desc: "Building the next 100 unicorns.", bg: themeEdu },
  { title: "AI & Enterprise Automation", desc: "What's actually shipping.", bg: themeAi },
  { title: "Government Policy & Corporate Diplomacy", desc: "Cross-border deal-making.", bg: themeGov },
  { title: "Venture Capital & Investment", desc: "Find the next unicorn.", bg: themeVc },
  { title: "Real Estate & Tech", desc: "Proptech meets capital.", bg: themeRealEstate },
  { title: "Hot Topic Workshops", desc: "Hands-on, off-record.", bg: themeWorkshop },
];

export const Experience = () => (
  <section id="experience" className="relative">
    <Packages />

    <div className="container pt-8">
      <Programme />
    </div>

    {/* Core Themes — purple/blue panel */}
    <div className="relative z-20 pt-16 pb-0 mt-8 grain">
      {/* Background layers (clipped so gradient stays inside the panel) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(258_85%_32%)_0%,hsl(232_70%_22%)_45%,hsl(217_91%_38%)_100%)]" />
        <div className="absolute inset-0 bg-hero opacity-80" />
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute top-1/3 -left-32 w-[70vw] h-[70vw] max-w-[600px] max-h-[600px] rounded-full bg-secondary/60 blur-[140px] motion-safe:animate-pulse-glow" />
        <div className="absolute bottom-0 -right-32 w-[70vw] h-[70vw] max-w-[600px] max-h-[600px] rounded-full bg-primary/50 blur-[140px] motion-safe:animate-float" />
        {/* Smooth gradient transitions into surrounding black */}
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container relative z-10">
        <Reveal className="max-w-2xl mb-6">
          <p className="text-xs uppercase tracking-widest text-accent mb-3 animate-flicker">⚡ Core Themes</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9]">
            Multiple tracks,<br />
            <span className="text-gradient-animated text-slate-50">Endless deals</span>
          </h2>
        </Reveal>

        <ThemesCarousel themes={themes} />
      </div>
    </div>

  </section>
);
