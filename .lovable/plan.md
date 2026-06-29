## Core Themes — a11y, hover-glow clipping, alignment, polish

### 1. Keyboard focus + reduced-motion (a11y)

**File:** `src/components/tech59/ThemesCarousel.tsx`

- Make each theme card a focusable element by wrapping the `<article>` in a `<button type="button">` (or making the article `tabIndex={0}` with `role="group"`). Use a `<button>` so it lights up with native focus + keyboard activation.
- Add a visible focus ring using design tokens:
  `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background`
- Add focus parity for hover effects: change `group-hover:` styles on the image, title, scrim, and light-streak to `group-hover:… group-focus-visible:…` so keyboard users see the same emphasis.
- Arrow buttons: already `<button>`, add the same `focus-visible:ring-2 ring-accent` treatment (they currently rely only on `ring-accent/70` on hover).
- Reduced motion: wrap motion-heavy classes (scale, translate, shimmer, animated gradient text, image zoom) with Tailwind's `motion-safe:` variant, and add `motion-reduce:transition-none motion-reduce:transform-none` on the card + image. This keeps color/opacity changes but disables movement for users with `prefers-reduced-motion: reduce`.
- Also gate the two animated background orbs in `Experience.tsx` (`animate-pulse-glow`, `animate-float`) with `motion-safe:` so they freeze under reduced motion.

### 2. Hover glow that overlaps the next (black) section

**Files:** `src/components/tech59/Experience.tsx`, `src/components/tech59/ThemesCarousel.tsx`

Root cause: the panel's background layers live in an `overflow-hidden` wrapper, but the card itself sits in a scroller with `overflow-x-auto`. `overflow-x-auto` forces `overflow-y: auto` too, which clips the downward shadow at the panel's bottom edge — so the glow never reaches the black section below.

Fix:
- In `ThemesCarousel.tsx`, remove vertical clipping from the scroller. Replace `overflow-x-auto overflow-y-visible` with a CSS approach that actually lets shadows escape vertically: use `style={{ overflowX: "auto", overflowY: "visible" }}` won't work in browsers (y is forced to auto). Instead:
  - Keep the horizontal scroller, but move the **shadow** off the card and onto a sibling pseudo via a wrapper. Simpler real fix: keep the inner card's hover translate/scale, drop `hover:shadow-…`, and add an **outer halo div** absolutely positioned around the card (`-inset-2 rounded-3xl blur-2xl bg-accent/30 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition`) that sits *inside* the card wrapper. Because it's painted, not a box-shadow, it still gets clipped by the scroller — same problem.
  - Correct fix: let the glow live **outside the horizontally-scrolling element**. Add a small JS-free trick: give the scroller `padding-bottom` large enough to contain the glow (`pb-16`) and add a negative `margin-bottom` (`-mb-12`) so the visual height is unchanged, while the shadow has room to render inside the scroller. Then make the parent Core Themes wrapper *not* `overflow-hidden` (it already isn't on the outer; only the background layer is clipped) and bump the card's hover shadow back to a wider spread (`hover:shadow-[0_30px_60px_-10px_hsl(187_92%_53%/0.55)]`). The shadow now bleeds down into the next section while the gradient stays clipped.
- Confirm the next section (`Audience.tsx`) has no `relative z-10` that would paint over the bleed. If it does, lower its z-index or remove background so the shadow shows through. If Audience has a solid background, give the Core Themes wrapper `z-20` and let the shadow paint on top of the black section.

### 3. Left-align "Cards" with the heading + tighten gap to title

**File:** `src/components/tech59/ThemesCarousel.tsx` and `Experience.tsx`

- The heading sits inside `container` with default left alignment. The carousel currently has `px-2 sm:px-6` plus the scroller's `-mx-4 px-4`, pushing the first card right of the heading's left edge.
- Change the carousel root to `px-0` and adjust the scroller to `-mx-0 px-0`. Keep arrow buttons positioned with `left-0 / right-0` (or move them to `-left-2 / -right-2` so they don't overlap the first card). This makes card 1's left edge align exactly with the heading.
- Reduce the gap between heading and cards: in `Experience.tsx` change `mb-10` on the heading Reveal → `mb-6`, and in the scroller change `pt-8` → `pt-4`.

### 4. General polish — no clipping, visual consistency

- Restore `Experience.tsx` wrapper to `pt-16 pb-0` (was `pt-20 pb-2`). Bottom padding is 0 so the bleed glow has room; the smooth bottom fade overlay already handles the visual transition.
- Verify the bottom `from-background to-transparent` fade still sits *behind* the cards (z-index on the background layer stays below `container relative z-10`). Confirmed in current code.
- Card heights `h-[270px] sm:h-[290px] md:h-[310px]` stay; image `opacity-65 → 80` stays.
- Add `aria-roledescription="carousel"` to the scroller and keep `aria-label="Core themes"`.
- After changes, walk the section in the preview at desktop (1280), tablet (820), mobile (390) to confirm: heading-card alignment, no horizontal clipping on first/last card, hover glow visibly extends into the black section below, keyboard tab order hits arrows + each card with a visible ring, and `prefers-reduced-motion` disables float/scale/shimmer.

### Files touched
- `src/components/tech59/Experience.tsx`
- `src/components/tech59/ThemesCarousel.tsx`
