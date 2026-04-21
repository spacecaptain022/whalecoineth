export const TOKEN = {
  ticker: "WHALE",
  chain: "Ethereum",
  chainId: 1,
  contract: "0xe81B8cF98Ed0bB77290aFb305893B3b3B9ca1110",
  contractShort: "0xe81B…1110",
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

/** Claim app: eligibility + whale watching dashboard. */
export const CLAIM_APP_URL = "https://claim.whalecoineth.com/" as const;

export const SOCIALS = {
  x: `https://x.com/${X_HANDLE}`,
  telegram: "https://t.me/",
  dexscreener: DEXSCREENER_URL,
  /** Header “Whale Watching Dashboard” — claim app. */
  whaleWatching: CLAIM_APP_URL,
  etherscan: ETHERSCAN_URL,
  buy: "https://app.uniswap.org/",
  /** Hero / final CTA “Check Eligibility” — claim app. */
  claimEligibility: CLAIM_APP_URL,
} as const;

export type NavItem = { readonly label: string; readonly href: string };

/** Header / mobile drawer links — empty hides the center nav. */
export const NAV: readonly NavItem[] = [];
