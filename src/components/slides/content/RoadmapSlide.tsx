import { motion } from "framer-motion";

interface RoadmapSlideProps {
  data: {
    current?: Array<{ title: string; desc: string }>;
    future?: Array<{ title: string; desc: string }>;
    version?: string;
    timeline: Array<{
      quarter: string;
      version: string;
      items: Array<{ title: string; desc: string }>;
    }>;
  };
}

export const RoadmapSlide = ({ data }: RoadmapSlideProps) => {
  const timeline = data.timeline ?? [];

  return (
    <div className="space-y-6 h-full pb-16">
      {/* Timeline: line + blobs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* Horizontal line */}
        <div
          className="absolute left-0 right-0 top-6 h-0.5 bg-gradient-to-r from-primary/50 via-primary to-primary/50"
          style={{ width: "100%" }}
          aria-hidden
        />
        <div className="relative flex justify-between gap-2 px-0 md:px-4">
          {timeline.map((phase, index) => (
            <motion.div
              key={phase.quarter}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="flex flex-col items-center flex-1 max-w-[33%]"
            >
              {/* Blob */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary border-4 border-background shadow-lg flex items-center justify-center">
                  <span className="text-sm font-display font-bold text-primary-foreground">
                    {phase.quarter.split(" ")[0]}
                  </span>
                </div>
                <span className="text-sm font-display font-semibold text-primary mt-2">
                  {phase.version}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Cards under each quarter */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {timeline.map((phase, phaseIndex) => (
          <motion.div
            key={phase.quarter}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + phaseIndex * 0.1 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
              <h3 className="text-sm font-display font-semibold text-foreground">
                {phase.quarter} · {phase.version}
              </h3>
            </div>
            <div className="space-y-2 flex-1">
              {phase.items.map((item) => (
                <div
                  key={item.title}
                  className="card-glass border-primary/20 py-3 px-4"
                >
                  <h4 className="font-semibold text-foreground text-xs mb-0.5">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-muted-foreground leading-snug">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
