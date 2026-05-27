import { useEffect, useMemo, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { slides } from "./SlideData";
import { SlideRenderer } from "./SlideRenderer";
import { SlideNavigation } from "./SlideNavigation";

export const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [viewport, setViewport] = useState({ width: window.innerWidth, height: window.innerHeight });

  // Fixed 16:9 canvas that we scale to fit viewport.
  const STAGE_WIDTH = 1440;
  const STAGE_HEIGHT = 810;

  useEffect(() => {
    const onResize = () => setViewport({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const stageScale = useMemo(() => {
    const scale = Math.min(viewport.width / STAGE_WIDTH, viewport.height / STAGE_HEIGHT);
    // Guard against crazy-small viewports (e.g. browser UI changes mid-resize).
    return Number.isFinite(scale) && scale > 0 ? scale : 1;
  }, [viewport.height, viewport.width]);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  }, [currentSlide]);

  const goToNext = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide]);

  const goToPrevious = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goToNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrevious]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              style={{
                width: STAGE_WIDTH,
                height: STAGE_HEIGHT,
                transform: `scale(${stageScale})`,
                transformOrigin: "center",
              }}
            >
              <SlideRenderer slide={slides[currentSlide]} />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrevious={goToPrevious}
        onNext={goToNext}
        onGoTo={goToSlide}
      />

      {/* Progress bar at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-muted/20 z-50">
        <motion.div
          className="progress-bar"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Keyboard hints */}
      <div className="absolute bottom-8 left-8 text-xs text-muted-foreground/50 hidden md:flex items-center gap-4">
        <span>← → Arrow keys to navigate</span>
        <span>Space to advance</span>
      </div>
    </div>
  );
};
