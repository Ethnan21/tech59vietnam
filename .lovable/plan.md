## Refactor Programme section

**File:** `src/components/tech59/Programme.tsx`

### Content changes

Replace real speakers/topics with placeholder copy. Two days kept.

**Day 1 — Thu 16 Jul · VIP Night** (single evening track, drafted copy):
- 6:00 PM — Arrival · Guest check-in & welcome drinks
- 7:00 PM — Opening Toast · Hosted by Tech59 Summit
- 7:30 PM — VIP Dinner · Curated tasting menu with speakers & partners
- 8:30 PM — Fireside Chat · Intimate conversation with a headline guest *(speaker TBA)*
- 9:15 PM — Networking Lounge · Connect with founders, investors & operators
- 10:30 PM — Afterparty · Live set & late-night drinks

**Day 2 — Fri 17 Jul** (from attached Excel, times as shown):
| Start | End | Activity |
|-------|------|----------|
| 8:00 | 9:00 | Registration & Coffee |
| 9:00 | 9:10 | Opening Remarks |
| 9:10 | 9:20 | Topic 1 |
| 9:20 | 9:30 | Topic 2 |
| 9:30 | 9:40 | Topic 3 |
| 9:40 | 10:15 | Topic 4 |
| 10:15 | 10:50 | Topic 5 |
| 10:50 | 11:25 | Topic 6 |
| 11:25 | 12:00 | Topic 7 |
| 12:00 | 1:30 | Lunch break |
| 1:30 | 2:05 | Topic 7 |
| 2:05 | 2:40 | Topic 8 |
| 2:40 | 3:10 | Workshop 1 |
| 3:10 | 3:40 | Workshop 2 |
| 3:40 | 4:00 | Conclude & Takeaway |

All Day 2 topics use placeholder copy like *"Session title coming soon — talk description placeholder."*

### Layout changes (smaller, scannable, with reveal control)

- Reduce heading from `text-5xl md:text-7xl` to `text-4xl md:text-5xl`.
- Compact timeline rows: each row becomes a single-line summary (time range · tag · title) at `text-sm`, padding `p-3 md:p-4`, smaller timeline dot.
- Drop the large two-column `text-3xl` time block; show `8:00 – 9:00` inline as tabular-nums.
- Use shadcn **Accordion** (already in `ui/accordion.tsx`) so each item is collapsed by default and expands to reveal the placeholder description. Header shows time + title; chevron makes the expand affordance obvious.
- Above the list, add a small helper line: *"Tap any session to expand details"* with a chevron icon, so the interaction is discoverable.
- Add **Expand all / Collapse all** toggle button (top-right of the list) for users who want everything at once.
- Day tabs unchanged in behavior, slightly smaller (`px-4 py-2 text-[11px]`).

### Out of scope
- No nav/route changes, no other sections touched.
- No new assets, tokens, or animations beyond existing ones.
- Real speaker data not reintroduced — all copy is placeholder.
