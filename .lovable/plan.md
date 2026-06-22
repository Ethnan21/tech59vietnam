## Agenda refinements

Scope: `src/components/tech59/Programme.tsx` + small CSS additions in `src/index.css`. No content changes.

### 1. Dynamic gradient background for each day's dropdown panel (VIP Reception + Main Event)

When a day accordion is open, the inner panel (currently transparent inside `glass`) gets a layered, slowly-moving gradient inspired by the reference image — deep indigo → violet → midnight navy, brand-aligned and low-contrast so text stays primary.

Approach:
- Add a new utility `agenda-panel-bg` in `src/index.css`:
  - Base: `linear-gradient(135deg, hsl(258 60% 14%), hsl(248 55% 10%), hsl(230 50% 8%))`.
  - Two layered radial blobs (`::before` / `::after`) using `--primary` and `--accent` at low alpha (~15–20%), `filter: blur(40px)`, positioned top-left and bottom-right.
  - `@keyframes agenda-drift` translates the blobs slowly (~18s ease-in-out infinite alternate) for a "dynamic but calm" feel.
  - Wrap in `@media (prefers-reduced-motion: reduce)` to disable animation.
- In `Programme.tsx`, apply `agenda-panel-bg` to the expanded content wrapper (the `div` at line 596 `overflow-hidden`) so it covers both day panels uniformly. Keep existing `glass` shell rounding/border — the gradient sits inside.
- Verify contrast: muted-foreground text and accent tags remain readable on the darker base; no change to text colors.

### 2. Workshops — remove dropdown behaviour, keep subtext inline, solid panel

- Add a `forceStatic?: boolean` prop to `SlotList` and `SlotCard`. When true:
  - `SlotCard` skips the expandable button wrapping, omits the chevron, and renders `description` directly under the title (always visible). Speakers/panelists/moderator are not rendered (workshops don't have these today, so no data loss).
  - Renders as `<article>` instead of `<button>` — same `baseClass` styling preserved.
- Pass `forceStatic` to both desktop and mobile workshop `SlotList` instances.
- Change `workshopPanelClass` from the current gradient to a solid panel:
  - `bg-secondary/10` (or `hsl(var(--secondary)/0.08)`) with the existing `ring-1 ring-primary/15`, same radius/padding.
  - Solid, still distinct from the new animated main-panel background; flows visually.

### Verification
- Read updated file, then drive Playwright against `localhost:8080`:
  - Open Day 2, screenshot full agenda → confirm animated gradient visible behind both columns, workshops panel is solid, no chevrons on workshop cards, descriptions visible inline.
  - Open Day 1, screenshot → same gradient background applied.
  - Mobile viewport (375px): same checks via tab switch.

### Files
- `src/index.css` — add `.agenda-panel-bg` + keyframes.
- `src/components/tech59/Programme.tsx` — wire `agenda-panel-bg`, add `forceStatic` prop, swap `workshopPanelClass`.
