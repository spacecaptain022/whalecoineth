import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { SOCIALS, X_HANDLE } from "@/lib/constants";

export function Transmission() {
  return (
    <section
      id="transmission"
      aria-labelledby="transmission-title"
      className="relative overflow-hidden border-t border-foam/10 bg-accent-deep text-foam"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 20% 40%, rgba(221,208,185,0.5) 0%, transparent 55%)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8 py-20 md:py-28">
        <Reveal>
          <RevealItem className="mx-auto flex max-w-[640px] flex-col items-center gap-6 text-center">
            <span className="eyebrow text-foam/55">Transmission</span>
            <h2
              id="transmission-title"
              className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold uppercase leading-[1.05] tracking-[0.06em] text-[#c4a968]"
            >
              Join WhalecoinETH on X
            </h2>
            <p className="max-w-[42ch] text-[17px] leading-[1.65] text-foam/85">
              Real-time notes from the pod: launches, liquidity, and the slow
              current under the market. Nothing hidden. The official handle is
              always{" "}
              <span className="font-mono text-[15px] text-foam">
                @{X_HANDLE}
              </span>
              .
            </p>
            <div className="flex flex-col items-center gap-4 pt-2">
              <Button
                href={SOCIALS.x}
                external
                size="lg"
                className="bg-foam text-accent-deep hover:bg-bg hover:text-accent-deep"
              >
                Follow on X
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
              </Button>
              <a
                href={SOCIALS.x}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] tracking-[0.2em] uppercase text-foam/45 transition-colors hover:text-foam/70"
              >
                x.com/{X_HANDLE}
              </a>
            </div>
          </RevealItem>
        </Reveal>
      </div>
    </section>
  );
}
