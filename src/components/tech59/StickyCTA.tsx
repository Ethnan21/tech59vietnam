import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export const StickyCTA = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 800 && window.scrollY < document.body.scrollHeight - window.innerHeight - 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="https://lu.ma/bde1n8vo"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Register for TECH59 Summit"
      className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 inline-flex items-center gap-2 bg-brand text-primary-foreground font-semibold rounded-full px-4 py-3 md:px-6 md:py-4 text-sm md:text-base shadow-[0_0_50px_hsl(258_90%_66%/0.7)] animate-pulse-glow transition-all duration-500 hover:scale-110 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-primary-foreground/70 animate-pulse-ring" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-foreground" />
      </span>
      Get Your Pass
      <ArrowRight className="h-4 w-4" />
    </a>
  );
};
