## Trusted By — Logo Marquee

Replace the text-name marquees in `src/components/tech59/Partners.tsx` with an infinite, seamless logo marquee using the 10 uploaded images.

### Steps

1. **Add logo assets**
   - Copy the 10 uploaded images into `src/assets/partners/logo-01.png` … `logo-10.png`.
   - Import them at the top of `Partners.tsx`.

2. **Rebuild Partners section**
   - Remove the three text marquees (local, intl, featured-in).
   - Render a single (or two-row) marquee track of logo tiles using the 10 imports.
   - Each tile: glass card with the logo centered, fixed height (~64px), auto width, white/desaturated treatment (`opacity-70 hover:opacity-100`, `transition`) so logos sit well on the dark theme.
   - Keep heading "Government. Global brands. Press."

3. **Fix the "stop and refresh" issue (seamless loop)**
   - Current `animate-marquee` likely animates `translateX(0 → -100%)` of a doubled list, but with `gap` + `w-max` the math is off, causing a visible jump.
   - Approach: wrap the doubled list so the animation translates by exactly `-50%` of the track width. Render the logo list twice inside a flex container with consistent gap, animate the container `translateX(0%) → translateX(-50%)` linearly, infinite. Because the second half is identical to the first, the loop is seamless.
   - If needed, redefine `marquee` keyframes in `tailwind.config.ts` to `{ '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } }` with a longer duration (e.g. 40s) and `linear infinite`.
   - Pause on hover (`hover:[animation-play-state:paused]`) for polish.

### Out of scope
- No copy changes, no new sections, no logic changes elsewhere.
