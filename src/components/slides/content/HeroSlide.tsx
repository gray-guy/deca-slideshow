import { motion } from "framer-motion";

interface HeroSlideProps {
  data: {
    tagline: string;
    badges: string[];
  };
}

export const HeroSlide = ({ data }: HeroSlideProps) => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-6"
      >
        <h1 className="text-6xl md:text-8xl font-display font-bold text-gradient mb-4">
          DECA Stream
        </h1>
        <h2 className="text-2xl md:text-4xl font-display font-semibold text-foreground">
          Decentralized Hybrid Routing Protocol
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-12"
      >
        {data.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        {data.badges.map((badge, index) => (
          <span key={index} className="badge-primary">
            {badge}
          </span>
        ))}
      </motion.div>

      {/* Decorative glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px]" />
      </div>
    </div>
  );
};
