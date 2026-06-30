import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "./Reveal";
import osomeLogo from "@/assets/workshops/osome.png.asset.json";
import skymavisLogo from "@/assets/workshops/skymavis.png.asset.json";
import qapitaLogo from "@/assets/workshops/qapita.png.asset.json";
import airwallexLogo from "@/assets/workshops/airwallex.png.asset.json";
import sixonefourLogo from "@/assets/workshops/sixonefour.png.asset.json";

type Person = { name: string; title: string };

type Slot = {
  start: string;
  tag: string;
  title: string;
  description?: string;
  keynote?: Person[];
  panelists?: Person[];
  moderator?: Person;
  logo?: { src: string; alt: string };
};

const day1: Slot[] = [
  { start: "18:00", tag: "Check-in", title: "Registration, Coffee & Networking" },
  { start: "19:00", tag: "Opening", title: "Opening Remarks, Drinks & Dinner" },
];

const mainStage: Slot[] = [
  {
    start: "08:00",
    tag: "Check-in",
    title: "Registration & Coffee — Networking & Partner Exhibition",
  },
  {
    start: "09:00",
    tag: "Opening Remarks",
    title: "Opening morning address and welcome",
    description:
      "Setting the stage for the day and TECH59's role in Vietnam's tech rise.",
    keynote: [
      { name: "Greg Ohan", title: "CEO, Co-Founder, TECH59" },
    ],
  },
  {
    start: "09:10",
    tag: "WELCOME REMARKS",
    title: "Government HCMC Welcome",
    description: "Official welcome from Ho Chi Minh City government leadership.",
    keynote: [
      { name: "HCMC Government Representative", title: "Vietnam Government" },
    ],
  },
  {
    start: "09:15",
    tag: "WELCOME REMARKS",
    title: "Welcome Address from QTSC IT Park",
    description: "A welcome from Vietnam's flagship software park host.",
    keynote: [
      {
        name: "QTSC Representative",
        title: "Quang Trung Software City CEO / Chairman",
      },
    ],
  },
  {
    start: "09:20",
    tag: "Keynote: Vietnam Outlook",
    title:
      "Vietnam Next Decade: Investment, Innovation and Economic Opportunity",
    description:
      "A macro view of Vietnam's growth trajectory and capital flows.",
    keynote: [
      { name: "Mike Kokalari", title: "Chief Economist, VinaCapital" },
    ],
  },
  {
    start: "09:40",
    tag: "Corporate & Tech Diplomacy",
    title:
      "Navigating Trade, Investment & Vietnam's Next Growth Chapter",
    description:
      "Diplomats and strategists unpack the geopolitics shaping Vietnam's economy.",
    keynote: [
      { name: "Mike Kokalari", title: "Chief Economist, VinaCapital" },
    ],
    panelists: [
      {
        name: "Étienne Ranaivoson",
        title: "French Consul General in Ho Chi Minh City",
      },
      {
        name: "Alex Smith",
        title: "Consul General, British Consul General Ho Chi Minh City",
      },
      {
        name: "Arnaud Ginolin",
        title:
          "Managing Director & Partner, Boston Consulting Group (BCG)",
      },
    ],
    moderator: { name: "Hang Vu", title: "Managing Partner, Minh Triet Capital" },
  },
  {
    start: "10:20",
    tag: "Gaming",
    title: "Beyond Entertainment: Gaming as a New Economic Engine",
    description:
      "How games, web3 and creators are reshaping Southeast Asia's digital economy.",
    keynote: [{ name: "Jeffrey Zirlin", title: "Co-Founder, Sky Mavis" }],
    panelists: [
      { name: "Jeffrey Zirlin", title: "Co-Founder, Sky Mavis" },
      { name: "Kevin Duong", title: "CTO, GAMOTA" },
      { name: "Dru Nguyen", title: "Co-founder, GAM Entertainment" },
    ],
    moderator: {
      name: "Josh Warland",
      title:
        "First Secretary, Digital & Technology, British Consulate-General Ho Chi Minh City",
    },
  },
  {
    start: "10:55",
    tag: "EdTech",
    title:
      "Learning in the Age of AI: Reimagining Education for the Future Workforce",
    description:
      "Builders rethinking how the next generation learns and gets hired.",
    keynote: [
      { name: "Rusydi Khairul", title: "CEO & Co-Founder, Reactor Group" },
    ],
    panelists: [
      { name: "Andre Lim", title: "CEO, Pallo" },
      { name: "Tuong Cat Tran", title: "Country Director, HEX" },
      { name: "Nazreen Coupland", title: "Assistant Manager, SMU IIE" },
      { name: "Sumona BasuMajumdar", title: "Chapter Lead (Vietnam), She Loves Data" },
    ],
    moderator: {
      name: "Rusydi Khairul",
      title: "CEO & Co-Founder, Reactor Group",
    },
  },
  {
    start: "11:35",
    tag: "Venture Capital",
    title:
      "The Future of Venture Capital in Southeast Asia: Why Vietnam Matters",
    description:
      "Investors on where capital is flowing and what makes Vietnam stand out.",
    keynote: [
      {
        name: "Navvin Kumar Kirupanandan",
        title: "Senior Director, Gobi Partners",
      },
    ],
    panelists: [
      {
        name: "Adrian Latortue",
        title: "Partner, Ascend Vietnam Ventures (AVV)",
      },
      {
        name: "Ian Kim",
        title: "Investment Associate, The Ventures (TBC)",
      },
      {
        name: "Navvin Kumar Kirupanandan",
        title: "Senior Director, Gobi Partners",
      },
    ],
    moderator: {
      name: "Kai Zen Theng",
      title: "Growth & Partnerships Lead, Qapita",
    },
  },
  {
    start: "12:15",
    tag: "Keynote: HCMC & Global Tech Ecosystems",
    title: "Global Tech Ecosystems & Vietnam: HCMC as a Magnetic City",
    description:
      "Positioning Ho Chi Minh City within the global innovation map.",
    keynote: [
      {
        name: "Dan Herma",
        title: "Executive Advisor, Innovation Policy & Global Ecosystems",
      },
    ],
  },
  {
    start: "13:00",
    tag: "Welcome back Remarks",
    title: "Afternoon address and Welcome back",
    keynote: [
      { name: "Thuy Hoang", title: "COO, Co-Founder, TECH59" },
    ],
  },
  {
    start: "13:15",
    tag: "AI",
    title:
      "From Generative AI to Agentic AI: How AI is Transforming Business & Society",
    description:
      "From generative to agentic AI — what's real, what's next, and what to build.",
    keynote: [
      { name: "Dr. Michael Liebmann", title: "Co-Founder, CEO, Dream Lab AI" },
    ],
    panelists: [
      { name: "Kai Yong", title: "Partner & Co-Founder, GenAI" },
      { name: "Johnny Le", title: "CEO, DigiEX" },
      { name: "Dr. Miro Nguyen", title: "Co-founder, VanguardX" },
      { name: "Dr. Michael Liebmann", title: "Co-Founder, CEO, Dream Lab AI" },
    ],
    moderator: {
      name: "Sam Waldo",
      title: "Head of Startups, Asia, Airwallex",
    },
  },
  {
    start: "14:00",
    tag: "PropTech",
    title:
      "Building for Innovation: What Technology Companies Need from the Next Generation Workplace",
    description:
      "What modern tech teams need from buildings, parks and the cities around them.",
    keynote: [
      {
        name: "Tan Van",
        title: "Deputy Director, AVT International (TBC)",
      },
    ],
    panelists: [
      {
        name: "Marc Townsend",
        title: "Senior Advisor, Asia Green Real Estate",
      },
      { name: "John Zhao", title: "Founder, Tonomo" },
      {
        name: "Le Viet Hieu",
        title: "Permanent Deputy CEO, Hoa Binh Construction",
      },
      { name: "Karl Truong", title: "Deputy CEO, Huong Viet Holdings" },
    ],
    moderator: {
      name: "Trang Vu",
      title: "Landing Pad Director, Austrade",
    },
  },
  {
    start: "14:45",
    tag: "Outsourcing & Talent",
    title:
      "Beyond Outsourcing: Vietnam's Journey Toward a World-Class Technology & Talent Hub",
    description:
      "Vietnam's path from outsourcing hub to a world-class tech and talent base.",
    keynote: [
      { name: "Anatolijus Fouracre", title: "CEO, SPS Vietnam" },
    ],
    panelists: [
      { name: "Anatolijus Fouracre", title: "CEO, SPS Vietnam" },
      {
        name: "Rohan Chandhok",
        title: "Vice President, Marketing, Osome",
      },
      {
        name: "Tran Nhan Quy",
        title: "CEO, Zühlke Vietnam",
      },
      { name: "Hai Le", title: "CTO, EmbedIT Vietnam" },
    ],
    moderator: {
      name: "Finnley Lee",
      title: "Startups & Ecosystem Manager, Aspire",
    },
  },
  {
    start: "15:25",
    tag: "Conclusion & Takeaways",
    title: "Key Insights, Future Outlook & Closing Remarks",
  },
];

const workshopStage: Slot[] = [
  {
    start: "09:45",
    tag: "Osome",
    title: "Singapore Incorporation Masterclass: Business beyond borders",
    description:
      "Legal, financial and operational foundations for scaling across Southeast Asia.",
    logo: { src: osomeLogo.url, alt: "Osome" },
  },
  {
    start: "11:00",
    tag: "SkyMavis",
    title: "Building High-Performance Software Teams",
    description: "Build engineering teams that ship reliably at scale.",
    logo: { src: skymavisLogo.url, alt: "Sky Mavis" },
  },
  {
    start: "13:15",
    tag: "Qapita",
    title: "Managing Everything Related To Ownership & Employee Equity for Start Ups",
    description:
      "Cap tables, equity plans and employee ownership for growing startups.",
    logo: { src: qapitaLogo.url, alt: "Qapita" },
  },
  {
    start: "14:20",
    tag: "Airwallex",
    title: "Global Payments Made Simple: Connecting Businesses Across Borders",
    description:
      "Simplify cross-border payments and treasury for international operations.",
    logo: { src: airwallexLogo.url, alt: "Airwallex" },
  },
  {
    start: "15:25",
    tag: "sixonefour labs",
    title: "Developing Engineering Talent",
    description: "Source, upskill and retain engineering talent in Vietnam.",
    logo: { src: sixonefourLogo.url, alt: "sixonefour labs" },
  },
];

const PeopleBlock = ({
  label,
  people,
}: {
  label: string;
  people: Person[];
}) => (
  <div className="mt-3">
    <div className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.18em] text-accent mb-1.5">
      {label}
    </div>
    <ul className="space-y-1">
      {people.map((p, i) => (
        <li
          key={i}
          className="text-xs md:text-[13px] text-muted-foreground leading-relaxed"
        >
          <span className="text-foreground/90 font-medium">{p.name}</span>
          <span className="text-muted-foreground"> — {p.title}</span>
        </li>
      ))}
    </ul>
  </div>
);

const SlotCard = ({
  s,
  compact,
  isOpen,
  onToggle,
  alwaysExpanded = false,
  hideChevron = false,
}: {
  s: Slot;
  compact: boolean;
  isOpen: boolean;
  onToggle: () => void;
  alwaysExpanded?: boolean;
  hideChevron?: boolean;
}) => {
  const expandable = Boolean(
    s.description || s.keynote || s.panelists || s.moderator
  ) && !alwaysExpanded;

  const inner = (
    <>
      <span className="absolute -left-[22px] md:-left-[30px] top-6 h-2 w-2 rounded-full bg-brand ring-4 ring-background shadow-[0_0_12px_hsl(258_90%_66%/0.7)]" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 light-streak pointer-events-none" />
      <div className="relative flex flex-col md:flex-row md:items-start gap-2 md:gap-5">
        <span
          className={`font-display font-bold text-gradient-animated text-slate-50 tabular-nums leading-none shrink-0 ${
            compact
              ? "text-xl md:text-2xl md:w-[88px]"
              : "text-2xl md:text-3xl md:w-[110px]"
          }`}
        >
          {s.start}
        </span>
        <div className="flex flex-col min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            {!s.logo && (
              <span className="inline-block self-start glass-strong rounded-full px-3 py-1 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                {s.tag}
              </span>
            )}
            {expandable && !hideChevron && (
              <ChevronDown
                className={`h-4 w-4 text-foreground/70 transition-transform duration-300 shrink-0 mt-1 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            )}
          </div>

          {s.logo && (
            <div className="relative inline-flex items-center justify-start h-14 md:h-18 pl-[0.5rem] md:pl-[0.7rem] pr-0 isolate">
              <div className="absolute inset-y-0 left-0 w-[60%] rounded-full glass-strong ring-1 ring-accent/30 shadow-[0_0_20px_hsl(var(--accent)/0.15)] -z-10" />
              <img
                src={s.logo.src}
                alt={s.logo.alt}
                className={`relative w-auto object-contain ${
                  s.logo.alt === "sixonefour labs"
                    ? "h-[2.275rem] md:h-[2.925rem]"
                    : "h-[3.9rem] md:h-[5.2rem]"
                }`}
              />
            </div>
          )}

          <h4 className="font-display text-sm md:text-base font-semibold leading-snug mt-1.5">
            {s.title}
          </h4>

          {alwaysExpanded && s.description && (
            <p className="text-xs md:text-[13px] text-muted-foreground leading-relaxed mt-1">
              {s.description}
            </p>
          )}


          {expandable && (
            <div
              className={`grid transition-all duration-500 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="pt-1">
                  {s.description && (
                    <p className="text-xs md:text-[13px] text-muted-foreground leading-relaxed">
                      {s.description}
                    </p>
                  )}
                  {s.keynote && (
                    <PeopleBlock
                      label={s.keynote.length > 1 ? "Speakers" : "Keynote"}
                      people={s.keynote}
                    />
                  )}
                  {s.panelists && (
                    <PeopleBlock label="Panelists" people={s.panelists} />
                  )}
                  {s.moderator && (
                    <PeopleBlock label="Moderator" people={[s.moderator]} />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );

  const baseClass =
    "relative glass rounded-xl p-4 md:p-5 hover:border-primary/60 hover:-translate-y-0.5 transition-all duration-500 group overflow-hidden w-full text-left " +
    (compact ? "min-h-[112px]" : "min-h-[120px]");

  if (!expandable) {
    return <article className={baseClass}>{inner}</article>;
  }

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      className={baseClass}
    >
      {inner}
    </button>
  );
};

const SlotList = ({
  slots,
  compact = false,
  alwaysExpanded = false,
  hideChevron = false,
}: {
  slots: Slot[];
  compact?: boolean;
  alwaysExpanded?: boolean;
  hideChevron?: boolean;
}) => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="relative pl-5 md:pl-8 mt-4">
      <div className="absolute left-1 md:left-2.5 top-2 bottom-2 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-accent/50" />
      <div className="space-y-3">
        {slots.map((s, i) => (
          <Reveal key={i} delay={i * 40}>
            <SlotCard
              s={s}
              compact={compact}
              isOpen={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? null : i)}
              alwaysExpanded={alwaysExpanded}
              hideChevron={hideChevron}
            />
          </Reveal>
        ))}
      </div>
    </div>
  );
};


const TrackHeader = ({ label, accentClass }: { label: string; accentClass: string }) => (
  <div className="flex items-center gap-2 mb-1">
    <span className={`h-2 w-2 rounded-full ${accentClass}`} />
    <span className="font-display text-xs md:text-sm uppercase tracking-[0.2em] text-foreground/80">
      {label}
    </span>
  </div>
);

const workshopPanelClass =
  "rounded-2xl p-5 md:p-6 bg-muted ring-1 ring-primary/15";

const Day2Tracks = () => {
  const [tab, setTab] = useState<"main" | "workshop">("main");

  return (
    <div className="mt-2">
      {/* Mobile + small-laptop tabs (below xl: 1280px) */}
      <div className="xl:hidden flex gap-2 mb-4 glass-strong rounded-full p-1 w-full max-w-sm">
        {[
          { id: "main" as const, label: "Main Stage" },
          { id: "workshop" as const, label: "Workshops" },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`flex-1 rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition-all ${
              tab === t.id
                ? "bg-brand text-primary-foreground shadow-[0_0_15px_hsl(258_90%_66%/0.5)]"
                : "text-foreground/70 hover:text-foreground"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Large desktop (>=1280): 3:2 split with sticky workshop panel */}
      <div className="hidden xl:grid xl:grid-cols-5 xl:gap-8 xl:items-start">
        <div className="xl:col-span-3">
          <TrackHeader label="Main Stage" accentClass="bg-accent shadow-[0_0_10px_hsl(var(--accent))]" />
          <SlotList slots={mainStage} />
        </div>
        <div className={`xl:col-span-2 xl:sticky xl:top-24 xl:self-start xl:max-h-[calc(100vh-7rem)] xl:overflow-y-auto ${workshopPanelClass}`}>
          <TrackHeader label="WORKSHOPS (1h each)" accentClass="bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
          <SlotList slots={workshopStage} compact hideChevron />
        </div>
      </div>

      {/* Below xl: one track at a time */}
      <div className="xl:hidden">
        {tab === "main" ? (
          <div>
            <TrackHeader label="Main Stage" accentClass="bg-accent shadow-[0_0_10px_hsl(var(--accent))]" />
            <SlotList slots={mainStage} />
          </div>
        ) : (
          <div className={workshopPanelClass}>
            <TrackHeader label="WORKSHOPS (1h each)" accentClass="bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
            <SlotList slots={workshopStage} hideChevron />
          </div>
        )}
      </div>
    </div>
  );
};

const dayList: { id: "day1" | "day2"; label: React.ReactNode }[] = [
  {
    id: "day1",
    label: (
      <span>
        <span>Day 1 — VIP Reception </span>
        <span className="text-gradient-animated">(By Invitation Only)</span>
        <span>  · Thu 16 Jul</span>
      </span>
    ),
  },
  { id: "day2", label: "Day 2 — Main Event · Fri 17 Jul" },
];

export const Programme = () => {
  const [open, setOpen] = useState<"day1" | "day2" | null>("day2");

  return (
    <div className="mt-8 mb-24">
      <Reveal className="max-w-2xl mb-10">
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9]">
          <span className="text-gradient-animated text-slate-50">Agenda</span>
        </h2>
        <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">*STAY TUNED FOR MORE SESSIONS, SPEAKERS, AND DETAILS COMING SOON!</p>
      </Reveal>

      <div className="space-y-4">
        {dayList.map((d) => {
          const isOpen = open === d.id;
          return (
            <Reveal key={d.id}>
              <div className="glass rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : d.id)}
                  className={`w-full flex items-center justify-between gap-3 px-4 md:px-6 py-4 md:py-5 text-left transition-all duration-300 ${
                    isOpen ? "bg-brand/10" : "hover:bg-foreground/5"
                  }`}
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-sm sm:text-lg md:text-xl font-semibold tracking-tight min-w-0 break-words">
                    {d.label}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-foreground/70 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 md:px-6 pb-6">
                      {d.id === "day1" ? <SlotList slots={day1} /> : <Day2Tracks />}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
};
