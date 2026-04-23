import { Network, TrendingUp, Cpu, Globe2 } from "lucide-react";

const items = [
  { icon: Network, title: "Build powerful connections", desc: "Meet 2,000+ founders, operators, and ecosystem leaders shaping Vietnam's tech future." },
  { icon: TrendingUp, title: "Access investors & funding", desc: "Direct access to 1,800+ active investors scouting Southeast Asia's next wave of breakouts." },
  { icon: Cpu, title: "Discover cutting-edge innovation", desc: "AI, automation, gaming, EdTech, BPO — the technologies redefining the next decade." },
  { icon: Globe2, title: "Expand into Southeast Asia", desc: "Vietnam is your gateway to the region's fastest-growing digital economy." },
];

export const WhyAttend = () => (
  <section id="why" className="py-24 relative">
    <div className="container">
      <div className="max-w-2xl mb-14">
        <p className="text-xs uppercase tracking-widest text-accent mb-3">Why Attend</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
          Two days that <span className="text-gradient">compound for years</span>.
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="glass rounded-2xl p-7 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 group">
            <div className="h-12 w-12 rounded-xl bg-brand grid place-items-center mb-5 group-hover:scale-110 transition-transform">
              <Icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
