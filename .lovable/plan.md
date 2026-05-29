## Changes to `src/components/tech59/Audience.tsx`

1. **Shift enterprise image upward** — the `<img>` currently uses default `object-cover` centering, leaving too much headroom above the people. Add an enterprise-specific object-position so it crops from the top:
   - Extend the conditional className on the image (line 90) so when `cur.key === 'ent'` it uses `object-[center_25%]` (showing more people, less sky/headroom). Investor case stays as-is.

2. **Fix the cut-off "g" in "rising"** — the benefit text on line 94 uses `leading-[0.95]` with a gradient/clip background, which clips descenders (g, y, p). Fix by:
   - Adding vertical padding (`pb-2`) and slightly looser leading (`leading-[1.05]`) to the `<p>` so descenders render fully inside the gradient text fill.

No other components or logic touched — presentation-only fix scoped to the Enterprise tab framing and the benefit headline typography.