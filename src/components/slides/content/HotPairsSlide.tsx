import { motion } from "framer-motion";

interface HotPairsSlideProps {
  data: {
    characteristics: Array<{
      label: string;
      desc: string;
    }>;
    explanation: string;
    savings: string;
  };
}

export const HotPairsSlide = ({ data }: HotPairsSlideProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full pb-16">
      {/* Characteristics */}
      <div className="space-y-4">
        {data.characteristics.map((char, index) => (
          <motion.div
            key={char.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="card-glass"
          >
            <h4 className="text-primary font-semibold mb-1">{char.label}</h4>
            <p className="text-sm text-muted-foreground">{char.desc}</p>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="card-glass bg-primary/5 border-primary/30"
        >
          <p className="text-muted-foreground">{data.explanation}</p>
        </motion.div>
      </div>

      {/* Savings Highlight */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col items-center justify-center"
      >
        <div className="card-glass text-center py-12 w-full">
          <p className="text-sm text-muted-foreground mb-2">Potential Savings Range</p>
          <span className="text-4xl md:text-5xl font-display font-bold text-gradient">
            {data.savings}
          </span>
          
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="card-glass bg-secondary/50">
              <span className="text-primary font-semibold">CEX to DEX</span>
              <p className="text-xs text-muted-foreground">Take advantage of lacking 2% depth</p>
            </div>
            <div className="card-glass bg-secondary/50">
              <span className="text-primary font-semibold">DEX to CEX</span>
              <p className="text-xs text-muted-foreground">Optimize arbitrage strategies</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
