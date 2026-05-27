## Goal
Add a "Register" CTA button beneath the "Pick your pass" pricing table in the Packages section, with refined alignment and consistent styling.

## Current State
- The Packages section (`Packages.tsx`) contains a pricing comparison table with a "Pick your pass" heading.
- Below the table there is only a small disclaimer text (`*Pricing and inclusions subject to change`).
- The Hero section already has a "Get Your Pass" button pattern using `Button variant="hero" size="xl"` linking to the Luma registration URL.

## Plan
1. **Add a centered Register button** below the pricing table and above the disclaimer.
   - Use `Button variant="hero" size="xl"` with an `ArrowRight` icon to match the primary CTA style in Hero.
   - Link to the existing Luma registration URL: `https://lu.ma/bde1n8vo`.
   - Wrap it in a `Reveal` animation for consistency.
2. **Refine alignment** by centering the button within the container using `flex justify-center`.
3. **Adjust spacing** to create a clean visual hierarchy between the table, the button, and the disclaimer.

## Technical Details
- File to edit: `src/components/tech59/Packages.tsx`
- Add import for `ArrowRight` from `lucide-react` and `Button` from `@/components/ui/button`.
- Insert the button block between the table Reveal and the disclaimer Reveal.
