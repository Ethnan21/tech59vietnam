import { Reveal } from "./Reveal";
import logo01 from "@/assets/partners/logo-01.png";
import logo02 from "@/assets/partners/logo-02.png";
import logo03 from "@/assets/partners/logo-03.png";
import logo04 from "@/assets/partners/logo-04.png";
import logo05 from "@/assets/partners/logo-05.png";
import logo06 from "@/assets/partners/logo-06.png";
import logo07 from "@/assets/partners/logo-07.png";
import logo08 from "@/assets/partners/logo-08.png";
import logo09 from "@/assets/partners/logo-09.png";
import logo10 from "@/assets/partners/logo-10.png";
import logo11 from "@/assets/partners/logo-11.png";
import logo12 from "@/assets/partners/logo-12.png";
import logo13 from "@/assets/partners/logo-13.png";
import logo14 from "@/assets/partners/logo-14.png";
import logo15 from "@/assets/partners/logo-15.png";
import logo16 from "@/assets/partners/logo-16.png";
import logo17 from "@/assets/partners/logo-17.png";
import logo18 from "@/assets/partners/logo-18.png";
import logo19 from "@/assets/partners/logo-19.png";
import logo20 from "@/assets/partners/logo-20.png";

const logos = [
  { src: logo01, alt: "Partner 1" },
  { src: logo02, alt: "Partner 2" },
  { src: logo03, alt: "Partner 3" },
  { src: logo04, alt: "Partner 4" },
  { src: logo05, alt: "Partner 5" },
  { src: logo06, alt: "Partner 6" },
  { src: logo07, alt: "Partner 7" },
  { src: logo08, alt: "Partner 8" },
  { src: logo09, alt: "Partner 9" },
  { src: logo10, alt: "Partner 10" },
  { src: logo11, alt: "Partner 11" },
  { src: logo12, alt: "Partner 12" },
  { src: logo13, alt: "Partner 13" },
  { src: logo14, alt: "Partner 14" },
  { src: logo15, alt: "Partner 15" },
  { src: logo16, alt: "Partner 16" },
  { src: logo17, alt: "Partner 17" },
  { src: logo18, alt: "Partner 18" },
  { src: logo19, alt: "Partner 19" },
  { src: logo20, alt: "Partner 20" },
];

const LogoRow = () => (
  <div className="flex shrink-0 items-center gap-12 pr-12">
    {logos.map((l, i) => (
      <div key={i} className="flex h-20 items-center justify-center">
        <img
          src={l.src}
          alt={l.alt}
          loading="lazy"
          className="max-h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    ))}
  </div>
);

export const Partners = () => (
  <section id="partners" className="py-24 relative">
    <div className="container">
      <Reveal className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-xs uppercase tracking-widest text-accent mb-3">Trusted by</p>
        <h2 className="font-display text-5xl md:text-6xl font-bold leading-[0.95]">
          Government. Global brands. <span className="text-gradient">Press.</span>
        </h2>
      </Reveal>

      <div
        className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      >
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          <LogoRow />
          <LogoRow />
        </div>
      </div>
    </div>
  </section>
);
