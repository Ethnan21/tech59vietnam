## Goal

Revert Day-2 Workshops to scroll together with Main Stage (side-by-side, shared page scroll), then verify laptop viewports remain clean.

## Changes

### 1. `src/components/tech59/Programme.tsx` — Day2Tracks desktop grid

Remove the sticky / independent-scroll behavior on the workshop panel so both columns share the page scroll.

- In the `xl:` two-column grid, change the workshop column wrapper from:
  `xl:col-span-2 xl:sticky xl:top-24 xl:self-start xl:max-h-[calc(100vh-7rem)] xl:overflow-y-auto`
  to simply:
  `xl:col-span-2`
- Keep `xl:items-start` on the grid so columns top-align (matches the prior look).
- Leave the `workshopPanelClass` styling (muted background + ring) untouched.
- Keep the mobile/small-laptop tab UI (`xl:hidden`) as-is.

No other component logic, content, or styling changes.

### 2. Laptop viewport re-check (no code changes unless a defect is found)

Drive Playwright at 1280×800, 1366×768, 1440×900, 1920×1080 against `http://localhost:8080`:

- Assert `document.documentElement.scrollWidth === clientWidth` (no horizontal overflow).
- Open Agenda → Day 2; screenshot the split layout to confirm:
  - Main Stage and Workshops sit side-by-side.
  - Both scroll together with the page (no inner scrollbar on the workshop panel).
  - Column tops align; no awkward height glitch.
- Spot-check Hero, Stats, Experience, Packages, Partners, FinalCTA at each width for overlap/wrap issues.

If any defect surfaces, fix it with a minimal `lg:`/`xl:` utility tweak in the affected component only.

## Out of scope

Mobile/tablet styles, content, copy, colors, component APIs.
