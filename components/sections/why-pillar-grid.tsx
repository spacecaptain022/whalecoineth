"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal, RevealItem } from "@/components/ui/reveal";

const EASE_TIDE = [0.22, 1, 0.36, 1] as const;

const REASONS = [
  {
    k: "01",
    title: "The Whale as Force.",
    body: "Not a holder. Market gravity. The Whale bends liquidity and creates momentum. It rarely chases it.",
    flipEyebrow: "Obverse",
    flipTitle: "Kujira, sleeping mass.",
    flipLines: [
      "The trench does not argue with the surface.",
      "When the shape turns, the sea misplaces its own name.",
    ],
  },
  {
    k: "02",
    title: "ETH as Ocean.",
    body: "Ethereum is where depth matters. Whale conviction is the capital density that defines the chain.",
    flipEyebrow: "Obverse",
    flipTitle: "Yomi no current.",
    flipLines: [
      "Lanterns trade above. The well keeps what lanterns cannot hold.",
      "The chain is the tide table; conviction is the moon you never see.",
    ],
  },
  {
    k: "03",
    title: "Conviction Over Noise.",
    body: "Small minds chase candles. Whales move with cycles. Think in tides, not ticks.",
    flipEyebrow: "Obverse",
    flipTitle: "Thread of the moon.",
    flipLines: [
      "Patience is not waiting. It is weight pretending to sleep.",
      "The drum is thin. The tide is law.",
    ],
  },
  {
    k: "04",
    title: "Mystery as Value.",
    body: "The signal is clearer in silence. Not everything powerful arrives with noise.",
    flipEyebrow: "Obverse",
    flipTitle: "The oracle folds the screen.",
    flipLines: [
      "Ink knows one stroke, then closes its mouth.",
      "What the wave writes, the shore must not read aloud.",
    ],
  },
] as const;

type Item = (typeof REASONS)[number];

function PillarCard({
  r,
  isActive,
  onEnter,
  onLeave,
}: {
  r: Item;
  isActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const reduceMotion = useReducedMotion();
  const showBack = isActive && !reduceMotion;

  const enterTrans = {
    opacity: { duration: 0.38, ease: EASE_TIDE },
    rotateY: { duration: 0.62, ease: EASE_TIDE },
  };
  const exitTrans = {
    opacity: { duration: 0.85, ease: EASE_TIDE },
    rotateY: { duration: 0 },
  };

  const loreId = `pillar-${r.k}-lore`;

  return (
    <motion.article
      layout={false}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="relative min-h-[300px] [perspective:1400px] md:min-h-[280px]"
      aria-labelledby={`pillar-${r.k}-title`}
      aria-describedby={loreId}
    >
      <span id={loreId} className="sr-only">
        {r.flipTitle} {r.flipLines.join(" ")}
      </span>

      <div className="relative h-full min-h-[300px] w-full md:min-h-[280px]">
        {/* Front */}
        <motion.div
          className="absolute inset-0 flex flex-col gap-4 rounded-2xl border border-foam/15 bg-accent-deep/55 p-8 backdrop-blur-[2px] md:p-10"
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            transformOrigin: "center center",
          }}
          animate={
            showBack
              ? { opacity: 0, rotateY: -88 }
              : { opacity: 1, rotateY: 0 }
          }
          transition={showBack ? enterTrans : exitTrans}
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] tracking-[0.2em] text-foam/55">
              {r.k}
            </span>
            <span
              className={`h-px bg-foam/25 transition-all duration-500 ${
                isActive ? "w-24 bg-foam/80" : "w-16"
              }`}
            />
          </div>
          <h3
            className="font-display text-display-sm text-foam"
            id={`pillar-${r.k}-title`}
          >
            {r.title}
          </h3>
          <p className="max-w-[42ch] text-[15px] leading-[1.6] text-foam/80">
            {r.body}
          </p>
        </motion.div>

        {/* Back */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-center gap-4 rounded-2xl border border-foam/25 bg-accent-deep/80 p-8 backdrop-blur-md md:p-10"
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            transformOrigin: "center center",
          }}
          aria-hidden="true"
          animate={
            showBack
              ? { opacity: 1, rotateY: 0 }
              : { opacity: 0, rotateY: 88 }
          }
          transition={showBack ? enterTrans : exitTrans}
        >
          <div className="flex items-center justify-between">
            <span className="eyebrow text-foam/50">{r.flipEyebrow}</span>
            <span className="font-mono text-[11px] tracking-[0.2em] text-foam/45">
              {r.k}
            </span>
          </div>
          <p className="font-display text-[22px] leading-[1.25] text-foam md:text-[24px]">
            {r.flipTitle}
          </p>
          <div className="flex flex-col gap-3">
            {r.flipLines.map((line) => (
              <p
                key={line}
                className="font-ink text-[17px] leading-[1.55] text-foam/85 md:text-[18px]"
              >
                <span className="text-foam/45">「</span>
                {line}
                <span className="text-foam/45">」</span>
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
}

export function WhyPillarGrid() {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const leaveTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = React.useCallback((index: number) => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
    setHoveredIndex(index);
  }, []);

  const handleLeave = React.useCallback(() => {
    leaveTimerRef.current = setTimeout(() => {
      setHoveredIndex(null);
      leaveTimerRef.current = null;
    }, 70);
  }, []);

  React.useEffect(() => {
    return () => {
      if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    };
  }, []);

  return (
    <Reveal stagger className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2">
      {REASONS.map((r, index) => (
        <RevealItem key={r.k} className="min-h-[300px] md:min-h-[280px]">
          <PillarCard
            r={r}
            isActive={hoveredIndex === index}
            onEnter={() => handleEnter(index)}
            onLeave={handleLeave}
          />
        </RevealItem>
      ))}
    </Reveal>
  );
}
