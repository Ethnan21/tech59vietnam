import keynote from "@/assets/exp-keynote.jpg";
import pitch from "@/assets/exp-pitch.jpg";
import night from "@/assets/exp-night.jpg";
import tour from "@/assets/exp-tour.jpg";

const items = [
  { img: keynote, title: "Keynotes", tag: "Main Stage", desc: "Global tech leaders. One stage." },
  { img: pitch, title: "Pitch Competition", tag: "SPARK Hub", desc: "600+ startups. One winner." },
  { img: night, title: "TECH59 Nights", tag: "Networking", desc: "After-hours. Off-record." },
  { img: tour, title: "Tech Tours", tag: "Immersive", desc: "Inside Vietnam's AI labs." },
];

export const Experience = () => (
  <section id="experience" className="py-24 relative">
    <div className="container">
      <div className="max-w-2xl mb-12">
        <p className="text-xs uppercase tracking-widest text-accent mb-3">The Experience</p>
        <h2 className="font-display text-5xl md:text-6xl font-bold leading-[0.95]">
          Four formats. <span className="text-gradient">One summit.</span>
        </h2>
      </div>

      <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4 scrollbar-thin">
        {items.map((it) => (
          <article key={it.title} className="snap-start shrink-0 w-[85%] sm:w-[60%] lg:w-[32%] glass rounded-3xl overflow-hidden group hover:border-primary/60 hover:-translate-y-2 hover:shadow-[0_25px_60px_-15px_hsl(258_90%_66%/0.4)] transition-all duration-500">
            <div className="aspect-[4/3] overflow-hidden relative">
              <img src={it.img} alt={it.title} loading="lazy" width={1024} height={768}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.2s]" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
              <span className="absolute top-4 left-4 glass-strong rounded-full px-3 py-1 text-xs uppercase tracking-wider">{it.tag}</span>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-2xl font-semibold mb-1">{it.title}</h3>
                <p className="text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
