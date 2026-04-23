import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const tabs = [
  { key: "founders", label: "Founders", benefit: "Pitch to 1,800+ investors. Get funded faster." },
  { key: "investors", label: "Investors", benefit: "Source Vietnam's next breakout — 600+ vetted startups." },
  { key: "tech", label: "Tech Talent", benefit: "Skill up. Hire. Get hired by the region's best." },
  { key: "ent", label: "Enterprises", benefit: "Find partners, vendors, and growth levers." },
];

export const Audience = () => {
  const [active, setActive] = useState(tabs[0].key);
  const cur = tabs.find(t => t.key === active)!;
  return (
    <section id="audience" className="py-24 relative">
      <div className="container">
        <div className="max-w-2xl mb-12">
          <p className="text-xs uppercase tracking-widest text-accent mb-3">Who it's for</p>
          <h2 className="font-display text-5xl md:text-6xl font-bold leading-[0.95]">
            Built for <span className="text-gradient">builders.</span>
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map(t => (
            <button
              key={t.key}
              onMouseEnter={() => setActive(t.key)}
              onClick={() => setActive(t.key)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                active === t.key
                  ? "bg-brand text-primary-foreground shadow-[0_0_40px_hsl(258_90%_66%/0.5)] scale-105"
                  : "glass text-muted-foreground hover:text-foreground hover:scale-105"
              }`}
            >{t.label}</button>
          ))}
        </div>

        <div key={cur.key} className="glass-strong rounded-3xl p-10 md:p-16 animate-fade-in">
          <p className="font-display text-3xl md:text-5xl font-bold leading-tight mb-8 max-w-3xl">
            {cur.benefit}
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="#register">Register Now <ArrowRight className="h-5 w-5" /></a>
          </Button>
        </div>
      </div>
    </section>
  );
};
