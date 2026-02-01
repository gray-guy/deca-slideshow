import { motion } from "framer-motion";

interface EcosystemSlideProps {
  data: {
    totalTvl: { value: string; label: string };
    ethereumDex: { value: string; label: string };
    l2s: Array<{ name: string; tvl: string; dexVolume30d: string }>;
  };
}

export const EcosystemSlide = ({ data }: EcosystemSlideProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full pb-16">
      {/* Total TVL & Ethereum DEX */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="card-glass border-primary/30 text-center py-8">
          <p className="text-sm text-muted-foreground mb-2">{data.totalTvl.label}</p>
          <span className="text-4xl md:text-5xl font-display font-bold text-gradient">
            {data.totalTvl.value}
          </span>
        </div>
        <div className="card-glass border-primary/30 text-center py-8">
          <p className="text-sm text-muted-foreground mb-2">{data.ethereumDex.label}</p>
          <span className="text-4xl md:text-5xl font-display font-bold text-gradient">
            {data.ethereumDex.value}
          </span>
        </div>
      </motion.div>

      {/* L2s: TVL + DEX Vol (30d) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-4"
      >
        <div>
          <h3 className="text-lg font-display font-semibold text-foreground flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-primary animate-pulse" />
            Layer 2 Ecosystem
          </h3>
          <p className="text-xs text-muted-foreground mt-1">
            TVL (Total Value Secured, L2BEAT) · DEX Vol (30d, DeFiLlama)
          </p>
        </div>
        <div className="card-glass overflow-hidden">
          <div className="grid grid-cols-[1fr_auto_auto] gap-4 py-3 px-4 text-xs font-semibold text-muted-foreground border-b border-border/50">
            <span>Chain</span>
            <span className="text-right">TVL</span>
            <span className="text-right min-w-[5rem]">DEX Vol (30d)</span>
          </div>
          {data.l2s.map((l2) => (
            <div
              key={l2.name}
              className="grid grid-cols-[1fr_auto_auto] gap-4 py-3 px-4 items-center border-b border-border/30 last:border-0"
            >
              <span className="font-semibold text-foreground">{l2.name}</span>
              <span className="text-primary font-display font-bold text-right">{l2.tvl}</span>
              <span className="font-display font-bold text-right text-foreground min-w-[5rem]">
                {l2.dexVolume30d}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
