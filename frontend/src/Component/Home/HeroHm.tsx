import { useCallback, useEffect, useRef, useState } from "react";
import hero1 from "../../assets/HeroImages/1.png";
import hero2 from "../../assets/HeroImages/2.png";
import hero3 from "../../assets/HeroImages/3.png";
import hero4 from "../../assets/HeroImages/4.png";
import hero5 from "../../assets/HeroImages/5.png";
import hero6 from "../../assets/HeroImages/6.png";

/* ================================
   HERO IMAGES
================================ */

const SWIPE_THRESHOLD = 50; // px — minimum drag to count as a swipe

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Detect mobile viewport
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const heroImages = isMobile
    ? [hero4, hero5, hero6]
    : [hero1, hero2, hero3];

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  /* Start / restart the auto-slide timer */
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);
  }, [heroImages.length]);

  /* AUTO SLIDER — 5 second interval */
  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  /* Manual navigation helpers */
  const goTo = (index: number) => {
    setCurrentSlide(index);
    startTimer(); // reset timer so it doesn't jump immediately
  };

  const goPrev = () =>
    goTo(currentSlide === 0 ? heroImages.length - 1 : currentSlide - 1);

  const goNext = () =>
    goTo(currentSlide === heroImages.length - 1 ? 0 : currentSlide + 1);

  /* ── Swipe handlers ── */
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;

    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;

    // Only treat as horizontal swipe if horizontal movement dominates
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > SWIPE_THRESHOLD) {
      if (dx < 0) goNext(); // swipe left → next
      else goPrev();        // swipe right → prev
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  /* ── Mouse drag handlers (desktop) ── */
  const mouseStartX = useRef<number | null>(null);
  const isDragging = useRef(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    mouseStartX.current = e.clientX;
    isDragging.current = true;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging.current || mouseStartX.current === null) return;
    const dx = e.clientX - mouseStartX.current;
    if (Math.abs(dx) > SWIPE_THRESHOLD) {
      if (dx < 0) goNext(); // drag left → next
      else goPrev();        // drag right → prev
    }
    isDragging.current = false;
    mouseStartX.current = null;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    mouseStartX.current = null;
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        height: isMobile ? "700px" : "100svh",
        cursor: "default",
        userSelect: "none",
      }}
      aria-label="Hero banner"
      /* Touch events */
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      /* Mouse drag events */
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {/* ================================
          IMAGE SLIDES
      ================================= */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0"
          style={{
            overflow: "hidden",
            opacity: currentSlide === index ? 1 : 0,
            transform: currentSlide === index ? "scale(1)" : "scale(1.04)",
            transition: "opacity 1.2s ease-in-out, transform 6s ease-in-out",
            zIndex: currentSlide === index ? 1 : 0,
          }}
        >
          <img
            src={image}
            alt={`Aussie Sun Solar hero banner slide ${index + 1}`}
            className="w-full h-full object-fill object-center"
            draggable={false}
          />
        </div>
      ))}

      {/* ================================
          DOT INDICATORS
      ================================= */}
      <div
        style={{
          position: "absolute",
          bottom: isMobile ? "20px" : "28px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            style={{
              width: currentSlide === index ? "28px" : "10px",
              height: "10px",
              borderRadius: "5px",
              background:
                currentSlide === index
                  ? "#ffffff"
                  : "rgba(255,255,255,0.45)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "width 0.35s ease, background 0.3s ease",
              boxShadow:
                currentSlide === index
                  ? "0 0 8px rgba(255,255,255,0.6)"
                  : "none",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;