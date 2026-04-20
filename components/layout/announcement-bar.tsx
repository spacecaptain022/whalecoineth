import { TOKEN, SOCIALS } from "@/lib/constants";
import { CopyButton } from "@/components/ui/copy-button";

export function AnnouncementBar() {
  return (
    <div className="relative z-40 rounded-b-2xl bg-accent-deep text-foam shadow-[0_8px_24px_-8px_rgba(20,40,61,0.35)]">
      <div className="mx-auto flex h-9 max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 md:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <span className="eyebrow text-foam/70 hidden sm:inline">
            {TOKEN.chain.toUpperCase()}
          </span>
          <span className="h-3 w-px bg-foam/20 hidden sm:inline-block" />
          <span className="font-mono text-[11px] sm:text-[12px] text-foam/90 truncate">
            {TOKEN.contractShort}
          </span>
          <CopyButton
            value={TOKEN.contract}
            className="text-foam/70 hover:text-foam"
          />
        </div>
        <a
          href={SOCIALS.buy}
          target="_blank"
          rel="noopener noreferrer"
          className="eyebrow text-foam/80 hover:text-foam transition-colors"
        >
          Enter the Current →
        </a>
      </div>
    </div>
  );
}
