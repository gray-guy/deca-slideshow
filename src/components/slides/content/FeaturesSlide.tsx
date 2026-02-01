import { motion } from "framer-motion";

interface FeaturesSlideProps {
  data: {
    features: Array<{
      title: string;
      subtitle: string;
      desc: string;
    }>;
  };
}

export const FeaturesSlide = ({ data }: FeaturesSlideProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full pb-16">
      {data.features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="card-glass hover:border-primary/30 transition-all group"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-display font-bold text-xl group-hover:bg-primary/20 transition-colors">
              {String(index + 1).padStart(2, '0')}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-display font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-primary mb-2">{feature.subtitle}</p>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
