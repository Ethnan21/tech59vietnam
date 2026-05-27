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
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <Reveal variant="left" className="order-2 lg:order-1">
          <a
            href="https://www.google.com/maps/search/?api=1&query=10.8541178%2C106.62671689999999&query_place_id=ChIJj0zszP4rdTERozRxepzAFn"
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
        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-accent mb-3 animate-flicker">⚡ The Venue</p>
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.9] mb-5">
              Vietnam's <span className="text-gradient-animated">tech capital</span>.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              QTSC IT Park · Orbital 2.0 Tower. Where Vietnam builds.
            </p>
          </Reveal>
          <div className="space-y-3 mb-8">
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
          <Reveal>
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

