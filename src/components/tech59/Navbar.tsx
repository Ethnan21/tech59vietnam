import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import brandLogo from "@/assets/tech59-hero-logo-white.png";

const links = [
  { label: "About", href: "#about" },
  { label: "Packages", href: "#packages" },
  { label: "Agenda", href: "#agenda" },
  { label: "Venue", href: "#venue" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="container mt-4">
        <nav className="glass-strong rounded-2xl px-4 md:px-5 py-3 flex items-center justify-between gap-3">
          <a href="#" className="flex items-center gap-2 font-display font-bold text-lg shrink-0">
            <span className="h-8 w-8 rounded-full bg-brand grid place-items-center overflow-hidden p-1">
              <img src={brandLogo} alt="TECH59" className="h-full w-full object-contain" />
            </span>
            <span>TECH<span className="text-gradient">59</span></span>
          </a>
          <ul className="hidden md:flex items-center gap-5 lg:gap-7 text-sm text-muted-foreground">
            {links.map(l => (
              <li key={l.href}><a href={l.href} className="hover:text-foreground transition-colors">{l.label}</a></li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <Button variant="hero" size="sm" asChild className="hidden sm:inline-flex">
              <a href="https://lu.ma/bde1n8vo" target="_blank" rel="noopener noreferrer">Register</a>
            </Button>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen(o => !o)}
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl glass hover:bg-muted/40 transition-colors"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
        <div
          id="mobile-nav"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${open ? "max-h-[420px] mt-2 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="glass-strong rounded-2xl p-4 flex flex-col gap-1">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <Button variant="hero" size="sm" asChild className="mt-2 w-full">
              <a href="https://lu.ma/bde1n8vo" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Register</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
