## Goal
Tighten the workshop descriptions, keep the Agenda typography consistent, and clean up the bottom-right CTA button.

## Changes

### 1. Workshop descriptions (~50% shorter)
In `src/components/tech59/Programme.tsx`, replace each `workshopStage` description with a concise one-sentence version:

- **Osome** — "Legal, financial and operational foundations for scaling across Southeast Asia."
- **SkyMavis** — "Build engineering teams that ship reliably at scale."
- **Qapita** — "Cap tables, equity plans and employee ownership for growing startups."
- **Airwallex** — "Simplify cross-border payments and treasury for international operations."
- **Alcura** — "Source, upskill and retain engineering talent in Vietnam."

These keep the original meaning while cutting word count by roughly 40–55% per workshop.

### 2. Consistent Agenda typography & spacing
Review the `SlotList` component and workshop track to ensure the font sizes, line heights, and gaps feel uniform after the text is shortened. Keep the existing token classes (`font-display`, `text-xs`, `text-sm`, `text-muted-foreground`, etc.) and glass-card styling. If anything looks too tight or loose once the descriptions shrink, adjust the vertical spacing inside the card (e.g., `gap-1` vs `gap-1.5`) and the description line height slightly, staying within the same type scale as the rest of the agenda.

### 3. Remove the pulse dot from the sticky CTA
In `src/components/tech59/StickyCTA.tsx`, remove the two-span pulse-ring indicator that appears before the "Get Your Pass" text. Keep the wording and the right-arrow icon so the button becomes text-only plus the arrow.

## Files to edit
- `src/components/tech59/Programme.tsx`
- `src/components/tech59/StickyCTA.tsx`