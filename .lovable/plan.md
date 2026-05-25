## Goal
Update the Audience section with unique CTA copy per group and add an Attendee group. Remove the "Program" link from the Navbar since that section was merged into Experience.

## Changes

### 1. `src/components/tech59/Audience.tsx`
- Add a `cta` and `href` field to each tab object.
- Add a fifth tab: **Attendee** with "Be where the future is built." and CTA "Secure Your Spot".
- Update benefit copy:
  - **Founders**: "Showcase your product. Meet investors. Find your first 1,000 users." — CTA: "Secure a Booth"
  - **Investors**: "Discover the next unicorn before the rest of the market." — CTA: "Partner with Us"
  - **Enterprises**: "Partner with Vietnam's most promising tech companies." — CTA: "Secure a Booth"
  - **Tech Talent**: "Join the teams building the future." — CTA: "Secure Your Spot"
  - **Attendee**: "Be where the future is built. Network, learn, and get inspired." — CTA: "Secure Your Spot"
- Render the current tab's CTA text on the button dynamically (`cur.cta`).

### 2. `src/components/tech59/Navbar.tsx`
- Remove the `{ label: "Program", href: "#program" }` entry from the `links` array.