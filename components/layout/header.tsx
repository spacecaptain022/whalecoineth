"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { LineChart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV, SOCIALS, X_HANDLE } from "@/lib/constants";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const hasNav = NAV.length > 0;

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
      <div
        className={cn(
          "relative mx-auto grid h-16 max-w-[1440px] grid-cols-[1fr_auto] items-center gap-3 px-4 sm:px-6 md:gap-4 md:px-8",
          hasNav ? "md:grid-cols-[1fr_auto_1fr]" : "md:grid-cols-[1fr_auto]",
        )}
      >
        <Link
          href="/"
          className="col-start-1 row-start-1 flex min-w-0 items-center gap-2 justify-self-start group sm:gap-3 md:justify-self-start"
        >
          <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-accent-deep/50 shadow-[inset_0_0_0_1px_rgba(231,233,230,0.45)] transition-transform duration-500 ease-[var(--ease-tide)] group-hover:-translate-y-0.5">
            <Image
              src="/brand/logo.jpeg"
              alt="Whalecoin"
              fill
              sizes="40px"
              className="object-cover scale-[1.05]"
              priority
            />
          </span>
          <span className="wordmark truncate text-[16px] text-text sm:text-[18px]">
            Whalecoin
          </span>
        </Link>

        {hasNav ? (
          <nav className="col-start-2 row-start-1 hidden items-center justify-self-center gap-8 md:flex">
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
        ) : null}

        <div
          className={cn(
            "hidden md:row-start-1 md:flex md:w-auto md:items-center md:justify-self-end md:gap-[1.875rem]",
            hasNav ? "md:col-start-3" : "md:col-start-2",
          )}
        >
          <Button
            href={SOCIALS.whaleWatching}
            external
            size="md"
            className="inline-flex h-10 shrink-0 items-center justify-center gap-1.5 whitespace-nowrap px-3 text-[13px] leading-none"
          >
            <LineChart className="h-4 w-4 shrink-0" aria-hidden />
            Whale Watching Dashboard
          </Button>
          <a
            href={SOCIALS.x}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-md text-accent-deep transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-deep"
            aria-label={`Whalecoin on X (@${X_HANDLE})`}
          >
            <Image
              src="/brand/xlogo.svg"
              alt=""
              width={22}
              height={22}
              className="h-[22px] w-[22px]"
              aria-hidden
            />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="col-start-2 row-start-1 inline-flex h-10 w-10 shrink-0 items-center justify-center justify-self-end rounded-xl text-text hover:bg-surface/60 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <Menu className="h-5 w-5" aria-hidden />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "md:hidden overflow-hidden border-b border-surface-dark/40 transition-[max-height,opacity] duration-400 ease-[var(--ease-tide)]",
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="mx-3 mb-3 flex flex-col gap-1 rounded-2xl border border-surface-dark/30 bg-bg/90 px-3 py-4 backdrop-blur-md">
          {hasNav
            ? NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-3 px-2 text-[15px] text-text border-b border-surface-dark/30 last:border-b-0"
                >
                  {item.label}
                </a>
              ))
            : null}
          <div
            className={cn(
              "flex justify-center px-1",
              hasNav && "mt-3",
            )}
          >
            <div className="flex max-w-full items-center justify-center gap-2.5">
              <Button
                href={SOCIALS.whaleWatching}
                external
                size="lg"
                className="shrink-0 items-center justify-center gap-2 whitespace-nowrap px-4"
              >
                <LineChart className="h-4 w-4 shrink-0" aria-hidden />
                Whale Watching Dashboard
              </Button>
              <a
                href={SOCIALS.x}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="shrink-0 rounded-md text-accent-deep transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-deep"
                aria-label={`Whalecoin on X (@${X_HANDLE})`}
              >
                <Image
                  src="/brand/xlogo.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="h-6 w-6"
                  aria-hidden
                />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
