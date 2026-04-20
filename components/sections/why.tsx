import { ParallaxImage } from "@/components/ui/parallax-image";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";
import { WhyPillarGrid } from "@/components/sections/why-pillar-grid";

export function Why() {
  return (
    <section
      id="why"
      aria-labelledby="why-title"
      className="relative overflow-hidden border-t border-surface-dark/40 bg-accent-deep text-gold"
    >
      {/* Parallax background image */}
      <ParallaxImage
        src="/brand/4pillars.png"
        opacityClass="opacity-40"
        strength={10}
        mobileHorizontalPan
        mobileScrollZoom
        mobileZoomFrom={1.52}
        mobileZoomTo={1}
      />
      {/* Readability gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,40,61,0.9) 0%, rgba(20,40,61,0.55) 30%, rgba(20,40,61,0.55) 70%, rgba(20,40,61,0.9) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8 py-24 md:py-32">
        <Reveal>
          <RevealItem>
            <SectionTitle
              eyebrow="The Pillars"
              title={<>Four truths the Whale moves by.</>}
              id="why-title"
              tone="dark"
            />
          </RevealItem>
        </Reveal>

        <WhyPillarGrid />
      </div>
    </section>
  );
}
