## Mobile-only refinements

All edits are gated by mobile-only Tailwind classes (default = mobile, `md:` overrides keep desktop unchanged).

### 1. Hero — "Powered by" row fits on one line (`Hero.tsx`)
- Change wrapper from `flex-wrap` + `rounded-2xl md:rounded-full` to single-line: `flex-nowrap rounded-full`, allow horizontal compression with `min-w-0`.
- Shrink mobile logo heights: `h-5 md:h-7` → `h-4 md:h-7`; reduce mobile gaps `gap-3 md:gap-5` → `gap-2 md:gap-5`; shrink "Powered by" label letter-spacing on mobile.
- Show the small divider pipes on mobile too (or keep hidden) so all 3 logos line up in one row.

### 2. Stats — numbers no longer clip (`Stats.tsx` / `StatCounter.tsx`)
- Reduce mobile font: `text-5xl md:text-7xl` → `text-3xl sm:text-5xl md:text-7xl`.
- Reduce card padding on mobile: `p-8 md:p-12` → `p-5 sm:p-8 md:p-12`, and inner gap `gap-8` → `gap-4 sm:gap-8`.
- Add `truncate`/`tabular-nums` already present; ensure container has no overflow clip.

### 3. Audience — "Why" benefits two-up on mobile (`Audience.tsx`)
- Grid: `grid sm:grid-cols-2 lg:grid-cols-4 gap-5` → `grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5`.
- Card padding `p-7` → `p-4 sm:p-7`; icon box `h-14 w-14` → `h-10 w-10 sm:h-14 sm:w-14`; title `text-2xl` → `text-base sm:text-2xl`; desc unchanged but allow tighter leading.

### 4. Packages — swipe affordance + smaller mobile fonts (`Packages.tsx`)
- Make the "Swipe to compare →" hint more prominent on mobile: larger text, accent color, subtle pulse animation; add a small chevron icon.
- Add a right-edge gradient fade on the scroll container (mobile only) to visually suggest more content.
- Shrink mobile table: text `text-sm` → `text-xs sm:text-sm`; reduce row padding `px-5 py-4` → `px-3 py-3 sm:px-5 sm:py-4`; price font `text-lg`/`text-base` → `text-sm sm:text-lg`.
- Reduce min table width slightly on mobile (`min-w-[760px] md:min-w-[920px]`).

### 5. Venue — image first on mobile (`Venue.tsx`)
- Currently uses `order-2 lg:order-1` (image) and `order-1 lg:order-2` (text) — image is already second on mobile.
- Flip mobile order so image comes first: `order-1 lg:order-1` for image block, `order-2 lg:order-2` for text block.

### 6. Partners — smaller logos, "Featured in" fits in 2 rows (`Partners.tsx`)
- Trusted-by marquee: shrink logo box on mobile — `h-20`→`h-12 sm:h-20`, `max-h-16`→`max-h-9 sm:max-h-16`, gap `gap-12`→`gap-6 sm:gap-12`.
- Featured-in grid: change from `grid-cols-2 sm:grid-cols-4 lg:grid-cols-8` to `grid-cols-4 sm:grid-cols-4 lg:grid-cols-8` (8 logos → 2 rows of 4 on mobile); shrink logos `max-h-12 md:max-h-14` → `max-h-7 sm:max-h-12 md:max-h-14`; tighten gaps `gap-x-8 gap-y-10` → `gap-x-3 gap-y-5 sm:gap-x-8 sm:gap-y-10`; reduce panel padding `p-8` → `p-4 sm:p-8`.

### Notes
- No copy changes, no desktop-breakpoint changes (all `md:`/`lg:` values preserved).
- No business logic or component restructuring beyond order swap in Venue.
