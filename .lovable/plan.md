## Refine Experience section

### 1. Replace the four format cards with networking-themed cards

In `src/components/tech59/Experience.tsx`, replace the current `items` array (Keynote Speeches, Startup Pitch, Booths, Tech Tours) with four networking-focused experiences. Keep four cards so the grid layout stays balanced. Proposed:

- Founder Mixers — Curated intros between operators building at scale.
- Investor Roundtables — Private conversations with active capital.
- VIP Dinners — Off-record evenings with the inner circle.
- Open Lounges — Serendipitous connections, all summit long.

Reuse the existing four images (`exp-keynote`, `exp-pitch`, `exp-night`, `exp-tour`) so no new assets are needed.

Update the section heading from "Four formats. One summit." to something networking-led, e.g. "Four ways to connect. One summit."

### 2. Remove the location tag header on each card

Delete the `<span class="absolute top-4 left-4 ...">{it.tag}</span>` element from each card so the top-left "Main Stage / SPARK Hub / Expo Floor / Immersive" chips disappear. Drop the `tag` field from the items.

### 3. Premium, slow-zoom hover state

Refine the card hover for a more luxurious feel:

- Image zoom: change `group-hover:scale-110` + `duration-[1.2s]` to a slower, gentler `group-hover:scale-[1.06]` with `duration-[2000ms]` and `ease-out`.
- Card lift: soften `-translate-y-2` to `-translate-y-1` and slow `duration-500` to `duration-700` with `ease-out`.
- Shadow: swap the heavy neon purple shadow for a softer, more premium glow — `hover:shadow-[0_30px_80px_-20px_hsl(217_91%_60%/0.35)]`.
- Border: ease border tint transition (`hover:border-primary/40` instead of `/60`) for a subtler highlight.
- Keep the existing light-streak shimmer overlay; it already reads premium.

### Technical notes

- Only `src/components/tech59/Experience.tsx` changes. No new assets, no token changes, no other components touched.
- The `tag` property is removed from the items array since it's no longer rendered.
- The "Core Themes" grid below is untouched.
