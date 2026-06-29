# Core Themes Carousel — Polish Pass

Tighten `src/components/tech59/ThemesCarousel.tsx` (and minor `Experience.tsx` margin tweak if needed). No other sections touched.

## Changes

1. **Remove "Swipe to see more" pill** — delete the hint block and the `showHint` state/scroll listener entirely. Left/right arrow buttons communicate scrollability.

2. **Make arrow buttons functional and visible on all viewports** — keep existing `nudge()` handler, drop the `hidden md:grid` restriction so the buttons also appear on mobile (still tappable). Keep glass styling.

3. **Reduce card size** (supporting content, not hero):
   - Height: `440/460/480px` → `300/320/340px`.
   - Width: `72vw / 300 / 280 / 300` → `64vw / 240 / 230 / 250`.
   - Title font: `text-2xl sm:text-3xl` → `text-lg sm:text-xl`.
   - Theme badge + description stay, slightly tighter padding (`p-4`).

4. **Reduce background image opacity** — `opacity-70 → opacity-55`, hover `opacity-85 → opacity-70`.

5. **Remove the side black gradient masks** — delete the two `bg-gradient-to-r/l from-background` fade overlays. They are what's producing the "weird black gradient line" visible in the screenshot.

6. **Fix hover clipping + nested scroll + cursor**:
   - Remove `hover:-translate-y-1` so cards no longer rise into the section's top edge (keep `hover:scale-[1.02]`, ring glow, image zoom, light streak — hover still feels alive).
   - Add vertical breathing room on the scroller (`py-6`) and `overflow-y-visible` so any residual hover transform isn't clipped.
   - Remove `tabIndex={0}` from the scroll container so it no longer becomes a separately focusable/scrollable region (prevents the "small card section scroll" the user is seeing). Arrow buttons + native horizontal wheel still work.
   - Change cursor: drop `cursor-grab active:cursor-grabbing` and the pointer-drag handlers, so the cards don't read as clickable/grabbable. Scrolling stays via wheel/trackpad/touch + arrow buttons.

## Out of scope
- No copy changes, no asset changes, no changes to other sections.
