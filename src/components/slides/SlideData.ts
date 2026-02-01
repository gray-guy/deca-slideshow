import bgMain from "@/assets/bg-main.png";
import bg1 from "@/assets/bg-1.png";
import bg2 from "@/assets/bg-2.png";
import bg3 from "@/assets/bg-3.png";

export interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  badge?: string;
  content: SlideContent;
  background: string;
}

export interface SlideContent {
  type: "hero" | "overview" | "protocol" | "users" | "features" | "streaming" | "dex" | "algorithm" | "hotpairs" | "hotpairs-algo" | "instasettle" | "maintenance" | "fees" | "subgraph" | "roadmap" | "closing";
  data?: any;
}

export const slides: Slide[] = [
  {
    id: 1,
    title: "DECA Stream",
    subtitle: "Decentralized Hybrid Routing Protocol",
    badge: "Ethereum Mainnet",
    content: {
      type: "hero",
      data: {
        tagline: "Reducing Slippage to Under 10BPS for High-Volume Token Trading",
        badges: ["Ethereum Mainnet", "Smart Contract Verified"]
      }
    },
    background: bgMain
  },
  {
    id: 2,
    title: "What We'll Cover",
    badge: "PRESENTATION OVERVIEW",
    content: {
      type: "overview",
      data: {
        sections: [
          { num: "01", title: "What is DECAStream?", desc: "Core value proposition and the problem it solves in decentralized trading" },
          { num: "02", title: "Core Protocol Features", desc: "Streaming, Hot Pairs, Instasettle, and autonomous maintenance" },
          { num: "03", title: "Streaming & DEX Mechanics", desc: "Sweet Spot Algorithm and supported decentralized exchanges" },
          { num: "04", title: "Hot Pairs Algorithm", desc: "Finding high-value opportunities with $100K-$1M+ savings potential" },
          { num: "05", title: "Instasettle & Architecture", desc: "OTC-style settlement and protocol fee structure" },
          { num: "06", title: "Future Roadmap", desc: "Upcoming DEX integrations, cross-chain plans, and new features" }
        ]
      }
    },
    background: bg1
  },
  {
    id: 3,
    title: "What is DECAStream?",
    badge: "PROTOCOL OVERVIEW",
    content: {
      type: "protocol",
      data: {
        description: "DECAStream is a decentralized hybrid routing protocol designed to reduce slippage to under 10BPS for the top 250 tokens against core stable tokens.",
        coreTokens: ["WBTC", "WETH", "DAI", "USDC", "USDT"],
        problem: "When trading illiquid tokens that have high market capitalization but low liquidity across popular DEXs, executing large trade volumes incurs considerable slippage loss.",
        solution: ["Stream trades out chunk by chunk to minimize market impact", "Achieve as close to 99% price accuracy compared to global market price"],
        metrics: [
          { label: "Slippage Target", value: "<10 BPS" },
          { label: "Price Accuracy", value: "~99%" },
          { label: "Supported Tokens", value: "Top 250" }
        ]
      }
    },
    background: bg2
  },
  {
    id: 4,
    title: "Target Users",
    badge: "WHO WE SERVE",
    content: {
      type: "users",
      data: {
        userGroups: [
          { title: "Market Makers", features: ["Arbitrage", "Volume Growth"], desc: "Drive throughput to invite arbitrage and increase daily volume for tokens and projects." },
          { title: "Experienced Traders", features: ["CEX-DEX Bridge", "Strategy Optimization"], desc: "Leverage Hot Pairs to evaluate buys and sells from CEX to DEX and back." },
          { title: "DEX Aggregators & Platforms", features: ["Core Contract", "Easy Integration"], desc: "Auto-route to trade placement endpoint via calling placeTrade() on the Core contract." }
        ],
        contractAddress: "0x66be9da4d7312d48c855be1fc4c1e979b6e94cc2"
      }
    },
    background: bg3
  },
  {
    id: 5,
    title: "Core Protocol Features",
    badge: "FEATURES",
    content: {
      type: "features",
      data: {
        features: [
          { title: "Streaming Trades", subtitle: "Optimized Execution", desc: "Execute trade volume in portions composed deterministically at the moment of execution." },
          { title: "Hot Pairs", subtitle: "High-Value Opportunities", desc: "One-click shop with customizable interface to maximize trade performance. Savings: $100K - $1M+" },
          { title: "Instasettle", subtitle: "OTC-Style Settlement", desc: "Trades can be immediately settled at the trade owner set price. Two modes: Standard and OnlyInstasettle." },
          { title: "Autonomous Maintenance", subtitle: "Bot-Driven Settlement", desc: "Server-side bots probe trade execution periodically. Bot Incentive: 10 BPS per stream." }
        ]
      }
    },
    background: bgMain
  },
  {
    id: 6,
    title: "Streaming Trades",
    badge: "STREAMING MECHANICS",
    content: {
      type: "streaming",
      data: {
        benefits: ["Minimized Slippage", "Large trades broken into smaller chunks reduce market impact"],
        explanation: "Streaming trades are characterized by executing a trade volume in portions. These portions are composed deterministically at the moment of executing a trade.",
        steps: [
          { num: 1, title: "Trade Volume Analysis", desc: "Smart contract analyzes the total trade volume and available liquidity across DEXs" },
          { num: 2, title: "Sweet Spot Calculation", desc: "Algorithm determines optimal stream size to keep slippage under 10BPS" },
          { num: 3, title: "Sequential Execution", desc: "Each stream is executed one at a time, allowing market to rebalance" },
          { num: 4, title: "Dynamic Recalculation", desc: "Stream count and size recalculated at each maintenance call" }
        ],
        characteristics: [
          { label: "Deterministic Size", value: "Yes" },
          { label: "Dynamic Adjustment", value: "Yes" },
          { label: "Arbitrage Window", value: "Built-in" }
        ]
      }
    },
    background: bg1
  },
  {
    id: 7,
    title: "DEX Mechanics & Supported Platforms",
    badge: "DEX INTEGRATION",
    content: {
      type: "dex",
      data: {
        dexes: [
          { name: "UniswapV2", detail: "All Fee Tiers" },
          { name: "UniswapV3", detail: "All Fee Tiers" },
          { name: "Sushiswap", detail: "Multi-Chain" },
          { name: "BalancerV2", detail: "Weighted Pools" }
        ],
        explanation: "DECAStream supports 8 of the most popular DEXs in the Ethereum ecosystem, providing comprehensive coverage for optimal trade execution.",
        executionLogic: [
          { title: "Reserve Analysis", desc: "Smart contracts call system DEXs and read their reserves of tokenIn." },
          { title: "DEX Selection", desc: "DEX with the highest reserve is elected as most suitable for execution." },
          { title: "Algorithm Application", desc: "Once reserveIn is attained, sweet spot algorithm determines stream volume." }
        ]
      }
    },
    background: bg2
  },
  {
    id: 8,
    title: "The Sweet Spot Algorithm",
    badge: "ALGORITHM",
    content: {
      type: "algorithm",
      data: {
        formula: "x × y = k",
        explanation: "The Sweet Spot Algorithm is a binary searching algorithm using the balance equation from UniswapV2 and other popular DEXs.",
        process: [
          { num: 1, title: "Initial Analysis", desc: "Analyze slippage impact of full trade volume" },
          { num: 2, title: "Threshold Check", desc: "If >10 BPS, halve the volume and re-analyze" },
          { num: 3, title: "Iterative Reduction", desc: "Continue halving until condition satisfied" },
          { num: 4, title: "Binary Optimization", desc: "Fine-tune to optimum point (5 iterations)" }
        ]
      }
    },
    background: bg3
  },
  {
    id: 9,
    title: "Hot Pairs",
    badge: "HIGH-VALUE OPPORTUNITIES",
    content: {
      type: "hotpairs",
      data: {
        characteristics: [
          { label: "Market Cap", desc: "High global market capitalization" },
          { label: "DEX Liquidity", desc: "Poor liquidity on decentralized exchanges" },
          { label: "CEX Focus", desc: "Liquidity concentrated on centralized exchanges" }
        ],
        explanation: "Hot Pairs represent token pairs which have high global market cap but low liquidity. This is very common where tokens have CEX-focused liquidity but poor DEX depth.",
        savings: "$100,000s - $1,000,000s"
      }
    },
    background: bgMain
  },
  {
    id: 10,
    title: "Hot Pairs Algorithm",
    badge: "ALGORITHM WORKFLOW",
    content: {
      type: "hotpairs-algo",
      data: {
        steps: [
          { num: 1, title: "Read Reserves", desc: "Keeper reads reserves across protocol DEXs for tokenIn and sums them to yield TotalLiquidity" },
          { num: 2, title: "Fetch Quote", desc: "Take volume and fetch quote from DEX with deepest reserves to get TokenOutNoDECA" },
          { num: 3, title: "Derive Price", desc: "Calculate PriceNoDECA by dividing volumes: tokenIn / TokenOutNoDECA" },
          { num: 4, title: "Apply DECA", desc: "Use sweet spot algorithm to get TokenOutDECA by scaling realized amount" },
          { num: 5, title: "Calculate DECA Price", desc: "Find PriceDECA by dividing: tokenIn / TokenOutDECA" },
          { num: 6, title: "Derive Savings", desc: "Calculate savings: TokenOutDECA - TokenOutNoDECA, converted to dollar amount" }
        ]
      }
    },
    background: bg1
  },
  {
    id: 11,
    title: "Instasettle",
    badge: "OTC SETTLEMENT",
    content: {
      type: "instasettle",
      data: {
        benefits: ["Instant Execution", "No waiting for streams - settle immediately"],
        explanation: "Instasettle trades can be immediately settled at the trade owner set price in an 'over the counter' style. It allows anyone in the world to settle the trade instantly at a determined BPS loss, plus network fees.",
        modes: [
          { name: "Standard", desc: "Trades streamed out one stream at a time. Instasettleable for remaining portion at any time." },
          { name: "OnlyInstasettle", desc: "Trades not streamed at all. Fund portion provided by trade owner. Settled instantly at any time." }
        ]
      }
    },
    background: bg2
  },
  {
    id: 12,
    title: "Autonomous Maintenance & Bot System",
    badge: "SYSTEM MAINTENANCE",
    content: {
      type: "maintenance",
      data: {
        explanation: "The 'bot' or 'maintainer' is a server-side TypeScript repo which runs on a cron timer, reading data from deployed contracts to return a comprehensive list of all system trades.",
        features: ["Public Repository", "Anyone Can Run", "Open Source"],
        botTasks: [
          { title: "Analyze Outstanding Trades", desc: "Probes which trade pairs (by pairId) are outstanding" },
          { title: "Execute Settlement", desc: "Calls executeTrades() on Core contract" },
          { title: "Iterate Through Trades", desc: "Settles one stream at a time for each trade under pairId" }
        ],
        incentive: "Bots take 10 BPS on every stream they settle, debited back into their wallet immediately."
      }
    },
    background: bg3
  },
  {
    id: 13,
    title: "Protocol Fees & Incentives",
    badge: "FEE STRUCTURE",
    content: {
      type: "fees",
      data: {
        breakdown: [
          { type: "Normal Trades", timing: "Fees are deducted at the moment of trade settlement when a stream is executed" },
          { type: "Instasettle Trades", timing: "Fees deducted when trade is Instasettled, from amountOut received" }
        ],
        recipients: [
          { name: "Protocol", fee: "10 BPS" },
          { name: "Maintainer/Bot", fee: "10 BPS" }
        ],
        total: "0.2% (20 basis points)"
      }
    },
    background: bgMain
  },
  {
    id: 14,
    title: "Subgraph & Data Access",
    badge: "DATA ACCESS",
    content: {
      type: "subgraph",
      data: {
        benefits: [
          { title: "Real-Time Data", desc: "Live updates as trades are placed and settled" },
          { title: "Historical Access", desc: "Query past trades and market movements" },
          { title: "Easy Integration", desc: "Simple GraphQL queries for data access" }
        ],
        users: [
          { name: "Front End", desc: "Keeps live up-to-date protocol status during user interactions" },
          { name: "Market Makers", desc: "Monitor trade datasets as trades are placed and market moves" },
          { name: "Aggregators", desc: "Integrate protocol data for routing and analysis" }
        ]
      }
    },
    background: bg1
  },
  {
    id: 15,
    title: "Future Roadmap & Considerations",
    badge: "WHAT'S NEXT",
    content: {
      type: "roadmap",
      data: {
        current: [
          { title: "Integrate Curve & Fluid DEXs", desc: "Limited implementation for Curve exists. Fluid is current focus for next version." },
          { title: "Metrics Dashboard", desc: "Front end task to plug into middleware/smart contract feeds for comprehensive analytics." }
        ],
        future: [
          { title: "Intrachain Deployments", desc: "Deployments on Base and Avalanche would provide access to more markets." },
          { title: "Inter-Chain Swaps", desc: "Cross-chain swaps made available, ideally via Chainlink's CCIP." },
          { title: "Configurable Parameters", desc: "Slippage Target and Binary Iterations may become user-configurable." }
        ],
        version: "v1.x.x → Evolving toward v2.0.0"
      }
    },
    background: bg2
  },
  {
    id: 16,
    title: "Precision Trading. Optimized Execution.",
    subtitle: "Decentralized.",
    badge: "DECAStream",
    content: {
      type: "closing",
      data: {
        metrics: [
          { value: "<10", label: "BPS Slippage" },
          { value: "~99%", label: "Price Accuracy" },
          { value: "250+", label: "Tokens Supported" }
        ],
        badges: ["Ethereum Mainnet", "Smart Contract Verified", "Open Source"]
      }
    },
    background: bg3
  }
];
