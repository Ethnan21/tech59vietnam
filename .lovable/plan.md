
## Goal

Layer a unified, elegant motion system on the existing TECH59 landing page. Animations should feel futuristic and premium without being chaotic — supporting scroll, focus, and conversion.

## Approach

Introduce a single reusable scroll-reveal primitive and a particle/parallax layer, then apply them consistently across all sections. No redesign — purely motion + subtle visual polish on existing components.

## 1. Motion primitives (new)

**`src/components/tech59/Reveal.tsx`** — IntersectionObserver-based wrapper
- Props: `as`, `delay`, `y` (default 24px), `duration`, `once` (default true)
- Applies `opacity-0 translate-y-6` → `opacity-100 translate-y-0` with `transition-all duration-700 ease-out`
- Respects `prefers-reduced-motion` (skips transform/opacity changes)

**`src/components/tech59/Stagger.tsx`** — wraps children, auto-applies incremental delays (e.g. 80ms steps) to each child Reveal.

**`src/components/tech59/Particles.tsx`** — hero-only canvas
- ~40 small dots, slow drift upward, soft glow, low opacity
- Pauses when tab hidden / reduced-motion
- Pointer-events: none, absolute inset-0

**`src/hooks/useParallax.ts`** — returns a `translateY` style based on element's scroll position (clamped, requestAnimationFrame, passive listener). Used on hero bg image, venue image, large blur orbs.

## 2. Tailwind / CSS additions

`tailwind.config.ts` — add keyframes/animations:
- `aurora` (30s slow gradient drift on background-position)
- `drift` (gentle 8s float for particles fallback)
- `glow-pulse` (already partly present — unify naming)
- `border-shimmer` (conic gradient sweep for CTA border)

`src/index.css` — add utilities:
- `.bg-aurora` — large multi-stop gradient, `background-size: 300% 300%`, `animation: aurora 30s ease-in-out infinite`
- `.cta-glow` — layered radial glow + animated conic border for primary CTAs
- `.hover-lift` — `transition-transform duration-500 ease-out hover:-translate-y-1 hover:shadow-glow`
- `.section-transition` — top/bottom mask-image fade for smooth section blending
- `@media (prefers-reduced-motion: reduce)` — disable aurora, particles, parallax, glow-pulse

## 3. Per-section application

| Section | Changes |
|---|---|
| Hero | Mount `<Particles />`; apply `useParallax` to bg image (0.15 factor) and the two blur orbs (0.25 factor); wrap headline/tagline/meta/CTAs in `<Reveal>` with staggered delays; upgrade primary CTA with `.cta-glow` |
| Stats | `<Stagger>` around the 4 `StatCounter`s — each fades up as it enters |
| WhyAttend | Section heading `<Reveal>`; `<Stagger>` on 4 cards; add `.hover-lift` |
| Audience | Reveal on heading + tabs; subtle parallax on background orb |
| Experience | Stagger on cards; reveal on heading; glowing hover already present — unify with `.hover-lift` |
| Venue | Parallax on venue image (0.1 factor); reveal on text block |
| Partners | Reveal on heading; marquees unchanged (already motion) |
| Program | Stagger on track items |
| FinalCTA | Reveal headline + countdown + CTAs; apply `.cta-glow` to Register button; keep `.bg-aurora` on background |
| Between sections | Add `.section-transition` to top/bottom of alternating sections for smooth blending |

## 4. Section transitions

Wrap section roots (or add to existing) with `relative` + a top/bottom 80px gradient mask so adjacent sections blend instead of hard-cutting. No layout change.

## 5. Performance & a11y

- All observers use `{ threshold: 0.15, rootMargin: '0px 0px -50px 0px' }` and disconnect after first trigger
- Particles capped at 40, paused via `document.visibilityState`
- Parallax via single rAF loop, `will-change: transform` only while in view
- Full `prefers-reduced-motion` honoring: skip particles, parallax, aurora, pulse-glow
- No layout shift — all motion is transform/opacity only

## Files

**New:** `src/components/tech59/Reveal.tsx`, `src/components/tech59/Stagger.tsx`, `src/components/tech59/Particles.tsx`, `src/hooks/useParallax.ts`

**Edited:** `tailwind.config.ts`, `src/index.css`, and each section component in `src/components/tech59/` to wrap content in Reveal/Stagger and apply hover/glow utilities. No copy or layout changes.
