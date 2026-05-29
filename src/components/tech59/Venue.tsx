import venueImg from "@/assets/venue.jpg";
import { MapPin, Building2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";


const facts = [
  { icon: Building2, k: "QTSC IT Park", v: "HCMC's largest IT & Software hub" },
  { icon: Users, k: "20,000+", v: "Professionals & Students on-site" },
  { icon: MapPin, k: "Orbital 2.0 Tower", v: "Premier tech venue in Vietnam's leading tech hub" },
];

export const Venue = () => {
  return (
  <section id="venue" className="py-24 relative">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
        <Reveal variant="left" className="order-2 lg:order-1">
          <a
            href="https://www.google.com/maps/place/The+Sentry+Q/@10.8541176,106.6266831,19z/data=!4m6!3m5!1s0x31752bfeccec4c8f:0x7016c09c7a7134a3!8m2!3d10.8541178!4d106.6267169!16s%2Fg%2F11xmnv6w1b?entry=ttu&g_ep=EgoyMDI2MDUyNS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block rounded-3xl overflow-hidden glass-strong group"
            aria-label="Open QTSC location in Google Maps"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img src={venueImg} alt="QTSC IT Park & Orbital 2.0 Tower" loading="lazy" width={1280} height={800}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s]" />
            </div>
            <div className="absolute bottom-4 left-4 glass-strong rounded-xl px-4 py-2 text-sm group-hover:text-foreground transition-colors">
              <MapPin className="inline h-4 w-4 text-accent mr-1" /> QTSC, Ho Chi Minh City
            </div>
          </a>
        </Reveal>
        <div className="contents lg:block lg:order-2">
          <Reveal className="order-1 lg:order-none">
            <p className="text-xs uppercase tracking-widest text-accent mb-3 animate-flicker">⚡ The Venue</p>
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.9] mb-5">
              Vietnam's <span className="text-gradient-animated text-slate-50">tech capital</span>.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              QTSC IT Park · Orbital 2.0 Tower. Where Vietnam builds.
            </p>
          </Reveal>
          <div className="space-y-3 mb-8 order-3 lg:order-none">
            {facts.map(({ icon: Icon, k, v }, i) => (
              <Reveal key={k} delay={i * 90} className="flex items-center gap-4 glass rounded-xl p-4 hover:border-primary/40 hover:translate-x-1 transition-all">
                <span className="h-10 w-10 rounded-lg bg-brand grid place-items-center shrink-0">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </span>
                <div>
                  <div className="font-semibold">{k}</div>
                  <div className="text-sm text-muted-foreground">{v}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="order-4 lg:order-none">
            <Button variant="hero" size="lg" asChild>
              <a href="https://lu.ma/bde1n8vo" target="_blank" rel="noopener noreferrer">Register Now <ArrowRight className="h-5 w-5" /></a>
            </Button>
          </Reveal>
        </div>

      </div>

    </div>
  </section>
  );
};

