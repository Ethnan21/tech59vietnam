## Plan: Sync agenda content to latest PDFs

Single-file edits in `src/components/tech59/Programme.tsx`, plus a new logo asset for sixonefour labs (614).

### Main Stage (`mainStage`)
- **10:20 Gaming** — replace panelist `TBC Representatives` with `Dru Nguyen — Co-founder, GAM Entertainment`.
- **13:15 AI** — remove panelist `Peter Dang — Senior Solutions Architect, Alibaba Cloud` (now 4 panelists: Kai Yong, Johnny Le, Dr. Miro Nguyen, Dr. Michael Liebmann).
- **PropTech / Outsourcing / Closing time shifts** to match PDF:
  - `14:00` PropTech → unchanged start time (now 14:00–14:45 in PDF, only start displayed).
  - `14:40` Outsourcing & Talent → `14:45`.
  - `15:20` Conclusion → `15:25`.
- Keynote/welcome rows and titles already match — no changes.

### Workshop Stage (`workshopStage`)
- **Osome (09:45)** — title `Regional Expansion & Scaling` → `Singapore Incorporation Masterclass: Business beyond borders`.
- **Qapita (13:15)** — title → `Managing Everything Related To Ownership & Employee Equity for Start Ups`.
- **Airwallex (14:20)** — title → `Global Payments Made Simple: Connecting Businesses Across Borders`.
- **Last workshop** — change `15:30` → `15:25`, swap `Alcura` for `sixonefour labs`, keep title `Developing Engineering Talent`, and attach a 614 logo so it renders with the same blue pill background as the other workshop logos.

### 614 logo asset
- Upload `user-uploads://1777859343483-removebg-preview.png` via `lovable-assets` to create `src/assets/workshops/sixonefour.png.asset.json` (mirrors existing osome/skymavis/qapita/airwallex pattern).
- Import it in `Programme.tsx` and pass as the `logo` prop on the new sixonefour labs slot so `SlotCard` renders the existing glass pill + image treatment unchanged.

### Out of scope
- No layout, styling, or component changes — only text/data and the one added logo asset import.
