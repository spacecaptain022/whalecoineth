import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  tone?: "default" | "live" | "next" | "deep";
  className?: string;
};

export function Badge({ children, tone = "default", className }: Props) {
  const tones = {
    default: "border-surface-dark/70 text-text-muted",
    live: "border-accent-deep/70 text-accent-deep",
    next: "border-accent-deep/40 text-text/80",
    deep: "border-text-muted/40 text-text-muted",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border px-2.5 py-0.5 text-[10px] uppercase tracking-[0.22em] rounded-full",
        tones[tone],
        className,
      )}
    >
      {tone === "live" && (
        <span className="relative inline-flex h-1.5 w-1.5">
          <span className="absolute inset-0 rounded-full bg-accent-deep opacity-70 animate-ping" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-deep" />
        </span>
      )}
      {children}
    </span>
  );
}
