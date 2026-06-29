import { useEffect, useRef, useState, PointerEvent as RPointerEvent } from "react";
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
  const [showHint, setShowHint] = useState(true);
  const drag = useRef<{ active: boolean; startX: number; startScroll: number; moved: boolean }>({
    active: false,
    startX: 0,
    startScroll: 0,
    moved: false,
  });

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
      setShowHint(!atEnd);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const onPointerDown = (e: RPointerEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    if (!el) return;
    drag.current = { active: true, startX: e.clientX, startScroll: el.scrollLeft, moved: false };
    el.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: RPointerEvent<HTMLDivElement>) => {
    if (!drag.current.active) return;
    const el = scrollerRef.current;
    if (!el) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    el.scrollLeft = drag.current.startScroll - dx;
  };
  const onPointerUp = (e: RPointerEvent<HTMLDivElement>) => {
    drag.current.active = false;
    try {
      scrollerRef.current?.releasePointerCapture(e.pointerId);
    } catch {}
  };

  const nudge = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 600), behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Swipe hint */}
      <div
        className={`flex items-center gap-3 mb-5 text-xs uppercase tracking-[0.25em] text-accent/90 transition-opacity duration-500 ${
          showHint ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5">
          <ArrowLeft className="h-3.5 w-3.5 animate-[nudge-x_1.6s_ease-in-out_infinite]" />
          <span>Swipe to see more</span>
          <ArrowRight className="h-3.5 w-3.5 animate-[nudge-x_1.6s_ease-in-out_infinite]" />
        </span>
      </div>

      {/* Edge fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 z-10 bg-gradient-to-l from-background to-transparent" />

      {/* Arrow buttons (desktop) */}
      <button
        type="button"
        aria-label="Scroll left"
        onClick={() => nudge(-1)}
        className="hidden md:grid absolute left-2 top-1/2 -translate-y-1/2 z-20 h-10 w-10 place-items-center rounded-full glass-strong ring-1 ring-accent/30 hover:ring-accent/70 transition"
      >
        <ArrowLeft className="h-4 w-4" />
      </button>
      <button
        type="button"
        aria-label="Scroll right"
        onClick={() => nudge(1)}
        className="hidden md:grid absolute right-2 top-1/2 -translate-y-1/2 z-20 h-10 w-10 place-items-center rounded-full glass-strong ring-1 ring-accent/30 hover:ring-accent/70 transition"
      >
        <ArrowRight className="h-4 w-4" />
      </button>

      <div
        ref={scrollerRef}
        role="region"
        aria-label="Core themes, scroll horizontally"
        tabIndex={0}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="flex flex-nowrap gap-4 sm:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mx-4 px-4 cursor-grab active:cursor-grabbing select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus:outline-none"
        onClickCapture={(e) => {
          // prevent click after drag
          if (drag.current.moved) {
            e.preventDefault();
            e.stopPropagation();
            drag.current.moved = false;
          }
        }}
      >
        {themes.map((t, i) => (
          <Reveal
            key={t.title}
            delay={i * 60}
            className="snap-center shrink-0 w-[72vw] sm:w-[300px] md:w-[280px] lg:w-[300px] h-[440px] sm:h-[460px] md:h-[480px]"
          >
            <article className="relative h-full w-full rounded-3xl overflow-hidden glass ring-1 ring-border hover:ring-accent/60 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_30px_70px_-20px_hsl(187_92%_53%/0.55)] transition-all duration-500 group">
              <img
                src={t.bg}
                alt=""
                aria-hidden="true"
                loading="lazy"
                draggable={false}
                width={768}
                height={1024}
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-85 group-hover:scale-110 transition-all duration-[1500ms] ease-out pointer-events-none"
              />
              {/* Readability scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/10 pointer-events-none" />
              {/* Subtle vignette */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,hsl(var(--background)/0.5))] pointer-events-none" />
              {/* Light streak on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 light-streak pointer-events-none" />

              <span className="absolute top-4 left-4 z-10 text-[10px] uppercase tracking-[0.25em] text-accent glass rounded-full px-2.5 py-1">
                Theme {String(i + 1).padStart(2, "0")}
              </span>

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 z-10">
                <h3 className="font-display text-2xl sm:text-3xl font-bold leading-[1.05] mb-2 text-slate-50 group-hover:text-gradient-animated transition-all">
                  {t.title}
                </h3>
                <p className="text-sm text-slate-200/85">{t.desc}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
};
