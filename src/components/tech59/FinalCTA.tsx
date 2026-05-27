import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Countdown } from "./Countdown";
import { Send, Flame } from "lucide-react";
import { Reveal } from "./Reveal";

const CONTACT_EMAIL = "events@thesentry.com.vn";

export const FinalCTA = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [enquiry, setEnquiry] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = "Required";
    if (!email.trim()) next.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Invalid email";
    if (!enquiry.trim()) next.enquiry = "Required";
    if (!message.trim()) next.message = "Required";
    setErrors(next);
    if (Object.keys(next).length) return;

    const subject = encodeURIComponent(`[TECH59 Enquiry] ${enquiry}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nEnquiry: ${enquiry}\n\n${message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden grain">
      <div className="absolute inset-0 bg-hero opacity-90" />
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 light-streak pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-secondary/25 blur-[160px] animate-pulse-glow" />

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal variant="scale" className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8">
            <Flame className="h-3.5 w-3.5 text-accent animate-flicker" />
            <span className="text-xs uppercase tracking-widest">Limited access · Not everyone gets in</span>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-3 text-gradient-animated text-glow">
              Get in touch
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-base md:text-lg text-foreground/70 mb-8">
              Send us an enquiry — we'll be in touch.
            </p>
          </Reveal>

          <Reveal delay={240} className="flex justify-center mb-10">
            <Countdown compact />
          </Reveal>

          <Reveal delay={320}>
            <form
              onSubmit={handleSubmit}
              className="glass-strong rounded-2xl p-6 md:p-8 text-left border border-primary/20 transition-all duration-500 focus-within:border-primary/50 focus-within:shadow-[0_0_60px_-10px_hsl(217_91%_60%/0.4)]"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Name</label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    maxLength={100}
                    className="bg-background/40 border-primary/20 focus-visible:ring-primary/40 transition-all"
                  />
                  {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Email</label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    maxLength={255}
                    className="bg-background/40 border-primary/20 focus-visible:ring-primary/40 transition-all"
                  />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Enquiry</label>
                  <Input
                    value={enquiry}
                    onChange={(e) => setEnquiry(e.target.value)}
                    placeholder="Partnership, tickets…"
                    maxLength={150}
                    className="bg-background/40 border-primary/20 focus-visible:ring-primary/40 transition-all"
                  />
                  {errors.enquiry && <p className="text-xs text-destructive mt-1">{errors.enquiry}</p>}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Your message</label>
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us more about your enquiry…"
                  rows={6}
                  maxLength={2000}
                  className="bg-background/40 border-primary/20 focus-visible:ring-primary/40 transition-all resize-none"
                />
                {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
              </div>

              <div className="relative inline-block w-full sm:w-auto">
                <span className="absolute inset-0 rounded-xl bg-brand blur-2xl opacity-60 animate-pulse-glow pointer-events-none" />
                <Button type="submit" variant="hero" size="xl" className="relative w-full sm:w-auto">
                  Send Enquiry <Send className="h-5 w-5" />
                </Button>
              </div>
            </form>
          </Reveal>

          <p className="text-xs text-muted-foreground mt-8 uppercase tracking-[0.25em] animate-flicker">
            ⚡ Last edition sold out · Curated audience only
          </p>
        </div>
      </div>
    </section>
  );
};
