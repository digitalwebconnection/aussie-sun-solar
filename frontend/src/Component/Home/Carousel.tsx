import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

interface CarouselItem {
  id: number | string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface CarouselProps {
  items: CarouselItem[];
  baseWidth?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  autoplay = true,
  autoplayDelay = 3000,
  pauseOnHover = true,
  loop = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === items.length - 1) {
        return loop ? 0 : prevIndex;
      }
      return prevIndex + 1;
    });
  }, [items.length, loop]);

  useEffect(() => {
    if (!autoplay || (pauseOnHover && isPaused)) return;

    const timer = setInterval(() => {
      nextSlide();
    }, autoplayDelay);

    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, pauseOnHover, isPaused, nextSlide]);

  return (
    <div
      className="carousel-container h-full w-full flex flex-col"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex-1 overflow-hidden relative">
        <motion.div
          className="carousel-track h-full flex"
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="carousel-item shrink-0 h-full"
              style={{ width: "100%" }}
            >
              <div className="carousel-item-header">
                <div className="carousel-icon-container">{item.icon}</div>
              </div>
              <div className="carousel-item-content">
                <h3 className="carousel-item-title">{item.title}</h3>
                <p className="carousel-item-description">{item.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="carousel-indicators-container">
        <div className="carousel-indicators">
          {items.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`carousel-indicator ${
                currentIndex === index ? "active" : "inactive"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
