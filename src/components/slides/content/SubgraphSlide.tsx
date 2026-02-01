import { motion } from "framer-motion";

interface SubgraphSlideProps {
  data: {
    benefits: Array<{
      title: string;
      desc: string;
    }>;
    users: Array<{
      name: string;
      desc: string;
    }>;
  };
}

export const SubgraphSlide = ({ data }: SubgraphSlideProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full pb-16">
      {/* Benefits */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h3 className="text-lg font-display font-semibold text-foreground">Subgraph Benefits</h3>
        {data.benefits.map((benefit, index) => (
          <div key={benefit.title} className="card-glass flex gap-4 items-start">
            <span className="text-primary text-xl">✓</span>
            <div>
              <h4 className="font-semibold text-foreground text-sm">{benefit.title}</h4>
              <p className="text-xs text-muted-foreground mt-1">{benefit.desc}</p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Users */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-4"
      >
        <h3 className="text-lg font-display font-semibold text-foreground">Who Uses the Subgraph?</h3>
        {data.users.map((user, index) => (
          <div key={user.name} className="card-glass group hover:border-primary/30 transition-colors">
            <span className="badge-primary mb-2 inline-block">{user.name}</span>
            <p className="text-sm text-muted-foreground">{user.desc}</p>
          </div>
        ))}

        <div className="card-glass bg-primary/5 border-primary/20">
          <h4 className="text-sm font-semibold text-primary mb-2">Easy Integration</h4>
          <p className="text-xs text-muted-foreground">
            3rd parties can interact with our protocol, specifically taking advantage of Instasettle and Hot Pairs trades, with a few simple lines of code.
          </p>
        </div>
      </motion.div>
    </div>
  );
};
