import { motion } from "framer-motion";

interface DexSlideProps {
  data: {
    dexes: Array<{
      name: string;
      detail: string;
    }>;
    explanation: string;
    executionLogic: Array<{
      title: string;
      desc: string;
    }>;
  };
}

export const DexSlide = ({ data }: DexSlideProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full pb-16">
      {/* DEX List */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <p className="text-sm text-muted-foreground">{data.explanation}</p>
        
        <div className="grid grid-cols-2 gap-3">
          {data.dexes.map((dex, index) => (
            <motion.div
              key={dex.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="card-glass text-center"
            >
              <h4 className="font-display font-semibold text-foreground">{dex.name}</h4>
              <p className="text-xs text-primary">{dex.detail}</p>
            </motion.div>
          ))}
        </div>

        <div className="card-glass bg-primary/5 border-primary/20">
          <h4 className="text-sm font-semibold text-primary mb-1">Why Highest Reserve?</h4>
          <p className="text-xs text-muted-foreground">
            Large trades experience the lowest price impact at the DEX with deepest liquidity.
          </p>
        </div>
      </motion.div>

      {/* Execution Logic */}
      <div className="space-y-4">
        <h3 className="text-lg font-display font-semibold text-foreground">Execution Logic</h3>
        {data.executionLogic.map((logic, index) => (
          <motion.div
            key={logic.title}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="card-glass flex gap-4 items-start"
          >
            <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-primary font-mono text-sm">
              {index + 1}
            </div>
            <div>
              <h4 className="font-semibold text-foreground text-sm">{logic.title}</h4>
              <p className="text-xs text-muted-foreground mt-1">{logic.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
