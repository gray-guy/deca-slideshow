import { motion } from "framer-motion";

interface OverviewSlideProps {
  data: {
    sections: Array<{
      num: string;
      title: string;
      desc: string;
    }>;
  };
}

export const OverviewSlide = ({ data }: OverviewSlideProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full pb-16">
      {data.sections.map((section, index) => (
        <motion.div
          key={section.num}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="card-glass flex flex-col hover:border-primary/30 transition-colors"
        >
          <span className="text-4xl font-display font-bold text-primary mb-2">
            {section.num}
          </span>
          <h3 className="text-lg font-display font-semibold text-foreground mb-2">
            {section.title}
          </h3>
          <p className="text-sm text-muted-foreground flex-1">
            {section.desc}
          </p>
        </motion.div>
      ))}
    </div>
  );
};
