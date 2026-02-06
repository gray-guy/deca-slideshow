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
  type: "hero" | "overview" | "protocol" | "users" | "features" | "streaming" | "dex" | "algorithm" | "hotpairs" | "hotpairs-algo" | "instasettle" | "maintenance" | "fees" | "subgraph" | "roadmap" | "ecosystem" | "team" | "ask" | "forecast" | "competitors" | "closing";
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
    id: 3,
    title: "What is DECAStream?",
    badge: "PROTOCOL OVERVIEW",
    content: {
      type: "protocol",
      data: {
        description: "*DECAStream* is a decentralized *hybrid routing protocol* designed to reduce slippage to *under 10BPS*. We have vetted and *tailored our UI* to work seamlessly with the *top 250 tokens* against core stable tokens.",
        coreTokens: ["WBTC", "WETH", "DAI", "USDC", "USDT"],
        problem: "When trading *illiquid tokens* that have *high market capitalization* but *low liquidity* across popular DEXs, large trade volumes incur *prohibitively considerable slippage losses*.\n\nThese large volumes also open vectors for *MEV attacks* and *no intuitive UI exists* for tactically performing trades *across ecosystem DEXs*",
        solution: [
          "Trades are *algorithmically executed* chunk by chunk, or *streamed*, to keep slippage at *<10BPS*",
          "Deterministically achieve up to *99% price accuracy* compared to global market price saving *10s of $1000s* for *high mkp/low liquidity tokens*",
          "*Hunt Liquidity* from the *top DEXs* for *token variety*, *market cap* and *depth* with our *intelligent auto-routing smart contracts*"
        ],
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
          { title: "Market Makers", features: ["Arbitrage", "Volume Growth"], desc: "Drive *throughput* to invite *arbitrage* and increase *daily volume* for tokens and projects." },
          { title: "Experienced Traders", features: ["CEX-DEX Bridge", "Strategy Optimization"], desc: "*Leverage Hot Pairs* to evaluate buys and sells from *CEX to DEX* and back." },
          { title: "DEX Aggregators & Platforms", features: ["Core Contract", "Easy Integration"], desc: "*Auto-route* to trade placement endpoint via calling *placeTrade()* on the Core contract." }
        ]
      }
    },
    background: bg3
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
          { name: "Protocol", fee: "10 / 20 BPS", note: "introductory/regular" },
          { name: "Maintainer/Bot", fee: "10 / 20 BPS", note: "introductory/regular" }
        ],
        introductory: "0.2% (20 basis points)",
        thereafter: "0.4% (40 basis points)"
      }
    },
    background: bgMain
  },
  {
    id: 17,
    title: "Ecosystem Status",
    badge: "MARKET CONTEXT",
    content: {
      type: "ecosystem",
      data: {
        totalTvl: { value: "$170B", label: "Total TVL (DeFi)" },
        ethereumDex: { value: "$63B", label: "DEX Volumes (Ethereum, monthly)" },
        l2s: [
          { name: "Arbitrum One", tvl: "$16.29B", dexVolume30d: "$15.24B" },
          { name: "Base", tvl: "$11.00B", dexVolume30d: "$28.79B" },
          { name: "OP Mainnet", tvl: "$1.93B", dexVolume30d: "$2.70B" },
          { name: "Starknet", tvl: "$669M", dexVolume30d: "~$200M" },
          { name: "Other L2s", tvl: "~$3.5B", dexVolume30d: "—" }
        ]
      }
    },
    background: bg3
  },
  {
    id: 21,
    title: "Competitors",
    subtitle: "Revenue and market exposure (30d, per DefiLlama methodology)",
    badge: "COMPETITIVE LANDSCAPE",
    content: {
      type: "competitors",
      data: {
        competitors: [
          {
            name: "CoW Swap",
            logoUrl: "/competitors/cow-swap.png",
            revenue30d: "~$2.13m",
            revenueNote: "Protocol trading fees + MEV Blocker share + partner fee share",
            volume30d: "~$4.66b",
            volumeCumulative: "~$154.85b"
          },
          {
            name: "KyberSwap Aggregator",
            logoUrl: "/competitors/kyberswap.png",
            revenue30d: "~$476.7k",
            revenueNote: "Trading fees collected by the aggregator",
            volume30d: "~$10.66b",
            volumeCumulative: undefined
          },
          {
            name: "Odos",
            logoUrl: "/competitors/odos.png",
            revenue30d: "~$287.1k",
            revenueNote: "Aggregator trading fees",
            volume30d: "~$2.91b",
            volumeCumulative: undefined
          },
          {
            name: "Velora",
            logoUrl: "/competitors/velora.png",
            revenue30d: "~$32.6k",
            revenueNote: "Trading fees (protocol revenue)",
            volume30d: undefined,
            volumeCumulative: undefined
          }
        ]
      }
    },
    background: bg3
  },
  {
    id: 15,
    title: "Roadmap & Financials",
    subtitle: "Q1–Q3 2026 timeline, Ecosystem status, Team, The Ask, and 12‑month financial forecast",
    badge: "ROADMAP & FINANCIALS",
    content: {
      type: "roadmap",
      data: {
        current: [
          { title: "Configure Curve DEX", desc: "Limited implementation exists; full Curve integration in focus." },
          { title: "Configure Fluid DEX", desc: "Fluid DEX integration as current focus for next version." },
          { title: "Metrics Dashboard", desc: "Front end task to plug into middleware/smart contract feeds for comprehensive analytics." },
          { title: "Implement Deterministic Trades", desc: "Deterministic trade execution and stream composition." },
          { title: "Audit and code review", desc: "Security audit and full code review." }
        ],
        timeline: [
          {
            quarter: "Q1 2026",
            version: "v1.0.6",
            items: [
              { title: "Configure Curve DEX", desc: "Full Curve DEX integration and configuration." },
              { title: "Configure Fluid DEX", desc: "Fluid DEX integration and configuration." },
              { title: "Metrics Dashboard", desc: "Front end task to plug into middleware/smart contract feeds for comprehensive analytics." }
            ]
          },
          {
            quarter: "Q2 2026",
            version: "v1.0.7",
            items: [
              { title: "Implement Deterministic Trades", desc: "Deterministic trade execution and stream composition." },
              { title: "Audit and code review", desc: "Security audit and full code review." }
            ]
          },
          {
            quarter: "Q3 2026",
            version: "v1.0.8 → v2.0.0",
            items: [
              { title: "Intrachain Deployments", desc: "Deployments on Base and Avalanche would provide access to more markets." },
              { title: "Inter-Chain Swaps", desc: "Cross-chain swaps made available, ideally via Chainlink's CCIP." },
              { title: "Configurable Parameters", desc: "Slippage Target and Binary Iterations may become user-configurable." }
            ]
          }
        ]
      }
    },
    background: bg2
  },
  {
    id: 19,
    title: "The Ask",
    subtitle: "Financial Projections up to and in Q3 2026",
    badge: "FINANCIALS",
    content: {
      type: "ask",
      data: {
        lineItems: [
          { category: "Team", amount: "$120k", description: "Team allocation" },
          { category: "Maintenance", amount: "$30k", description: "Infrastructure & operations" },
          { category: "Audit", amount: "$100k", description: "Security audit" },
          { category: "Marketing & Business Development", amount: "$100k", description: "Growth & partnerships" }
        ],
        total: "$350k"
      }
    },
    background: bg1
  },
  {
    id: 20,
    title: "Forecast",
    badge: "FINANCIAL FORECAST",
    content: {
      type: "forecast",
      data: {
        chartTitle: "12‑Month Projection",
        xAxisLabel: "Timeline (months)",
        leftAxisLabel: "Budget spend ($k)",
        rightAxisLabel: "Profit ($k cumulative)",
        dataPoints: [
          { month: "M1", budgetSpend: 50, profit: 0, profit025: 0 },
          { month: "M2", budgetSpend: 100, profit: 0, profit025: 0 },
          { month: "M3", budgetSpend: 150, profit: 0, profit025: 0 },
          { month: "M4", budgetSpend: 200, profit: 0, profit025: 0 },
          { month: "M5", budgetSpend: 250, profit: 0, profit025: 0 },
          { month: "M6", budgetSpend: 300, profit: 0, profit025: 0 },
          { month: "M7", budgetSpend: 350, profit: 100, profit025: 250 },
          { month: "M8", budgetSpend: 350, profit: 200, profit025: 500 },
          { month: "M9", budgetSpend: 350, profit: 300, profit025: 750 },
          { month: "M10", budgetSpend: 350, profit: 500, profit025: 1250 },
          { month: "M11", budgetSpend: 350, profit: 700, profit025: 1750 },
          { month: "M12", budgetSpend: 350, profit: 900, profit025: 2250 }
        ],
        yAxisMax: 2500,
        bullets: [
          "**Introductory Fee** rates last one quarter (Q3 at 20 BPS); they double to 40 BPS at the beginning of Q4",
          "**Budget** spend projected to be replaced by true revenue at Q3",
          "**Profit curve: 0.1%** of Ethereum DEX volume (~$50B/mo) × 20 BPS in Q3 then 40 BPS from start of Q4; cumulative revenue ~$900k by month 12. Run-rate monthly revenue at 40 BPS reaches ~$200k; at sustained 0.1% share, cumulative revenue path to ~$1.5M+.",
          "**Profit curve: 0.25%** of Ethereum DEX volume (same fee structure: 20 BPS in Q3, 40 BPS from Q4); cumulative ~$2.25M by month 12.",
          "**Long term aim**: if we matched CoW Swap's 30d volume (~$4.66b), our 30d take at 40 BPS would be ~$18.6M.",
          "**Assumption**: this model assumes **zero** liquidity throughput before Q3, however product is live already"
        ]
      }
    },
    background: bg2
  },
  {
    id: 5,
    title: "Core Protocol Features",
    badge: "FEATURES",
    content: {
      type: "features",
      data: {
        features: [
          { title: "🦈 Streaming Trades", subtitle: "Optimized Execution", desc: "Execute trade volume in portions composed deterministically at the moment of execution." },
          { title: "🔥 Hot Pairs", subtitle: "High-Value Opportunities", desc: "One-click shop with customizable interface to maximize trade performance. Savings: $100K - $1M+" },
          { title: "⚡ Instasettle", subtitle: "OTC-Style Settlement", desc: "Trades can be immediately settled at the trade owner set price. Two modes: Standard and OnlyInstasettle." },
          { title: "🤖 Autonomous Maintenance", subtitle: "Bot-Driven Settlement", desc: "Server-side bots probe trade execution periodically. Bot Incentive: 10 BPS per stream." }
        ]
      }
    },
    background: bgMain
  },
  {
    id: 6,
    title: "🦈 Streaming Trades",
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
    id: 9,
    title: "🔥 Hot Pairs",
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
    id: 11,
    title: "⚡ Instasettle",
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
    title: "🤖 Autonomous Maintenance & Bot System",
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
    id: 16,
    title: "Precision Trading. Optimized Execution.",
    subtitle: "Decentralized.",
    badge: "DECAStream",
    content: {
      type: "closing",
      data: {
        metrics: [
          { value: "<10", label: "BPS Slippage", captionBold: "ON EVERY TRADE" },
          { value: "1,500+ token pairs*", label: "supported", captionBold: "FROM TOP 250 MARKETCAP TOKENS" },
          { value: "~99%", label: "Price Accuracy", captionBold: "REGARDLESS OF TRADE VOLUME" }
        ],
        badges: ["Ethereum Mainnet", "Smart Contract Verified", "Open Source"]
      }
    },
    background: bg3
  },
  {
    id: 18,
    title: "The Team",
    badge: "WHO WE ARE",
    content: {
      type: "team",
      data: {
        members: [
          {
            name: "Max Kent",
            title: "Product Owner & Blockchain Architect",
            description: "Engineer and team lead, with experience across the breadth of the blockchain industry and specialises in technical DeFi implementations and mathematics.\n\nHas worked at companies including THORChain, Panther Protocol, OpenZeppelin and Nethermind.",
            imageUrl: "/team/max-kent.png"
          },
          {
            name: "Shehroz Saleem",
            title: "Systems & Design Engineer",
            description: "Specializing in UI/UX for complex protocols. Hands-on shipping products like DecaStream, Nemesis, Galaxy, with a strong bias toward turning protocol logic into clean, intuitive user interfaces.",
            imageUrl: "/team/shehroz-saleem.png"
          },
          {
            name: "Ivan Golemdzhiyski",
            title: "Full Stack Engineer",
            description: "Full-stack engineer with an accelerated career to Tech Lead at 22, leading a team at British Gas. Deeply hands-on across frontend and backend development, system architecture, and delivery of large-scale, customer-facing platforms.\n\nIntroduced to blockchain working as a consultant under THORChain. Worked across multi-disciplinary teams implementing the DECA suite.",
            imageUrl: "/team/ivan-golemdzhiyski.png"
          }
        ]
      }
    },
    background: bgMain
  }
];
