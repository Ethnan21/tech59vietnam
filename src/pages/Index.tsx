import { Navbar } from "@/components/tech59/Navbar";
import { Hero } from "@/components/tech59/Hero";
import { Stats } from "@/components/tech59/Stats";
import { WhyAttend } from "@/components/tech59/WhyAttend";
import { Audience } from "@/components/tech59/Audience";
import { Experience } from "@/components/tech59/Experience";
import { Venue } from "@/components/tech59/Venue";
import { Partners } from "@/components/tech59/Partners";
import { Program } from "@/components/tech59/Program";
import { FinalCTA } from "@/components/tech59/FinalCTA";
import { Footer } from "@/components/tech59/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "TECH59 Summit 2026 — Vietnam's Premier Tech Conference";
    const meta = document.querySelector('meta[name="description"]') ?? document.head.appendChild(Object.assign(document.createElement('meta'), { name: 'description' }));
    (meta as HTMLMetaElement).content = "Join 2,000+ founders, investors & innovators at TECH59 Summit 2026 in Ho Chi Minh City. 23–24 July 2026.";
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <WhyAttend />
      <Audience />
      <Experience />
      <Venue />
      <Partners />
      <Program />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
