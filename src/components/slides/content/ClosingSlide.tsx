import { motion } from "framer-motion";

interface ClosingSlideProps {
  data: {
    metrics: Array<{
      value: string;
      label: string;
      captionBold?: string;
    }>;
    badges: string[];
  };
}

export const ClosingSlide = ({ data }: ClosingSlideProps) => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-8"
      >
        <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-4">
          Precision Trading. Optimized Execution.
        </h1>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient">
          Decentralized.
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-3 gap-8 mb-12"
      >
        {data.metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
            className="text-center"
          >
            <span className="text-4xl md:text-5xl font-display font-bold text-primary">
              {metric.value}
            </span>
            <p className="text-sm text-muted-foreground mt-2">
              {metric.label && <>{metric.label}</>}
              {metric.label && metric.captionBold && <br />}
              {metric.captionBold && (
                <span className="font-semibold text-foreground">{metric.captionBold}</span>
              )}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        {data.badges.map((badge, index) => (
          <span key={index} className="badge-primary">
            {badge}
          </span>
        ))}
      </motion.div>

      {/* Decorative glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px]" />
      </div>
    </div>
  );
};
