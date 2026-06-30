# Mobile fixes

## 1. Venue section overflow (`src/components/tech59/Venue.tsx`)
The `<h2>` uses `whitespace-nowrap` so "Vietnam's tech capital" runs past the viewport on small phones (visible in the screenshot — "capit…" clipped on the right). Fix:
- Remove `whitespace-nowrap` from the h2.
- Allow wrapping on mobile, keep single-line look only from `lg:` up (`lg:whitespace-nowrap`).
- Tighten the mobile size: `text-[2.25rem]` → `sm:text-5xl` → `lg:text-[clamp(2rem,3.25vw,3rem)]` to prevent the gradient word ("tech") from being clipped on 360–390px viewports.

## 2. Featured-in press grid (`src/components/tech59/Partners.tsx`)
8 press logos in a 3-col mobile grid leave 2 orphaned bottom-left. Change to a clean 4×2:
- Grid classes: `grid-cols-4 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8`.
- Reduce mobile logo cap so 4-up fits comfortably: `max-h-6 sm:max-h-12 md:max-h-14`.
- Tighten mobile gaps: `gap-x-2 gap-y-4 sm:gap-x-8 sm:gap-y-10`.
- Reduce wrapper padding on phones: `p-3 sm:p-8 md:p-12`.

## 3. Landing-page mobile sweep (verification only)
Run Playwright at 390×844 and 360×800 against `http://localhost:8080`:
- Assert `document.documentElement.scrollWidth === clientWidth` (no horizontal scroll).
- Screenshot each section (Hero, Stats, About, Experience, Programme, Audience, Packages, Venue, Partners, FinalCTA, Footer) and visually confirm no text clipping, no awkward orphan rows, CTA/sticky bar don't cover content.
- Only patch additional sections if the screenshots reveal a real issue; report findings before editing further.

## Out of scope
- Desktop/laptop styles (already tuned in prior turn).
- Copy, colors, animations, component APIs.
