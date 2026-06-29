# Core Themes → Horizontal Scroll Row

Replace the current 2-3-5 column grid in `src/components/tech59/Experience.tsx` with a single-row, horizontally scrollable showcase inspired by the attached reference (tall portrait cards, large title text over high-opacity imagery on dark background).

## What changes

**Location:** Bottom of `src/components/tech59/Experience.tsx` (the `themes` block). Text content, theme list, images, and section heading ("Ten tracks, Endless deals") stay exactly as they are.

**New layout — single horizontal row:**
- One row of tall portrait cards (~280px wide × ~440px tall on desktop, ~220×360 on mobile), `flex-nowrap`, native scroll-snap.
- Cards are taller than current (current ~160px → new ~440px) to match the reference proportions.
- Background image opacity raised from `opacity-15` → `opacity-70` (hover `opacity-85`).
- New readability layer: stronger bottom-anchored gradient (`from-black/90 via-black/40 to-transparent`) so the large white display title stays legible against the brighter imagery.
- Title moves to the bottom of the card with a larger display font (similar to reference); theme number badge sits top-left; short desc sits under the title.

**Scroll affordance — "Swipe to see more":**
- Small pill above the row, left-aligned: animated arrows (`←  Swipe to see more  →`) using a gentle horizontal nudge animation (Tailwind keyframe).
- Subtle left + right edge fade masks on the scroll container so cards bleed off-screen, signalling more content.
- Hides automatically once the user has scrolled to the end (simple scroll listener).

**Dynamic / sleek effects:**
- Smooth native scroll with `scroll-smooth`, `snap-x snap-mandatory`, `snap-center` per card, momentum scroll on touch.
- Per-card hover: slight scale (`hover:scale-[1.03]`), image zoom (`group-hover:scale-110`), light-streak sweep (already in project), accent ring glow.
- Subtle parallax: background image translates a few px opposite to card hover tilt (CSS only, no JS lib).
- Reveal-on-enter stagger using the existing `Reveal` component.
- Drag-to-scroll on desktop (pointer events) so users can grab and fling, in addition to wheel/trackpad.
- Hide scrollbar (`scrollbar-hide` utility via inline style) for a clean look while keeping scroll behavior.

## Technical notes

- New small component: `src/components/tech59/ThemesCarousel.tsx` holding the row + drag logic + swipe hint, imported into `Experience.tsx` to keep `Experience.tsx` lean.
- No new dependencies — pure Tailwind + a few inline keyframes (extend `tailwind.config.ts` with `marquee-hint` if needed) and a ~30-line pointer-drag handler.
- Mobile: cards shrink, swipe hint stays, snap-center keeps each card aligned.
- Accessibility: row is `role="region"` with `aria-label="Core themes, scroll horizontally"`; cards remain keyboard focusable; arrow keys scroll the container.

## Out of scope

- No changes to theme names, descriptions, image assets, or the section heading.
- No changes to other sections.
