## Changes to `src/components/tech59/Audience.tsx`

1. **Heading**: Change "Built for builders." → "Built for **you.**" (keep gradient on "you").

2. **Eyebrow / label**: Replace the eyebrow line above the heading with `⚡ I'm a...` so users immediately know to pick a tab. (Keeps "Who it's for" intent but turns it into an actionable prompt right above the tab row.)

3. **Tab interaction**: Remove `onMouseEnter` switching — only switch on click. Add a richer hover effect on inactive tabs: subtle lift (`hover:-translate-y-0.5`), accent border glow, and a soft shadow. Active tab keeps current bold styling.

4. **Shortened CTAs**:
   - Founders: "Secure a Booth" → **"Get a Booth"**
   - Investors: "Partner with Us" → **"Partner Up"**
   - Enterprises: "Secure a Booth" → **"Get a Booth"**
   - Tech Talent: "Secure Your Spot" → **"Get My Spot"**
   - Attendee: "Secure Your Spot" → **"Get My Spot"**

No structural changes elsewhere.