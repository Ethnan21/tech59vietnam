## 1. Replace Enterprise image

- Copy the uploaded `Picture9.jpg` into `src/assets/audience-enterprise-new.jpg`.
- In `src/components/tech59/Audience.tsx`, swap the `audienceEnterprise` import to point at the new file (keeping the variable name so the Enterprise tab — "Connect with Vietnam's rising tech stars." — uses it as its background).
- Leave the existing `src/assets/audience-enterprise.jpg` untouched on disk in case it's needed later.

## 2. Responsive audit & fixes (iPad + large mobile)

Sweep the landing-page sections at the iPad portrait (~768–834px) and large-mobile (~414–480px) widths and fix any overflow / clipped content. Known candidates from the current code to verify and fix as needed:

- **Hero (`Hero.tsx`)**: the negative `md:-ml-[8%]` on the H1 + oversized logo + `md:mx-[70px]` can push the logo past the viewport on iPad portrait. Constrain so the logo never overflows, and re-check the "Powered by" pill on narrow widths.
- **Programme (`Programme.tsx`)**: Day 2 desktop 3:2 grid kicks in at `lg`; on iPad portrait it stays in mobile-tab mode — verify the tab pills + slot cards don't overflow.
- **Packages (`Packages.tsx`)**: comparison table is horizontally scrollable (`min-w-[760px]`) — confirm the scroll affordance + fade work on iPad and the section itself doesn't force page-level horizontal scroll.
- **Audience (`Audience.tsx`)**: tab row wraps already; verify the big benefit text doesn't overflow at iPad portrait.
- **Venue, About, Partners, Footer, StickyCTA, Navbar**: spot-check for any fixed widths, large headings, or absolute-positioned glows leaking horizontal scroll.

Approach: load the preview at iPad portrait (768) and large mobile (414), screenshot full-page, identify overflows, then apply minimal fixes (adjust `md:` breakpoints to `lg:`, drop negative margins on smaller screens, tighten `text-7xl` to `text-6xl` where it clips, ensure containers use `overflow-x-clip` where needed). No business-logic changes — presentation only.

## Files likely touched

- `src/assets/audience-enterprise-new.jpg` (new)
- `src/components/tech59/Audience.tsx`
- `src/components/tech59/Hero.tsx` (likely)
- Possibly `Programme.tsx`, `Packages.tsx`, `Venue.tsx` depending on what the screenshots reveal
