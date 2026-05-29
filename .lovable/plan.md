## Changes

### 1. `src/components/tech59/Stats.tsx` — smaller heading
The "Tech59 2025 Impact" heading is currently `text-3xl md:text-7xl`, which on desktop (md:text-7xl) overpowers the stat numbers (`md:text-7xl`). Reduce it so it reads as a label, not a competing display.

- Change `<h2 className="font-display md:text-7xl font-bold leading-[0.9] text-slate-50 text-3xl">` to `<h2 className="font-display text-xl md:text-3xl font-semibold tracking-tight leading-tight text-slate-50/90">`.

Result: the heading becomes a refined eyebrow-style title, clearly smaller than the giant stat numbers below it.

### 2. `src/components/tech59/About.tsx` — vertically center the two columns
Currently the grid uses `items-start`, so the tall quote card sits flush to the top of the row and visually spills below the short "What is Tech59?" column. Switch to vertical centering so both columns are centered relative to each other.

- Change `<div className="container grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">` to `<div className="container grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">`.
- Remove the `mt-6` offset on the quote card wrapper (`<div className="relative glass-strong rounded-3xl p-6 md:p-8 overflow-hidden grain mt-6">` → drop `mt-6`) so the card is no longer pushed down and the centering reads cleanly.

Result: on `lg` and up, the "What is Tech59?" block and the quote card are vertically centered to a shared midline. The quote card no longer appears to spill below the headline copy.

No other files touched. Pure presentation changes.
