Plan: Update the Agenda Workshops section

Scope: Only the Day 2 Workshop track in `src/components/tech59/Programme.tsx`. Main Stage and Day 1 stay untouched. No breaks will be added.

Data changes

1. Change the workshop track header to: `WORKSHOPS (1h each)` (desktop and mobile tabs).
2. Update `workshopStage` array with the schedule image. Replace the existing `tag: "Workshop N"` with the organiser name, and set the `title` to the workshop theme from the schedule. Add a concise one-sentence `description` per workshop.

Proposed workshop content (for your review):

- **09:45 — Osome — Regional Expansion & Scaling**  
  A practical look at the legal, financial and operational foundations for scaling a startup across new markets in Southeast Asia.

- **11:00 — SkyMavis — Building High-Performance Software Teams**  
  Explore the team structures, rituals and culture that help product and engineering teams ship reliably at scale.

- **13:15 — Qapita — Managing Ownership & Employee Equity for Startups**  
  A founder-focused session on cap tables, equity plans and employee ownership from early stage through growth.

- **14:20 — Airwallex — Global Payments Made Simple**  
  See how modern treasury and cross-border payment tools remove friction when collecting and paying money internationally.

- **15:30 — Alcura — Developing Engineering Talent**  
  Learn frameworks for sourcing, upskilling and retaining engineering talent in Vietnam's competitive tech market.

Formatting changes

- Keep the existing `SlotList` glass cards, timeline line and hover effects.
- Slightly refine the organiser pill: increase horizontal padding to give the name a bit more presence, while keeping the same uppercase tracking and colour treatment so it fits the dark/glass theme.
- Keep the time on the left, organiser pill above the title, and the one-sentence description below.
- Ensure the mobile tab label changes to `Workshops` so the header and tab match.

Verification

- Open the preview and scroll to the Agenda section, check the Day 2 Workshop track for all five updated cards and consistent styling.