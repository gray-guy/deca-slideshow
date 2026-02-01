import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideLayoutProps {
  background: string;
  badge?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export const SlideLayout = ({ background, badge, title, subtitle, children }: SlideLayoutProps) => {
  return (
    <div className="slide-container">
      {/* Background Image */}
      <div 
        className="slide-bg"
        style={{ backgroundImage: `url(${background})` }}
      />
      
      {/* Overlay */}
      <div className="slide-overlay" />
      
      {/* Content */}
      <div className="slide-content">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          {badge && (
            <span className="badge-primary mb-4 inline-block">
              {badge}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground glow-text">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-primary mt-2 font-display">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 overflow-hidden"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};
