import heroLogo from "@/assets/tech59-hero-logo-white.png";

export const Footer = () => (
  <footer className="border-t border-border/50 py-10">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <img src={heroLogo} alt="TECH59 Summit Vietnam" className="h-7 w-auto object-contain" />
      </div>
      <div className="text-center md:text-right">
        <div>Henry Nguyen — Leasing & Event Manager · <a className="text-foreground hover:text-accent" href="mailto:henry.nguyen@thesentry.com.vn">henry.nguyen@thesentry.com.vn</a></div>
        <div className="text-xs mt-1">Powered by The Sentry · SPARK Hub · AVV</div>
      </div>
    </div>
  </footer>
);
