export const Footer = () => (
  <footer className="border-t border-border/50 py-10">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-2 font-display font-bold text-foreground">
        <span className="h-7 w-7 rounded-md bg-brand grid place-items-center text-primary-foreground text-xs">T</span>
        TECH<span className="text-gradient">59</span> Summit Vietnam 2026
      </div>
      <div className="text-center md:text-right">
        <div>Henry Nguyen — Leasing & Event Manager · <a className="text-foreground hover:text-accent" href="mailto:henry.nguyen@thesentry.com.vn">henry.nguyen@thesentry.com.vn</a></div>
        <div className="text-xs mt-1">Powered by The Sentry · SPARK Hub · AVV</div>
      </div>
    </div>
  </footer>
);
