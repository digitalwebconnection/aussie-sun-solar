import { useEffect, useState } from "react";
import hero1 from "../../assets/HeroImages/1.jpeg";
import hero2 from "../../assets/HeroImages/2.jpeg";
import hero3 from "../../assets/HeroImages/3.jpeg";
import hero4 from "../../assets/HeroImages/4.jpeg";
import hero5 from "../../assets/HeroImages/5.jpeg";
import hero6 from "../../assets/HeroImages/6.jpeg";

/* ================================
   HERO IMAGES
================================ */



const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Detect mobile viewport
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const heroImages = isMobile ? [hero4, hero5, hero6] : [hero1, hero2, hero3];

  /* AUTO SLIDER — 5 second interval */
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: isMobile ? "700px" : "100svh" }}
      aria-label="Hero banner"
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
          />
        </div>
      ))}



    </section>
  );
};

export default HeroSection;