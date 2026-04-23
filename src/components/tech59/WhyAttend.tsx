import { Network, TrendingUp, Cpu, Globe2 } from "lucide-react";

const items = [
  { icon: Network, title: "Meet investors", desc: "1,800+ active funds in one room." },
  { icon: TrendingUp, title: "Build connections", desc: "2,000+ founders & operators." },
  { icon: Cpu, title: "Discover tech", desc: "AI, gaming, automation, BPO." },
  { icon: Globe2, title: "Grow in SEA", desc: "Vietnam is your gateway." },
];

export const WhyAttend = () => (
  <section id="why" className="py-24 relative">
    <div className="container">
      <div className="max-w-2xl mb-14">
        <p className="text-xs uppercase tracking-widest text-accent mb-3">Why Attend</p>
        <h2 className="font-display text-5xl md:text-6xl font-bold leading-[0.95]">
          Two days. <span className="text-gradient">Years of upside.</span>
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map(({ icon: Icon, title, desc }, i) => (
          <div
            key={title}
            style={{ animationDelay: `${i * 100}ms` }}
            className="glass rounded-2xl p-7 hover:border-primary/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_hsl(217_91%_60%/0.4)] group animate-fade-in-up"
          >
            <div className="h-14 w-14 rounded-xl bg-brand grid place-items-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
              <Icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <h3 className="font-display text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
