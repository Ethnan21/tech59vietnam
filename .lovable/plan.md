Replace the contact form in FinalCTA.tsx with two styled contact cards showing team member names, titles, and email addresses. Update booth/partner CTAs to scroll to #contact.

### Changes

**1. FinalCTA.tsx — Replace form with contact cards**
- Remove the form state and validation logic.
- Replace the `<form>` with two side-by-side cards:
  - **Maisy Vo** — Event Leader — `events@thesentry.com.vn`
  - **Henry Nguyen** — Leasing & Event Manager — `henry.nguyen@thesentry.com.vn`
- Use existing site styling: `glass-strong` container, `text-gradient-animated` headings, `font-display`, hover lift with glow shadow, and the `Reveal` animation wrapper.
- Emails are clickable `mailto:` links.

**2. Hero.tsx — "Become a Partner" CTA**
- Change link from `#partners` to `#contact`.

**3. Audience.tsx — Booth CTAs**
- Enterprise tab "Get a Booth" → `#contact`
- Founder tab "Get a Booth" → `#contact`
- Investor, Innovator, Attendee "Get My Spot" tabs stay on Luma (`https://lu.ma/bde1n8vo`).

### Design Notes
- Match the existing card style used in Audience `whyItems` and other glass-strong components.
- Keep the section background, heading, countdown, and footer text unchanged.
