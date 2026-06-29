Tighten the workshop logo pill in `src/components/tech59/Programme.tsx` further so it is noticeably smaller and the logo sits closer to the left edge:

1. **Make the pill width smaller**
   - Reduce the remaining right padding to the edge: `pr-[0.2rem] md:pr-[0.28rem]` → `pr-[0.1rem] md:pr-[0.14rem]`.
   - Leave the logo sizes unchanged (`h-[3.9rem] md:h-[5.2rem]` standard, `h-[2.275rem] md:h-[2.925rem]` for sixonefour labs).

2. **Pan the content further left**
   - Reduce the left padding again so the logo is closer to the pill's left edge: `pl-[0.75rem] md:pl-[1.05rem]` → `pl-[0.5rem] md:pl-[0.7rem]`.
   - Keep `justify-start` and `items-center` so the logo stays vertically centered and horizontally left-aligned.

3. **Preserve everything else**
   - Same pill background (`glass-strong`), ring, shadow, and rounded shape.
   - No changes to logo sizing, text, timeline, or agenda data.

### Verification
Visually inspect the preview to confirm:
- The pill is tighter around the logo.
- The logo sits closer to the left edge of the pill.
- The logo still has a minimal but clean buffer from the pill edge.