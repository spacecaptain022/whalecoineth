import { Reveal, RevealItem } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";

const PANELS = [
  {
    numeral: "I.",
    title: "The Deep",
    body: "The Whale is not a number on a wallet tracker. It is a force defined by patience, size, and conviction.",
  },
  {
    numeral: "II.",
    title: "The Signal",
    body: "Before the market reacts, something deeper has already moved. What moves below the chart moves the market.",
  },
  {
    numeral: "III.",
    title: "The Rise",
    body: "The Whale does not perform for the surface. It changes the shape of the water beneath it, then rises.",
  },
];

export function Origin() {
  return (
    <section
      id="deep"
      aria-labelledby="deep-title"
      className="relative border-t border-surface-dark/40 bg-bg/60"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8 py-24 md:py-32">
        <Reveal>
          <RevealItem>
            <SectionTitle
              eyebrow="The Deep"
              title={<>Weight over noise. Gravity over hype.</>}
              subtitle="WhalecoinETH is built around the archetype of the Whale. Unseen, immense, and impossible to ignore once it rises."
              id="deep-title"
            />
          </RevealItem>
        </Reveal>

        <Reveal
          stagger
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px overflow-hidden rounded-2xl border border-surface-dark/50 bg-surface-dark/50"
        >
          {PANELS.map((p) => (
            <RevealItem
              key={p.numeral}
              className="flex flex-col gap-5 p-10 bg-bg min-h-[260px]"
            >
              <span className="font-ink text-[28px] text-accent-deep/80">
                {p.numeral}
              </span>
              <h3 className="font-display text-display-sm text-text">
                {p.title}
              </h3>
              <p className="text-text/80 leading-[1.55] text-[15px] max-w-[36ch]">
                {p.body}
              </p>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
