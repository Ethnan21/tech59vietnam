import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";


const tabs = [
  {
    key: "founders",
    label: "Founder",
    benefit: "Showcase your product. Meet investors. Find your first 1,000 users.",
    cta: "Get a Booth",
  },
  {
    key: "investors",
    label: "Investor",
    benefit: "Discover the next unicorn before the rest of the market.",
    cta: "Partner Up",
  },
  {
    key: "ent",
    label: "Enterprise",
    benefit: "Partner with Vietnam's most promising tech companies.",
    cta: "Get a Booth",
  },
  {
    key: "tech",
    label: "Tech Talent",
    benefit: "Join the teams building the future.",
    cta: "Get My Spot",
  },
  {
    key: "attendee",
    label: "Attendee",
    benefit: "Be where the future is built. Network, learn, and get inspired.",
    cta: "Get My Spot",
  },
];

export const Audience = () => {
  const [active, setActive] = useState(tabs[0].key);
  const cur = tabs.find(t => t.key === active)!;
  return (
    <section id="audience" className="py-24 relative">
      <div className="container">
        <Reveal className="max-w-2xl mb-12">
          <p className="text-xs uppercase tracking-widest text-accent mb-3 animate-flicker">⚡ Who it's for</p>
          <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.9]">
            Built for <span className="text-gradient-animated">you.</span>
          </h2>
        </Reveal>

        <Reveal>
          <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-4">
            I'm a<span className="text-accent">...</span>
          </p>
        </Reveal>

        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map(t => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                active === t.key
                  ? "bg-brand text-primary-foreground shadow-[0_0_40px_hsl(258_90%_66%/0.6)] scale-105"
                  : "glass text-muted-foreground hover:text-foreground hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-[0_8px_30px_-10px_hsl(187_92%_53%/0.5)]"
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
            <a href="#register">{cur.cta} <ArrowRight className="h-5 w-5" /></a>
          </Button>
        </div>
      </div>
    </section>
  );
};
