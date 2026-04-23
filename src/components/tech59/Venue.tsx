import venueImg from "@/assets/venue.jpg";
import { MapPin, Building2, Users } from "lucide-react";

const facts = [
  { icon: Building2, k: "QTSC IT Park", v: "Ho Chi Minh City's largest tech ecosystem" },
  { icon: Users, k: "20,000+", v: "professionals across enterprises, startups & gov" },
  { icon: MapPin, k: "Orbital 2.0 Tower", v: "Modern, scalable event venues built for tech" },
];

export const Venue = () => (
  <section id="venue" className="py-24 relative">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative rounded-3xl overflow-hidden glass-strong order-2 lg:order-1">
          <img src={venueImg} alt="QTSC IT Park & Orbital 2.0 Tower" loading="lazy" width={1280} height={800}
            className="w-full h-full object-cover aspect-[4/3]" />
          <div className="absolute bottom-4 left-4 glass-strong rounded-xl px-4 py-2 text-sm">
            <MapPin className="inline h-4 w-4 text-accent mr-1" /> QTSC, Ho Chi Minh City
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-xs uppercase tracking-widest text-accent mb-3">The Venue</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-5">
            Hosted in Vietnam's <span className="text-gradient">tech capital</span>.
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            QTSC IT Park, anchored by the Orbital 2.0 Tower, is Ho Chi Minh City's premier destination for tech events — connecting local talent, global industry leaders, and the opportunities being built in Vietnam.
          </p>
          <div className="space-y-4">
            {facts.map(({ icon: Icon, k, v }) => (
              <div key={k} className="flex items-start gap-4 glass rounded-xl p-4">
                <span className="h-10 w-10 rounded-lg bg-brand grid place-items-center shrink-0">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </span>
                <div>
                  <div className="font-semibold">{k}</div>
                  <div className="text-sm text-muted-foreground">{v}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
