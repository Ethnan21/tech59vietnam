## Update SEO & metadata for TECH59 Summit 2026

The Hero already shows **16–17 July 2026**, but several metadata/SEO surfaces still carry the old "2,000+ / 23–24 July" copy. Update them to match: **Thu 16 – Fri 17 July 2026, Ho Chi Minh City, 500+ attendees, 20+ speakers**.

### Files to change

**1. `index.html`** — JSON-LD `Event` block
- `startDate`: `2026-07-23` → `2026-07-16`
- `endDate`: `2026-07-24` → `2026-07-17`
- `description`: replace "2,000+ founders…" with "500+ founders, investors, innovators and 20+ speakers gathering in Ho Chi Minh City on 16–17 July 2026."
- Update sitewide `<meta name="description">` and `og:description`/`twitter:description` to the same new copy so Google snippet and social cards refresh.

**2. `src/pages/Index.tsx`**
- Replace runtime `<meta name="description">` content: "Join 500+ founders, investors & innovators and 20+ speakers at TECH59 Summit 2026 in Ho Chi Minh City. 16–17 July 2026."
- Keep the existing `document.title`.

**3. `public/llms.txt`**
- Replace "23–24 July 2026" → "16–17 July 2026" in the summary line.
- Replace "2,000+ founders, investors, and innovators" → "500+ founders, investors, innovators and 20+ speakers".

**4. `public/sitemap.xml`** — add `<lastmod>2026-05-29</lastmod>` on the home URL so crawlers know to re-fetch.

### Not changing
- `Hero.tsx` already shows "16–17 July 2026" ✅
- `Stats.tsx` is labeled "TECH59 2025 IMPACT" (historical recap of prior edition) — out of scope.
- `Venue.tsx` "20,000+" refers to QTSC IT Park's on-site professional/student population, not summit attendees — out of scope.

### After deploy
Google's snippet (the screenshot) refreshes only on next crawl. Once changes go live, the user can request re-indexing in Search Console; social cards (LinkedIn/Slack/FB) cache aggressively — they may need to use each platform's "scrape again" / inspector tool to force a refresh.
