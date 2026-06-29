## Goal

Make the entire Tech59 site feel intentional and tight on mobile, tablet, and desktop. No horizontal spill, no abrupt type jumps, no sub-44px touch targets, no oversized padding on phones.

## Global hardening

- **Page root overflow guard** — add `overflow-x-hidden` to the page wrapper in `src/pages/Index.tsx` so any stray absolute/translate element can never produce a horizontal scrollbar.
- **Smoother type scale** — wherever sections jump from `text-4xl`/`text-5xl` straight to `text-7xl` at `md`, insert a `sm:` step (`sm:text-5xl` / `sm:text-6xl`) and a `lg:text-7xl` tier so the scale never doubles in one breakpoint.

## Per-section fixes

**Hero (`Hero.tsx`)**
- Replace `pt-28` with `pt-20 sm:pt-24 md:pt-28` so the fold breathes on small phones.
- Add an `sm:mx-` step on the hero logo so it isn't edge-tight between mobile and `md`.

**Navbar + StickyCTA**
- Keep both fixed, but add `safe-area` aware bottom spacing on `StickyCTA` (`pb-[calc(env(safe-area-inset-bottom)+0.75rem)]`) and ensure the bottom CTA doesn't overlap the footer's last CTA on short viewports.
- No nav change for the hidden Register button (intentional — burger covers it).

**Packages / Experience / Programme / FinalCTA / About headings**
- Standardize the section heading scale to `text-4xl sm:text-5xl md:text-6xl lg:text-7xl`.
- Cap decorative blur orbs (`w-[800px]`, `w-[600px]`) with responsive sizes: `w-[60vw] max-w-[800px]` so they never dominate small viewports.

**FinalCTA (`FinalCTA.tsx`)**
- Replace `py-32` with `py-20 sm:py-24 md:py-32` — recovers a third of the mobile viewport.

**About (`About.tsx`)**
- Quote nav buttons `h-9 w-9` → `h-11 w-11` (44px minimum touch target).
- Quote glyph: add `sm:text-6xl` between `text-5xl` and `md:text-7xl`.

**Audience (`Audience.tsx`)**
- Tab buttons: `py-2.5` → `py-3` (≥44px tap area), keep visual weight by trimming horizontal padding slightly on mobile.
- Panel padding: smoother ramp `p-6 sm:p-8 md:p-12 lg:p-14`.

**ThemesCarousel (`ThemesCarousel.tsx`)**
- Arrow buttons `h-10 w-10` → `h-11 w-11` and reposition from `-left-3/-right-3` to `left-1` / `right-1` on mobile so they aren't clipped, restoring negative offset at `md`.
- Verify card `w-[64vw]` works down to 320px — likely fine, no change.

**Programme (`Programme.tsx`)**
- Heading scale fix (above).
- Verify time column doesn't wrap awkwardly on small phones; add `min-w-` only if needed after visual check.

**Partners (`Partners.tsx`)**
- Press logo grid: bump base columns to `grid-cols-3 sm:grid-cols-4 lg:grid-cols-8` so logos stay legible on 320–375px phones.

**StatCounter / Stats**
- Counter scale: `text-3xl sm:text-4xl md:text-6xl lg:text-7xl` so 4-digit values fit comfortably in 2-col mobile grid.

**Footer (`Footer.tsx`)**
- Add `break-words` / `overflow-wrap: anywhere` on the contact row so long email addresses can't push past the container.

## Verification

After edits, drive Playwright at viewports 375px, 768px, 1024px, 1440px:
- Assert `document.documentElement.scrollWidth === clientWidth` on each (no horizontal overflow).
- Screenshot each section at 375 + 768 to eyeball spacing and type rhythm.
- Confirm tap targets ≥44px on Audience tabs, About quote nav, ThemesCarousel arrows.

## Out of scope

- No content/copy changes.
- No color/typography system changes.
- No new components or sections.
- No business-logic or backend touches.
