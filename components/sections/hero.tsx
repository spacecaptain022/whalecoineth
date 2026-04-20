"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useAnimationControls, useReducedMotion } from "framer-motion";
import { ArrowUpRight, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/ui/copy-button";
import { SOCIALS, TOKEN } from "@/lib/constants";
import {
  clipReveal,
  EASE_TIDE,
  fadeRise,
  floatViewport,
  floatViewportReduced,
  staggerParent,
} from "@/lib/motion";

const HERO_VIDEO_OPACITY = 0.2;

export function Hero() {
  const reduce = useReducedMotion();
  const scrollVp = reduce ? floatViewportReduced : floatViewport;
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const videoWrapControls = useAnimationControls();

  React.useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.playbackRate = 0.5;
    const handle = () => {
      el.playbackRate = 0.5;
    };
    el.addEventListener("loadedmetadata", handle);
    el.addEventListener("play", handle);
    return () => {
      el.removeEventListener("loadedmetadata", handle);
      el.removeEventListener("play", handle);
    };
  }, []);

  React.useEffect(() => {
    if (reduce) return;
    const el = videoRef.current;
    if (!el) return;

    let cancelled = false;

    const onEnded = async () => {
      if (cancelled) return;
      await videoWrapControls.start({
        opacity: 0,
        transition: { duration: 0.45, ease: EASE_TIDE },
      });
      if (cancelled) return;
      el.currentTime = 0;
      try {
        await el.play();
      } catch {
        /* playback may be blocked before gesture */
      }
      if (cancelled) return;
      await videoWrapControls.start({
        opacity: HERO_VIDEO_OPACITY,
        transition: { duration: 0.7, ease: EASE_TIDE },
      });
    };

    el.addEventListener("ended", onEnded);
    return () => {
      cancelled = true;
      el.removeEventListener("ended", onEnded);
    };
  }, [reduce, videoWrapControls]);

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative overflow-hidden"
    >
      {/* Hero background video — fade across loop restart (native loop when reduced motion) */}
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
        initial={{ opacity: HERO_VIDEO_OPACITY }}
        animate={videoWrapControls}
      >
        <video
          ref={videoRef}
          aria-hidden="true"
          autoPlay
          muted
          loop={reduce === true}
          playsInline
          preload="metadata"
          poster="/brand/logo.jpeg"
          className="h-full w-full object-cover"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1440px] flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-24 text-center">
        {/* Hero crest */}
        <motion.div
          variants={fadeRise}
          initial="hidden"
          whileInView="show"
          viewport={scrollVp}
          className="relative mb-10 sm:mb-14"
        >
          <div className="relative">
            <div className="relative aspect-square w-[min(54vw,340px)] overflow-hidden rounded-[30px] border border-accent-deep/20 shadow-[0_20px_60px_-20px_rgba(20,40,61,0.35)]">
              <Image
                src="/brand/logo.jpeg"
                alt="Whalecoin. A whale breaching the Great Wave, ukiyo-e crest"
                fill
                priority
                sizes="(max-width: 768px) 54vw, 340px"
                className="object-cover select-none pointer-events-none"
              />
            </div>
          </div>
          {/* Faint halos */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 aspect-square w-[min(64vw,400px)] rounded-[38px] border border-accent-deep/10 animate-halo"
          />
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 aspect-square w-[min(72vw,460px)] rounded-[46px] border border-accent-deep/5"
          />
        </motion.div>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={scrollVp}
          className="flex flex-col items-center gap-6"
        >
          <motion.span
            variants={fadeRise}
            className="eyebrow flex items-center gap-3 text-text font-bold !text-[13px] sm:!text-[14px]"
          >
            <span className="h-px w-10 bg-text/60" />
            <span>Depth, patience &amp; gravity</span>
            <span className="h-px w-10 bg-text/60" />
          </motion.span>

          <motion.h1
            id="hero-title"
            variants={clipReveal}
            className="font-display text-display-xl uppercase tracking-[0.02em] max-w-[18ch] text-text leading-[0.98]"
          >
            Whale is a tide of conviction
          </motion.h1>

          <motion.p
            variants={fadeRise}
            className="max-w-[54ch] text-[13px] sm:text-[14px] tracking-[0.22em] uppercase leading-[1.7] text-text-muted"
          >
            Gather with Ethereum whales who move in silence, hold with weight
            <span className="hidden sm:inline"> </span>
            <span className="sm:hidden">
              <br />
            </span>
            and answer only to the ocean.
          </motion.p>

          {/* CTA cluster */}
          <motion.div
            variants={fadeRise}
            className="mt-6 flex flex-wrap items-center justify-center gap-3"
          >
            <Button href={SOCIALS.claimEligibility} external size="lg">
              Check Eligibility
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button href={SOCIALS.dexscreener} external variant="secondary" size="lg">
              <LineChart className="h-4 w-4" />
              Track the Tide
            </Button>
          </motion.div>

          {/* Contract strip */}
          <motion.div
            variants={fadeRise}
            className="mt-4 inline-flex items-center gap-3 rounded-full border border-surface-dark/70 bg-foam/40 px-4 py-2 backdrop-blur-sm"
          >
            <span className="eyebrow">Contract</span>
            <span className="h-3 w-px bg-surface-dark/70" />
            <span className="font-mono text-[12px] sm:text-[13px] text-text/90">
              {TOKEN.contractShort}
            </span>
            <span className="h-3 w-px bg-surface-dark/70" />
            <CopyButton value={TOKEN.contract} />
          </motion.div>
        </motion.div>
      </div>

      {/* Background wave marks */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[40vh] w-full opacity-[0.08]"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
      >
        <path
          d="M0 300 C 240 260, 480 340, 720 300 S 1200 260, 1440 300 L 1440 400 L 0 400 Z"
          fill="#14283D"
        />
        <path
          d="M0 340 C 240 300, 480 380, 720 340 S 1200 300, 1440 340 L 1440 400 L 0 400 Z"
          fill="#14283D"
          opacity="0.6"
        />
      </svg>
    </section>
  );
}
