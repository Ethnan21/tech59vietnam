## Goal

Make the site load and run noticeably faster while keeping every visual, animation, gradient, image, and section exactly the same.

The current bottlenecks are all runtime cost, not design:

- ~7 MB of unoptimized JPG/PNG assets served at full size (single `exp-pitch.jpg` = 671 KB, several audience/venue images 300–500 KB, ~1.2 MB of partner PNGs).
- Every image is imported eagerly and rendered at native size even when off-screen or displayed as a small thumbnail.
- Hero background, logos, and countdown all mount immediately with no `fetchpriority` / preload hints — LCP suffers.
- `Reveal`, `useParallax`, and `StatCounter` each attach their own `IntersectionObserver` / scroll listener per instance (dozens on the page), and `Countdown` re-renders every second regardless of visibility.
- Below-the-fold sections (`Programme`, `Partners`, `Venue`, `FinalCTA`, `Footer`, `EnquiryForm` with `react-hook-form` + `zod`) all ship in the initial JS bundle.
- No route-level or component-level code splitting; `App.tsx` imports every page eagerly.

## Plan

### 1. Image pipeline (biggest single win, zero visual change)

- Add `vite-imagetools` and generate `webp` variants at build time from the existing JPG/PNG imports. Keep original files as fallback via `<picture>` where the component renders an `<img>` we control; where a bare `<img src>` is used, switch the import to the `?format=webp&quality=78` variant (browsers we target all support WebP).
- Resize oversized source assets in-place with `sharp` (script under `scripts/optimize-images.mjs`) to the max dimension actually rendered:
  - `audience-*.jpg`, `exp-*.jpg`, `venue.jpg`, `audience-bg.jpg` → max 1600 px wide, quality 78.
  - `theme-*.jpg` → max 900 px wide (cards are ~250 px).
  - `partners/logo-*.png` and `press/*.png` → max 400 px wide, palette-quantized PNG or WebP.
  - `tech59-hero-logo*.png`, `tech59-logo.png` → re-export at exact rendered size, strip metadata.
- Add explicit `width` / `height` on every `<img>` that is missing them to prevent layout shift, and `loading="lazy"` + `decoding="async"` on every below-the-fold image (hero image stays eager with `fetchpriority="high"`).
- Add `<link rel="preload" as="image" href="…hero-bg.webp" fetchpriority="high">` to `index.html` for the LCP background.

### 2. Code splitting

- Convert below-the-fold sections in `src/pages/Index.tsx` to `React.lazy` + `<Suspense fallback={null}>`: `Programme` (643 lines), `Partners`, `Venue`, `FinalCTA`, `Footer`, `EnquiryForm` (inside `FinalCTA`/wherever). Hero, Stats, About, Experience, Audience, Packages stay eager so the visible fold is unaffected.
- Lazy-load `Unsubscribe` and `NotFound` routes in `App.tsx`.
- Configure `build.rollupOptions.output.manualChunks` in `vite.config.ts` to split `react`, `react-dom`, `@radix-ui/*`, and `recharts` into their own chunks so the main entry shrinks.

### 3. Shared observers / cheaper effects

- Replace the per-instance `IntersectionObserver` in `Reveal` and `StatCounter` with a single module-level observer registry keyed by element (identical behavior, one observer instead of ~40).
- In `useParallax`, subscribe all parallax elements to one shared `scroll` listener + `requestAnimationFrame` loop instead of one listener per element.
- `Countdown`: only run the 1-second interval while the component is in the viewport (IntersectionObserver gate); pause when hidden. Visually identical.
- Add `content-visibility: auto` + `contain-intrinsic-size` to large below-the-fold section wrappers (`Programme`, `Partners`) so the browser skips layout/paint until they scroll near.

### 4. Small hygiene

- Drop the `will-change: transform` from the two hero parallax layers once scrolled past (set it only while actively animating) — currently pins two extra compositor layers for the whole page lifetime.
- Remove the `console.error` in `EnquiryForm` from the render path is fine; but memoize the `zodResolver` schema outside the component so it isn't recreated on every render.
- Ensure `<img>` tags for decorative backgrounds use `alt=""` + `aria-hidden` (already done in most) and `draggable={false}` where applicable — already fine, no change unless found missing.

### 5. Verification

- Run `bun run build` and confirm the initial JS chunk drops and image assets shrink meaningfully (log before/after sizes).
- Spot-check with Playwright at 1280×1800: screenshot Hero, About, Experience, Audience, Packages, Programme, Venue, Partners, Footer and diff against pre-change screenshots to confirm zero visual regression.
- Confirm no console errors and that the countdown, carousels, parallax, and reveal animations still play.

## Out of scope

- No text, layout, color, font, gradient, animation, or section changes.
- No redesign, no removed effects, no removed images.
- No backend / Supabase changes.

## Technical notes

- `vite-imagetools` query-param imports (`?format=webp&w=1600`) let us keep the existing `import img from "@/assets/x.jpg"` pattern with minimal edits.
- `sharp` runs once locally via `node scripts/optimize-images.mjs` and rewrites files in place; committed binaries replace the current oversized ones.
- Shared-observer refactor keeps the exported `Reveal` / `useParallax` API identical, so no call sites change.
