import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onGoTo: (index: number) => void;
}

export const SlideNavigation = ({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  onGoTo
}: SlideNavigationProps) => {
  return (
    <div className="absolute bottom-8 left-0 right-0 z-50 flex items-center justify-center gap-6">
      {/* Previous Button */}
      <motion.button
        onClick={onPrevious}
        disabled={currentSlide === 0}
        className="p-3 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/30 text-foreground/80 hover:text-primary hover:border-primary/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronLeft className="w-5 h-5" />
      </motion.button>

      {/* Dot Indicators */}
      <div className="flex items-center gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <motion.button
            key={index}
            onClick={() => onGoTo(index)}
            className={`nav-dot ${index === currentSlide ? 'active' : ''}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Next Button */}
      <motion.button
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className="p-3 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/30 text-foreground/80 hover:text-primary hover:border-primary/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronRight className="w-5 h-5" />
      </motion.button>

      {/* Slide Counter */}
      <div className="absolute right-8 text-sm text-muted-foreground font-mono">
        <span className="text-primary">{String(currentSlide + 1).padStart(2, '0')}</span>
        <span className="mx-1">/</span>
        <span>{String(totalSlides).padStart(2, '0')}</span>
      </div>
    </div>
  );
};
