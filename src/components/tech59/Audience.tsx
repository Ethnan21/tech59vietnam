import { useState } from "react";
import { ArrowRight, Network, TrendingUp, Cpu, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import audienceEnterprise from "@/assets/audience-enterprise-new.jpg";
import audienceFounder from "@/assets/audience-founder.jpg";
import audienceInvestor from "@/assets/audience-investor.jpg";
import audienceInnovator from "@/assets/audience-innovator.jpg";
import audienceAttendee from "@/assets/audience-attendee.jpg";


const tabs = [
  {
    key: "ent",
    label: "Enterprise",
    benefit: "Connect with Vietnam's rising tech stars.",
    cta: "Get a Booth",
    href: "#contact",
    image: audienceEnterprise,
  },
  {
    key: "founders",
    label: "Founder",
    benefit: "Showcase your product. Meet investors. Get users.",
    cta: "Get a Booth",
    href: "#contact",
    image: audienceFounder,
  },
  {
    key: "investors",
    label: "Investor",
    benefit: "Find the next unicorn before anyone else.",
    cta: "Get My Spot",
    href: "https://lu.ma/bde1n8vo",
    image: audienceInvestor,
  },
  {
    key: "innovator",
    label: "Innovator",
    benefit: "Discover what's next. Meet the builders.",
    cta: "Get My Spot",
    href: "https://lu.ma/bde1n8vo",
    image: audienceInnovator,
  },
  {
    key: "attendee",
    label: "Attendee",
    benefit: "Network, learn, and get inspired.",
    cta: "Get My Spot",
    href: "https://lu.ma/bde1n8vo",
    image: audienceAttendee,
  },
];

const whyItems = [
  { icon: Network, title: "Meet investors", desc: "1,800+ funds. One room." },
  { icon: TrendingUp, title: "Build your network", desc: "Meet the people building the future." },
  { icon: Cpu, title: "See what's next", desc: "Before everyone else." },
  { icon: Globe2, title: "Own Southeast Asia", desc: "Vietnam is the gateway." },
];

export const Audience = () => {
  const [active, setActive] = useState(tabs[0].key);
  const cur = tabs.find(t => t.key === active)!;
  return (
    <section id="audience" className="py-24 relative">
      <div className="container">
        <Reveal className="max-w-2xl mb-10">
          <p className="text-xs uppercase tracking-widest text-accent mb-3 animate-flicker">⚡ Who it's for</p>
          <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.9]">
            Built for <span className="text-gradient-animated">you.</span>
          </h2>
        </Reveal>

        <div className="flex flex-wrap gap-3 mb-10">
          {tabs.map(t => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                active === t.key
                  ? "bg-brand text-primary-foreground shadow-[0_0_40px_hsl(258_90%_66%/0.6)] scale-105"
                  : "glass text-muted-foreground hover:text-foreground hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-[0_8px_30px_-10px_hsl(187_92%_53%/0.5)]"
              }`}
            >{t.label}</button>
          ))}
        </div>

        <div key={cur.key} className="relative glass-strong rounded-3xl p-8 md:p-14 min-h-[280px] md:min-h-[320px] animate-fade-in overflow-hidden grain">
          <img src={cur.image} alt="" aria-hidden="true" loading="lazy" className={`absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none ${cur.key === 'investors' ? 'object-[center_70%]' : cur.key === 'ent' ? 'object-[center_80%]' : ''}`} />
          <div className="absolute inset-0 bg-gradient-to-r from-card via-card/60 to-card/20 pointer-events-none" />
          <div className="absolute inset-0 bg-card/20 pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-secondary/20 blur-[120px] animate-pulse-glow" />
          <p className="relative font-display text-3xl md:text-6xl font-bold leading-[1.05] pb-2 mb-8 max-w-3xl text-gradient-animated">
            {cur.benefit}
          </p>
          <Button variant="hero" size="lg" asChild className="relative">
            <a href={cur.href} {...(cur.href.startsWith('http') ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{cur.cta} <ArrowRight className="h-5 w-5" /></a>
          </Button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mt-10">
          {whyItems.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 90} variant="up" className="relative glass rounded-2xl p-4 sm:p-7 hover:border-primary/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_hsl(258_90%_66%/0.6)] group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-secondary/0 to-accent/0 group-hover:from-primary/10 group-hover:via-secondary/5 group-hover:to-accent/10 transition-all duration-700" />
              <div className="relative h-10 w-10 sm:h-14 sm:w-14 rounded-xl bg-brand grid place-items-center mb-3 sm:mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <Icon className="h-5 w-5 sm:h-7 sm:w-7 text-primary-foreground" />
              </div>
              <h3 className="relative font-display text-base sm:text-2xl font-semibold mb-1.5 sm:mb-2 inline-block leading-tight">
                <span className="block">{title}</span>
                <span aria-hidden className="absolute inset-0 text-gradient-animated opacity-0 group-hover:opacity-100 transition-opacity duration-300">{title}</span>
              </h3>
              <p className="relative text-xs sm:text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
