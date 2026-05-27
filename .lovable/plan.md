## Refine "Who it's for" section

### Tabs (in this order)

1. **Enterprise** — CTA: `Get a Booth`
   - Benefit: "Connect with Vietnam's rising tech stars."
2. **Founder** — CTA: `Get a Booth`
   - Benefit: "Showcase your product. Meet investors. Get users."
3. **Investor** — CTA: `Get My Spot`
   - Benefit: "Find the next unicorn before anyone else."
4. **Innovator** — CTA: `Get My Spot`
   - Benefit: "Discover what's next and meet the builders making it." *(placeholder — easy to tweak later)*
5. **Attendee** — CTA: `Get My Spot`
   - Benefit: "Network, learn, and get inspired."

Removes the previous "Tech Talent" tab and renames things to match your list.

### Per-persona background images

- Add an `image` field to each tab in `src/components/tech59/Audience.tsx`.
- Create 5 placeholder asset files in `src/assets/`, all initially reusing the existing `audience-bg.jpg` so the layout works immediately:
  - `audience-enterprise.jpg`
  - `audience-founder.jpg`
  - `audience-investor.jpg`
  - `audience-innovator.jpg`
  - `audience-attendee.jpg`
- The benefit card renders `cur.image` as the background `<img>` instead of the single shared `audienceBg`. When you later drop in new files at those same paths, each tab will show its own image automatically.
- Keep the existing opacity (50%) and gradient overlays so text stays readable.

### Out of scope

- No changes to the "Built for you" headline, the icon benefit grid below, or any other section.
