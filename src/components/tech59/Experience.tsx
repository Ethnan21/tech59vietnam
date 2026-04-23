import keynote from "@/assets/exp-keynote.jpg";
import pitch from "@/assets/exp-pitch.jpg";
import night from "@/assets/exp-night.jpg";
import tour from "@/assets/exp-tour.jpg";

const items = [
  { img: keynote, title: "Conference & Keynotes", tag: "Main Stage", desc: "Power keynotes from global tech leaders, Vietnamese unicorns, and government voices." },
  { img: pitch, title: "Startup Pitch Competition", tag: "SPARK Hub", desc: "600+ startups compete for visibility, capital, and acceleration into Southeast Asia." },
  { img: night, title: "TECH59 Nights", tag: "Networking", desc: "Vietnam's most coveted after-hours: founders, funds, and global operators in one room." },
  { img: tour, title: "AI / Tech / Investor Tours", tag: "Immersive", desc: "Guided tours through cutting-edge AI labs, government facilities, and ecosystem leaders." },
];

export const Experience = () => (
  <section id="experience" className="py-24 relative">
    <div className="container">
      <div className="max-w-2xl mb-12">
        <p className="text-xs uppercase tracking-widest text-accent mb-3">The Experience</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
          Four formats. <span className="text-gradient">One unforgettable summit.</span>
        </h2>
      </div>

      <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4 scrollbar-thin">
        {items.map((it, i) => (
          <article key={it.title} className="snap-start shrink-0 w-[85%] sm:w-[60%] lg:w-[32%] glass rounded-3xl overflow-hidden group hover:border-primary/50 transition-all">
            <div className="aspect-[4/3] overflow-hidden relative">
              <img src={it.img} alt={it.title} loading="lazy" width={1024} height={768}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent" />
              <span className="absolute top-4 left-4 glass-strong rounded-full px-3 py-1 text-xs uppercase tracking-wider">{it.tag}</span>
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl font-semibold mb-2">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
