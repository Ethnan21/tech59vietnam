## Refinements

### 1. `src/components/tech59/Audience.tsx` — Enterprise image
- Currently the enterprise tab image uses `object-[center_80%]`. Shift it slightly further down (more upper crop, more of the people's heads visible at top) by changing to `object-[center_90%]`.

### 2. `src/components/tech59/Stats.tsx` — Heading font
- "TECH59 2025 IMPACT" currently renders as a tiny uppercase eyebrow (`text-xs uppercase tracking-[0.3em]`).
- Replace it with a heading that matches the visual treatment of "What is Tech59?" in `About.tsx`:
  - `<h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.9]">Tech59 <span className="text-gradient-animated">2025 Impact</span></h2>`
- Keep the section structure (Reveal wrapper, centered) so spacing stays consistent.

### 3. `src/components/tech59/About.tsx` — Quote carousel
Replace the single hard-coded quote with a 3-quote carousel inside the existing glass card. Card dimensions stay identical (same padding, same `min-h-[240px]` content row, same gradients).

**Quotes (in order):**
1. *(existing)* "We are not just building a community. We are shaping the future of Vietnam's innovation economy." — Tech59 · Est. 2024
2. "Huge thanks to Tech59 | Vietnam's Startup - Tech Community and The Sentry for having AusCham Vietnam at this fantastic event. We were proud to introduce FoundersCircle, our new membership tier designed to empower early-stage founders building across the Australia-Vietnam corridor. Grateful for the partnership and the energy this community brings. Excited for what we'll build together!" — Edwin H. Law, Executive Director @ AusCham Vietnam
3. "Great event! Thank you for having me and the opportunity to voice a perspective from a cybersecurity angle and contrast the differences in working cultures between Vietnam and USA." — Rui Maximo, VP of Security @ Sky Mavis

**Implementation details:**
- Local `useState` index + array of quote objects `{ text, author, meta }`.
- Quote 2 is long — to prevent crowding while keeping card height stable:
  - Increase the inner scroll area to a fixed min height (`min-h-[280px]` on the quote row) so all 3 quotes fit without the card resizing.
  - Use a slightly smaller, denser type scale for the body (`text-base md:text-lg`) and tighter top margin on the opening quote glyph.
  - Allow the quote text to wrap freely; no truncation.
  - Footer line shows `— Author · Role`.
- Replace the `justify-end` footer row with `justify-between`:
  - Left: prev/next arrow buttons (lucide `ChevronLeft` / `ChevronRight`) styled as subtle glass icon buttons (`h-9 w-9 rounded-full glass`).
  - Right: existing meta line, now author-driven (e.g. `Edwin H. Law · AusCham Vietnam`).
- Add small dot indicators (3 dots) centered above the footer or beside arrows for current-slide affordance.
- Fade transition between slides (`key={index}` + `animate-fade-in`).
- Keep all existing background blobs, gradient bar, and grain — only the inner text + footer change.

No other files touched. Pure presentation work.
