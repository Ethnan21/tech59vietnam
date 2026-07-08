import themeMarket from "@/assets/theme-market.jpg";
import themeMarketWebp from "@/assets/theme-market.webp";
import themeMarketAvif from "@/assets/theme-market.avif";
import themeOutsourcing from "@/assets/theme-outsourcing.jpg";
import themeOutsourcingWebp from "@/assets/theme-outsourcing.webp";
import themeOutsourcingAvif from "@/assets/theme-outsourcing.avif";
import themeGaming from "@/assets/theme-gaming.jpg";
import themeGamingWebp from "@/assets/theme-gaming.webp";
import themeGamingAvif from "@/assets/theme-gaming.avif";
import themeEdu from "@/assets/theme-edu.jpg";
import themeEduWebp from "@/assets/theme-edu.webp";
import themeEduAvif from "@/assets/theme-edu.avif";
import themeAi from "@/assets/theme-ai.jpg";
import themeAiWebp from "@/assets/theme-ai.webp";
import themeAiAvif from "@/assets/theme-ai.avif";
import themeGov from "@/assets/theme-gov.jpg";
import themeGovWebp from "@/assets/theme-gov.webp";
import themeGovAvif from "@/assets/theme-gov.avif";
import themeVc from "@/assets/theme-vc.jpg";
import themeVcWebp from "@/assets/theme-vc.webp";
import themeVcAvif from "@/assets/theme-vc.avif";
import themeRealEstate from "@/assets/theme-real-estate.jpg";
import themeRealEstateWebp from "@/assets/theme-real-estate.webp";
import themeRealEstateAvif from "@/assets/theme-real-estate.avif";
import themeWorkshop from "@/assets/theme-workshop.jpg";
import themeWorkshopWebp from "@/assets/theme-workshop.webp";
import themeWorkshopAvif from "@/assets/theme-workshop.avif";
import { Reveal } from "./Reveal";
import { Programme } from "./Programme";
import { ThemesCarousel } from "./ThemesCarousel";
import { Packages } from "./Packages";


const themes = [
  { title: "Vietnam Market Outlook", desc: "Where capital flows next.", bg: themeMarket, bgWebp: themeMarketWebp, bgAvif: themeMarketAvif },
  { title: "Outsourcing", desc: "Why Vietnam wins next.", bg: themeOutsourcing, bgWebp: themeOutsourcingWebp, bgAvif: themeOutsourcingAvif },
  { title: "Gaming & Creator Economy", desc: "Inside the creator boom.", bg: themeGaming, bgWebp: themeGamingWebp, bgAvif: themeGamingAvif },
  { title: "Education & EdTech", desc: "Building the next 100 unicorns.", bg: themeEdu, bgWebp: themeEduWebp, bgAvif: themeEduAvif },
  { title: "AI & Enterprise Automation", desc: "What's actually shipping.", bg: themeAi, bgWebp: themeAiWebp, bgAvif: themeAiAvif },
  { title: "Government Policy & Corporate Diplomacy", desc: "Cross-border deal-making.", bg: themeGov, bgWebp: themeGovWebp, bgAvif: themeGovAvif },
  { title: "Venture Capital & Investment", desc: "Find the next unicorn.", bg: themeVc, bgWebp: themeVcWebp, bgAvif: themeVcAvif },
  { title: "Real Estate & Tech", desc: "Proptech meets capital.", bg: themeRealEstate, bgWebp: themeRealEstateWebp, bgAvif: themeRealEstateAvif },
  { title: "Hot Topic Workshops", desc: "Hands-on, off-record.", bg: themeWorkshop, bgWebp: themeWorkshopWebp, bgAvif: themeWorkshopAvif },
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
