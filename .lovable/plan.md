## Make Core Themes background visible + tighten spacing

**File:** `src/components/tech59/Experience.tsx`

### Why it's not showing
The panel currently layers `bg-hero opacity-90` + a single faint `bg-secondary/20` orb under `grid-bg`. Against the surrounding `--background` (dark navy), the difference reads as essentially the same color — no visible purple/blue panel.

### Changes to the Core Themes wrapper

1. **Stronger, dynamic purple/blue gradient background**
   Replace the current background stack with:
   - Base: explicit linear gradient `bg-[linear-gradient(135deg,hsl(258_90%_18%)_0%,hsl(224_60%_12%)_50%,hsl(217_91%_22%)_100%)]` (deep purple → navy → electric blue)
   - `grid-bg` overlay (kept)
   - Two animated blurred orbs for movement:
     - Left: `w-[600px] h-[600px] bg-secondary/40 blur-[140px] animate-pulse-glow` (purple)
     - Right: `w-[600px] h-[600px] bg-primary/35 blur-[140px] animate-float` (electric blue)
   - Keep `grain` for texture

2. **Smooth fade in/out so it doesn't look like a hard band**
   Keep top + bottom `from-background to-transparent` overlays but reduce height to `h-24` so the colored core stays visible.

3. **Reduce empty space at the bottom**
   - Wrapper: `py-24 mt-12` → `pt-20 pb-10 mt-8`
   - Inside `ThemesCarousel`, the scroller has `py-12`; the bottom half of that padding currently sits over empty panel space. Keep `py-12` (needed for hover glow), but the tighter section padding removes the surplus.

### No content changes
Heading, carousel, themes, arrows all stay the same.
