import { Hero } from "@/components/sections/hero";
import { Why } from "@/components/sections/why";
import { LoreManifesto } from "@/components/sections/lore-manifesto";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Why />
      <LoreManifesto />
      <FinalCta />
    </>
  );
}
