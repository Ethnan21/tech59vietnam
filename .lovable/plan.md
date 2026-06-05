# Form polish + footer refresh

## 1. EnquiryForm — autofill fix
Browsers paint a hard white `-webkit-autofill` background over inputs, breaking the glass look. Fix in `src/index.css` with a global rule scoped to the form inputs:
- `-webkit-box-shadow: 0 0 0 1000px hsl(var(--background) / 0.5) inset` to override the yellow/white fill
- `-webkit-text-fill-color: hsl(var(--foreground))` so typed text stays readable
- `transition: background-color 9999s ease-out` fallback
- `caret-color: hsl(var(--primary))`

Apply to `input:-webkit-autofill`, `:hover`, `:focus`, `:active` variants.

## 2. EnquiryForm — subtle dynamic effects
Keep it tasteful, no overkill:
- Inputs/textarea/select trigger: add `focus-within` lift — `hover:border-primary/40`, `focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.12)]`, smooth `transition-all duration-300`
- Labels: gain `transition-colors` and turn `text-primary` when the field is focused (via `peer`/`group` or `focus-within` on FormItem)
- Card container: very gentle hover glow — animate the existing gradient overlay opacity from 1 → 1.2 on hover
- Submit button: keep existing hero variant; add a soft shimmer sweep on hover using a pseudo-element gradient already common in the codebase
- Wrap the form in a single `Reveal` (already done in FinalCTA) — no extra entrance animations per field to avoid noise

## 3. Footer — match attached layout
Reference screenshot: left side shows the TECH59 logo only; right side shows "POWERED BY THE SENTRY · SPARK HUB · AVV" on one line. Below that, two clean lines for team contacts.

Rewrite `src/components/tech59/Footer.tsx`:
- Top row: logo (left) + "POWERED BY THE SENTRY · SPARK HUB · AVV" small uppercase tracked text (right), vertically centered
- Middle block: tagline paragraph (current "Vietnam's premier tech gathering…")
- Contacts block: 2 lines, each one row:
  - `Maisy Vo — Event Leader — events@thesentry.com.vn`
  - `Henry Nguyen — Leasing & Event Manager — henry.nguyen@thesentry.com.vn`
  - Plus the third address `hello.events@thesentry.com.vn` as a general line (confirm with user if needed — see Open question)
  - Format: name in foreground weight, title in muted, email as accent-hover link, separated by a thin divider dot `·`
- Remove the "Event Leadership" / "General Enquiries" column headings entirely
- Bottom: copyright line `© 2026 TECH59 Summit. All rights reserved.` centered or right-aligned
- Keep border-top, generous spacing, theme tokens only (no raw colors)

## Open question
The user said "2 separate lines for Henry and then Maisy" — that covers two of the three emails. Should `hello.events@thesentry.com.vn` get its own third line, or be dropped from the footer (still receives form submissions either way)? Plan currently includes it as a third line; will adjust on confirmation.

## Files touched
- `src/index.css` — autofill override block
- `src/components/tech59/EnquiryForm.tsx` — focus/hover classes, label transitions
- `src/components/tech59/Footer.tsx` — full rewrite to new layout

No backend, schema, or edge-function changes.
