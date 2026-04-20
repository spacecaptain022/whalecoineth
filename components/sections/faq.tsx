"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQ } from "@/content/faq";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";
import { cn } from "@/lib/cn";
import {
  fadeRise,
  floatViewport,
  floatViewportReduced,
  staggerParent,
} from "@/lib/motion";

export function Faq() {
  const [open, setOpen] = React.useState<number | null>(0);
  const reduce = useReducedMotion();
  const scrollVp = reduce ? floatViewportReduced : floatViewport;

  return (
    <section
      id="surface"
      aria-labelledby="surface-title"
      className="relative border-t border-surface-dark/40 bg-surface/30"
    >
      <div className="mx-auto max-w-[920px] px-4 py-28 sm:px-6 md:px-8 md:py-36">
        <Reveal>
          <RevealItem className="mx-auto mb-14 max-w-[900px] md:mb-16">
            <SectionTitle
              eyebrow="The Surface"
              title={<>Questions belong to the surface.</>}
              subtitle="The answers begin below it."
              align="center"
              id="surface-title"
              className="[&_h2]:max-w-[min(26ch,100%)] [&_h2]:mx-auto [&_p]:max-w-[min(40ch,100%)] [&_p]:mx-auto"
            />
          </RevealItem>
        </Reveal>

        <motion.ul
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={scrollVp}
          className="overflow-hidden rounded-2xl border border-surface-dark/50 bg-bg/55 shadow-[0_16px_48px_-20px_rgba(20,40,61,0.12),inset_0_1px_0_0_rgba(255,253,248,0.45)] ring-1 ring-accent-deep/[0.07]"
        >
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.li
                key={item.q}
                variants={fadeRise}
                className="border-b border-surface-dark/45 last:border-b-0"
              >
                <div
                  className={cn(
                    "transition-[background-color,box-shadow] duration-300 ease-[var(--ease-tide)]",
                    isOpen
                      ? "bg-foam/35 shadow-[inset_0_1px_0_0_rgba(20,40,61,0.05)]"
                      : "hover:bg-bg/40",
                  )}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left group sm:gap-5 sm:px-8 sm:py-6 md:px-10"
                  >
                    <span className="min-w-0 flex-1 font-display text-[21px] leading-[1.2] text-text sm:text-[23px] md:text-[26px]">
                      {item.q}
                    </span>
                    <span
                      className={cn(
                        "mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-bg/80 text-text-muted shadow-sm transition-all duration-300 ease-[var(--ease-tide)]",
                        isOpen
                          ? "rotate-45 border-accent-deep text-accent-deep shadow-[0_2px_8px_-2px_rgba(20,40,61,0.2)]"
                          : "border-surface-dark/60 group-hover:border-accent-deep group-hover:text-accent-deep",
                      )}
                    >
                      <Plus className="h-[18px] w-[18px]" strokeWidth={2} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        role="region"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                          opacity: { duration: 0.3, ease: "linear" },
                        }}
                        className="overflow-hidden"
                      >
                        <p className="border-t border-surface-dark/30 px-5 pb-8 pt-5 text-[16px] font-medium leading-[1.7] text-text sm:px-8 sm:text-[17px] md:px-10">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
