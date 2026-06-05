import heroLogo from "@/assets/tech59-hero-logo-white.png";
import { Mail } from "lucide-react";

const contacts = [
  {
    name: "Maisy Vo",
    title: "Event Leader",
    email: "events@thesentry.com.vn",
  },
  {
    name: "Henry Nguyen",
    title: "Leasing & Event Manager",
    email: "henry.nguyen@thesentry.com.vn",
  },
  {
    name: "General Enquiries",
    title: "TECH59 Team",
    email: "hello.events@thesentry.com.vn",
  },
];

export const Footer = () => (
  <footer className="border-t border-border/50 py-16">
    <div className="container">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12">
        <img
          src={heroLogo}
          alt="TECH59 Summit Vietnam"
          className="h-20 md:h-24 w-auto object-contain -ml-2"
        />
        <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Powered by{" "}
          <a
            href="https://thesentry.com.vn/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors underline-offset-4 hover:underline"
          >
            The Sentry
          </a>{" "}
          · SPARK Hub ·{" "}
          <a
            href="https://avv.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors underline-offset-4 hover:underline"
          >
            AVV
          </a>
        </div>
      </div>

      <p className="text-muted-foreground text-sm max-w-xl leading-relaxed mb-10 whitespace-pre-line">
        {"\n"}
      </p>

      <div className="space-y-3 mb-12">
        {contacts.map((c) => (
          <div
            key={c.email}
            className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm group"
          >
            <span className="font-semibold text-foreground/90">{c.name}</span>
            <span className="text-muted-foreground/60">·</span>
            <span className="text-xs uppercase tracking-wider text-muted-foreground">
              {c.title}
            </span>
            <span className="text-muted-foreground/60">·</span>
            <a
              href={`mailto:${c.email}`}
              className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-accent transition-colors"
            >
              <Mail className="h-3 w-3" />
              {c.email}
            </a>
          </div>
        ))}
      </div>

      <div className="pt-8 border-t border-border/30 text-xs text-muted-foreground/70 text-center md:text-right">
        © {new Date().getFullYear()} TECH59 Summit. All rights reserved.
      </div>
    </div>
  </footer>
);
