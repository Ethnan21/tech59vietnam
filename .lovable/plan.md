## Plan: Partners Section Polish

Three focused edits to `src/components/tech59/Partners.tsx`:

1. **Keep marquee scrolling on hover**
   - Remove `group` class from both marquee wrapper `<div>`s.
   - Remove `group-hover:[animation-play-state:paused]` from both inner marquee `<div>`s so logos never stop scrolling.

2. **Remove divider line**
   - Remove `mt-20 pt-12 border-t border-white/10` from the "Featured in" wrapper to eliminate the partition between the marquees and the press logos.

3. **Box the "Featured in" section**
   - Wrap the "Featured in" label and press-logo grid inside a glass card container (using existing site patterns: e.g. `glass rounded-2xl p-8 md:p-12`) for a contained, styled section block that matches the site's card aesthetic.

No new files. One file changed.