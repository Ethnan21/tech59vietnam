# Core Themes — two-column on mobile

File: `src/components/tech59/Experience.tsx` (themes grid, ~line 81)

- Change the grid from `grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4` to `grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4`.
- Tighten card padding on mobile: `p-6` → `p-4 sm:p-6` so two cards fit cleanly at 390px.
- Shrink the title slightly on mobile so long theme names don't overflow: `text-xl` → `text-base sm:text-xl`.
- Keep all desktop breakpoints (`sm`, `lg`, `xl`) and styling untouched.

No changes to copy, animation, or the "Who it's for" section.
