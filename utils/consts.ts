import { clusterApiUrl } from "@solana/web3.js";
import { NEON_TOKEN_MINT_DECIMALS, SPLToken } from "@neonevm/token-transfer";
import Web3 from "web3";

export const NEON_CHAIN_IDS: any[] = [
  { id: 111, name: "LOCAL" },
  { id: 245022926, name: "devnet" },
  { id: 245022940, name: "testnet" },
  { id: 245022934, name: "mainnet-beta" },
];

export const NEON_TOKEN_MODEL: SPLToken = {
  chainId: 0,
  address_spl: "",
  address: "",
  decimals: NEON_TOKEN_MINT_DECIMALS,
  name: "Neon",
  symbol: "NEON",
  logoURI:
    "https://raw.githubusercontent.com/neonlabsorg/token-list/main/neon_token_md.png",
};

export const CHAIN_NAME = "devnet";
export const CHAIN_ID = NEON_CHAIN_IDS.find((i) => i.name === CHAIN_NAME)!.id;
export const SOLANA_DEVNET = clusterApiUrl(CHAIN_NAME);
export const NEON_DEVNET = new Web3.providers.HttpProvider(
  "https://devnet.neonevm.org"
);

export const NEON_PRIVATE =
  "0x1dd8c1fcdb35b2ed8314c96bc2a6d4984c4181a242b894d509ff7ec80bcbbe12";
export const SOLANA_PRIVATE =
  "H8xwgg4vcScvf7GEAaWr7tVzVsmeSJNJokJ5KyN17UgniAPTWAXcyNSU9xca9zJ1JvV7WMkYidwv1dxjt1XQRSV";
