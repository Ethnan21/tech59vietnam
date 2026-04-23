import { Network, TrendingUp, Cpu, Globe2 } from "lucide-react";

const items = [
  { icon: Network, title: "Meet investors", desc: "1,800+ funds. One room." },
  { icon: TrendingUp, title: "Build network", desc: "Where deals happen." },
  { icon: Cpu, title: "See what's next", desc: "First." },
  { icon: Globe2, title: "Own SEA", desc: "Vietnam is the gateway." },
];

export const WhyAttend = () => (
  <section id="why" className="py-24 relative overflow-hidden">
    <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[140px] animate-pulse-glow pointer-events-none" />
    <div className="container relative">
      <div className="max-w-2xl mb-14">
        <p className="text-xs uppercase tracking-widest text-accent mb-3 animate-flicker">⚡ Why Attend</p>
        <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.9]">
          Two days. <span className="text-gradient-animated">Years of upside.</span>
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map(({ icon: Icon, title, desc }, i) => (
          <div
            key={title}
            style={{ animationDelay: `${i * 100}ms` }}
            className="relative glass rounded-2xl p-7 hover:border-primary/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_hsl(258_90%_66%/0.6)] group animate-fade-in-up animate-float-slow overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-secondary/0 to-accent/0 group-hover:from-primary/10 group-hover:via-secondary/5 group-hover:to-accent/10 transition-all duration-700" />
            <div className="relative h-14 w-14 rounded-xl bg-brand grid place-items-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
              <Icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <h3 className="relative font-display text-2xl font-semibold mb-2 group-hover:text-gradient-animated transition-all">{title}</h3>
            <p className="relative text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
