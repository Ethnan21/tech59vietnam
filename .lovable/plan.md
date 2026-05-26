## Refinements

### 1. Navbar — add About link
`src/components/tech59/Navbar.tsx`: insert `{ label: "About", href: "#about" }` as the first item in the `links` array.

### 2. Hero — replace "By The Sentry" pill with "Powered by" + 3 logos
`src/components/tech59/Hero.tsx`: replace the small status pill above the H1 with a horizontal row:
- "Powered by" label (uppercase, tracked, muted)
- Three logo images: The Sentry, SPARK Hub, AVV (white logos on dark, height ~24–28px, with subtle dividers between them)

Logos: copy the uploaded PNGs into the project as assets and import them:
- `user-uploads://TheSentry.png` → `src/assets/logo-thesentry.png`
- `user-uploads://Sparkhub.png` → `src/assets/logo-sparkhub.png`
- `user-uploads://AVV.png` → `src/assets/logo-avv.png`

Used as `<img>` with `alt` for each, wrapped in a `glass` rounded container to match the existing pill styling.

### 3. About section — refine
`src/components/tech59/About.tsx`:
- Change headline from "Vietnam's leading tech & startup community." to **"What is Tech59?"** with `Tech59` in the animated gradient.
- Remove the "Powered by … chips" row (now in Hero).
- Refine the quote card to fit the rest of the site:
  - Drop the oversized display `"` glyph; use a slim left accent bar (gradient `from-primary via-secondary to-accent`) instead.
  - Quote text uses body sans (`font-sans`) — not `font-display` — at `text-xl md:text-2xl`, `font-medium`, `leading-relaxed`, `text-foreground/90`, italicized only on the second sentence via the gradient span.
  - Tighter padding (`p-7 md:p-10`), keep `glass-strong`, grain, and the blurred glow accents.
  - Footer line stays (`Tech59 · Est. 2024` / `HCMC → SEA`).

### Files touched
- edit `src/components/tech59/Navbar.tsx`
- edit `src/components/tech59/Hero.tsx`
- edit `src/components/tech59/About.tsx`
- add `src/assets/logo-thesentry.png`, `src/assets/logo-sparkhub.png`, `src/assets/logo-avv.png`

No design tokens, routing, or other sections changed.