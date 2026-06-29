Modify only the workshop logo pill in `src/components/tech59/Programme.tsx`:

1. **Increase logo sizes by 30%**
   - Standard logos: `h-12 md:h-16` → `h-[3.9rem] md:h-[5.2rem]`
   - sixonefour labs logo: `h-7 md:h-9` → `h-[2.275rem] md:h-[2.925rem]`

2. **Reduce right-side pill padding by 30%**
   - Current pill uses `px-5 md:px-7` (symmetric).
   - Keep left padding unchanged: `pl-5 md:pl-7`.
   - Reduce right padding to 70% of original: `pr-[0.875rem] md:pr-[1.225rem]`.

3. **Preserve everything else**
   - Same pill background (`glass-strong`), ring, shadow, and rounded shape.
   - Same `object-contain` image handling.
   - Same sixonefour labs relative sizing (still smaller than the others, but scaled up by 30%).
   - No changes to text, layout, timeline, agenda data, or other components.