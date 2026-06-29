## Plan: Refine Attendee Packages Section

### Scope
Single-file update to `src/components/tech59/Packages.tsx`.

### Changes

1. **Center-align the section header**
   - Change the `Reveal` wrapper around the heading from left-aligned to `mx-auto text-center`.
   - Keep both labels: `⚡ Attendee Packages` and `Pick your pass`.

2. **Swap card positions**
   - Render **VIP Pass** first (left column) and **Standard Pass** second (right column) in the `md:grid-cols-2` grid.

3. **Make Standard Pass the hero card**
   - Apply the current VIP styling to Standard: `glass-strong`, accent ring + glow shadow, gradient title text, "Most Popular" badge at top-center, hero variant CTA button.
   - Change price to **FREE** with a smaller sub-line: **"till July 17"**.

4. **Mute the VIP card**
   - Move it to the `glass` subtle styling, no badge, no gradient text, no strong glow.
   - Keep price as **"Invitation Only"**.
   - Use an outline or secondary CTA button instead of the hero button.

5. **Preserve accessibility & motion**
   - Each card remains an `<article>` with `<h3>`.
   - Lists stay `<ul>/<li>`.
   - CTAs remain real `<a>` anchors with `target="_blank" rel="noopener noreferrer"`.
   - Keep `motion-safe` hover lift and `focus-within` ring.

### Result
The section will read as a centered, two-tier offer where the free Standard Pass is the clear call-to-action, while the invitation-only VIP Pass sits beside it in a more reserved style.