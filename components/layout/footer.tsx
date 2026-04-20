import Image from "next/image";
import { CopyButton } from "@/components/ui/copy-button";
import { SOCIALS, TOKEN } from "@/lib/constants";

const iconLinkClass =
  "flex h-10 w-10 items-center justify-center rounded-lg border border-surface-dark/50 bg-foam/30 text-accent-deep transition-colors duration-200 ease-[var(--ease-ink)] hover:bg-foam/60 hover:border-accent-deep/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-deep";

const dexscreenerLogoSrc =
  "/brand/" + encodeURIComponent("dexscreener logo 1 [Vectorized].svg");

export function Footer() {
  return (
    <footer className="relative z-0 mt-16 rounded-t-2xl border-t border-surface-dark/50 bg-surface/40">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 py-8 md:py-9">
        <div className="flex flex-col items-center text-center gap-5">
          <div className="flex flex-col items-center gap-2">
            <span className="relative h-11 w-11 overflow-hidden rounded-full border border-accent-deep/50">
              <Image
                src="/brand/logo.jpeg"
                alt="Whalecoin"
                fill
                sizes="44px"
                className="object-cover scale-[1.05]"
              />
            </span>
            <span className="wordmark text-[16px] text-text">Whalecoin</span>
          </div>

          <nav
            className="flex flex-wrap items-center justify-center gap-2.5"
            aria-label="Social and explorers"
          >
            <a
              href={SOCIALS.x}
              target="_blank"
              rel="noopener noreferrer"
              className={iconLinkClass}
              aria-label="Whalecoin on X"
            >
              <Image
                src="/brand/xlogo.svg"
                alt=""
                width={20}
                height={20}
                className="h-5 w-5"
              />
            </a>
            <a
              href={SOCIALS.dexscreener}
              target="_blank"
              rel="noopener noreferrer"
              className={`${iconLinkClass} overflow-hidden p-1`}
              aria-label="Dexscreener"
            >
              <Image
                src={dexscreenerLogoSrc}
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
            </a>
            <a
              href={SOCIALS.etherscan}
              target="_blank"
              rel="noopener noreferrer"
              className={`${iconLinkClass} overflow-hidden p-1`}
              aria-label="Etherscan"
            >
              <Image
                src="/brand/etherscan-mark.svg"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
            </a>
          </nav>

          <div className="flex flex-col items-center gap-1.5 max-w-full">
            <span className="eyebrow">Contract</span>
            <span className="font-mono text-[12px] sm:text-[13px] text-text/80 break-all px-2">
              {TOKEN.contract}
            </span>
            <CopyButton value={TOKEN.contract} />
          </div>
        </div>
      </div>
    </footer>
  );
}
