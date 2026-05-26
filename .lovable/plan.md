## Hero logo glow + breathing, plus navbar logo

**Hero (`src/components/tech59/Hero.tsx`)**
- Wrap the hero logo `<img>` in a relative container.
- Add a layered radial glow behind it: an absolutely positioned blurred div using brand/accent color at low opacity, sized slightly larger than the logo.
- Apply a slow "breathing" animation to the logo itself: subtle scale (1 → 1.03 → 1) + opacity pulse over ~4s ease-in-out infinite.
- Apply a parallel, offset glow pulse on the backdrop so the halo softly inhales/exhales (scale + opacity).
- Use existing tokens (`bg-brand`, `bg-accent`) for color; respect `prefers-reduced-motion` by gating the animation with Tailwind's `motion-safe:` prefix.

**Navbar (`src/components/tech59/Navbar.tsx`)**
- Replace the `<span>…T</span>` brand mark with an `<img>` of `@/assets/tech59-hero-logo-white.png` inside the existing `h-8 w-8 rounded-lg` container (switch to `rounded-full` per request), `object-contain` with small padding so the mark fits cleanly.
- Keep the adjacent wordmark text untouched.

**Animation tokens (`tailwind.config.ts`)**
- Add two keyframes/animations if not already present:
  - `breathe`: `scale(1)` ↔ `scale(1.03)` with opacity 0.95 ↔ 1, 4s ease-in-out infinite.
  - `halo-pulse`: opacity 0.35 ↔ 0.7 + scale 1 ↔ 1.08, 5s ease-in-out infinite.
- No new colors or tokens beyond keyframes.

**Out of scope:** no other sections, no asset regeneration, no copy changes.