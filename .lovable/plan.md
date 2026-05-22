## Goal
Streamline by merging the Program section into the Experience section. Update Experience items and replace the program tracks with the 10 "Core Themes" from the screenshot.

## Changes

### 1. `src/components/tech59/Experience.tsx`
- Update the 4 experience items:
  - "Tech Talks" → **Keynote Speeches** (keep `exp-keynote.jpg`)
  - "Startup Pitch" → keep as is (`exp-pitch.jpg`)
  - "TECH59 Nights" → **Booths** (keep `exp-night.jpg`, update tag/desc)
  - "Tech Tours" → keep title, change desc from "Inside Vietnam's AI labs." to a different tour-flavored line (e.g. "Behind-the-scenes access to Vietnam's tech ecosystem.")
- Remove the horizontal scroll layout. Use a responsive grid so all 4 cards fit on the page:
  - `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5`
  - Drop `snap-x`, `overflow-x-auto`, fixed widths
- Append a "Core Themes" sub-section inside the same `<section id="experience">`:
  - Eyebrow: "⚡ Core Themes"
  - Heading: "Core Themes. <gradient>Where the deals happen.</gradient>"
  - Grid of 10 cards (same glass card styling as current Program): `grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4` (or 2/5 layout — finalize at implementation)
  - Tracks from screenshot:
    1. Vietnam Market Outlook
    2. Outsourcing
    3. Gaming & Creator Economy
    4. Education & EdTech
    5. AI & Enterprise Automation
    6. Government Policy & Corporate Diplomacy
    7. Venture Capital & Investment
    8. Real Estate & Tech
    9. Fashion Tech
    10. Hot Topic Workshops
  - Keep short one-liner descriptions in current punchy tone
  - Reuse Reveal animations with staggered delays

### 2. `src/pages/Index.tsx`
- Remove `<Program />` import and usage (Experience now contains it)

### 3. `src/components/tech59/Program.tsx`
- Delete file (no longer used)

## Notes
- No backend/business-logic changes. Pure presentation refactor.
- Keep all existing tokens, glass styling, Reveal animations, and gradient text utilities.
