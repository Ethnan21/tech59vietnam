## Core Themes section polish

**File:** `src/components/tech59/Experience.tsx`, `src/components/tech59/ThemesCarousel.tsx`

### 1. Wrap Core Themes in its own sub-section with purple/blue background
In `Experience.tsx`, lift the Core Themes heading + `<ThemesCarousel />` out of the shared `container` and wrap them in a new full-width block:

- `relative overflow-hidden grain` wrapper with vertical padding (`py-24`)
- Layered background matching Packages aesthetic:
  - `bg-hero` base at `opacity-90`
  - `grid-bg` overlay
  - A centered `bg-secondary/20 blur-[160px] animate-pulse-glow` orb for the purple glow
- Smooth transition into and out of the surrounding black sections via top + bottom gradient overlays:
  - top: `bg-gradient-to-b from-background to-transparent h-32`
  - bottom: `bg-gradient-to-t from-background to-transparent h-32`
- Inner `container relative z-10` holds the heading + carousel

### 2. Fix hover glow being clipped
The carousel scroller currently uses `overflow-x-auto` which clips the card's hover drop-shadow vertically (since `overflow-x` forces `overflow-y: auto`-equivalent clipping).

In `ThemesCarousel.tsx`:
- Add generous vertical padding to the scroller (`py-10`) so the shadow has room
- Add horizontal padding to the wrapper outer div as well so left/right cards' shadows aren't clipped
- Keep `overflow-y-visible` (already there) and ensure no ancestor has `overflow-hidden` cutting it — the new themes section wrapper uses `overflow-hidden` for background layers, so move that `overflow-hidden` to a dedicated absolute-positioned background div instead of the section itself

### 3. No content/text changes
Theme titles, descriptions, arrows, card sizing all stay the same.

### Result
Core Themes sits on a dynamic purple/blue panel that fades smoothly from the black sections above and below, and the cyan hover glow renders fully without being clipped.
