import { motion } from "framer-motion";

interface MaintenanceSlideProps {
  data: {
    explanation: string;
    features: string[];
    botTasks: Array<{
      title: string;
      desc: string;
    }>;
    incentive: string;
  };
}

export const MaintenanceSlide = ({ data }: MaintenanceSlideProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full pb-16">
      {/* Left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <div className="card-glass">
          <p className="text-muted-foreground text-sm mb-4">{data.explanation}</p>
          <div className="flex flex-wrap gap-2">
            {data.features.map((feature) => (
              <span key={feature} className="badge-primary text-xs">
                {feature}
              </span>
            ))}
          </div>
        </div>

        <div className="card-glass bg-primary/5 border-primary/20">
          <h4 className="text-sm font-semibold text-primary mb-2">Bot Incentive Structure</h4>
          <p className="text-sm text-muted-foreground">{data.incentive}</p>
          <div className="mt-3 p-3 bg-secondary/50 rounded-lg text-center">
            <span className="text-2xl font-display font-bold text-primary">10 BPS</span>
            <p className="text-xs text-muted-foreground">per stream settled</p>
          </div>
        </div>
      </motion.div>

      {/* Right - Bot Tasks */}
      <div className="space-y-4">
        <h3 className="text-lg font-display font-semibold text-foreground">What the Bot Does</h3>
        {data.botTasks.map((task, index) => (
          <motion.div
            key={task.title}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="card-glass flex gap-4 items-start"
          >
            <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-primary font-mono text-sm">
              {index + 1}
            </div>
            <div>
              <h4 className="font-semibold text-foreground text-sm">{task.title}</h4>
              <p className="text-xs text-muted-foreground mt-1">{task.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
