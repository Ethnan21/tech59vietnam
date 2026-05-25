## Refinements

### 1. Experience section imagery
Regenerate the four placeholder images in `src/assets/` with a natural, hyperrealistic photographic style (warm/neutral tones, real lighting) instead of the current pink/blue neon look. Files replaced in place so imports stay the same:

- `exp-keynote.jpg` — hyperrealistic photo of a packed keynote stage, warm stage lighting, real audience
- `exp-pitch.jpg` — hyperrealistic photo of a startup founder pitching to investors, daylight/neutral tones
- `exp-night.jpg` — hyperrealistic photo of an expo floor with booths, natural ambient lighting
- `exp-tour.jpg` — hyperrealistic photo of a tech facility tour, daylight, real architecture

Generated with the `premium` tier for fidelity. No code changes in `Experience.tsx`.

### 2. Venue image parallax
In `src/components/tech59/Venue.tsx`:
- Remove `useParallax` import and the `imgRef` hook
- Remove the `ref={imgRef}` and `will-change-transform` from the `<img>`
- Restore standard sizing (drop the `h-[115%] -mt-[7%]` parallax compensation, use `h-full`)

Keeps the hover scale animation; only the scroll-tied parallax is removed.

### Out of scope
No copy, layout, or color-token changes elsewhere.
