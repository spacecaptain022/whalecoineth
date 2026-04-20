"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParallaxImage } from "@/components/ui/parallax-image";
import { SOCIALS } from "@/lib/constants";
import {
  clipReveal,
  fadeRise,
  floatViewport,
  floatViewportReduced,
  staggerParent,
} from "@/lib/motion";

export function FinalCta() {
  const reduce = useReducedMotion();
  const scrollVp = reduce ? floatViewportReduced : floatViewport;

  return (
    <section
      id="enter"
      aria-labelledby="cta-title"
      className="relative overflow-hidden bg-accent-deep text-gold"
    >
      {/* Parallax background image */}
      <ParallaxImage src="/brand/people.png" opacityClass="opacity-40" strength={10} />
      {/* Readability gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,40,61,0.85) 0%, rgba(20,40,61,0.55) 35%, rgba(20,40,61,0.55) 65%, rgba(20,40,61,0.9) 100%)",
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

      <div className="relative mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8 py-28 md:py-40 text-center">
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={scrollVp}
          className="flex flex-col items-center gap-8"
        >
          <motion.span
            variants={fadeRise}
            className="eyebrow text-gold/70"
          >
            The Final Signal
          </motion.span>
          <motion.h2
            id="cta-title"
            variants={clipReveal}
            className="font-display text-display-xl font-bold text-gold max-w-[min(56ch,100%)]"
          >
            <span className="block text-[0.5em]">
              The Whales Gather on Ethereum
            </span>
          </motion.h2>
          <motion.div variants={fadeRise}>
            <Button
              href={SOCIALS.claimEligibility}
              external
              size="lg"
              className="bg-foam text-accent-deep hover:bg-bg hover:text-accent-deep"
            >
              Check Eligibility
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
