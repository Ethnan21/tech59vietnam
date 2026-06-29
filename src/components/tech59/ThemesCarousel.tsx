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
    <div className="relative px-2 sm:px-6">
      {/* Arrow buttons */}
      <button
        type="button"
        aria-label="Scroll left"
        onClick={() => nudge(-1)}
        className="grid absolute left-2 top-1/2 -translate-y-1/2 z-20 h-10 w-10 place-items-center rounded-full glass ring-1 ring-accent/30 hover:ring-accent/70 transition"
      >
        <ArrowLeft className="h-4 w-4" />
      </button>
      <button
        type="button"
        aria-label="Scroll right"
        onClick={() => nudge(1)}
        className="grid absolute right-2 top-1/2 -translate-y-1/2 z-20 h-10 w-10 place-items-center rounded-full glass ring-1 ring-accent/30 hover:ring-accent/70 transition"
      >
        <ArrowRight className="h-4 w-4" />
      </button>

      <div
        ref={scrollerRef}
        role="region"
        aria-label="Core themes"
        className="flex flex-nowrap gap-4 sm:gap-5 overflow-x-auto overflow-y-visible scroll-smooth snap-x snap-mandatory py-12 -mx-4 px-4 select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {themes.map((t, i) => (
          <Reveal
            key={t.title}
            delay={i * 60}
            className="snap-center shrink-0 w-[64vw] sm:w-[240px] md:w-[230px] lg:w-[250px] h-[300px] sm:h-[320px] md:h-[340px]"
          >
            <article className="relative h-full w-full rounded-2xl overflow-hidden glass ring-1 ring-border hover:ring-accent/60 hover:scale-[1.02] hover:shadow-[0_30px_70px_-20px_hsl(187_92%_53%/0.55)] transition-all duration-500 group cursor-default">
              <img
                src={t.bg}
                alt=""
                aria-hidden="true"
                loading="lazy"
                draggable={false}
                width={768}
                height={1024}
                className="absolute inset-0 w-full h-full object-cover opacity-55 group-hover:opacity-70 group-hover:scale-110 transition-all duration-[1500ms] ease-out pointer-events-none"
              />
              {/* Readability scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/10 pointer-events-none" />
              {/* Light streak on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 light-streak pointer-events-none" />

              <span className="absolute top-3 left-3 z-10 text-[10px] uppercase tracking-[0.25em] text-accent glass rounded-full px-2.5 py-1">
                Theme {String(i + 1).padStart(2, "0")}
              </span>

              <div className="absolute inset-x-0 bottom-0 p-4 z-10">
                <h3 className="font-display text-lg sm:text-xl font-bold leading-[1.1] mb-1.5 text-slate-50 group-hover:text-gradient-animated transition-all">
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
