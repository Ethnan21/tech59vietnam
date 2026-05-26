## Merge Why Attend into Audience

### 1. `src/components/tech59/Audience.tsx`
- Import `Network, TrendingUp, Cpu, Globe2` from `lucide-react`.
- Add the same `items` array currently in `WhyAttend.tsx` (4 icon/title/desc entries).
- Below the benefit/CTA card (after line 75), add a responsive grid `grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10` rendering the four `glass` cards exactly as styled in `WhyAttend.tsx` (icon tile, title with gradient hover, description), each wrapped in `<Reveal delay={i*90}>`.
- No "Two days. Years of upside." heading — cards sit directly under the CTA card with appropriate spacing.

### 2. `src/components/tech59/Navbar.tsx`
- Remove the `{ label: "Why Attend", href: "#why" }` entry from `links`.

### 3. `src/pages/Index.tsx`
- Remove the `WhyAttend` import and `<WhyAttend />` render.

### 4. Delete `src/components/tech59/WhyAttend.tsx`
- File is no longer referenced.

### Result
Audience section flows: heading → tab buttons → benefit/CTA card → 4 "why attend" feature cards. Nav loses the Why Attend link. No other sections change.
