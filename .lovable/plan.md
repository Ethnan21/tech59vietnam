## Refinements

**1. Hero (`src/components/tech59/Hero.tsx`)**
- Badge text: replace "Organised by The Sentry · Curated audience" with "BY THE SENTRY".
- Dates: change "23–24 July 2026" → "16–17 July 2026".
- Also update `Countdown.tsx` TARGET to `2026-07-16T09:00:00+07:00` so the countdown matches.

**2. Stats (`src/components/tech59/StatCounter.tsx` + `Stats.tsx`)**
- `StatCounter` already supports a `suffix` prop (default `"+"`), but `Stats.tsx` currently doesn't pass it and numbers render as `2,100` etc. Verify the `+` shows on each stat (it should by default — confirm during build). 
- Remove the "⚡ Vietnam's most attended tech event · 2025" line beneath the stats grid in `Stats.tsx`.

**3. Spacing (`src/components/tech59/WhyAttend.tsx` / `Stats.tsx`)**
- Tighten the gap between Stats and Why Attend now that the caption is gone: reduce `Stats` section bottom padding and/or `WhyAttend` top padding (e.g., `py-24` → `pt-12 pb-24` on WhyAttend; keep Stats `py-16`).

**4. Hover glitch (`src/components/tech59/WhyAttend.tsx`)**
- Cause: the card title uses `group-hover:text-gradient-animated transition-all`. The `.text-gradient-animated` utility sets `color: transparent` + a background-clip gradient. On hover-out, `transition-all` animates `color` back from transparent to the default — but the gradient background is removed instantly, so the text flashes solid (appears black/dark) mid-transition.
- Fix: remove `transition-all` from the `<h3>`, and instead apply the gradient cleanly via a CSS variable swap or by always rendering the gradient layer and toggling opacity. Concretely: keep the title in its default color and add a sibling absolutely-positioned gradient text layer that fades in on `group-hover` via `opacity` transition only — no `color` transition, no flash.

### Technical detail
```
// WhyAttend card title approach
<h3 className="relative font-display text-2xl font-semibold mb-2">
  <span className="block">{title}</span>
  <span aria-hidden className="absolute inset-0 text-gradient-animated opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    {title}
  </span>
</h3>
```

No other sections/files touched.