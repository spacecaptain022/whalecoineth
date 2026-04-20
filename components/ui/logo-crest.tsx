import { cn } from "@/lib/cn";

type Props = {
  size?: number;
  className?: string;
  tone?: "ink" | "foam";
};

export function LogoCrest({ size = 44, className, tone = "ink" }: Props) {
  const stroke = tone === "foam" ? "#F2EDE0" : "#14283D";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      role="img"
      aria-label="Whalecoin crest"
      className={cn("shrink-0", className)}
    >
      <circle
        cx="32"
        cy="32"
        r="30"
        stroke={stroke}
        strokeWidth="1"
        opacity="0.9"
      />
      <circle
        cx="32"
        cy="32"
        r="25"
        stroke={stroke}
        strokeWidth="0.6"
        opacity="0.45"
      />
      {/* Wave arc */}
      <path
        d="M8 38 C 16 32, 22 44, 32 38 S 48 32, 56 38"
        stroke={stroke}
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M12 44 C 20 40, 26 48, 32 44 S 46 40, 52 44"
        stroke={stroke}
        strokeWidth="0.8"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />
      {/* Whale silhouette */}
      <path
        d="M22 26 C 24 22, 30 20, 34 22 C 38 23, 41 25, 43 27 L 46 24 L 45.6 28 L 48 28 L 45.6 30 L 46 33 L 43 30 C 41 32, 36 33, 32 32 C 27 31, 23 29, 22 26 Z"
        fill={stroke}
      />
      <circle cx="25.5" cy="25.5" r="0.8" fill="#E2D2B6" />
    </svg>
  );
}
