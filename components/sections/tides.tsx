import { Badge } from "@/components/ui/badge";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";

type Phase = {
  numeral: string;
  name: string;
  body: string;
  status: "live" | "next" | "deep";
};

const PHASES: Phase[] = [
  {
    numeral: "I",
    name: "Signal",
    body: "Contract live. Crest raised. The first readers recognize the shape in the water.",
    status: "live",
  },
  {
    numeral: "II",
    name: "Gathering",
    body: "Liquidity deepens. The pod forms. Conviction compounds before the surface notices.",
    status: "next",
  },
  {
    numeral: "III",
    name: "Rise",
    body: "The Whale turns. The market begins to reorganize around its weight.",
    status: "deep",
  },
  {
    numeral: "IV",
    name: "Wake",
    body: "The current settles. The surface calls it momentum. The deep has always known better.",
    status: "deep",
  },
];

const LABELS = {
  live: "Live",
  next: "Next",
  deep: "Deep",
} as const;

export function Tides() {
  return (
    <section
      id="tides"
      aria-labelledby="tides-title"
      className="relative border-t border-surface-dark/40 bg-bg/60"
    >
      <div className="mx-auto flex max-w-[1120px] flex-col px-4 py-28 sm:px-6 md:px-8 md:py-36">
        <Reveal>
          <RevealItem className="mx-auto w-full max-w-[900px]">
            <SectionTitle
              align="center"
              eyebrow="The Tides"
              title={
                <>Every cycle has phases. The deep has always known them.</>
              }
              subtitle="Signal. Gathering. Rise. Wake."
              id="tides-title"
              className="[&_h2]:max-w-[min(28ch,100%)] [&_h2]:mx-auto [&_p]:max-w-[min(48ch,100%)] [&_p]:mx-auto"
            />
          </RevealItem>
        </Reveal>

        {/* Timeline lives in a centered column so the rule and copy sit in the middle of the section */}
        <div className="relative mx-auto mt-16 w-full max-w-[920px] md:mt-20">
          <Reveal stagger className="relative">
            <div
              aria-hidden="true"
              className="absolute left-4 top-3 bottom-3 w-px bg-gradient-to-b from-accent-deep/50 via-surface-dark/60 to-transparent md:left-5"
            />

            <ol className="flex flex-col gap-12 md:gap-16">
              {PHASES.map((p) => (
                <RevealItem
                  key={p.numeral}
                  className="relative pl-14 md:pl-[4.75rem]"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-1 top-2 flex h-6 w-6 items-center justify-center rounded-full border border-accent-deep/60 bg-bg md:left-1.5"
                  >
                    <span className="h-2 w-2 rounded-full bg-accent-deep" />
                  </span>

                  <div className="flex flex-col gap-3.5">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-ink text-[32px] leading-none text-accent-deep/80 md:text-[38px]">
                        {p.numeral}
                      </span>
                      <span className="h-px w-10 bg-surface-dark/70 md:w-12" />
                      <Badge tone={p.status}>{LABELS[p.status]}</Badge>
                    </div>
                    <h3 className="font-display text-display-md text-text">
                      {p.name}
                    </h3>
                    <p className="max-w-[min(62ch,100%)] text-[15px] leading-[1.65] text-text/80 md:text-[18px]">
                      {p.body}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
