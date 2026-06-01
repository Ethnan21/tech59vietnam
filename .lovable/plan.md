## Mobile optimization pass

The page currently has horizontal overflow on small screens — visible as a shifted layout and the About quote box spilling past the viewport. Plan is to track down the overflow sources and tighten typography/spacing for ≤414px screens, without touching desktop styles.

### 1. Find and kill horizontal overflow
- Audit each section for elements wider than the viewport. Likely culprits:
  - `About.tsx` quote card: large `“` glyph (`text-7xl`) + `min-h-[360px]` + side rail; long meta string `Edwin H. Law · Executive Director, AusCham Vietnam` uses `whitespace-nowrap` which pushes the card wider than the viewport.
  - `Audience.tsx` benefit headline (`text-3xl md:text-6xl`) — long lines like "Connect with Vietnam's rising tech stars." can extend on 360–414px.
  - `Hero.tsx` H1 logo uses `md:-ml-[8%]` and pill bar with many inline logos.
  - `Programme.tsx` Day labels and accordion content.
- Add `overflow-x-hidden` safety on outer wrappers where appropriate; main already has it but inner sections may push width via negative margins / nowrap.

### 2. About quote card
- Drop `whitespace-nowrap` on the meta line; allow wrap and right-align.
- Reduce quote glyph and min-height on mobile (`text-5xl md:text-7xl`, `min-h-[280px] md:min-h-[360px]`).
- Reduce inner padding on mobile (`p-5 md:p-8`).
- Constrain card to `max-w-full` and ensure parent grid columns can shrink (`min-w-0`).

### 3. Audience section
- Scale the benefit headline down on mobile (`text-2xl sm:text-3xl md:text-6xl`) and shorten line-height.
- Make tab pill row scroll horizontally if it wraps awkwardly, or reduce padding (`px-4 py-2`).
- Reduce card padding (`p-6 md:p-14`).

### 4. Hero
- Remove `md:-ml-[8%]` impact at mobile (already md-only — verify no overflow from logo image at small widths; cap `max-w-full`).
- Powered-by pill: allow it to wrap or shrink logos further at <360px.

### 5. Stats / Countdown / Programme / Packages / Venue / Partners / FinalCTA
- Quick pass: ensure all `container` children use `min-w-0`, large display headings use a smaller mobile size, and any `whitespace-nowrap` on long strings is removed or scoped to ≥md.
- Programme accordion: ensure trigger label wraps; reduce header/time font sizes on mobile.

### 6. Verification
- Re-screenshot at 360, 390, 414 widths.
- Confirm no horizontal scroll (page not shifted) and quote card fully visible.

### Files touched
- `src/components/tech59/About.tsx`
- `src/components/tech59/Audience.tsx`
- `src/components/tech59/Hero.tsx`
- `src/components/tech59/Programme.tsx`
- `src/components/tech59/Packages.tsx`
- `src/components/tech59/Venue.tsx`
- `src/components/tech59/Partners.tsx`
- `src/components/tech59/FinalCTA.tsx`
- `src/components/tech59/Stats.tsx` (only if overflow found)

No business logic, no copy changes, no design system token changes.