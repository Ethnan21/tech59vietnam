import keynote from "@/assets/exp-keynote.jpg";
import pitch from "@/assets/exp-pitch.jpg";
import night from "@/assets/exp-night.jpg";
import tour from "@/assets/exp-tour.jpg";
import { Reveal } from "./Reveal";
import { Programme } from "./Programme";

const items = [
  { img: keynote, title: "Keynote Speeches", desc: "Insights from the frontlines." },
  { img: pitch, title: "Startup Pitch", desc: "Where ideas get funded." },
  { img: night, title: "Booths", desc: "Discover what's shipping next." },
  { img: tour, title: "Networking", desc: "Curated intros where deals get made." },
];

const themes = [
  { title: "Vietnam Market Outlook", desc: "Where capital flows next." },
  { title: "Outsourcing", desc: "Why Vietnam wins next." },
  { title: "Gaming & Creator Economy", desc: "Inside the creator boom." },
  { title: "Education & EdTech", desc: "Building the next 100 unicorns." },
  { title: "AI & Enterprise Automation", desc: "What's actually shipping." },
  { title: "Government Policy & Corporate Diplomacy", desc: "Cross-border deal-making." },
  { title: "Venture Capital & Investment", desc: "Find the next unicorn." },
  { title: "Real Estate & Tech", desc: "Proptech meets capital." },
  { title: "Fashion Tech", desc: "Where style meets software." },
  { title: "Hot Topic Workshops", desc: "Hands-on, off-record." },
];

export const Experience = () => (
  <section id="experience" className="py-24 relative">
    <div className="container">
      <Reveal className="max-w-2xl mb-12">
        <p className="text-xs uppercase tracking-widest text-accent mb-3 animate-flicker">⚡ The Experience</p>
        <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.9]">
          Four formats. <span className="text-gradient-animated">One summit.</span>
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
        {items.map((it, i) => (
          <Reveal
            as="article"
            key={it.title}
            delay={i * 100}
            className="glass rounded-3xl overflow-hidden group hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_30px_80px_-20px_hsl(217_91%_60%/0.35)] transition-all duration-700 ease-out"
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <img src={it.img} alt={it.title} loading="lazy" width={1024} height={768}
                className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-[2000ms] ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 light-streak" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display text-2xl font-semibold mb-1 group-hover:text-gradient-animated transition-all">{it.title}</h3>
                <p className="text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Programme />

      <Reveal className="max-w-2xl mb-12">
        <p className="text-xs uppercase tracking-widest text-accent mb-3 animate-flicker">⚡ Core Themes</p>
        <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.9]">
          Ten tracks. <span className="text-gradient-animated">Endless deals.</span>
        </h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {themes.map((t, i) => (
          <Reveal
            key={t.title}
            delay={i * 60}
            className="relative glass rounded-2xl p-6 hover:border-accent/60 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_hsl(187_92%_53%/0.5)] transition-all duration-500 cursor-pointer group overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 light-streak pointer-events-none" />
            <span className="relative text-[10px] uppercase tracking-[0.2em] text-accent">Theme {String(i + 1).padStart(2, "0")}</span>
            <h3 className="relative font-display text-xl font-semibold mt-2 mb-2 group-hover:text-gradient-animated transition-all leading-tight">{t.title}</h3>
            <p className="relative text-sm text-muted-foreground">{t.desc}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
