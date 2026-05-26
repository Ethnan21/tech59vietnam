import { Reveal } from "./Reveal";

export const About = () => (
  <section id="about" className="pt-12 pb-24 relative">
    <div className="container grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
      <Reveal>
        <p className="text-xs uppercase tracking-widest text-accent mb-3 animate-flicker">⚡ About Us</p>
        <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.9] mb-6">
          What is <span className="text-gradient-animated">Tech59</span>?
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
      </Reveal>

      <Reveal variant="scale" delay={120}>
        <div className="relative glass-strong rounded-3xl p-6 md:p-8 overflow-hidden grain">
          <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-secondary/20 blur-[120px] pointer-events-none animate-pulse-glow" />
          <div className="absolute -bottom-24 -left-24 w-[360px] h-[360px] rounded-full bg-accent/15 blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 light-streak opacity-40 pointer-events-none" />
          <div className="relative flex gap-4 md:gap-5 min-h-[240px]">
            <div className="shrink-0 w-[3px] rounded-full bg-gradient-to-b from-primary via-secondary to-accent" />
            <div className="flex-1 flex flex-col">
              <span aria-hidden="true" className="font-display text-6xl md:text-7xl leading-none text-gradient-animated -mt-1 mb-1 select-none">“</span>
              <div className="flex-1 flex items-center">
                <p className="font-sans text-lg md:text-xl font-medium leading-relaxed text-foreground/90">
                  We are not just building a community.{" "}
                  <span className="text-gradient-animated italic">We are shaping the future of Vietnam's innovation economy.</span>
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-end">
                <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Tech59 · Est. 2024</span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
