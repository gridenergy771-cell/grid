/**
 * GRID project configuration.
 * Edit these values — nothing below should be hardcoded in the UI.
 */

/** Token launch time (ISO 8601, UTC). Utilities unlock 24h after this. */
export const GRID_LAUNCH_TIMESTAMP = "2026-09-06T12:00:00Z";

/** Milliseconds in the lock window after launch. */
export const GRID_LOCK_DURATION_MS = 24 * 60 * 60 * 1000;

export const X_URL = "https://x.com/gridonarc";

export const RADARDEX_URL = "https://radardex.pro";

/** Set to the real address once deployed. Keep as "COMING SOON" until then. */
export const GRID_CONTRACT_ADDRESS = "COMING SOON";

export const PROOF_PRIMARY_URL =
  "https://www.arc.network/blog/how-openvpp-is-exploring-realtime-energy-settlement-on-arc";

export const PROOF_SECONDARY_URL =
  "https://www.arc.network/blog/how-arc-supports-the-agentic-economy";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Infrastructure", href: "#infrastructure" },
  { label: "Proof", href: "#proof" },
  { label: "Utilities", href: "#utilities" },
  { label: "Token", href: "#token" },
] as const;

export const unlockTime = () =>
  new Date(GRID_LAUNCH_TIMESTAMP).getTime() + GRID_LOCK_DURATION_MS;
