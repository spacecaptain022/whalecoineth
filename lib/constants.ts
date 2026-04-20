export const TOKEN = {
  ticker: "WHALE",
  chain: "Ethereum",
  chainId: 1,
  contract: "0x0000000000000000000000000000000000000000",
  contractShort: "0x0000…0000",
  supply: "1,000,000,000",
  tax: "0 / 0",
  liquidity: "Locked",
  ownership: "Renounced",
  launch: "TBA",
} as const;

/** Official X handle (no @) — used for embeds and links. */
export const X_HANDLE = "whalecoineth" as const;

/** Dexscreener homepage (footer icon, charts). */
export const DEXSCREENER_URL = "https://dexscreener.com/" as const;

/** Etherscan homepage (footer icon). Token page: `https://etherscan.io/token/${TOKEN.contract}` */
export const ETHERSCAN_URL = "https://etherscan.io/" as const;

export const SOCIALS = {
  x: `https://x.com/${X_HANDLE}`,
  telegram: "https://t.me/",
  dexscreener: DEXSCREENER_URL,
  /** Pair / chart page for “watch the tide” — set to your Dexscreener pair URL when live. */
  whaleWatching: DEXSCREENER_URL,
  etherscan: ETHERSCAN_URL,
  buy: "https://app.uniswap.org/",
  /** Claim / eligibility checker — replace with your live claim URL. */
  claimEligibility: DEXSCREENER_URL,
} as const;

export type NavItem = { readonly label: string; readonly href: string };

/** Header / mobile drawer links — empty hides the center nav. */
export const NAV: readonly NavItem[] = [];
