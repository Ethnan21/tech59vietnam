## Summary
Slow the hover animation on Experience cards for a premium feel, and update three card titles/subtexts.

## Changes

### 1. Hover timing (Experience cards)
Increase transition durations on the four top experience cards:
- Card lift/shadow/border: `700ms` → `1200ms`
- Image zoom: `2000ms` → `4000ms`
- Light streak fade-in: `700ms` → `1200ms`
- Title gradient shift: `transition-all` inherits card duration

### 2. Card content updates

| Current Title | New Title | New Subtext |
|---|---|---|
| Keynote Speeches | Keynote speeches & Panel | Insights from industry leaders and expert panels. |
| Startup Pitch | Live Workshops | Hands-on sessions with real-world applications. |
| Exhibitor Booths | Exhibitor Booths | Discover the latest innovations and products. |
| Networking | Networking | *(no change)* |

## Files
- `src/components/tech59/Experience.tsx`
