const tracks = [
  { title: "Vietnam Tech Outlook", desc: "Where capital is flowing." },
  { title: "AI & Automation", desc: "What's actually shipping." },
  { title: "Outsourcing & BPO", desc: "Why Vietnam wins the next decade." },
  { title: "Gaming & Creators", desc: "Inside the red-hot creator economy." },
  { title: "EdTech & Talent", desc: "Building the next 100 unicorns." },
  { title: "Policy & Diplomacy", desc: "Cross-border deal-making." },
];

export const Program = () => (
  <section id="program" className="py-24 relative">
    <div className="container">
      <div className="max-w-2xl mb-12">
        <p className="text-xs uppercase tracking-widest text-accent mb-3">Program</p>
        <h2 className="font-display text-5xl md:text-6xl font-bold leading-[0.95]">
          Six tracks. <span className="text-gradient">Endless deals.</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tracks.map((t, i) => (
          <div
            key={t.title}
            style={{ animationDelay: `${i * 80}ms` }}
            className="glass rounded-2xl p-6 hover:border-accent/60 hover:-translate-y-1 hover:shadow-[0_15px_40px_-15px_hsl(187_92%_53%/0.4)] transition-all duration-500 animate-fade-in-up cursor-pointer group"
          >
            <span className="text-[10px] uppercase tracking-widest text-accent">Track 0{i + 1}</span>
            <h3 className="font-display text-2xl font-semibold mt-2 mb-2 group-hover:text-gradient transition-all">{t.title}</h3>
            <p className="text-sm text-muted-foreground">{t.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
