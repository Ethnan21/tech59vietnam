## Add Packages section

### New file: `src/components/tech59/Packages.tsx`

A new `<section id="packages">` rendered between Audience and Venue. Built with:

- **Dynamic themed background** mirroring FinalCTA's style: layered `bg-hero` gradient, `grid-bg`, `light-streak`, and a large blurred secondary-color radial glow with `animate-pulse-glow`. `overflow-hidden grain` on the section.
- **Eyebrow + heading** matching other sections:
  - "⚡ Attendee Packages" eyebrow (accent, animate-flicker)
  - Headline: `Pick your pass. <span class="text-gradient-animated">Own the room.</span>`
- **Comparison table** inside a `glass-strong` rounded-3xl wrapper, horizontally scrollable on mobile (`overflow-x-auto scrollbar-thin`). Uses shadcn `Table` primitives.
  - Columns: Feature / Access · VIP Pass · Premium Pass · Standard Pass · Start Up Pass · Partner Pass
  - Rows (exact content from screenshot):
    1. Main Stage Keynotes Access — ✓ / ✓ / ✓ / ✓ / ✓
    2. All Main Stage Panels Access (Gaming, Venture, Edtech, Enterprise) — ✓ / ✓ / ✓ / ✓ / ✓
    3. VIP / Speaker Lounge Access — ✓ / ✓ / ✗ / ✗ / ✗
    4. Coworking Lounge Access — ✓ / ✓ / ✓ / ✗ / ✗
    5. Workshops (Limited 30–40 Pax) — ✓ All Workshops / ✓ 1–2 Workshop / ✗ / ✓ 1 Workshop / ✓ 1 Workshop
    6. Executive Policy Keynotes (Gov / Consulate – 30 Pax) — ✓ Front Seating / ✓ / ✗ / ✗ / By Invitation
    7. After Party Access — ✓ VIP Lounge Area / ✓ / ✓ / ✗ / ✓
    8. VIP Reception (Night Before) — ✓ / ✓ / ✗ / ✗ / By Invitation
    9. Priority Registration & Fast Track Check-in — ✓ / ✓ / ✗ / ✗ / ✓
    10. Lunch Provision — ✓ / ✗ / ✗ / ✗ / ✗
    11. Welcome Gift Bag — ✓ / ✓ / ✗ / ✗ / ✓
    12. **Price** row (highlighted): Exclusive offer / 3,000,000 VND / 1,250,000 VND / 750,000 VND / Exclusive Offer
  - Checkmarks rendered with `Check` icon (accent color), X with `X` icon (muted), inline annotations as small muted text below the check.
  - Header row: column titles use `font-display`, accent color for pass columns. VIP/Premium columns get a subtle gradient tint to highlight tiers.
  - Price row: thicker top border, `font-display` larger text, gradient text for amounts.
- Subtle Reveal animations on heading and table.

### Edit: `src/components/tech59/Navbar.tsx`

Add `{ label: "Packages", href: "#packages" }` to the links array between Audience and Venue.

### Edit: `src/pages/Index.tsx`

Import `Packages` and render `<Packages />` between `<Audience />` and `<Venue />`.

### Out of scope

No changes to design tokens, other sections, or pricing logic. No backend.
