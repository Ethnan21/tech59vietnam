# Mobile Optimisation Plan

Goal: smooth, no-spillover mobile experience. All changes scoped to mobile via responsive prefixes (`md:`) or `md:hidden` / `hidden md:flex` toggles — desktop visuals stay identical.

## 1. Navbar — add mobile menu
File: `src/components/tech59/Navbar.tsx`
- Keep the desktop `<ul className="hidden md:flex …">` exactly as is.
- Add a mobile-only hamburger button (`md:hidden`) using `lucide-react` `Menu` / `X` icons.
- On tap, toggle a dropdown panel that slides down inside the same `glass-strong` nav container. The panel lists the same links stacked, with the Register button at the bottom; closes on link tap.
- Use local `useState` (no router/state lib). Add `aria-expanded`, `aria-controls`, focus styles.
- Shrink the Register button to `size="sm"` only on the smallest widths if space is tight; otherwise keep it where it is and only collapse the link list.

## 2. Hero — stop horizontal spillover
File: `src/components/tech59/Hero.tsx`
- Negative/positive hard-coded offsets push content past the viewport on 390px. Gate them to `md+`:
  - `-ml-[8%]` → `md:-ml-[8%]`
  - Logo `mx-[70px] pr-[20px]` → `md:mx-[70px] md:pr-[20px]` (mobile uses no extra margin so logo fills `max-w-2xl` but stays inside container).
  - `mx-[25px]` on the three sub-blocks → `md:mx-[25px]` (rely on container padding on mobile).
- "Powered by" pill: allow wrap (already `flex-wrap`); shrink logos via `h-5 md:h-7` if needed and reduce gap on mobile (`gap-3 md:gap-5`).
- Location line: remove `whitespace-nowrap` on mobile (`md:whitespace-nowrap`) so the long Vietnamese address can wrap.
- Add `overflow-x-clip` on the root `<section>` to absolutely contain blurred orbs.

## 3. Packages — tame the wide table
File: `src/components/tech59/Packages.tsx`
- Table is `min-w-[920px]` inside `overflow-x-auto`; on mobile, add a small "Swipe →" hint above the table (mobile-only, `md:hidden`) so users discover horizontal scroll. Table itself unchanged.
- Ensure the wrapping `Reveal` doesn't clip shadows by keeping `overflow-hidden` only on `md+` (`md:overflow-hidden`) so the scroll container behaves correctly. (Verify; only adjust if it causes clipping.)

## 4. Global overflow guard
File: `src/index.css` (or `src/App.tsx` root)
- Add `html, body { overflow-x: hidden; }` (or `overflow-x-clip` on the top-level wrapper) as a safety net against any stray blurred-orb spillover. This is harmless on desktop.

## 5. StickyCTA — avoid covering content on small screens
File: `src/components/tech59/StickyCTA.tsx`
- Reduce padding on mobile (`px-4 py-3 md:px-6 md:py-4`) and tighten offset (`bottom-4 right-4 md:bottom-6 md:right-6`) so it doesn't crowd the viewport.

## 6. Minor responsive nits
- `Hero` h1 logo: ensure `w-full` parent doesn't overflow once mobile margins are removed (already constrained by `container`).
- `Audience.tsx` headline `text-3xl md:text-6xl` is fine; no change.
- No content, copy, or desktop layout changes.

## Verification
- Resize preview to 390×754 and 360×800; scroll the full page; confirm no horizontal scrollbar appears and the mobile dropdown opens/closes.
- Resize to 1280+; confirm desktop is pixel-identical to current.

## Out of scope
- Visual redesign, copy changes, animation rework, new sections.
