# Laptop Viewport Polish

Goal: make the landing page look consistent and glitch-free across all common laptop sizes (1280, 1366, 1440, 1536, 1680, 1920 wide). Specifically fix the Agenda Day-2 row where Main Stage and Workshop cards sit at uneven heights.

## Root cause of the Agenda glitch

In `Programme.tsx`, Day-2 uses `lg:grid lg:grid-cols-5 lg:gap-8 lg:items-start` with Main Stage (`col-span-3`) and Workshops (`col-span-2`). Each track is an independent `SlotList` with its own timeline rail, and the workshop panel has its own background (`workshopPanelClass`). Because the two columns have different numbers of slots and different per-card heights, slots never line up by time, which reads as "some high, some low".

Two issues to address:
1. The two columns should not pretend to be time-synchronized — visually separate them so unequal heights look intentional.
2. The workshop panel's background currently stops at its own content height while Main Stage runs longer, leaving a large empty gap on laptops. Pin the panel so it stays visually anchored.

## Changes

### 1. `src/components/tech59/Programme.tsx`
- Day-2 desktop grid: keep `lg:grid-cols-5` but switch ratio to `3 / 2` only at `xl`; on `lg` (1024–1279, common 13" laptops) drop to single column tabs-style or stacked tracks to avoid cramped 3-col cards. Use `hidden xl:grid` for the split, and reuse the mobile tabbed layout for `lg` only.
- Add `xl:sticky xl:top-24 xl:self-start` to the Workshops panel so it stays visible while scrolling the longer Main Stage list — removes the "floating short box next to a tall box" feel.
- Cap workshop panel height with `xl:max-h-[calc(100vh-8rem)] xl:overflow-y-auto` and a subtle scrollbar style.
- Inside `SlotCard`: enforce consistent vertical rhythm — `min-h-[112px]` on compact (workshop) cards and `min-h-[128px]` on main cards so neighbouring cards don't visually jitter.
- Logo pill (selected element): constrain to `max-w-[180px] md:max-w-[220px]` so the pill never stretches past the card on wider laptop breakpoints.
- Tighten `gap-5` → `gap-4 xl:gap-6` on the time/content row to recover horizontal space at 1280–1440.
- Day header label: add `xl:text-xl` cap so the long Day-1 string doesn't wrap awkwardly at 1366.

### 2. Global laptop spacing pass (no content changes)
Adjust only `lg:`/`xl:` utility values; keep mobile/tablet as-is.
- `Hero.tsx`: cap hero inner max-width at `xl:max-w-7xl`, ensure `lg:pt-28` not larger; verify CTA row doesn't wrap at 1280.
- `Stats.tsx` / `StatCounter.tsx`: enforce equal column gaps at `lg:gap-8 xl:gap-12`, add `tabular-nums` if missing (prevents number jitter on counter tick — matches the session-replay flicker).
- `About.tsx`: quote card grid — set `lg:grid-cols-[1.1fr_1fr] xl:grid-cols-2` so portrait + text don't fight at 1280.
- `Experience.tsx` / `ThemesCarousel.tsx`: arrow buttons absolute-positioned — pull to `lg:-left-4 lg:-right-4` so they don't overlap card content on narrower laptops; ensure carousel container has `lg:px-8`.
- `Packages.tsx`: 3-card row — add `lg:gap-6 xl:gap-8` and `min-h-` on the price card body to equalize heights (currently varies with bullet count).
- `Audience.tsx`: tab panel — cap image column with `lg:max-w-[520px]` to prevent the image dominating the row at 1280.
- `Venue.tsx`: verify map/info two-column at `lg`, add `lg:items-stretch`.
- `Partners.tsx`: press grid — set `lg:grid-cols-6 xl:grid-cols-8` for cleaner laptop rhythm.
- `FinalCTA.tsx`: cap `lg:py-24 xl:py-32`.
- `Navbar.tsx`: ensure nav links don't collide with logo at 1280 — add `lg:gap-6 xl:gap-8`.

### 3. Verification (Playwright, headless)
Drive `http://localhost:8080` at four laptop widths: 1280×800, 1366×768, 1440×900, 1920×1080. For each:
- Assert `document.documentElement.scrollWidth === clientWidth` (no horizontal scroll).
- Open Day-2 of the Agenda, screenshot the split view, verify Workshops panel is sticky and the two columns do not have a visible empty-gap mismatch.
- Screenshot Hero, Packages, Partners, About to confirm no overlap or wrap glitches.

## Out of scope
- No content, copy, color, or component-API changes.
- Mobile/tablet styles untouched.
- No new components or libraries.
