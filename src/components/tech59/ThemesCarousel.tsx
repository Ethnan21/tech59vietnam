import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

interface Theme {
  title: string;
  desc: string;
  bg: string;
}

interface Props {
  themes: Theme[];
}

export const ThemesCarousel = ({ themes }: Props) => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const nudge = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 600), behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Arrow buttons */}
      <button
        type="button"
        aria-label="Scroll left"
        onClick={() => nudge(-1)}
        className="grid absolute left-1 md:-left-3 top-1/2 -translate-y-1/2 z-20 h-11 w-11 place-items-center rounded-full glass ring-1 ring-accent/30 hover:ring-accent/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background transition"
      >
        <ArrowLeft className="h-4 w-4" />
      </button>
      <button
        type="button"
        aria-label="Scroll right"
        onClick={() => nudge(1)}
        className="grid absolute right-1 md:-right-3 top-1/2 -translate-y-1/2 z-20 h-11 w-11 place-items-center rounded-full glass ring-1 ring-accent/30 hover:ring-accent/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background transition"
      >
        <ArrowRight className="h-4 w-4" />
      </button>

      {/* Scroller: extra pb + negative mb gives hover shadows room to bleed
          past this section's visual bottom edge into the next section. */}
      <div
        ref={scrollerRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Core themes"
        className="flex flex-nowrap gap-4 sm:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pt-4 pb-20 -mb-16 select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {themes.map((t, i) => (
          <Reveal
            key={t.title}
            delay={i * 60}
            className="snap-center shrink-0 w-[64vw] sm:w-[240px] md:w-[230px] lg:w-[250px] h-[270px] sm:h-[290px] md:h-[310px]"
          >
            <article
              tabIndex={0}
              aria-label={`${t.title}. ${t.desc}`}
              className="relative h-full w-full rounded-2xl overflow-hidden glass ring-1 ring-border hover:ring-accent/60 focus-visible:ring-accent focus-visible:outline-none focus-visible:ring-2 motion-safe:hover:scale-[1.02] motion-safe:focus-visible:scale-[1.02] hover:shadow-[0_30px_60px_-10px_hsl(187_92%_53%/0.55)] focus-visible:shadow-[0_30px_60px_-10px_hsl(187_92%_53%/0.55)] transition-all duration-500 motion-reduce:transition-none group cursor-default"
            >
              <img
                src={t.bg}
                alt=""
                aria-hidden="true"
                loading="lazy"
                draggable={false}
                width={768}
                height={1024}
                className="absolute inset-0 w-full h-full object-cover opacity-65 group-hover:opacity-80 group-focus-visible:opacity-80 motion-safe:group-hover:scale-110 motion-safe:group-focus-visible:scale-110 transition-all duration-[1500ms] ease-out motion-reduce:transition-none pointer-events-none"
              />
              {/* Readability scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/10 pointer-events-none" />
              {/* Light streak on hover/focus */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-700 motion-safe:light-streak pointer-events-none" />

              <span className="absolute top-3 left-3 z-10 text-[10px] uppercase tracking-[0.25em] text-accent glass rounded-full px-2.5 py-1">
                Theme {String(i + 1).padStart(2, "0")}
              </span>

              <div className="absolute inset-x-0 bottom-0 p-4 z-10">
                <h3 className="font-display text-lg sm:text-xl font-bold leading-[1.1] mb-1.5 text-slate-50 group-hover:text-gradient-animated group-focus-visible:text-gradient-animated transition-all">
                  {t.title}
                </h3>
                <p className="text-xs text-slate-200/85">{t.desc}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
};
