import type { Metadata, Viewport } from "next";
import {
  Noto_Serif_JP,
  Shippori_Antique,
  Inter,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { GrainOverlay } from "@/components/layout/grain-overlay";
import { ParchmentBackground } from "@/components/layout/parchment-background";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LenisProvider } from "@/lib/lenis";

const display = Noto_Serif_JP({
  variable: "--font-display",
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const ink = Shippori_Antique({
  variable: "--font-ink",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://whalecoineth.xyz"),
  title: {
    default: "WhalecoinETH · The Deep Moves First",
    template: "%s · WhalecoinETH",
  },
  description:
    "A mythic Ethereum token shaped by conviction, silence, and unseen market force. The signal beneath the wave.",
  openGraph: {
    title: "WhalecoinETH · The Deep Moves First",
    description:
      "A mythic Ethereum token shaped by conviction, silence, and unseen market force.",
    type: "website",
    url: "/",
    siteName: "WhalecoinETH",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhalecoinETH · The Deep Moves First",
    description: "A silent giant on Ethereum. The signal beneath the wave.",
  },
};

export const viewport: Viewport = {
  themeColor: "#B8B4AB",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${ink.variable} ${body.variable} ${mono.variable} antialiased`}
    >
      <body className="min-h-dvh bg-bg text-text">
        <ParchmentBackground />
        <LenisProvider>
          <GrainOverlay />
          <AnnouncementBar />
          <Header />
          <main className="relative z-0">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
