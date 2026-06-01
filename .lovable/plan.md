## Changes

### 1. `src/components/tech59/Programme.tsx`
- Update the Day 1 label to append `(VIP Pass Only)` rendered with the `text-gradient-animated` class so it shows in the brand gradient. Implementation: change `dayList[0].label` to a React node (string + `<span className="text-gradient-animated">(VIP Pass Only)</span>`) and update the `label` type from `string` to `ReactNode`.
- Change the initial accordion state from `useState<"day1" | "day2" | null>("day1")` to `useState<"day1" | "day2" | null>("day2")` so the Day 2 (Main Event) programme is expanded by default on load.

### 2. `src/components/tech59/About.tsx`
- The 2nd quote's `meta` ("Edwin H. Law · Executive Director, AusCham Vietnam") wraps to two lines while the others stay on one. Tighten the meta styling so it remains a single line consistently:
  - Change the meta `<span>` from `text-[10px] md:text-xs uppercase tracking-[0.2em]` to `text-[10px] uppercase tracking-[0.18em] whitespace-nowrap` (drop the md size bump, slightly tighter tracking, prevent wrap).
  - Keep `text-right` and the existing muted color.

No other files touched. Pure presentation changes.
