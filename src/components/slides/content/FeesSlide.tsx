import { motion } from "framer-motion";

interface FeesSlideProps {
  data: {
    breakdown: Array<{
      type: string;
      timing: string;
    }>;
    recipients: Array<{
      name: string;
      fee: string;
      note?: string;
    }>;
    introductory: string;
    thereafter: string;
  };
}

export const FeesSlide = ({ data }: FeesSlideProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full pb-16">
      {/* Fee Breakdown */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h3 className="text-lg font-display font-semibold text-foreground">Fee Breakdown</h3>
        {data.breakdown.map((item, index) => (
          <div key={item.type} className="card-glass">
            <h4 className="text-primary font-semibold mb-1">{item.type}</h4>
            <p className="text-sm text-muted-foreground">{item.timing}</p>
          </div>
        ))}
      </motion.div>

      {/* Fee Recipients */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-4"
      >
        <h3 className="text-lg font-display font-semibold text-foreground">Fee Recipients</h3>
        
        <div className="grid grid-cols-2 gap-4">
          {data.recipients.map((recipient) => (
            <div key={recipient.name} className="card-glass text-center">
              <span className="text-3xl font-display font-bold text-primary">{recipient.fee}</span>
              <p className="text-sm font-semibold text-foreground mt-2">{recipient.name}</p>
              {recipient.note && (
                <p className="text-xs text-muted-foreground mt-1">{recipient.note}</p>
              )}
            </div>
          ))}
        </div>

        <div className="card-glass bg-primary/5 border-primary/30 text-center py-6">
          <p className="text-sm text-muted-foreground mb-2">Total Fee Percentage</p>
          <div>
            <span className="text-4xl font-display font-bold text-gradient">{data.introductory}</span>
            <p className="text-sm text-muted-foreground mt-1">Introductory</p>
          </div>
          <div className="mt-4">
            <span className="text-4xl font-display font-bold text-gradient">{data.thereafter}</span>
            <p className="text-sm text-muted-foreground mt-1">Regular</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
