import { Layers, GraduationCap, Users2, Globe } from "lucide-react";

const tracks = [
  { tag: "Track", title: "Vietnam Tech Market Outlook", desc: "Macro view from VCs, government, and operators on where the capital is flowing." },
  { tag: "Track", title: "AI & Enterprise Automation", desc: "From prototype to production — what's actually shipping in Vietnamese enterprises." },
  { tag: "Track", title: "Outsourcing & BPO", desc: "Why Vietnam is winning the next decade of global engineering and BPO contracts." },
  { tag: "Track", title: "Gaming & Creator Economy", desc: "Inside Sky Mavis, indie studios, and Vietnam's red-hot creator economy." },
  { tag: "Track", title: "Education & EdTech", desc: "Building the talent pipeline for Vietnam's next 100 unicorns." },
  { tag: "Track", title: "Government Policy & Diplomacy", desc: "Cross-border deal-making with NIC Vietnam, embassies, and ministry partners." },
];

const formats = [
  { icon: Layers, k: "Breakout Tracks", v: "6 verticals across two days" },
  { icon: GraduationCap, k: "Masterclasses", v: "Hands-on with operators & builders" },
  { icon: Users2, k: "Industry Meetups", v: "Closed-door rooms by sector" },
  { icon: Globe, k: "Ecosystem Exchanges", v: "Cross-border matchmaking sessions" },
];

export const Program = () => (
  <section id="program" className="py-24 relative">
    <div className="container">
      <div className="max-w-2xl mb-12">
        <p className="text-xs uppercase tracking-widest text-accent mb-3">Program Highlights</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
          Six tracks. <span className="text-gradient">Hundreds of conversations.</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {tracks.map(t => (
          <div key={t.title} className="glass rounded-2xl p-6 hover:border-accent/40 transition-all">
            <span className="text-[10px] uppercase tracking-widest text-accent">{t.tag}</span>
            <h3 className="font-display text-xl font-semibold mt-2 mb-2">{t.title}</h3>
            <p className="text-sm text-muted-foreground">{t.desc}</p>
          </div>
        ))}
      </div>

      <div className="glass-strong rounded-3xl p-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {formats.map(({ icon: Icon, k, v }) => (
          <div key={k} className="flex items-start gap-3">
            <span className="h-10 w-10 rounded-lg bg-brand grid place-items-center shrink-0">
              <Icon className="h-5 w-5 text-primary-foreground" />
            </span>
            <div>
              <div className="font-semibold">{k}</div>
              <div className="text-sm text-muted-foreground">{v}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
