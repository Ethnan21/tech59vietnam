import heroLogo from "@/assets/tech59-hero-logo-white.png";
import { Mail, User } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-border/50 py-16">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
        <div className="space-y-6">
          <img
            src={heroLogo}
            alt="TECH59 Summit Vietnam"
            className="h-24 md:h-28 w-auto object-contain shrink-0 -ml-2"
          />
          <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
            Vietnam's premier tech gathering connecting global innovators, founders, and investors in the heart of Ho Chi Minh City.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-accent font-bold">Event Leadership</h4>
            <div className="space-y-4">
              <div className="group">
                <p className="text-sm font-semibold flex items-center gap-2 mb-1 text-foreground/90">
                  <User className="h-3 w-3 text-primary" /> Maisy Vo
                </p>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Event Leader</p>
                <a 
                  href="mailto:events@thesentry.com.vn" 
                  className="text-xs text-muted-foreground hover:text-accent transition-colors flex items-center gap-1.5"
                >
                  <Mail className="h-3 w-3" /> events@thesentry.com.vn
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-accent font-bold">General Enquiries</h4>
            <div className="space-y-4">
              <div className="group">
                <p className="text-sm font-semibold flex items-center gap-2 mb-1 text-foreground/90">
                  <User className="h-3 w-3 text-primary" /> Henry Nguyen
                </p>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Leasing & Event Manager</p>
                <a 
                  href="mailto:henry.nguyen@thesentry.com.vn" 
                  className="text-xs text-muted-foreground hover:text-accent transition-colors flex items-center gap-1.5"
                >
                  <Mail className="h-3 w-3" /> henry.nguyen@thesentry.com.vn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border/30 text-xs text-muted-foreground">
        <div className="tracking-wide uppercase opacity-80">
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
        <div className="opacity-60">
          © {new Date().getFullYear()} TECH59 Summit. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
);
