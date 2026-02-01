import { motion } from "framer-motion";

interface UsersSlideProps {
  data: {
    userGroups: Array<{
      title: string;
      features: string[];
      desc: string;
    }>;
    contractAddress: string;
  };
}

export const UsersSlide = ({ data }: UsersSlideProps) => {
  return (
    <div className="space-y-6 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.userGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="card-glass hover:border-primary/30 transition-colors"
          >
            <h3 className="text-lg font-display font-semibold text-foreground mb-3">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {group.features.map((feature) => (
                <span key={feature} className="badge-primary text-xs">
                  {feature}
                </span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">{group.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="card-glass"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-semibold text-primary mb-1">Core Contract Address</h3>
            <code className="text-xs md:text-sm font-mono text-muted-foreground break-all">
              {data.contractAddress}
            </code>
          </div>
          <span className="badge-primary">Version 1.0.4 | Ethereum Mainnet</span>
        </div>
      </motion.div>
    </div>
  );
};
