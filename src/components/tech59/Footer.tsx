import heroLogo from "@/assets/tech59-hero-logo-white.png";

export const Footer = () => (
  <footer className="border-t border-border/50 py-12">
    <div className="container flex flex-col md:flex-row items-center md:items-center justify-between gap-6 text-sm text-muted-foreground">
      <img
        src={heroLogo}
        alt="TECH59 Summit Vietnam"
        className="h-20 md:h-24 w-auto object-contain shrink-0"
      />
      <div className="text-center md:text-right leading-relaxed">
        <div className="text-foreground font-medium">{"\n"}</div>
        <div className="mt-1">
          <a className="hover:text-accent transition-colors" href="mailto:henry.nguyen@thesentry.com.vn">
            
          </a>
        </div>
        <div className="tracking-wide uppercase text-muted-foreground/80 text-xs my-[8px] mt-0 mb-[10px]">
          Powered by The Sentry · SPARK Hub · AVV
        </div>
      </div>
    </div>
  </footer>
);
