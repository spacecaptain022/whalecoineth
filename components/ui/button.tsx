import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium whitespace-nowrap transition-all duration-200 ease-[var(--ease-ink)] disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent-deep text-foam hover:bg-[#0d1c2e] shadow-[inset_0_0_0_1px_rgba(242,237,224,0)] hover:shadow-[inset_0_0_0_1px_rgba(242,237,224,0.3)]",
  secondary:
    "bg-transparent text-text border border-accent-deep/70 hover:border-accent-deep hover:bg-accent-deep/5",
  ghost:
    "bg-transparent text-text hover:text-accent-deep underline-offset-4 hover:underline",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-4 text-[14px] rounded-xl tracking-wide",
  lg: "h-12 px-6 text-[15px] rounded-2xl tracking-wide",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type AsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type AsLink = CommonProps & {
  href: string;
  external?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export function Button(props: AsButton | AsLink) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    const { href, external, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    void _v; void _s; void _c; void _ch;
    if (external || /^https?:\/\//.test(href)) {
      return (
        <a
          {...rest}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link {...rest} href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } =
    props as AsButton;
  void _v; void _s; void _c; void _ch;
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}
