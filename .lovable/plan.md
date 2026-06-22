## Workshop section refinements

### 1. Upload the 4 company logos as CDN assets
Use `lovable-assets` to upload each PNG from `/mnt/user-uploads/` (Osome, SkyMavis, Qapita, Airwallex) → `src/assets/workshops/<name>.png.asset.json`. The raw PNGs are not added to the repo.

### 2. Extend the `Slot` data shape (workshops only)
Add an optional `logo?: { src: string; alt: string }` field on the workshop entries in `workshopStage`:
- 09:45 → Osome logo
- 11:00 → SkyMavis logo
- 13:15 → Qapita logo
- 14:20 → Airwallex logo
- 15:30 → keep `tag: "Alcura"` text (no logo)

### 3. Render the logo in place of the tag pill in `SlotCard`
Where the `tag` chip currently renders, branch:
- If `s.logo` exists → render `<img src={s.logo.src} alt={s.logo.alt} className="h-5 md:h-6 w-auto object-contain" />` (no pill background, so the white-on-dark logos read cleanly).
- Else → keep the existing tag pill.

Sizing tuned so logos sit at the same visual height as the existing uppercase tag chip; spacing/alignment unchanged so main stage formatting is untouched.

### 4. Make workshop cards expandable on click (no chevron)
Currently workshops use `alwaysExpanded` (description always visible, not clickable). Switch the workshop `SlotList` calls (both mobile and desktop, lines 531 & 545) from `alwaysExpanded` to the normal expandable mode, but hide the chevron globally for workshops via a new prop `hideChevron`:
- `SlotList` and `SlotCard` get an optional `hideChevron?: boolean` prop, threaded through.
- In `SlotCard`, when `hideChevron` is true, do not render the `<ChevronDown>` icon, but keep `expandable` true so the whole card is a clickable button that toggles the description open/closed (same animation as the main stage).
- Remove the `alwaysExpanded` usages from the two workshop `SlotList` instances.

Result: workshop card shows time + logo (or "Alcura" text) + title. Click anywhere on the card → description slides open, same as main stage cards. No chevron icon.

### Files touched
- `src/components/tech59/Programme.tsx` — data updates, `Slot` type, `SlotCard`/`SlotList` props, two call sites.
- `src/assets/workshops/osome.png.asset.json`, `skymavis.png.asset.json`, `qapita.png.asset.json`, `airwallex.png.asset.json` — new asset pointers.

No changes to main stage behavior, background, or any other section.
