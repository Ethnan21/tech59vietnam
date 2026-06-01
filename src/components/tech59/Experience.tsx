import keynote from "@/assets/exp-keynote.jpg";
import pitch from "@/assets/exp-pitch.jpg";
import night from "@/assets/exp-night.jpg";
import tour from "@/assets/exp-tour.jpg";
import themeMarket from "@/assets/theme-market.jpg";
import themeOutsourcing from "@/assets/theme-outsourcing.jpg";
import themeGaming from "@/assets/theme-gaming.jpg";
import themeEdu from "@/assets/theme-edu.jpg";
import themeAi from "@/assets/theme-ai.jpg";
import themeGov from "@/assets/theme-gov.jpg";
import themeVc from "@/assets/theme-vc.jpg";
import themeRealEstate from "@/assets/theme-real-estate.jpg";
import themeFashion from "@/assets/theme-fashion.jpg";
import themeWorkshop from "@/assets/theme-workshop.jpg";
import { Reveal } from "./Reveal";
import { Programme } from "./Programme";

const items = [
  { img: keynote, title: "Keynote Speeches & Panel", desc: "Insights from industry leaders and expert panels." },
  { img: pitch, title: "Live Workshops", desc: "Hands-on sessions with real-world applications." },
  { img: night, title: "Exhibitor Booths", desc: "Discover the latest innovations and products." },
  { img: tour, title: "Networking", desc: "Curated intros where deals get made." },
];

const themes = [
  { title: "Vietnam Market Outlook", desc: "Where capital flows next.", bg: themeMarket },
  { title: "Outsourcing", desc: "Why Vietnam wins next.", bg: themeOutsourcing },
  { title: "Gaming & Creator Economy", desc: "Inside the creator boom.", bg: themeGaming },
  { title: "Education & EdTech", desc: "Building the next 100 unicorns.", bg: themeEdu },
  { title: "AI & Enterprise Automation", desc: "What's actually shipping.", bg: themeAi },
  { title: "Government Policy & Corporate Diplomacy", desc: "Cross-border deal-making.", bg: themeGov },
  { title: "Venture Capital & Investment", desc: "Find the next unicorn.", bg: themeVc },
  { title: "Real Estate & Tech", desc: "Proptech meets capital.", bg: themeRealEstate },
  { title: "Fashion Tech", desc: "Where style meets software.", bg: themeFashion },
  { title: "Hot Topic Workshops", desc: "Hands-on, off-record.", bg: themeWorkshop },
];

export const Experience = () => (
  <section id="experience" className="py-24 relative">
    <div className="container">
      <Reveal className="max-w-2xl mx-auto mb-12 text-center">
        <p className="text-xs uppercase tracking-widest text-accent mb-3 animate-flicker">⚡ The Experience</p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-[0.9]">
          <span>Four formats</span><br />
          <span className="text-gradient-animated text-slate-50">One summit</span>
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
        {items.map((it, i) => (
          <Reveal
            as="article"
            key={it.title}
            delay={i * 100}
            className="glass rounded-3xl overflow-hidden group hover:-translate-y-0.5 transition-all duration-[1200ms] ease-out cursor-default"
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <img src={it.img} alt={it.title} loading="lazy" width={1024} height={768}
                className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[1200ms] light-streak" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display font-semibold mb-1 group-hover:text-gradient-animated transition-all text-lg min-h-[1.75rem]">{it.title}</h3>
                <p className="text-sm text-muted-foreground min-h-[2.5rem]">{it.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Programme />

      <Reveal className="max-w-2xl mb-12">
        <p className="text-xs uppercase tracking-widest text-accent mb-3 animate-flicker">⚡ Core Themes</p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-[0.9]">
          Ten tracks,<br />
          <span className="text-gradient-animated text-slate-50">Endless deals</span>
        </h2>
      </Reveal>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4">
        {themes.map((t, i) => (
          <Reveal
            key={t.title}
            delay={i * 60}
            className="relative glass rounded-2xl p-4 sm:p-6 hover:border-accent/60 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_hsl(187_92%_53%/0.5)] transition-all duration-500 cursor-default group overflow-hidden"
          >
            <img
              src={t.bg}
              alt=""
              aria-hidden="true"
              loading="lazy"
              width={768}
              height={768}
              className="absolute inset-0 w-full h-full object-cover opacity-15 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-card/40 pointer-events-none" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 light-streak pointer-events-none" />
            <span className="relative text-[10px] uppercase tracking-[0.2em] text-accent">Theme {String(i + 1).padStart(2, "0")}</span>
            <h3 className="relative font-display text-base sm:text-xl font-semibold mt-2 mb-2 group-hover:text-gradient-animated transition-all leading-tight">{t.title}</h3>
            <p className="relative text-xs sm:text-sm text-muted-foreground">{t.desc}</p>

          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
