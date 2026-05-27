## Contact as its own section + Register CTA + Luma links

### 1. Navbar (`src/components/tech59/Navbar.tsx`)
- Add **`{ label: "Contact", href: "#contact" }`** to the `links` array, right after Venue.
- Change the top-right CTA button:
  - Label: "Contact" → **"Register"**
  - `href`: `#contact` → **`https://lu.ma/bde1n8vo`**
  - Add `target="_blank" rel="noopener noreferrer"` so it opens in a new tab.

### 2. Keep Contact (`FinalCTA`) as a standalone section
- No structural change to `src/pages/Index.tsx` — `<FinalCTA />` already renders below Venue, so it becomes the "Contact" section the nav points to.
- `src/components/tech59/FinalCTA.tsx` already has `id="contact"` — no change needed.
- Light refinement to keep it visually distinct as a section (tighten spacing / ensure scroll anchor lands cleanly under the fixed navbar). No content rewrite.

### 3. Point all pass / register CTAs to the Luma link

Replace `href="#register"` with `https://lu.ma/bde1n8vo` (open in new tab, `target="_blank" rel="noopener noreferrer"`) in:
- `src/components/tech59/Hero.tsx` — "Get Your Pass" button
- `src/components/tech59/Venue.tsx` — "Register Now" button
- `src/components/tech59/StickyCTA.tsx` — floating "Get Your Pass" pill
- `src/components/tech59/Audience.tsx` — dynamic per-audience CTA

The "Become a Partner" button (Hero → `#partners`) and other in-page anchors are unchanged. The Contact form's mailto submit is unchanged.

### Files touched
- `src/components/tech59/Navbar.tsx`
- `src/components/tech59/Hero.tsx`
- `src/components/tech59/Venue.tsx`
- `src/components/tech59/StickyCTA.tsx`
- `src/components/tech59/Audience.tsx`

No new dependencies, no backend changes.
