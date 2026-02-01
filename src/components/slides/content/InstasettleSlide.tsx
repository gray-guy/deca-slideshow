import { motion } from "framer-motion";

interface InstasettleSlideProps {
  data: {
    benefits: string[];
    explanation: string;
    modes: Array<{
      name: string;
      desc: string;
    }>;
  };
}

export const InstasettleSlide = ({ data }: InstasettleSlideProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full pb-16">
      {/* Left - Explanation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="card-glass">
          <div className="space-y-2 mb-4">
            {data.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-primary">⚡</span>
                <span className="text-foreground font-medium">{benefit}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-sm">{data.explanation}</p>
        </div>

        <div className="card-glass bg-primary/5 border-primary/20">
          <h4 className="text-sm font-semibold text-primary mb-2">Trade Owner Controls</h4>
          <div className="space-y-1 text-sm text-muted-foreground">
            <p>• Set Price: Owner Defined</p>
            <p>• BPS Margin: Configurable</p>
            <p>• Settlement: Permissionless</p>
          </div>
        </div>
      </motion.div>

      {/* Right - Modes */}
      <div className="space-y-4">
        <h3 className="text-lg font-display font-semibold text-foreground">Configuration Styles</h3>
        {data.modes.map((mode, index) => (
          <motion.div
            key={mode.name}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="card-glass group hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="badge-primary">{mode.name}</span>
            </div>
            <p className="text-sm text-muted-foreground">{mode.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
