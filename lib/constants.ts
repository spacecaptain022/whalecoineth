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

/** Hero “Track the Tide” — pair / pool page. */
export const DEXSCREENER_PAIR_URL =
  "https://dexscreener.com/ethereum/0x915dfae27050c500d8082a9e58e6f967f2fbae68" as const;

/** Etherscan homepage. */
export const ETHERSCAN_URL = "https://etherscan.io/" as const;

/** WHALE token on Etherscan — footer icon; stays aligned with `TOKEN.contract`. */
export const ETHERSCAN_TOKEN_URL = `https://etherscan.io/token/${TOKEN.contract}`;

/** Claim app: eligibility + whale watching dashboard. */
export const CLAIM_APP_URL = "https://claim.whalecoineth.com/" as const;

export const SOCIALS = {
  x: `https://x.com/${X_HANDLE}`,
  telegram: "https://t.me/",
  dexscreener: DEXSCREENER_URL,
  /** Header “Whale Watching Dashboard” — claim app. */
  whaleWatching: CLAIM_APP_URL,
  etherscan: ETHERSCAN_TOKEN_URL,
  buy: "https://app.uniswap.org/",
  /** Hero / final CTA “Check Eligibility” — claim app. */
  claimEligibility: CLAIM_APP_URL,
} as const;

export type NavItem = { readonly label: string; readonly href: string };

/** Header / mobile drawer links — empty hides the center nav. */
export const NAV: readonly NavItem[] = [];
