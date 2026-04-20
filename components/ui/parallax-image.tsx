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
  /**
   * Below `lg` (1024px), scroll through the section translates the image horizontally
   * (left → right across the artwork) instead of vertical parallax.
   */
  mobileHorizontalPan?: boolean;
  /**
   * Horizontal pan end as % of the inner layer width. If omitted, uses a full
   * edge-to-edge scan: ((widthPct - 100) / widthPct) × 100 so the viewport
   * crosses from one side of the image to the other without dead space.
   */
  mobilePanRange?: number;
  /** Inner width vs section when panning (must exceed 100). Default 220. */
  mobilePanWidthPct?: number;
  /** Extra classes for the inner image (e.g. object-position). */
  imageClassName?: string;
  /** Disable priority loading. */
  priority?: boolean;
  /**
   * Below `lg` (1024px), scale from `mobileZoomFrom` → `mobileZoomTo` as the section
   * scrolls through the viewport (zoom-out while scrolling down).
   */
  mobileScrollZoom?: boolean;
  /** Scale at the start of scroll progress (narrow only). Default 1.14 */
  mobileZoomFrom?: number;
  /** Scale at the end of scroll progress (narrow only). Default 1 */
  mobileZoomTo?: number;
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
  mobileHorizontalPan = false,
  mobilePanRange,
  mobilePanWidthPct = 220,
  imageClassName,
  priority = false,
  mobileScrollZoom = false,
  mobileZoomFrom = 1.14,
  mobileZoomTo = 1,
}: Props) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [isNarrow, setIsNarrow] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const sync = () => setIsNarrow(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Use transform functions so x/y follow `isNarrow` after resize (output ranges
  // in the array form are fixed at mount).
  const y = useTransform(scrollYProgress, (v) => {
    if (reduced || (mobileHorizontalPan && isNarrow)) return "0%";
    const t = 2 * v - 1;
    return `${t * strength}%`;
  });

  const x = useTransform(scrollYProgress, (v) => {
    if (!mobileHorizontalPan || !isNarrow || reduced) return "0%";
    const w = mobilePanWidthPct;
    const fullSpan =
      mobilePanRange != null && mobilePanRange >= 0
        ? mobilePanRange
        : w > 100
          ? ((w - 100) / w) * 100
          : 0;
    return `${-v * fullSpan}%`;
  });

  const scale = useTransform(scrollYProgress, (v) => {
    if (reduced || !mobileScrollZoom || !isNarrow) return 1;
    return mobileZoomFrom + (mobileZoomTo - mobileZoomFrom) * v;
  });

  const image = (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={
        mobileHorizontalPan && isNarrow ? "240vw" : "100vw"
      }
      priority={priority}
      className={cn(
        "object-cover",
        mobileHorizontalPan && isNarrow ? "object-left" : "object-center",
        imageClassName,
      )}
    />
  );

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      style={{
        y,
        scale,
        transformOrigin: mobileScrollZoom ? "center center" : undefined,
        willChange: "transform",
      }}
      className={cn(
        "pointer-events-none absolute inset-x-0 -top-[12%] -bottom-[12%] select-none",
        opacityClass,
      )}
    >
      {mobileHorizontalPan ? (
        <motion.div
          className={cn(
            "absolute inset-y-0 left-0 h-full max-w-none",
            isNarrow ? undefined : "w-full right-0",
          )}
          style={
            isNarrow
              ? { width: `${mobilePanWidthPct}%`, x, willChange: "transform" }
              : { x: 0, width: "100%" }
          }
        >
          {image}
        </motion.div>
      ) : (
        image
      )}
    </motion.div>
  );
}
