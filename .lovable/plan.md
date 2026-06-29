## Streamline Packages to Standard + VIP

Replace the current 5-column comparison table in `src/components/tech59/Packages.tsx` with a compact two-card layout based on the chosen "Glass duo-tier cards" direction, using the existing dark/cyan design tokens (no hardcoded colors).

### Layout

- Section keeps existing background (hero gradient, grid, light streak, pulse glow) and heading "Pick your pass".
- Two cards in a responsive grid (`grid md:grid-cols-2 gap-6`), stacked on mobile, side-by-side on md+.
- Max width ~5xl so the section is noticeably shorter than the current table.

### Standard Pass card

- Subtle glass: `glass` with low-opacity border.
- Title "Standard Pass" (muted), price "500,000 VND" (display font, large).
- 3 grouped inclusion bullets with cyan check icons:
  - Main Stage Keynotes & Panels
  - Coworking Lounge Access
  - Up to 5 workshops
- Secondary CTA button "Register" → `https://lu.ma/bde1n8vo`.

### VIP Pass card

- `glass-strong` with accent ring + soft glow shadow, "Most Popular" pill at top-center using `text-gradient-animated` style.
- Title "VIP Pass" with gradient text, price "Invitation Only".
- 2-column inclusion grid (collapses to 1 col on small) using `Check` icons:
  - Priority Seating 
  - VIP / Speaker Lounge
  - Up to 5 Workshops
  - Priority Check-in
  - VIP Reception (Night Before)
- Primary CTA button (hero variant) "Get VIP Access" → `https://lu.ma/bde1n8vo`.

### Footer

- Keep small note: "*Pricing and inclusions subject to change" centered below.
- Remove the separate big Register button block (each card now has its own CTA).

### Technical notes

- Single file change: `src/components/tech59/Packages.tsx` (full rewrite of the inner content).
- Use existing tokens / utilities: `glass`, `glass-strong`, `text-accent`, `text-gradient-animated`, `bg-brand`, `Button` `variant="hero"`, `Reveal` for entry animations.
- Use `lucide-react` `Check` and `ArrowRight` icons (already imported).
- Remove unused `X` import and the `rows`/`prices`/`renderCell` table code.
- Accessibility: each card is a `<article>` with an `<h3>`, lists use `<ul>/<li>`, CTAs are real `<a>` anchors with `target="_blank" rel="noopener noreferrer"`.
- Motion respects existing `motion-safe` patterns; hover lift + ring intensify on VIP only.

### Result

Section height drops roughly in half versus the current scrollable table, content is scannable at a glance, and VIP is visually the clear premium choice.