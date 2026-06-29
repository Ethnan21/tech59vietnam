Tighten the workshop logo pill in `src/components/tech59/Programme.tsx` so it is narrower and sits more to the left:

1. **Reduce pill width**
   - Trim the remaining right padding to the minimum clean edge: `pr-[0.315rem] md:pr-[0.441rem]` → `pr-[0.2rem] md:pr-[0.28rem]`.
   - Leave the logo sizes unchanged (`h-[3.9rem] md:h-[5.2rem]` standard, `h-[2.275rem] md:h-[2.925rem]` for sixonefour labs).

2. **Pan the pill content left**
   - Reduce the left padding by 40% so the logo sits closer to the pill's left edge: `pl-5 md:pl-7` → `pl-[0.75rem] md:pl-[1.05rem]`.
   - Keep `justify-start` and `items-center` so the logo remains vertically centered and horizontally left-aligned.

3. **Preserve everything else**
   - Same pill background (`glass-strong`), ring, shadow, and rounded shape.
   - No changes to logo sizing, text, timeline, or agenda data.

### Verification
Visually inspect the preview to confirm:
- The pill is visibly narrower.
- The logo sits closer to the left edge of the pill.
- The logo still has enough breathing room and does not touch the ring edge.