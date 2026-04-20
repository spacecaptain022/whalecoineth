"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { drawLine, floatViewport, floatViewportReduced } from "@/lib/motion";

type Props = {
  className?: string;
  tone?: "ink" | "muted" | "foam";
};

export function DividerWave({ className, tone = "muted" }: Props) {
  const reduce = useReducedMotion();
  const stroke =
    tone === "ink" ? "#14283D" : tone === "foam" ? "#F2EDE0" : "#AF9F85";
  return (
    <svg
      viewBox="0 0 600 14"
      className={cn("w-full h-3", className)}
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path
        d="M0 7 C 60 0, 120 14, 180 7 S 300 0, 360 7 S 480 14, 540 7 S 600 0, 600 7"
        stroke={stroke}
        strokeWidth="1"
        strokeLinecap="round"
        variants={drawLine}
        initial="hidden"
        whileInView="show"
        viewport={reduce ? floatViewportReduced : floatViewport}
      />
    </svg>
  );
}
