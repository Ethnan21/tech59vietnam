import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import heroLogoUrl from "@/assets/tech59-hero-logo-white.png";
import heroBgUrl from "@/assets/hero-bg.jpg";

// Preload LCP assets as early as possible (before React mounts).
// The hashed URLs from Vite aren't discoverable by the HTML preload scanner,
// so we inject <link rel="preload"> tags at module-eval time.
const injectPreload = (href: string, as: "image", fetchPriority: "high" | "low" = "high") => {
  const l = document.createElement("link");
  l.rel = "preload";
  l.as = as;
  l.href = href;
  (l as HTMLLinkElement & { fetchPriority?: string }).fetchPriority = fetchPriority;
  document.head.appendChild(l);
};
injectPreload(heroLogoUrl, "image", "high");
injectPreload(heroBgUrl, "image", "high");

createRoot(document.getElementById("root")!).render(<App />);
