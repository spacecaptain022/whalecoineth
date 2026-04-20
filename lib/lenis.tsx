"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      autoResize: true,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const bump = () => lenis.resize();

    window.addEventListener("resize", bump);
    window.addEventListener("orientationchange", bump);
    const onLoad = () => bump();
    window.addEventListener("load", onLoad);

    const ro =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(() => bump())
        : null;
    ro?.observe(document.documentElement);
    if (document.body) ro?.observe(document.body);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", bump);
      window.removeEventListener("orientationchange", bump);
      window.removeEventListener("load", onLoad);
      ro?.disconnect();
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
