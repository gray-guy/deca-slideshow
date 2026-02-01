import { motion } from "framer-motion";

interface StreamingSlideProps {
  data: {
    benefits: string[];
    explanation: string;
    steps: Array<{
      num: number;
      title: string;
      desc: string;
    }>;
    characteristics: Array<{
      label: string;
      value: string;
    }>;
  };
}

export const StreamingSlide = ({ data }: StreamingSlideProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full pb-16">
      {/* Left - Explanation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="card-glass space-y-4"
      >
        <div className="space-y-2">
          {data.benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              <span className="text-sm text-foreground">{benefit}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">{data.explanation}</p>
        
        <div className="grid grid-cols-3 gap-2 pt-4">
          {data.characteristics.map((char) => (
            <div key={char.label} className="text-center">
              <span className="text-primary font-semibold text-sm">{char.value}</span>
              <p className="text-xs text-muted-foreground">{char.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right - Steps */}
      <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.steps.map((step, index) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="card-glass flex gap-4 items-start"
          >
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">
              {step.num}
            </div>
            <div>
              <h4 className="font-semibold text-foreground text-sm">{step.title}</h4>
              <p className="text-xs text-muted-foreground mt-1">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
