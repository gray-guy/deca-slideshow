import { motion } from "framer-motion";

interface AlgorithmSlideProps {
  data: {
    formula: string;
    explanation: string;
    process: Array<{
      num: number;
      title: string;
      desc: string;
    }>;
  };
}

export const AlgorithmSlide = ({ data }: AlgorithmSlideProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full pb-16">
      {/* Formula & Explanation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="card-glass text-center py-8">
          <motion.span
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl font-display font-bold text-gradient"
          >
            {data.formula}
          </motion.span>
        </div>

        <p className="text-muted-foreground">{data.explanation}</p>

        <div className="grid grid-cols-2 gap-4">
          <div className="card-glass border-destructive/30 text-center">
            <span className="text-lg font-semibold text-destructive">&gt; 10 BPS?</span>
            <p className="text-xs text-muted-foreground mt-1">Halve Volume</p>
          </div>
          <div className="card-glass border-primary/30 text-center">
            <span className="text-lg font-semibold text-primary">≤ 10 BPS ✓</span>
            <p className="text-xs text-muted-foreground mt-1">Proceed</p>
          </div>
        </div>
      </motion.div>

      {/* Process Steps */}
      <div className="space-y-4">
        <h3 className="text-lg font-display font-semibold text-foreground">Binary Search Process</h3>
        {data.process.map((step, index) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="card-glass flex gap-4 items-start group hover:border-primary/30 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold group-hover:bg-primary/20 transition-colors">
              {step.num}
            </div>
            <div>
              <h4 className="font-semibold text-foreground">{step.title}</h4>
              <p className="text-sm text-muted-foreground mt-1">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
