# Update Agenda — Main Event details + expandable sessions

## 1. Replace Main Stage data with the PDF agenda

Rewrite the `mainStage` array in `src/components/tech59/Programme.tsx` to match the draft agenda exactly (times, segment tags, titles), and extend the `Slot` type to carry richer details:

```ts
type Person = { name: string; title: string };
type Slot = {
  start: string;
  tag: string;          // Segment (e.g. "Gaming", "AI", "Keynote")
  title: string;        // Session Title
  description?: string; // 1-sentence summary (workshops + new for main stage)
  keynote?: Person[];
  panelists?: Person[];
  moderator?: Person;
};
```

New main stage slots (titles preserved verbatim from PDF, 1-sentence descriptions written to match existing concise style):

- 08:00 Registration & Coffee — Networking & Partner Exhibition
- 09:00 Opening Remarks — Introduction to TECH59 and Vietnam's Innovation Ecosystem (Greg Ohan, Thuy Hoang)
- 09:10 Welcoming Remarks — Government HCMC Welcome
- 09:15 Welcoming Remarks — Welcome Address from QTSC IT Park
- 09:20 Keynote: Vietnam Outlook — Vietnam Next Decade: Investment, Innovation and Economic Opportunity (Mike Kokalari)
- 09:40 Corporate Diplomacy — Navigating Trade, Investment & Vietnam's Next Growth Chapter (4 panelists + moderator Hang Vu)
- 10:05 Gaming — Beyond Entertainment: Gaming as a New Economic Engine
- 10:40 EdTech — Learning in the Age of AI: Reimagining Education for the Future Workforce
- 11:15 Venture Capital — The Future of Venture Capital in Southeast Asia: Why Vietnam Matters
- 12:00 Lunch Break — Networking Lunch & Partner Exhibition
- 13:15 AI — From Generative AI to Agentic AI: How AI is Transforming Business & Society
- 13:50 Real Estate & Tech — Building for Innovation: What Technology Companies Need from the Next Generation Workplace
- 14:25 Fashion Tech — From Factory to Consumer: How Technology is Transforming Global Fashion
- 15:00 Outsourcing & Talent — Beyond Outsourcing: Vietnam's Journey Toward a World-Class Technology & Talent Hub
- 15:45 Conclusion & Takeaways — Key Insights, Future Outlook & Closing Remarks

Each topical session carries the full keynote / panelists / moderator lists from the PDF (including "(TBC)" suffixes preserved). Break / registration / closing rows have no people block and stay non-expandable.

## 2. Make each session card expandable

Refactor the inner card in `SlotList` so any slot with `description`, `keynote`, `panelists`, or `moderator` becomes a `<button>` that toggles an expanded panel underneath. Reuse the existing chevron pattern from the Day1/Day2 accordion for visual consistency (small `ChevronDown` rotating 180° at the right of the card, same easing/duration). Closed state = current look exactly. Open state reveals:

- 1-sentence description (if present)
- "Keynote" / "Speakers" / "Panelists" / "Moderator" mini-sections, each rendered as a tight list of `Name — Title` lines using the same muted typography already used for `description`
- Same `grid-rows-[0fr]→[1fr]` smooth-height transition pattern already in `Programme.tsx`

Slots without any extra detail (Registration, Lunch, Closing) render as today — no chevron, not clickable. Workshops keep their existing description and also become expandable (placeholder for speakers later).

State is local: `const [openIdx, setOpenIdx] = useState<number | null>(null)` per `SlotList` so only one card is open at a time within a track.

## 3. Visual separation between Main Stage and Workshops

In `Day2Tracks` desktop split, wrap the workshops column in a subtly tinted panel so the divide reads at a glance while still flowing with the page:

- Replace the current `lg:border-l` treatment with a rounded container: `rounded-2xl p-6 bg-gradient-to-b from-primary/[0.06] via-secondary/[0.04] to-transparent ring-1 ring-primary/15`
- Keep the existing `TrackHeader` and `SlotList compact` inside
- On mobile, apply the same tinted background only when the Workshops tab is active so the two tracks feel distinct without breaking the tab UX
- All tokens stay semantic (`primary`, `secondary`, `accent`) so it inherits the site palette — no hardcoded colors

## 4. Out of scope

- No changes to Day 1, Hero, Navbar, StickyCTA, Venue, or any other section
- No new dependencies; reuse `ChevronDown` from `lucide-react` already imported
- Speaker order and "(TBC)" markers copied verbatim from the PDF; no editorial rewrites
