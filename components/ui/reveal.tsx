"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import { fadeIn, fadeRise, floatViewport, floatViewportReduced, staggerParent } from "@/lib/motion";
import { cn } from "@/lib/cn";

type RevealProps = HTMLMotionProps<"div"> & {
  as?: "div" | "section" | "ul" | "article" | "header" | "footer";
  stagger?: boolean;
  variants?: Variants;
  className?: string;
  /** When true, only animates in once (overrides float in/out). */
  once?: boolean;
};

export function Reveal({
  children,
  stagger = false,
  variants,
  className,
  once,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();
  const viewport =
    reduce || once === true ? floatViewportReduced : floatViewport;
  const v =
    variants ?? (reduce ? fadeIn : stagger ? staggerParent : fadeRise);

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={v}
      className={cn(className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  variants,
  ...rest
}: HTMLMotionProps<"div"> & { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      variants={variants ?? (reduce ? fadeIn : fadeRise)}
      className={cn(className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
