import { motion } from "framer-motion";

interface HotPairsAlgoSlideProps {
  data: {
    steps: Array<{
      num: number;
      title: string;
      desc: string;
    }>;
  };
}

export const HotPairsAlgoSlide = ({ data }: HotPairsAlgoSlideProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full pb-16">
      {data.steps.map((step, index) => (
        <motion.div
          key={step.num}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.08 }}
          className="card-glass group hover:border-primary/30 transition-colors"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm group-hover:bg-primary/30 transition-colors">
              {step.num}
            </div>
            <h4 className="font-semibold text-foreground text-sm">{step.title}</h4>
          </div>
          <p className="text-xs text-muted-foreground">{step.desc}</p>
        </motion.div>
      ))}
    </div>
  );
};
