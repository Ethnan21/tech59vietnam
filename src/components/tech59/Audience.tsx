import { useState } from "react";
import { Check } from "lucide-react";

const tabs = [
  {
    key: "founders", label: "Founders",
    headline: "Pitch, partner, and scale faster.",
    desc: "Plug into Vietnam's most concentrated room of capital, talent, and customers.",
    benefits: ["Pitch to 1,800+ active investors", "Apply to the SPARK Hub Pitch Competition", "Curated 1:1 founder–investor matchmaking", "Distribution through Tech59 Nights"],
  },
  {
    key: "investors", label: "Investors",
    headline: "Source Vietnam's next breakout.",
    desc: "600+ vetted startups, regional fund managers, and government-backed deal flow.",
    benefits: ["Access SPARK Hub portfolio showcases", "Private investor lounge & dinners", "Co-investment & syndication rooms", "Market entry briefings with NIC Vietnam"],
  },
  {
    key: "tech", label: "Tech Professionals",
    headline: "Skill up with the region's best.",
    desc: "Masterclasses, breakout tracks, and labs across AI, automation, and engineering.",
    benefits: ["AI & Enterprise Automation track", "Hands-on labs & masterclasses", "Hiring meetups with top tech employers", "Direct access to QTSC's 20,000+ talent ecosystem"],
  },
  {
    key: "ent", label: "Enterprises",
    headline: "Find your next growth lever.",
    desc: "Discover partners, vendors, and outsourcing players to ship faster, cheaper, smarter.",
    benefits: ["Outsourcing / BPO track & buyers' rooms", "Government & corporate diplomacy sessions", "Branded experiences via partnership tiers", "Enterprise-grade booth & lounge sponsorships"],
  },
];

export const Audience = () => {
  const [active, setActive] = useState(tabs[0].key);
  const cur = tabs.find(t => t.key === active)!;
  return (
    <section id="audience" className="py-24 relative">
      <div className="container">
        <div className="max-w-2xl mb-12">
          <p className="text-xs uppercase tracking-widest text-accent mb-3">Built for you</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
            Whoever you are, <span className="text-gradient">there's a room for you.</span>
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map(t => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                active === t.key
                  ? "bg-brand text-primary-foreground shadow-[0_0_30px_hsl(217_91%_60%/0.4)]"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >{t.label}</button>
          ))}
        </div>

        <div key={cur.key} className="glass-strong rounded-3xl p-8 md:p-12 grid lg:grid-cols-2 gap-10 animate-fade-in">
          <div>
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 leading-tight">{cur.headline}</h3>
            <p className="text-muted-foreground text-lg">{cur.desc}</p>
          </div>
          <ul className="space-y-3">
            {cur.benefits.map(b => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 h-6 w-6 rounded-md bg-brand grid place-items-center shrink-0">
                  <Check className="h-3.5 w-3.5 text-primary-foreground" />
                </span>
                <span className="text-foreground/90">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
