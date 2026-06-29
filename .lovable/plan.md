## Refinements

### 1. Workshop logo centering (`src/components/tech59/Programme.tsx`, ~lines 397–406)
The pill is positioned with hard-coded `top-[45%] left-[20%] w-[47%] h-[55%]` and the logo uses `object-left` plus negative margins. Each logo's aspect ratio is different, so the pill never aligns consistently.

Replace with a self-sizing container:
- Wrapper: `relative inline-flex items-center justify-center px-5 md:px-7 h-12 md:h-14 rounded-full glass-strong ring-1 ring-accent/30 shadow-[0_0_20px_hsl(var(--accent)/0.15)]`
- Logo inside: `relative h-7 md:h-9 w-auto object-contain` (no negative margins, no `object-left`)

This makes the pill wrap the logo with equal padding on all sides — every logo (Osome, SkyMavis, Qapita, Airwallex) becomes perfectly centered regardless of aspect ratio.

### 2. Core Themes carousel (`src/components/tech59/ThemesCarousel.tsx`)

**Remove swipe hint pill** (lines ~74–84) entirely — drop the `showHint` state, the scroll listener `useEffect`, and the `ArrowLeft/ArrowRight` `Swipe to see more` block.

**Remove side gradient masks** (the two `pointer-events-none absolute ... bg-gradient-to-r/l from-background` divs) — these are the "weird black gradient line" on the section's left/right edges.

**Make arrow buttons actually scroll** — they already call `nudge()`, but make them more prominent and always visible (also show on mobile):
- Change `hidden md:grid` → `grid` so they appear on all viewports
- Keep `onClick={() => nudge(-1)}` / `nudge(1)` — already wired
- Add `disabled` state when at scroll start/end using a small `canPrev`/`canNext` state updated on scroll

**Reduce card size:**
- Card width: `w-[72vw] sm:w-[300px] md:w-[280px] lg:w-[300px]` → `w-[60vw] sm:w-[220px] md:w-[210px] lg:w-[220px]`
- Card height: `h-[440px] sm:h-[460px] md:h-[480px]` → `h-[300px] sm:h-[320px] md:h-[330px]`
- Title: `text-2xl sm:text-3xl` → `text-lg sm:text-xl`
- Desc: `text-sm` → `text-xs`
- Theme badge: keep `text-[10px]` but tighten padding to `px-2 py-0.5`
- Inner padding: `p-5 sm:p-6` → `p-4`

**Reduce background image opacity:** `opacity-70 group-hover:opacity-85` → `opacity-55 group-hover:opacity-70`. Slightly soften the scrim too (`from-black/95 via-black/55` → `from-black/90 via-black/45`) so the reduced-opacity image still reads behind the title.

### Out of scope
- No changes to theme list, copy, images, or section heading.
- No changes to other sections, fonts, or color tokens.