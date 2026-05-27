Two visual tweaks to the Contact section (`FinalCTA.tsx`):

1. **Center-align the "Send Enquiry" button** — currently left-aligned inside the form. Change the wrapper from `inline-block` to a centered flex container.

2. **Tone down the button styling** — it currently uses the same `variant="hero"` + glowing `bg-brand` halo as the main "Get Your Pass" CTA. Change to a lower-emphasis variant (e.g., `variant="outlineGlow"`) and remove the pulse-glow halo so it no longer competes visually with the primary Register/Get Your Pass CTAs.

No other files touched. No new dependencies.