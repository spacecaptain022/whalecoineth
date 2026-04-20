import Image from "next/image";
import { CopyButton } from "@/components/ui/copy-button";
import { SOCIALS, TOKEN } from "@/lib/constants";

const NAV_COLS = [
  {
    title: "The Signal",
    links: [
      { label: "The Deep", href: "#deep" },
      { label: "Lineage", href: "#lineage" },
      { label: "The Tides", href: "#tides" },
      { label: "Transmission", href: "#transmission" },
    ],
  },
  {
    title: "Channels",
    links: [
      { label: "X", href: SOCIALS.x },
      { label: "Telegram", href: SOCIALS.telegram },
      { label: "Dexscreener", href: SOCIALS.dexscreener },
      { label: "Etherscan", href: SOCIALS.etherscan },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative z-0 mt-24 rounded-t-2xl border-t border-surface-dark/50 bg-surface/40">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="flex flex-col gap-5 max-w-sm">
            <div className="flex items-center gap-3">
              <span className="relative h-11 w-11 overflow-hidden rounded-full border border-accent-deep/50">
                <Image
                  src="/brand/logo.jpeg"
                  alt="WhalecoinETH"
                  fill
                  sizes="44px"
                  className="object-cover scale-[1.05]"
                />
              </span>
              <span className="wordmark text-[18px]">
                Whalecoin<span className="text-text-muted">ETH</span>
              </span>
            </div>
            <p className="font-ink text-[22px] text-text/80 leading-snug">
              A silent giant on Ethereum.
            </p>
            <p className="text-[13px] text-text-muted leading-[1.6] -mt-2">
              The signal beneath the wave. Built for those who think in tides.
            </p>
            <div className="flex flex-col gap-2 pt-2">
              <span className="eyebrow">Contract</span>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[12px] text-text/70 break-all">
                  {TOKEN.contract}
                </span>
              </div>
              <CopyButton value={TOKEN.contract} />
            </div>
          </div>

          {NAV_COLS.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <span className="eyebrow">{col.title}</span>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => {
                  const external = /^https?:\/\//.test(l.href);
                  return (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="ink-link text-[14px] text-text/80 hover:text-text"
                      >
                        {l.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-surface-dark/40 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-text-muted text-[12px] max-w-2xl leading-[1.6]">
            WhalecoinETH is a community meme asset. Nothing on this site is
            financial advice. Always verify the contract address before
            transacting. Digital assets are volatile and may lose value.
          </p>
          <p className="text-text-muted text-[11px] tracking-widest uppercase">
            © {new Date().getFullYear()} · WhalecoinETH
          </p>
        </div>
      </div>
    </footer>
  );
}
