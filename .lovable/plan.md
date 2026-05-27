## Programme section refinements

**File:** `src/components/tech59/Programme.tsx`

### 1. Make Day 1 / Day 2 collapsible
- Replace current tab buttons with an accordion-style toggle: each day is a header row that expands/collapses its schedule.
- Both days collapsed by default (or Day 1 open) so the long list no longer dominates the page.
- Day headers keep current pill/glass styling; add a chevron that rotates on open.
- Smooth height/opacity transition when expanding.

### 2. Tighten typography and spacing
- Time: `text-2xl md:text-3xl` → `text-xl md:text-2xl`.
- Slot title: `text-xl md:text-2xl` → `text-base md:text-lg`.
- Tag chip: keep size, reduce bottom margin.
- People / moderator: `text-sm` → `text-xs md:text-sm`.
- Card padding: `p-6 md:p-7` → `p-4 md:p-5`.
- Vertical spacing between cards: `space-y-5` → `space-y-3`.
- Timeline dot + rail: keep, scaled to match smaller cards.

### 3. Keep intact
- People/moderator lines remain visible inside each card (not behind a second dropdown).
- Colors, gradients, glass tokens, hover/reveal animations unchanged.
- Section heading and "agenda subject to change" note unchanged.

No other components or data are touched.