import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";


const tabs = [
  { key: "founders", label: "Founders", benefit: "Raise. Build. Scale." },
  { key: "investors", label: "Investors", benefit: "Find the next unicorn." },
  { key: "tech", label: "Tech Talent", benefit: "Join what matters." },
  { key: "ent", label: "Enterprises", benefit: "Partner with Vietnam's best." },
];

export const Audience = () => {
  const [active, setActive] = useState(tabs[0].key);
  const cur = tabs.find(t => t.key === active)!;
  return (
    <section id="audience" className="py-24 relative">
      <div className="container">
        <div className="max-w-2xl mb-12">
          <p className="text-xs uppercase tracking-widest text-accent mb-3 animate-flicker">⚡ Who it's for</p>
          <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.9]">
            Built for <span className="text-gradient-animated">builders.</span>
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
                  ? "bg-brand text-primary-foreground shadow-[0_0_40px_hsl(258_90%_66%/0.6)] scale-105"
                  : "glass text-muted-foreground hover:text-foreground hover:scale-105 hover:border-primary/40"
              }`}
            >{t.label}</button>
          ))}
        </div>

        <div key={cur.key} className="relative glass-strong rounded-3xl p-10 md:p-16 animate-fade-in overflow-hidden grain">
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-secondary/20 blur-[120px] animate-pulse-glow" />
          <p className="relative font-display text-4xl md:text-7xl font-bold leading-[0.95] mb-8 max-w-3xl text-gradient-animated">
            {cur.benefit}
          </p>
          <Button variant="hero" size="lg" asChild className="relative">
            <a href="#register">Secure Your Spot <ArrowRight className="h-5 w-5" /></a>
          </Button>
        </div>
      </div>
    </section>
  );
};
