import { Network, TrendingUp, Cpu, Globe2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { Stagger } from "./Stagger";

const items = [
  { icon: Network, title: "Meet investors", desc: "1,800+ funds. One room." },
  { icon: TrendingUp, title: "Build your network", desc: "Meet the people building the future." },
  { icon: Cpu, title: "See what's next", desc: "Before everyone else." },
  { icon: Globe2, title: "Own Southeast Asia", desc: "Vietnam is the gateway." },
];

export const WhyAttend = () => (
  <section id="why" className="py-24 relative">
    <div className="container">
      <Reveal>
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-widest text-accent mb-3 animate-flicker">⚡ Why Attend</p>
          <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.9]">
            Two days. <span className="text-gradient-animated">Years of upside.</span>
          </h2>
        </div>
      </Reveal>
      <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" step={100}>
        {items.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="relative glass rounded-2xl p-7 hover-lift hover:border-primary/60 group overflow-hidden h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-secondary/0 to-accent/0 group-hover:from-primary/10 group-hover:via-secondary/5 group-hover:to-accent/10 transition-all duration-700" />
            <div className="relative h-14 w-14 rounded-xl bg-brand grid place-items-center mb-5 group-hover:scale-110 transition-transform duration-500">
              <Icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <h3 className="relative font-display text-2xl font-semibold mb-2 group-hover:text-gradient-animated transition-all">{title}</h3>
            <p className="relative text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </Stagger>
    </div>
  </section>
);
