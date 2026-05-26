import { Reveal } from "./Reveal";

export const About = () => (
  <section id="about" className="pt-12 pb-24 relative">
    <div className="container grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <Reveal>
        <p className="text-xs uppercase tracking-widest text-accent mb-3 animate-flicker">⚡ About Us</p>
        <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.9] mb-6">
          Vietnam's leading <span className="text-gradient-animated">tech & startup</span> community.
        </h2>
        <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
          <p>
            Founded in 2024 by <span className="text-foreground font-medium">The Sentry</span>,{" "}
            <span className="text-foreground font-medium">SPARK Hub</span>, and{" "}
            <span className="text-foreground font-medium">Ascend Vietnam Ventures (AVV)</span> — Tech59 connects
            founders, investors, innovators, and global players shaping Vietnam's innovation economy.
          </p>
          <p>
            More than a network, it's a launchpad. Through monthly gatherings and the flagship summit, Tech59 drives
            collaboration, deal flow, and market entry across Southeast Asia.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mr-2">Powered by</span>
          {["The Sentry", "SPARK Hub", "AVV"].map((n) => (
            <span key={n} className="glass rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-foreground/90">
              {n}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal variant="scale" delay={120}>
        <div className="relative glass-strong rounded-3xl p-8 md:p-12 overflow-hidden grain">
          <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-secondary/20 blur-[120px] pointer-events-none animate-pulse-glow" />
          <div className="absolute -bottom-24 -left-24 w-[360px] h-[360px] rounded-full bg-accent/15 blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 light-streak opacity-40 pointer-events-none" />
          <div className="relative">
            <div className="font-display text-6xl md:text-8xl leading-none text-gradient-animated mb-4">"</div>
            <p className="font-display text-2xl md:text-3xl leading-tight text-foreground/95">
              We are not just building a community.{" "}
              <span className="text-gradient-animated">We are shaping the future of Vietnam's innovation economy.</span>
            </p>
            <div className="mt-8 pt-6 border-t border-border/50 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Tech59 · Est. 2024</span>
              <span className="text-xs uppercase tracking-[0.25em] text-accent">HCMC → SEA</span>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
