import { Hero } from "@/components/sections/hero";
import { Origin } from "@/components/sections/origin";
import { Why } from "@/components/sections/why";
import { LoreManifesto } from "@/components/sections/lore-manifesto";
import { RyoshiVision } from "@/components/sections/ryoshi-vision";
import { Tides } from "@/components/sections/tides";
import { Transmission } from "@/components/sections/transmission";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Origin />
      <Why />
      <LoreManifesto />
      <RyoshiVision />
      <Tides />
      <Transmission />
      <FinalCta />
    </>
  );
}
