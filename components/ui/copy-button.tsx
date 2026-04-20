"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/cn";

type Props = {
  value: string;
  label?: string;
  className?: string;
  size?: "sm" | "md";
};

export function CopyButton({ value, label = "copy", className, size = "sm" }: Props) {
  const [copied, setCopied] = React.useState(false);
  const timer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const el = document.createElement("textarea");
      el.value = value;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1400);
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      aria-label={copied ? "Copied" : "Copy contract address"}
      className={cn(
        "inline-flex items-center gap-1.5 text-text-muted hover:text-accent-deep transition-colors duration-200 ease-[var(--ease-ink)]",
        size === "sm" ? "text-[11px] tracking-widest uppercase" : "text-[13px]",
        className,
      )}
    >
      <span className="relative inline-flex h-4 w-4 items-center justify-center">
        <Copy
          className={cn(
            "absolute h-3.5 w-3.5 transition-all duration-200",
            copied ? "opacity-0 scale-75" : "opacity-100 scale-100",
          )}
        />
        <Check
          className={cn(
            "absolute h-3.5 w-3.5 transition-all duration-200",
            copied ? "opacity-100 scale-100" : "opacity-0 scale-75",
          )}
        />
      </span>
      <span aria-live="polite" aria-atomic="true">
        {copied ? "Sealed" : label}
      </span>
    </button>
  );
}
