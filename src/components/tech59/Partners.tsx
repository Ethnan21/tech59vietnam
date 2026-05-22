import { Reveal } from "./Reveal";

const local = ["NIC Vietnam", "QTSC", "The Sentry", "SPARK Hub", "AVV", "Orbital 2.0", "Sky Mavis", "VOV"];
const intl = ["Business Finland", "e27", "Vietnam News", "Vietnam+", "Embassy of Vietnam SG", "Global VC Network"];
const media = ["VOV", "Việt Nam News", "Vietnam+", "e27"];


const Marquee = ({ items }: { items: string[] }) => (
  <div className="overflow-hidden">
    <div className="flex gap-3 animate-marquee w-max">
      {[...items, ...items].map((n, i) => (
        <div key={i} className="glass rounded-xl px-5 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all whitespace-nowrap">
          {n}
        </div>
      ))}
    </div>
  </div>
);

export const Partners = () => (
  <section id="partners" className="py-24 relative">
    <div className="container">
      <Reveal className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-xs uppercase tracking-widest text-accent mb-3">Trusted by</p>
        <h2 className="font-display text-5xl md:text-6xl font-bold leading-[0.95]">
          Government. Global brands. <span className="text-gradient">Press.</span>
        </h2>
      </Reveal>


      <div className="space-y-8">
        <Marquee items={local} />
        <Marquee items={intl} />
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
