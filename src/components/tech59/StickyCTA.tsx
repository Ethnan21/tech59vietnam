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
      href="#register"
      aria-label="Register for TECH59 Summit"
      className={`fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 bg-brand text-primary-foreground font-semibold rounded-full px-6 py-4 shadow-[0_0_40px_hsl(258_90%_66%/0.6)] transition-all duration-500 hover:scale-110 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      Register Now
      <ArrowRight className="h-4 w-4" />
    </a>
  );
};
