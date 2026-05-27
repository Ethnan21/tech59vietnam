# Plan

## 1. Stats section (`src/components/tech59/Stats.tsx`)

- Update numbers:
  - 1,900+ Attendees
  - 1,000+ Investors
  - 1,500+ Tech Brands
  - 600+ Startups
- Add a centered eyebrow above the stats card: `Tech59 2025's Impact` (small uppercase, tracked, accent color — matching existing eyebrow style used elsewhere).

## 2. Programme section (`src/components/tech59/Programme.tsx`)

Replace `day1` and `day2` slot data with vague, unconfirmed placeholders. Keep existing accordion/timeline UI.

**Day 1 — VIP Reception Night — Thursday, 16 July** (2 slots, 6–9 PM)
- 6:00 PM · Check-in · Registration, Coffee & Networking
- 7:00 PM · Opening · Opening Remarks, Drinks & Dinner

**Day 2 — Main Event — Friday, 17 July** (7 slots, 8 AM – 5 PM)
- 8:00 AM · Check-in · Registration & Coffee
- 9:00 AM · Opening Remarks · Welcome to Tech59 Summit 2026
- 9:30 AM · Keynote · Featured Speaker *(speakers & topic to be announced)*
- 12:00 PM · Break · Lunch & Networking
- 1:30 PM · Panel Discussion · Industry Leaders Roundtable *(panelists & topic to be announced)*
- 3:00 PM · Workshop · Interactive Session *(details to be announced)*
- 4:30 PM · Closing · Conclusion & Key Takeaways

Update both day labels to "Day 1 — VIP Reception · Thu 16 Jul" and "Day 2 — Main Event · Fri 17 Jul". Remove `people`/`moderator` fields where not applicable; keep vague subtext only where it adds context.

## Files changed
- `src/components/tech59/Stats.tsx`
- `src/components/tech59/Programme.tsx`
