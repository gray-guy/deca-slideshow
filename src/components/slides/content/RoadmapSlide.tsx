import { motion } from "framer-motion";

interface RoadmapSlideProps {
  data: {
    current: Array<{
      title: string;
      desc: string;
    }>;
    future: Array<{
      title: string;
      desc: string;
    }>;
    version: string;
  };
}

export const RoadmapSlide = ({ data }: RoadmapSlideProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full pb-16">
      {/* Current */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h3 className="text-lg font-display font-semibold text-foreground flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-primary animate-pulse" />
          Current Developments
        </h3>
        {data.current.map((item, index) => (
          <div key={item.title} className="card-glass border-primary/30">
            <h4 className="font-semibold text-foreground text-sm mb-1">{item.title}</h4>
            <p className="text-xs text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </motion.div>

      {/* Future */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-4"
      >
        <h3 className="text-lg font-display font-semibold text-foreground flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-muted-foreground" />
          Future Plans
        </h3>
        {data.future.map((item, index) => (
          <div key={item.title} className="card-glass">
            <h4 className="font-semibold text-foreground text-sm mb-1">{item.title}</h4>
            <p className="text-xs text-muted-foreground">{item.desc}</p>
          </div>
        ))}

        <div className="card-glass bg-secondary/50 text-center py-4">
          <p className="text-sm text-muted-foreground">Version Status</p>
          <span className="text-lg font-display font-semibold text-gradient">{data.version}</span>
        </div>
      </motion.div>
    </div>
  );
};
