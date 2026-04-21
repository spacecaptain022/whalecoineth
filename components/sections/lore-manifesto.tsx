"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import {
  clipReveal,
  fadeRise,
  floatViewport,
  floatViewportReduced,
  staggerParent,
} from "@/lib/motion";

const STANZAS: { lines: string[]; weight?: "normal" | "bold" }[] = [
  {
    lines: [
      "The market rewards noise until it doesn’t.",
      "Then weight returns.",
      "Then patience returns.",
      "Then the deep reclaims attention.",
    ],
  },
  {
    lines: [
      "The Whale has always existed beneath Ethereum.",
      "Silent. Watching. Accumulating.",
      "Turning only when the current is ready.",
    ],
  },
  {
    lines: [
      "Whalecoin is an emblem of that force.",
      "Not for the loudest.",
      "For the heaviest.",
    ],
    weight: "bold",
  },
];

/** One entry per asset in `Meme logos/` (served from `public/brand/meme-logos/`). */
const MEME_LOGO_PLACEMENT: {
  file: string;
  top: string;
  left: string;
  size: number;
  rotate: number;
  opacity: number;
}[] = [
  { file: "Bitcoin.svg (1).png", top: "4%", left: "3%", size: 72, rotate: -12, opacity: 0.16 },
  { file: "Shiba_Inu_coin_logo.png", top: "8%", left: "68%", size: 92, rotate: 7, opacity: 0.15 },
  { file: "asteroid logo.png", top: "28%", left: "8%", size: 68, rotate: 15, opacity: 0.17 },
  { file: "joe logo.png", top: "38%", left: "78%", size: 76, rotate: -9, opacity: 0.16 },
  { file: "mog logo.png", top: "52%", left: "7%", size: 84, rotate: 11, opacity: 0.13 },
  { file: "neiro logo.png", top: "58%", left: "72%", size: 70, rotate: -6, opacity: 0.16 },
  { file: "npc logo.png", top: "72%", left: "12%", size: 78, rotate: 8, opacity: 0.15 },
  { file: "pepe logo.png", top: "26%", left: "58%", size: 64, rotate: -4, opacity: 0.12 },
  { file: "spx logo.png", top: "76%", left: "70%", size: 88, rotate: -11, opacity: 0.15 },
];

export function LoreManifesto() {
  const reduce = useReducedMotion();
  const scrollVp = reduce ? floatViewportReduced : floatViewport;

  return (
    <section
      id="lore"
      aria-labelledby="lore-title"
      className="relative border-t border-surface-dark/40"
    >
      <div className="mx-auto max-w-[960px] px-4 sm:px-6 md:px-8 py-28 md:py-36">
        <div className="relative mx-auto max-w-[880px] overflow-hidden rounded-2xl border border-surface-dark/35 bg-bg/50 px-4 py-10 shadow-[0_24px_60px_-24px_rgba(20,40,61,0.2),inset_0_0_80px_rgba(20,40,61,0.04)] sm:px-8 sm:py-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-2xl bg-cover bg-center bg-no-repeat opacity-50"
            style={{ backgroundImage: "url('/brand/scroll-writing.png')" }}
          />
          {/* Frosted panel: illustration stays visible at edges; copy sits on a high-contrast surface */}
          <div className="relative z-10 mx-auto w-full max-w-[42rem] overflow-hidden rounded-2xl bg-foam/94 px-6 py-10 shadow-[0_8px_40px_-12px_rgba(20,40,61,0.18)] ring-1 ring-accent-deep/[0.12] backdrop-blur-md backdrop-saturate-110 sm:px-10 sm:py-12">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-2xl"
            >
              {MEME_LOGO_PLACEMENT.map(({ file, top, left, size, rotate, opacity }) => (
                <div
                  key={file}
                  className="absolute rounded-full border border-accent-deep/[0.06] bg-foam/30 shadow-[inset_0_0_20px_rgba(20,40,61,0.06)]"
                  style={{
                    top,
                    left,
                    width: size,
                    height: size,
                    opacity,
                    transform: `rotate(${rotate}deg)`,
                  }}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-full">
                    <Image
                      src={`/brand/meme-logos/${encodeURIComponent(file)}`}
                      alt=""
                      fill
                      sizes={`${size}px`}
                      className="object-cover grayscale"
                      draggable={false}
                    />
                  </div>
                </div>
              ))}
            </div>
            <motion.div
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={scrollVp}
              className="relative z-10 flex flex-col items-center gap-3 text-center"
            >
            <motion.span
              variants={fadeRise}
              className="eyebrow mb-2 block w-full text-text"
            >
              The Manifesto
            </motion.span>
            <motion.p
              variants={fadeRise}
              className="mb-7 max-w-[36ch] font-ink text-[15px] leading-snug text-text-muted md:text-[16px]"
            >
              Inspired by Ryoshi's Vision
            </motion.p>
            <h2 id="lore-title" className="sr-only">
              Manifesto
            </h2>

            {STANZAS.map((stanza, si) =>
              stanza.lines.map((line, li) => (
                <motion.p
                  key={`${si}-${li}`}
                  variants={clipReveal}
                  className={cn(
                    "font-display text-display-md leading-[1.25] text-text md:text-display-lg md:leading-[1.22]",
                    "[text-shadow:0_1px_0_rgb(236_238_235_/_0.96),0_0_1.25em_rgb(232_234_231_/_0.55)]",
                    stanza.weight === "bold" ? "font-bold" : "font-medium",
                    si > 0 && li === 0 && "mt-12"
                  )}
                >
                  {line}
                </motion.p>
              ))
            )}
            <motion.p
              variants={clipReveal}
              className="font-display mt-10 pt-4 text-[22px] font-semibold leading-snug text-accent-deep md:text-[28px] [text-shadow:0_1px_0_rgb(236_238_235_/_0.98),0_0_1em_rgb(232_234_231_/_0.65)]"
            >
              Conviction moves first. Explanation comes later.
            </motion.p>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
