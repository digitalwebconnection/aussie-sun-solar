import  { useEffect, useState } from "react";

/* =========================================
   SLIDER TEXTS
========================================= */

const announcements = [
  "SAVE UP TO 90% ON ELECTRICITY BILLS • LIMITED TIME SOLAR OFFERS",

  "AUSTRALIA'S SMARTEST SOLAR & BATTERY SOLUTIONS • FREE INSTALLATION QUOTES",

  "GET PREMIUM SOLAR PANELS WITH 25 YEARS WARRANTY • BOOK TODAY",

  "ZERO EMISSION • ZERO DOWNTIME • ZERO WORRIES • POWER YOUR FUTURE",

  "FAST APPROVAL • EASY FINANCE OPTIONS • INSTALL NOW & SAVE MORE",
];

const TopRunningSlider = () => {
  const [currentText, setCurrentText] = useState(0);

  /* AUTO CHANGE TEXT */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) =>
        prev === announcements.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-[#004093] border-b border-[#ffffff20]">

      {/* GLOW EFFECT */}
      <div className="absolute inset-0 bg-linear-to-r from-[#FE9900]/10 via-transparent to-[#00c3ff]/10"></div>

      {/* RUNNING TEXT */}
      <div className="relative flex items-center h-[54px] overflow-hidden">

        <div className="animate-marquee whitespace-nowrap flex items-center">

          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="flex items-center"
            >

              <span className="mx-16 text-white text-[20px] font-bold tracking-[2px] uppercase">

                {announcements[currentText]}

              </span>

              <span className="text-[#FE9900] text-3xl">
                •
              </span>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default TopRunningSlider;