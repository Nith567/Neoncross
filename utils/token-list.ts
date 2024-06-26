import { SPLToken } from "@neonevm/token-transfer";
import { CHAIN_ID } from "./consts";

const tokenList = {
  name: "Neon",
  keywords: ["neon", "defi"],
  timestamp: "2022-10-06T15:20:13.751+03:00",
  tokens: [
    {
      chainId: 245022939,
      address_spl: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
      address: "0xf426d3A0EF80455dC9265b1c27C42B00336cF39F",
      decimals: 6,
      name: "USDT",
      symbol: "USDT",
      logoURI:
        "https://raw.githubusercontent.com/neonlabsorg/token-list/master/assets/tether-usdt-logo.svg",
    },
    {
      chainId: 245022939,
      address_spl: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      address: "0x65a326B15d7302F87E2C2fbbb90D86e1555007b9",
      decimals: 6,
      name: "USDC",
      symbol: "USDC",
      logoURI:
        "https://raw.githubusercontent.com/neonlabsorg/token-list/master/assets/usd-coin-usdc-logo.svg",
    },
    {
      chainId: 245022939,
      address_spl: "So11111111111111111111111111111111111111112",
      address: "0xe97dD0F6309Cc68cc114D9006FFd27731d0AA873",
      decimals: 9,
      name: "Wrapped SOL",
      symbol: "wSOL",
      logoURI:
        "https://raw.githubusercontent.com/neonlabsorg/token-list/master/assets/solana-wsol-logo.svg",
    },
    {
      chainId: 245022939,
      address: "0x57469B41E66B9b2Ad1750602451Dd3F1Fc10369B",
      decimals: 18,
      name: "Wrapped Neon",
      symbol: "wNEON",
      logoURI:
        "https://raw.githubusercontent.com/neonlabsorg/token-list/master/assets/wrapped-neon-logo.svg",
    },

    {
      chainId: 111,
      address_spl: "3vxj94fSd3jrhaGAwaEKGDPEwn5Yqs81Ay5j1BcdMqSZ",
      address: "0x5EE2CDe31b5d88A0574DAD2B4bb6A073A5b228a8",
      decimals: 6,
      name: "USDT",
      symbol: "USDT",
      logoURI:
        "https://raw.githubusercontent.com/neonlabsorg/token-list/master/assets/tether-usdt-logo.svg",
    },
    {
      chainId: 111,
      address_spl: "8QTYE7jw4oVYLqgNaks2Uu2S6VfboGcfpQ8Nvvta35Nc",
      address: "0x437c2606460cf14cbD33F5E266a2FaD044C5b74c",
      decimals: 9,
      name: "Dai Stablecoin (Wormhole)",
      symbol: "wDAI",
      logoURI:
        "https://raw.githubusercontent.com/neonlabsorg/token-list/master/assets/multi-collateral-dai-dai-logo.svg",
    },
    {
      chainId: 111,
      address_spl: "F4DgNXqiT3zUQA7dhqN5VzEPkRcd8vtqFwpJSwEEvnz5",
      address: "0x341b332b35441c37c1211f02F2C03c1516ac3AC8",
      decimals: 6,
      name: "USDC",
      symbol: "USDC",
      logoURI:
        "https://raw.githubusercontent.com/neonlabsorg/token-list/master/assets/usd-coin-usdc-logo.svg",
    },
    {
      chainId: 111,
      address_spl: "8F4V6tmyCgM4jnabiv8ohAGsLNrNWnwMrrXrY3LQwnwP",
      address: "0xbd5C9b22c9e0C41fE93aA863Da1402306A76d4fe",
      decimals: 6,
      name: "Wrapped Ethereum (Sollet)",
      symbol: "ETH",
      logoURI:
        "https://raw.githubusercontent.com/neonlabsorg/token-list/master/assets/ethereum-eth-logo.svg",
    },
    {
      chainId: 111,
      address_spl: "AaymAPLHxVh68UJU4TkmSDZRnmebWPi8yxP5tmXv5xVU",
      address: "0x7Db49A319636818f38dc2d12B51b13192e1b9141",
      decimals: 8,
      name: "Wrapped BTC (Wormhole)",
      symbol: "wWBTC",
      logoURI:
        "https://raw.githubusercontent.com/neonlabsorg/token-list/master/assets/wrapped-bitcoin-wbtc.svg",
    },
    {
      chainId: 111,
      address_spl: "HdvHZXp5F4ZPxb5V7xG4gpBnwmbzMite85NSg3aycmhi",
      address: "0x142Ec1Db2dc73932AE590C429D2BFd13732b70e2",
      decimals: 6,
      name: "Wrapped Aave",
      symbol: "AAVE",
      logoURI:
        "https://raw.githubusercontent.com/neonlabsorg/token-list/master/assets/aave-aave-logo.svg",
    },
    {
      chainId: 111,
      address_spl: "FTC9uerzkKGM2FzysdnxpPQMttkMDmjxsuiyGT5AmBnL",
      address: "0x633AC0dE8749f6c2fACb73665a05c622a272f291",
      decimals: 9,
      name: "Curve DAO Token (Wormhole)",
      symbol: "wCRV",
      logoURI:
        "https://raw.githubusercontent.com/neonlabsorg/token-list/master/assets/curve-dao-logo.svg",
    },
    {
      chainId: 111,
      address_spl: "GhFhboJyEt1iHYu6r563y3PxZQ4j8YserdF7YiCYcJUX",
      address: "0xa2b3D9E1E92Af208Ed6bc41d4428e500569Af66F",
      decimals: 6,
      name: "Wrapped SUSHI (Sollet)",
      symbol: "SUSHI",
      logoURI:
        "https://raw.githubusercontent.com/neonlabsorg/token-list/master/assets/sushiswap-sushi-logo.svg",
    },
    {
      chainId: 111,
      address_spl: "HU4jzc8c716ryzkfKYtg8PeJfYhjFmkmd3BGUh84fXqQ",
      address: "0x42D8b8A634F8e65e799BF762054647e589b4F73a",
      decimals: 9,
      name: "Balancer (Wormhole)",
      symbol: "wBAL",
      logoURI:
        "https://raw.githubusercontent.com/neonlabsorg/token-list/master/assets/balancer-bal.svg",
    },
    {
      chainId: 111,
      address_spl: "So11111111111111111111111111111111111111112",
      address: "0x16869acc45BA20abEFB2DdE2096F66373fDe364F",
      decimals: 9,
      name: "Wrapped SOL",
      symbol: "wSOL",
      logoURI:
        "https://raw.githubusercontent.com/neonlabsorg/token-list/master/assets/solana-wsol-logo.svg",
    },
    {
      chainId: 245022926,
      address: "0x11adC2d986E334137b9ad0a0F290771F31e9517F",
      decimals: 18,
      name: "Wrapped Neon",
      symbol: "wNEON",
      logoURI:
        "https://raw.githubusercontent.com/neonlabsorg/token-list/master/assets/wrapped-neon-logo.svg",
    },
    {
      chainId: 245022926,
      address_spl: "3vxj94fSd3jrhaGAwaEKGDPEwn5Yqs81Ay5j1BcdMqSZ",
      address: "0x6eEf939FC6e2B3F440dCbB72Ea81Cd63B5a519A5",
      decimals: 6,
      name: "USDT",
      symbol: "USDT",
      logoURI:
        "https://raw.githubusercontent.com/neonlabsorg/token-list/master/assets/tether-usdt-logo.svg",
    },
    {
      chainId: 245022926,
      address_spl: "8QTYE7jw4oVYLqgNaks2Uu2S6VfboGcfpQ8Nvvta35Nc",
      address: "0xC989FfF9d02C459117A2EaBb8dA3f03DFd9045DE",
      decimals: 9,
      name: "Dai Stablecoin (Wormhole)",
      symbol: "wDAI",
      logoURI:
        "https://raw.githubusercontent.com/neonlabsorg/token-list/master/assets/multi-collateral-dai-dai-logo.svg",
    },
    {
      chainId: 245022926,
      address_spl: "F4DgNXqiT3zUQA7dhqN5VzEPkRcd8vtqFwpJSwEEvnz5",
      address: "0x512E48836Cd42F3eB6f50CEd9ffD81E0a7F15103",
      decimals: 6,
      name: "USDC",
      symbol: "USDC",
      logoURI:
        "https://raw.githubusercontent.com/neonlabsorg/token-list/master/assets/usd-coin-usdc-logo.svg",
    },
    {
      chainId: 245022926,
      address_spl: "8F4V6tmyCgM4jnabiv8ohAGsLNrNWnwMrrXrY3LQwnwP",
      address: "0x46E986B5b0f87F1026ff52Ce20340467199F891D",
      decimals: 6,
      name: "Wrapped Ethereum (Sollet)",
      symbol: "ETH",
      logoURI:
        "https://raw.githubusercontent.com/neonlabsorg/token-list/master/assets/ethereum-eth-logo.svg",
    },
    {
      chainId: 245022926,
      address_spl: "AaymAPLHxVh68UJU4TkmSDZRnmebWPi8yxP5tmXv5xVU",
      address: "0x2B86AEf728405F8F6597e5896a1844E36ddE77aD",
      decimals: 8,
      name: "Wrapped BTC (Wormhole)",
      symbol: "wWBTC",
      logoURI:
        "https://raw.githubusercontent.com/neonlabsorg/token-list/master/assets/wrapped-bitcoin-wbtc.svg",
    },
    {
      chainId: 245022926,
      address_spl: "HdvHZXp5F4ZPxb5V7xG4gpBnwmbzMite85NSg3aycmhi",
      address: "0x10D486dD3B38a304cF61e8dA70ADED03D9a7787A",
      decimals: 6,
      name: "Wrapped Aave",
      symbol: "AAVE",
      logoURI:
        "https://raw.githubusercontent.com/neonlabsorg/token-list/master/assets/aave-aave-logo.svg",
    },
    {
      chainId: 245022926,
      address_spl: "FTC9uerzkKGM2FzysdnxpPQMttkMDmjxsuiyGT5AmBnL",
      address: "0x4cfb9dffB6998fB74c89a094E3A8373EA3C081ff",
      decimals: 9,
      name: "Curve DAO Token (Wormhole)",
      symbol: "wCRV",
      logoURI:
        "https://raw.githubusercontent.com/neonlabsorg/token-list/master/assets/curve-dao-logo.svg",
    },
    {
      chainId: 245022926,
      address_spl: "GhFhboJyEt1iHYu6r563y3PxZQ4j8YserdF7YiCYcJUX",
      address: "0x72a3DD8111813d9B29ACAB4b90622Ba95BDF1414",
      decimals: 6,
      name: "Wrapped SUSHI (Sollet)",
      symbol: "SUSHI",
      logoURI:
        "https://raw.githubusercontent.com/neonlabsorg/token-list/master/assets/sushiswap-sushi-logo.svg",
    },
    {
      chainId: 245022926,
      address_spl: "HU4jzc8c716ryzkfKYtg8PeJfYhjFmkmd3BGUh84fXqQ",
      address: "0x7047dcc44E38798AC0CB9DE465609A7dd95d04dC",
      decimals: 9,
      name: "Balancer (Wormhole)",
      symbol: "wBAL",
      logoURI:
        "https://raw.githubusercontent.com/neonlabsorg/token-list/master/assets/balancer-bal.svg",
    },
    {
      chainId: 245022926,
      address_spl: "So11111111111111111111111111111111111111112",
      address: "0xc7Fc9b46e479c5Cb42f6C458D1881e55E6B7986c",
      decimals: 9,
      name: "Wrapped SOL",
      symbol: "wSOL",
      logoURI:
        "https://raw.githubusercontent.com/neonlabsorg/token-list/master/assets/solana-wsol-logo.svg",
    },

    {
      chainId: 245022940,
      address_spl: "3vxj94fSd3jrhaGAwaEKGDPEwn5Yqs81Ay5j1BcdMqSZ",
      address: "0x5EE2CDe31b5d88A0574DAD2B4bb6A073A5b228a8",
      decimals: 6,
      name: "USDT",
      symbol: "USDT",
      logoURI:
        "https://raw.githubusercontent.com/neonlabsorg/token-list/master/assets/tether-usdt-logo.svg",
    },
    {
      chainId: 245022940,
      address_spl: "8QTYE7jw4oVYLqgNaks2Uu2S6VfboGcfpQ8Nvvta35Nc",
      address: "0x437c2606460cf14cbD33F5E266a2FaD044C5b74c",
      decimals: 9,
      name: "Dai Stablecoin (Wormhole)",
      symbol: "wDAI",
      logoURI:
        "https://raw.githubusercontent.com/neonlabsorg/token-list/master/assets/multi-collateral-dai-dai-logo.svg",
    },
    {
      chainId: 245022940,
      address_spl: "F4DgNXqiT3zUQA7dhqN5VzEPkRcd8vtqFwpJSwEEvnz5",
      address: "0x341b332b35441c37c1211f02F2C03c1516ac3AC8",
      decimals: 6,
      name: "USDC",
      symbol: "USDC",
      logoURI:
        "https://raw.githubusercontent.com/neonlabsorg/token-list/master/assets/usd-coin-usdc-logo.svg",
    },
    {
      chainId: 245022940,
      address_spl: "8F4V6tmyCgM4jnabiv8ohAGsLNrNWnwMrrXrY3LQwnwP",
      address: "0xbd5C9b22c9e0C41fE93aA863Da1402306A76d4fe",
      decimals: 6,
      name: "Wrapped Ethereum (Sollet)",
      symbol: "ETH",
      logoURI:
        "https://raw.githubusercontent.com/neonlabsorg/token-list/master/assets/ethereum-eth-logo.svg",
    },
    {
      chainId: 245022940,
      address_spl: "AaymAPLHxVh68UJU4TkmSDZRnmebWPi8yxP5tmXv5xVU",
      address: "0x7Db49A319636818f38dc2d12B51b13192e1b9141",
      decimals: 8,
      name: "Wrapped BTC (Wormhole)",
      symbol: "wWBTC",
      logoURI:
        "https://raw.githubusercontent.com/neonlabsorg/token-list/master/assets/wrapped-bitcoin-wbtc.svg",
    },
    {
      chainId: 245022940,
      address_spl: "HdvHZXp5F4ZPxb5V7xG4gpBnwmbzMite85NSg3aycmhi",
      address: "0x142Ec1Db2dc73932AE590C429D2BFd13732b70e2",
      decimals: 6,
      name: "Wrapped Aave",
      symbol: "AAVE",
      logoURI:
        "https://raw.githubusercontent.com/neonlabsorg/token-list/master/assets/aave-aave-logo.svg",
    },
    {
      chainId: 245022940,
      address_spl: "FTC9uerzkKGM2FzysdnxpPQMttkMDmjxsuiyGT5AmBnL",
      address: "0x633AC0dE8749f6c2fACb73665a05c622a272f291",
      decimals: 9,
      name: "Curve DAO Token (Wormhole)",
      symbol: "wCRV",
      logoURI:
        "https://raw.githubusercontent.com/neonlabsorg/token-list/master/assets/curve-dao-logo.svg",
    },
    {
      chainId: 245022940,
      address_spl: "GhFhboJyEt1iHYu6r563y3PxZQ4j8YserdF7YiCYcJUX",
      address: "0xa2b3D9E1E92Af208Ed6bc41d4428e500569Af66F",
      decimals: 6,
      name: "Wrapped SUSHI (Sollet)",
      symbol: "SUSHI",
      logoURI:
        "https://raw.githubusercontent.com/neonlabsorg/token-list/master/assets/sushiswap-sushi-logo.svg",
    },
    {
      chainId: 245022940,
      address_spl: "HU4jzc8c716ryzkfKYtg8PeJfYhjFmkmd3BGUh84fXqQ",
      address: "0x42D8b8A634F8e65e799BF762054647e589b4F73a",
      decimals: 9,
      name: "Balancer (Wormhole)",
      symbol: "wBAL",
    },
    {
      chainId: 245022940,
      address_spl: "So11111111111111111111111111111111111111112",
      address: "0x16869acc45BA20abEFB2DdE2096F66373fDe364F",
      decimals: 9,
      name: "Wrapped SOL",
      symbol: "wSOL",
      logoURI:
        "https://raw.githubusercontent.com/neonlabsorg/token-list/master/assets/solana-wsol-logo.svg",
    },
    {
      chainId: 245022934,
      address_spl: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
      address: "0x5f0155d08eF4aaE2B500AefB64A3419dA8bB611a",
      decimals: 6,
      name: "USDT",
      symbol: "USDT",
      logoURI:
        "https://raw.githubusercontent.com/neonlabsorg/token-list/master/assets/tether-usdt-logo.svg",
    },
    {
      chainId: 245022934,
      address_spl: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      address: "0xEA6B04272f9f62F997F666F07D3a974134f7FFb9",
      decimals: 6,
      name: "USDC",
      symbol: "USDC",
      logoURI:
        "https://raw.githubusercontent.com/neonlabsorg/token-list/master/assets/usd-coin-usdc-logo.svg",
    },
    {
      chainId: 245022934,
      address_spl: "So11111111111111111111111111111111111111112",
      address: "0x5f38248f339Bf4e84A2caf4e4c0552862dC9F82a",
      decimals: 9,
      name: "Wrapped SOL",
      symbol: "wSOL",
      logoURI:
        "https://raw.githubusercontent.com/neonlabsorg/token-list/master/assets/solana-wsol-logo.svg",
    },
    {
      chainId: 245022934,
      address_spl: "7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs",
      address: "0xcFFd84d468220c11be64dc9dF64eaFE02AF60e8A",
      decimals: 8,
      name: "Wrapped Ether (Wormhole)",
      symbol: "WETH",
      logoURI:
        "https://raw.githubusercontent.com/neonlabsorg/token-list/master/assets/wormhole-weth-logo.svg",
    },
    {
      chainId: 245022934,
      address_spl: "9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E",
      address: "0x54EcEC9D995A6CbFF3838F6a8F38099E518805d7",
      decimals: 6,
      name: "Wrapped Bitcoin (Sollet)",
      symbol: "BTC",
      logoURI:
        "https://raw.githubusercontent.com/neonlabsorg/token-list/master/assets/sollet-wbtc-logo.svg",
    },
    {
      chainId: 245022934,
      address: "0x202C35e517Fa803B537565c40F0a6965D7204609",
      decimals: 18,
      name: "Wrapped Neon",
      symbol: "wNEON",
      logoURI:
        "https://raw.githubusercontent.com/neonlabsorg/token-list/master/assets/wrapped-neon-logo.svg",
    },
  ],
  version: {
    major: 5,
    minor: 0,
    patch: 0,
  },
};

export const TOKEN_LIST: SPLToken[] = tokenList.tokens.filter(
  (token) => token.chainId === CHAIN_ID
) as SPLToken[];
