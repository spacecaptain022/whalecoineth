import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/ui/copy-button";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";
import { SOCIALS, TOKEN } from "@/lib/constants";

const FIELDS: { label: string; value: string; mono?: boolean }[] = [
  { label: "Ticker", value: TOKEN.ticker },
  { label: "Chain", value: TOKEN.chain },
  { label: "Supply", value: TOKEN.supply },
  { label: "Tax", value: TOKEN.tax },
  { label: "Liquidity", value: TOKEN.liquidity },
  { label: "Ownership", value: TOKEN.ownership },
  { label: "Launch", value: TOKEN.launch },
];

export function Registry() {
  return (
    <section
      id="registry"
      aria-labelledby="registry-title"
      className="relative border-t border-surface-dark/40 bg-surface/30"
    >
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8 py-24 md:py-32">
        <Reveal>
          <RevealItem className="mb-16">
            <SectionTitle
              eyebrow="The Registry"
              title={<>Chain. Contract. Supply. Status.</>}
              subtitle="The facts remain clear. The force behind them remains deeper."
              id="registry-title"
              align="center"
            />
          </RevealItem>
        </Reveal>

        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-surface-dark/70 bg-bg/70 shadow-[0_12px_40px_rgba(20,40,61,0.08),inset_0_0_0_1px_rgba(20,40,61,0.06)]">
            {/* Contract row spans full width */}
            <div className="flex flex-col gap-3 border-b border-surface-dark/60 p-8 md:p-10">
              <span className="eyebrow">Contract</span>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <code className="font-mono text-[14px] md:text-[16px] text-text break-all">
                  {TOKEN.contract}
                </code>
                <CopyButton value={TOKEN.contract} size="md" />
              </div>
            </div>

            <dl className="grid grid-cols-2 md:grid-cols-4">
              {FIELDS.map((f, i) => (
                <RevealItem
                  key={f.label}
                  className={[
                    "flex flex-col gap-2 p-6 md:p-8 border-surface-dark/60",
                    i % 2 !== 1 ? "border-r" : "md:border-r",
                    "md:border-r",
                    i < FIELDS.length - 2 ? "border-b" : "",
                    (i + 1) % 4 === 0 ? "md:border-r-0" : "",
                    i >= 4 ? "md:border-b-0" : "md:border-b",
                  ].join(" ")}
                >
                  <dt className="eyebrow">{f.label}</dt>
                  <dd
                    className={
                      f.mono
                        ? "font-mono text-[14px] text-text"
                        : "font-display text-[22px] md:text-[24px] text-text leading-tight"
                    }
                  >
                    {f.value}
                  </dd>
                </RevealItem>
              ))}
            </dl>

            <div className="relative z-10 flex flex-col gap-4 border-t border-surface-dark/60 p-6 md:flex-row md:items-center md:justify-between md:p-8">
              <div className="flex flex-col gap-1">
                <span className="eyebrow">Chart</span>
                <p className="text-[15px] leading-snug text-text-muted max-w-[40ch]">
                  Track liquidity and price on Dexscreener.
                </p>
              </div>
              <Button
                href={SOCIALS.dexscreener}
                external
                variant="primary"
                size="lg"
                className="shrink-0 self-start md:self-center"
              >
                Track the Tide
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
