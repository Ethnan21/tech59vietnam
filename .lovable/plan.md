## Refine Experience section

### 1. Replace Tech Tours with Networking

In `src/components/tech59/Experience.tsx`, keep Keynote Speeches, Startup Pitch, and Booths. Replace the fourth item (Tech Tours) with:

- **Networking** — "Curated intros where deals get made."

Reuse the existing `exp-tour.jpg` image (or swap later if desired). Section heading "Four formats. One summit." stays.

### 2. Remove the location tag chips

Delete the `<span class="absolute top-4 left-4 ...">{it.tag}</span>` from each card and drop the `tag` field from the items array — no more "Main Stage / SPARK Hub / Expo Floor / Immersive" labels.

### 3. Premium, slow-zoom hover

Refine the card hover for a more luxurious feel:

- Image zoom: `group-hover:scale-[1.06]` with `duration-[2000ms] ease-out` (slower, gentler than the current `scale-110` / `1.2s`)
- Card lift: soften to `-translate-y-1`, `duration-700 ease-out`
- Shadow: swap heavy neon purple for a softer premium glow — `hover:shadow-[0_30px_80px_-20px_hsl(217_91%_60%/0.35)]`
- Border: subtler `hover:border-primary/40`
- Keep the existing light-streak shimmer overlay

### Scope

Only `src/components/tech59/Experience.tsx` changes. Core Themes grid untouched.
