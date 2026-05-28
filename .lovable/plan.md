## Refinements

### Both mobile & desktop

1. **Hero logo soft glow** (`Hero.tsx`)
   - Strengthen the existing halo behind the hero logo: add a third, larger soft glow layer using `bg-secondary/20` + `blur-[120px]` so a clear, soft glow always sits behind the logo (not only on animation peak).

2. **Sticky "Get Your Pass" CTA — slower, premium pulse** (`StickyCTA.tsx`)
   - Replace `animate-pulse-glow` (3s) and `animate-pulse-ring` with custom inline duration styles slowed to ~6s ease-in-out so the flash feels calmer and more premium.

3. **Contact emails — allow copy on hover** (`FinalCTA.tsx`)
   - The card is currently a full `<a href="mailto:">`, so hover-drag selection of the email text is blocked. Restructure each card: keep the card as a non-link container, move the `mailto:` link to a small "Email" action button/icon, and render the email address as plain selectable text with `select-all cursor-text` so users can highlight and copy without triggering the mail client.

### Mobile only

4. **Venue section order on mobile** (`Venue.tsx`)
   - Currently the image is `order-1` on mobile (above everything). Change so on mobile the order becomes: title + subtitle → image → facts cards ("QTSC IT Park" etc.) → button. Desktop two-column layout stays unchanged.
   - Implementation: split the right column — title/subtitle become `order-1 lg:order-2`, image becomes `order-2 lg:order-1`, facts + button stay as `order-3 lg:order-2` (or move title into its own grid item).

5. **Smooth out moving partner logos** (`Partners.tsx` / `index.css`)
   - The marquee glitches on mobile because the inner row uses `gap-6` on mobile but the duplicated copy assumes equal widths — and the animation lacks GPU hints. Fixes:
     - Add `will-change: transform`, `transform: translateZ(0)`, and `backface-visibility: hidden` to the marquee track (via a utility class in `index.css`).
     - Ensure both row copies use identical gap/padding at every breakpoint (already match, but enforce by removing the mobile-specific `gap-6 sm:gap-12` mismatch on the wrapper — keep gap consistent across copies).
     - Slightly slow the mobile animation (e.g. 120s on mobile, 90s desktop) so jitter from sub-pixel rounding is less perceptible.

6. **Contact section — smaller mobile typography** (`FinalCTA.tsx`)
   - Reduce contact card sizes on mobile so "Get in touch" headline remains the focal point:
     - Name `text-2xl md:text-3xl` → `text-lg sm:text-2xl md:text-3xl`
     - Card padding `p-7 md:p-8` → `p-4 sm:p-7 md:p-8`
     - Icon box `h-12 w-12` → `h-9 w-9 sm:h-12 sm:w-12`
     - Title chip `text-xs` → `text-[10px] sm:text-xs`
     - Email `text-sm md:text-base` → `text-xs sm:text-sm md:text-base`
     - Tighten grid gap on mobile `gap-5` → `gap-3 sm:gap-5`

### Files to change
- `src/components/tech59/Hero.tsx`
- `src/components/tech59/StickyCTA.tsx`
- `src/components/tech59/FinalCTA.tsx`
- `src/components/tech59/Venue.tsx`
- `src/components/tech59/Partners.tsx`
- `src/index.css` (marquee GPU hint utility)

Desktop layout for Venue, Partners, and Contact remains unchanged except for the universal items (hero glow, CTA pulse speed, copyable emails).
