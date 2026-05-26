## New sections for the TECH59 site

Two new sections matching the existing dark/glass/gradient aesthetic (Space Grotesk display, glass cards, animated gradient accents, `Reveal` scroll animations).

---

### 1. About Us — new component `src/components/tech59/About.tsx`

Inserted in `src/pages/Index.tsx` **between `<Stats />` and `<WhyAttend />`**.

Two-column layout (matches the reference screenshot's text-left / visual-right split, but rendered in the site's dark glass style):

- **Left column** — kicker `⚡ About Us`, headline `Vietnam's leading tech & startup community.` (with one gradient phrase), then two short paragraphs adapted from the pptx:
  - "Founded in 2024 by **The Sentry**, **SPARK Hub**, and **Ascend Vietnam Ventures (AVV)** — Tech59 connects founders, investors, innovators, and global players shaping Vietnam's innovation economy."
  - "More than a network, it's a launchpad. Through monthly gatherings and the flagship summit, Tech59 drives collaboration, deal flow, and market entry across Southeast Asia."
  - A small "Powered by" row with three text/badge chips: The Sentry · SPARK Hub · AVV.
- **Right column** — a tall glass card with a pull-quote:
  > "We are not just building a community. We are shaping the future of Vietnam's innovation economy."
  
  Subtle animated gradient backdrop + grain (re-using existing `glass-strong`, `text-gradient-animated`, `grain`, `light-streak` utilities). No external image — keeps the modern dark-website feel rather than the photo block in the reference.

Section padding: `pt-12 pb-24` to flow naturally from Stats.

---

### 2. Programme — added inside `src/components/tech59/Experience.tsx`

A new block rendered **below the 4 format cards and above the "Ten tracks" themes grid**, styled as a vertical timeline matching the reference screenshot's left-aligned time / chip / title / speakers layout but in the dark glass style.

Structure per row:
```
[ time ]  ●——  [PILL TAG]   Session title
                            Speakers / moderator (muted)
```

- Vertical accent line (gradient `from-primary/40 via-secondary/40 to-accent/40`) running down the left.
- Each row uses `Reveal` with staggered delay.
- Pill tag uses the accent color in a small rounded chip (`text-[10px] uppercase tracking-widest`), matching the existing theme cards.
- Two day-tabs at the top: **Day 1 — Thu 16 Jul** / **Day 2 — Fri 17 Jul** (client-side toggle, no routing). Defaults to Day 1.

Header for the block:
- Kicker `⚡ Programme`
- Headline `Two days. <gradient>Every conversation that matters.</gradient>`
- Small note: `*Agenda is subject to change`

Day 1 entries (from the uploaded agenda screenshot):
- 8:30 AM · Check-in — Check-in & Welcome Guests
- 9:00 AM · Opening Remarks — Stella Sevegran (Vice Chair, NordCham Vietnam); H.E. Pekka Voutilainen (Ambassador of Finland to Vietnam)
- 9:10 AM · Keynote #1 — Vietnam Is Changing Fast: What It Means for How Organizations Must Perform — Bui Thi Ninh (Deputy General Director, VCCI-HCM)
- 9:25 AM · Fireside Chat #1 — From Growth to Complexity: Leadership and Talent in Vietnam's Next Chapter — Dr. Marcus Wittner (JP contagi ASIA); Moderator: David Nguyen (NordCham)
- 9:45 AM · Panel #1 — AI in Practice: Trust, Ownership, and How Work Is Changing — Linh Pham (LOGIVAN / FreightPilot.AI), Gary C Tate (Lead With AI); Moderator: Mads Werner (Ekko)
- 10:05 AM · Panel #2 — The Structuring Success: How Nordic Companies Build High-Performing Teams — Andrew Khan (Carlsberg Vietnam), Sandra Andersson (Lindström); Moderator: David Nguyen (NordCham)

Day 2 placeholder entries (afternoon/next-day continuation derived from the summit format — clearly marked "Programme continues — full lineup announced soon" with 2–3 teaser rows: Startup Pitch Finals, Tech Tours, VIP Closing Night). Easy to swap once final agenda is provided.

---

### Technical detail

**Files**
- New: `src/components/tech59/About.tsx`
- New: `src/components/tech59/Programme.tsx` (kept separate for clarity, imported and rendered inside `Experience.tsx` between the format grid and themes grid — so it visually belongs to the Experience section as requested)
- Edit: `src/components/tech59/Experience.tsx` — import + render `<Programme />` between the two existing blocks
- Edit: `src/pages/Index.tsx` — import `About` and place `<About />` after `<Stats />`

**Reused tokens/utilities** (no new CSS needed): `glass`, `glass-strong`, `text-gradient-animated`, `grain`, `light-streak`, `Reveal`, `bg-brand`, container, accent colors.

**Programme data shape**
```ts
type Slot = { time: string; tag: string; title: string; people?: string; moderator?: string };
const day1: Slot[] = [ ... ];
const day2: Slot[] = [ ... ];
```
Day toggle via `useState<'day1'|'day2'>('day1')`, with two pill buttons styled like the existing nav chips.

No changes to other sections, design tokens, routing, or business logic.
