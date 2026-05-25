## Logo updates

### 1. Save the uploaded logo
Copy `user-uploads://ChatGPT_Image_May_25_2026_04_15_59_PM.png` to `src/assets/tech59-logo.png` so it can be imported as an ES6 module.

### 2. Navbar logo (inside the circle)
In `src/components/tech59/Navbar.tsx`:
- Import the new logo
- Replace the "T" letter inside the `h-8 w-8 rounded-lg bg-brand` square with an `<img>` of the logo, sized to fit (e.g. `h-5 w-5 object-contain`), keeping the gradient background as requested
- Keep the "TECH59" wordmark text next to it untouched

### 3. Hero headline → official logo
In `src/components/tech59/Hero.tsx`:
- Remove the two text spans ("TECH59" gradient text + "SUMMIT / 2026")
- Replace the `<h1>` content with an `<img>` of the official logo (which already reads "Tech59 Summit Vietnam"), sized responsively (e.g. `max-w-3xl w-full h-auto`) with proper `alt="TECH59 Summit Vietnam"` for SEO
- Keep the H1 wrapper for semantic SEO (visually-hidden text "TECH59 Summit Vietnam 2026" or use alt on img inside h1)
- Keep the tagline "Where the future of tech is decided." and everything below unchanged

### Out of scope
No other copy, layout, color, or section changes.
