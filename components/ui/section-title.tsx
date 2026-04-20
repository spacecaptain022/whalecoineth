import { cn } from "@/lib/cn";
import { DividerWave } from "./divider-wave";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  id?: string;
  rule?: boolean;
  className?: string;
  tone?: "light" | "dark";
};

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "left",
  id,
  rule = true,
  className,
  tone = "light",
}: Props) {
  const isDark = tone === "dark";
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start",
        className,
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "eyebrow flex items-center gap-3",
            isDark && "text-foam/60",
          )}
        >
          <span>{eyebrow}</span>
        </div>
      )}
      <h2
        id={id}
        className={cn(
          "font-display text-display-md max-w-3xl",
          isDark ? "text-foam" : "text-text",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "max-w-xl text-[17px] leading-[1.55]",
            isDark ? "text-foam/75" : "text-text-muted",
          )}
        >
          {subtitle}
        </p>
      )}
      {rule && (
        <div
          className={cn(
            "mt-2 w-full max-w-[420px]",
            align === "center" && "mx-auto",
          )}
        >
          <DividerWave tone={isDark ? "foam" : "muted"} />
        </div>
      )}
    </div>
  );
}
