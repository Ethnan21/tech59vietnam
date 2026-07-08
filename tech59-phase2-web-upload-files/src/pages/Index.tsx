import { lazy, Suspense, useEffect } from "react";
import { Navbar } from "@/components/tech59/Navbar";
import { Hero } from "@/components/tech59/Hero";
import { Stats } from "@/components/tech59/Stats";
import { About } from "@/components/tech59/About";
import { Experience } from "@/components/tech59/Experience";
import { StickyCTA } from "@/components/tech59/StickyCTA";
import { DeferredSection } from "@/components/tech59/DeferredSection";

const Venue = lazy(() => import("@/components/tech59/Venue").then(m => ({ default: m.Venue })));
const Partners = lazy(() => import("@/components/tech59/Partners").then(m => ({ default: m.Partners })));
const FinalCTA = lazy(() => import("@/components/tech59/FinalCTA").then(m => ({ default: m.FinalCTA })));
const Footer = lazy(() => import("@/components/tech59/Footer").then(m => ({ default: m.Footer })));

const Index = () => {
  useEffect(() => {
    document.title = "TECH59 Summit 2026 — Vietnam's Premier Tech Conference";
    const meta = document.querySelector('meta[name="description"]') ?? document.head.appendChild(Object.assign(document.createElement('meta'), { name: 'description' }));
    (meta as HTMLMetaElement).content = "Join 500+ founders, investors & innovators and 20+ speakers at TECH59 Summit 2026 in Ho Chi Minh City. 17 July 2026.";
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Experience />
      <DeferredSection id="venue" minHeight={760}>
        <Suspense fallback={null}>
          <Venue />
        </Suspense>
      </DeferredSection>
      <DeferredSection id="partners" minHeight={1000}>
        <Suspense fallback={null}>
          <Partners />
        </Suspense>
      </DeferredSection>
      <DeferredSection id="contact" minHeight={960}>
        <Suspense fallback={null}>
          <FinalCTA />
        </Suspense>
      </DeferredSection>
      <DeferredSection id="footer" minHeight={320}>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </DeferredSection>
      <StickyCTA />
    </main>
  );
};

export default Index;
