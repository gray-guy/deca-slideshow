import { motion } from "framer-motion";

interface AskSlideProps {
  data: {
    lineItems: Array<{
      category: string;
      amount: string;
      description?: string;
    }>;
    total?: string;
  };
}

export const AskSlide = ({ data }: AskSlideProps) => {
  return (
    <div className="space-y-6 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {data.lineItems.map((item, index) => (
          <motion.div
            key={item.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="card-glass border-primary/30 flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-6 px-6"
          >
            <div>
              <h3 className="text-lg font-display font-semibold text-foreground">
                {item.category}
              </h3>
              {item.description && (
                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
              )}
            </div>
            <span className="text-2xl md:text-3xl font-display font-bold text-primary shrink-0">
              {item.amount}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {data.total && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="card-glass bg-primary/5 border-primary/30 text-center py-8"
        >
          <p className="text-sm text-muted-foreground mb-2">Total Ask</p>
          <span className="text-4xl font-display font-bold text-gradient">{data.total}</span>
        </motion.div>
      )}
    </div>
  );
};
