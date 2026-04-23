const local = ["NIC Vietnam", "QTSC", "The Sentry", "SPARK Hub", "AVV", "Orbital 2.0", "Sky Mavis", "VOV"];
const intl = ["Business Finland", "e27", "Vietnam News", "Vietnam+", "Embassy of Vietnam SG", "Global VC Network"];
const media = ["VOV Tiếng Nói Việt Nam", "Việt Nam News", "Vietnam+", "e27"];

const Row = ({ items }: { items: string[] }) => (
  <div className="flex gap-3 flex-wrap justify-center">
    {items.map(n => (
      <div key={n} className="glass rounded-xl px-5 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all">
        {n}
      </div>
    ))}
  </div>
);

export const Partners = () => (
  <section id="partners" className="py-24 relative">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-xs uppercase tracking-widest text-accent mb-3">Trusted by</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
          Government, global brands, <span className="text-gradient">and the press.</span>
        </h2>
      </div>

      <div className="space-y-10">
        <div>
          <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-5">Local Partners</p>
          <Row items={local} />
        </div>
        <div>
          <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-5">International Partners</p>
          <Row items={intl} />
        </div>
        <div className="glass-strong rounded-2xl py-6 px-8">
          <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-4">Featured In</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-foreground/70 font-display font-semibold tracking-tight">
            {media.map(m => <span key={m}>{m}</span>)}
          </div>
        </div>
      </div>
    </div>
  </section>
);
