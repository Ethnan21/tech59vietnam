## Plan: Fix workshop logo / pill alignment in `src/components/tech59/Programme.tsx`

### Problem
The current workshop logo pill is rendered as an absolutely-positioned element behind the logo image, with a hardcoded `left-[20%]` offset and percentage-based width/height. The 614 logo still overflows the pill, and the other logos do not have a consistent bounding box or equal negative space on each side.

### Changes

1. **Make the pill a consistent bounding box for every logo**
   - Replace the absolutely-positioned pill with a flex container that has a fixed height and horizontal padding.
   - Apply the `glass-strong` rounded pill as the background of this container.
   - Place each logo inside the container with `object-contain` and consistent left/center alignment so the negative space on each side is the same across all logos.

2. **Resize the 614 logo to fit the pill like the others**
   - Remove the existing 20%-smaller conditional class for 614 (`h-[5.04rem] md:h-[6.48rem]`).
   - Apply a 40% reduction from the standard logo size for 614 only: approximately `h-[3.8rem] md:h-[4.9rem]` (standard is `h-[6.3rem] md:h-[8.1rem]`).
   - This makes the 614 logo sit inside the pill with the same visual padding as the other workshop logos.

3. **Keep the existing visual language**
   - Preserve the blue pill (`glass-strong`, ring, shadow) and the same overall card layout.
   - Keep the left-aligned timeline and time styling unchanged.
   - No text, agenda, or data changes.

### Verification
After editing, visually inspect the preview to confirm:
- Each workshop logo is centered/aligned consistently within its pill.
- The pill has equal negative space on both sides of each logo.
- The 614 logo is no longer oversized and matches the other logos.

### Out of scope
- No changes to agenda text, times, or speaker data.
- No changes to other sections (Packages, Hero, etc.).