## Workshop Layout Fix

### Problem
Workshop slots with logos currently render in a 3-part horizontal row: time (left) | logo (middle, large with empty padding) | title (right). The logo image has built-in transparent padding on all sides, wasting space and pushing the title far to the right.

### Solution
Restructure the `SlotCard` layout for logo-bearing workshop slots so that:
1. The **time remains in the left column** (unchanged width/alignment).
2. The **logo moves into the main content column**, positioned at the top.
3. The **title sits directly beneath the logo**, allowing text to overlap/nest into the logo's padded empty space.
4. The logo image uses a negative margin or tighter bounding to visually remove the excess padding.

This collapses the previous 3-column feel into a cleaner 2-column layout: time on the left, everything else on the right.

### File to Change
- `src/components/tech59/Programme.tsx` — `SlotCard` component markup and Tailwind classes for logo slots.

### Visual Reference
See attached screenshot — the Osome logo sits in a large padded box between the time and the title text.