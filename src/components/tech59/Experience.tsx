import keynote from "@/assets/exp-keynote.jpg";
import pitch from "@/assets/exp-pitch.jpg";
import night from "@/assets/exp-night.jpg";
import tour from "@/assets/exp-tour.jpg";
import { useParallax } from "@/hooks/useParallax";

const items = [
  { img: keynote, title: "Talks", tag: "Main Stage", desc: "Insights from the frontlines." },
  { img: pitch, title: "Pitch", tag: "SPARK Hub", desc: "Where ideas get funded." },
  { img: night, title: "Nights", tag: "Off-record", desc: "Where deals happen." },
  { img: tour, title: "Access", tag: "Immersive", desc: "Inside Vietnam's AI labs." },
];

export const Experience = () => {
  const bgOrb = useParallax<HTMLDivElement>(0.2);
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div ref={bgOrb} className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[140px] animate-pulse-glow pointer-events-none" />
      <div className="container relative">
        <div className="max-w-2xl mb-12">
          <p className="text-xs uppercase tracking-widest text-accent mb-3 animate-flicker">⚡ The Experience</p>
          <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.9]">
            Four formats. <span className="text-gradient-animated">One summit.</span>
          </h2>
        </div>

        <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4 scrollbar-thin">
          {items.map((it, i) => (
            <article
              key={it.title}
              style={{ animationDelay: `${i * 120}ms`, transform: `translateY(${i % 2 === 0 ? "0" : "16px"})` }}
              className="snap-start shrink-0 w-[85%] sm:w-[60%] lg:w-[32%] glass rounded-3xl overflow-hidden group hover:border-primary/60 hover:-translate-y-3 hover:shadow-[0_30px_80px_-15px_hsl(258_90%_66%/0.7)] transition-all duration-500 animate-fade-in-up animate-float-slow"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={it.img} alt={it.title} loading="lazy" width={1024} height={768}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.2s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 light-streak" />
                <span className="absolute top-4 left-4 glass-strong rounded-full px-3 py-1 text-[10px] uppercase tracking-widest text-accent">{it.tag}</span>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-3xl font-semibold mb-1 group-hover:text-gradient-animated transition-all">{it.title}</h3>
                  <p className="text-sm text-muted-foreground">{it.desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
