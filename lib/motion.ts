import type { Variants } from "framer-motion";

export const EASE_TIDE = [0.22, 1, 0.36, 1] as const;
export const EASE_INK = [0.65, 0, 0.35, 1] as const;

/** Viewport: float in when entering, float out when leaving (respect reduced motion elsewhere). */
export const floatViewport = {
  once: false,
  margin: "-8% 0px -10% 0px",
  amount: 0.2,
} as const;

export const floatViewportReduced = {
  once: true,
  margin: "-10% 0px",
  amount: 0.2,
} as const;

export const fadeRise: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
    transition: { duration: 0.52, ease: EASE_TIDE },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE_TIDE },
  },
};

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
    transition: { duration: 0.28, ease: EASE_TIDE },
  },
  show: {
    opacity: 1,
    transition: { duration: 0.45, ease: EASE_TIDE },
  },
};

export const staggerParent: Variants = {
  hidden: {
    transition: {
      staggerChildren: 0.055,
      staggerDirection: -1,
    },
  },
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.06,
    },
  },
};

export const clipReveal: Variants = {
  hidden: {
    clipPath: "inset(0 0 100% 0)",
    opacity: 0,
    y: 12,
    transition: { duration: 0.55, ease: EASE_TIDE },
  },
  show: {
    clipPath: "inset(0 0 0% 0)",
    opacity: 1,
    y: 0,
    transition: { duration: 1.05, ease: EASE_TIDE },
  },
};

export const drawLine: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
    transition: {
      pathLength: { duration: 0.65, ease: EASE_TIDE },
      opacity: { duration: 0.35, ease: EASE_TIDE },
    },
  },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.5, ease: EASE_TIDE },
  },
};
