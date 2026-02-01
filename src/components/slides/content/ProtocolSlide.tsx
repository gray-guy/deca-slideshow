import { motion } from "framer-motion";

interface ProtocolSlideProps {
  data: {
    description: string;
    coreTokens: string[];
    problem: string;
    solution: string[];
    metrics: Array<{ label: string; value: string }>;
  };
}

export const ProtocolSlide = ({ data }: ProtocolSlideProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full pb-16">
      {/* Left Column */}
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="card-glass"
        >
          <p className="text-muted-foreground">{data.description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card-glass"
        >
          <h3 className="text-sm font-semibold text-primary mb-3">Supported Core Tokens</h3>
          <div className="flex flex-wrap gap-2">
            {data.coreTokens.map((token) => (
              <span key={token} className="px-3 py-1 bg-secondary rounded-md text-sm font-mono">
                {token}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card-glass border-destructive/30"
        >
          <h3 className="text-sm font-semibold text-destructive mb-2">The Problem We Solve</h3>
          <p className="text-sm text-muted-foreground">{data.problem}</p>
        </motion.div>
      </div>

      {/* Right Column */}
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="card-glass border-primary/30"
        >
          <h3 className="text-sm font-semibold text-primary mb-3">Our Solution</h3>
          <ul className="space-y-2">
            {data.solution.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-primary mt-1">→</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-3 gap-4"
        >
          {data.metrics.map((metric, index) => (
            <div key={index} className="metric-card">
              <span className="text-2xl font-display font-bold text-primary">{metric.value}</span>
              <span className="text-xs text-muted-foreground text-center">{metric.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
