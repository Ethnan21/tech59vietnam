const tracks = [
  { title: "Vietnam Tech Outlook", desc: "Where capital flows next." },
  { title: "AI & Automation", desc: "What's actually shipping." },
  { title: "Outsourcing & BPO", desc: "Why Vietnam wins next." },
  { title: "Gaming & Creators", desc: "Inside the creator economy." },
  { title: "EdTech & Talent", desc: "Building the next 100 unicorns." },
  { title: "Policy & Diplomacy", desc: "Cross-border deal-making." },
];

export const Program = () => (
  <section id="program" className="py-24 relative">
    <div className="container">
      <div className="max-w-2xl mb-12">
        <p className="text-xs uppercase tracking-widest text-accent mb-3 animate-flicker">⚡ Program</p>
        <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.9]">
          Six tracks. <span className="text-gradient-animated">Endless deals.</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tracks.map((t, i) => (
          <div
            key={t.title}
            style={{ animationDelay: `${i * 80}ms` }}
            className="relative glass rounded-2xl p-6 hover:border-accent/60 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_hsl(187_92%_53%/0.5)] transition-all duration-500 animate-fade-in-up cursor-pointer group overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 light-streak pointer-events-none" />
            <span className="relative text-[10px] uppercase tracking-[0.2em] text-accent">Track 0{i + 1}</span>
            <h3 className="relative font-display text-2xl font-semibold mt-2 mb-2 group-hover:text-gradient-animated transition-all">{t.title}</h3>
            <p className="relative text-sm text-muted-foreground">{t.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
