## Rebuild the bottom section as "Contact"

Refactor `src/components/tech59/FinalCTA.tsx` (rename intent to Contact section) and update the nav link in `src/components/tech59/Navbar.tsx`.

### Section structure (top → bottom)

1. **Keep** the "Limited access · Not everyone gets in" glass badge (with flame icon, flicker animation).
2. **Keep** the countdown timer (`<Countdown compact />`) above the form.
3. **Replace** the giant "TECH59 SUMMIT / Be in the room." headline + Register/Talk to team buttons with a new **enquiry form card**.

### Enquiry form

A glass-style card centered max-w-2xl containing:
- Heading: "Get in touch" (font-display, large but smaller than current 9xl headline)
- Subtext: "Send us an enquiry — we'll be in touch."
- Three inputs in a responsive 3-column grid (stacks on mobile):
  - Name (text, required)
  - Email (email, required)
  - Enquiry (short text — single line, required) — the "subject/category" line
- One large `<textarea>` below: "Your enquiry" (required, ~6 rows)
- Submit button (hero variant): "Send Enquiry"

### Behavior

- Use controlled React state (useState) for the 4 fields.
- On submit: build a `mailto:` URL targeting `events@thesentry.com.vn`:
  - `subject` = the Enquiry field value (URL-encoded)
  - `body` = `Name: ...\nEmail: ...\n\n<message>` (URL-encoded via `encodeURIComponent`)
  - `window.location.href = mailto:events@thesentry.com.vn?subject=...&body=...`
- This opens the user's default mail client (Outlook on Windows for the target audience).
- Client-side validation: required fields + simple email regex; show inline error states using existing input styling. No backend, no Lovable Cloud needed.

### Dynamic effects (premium, subtle)

- Wrap section heading, subtext, form card, and button in `<Reveal>` with staggered delays (matching the existing rhythm: 80/180/260/340ms).
- Form card: `glass` background + subtle border, soft shadow, on `:focus-within` a gentle glow ring (using `--primary` token).
- Inputs/textarea: focus ring with smooth transition, subtle background lift on focus.
- Submit button: keep the existing pulsing glow halo behind the hero button (reuse the blur+pulse pattern already used).
- Keep the section's hero gradient bg, grid-bg overlay, light-streak, and the pulsing secondary glow blob behind everything.

### Section id + nav

- Change section id from `register` → `contact`.
- Update `Navbar.tsx`: find any link to `#register` and change to `#contact`; if the nav label is "Register", change to "Contact". (Will verify the exact nav items in build phase.)
- Keep the existing "Limited access" footer line at the very bottom.

### Files touched

- `src/components/tech59/FinalCTA.tsx` — major rewrite of the inner content; keep imports/structure for background layers.
- `src/components/tech59/Navbar.tsx` — update link href/label for the contact section.
- Reuse existing `Input` and `Textarea` shadcn components for consistent styling.

No new dependencies, no backend, no design tokens changed.