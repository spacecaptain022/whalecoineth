import { TOKEN } from "@/lib/constants";
import { CopyButton } from "@/components/ui/copy-button";

export function AnnouncementBar() {
  return (
    <div className="relative z-40 rounded-b-2xl bg-night-bar text-gold shadow-[0_8px_24px_-8px_rgba(16,31,49,0.45)]">
      <div className="mx-auto flex h-9 max-w-[1440px] items-center gap-4 px-4 sm:px-6 md:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <span className="eyebrow text-gold/75 hidden sm:inline">
            {TOKEN.chain.toUpperCase()}
          </span>
          <span className="h-3 w-px bg-gold/25 hidden sm:inline-block" />
          <span className="font-mono text-[11px] sm:text-[12px] text-gold truncate">
            {TOKEN.contractShort}
          </span>
          <CopyButton
            value={TOKEN.contract}
            className="text-gold/75 hover:text-gold"
          />
        </div>
      </div>
    </div>
  );
}
