## Plan

### Program Day 2 — Track dot swap
In `src/components/tech59/Programme.tsx`, the `TrackHeader` calls for Main Stage and WORKSHOPS currently use different accent classes. Swap them so:
- **Main Stage** gets the brighter, more prominent dot style (`bg-accent` + cyan glow).
- **WORKSHOPS** gets the less prominent dot style (`bg-primary` + blue glow).

This affects both the desktop 3:2 grid and the mobile tab view.

### Footer — Partner links
In `src/components/tech59/Footer.tsx`, update the attribution line:
- Wrap **The Sentry** in an `<a>` linking to `https://thesentry.com.vn/en/`
- Wrap **AVV** in an `<a>` linking to `https://avv.co/`
- Keep the `·` separators and existing styling.

No other files need to change.