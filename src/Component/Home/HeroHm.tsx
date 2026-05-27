import  { useEffect, useState } from "react";
import {
  ArrowRight,

} from "lucide-react";
import hero1 from "../../assets/home-page/hero1.jpg"

/* ================================
   HERO IMAGES
================================ */

const heroImages = [
  hero1,
    hero1,  hero1,


];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  /* AUTO SLIDER */
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section className="relative w-full py-25 overflow-hidden" aria-label="Hero banner">

      {/* ================================
          BACKGROUND SLIDER
      ================================= */}

      <div className="absolute inset-0">

        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
              currentSlide === index
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }`}
          >
            <img
              src={image}
              alt={`Aussie Sun Solar hero background slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-r from-[#000000]/85 via-[#000000]/70 to-black/40"></div>

      

      {/* ================================
          CONTENT
      ================================= */}

      <div className="relative z-20 px-3 sm:px-6 md:px-0 max-w-7xl mx-auto h-full flex items-center">

        <div className="max-w-7xl ">

          {/* TOP BADGE */}
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl mb-4 md:mb-8 animate-[pulse_4s_ease-in-out_infinite]">

            <div className="w-3 h-3 rounded-full bg-[#FE9900]"></div>

            <p className="text-white text-[12px] sm:text-sm font-medium tracking-wide">
              Australia's #1 Smart Solar Energy Provider
            </p>

          </div>

          {/* MAIN HEADING */}
          <h1 className="text-4xl md:text-6xl font-black text-white drop-shadow-2xl leading-tight">
            One of Australia’s Largest
            <br />
            <span className="text-[#FE9900]">
              Smart Solar Energy
            </span>
            <br />
            Providers
          </h1>

          {/* DESCRIPTION */}
          <div className="mt-8 text-white/80 text-md md:text-lg leading-[1.8] max-w-7xl space-y-4">
            <p>
              Power your home or business with premium renewable energy solutions designed for long-term savings and energy independence.
            </p>
            <p>
              Experts in solar installation Australia, delivering advanced solar panels, battery storage, and EV charging solutions nationwide.
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap items-center gap-5   mt-5 md:mt-12">

            {/* BUTTON */}
            <button className="group bg-[#FE9900] hover:bg-[#ffae2b] text-white w-full md:w-auto px-10 py-2 rounded-2xl text-lg font-bold flex items-center justify-center gap-4 shadow-[0_10px_40px_rgba(254,153,0,0.45)] transition-all duration-300 hover:scale-105">

              Get Free Quote

              <ArrowRight
                size={22}
                className="group-hover:translate-x-1 transition duration-300"
              />

            </button>


          </div>

          

    

        </div>

      </div>

      {/* ================================
          RIGHT FLOATING CARD
      ================================= */}

      <div className="hidden xl:block absolute right-[5%] top-1/2 -translate-y-1/2 z-30">

        <div className="w-[320px] rounded-[32px] bg-white/10 backdrop-blur-2xl border border-white/10 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

          <div className="flex items-center gap-3 mb-5">

            <div className="w-4 h-4 rounded-full bg-[#00ff85] animate-pulse"></div>

            <p className="text-white font-semibold">
              Live Energy Savings
            </p>

          </div>

          <h3 className="text-white text-5xl font-black">
            $2,430
          </h3>

          <p className="text-white/90 mt-3 leading-7">
            Average yearly savings with our premium
            solar + battery systems.
          </p>

          <button className="w-full mt-8 bg-[#FE9900] hover:bg-[#ffad29] text-[#004093] py-2 rounded-xl font-bold text-lg transition duration-300 hover:scale-[1.02]">

            Calculate Savings

          </button>

        </div>

      </div>

      {/* ================================
          SLIDER DOTS
      ================================= */}

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 z-30">

        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-500 rounded-full ${
              currentSlide === index
                ? "w-14 h-3 bg-[#FE9900]"
                : "w-3 h-3 bg-white/50 hover:bg-white"
            }`}
          ></button>
        ))}

      </div>

    </section>
  );
};

export default HeroSection;