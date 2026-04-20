"use client";

import * as React from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/cn";

type Props = {
  src: string;
  alt?: string;
  /** Tailwind opacity class, e.g. "opacity-40" */
  opacityClass?: string;
  /** Strength of parallax in percent. Default 10 (shifts ±10% over section travel). */
  strength?: number;
  /** Extra classes for the inner image (e.g. object-position). */
  imageClassName?: string;
  /** Disable priority loading. */
  priority?: boolean;
};

/**
 * Full-bleed parallax background image. Renders inside a section that is
 * `relative` + `overflow-hidden`. Respects prefers-reduced-motion.
 */
export function ParallaxImage({
  src,
  alt = "",
  opacityClass = "opacity-40",
  strength = 10,
  imageClassName,
  priority = false,
}: Props) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // The container is 120% tall and inset by -10% top/bottom, so it always
  // covers the parent even at max parallax shift.
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? ["0%", "0%"] : [`-${strength}%`, `${strength}%`],
  );

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      style={{ y, willChange: "transform" }}
      className={cn(
        "pointer-events-none absolute inset-x-0 -top-[12%] -bottom-[12%] select-none",
        opacityClass,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        priority={priority}
        className={cn("object-cover object-center", imageClassName)}
      />
    </motion.div>
  );
}
