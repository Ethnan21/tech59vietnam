## Changes

### 1. Remove "Four formats / One summit" from Experience
In `src/components/tech59/Experience.tsx`:
- Delete the `Reveal` heading block ("Four formats / One summit")
- Delete the 4-card grid (`items.map(...)`) and its `items` array
- Delete the now-unused image imports: `keynote`, `pitch`, `night`, `tour`
- Keep `Programme` and the Core Themes panel intact

### 2. Move "Attendee Packages" into that spot
- Import `Packages` inside `Experience.tsx` and render it at the top of the section (where the four-format grid used to be), preserving its background (`bg-hero`, grid-bg, glow blobs, grain) — the `Packages` component already contains its own background layers, so it will render identically.
- Remove `Packages` from `src/pages/Index.tsx` so it only appears once, in its new location.

### 3. Remove the Audience section entirely
- Remove `<Audience />` from `src/pages/Index.tsx`
- Remove the `import { Audience }` line
- Delete `src/components/tech59/Audience.tsx` and its now-unused image assets (`audience-*.jpg`, `audience-enterprise-new.jpg.asset.json`)

### 4. Performance / smoothness pass (no visual change)
- Verify no other file imports `Audience` or the deleted assets (ripgrep).
- Because `Packages` now sits above the fold-ish (right after Programme), keep it eagerly imported (already is) — no lazy wrapper needed.
- Run `bunx tsgo --noEmit` and `bun run build` to confirm no dangling imports and that the removed component shrinks the bundle.
- Quick Playwright pass at 1280×1800 and 390×844 to confirm layout flows: Hero → Stats → About → Experience (Packages + Programme + Themes) → Venue → Partners → FinalCTA → Footer, with no console errors and smooth scroll.

### Order inside Experience section after change
```
<section id="experience">
  Packages (with its own hero background)
  Programme
  Core Themes panel (unchanged)
</section>
```

### Out of scope
No text, color, font, or Packages-internal changes. No redesign of Programme or Themes. No backend changes.
