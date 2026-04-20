"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ParallaxImage } from "@/components/ui/parallax-image";
import {
  clipReveal,
  fadeRise,
  floatViewport,
  floatViewportReduced,
  staggerParent,
} from "@/lib/motion";

type Stanza = {
  numeral: string;
  title: string;
  lines: string[];
};

const STANZAS: Stanza[] = [
  {
    numeral: "I",
    title: "Decentralization Begins at Absence",
    lines: [
      "Ryoshi believed decentralization begins the moment no one is needed at the center.",
      "When the creator disappears and the community becomes the only force that matters.",
      "No dev pedestal. No master switch.",
    ],
  },
  {
    numeral: "II",
    title: "The Vision, in Whale Depth",
    lines: [
      "WhalecoinETH carries that vision into whale depth on Ethereum.",
      "The Whale is not a person or a team. It is the aggregate weight of thousands of decisions made in the open.",
      "A single silent current under the surface of the market.",
    ],
  },
  {
    numeral: "III",
    title: "No Hero to Wait For",
    lines: [
      "No savior update. No central brain deciding the future.",
      "The pod itself is the mind.",
      "Direction emerges from conviction, not from orders.",
    ],
  },
  {
    numeral: "IV",
    title: "Whales as Amplifiers",
    lines: [
      "ETH whales are not rulers but amplifiers.",
      "They do not own the story. They simply lean their weight into it.",
      "A giant wallet is just one more spine in the pod.",
    ],
  },
  {
    numeral: "V",
    title: "Freedom",
    lines: [
      "No one can quietly pull the floor from under the community.",
      "Liquidity is visible. Supply is on-chain. Access is not sold behind closed doors.",
    ],
  },
  {
    numeral: "VI",
    title: "Fairness",
    lines: [
      "The smallest holder and the largest share the same rules.",
      "No secret lanes. No hidden allocations.",
      "The difference is only how much pressure each wallet adds to the deep.",
    ],
  },
  {
    numeral: "VII",
    title: "Transparency",
    lines: [
      "The story is told in public. Contracts verified. Moves observable.",
      "Every member of the pod able to see what they are swimming in.",
    ],
  },
  {
    numeral: "VIII",
    title: "Different Myth, Same Core",
    lines: [
      "We do not reinvent Ryoshi’s vision. We honor it in a different myth.",
      "Tsuka speaks in dragons and temples. Whale speaks in trenches and tides.",
      "Both point to the same belief: the strongest projects are the ones no single hand can fully control.",
    ],
  },
  {
    numeral: "IX",
    title: "The Ocean Form",
    lines: [
      "To hold Whale is to choose that belief in ocean form.",
      "The only lasting power on Ethereum is the kind that can survive without a face.",
    ],
  },
  {
    numeral: "X",
    title: "What Remains",
    lines: [
      "The Whale is what remains when the founders have faded.",
      "When only the behavior of the community is left.",
      "The slow heavy current still moving underneath.",
    ],
  },
];

export function RyoshiVision() {
  const reduce = useReducedMotion();
  const scrollVp = reduce ? floatViewportReduced : floatViewport;

  return (
    <section
      id="lineage"
      aria-labelledby="lineage-title"
      className="relative overflow-hidden bg-accent-deep text-gold"
    >
      {/* Parallax background image — covers the full section */}
      <ParallaxImage
        src="/brand/dreamwhale.png"
        opacityClass="opacity-35"
        strength={8}
      />
      {/* Readability gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,40,61,0.9) 0%, rgba(20,40,61,0.55) 25%, rgba(20,40,61,0.55) 75%, rgba(20,40,61,0.9) 100%)",
        }}
      />

      {/* Top wave rule */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-6 w-full opacity-40"
        viewBox="0 0 1440 24"
        preserveAspectRatio="none"
      >
        <path
          d="M0 12 C 240 0, 480 24, 720 12 S 1200 0, 1440 12"
          stroke="#C5A15C"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      <div className="relative mx-auto flex max-w-[1120px] flex-col px-4 py-28 sm:px-6 md:px-8 md:py-36">
        {/* Header */}
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={scrollVp}
          className="mx-auto mb-20 flex w-full max-w-[900px] flex-col items-center text-center gap-6 md:mb-24 md:gap-7"
        >
          <motion.span
            variants={fadeRise}
            className="eyebrow flex items-center justify-center gap-3 text-gold/60"
          >
            <span>Lineage</span>
            <span className="h-px w-10 bg-gold/30" />
            <span>The Inheritance</span>
          </motion.span>

          <motion.h2
            id="lineage-title"
            variants={clipReveal}
            className="font-display text-display-lg text-gold md:text-display-xl max-w-[min(28ch,100%)] leading-[1.05]"
          >
            Ryoshi’s Vision. Whale. And the Deep.
          </motion.h2>

          <motion.p
            variants={fadeRise}
            className="font-ink max-w-[min(52ch,100%)] text-[20px] leading-[1.45] text-gold/80 md:text-[24px]"
          >
            The strongest projects are the ones no single hand can ever fully
            control.
          </motion.p>

          <motion.div
            variants={fadeRise}
            className="mt-1 flex items-center gap-4 text-[11px] tracking-[0.3em] uppercase text-gold/45"
          >
            <span>柴</span>
            <span className="h-px w-12 bg-gold/30" />
            <span>鯨</span>
          </motion.div>
        </motion.div>

        {/* Stanzas — centered column; wider measure than the old left-rail grid */}
        <ol className="mx-auto flex w-full max-w-[920px] flex-col items-center gap-14 md:gap-16">
          {STANZAS.map((s) => (
            <motion.li
              key={s.numeral}
              variants={fadeRise}
              initial="hidden"
              whileInView="show"
              viewport={scrollVp}
              className="flex w-full flex-col items-center gap-5 border-b border-gold/10 pb-12 text-center last:border-b-0 last:pb-0 md:gap-6 md:pb-14"
            >
              <div className="flex flex-col items-center gap-3">
                <span className="font-ink text-[30px] leading-none text-gold/90 md:text-[38px]">
                  {s.numeral}
                </span>
                <span className="h-px w-14 bg-gold/30 md:w-16" />
                <h3 className="eyebrow max-w-[min(40ch,100%)] text-gold/70">
                  {s.title}
                </h3>
              </div>

              <div className="flex w-full max-w-[min(72ch,100%)] flex-col gap-3.5">
                {s.lines.map((line, i) => (
                  <p
                    key={i}
                    className="font-display text-[17px] leading-[1.6] text-gold/95 md:text-[20px]"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </motion.li>
          ))}
        </ol>

        {/* Oath */}
        <motion.div
          variants={fadeRise}
          initial="hidden"
          whileInView="show"
          viewport={scrollVp}
          className="mx-auto mt-20 flex w-full max-w-[920px] flex-col items-center gap-6 border-t border-gold/15 pt-14 text-center md:mt-24 md:gap-7 md:pt-16"
        >
          <span className="eyebrow text-gold/55">The Oath</span>
          <p className="font-display text-display-md text-gold md:text-display-lg max-w-[min(34ch,100%)] leading-[1.2]">
            The myth is owned by everyone.
          </p>
          <p className="max-w-[min(62ch,100%)] text-[15px] leading-[1.65] text-gold/75 md:text-[18px]">
            The levers are visible to everyone. And the weight of the pod, not
            the will of any one voice, decides where the tide turns next.
          </p>
          <p className="font-ink pt-1 text-[20px] text-gold/85 md:text-[24px]">
            No face. No leader. No central script.
          </p>
        </motion.div>
      </div>

      {/* Bottom wave rule */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-6 w-full opacity-40"
        viewBox="0 0 1440 24"
        preserveAspectRatio="none"
      >
        <path
          d="M0 12 C 240 24, 480 0, 720 12 S 1200 24, 1440 12"
          stroke="#C5A15C"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </section>
  );
}
