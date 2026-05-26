import { Button } from "@/components/ui/button";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Audience", href: "#audience" },
  { label: "Packages", href: "#packages" },
  { label: "Venue", href: "#venue" },
];

export const Navbar = () => (
  <header className="fixed top-0 inset-x-0 z-50">
    <div className="container mt-4">
      <nav className="glass-strong rounded-2xl px-5 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="h-8 w-8 rounded-lg bg-brand grid place-items-center text-white">T</span>
          <span>TECH<span className="text-gradient">59</span></span>
        </a>
        <ul className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map(l => (
            <li key={l.href}><a href={l.href} className="hover:text-foreground transition-colors">{l.label}</a></li>
          ))}
        </ul>
        <Button variant="hero" size="sm" asChild>
          <a href="#register">Register</a>
        </Button>
      </nav>
    </div>
  </header>
);
