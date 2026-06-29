Reduce the visible workshop logo pill width from the right by 40% in `src/components/tech59/Programme.tsx` without changing the logo image size:

1. **Eliminate the remaining right padding**
   - Change `pr-[0.1rem] md:pr-[0.14rem]` → `pr-0` so the pill's right edge starts at the logo's right edge.

2. **Crop the pill from the right by 40%**
   - Add `overflow-hidden` to the pill so anything beyond its box is clipped.
   - Apply a negative right margin equal to 40% of the pill's natural width. Because the pill width depends on the logo's natural aspect ratio, use a relative clip approach: `clip-path: inset(0 40% 0 0)` which trims the right 40% of the pill (including its background, ring, and the right portion of the logo).
   - Keep the logo element and its height classes unchanged (`h-[3.9rem] md:h-[5.2rem]` standard, `h-[2.275rem] md:h-[2.925rem]` for sixonefour labs), so the logo itself is not resized — only the visible portion is cropped.

3. **Preserve everything else**
   - Keep the left padding at `pl-[0.5rem] md:pl-[0.7rem]` so the logo stays panned left.
   - Keep the pill height, background (`glass-strong`), ring, shadow, and rounded shape.
   - No changes to logo sizing, text, timeline, or agenda data.

### Important note
This change will visibly crop the right 40% of each logo. If you prefer to keep the full logo visible, the alternative is to reduce the logo height instead.