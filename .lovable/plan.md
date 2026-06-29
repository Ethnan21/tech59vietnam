## Update Main Stage Agenda

Update `src/components/tech59/Programme.tsx` `mainStage` array to match the "Mainstage Agenda" tab of the uploaded workbook. No styling, layout, or component changes — data only.

### Changes per slot

1. **08:00** Registration — unchanged.
2. **09:00 – 09:10** Opening Remarks — title becomes "Opening morning address and welcome"; keynote = **Greg Ohan** only (remove Thuy Hoang).
3. **09:10** Government HCMC Welcome — unchanged.
4. **09:15** QTSC Welcome — unchanged.
5. **09:20 – 09:40** Vietnam Outlook keynote (Mike Kokalari) — unchanged.
6. **09:40 – 10:20** Corporate & Tech Diplomacy — unchanged (time updated).
7. **10:20 – 10:55** Gaming — panelists replaced with:
   - Jeffrey Zirlin — Co-Founder, Sky Mavis
   - Kevin Duong — CTO, GAMOTA
   - TBC Representatives
   (Moderator Josh Warland unchanged.)
8. **10:55 – 11:35** EdTech — replace 4th panelist with **Sumona BasuMajumdar — Chapter Lead (Vietnam), She Loves Data** (remove Jana Marlé-Zizková).
9. **11:35 – 12:15** Venture Capital — keynote becomes **Navvin Kumar Kirupanandan — Senior Director, Gobi Partners**. Panelists cleaned to:
   - Adrian Latortue — Partner, Ascend Vietnam Ventures (AVV)
   - Ian Kim — Investment Associate, The Ventures (TBC)
   - Navvin Kumar Kirupanandan — Senior Director, Gobi Partners
   (Remove duplicate/blank entries. Moderator Kai Zen Theng unchanged.)
10. **12:15 – 13:00** NEW Keynote — "Global Tech Ecosystems & Vietnam: HCMC as a Magnetic City", keynote **Dan Herma — Executive Advisor, Innovation Policy & Global Ecosystems**. Tag: "Keynote: HCMC & Global Tech Ecosystems".
11. **13:00 – 13:15** NEW Welcome back Remarks — "Afternoon address and Welcome back", keynote **Thuy Hoang — COO, Co-Founder, TECH59**.
12. **13:15 – 14:00** AI panel — keynote becomes **Dr. Michael Liebmann — Co-Founder, CEO, Dream Lab AI**. Panelists:
    - Kai Yong — Partner & Co-Founder, GenAI
    - Johnny Le — CEO, DigiEX
    - Dr. Miro Nguyen — Co-founder, VanguardX
    - Peter Dang — Senior Solutions Architect, Alibaba Cloud
    - Dr. Michael Liebmann — Co-Founder, CEO, Dream Lab AI
    (Remove Angel Hsu. Moderator Sam Waldo unchanged.)
13. **14:00 – 14:40** PropTech (rename tag from "Real Estate & Tech" to **"PropTech"**) — content unchanged; remove "(TBC)" from John Zhao per sheet.
14. **Remove Fashion Tech (14:25)** — no longer in the agenda.
15. **14:40 – 15:20** Outsourcing & Talent — update Tran Nhan Quy title to **"CEO, Zühlke Vietnam"** (was General Manager). Other panelists unchanged.
16. **15:20 – 15:45** Conclusion & Takeaways — unchanged content, time updated.

### Removal of stale "lunch break" entry
The new sheet has no explicit 12:00 Lunch row (replaced by the 12:15 keynote + 13:00 welcome back). Remove the existing `12:00 Lunch Break` entry from `mainStage`.

### Out of scope
- Workshops list, Day 1, styling, component structure, and the workshop-logo pill positioning all stay as-is.
- The trailing "15:45 – 16:45 Workshop TBC" row in the sheet is a workshop, not main stage — not added to `mainStage`.
