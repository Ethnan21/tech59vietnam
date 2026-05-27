## Changes

### 1. Experience cards (`src/components/tech59/Experience.tsx`)
- **Align titles/subtext**: Make the text block bottom-aligned consistently. Currently the text sits at `absolute bottom-0` over the image, but if one description wraps to two lines (Networking: "Curated intros where deals get made.") vs others, alignment differs. Fix by giving each title a fixed min-height (or `line-clamp` / consistent height) so titles and subtext align across all 4 cards. Approach: wrap title in a fixed-height container (e.g. `min-h-[3.5rem]` for title area) so subtext starts at same Y.
- **Remove image zoom on hover**: drop `group-hover:scale-[1.06]` and `transition-transform duration-[4000ms]` on the `<img>`.
- **Subtle float-up**: keep card hover float, but make it more subtle — reduce `-translate-y-1` to `-translate-y-0.5`, soften shadow. Remove pointer affordance: no border color change/glow that implies clickability; keep `cursor-default` (don't use `cursor-pointer`). Current code doesn't set cursor-pointer but `hover:border-primary/40` + big shadow suggests interactivity — tone down.

### 2. Core themes grid (`src/components/tech59/Experience.tsx`)
- Remove `cursor: pointer` — change `cursor-pointer` → `cursor-default` on the themes `Reveal` cards.

### 3. Packages table (`src/components/tech59/Packages.tsx`)
- Reorder columns: VIP Pass, **Partner Pass**, Premium Pass, Standard Pass, Start Up Pass.
- Reorder `columns`, `prices`, and each `row.values` tuple accordingly (move index 4 → index 1).
- Update the header styling logic so Partner Pass (now index 1) gets an appropriate accent; keep VIP gradient at index 0. Adjust so Premium accent moves to its new index.

No other files affected.
