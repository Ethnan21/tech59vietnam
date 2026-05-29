## Update Day 2 programme — Main Stage + Workshop Stage

Rework Day 2 in `src/components/tech59/Programme.tsx` to show two parallel tracks side-by-side on desktop and stacked (tabbed) on mobile, using the schedule from the screenshot. Day 1 (VIP Reception) stays unchanged.

### New Day 2 data

**Main Stage** (start derived from previous end time)
- 08:30–09:00 · Check-in · Registration & Coffee
- 09:00–09:10 · Opening · Opening Remarks — Introduction about TECH59
- 09:10–09:30 · Keynote · Government Speech
- 09:30–10:05 · Topic 1 · Gaming
- 10:05–10:40 · Topic 2 · Corporate Diplomacy
- 10:40–11:15 · Topic 3 · AI
- 11:15–12:00 · Topic 4 · VC Investment
- 12:00–13:15 · Break · Lunch & Networking
- 13:15–13:50 · Topic 5 · Real Estate & Tech
- 13:50–14:25 · Topic 6 · Fashion Tech
- 14:25–15:00 · Topic 7 · Outsourcing
- 15:00–15:45 · Topic 8 · EdTech
- 15:45–16:00 · Closing · Conclusion & Key Takeaways

**Workshop Stage** (speakers TBC where noted)
- 09:45–10:45 · Workshop 1 · Tech Talent Development & Recruiting — Mr. Son Le
- 10:45–11:00 · Break
- 11:00–12:00 · Workshop 2 · Building Software Teams — Sky Mavis
- 12:00–13:15 · Break · Lunch & Networking
- 13:15–14:15 · Workshop 3 · To be announced soon
- 14:15–14:20 · Break
- 14:20–15:20 · Workshop 4 · To be announced soon
- 15:20–15:30 · Break
- 15:30–16:30 · Workshop 5 · To be announced soon

### Layout

- Show time as a **range** (e.g. `09:30–10:05`) instead of a single start time so both stages line up visually.
- Day 2 panel renders two stacked sub-sections with a header pill labelling each track:
  - **Desktop (`lg:`)**: two-column grid (`lg:grid-cols-2`), each track is its own timeline. Subtle vertical divider between them.
  - **Mobile/tablet**: a small tab switcher at top of the Day 2 panel (`Main Stage` / `Workshop`) so users see one track at a time — avoids cramming two stacked timelines and keeps it scannable. Default tab: Main Stage.
- Reuse existing `SlotList` styling (glass card, timeline rail, tag pill). Slight tweaks:
  - Shrink time column on mobile (`md:w-[140px]` → `w-[110px]`) to fit ranges cleanly.
  - Break/Lunch rows get a muted variant (lower opacity, smaller card) so they don't compete with sessions.
- Day 1 keeps its current single-track layout (only 2 slots, no need for changes).

### Files

- `src/components/tech59/Programme.tsx` — restructure Day 2 data into `{ mainStage, workshop }`, add a small `TrackTabs` inside the Day 2 section, render two `SlotList`s. Update `Slot` type to include `endTime` (optional, only Day 2 uses it).

### Not changing

- Day 1 content/layout
- Visual design tokens, accordion behaviour, animations
- Any other section
