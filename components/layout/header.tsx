"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV, SOCIALS } from "@/lib/constants";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all duration-300 ease-[var(--ease-tide)]",
        scrolled
          ? "backdrop-blur-md bg-bg/75 border-b border-surface-dark/40"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="relative mx-auto grid h-16 max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center gap-0 px-4 sm:px-6 md:gap-4 md:px-8">
        <Link
          href="/"
          className="col-start-1 flex items-center gap-3 justify-self-start group"
        >
          <span className="relative h-10 w-10 overflow-hidden rounded-full border border-accent-deep/50 shadow-[inset_0_0_0_1px_rgba(242,237,224,0.4)] transition-transform duration-500 ease-[var(--ease-tide)] group-hover:-translate-y-0.5">
            <Image
              src="/brand/logo.jpeg"
              alt="WhalecoinETH"
              fill
              sizes="40px"
              className="object-cover scale-[1.05]"
              priority
            />
          </span>
          <span className="wordmark text-[18px] text-text">
            Whalecoin<span className="text-text-muted">ETH</span>
          </span>
        </Link>

        <nav className="col-start-2 hidden items-center justify-self-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="ink-link text-[13px] tracking-wide text-text/80 hover:text-text"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="col-start-3 flex min-w-0 w-full items-center justify-end gap-2 sm:gap-3 md:w-auto md:justify-self-end">
          <Button href={SOCIALS.buy} external size="md" className="hidden sm:inline-flex">
            Enter
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-text hover:bg-surface/60"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "md:hidden overflow-hidden border-b border-surface-dark/40 transition-[max-height,opacity] duration-400 ease-[var(--ease-tide)]",
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="mx-3 mb-3 flex flex-col gap-1 rounded-2xl border border-surface-dark/30 bg-bg/90 px-3 py-4 backdrop-blur-md">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-3 px-2 text-[15px] text-text border-b border-surface-dark/30 last:border-b-0"
            >
              {item.label}
            </a>
          ))}
          <Button
            href={SOCIALS.buy}
            external
            size="lg"
            className="mt-3 w-full justify-center"
          >
            Enter the Current
          </Button>
        </nav>
      </div>
    </header>
  );
}
