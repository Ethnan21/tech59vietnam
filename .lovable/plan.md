## Goal
Replace the current hero logo image with the uploaded white version, preserving existing formatting and alignment.

## Steps
1. Copy `user-uploads://TECH59_Summit_-_Final_logo-21.png` into the project as `src/assets/tech59-hero-logo-white.png`.
2. In `src/components/tech59/Hero.tsx`, update the `heroLogo` import to point to the new white asset.
3. Keep all existing classes on the `<img>` and parent `<h1>` unchanged (`-ml-[8%]` shift, padding/margin tweaks, `max-w-2xl lg:max-w-3xl`) so layout/alignment stays identical.
4. Verify in the preview that the white logo renders crisp against the dark hero background and aligns left with "POWERED BY" / tagline.

## Notes
- No other components or styles change.
- Old `tech59-hero-logo.png` asset can be left in place (unused) or removed later if desired.
