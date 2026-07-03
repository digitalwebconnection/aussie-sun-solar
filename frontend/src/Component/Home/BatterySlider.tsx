import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Zap } from 'lucide-react';
import BlurText from '../BlurText';

import battery1 from '../../assets/teslabettery.jpg';
import battery2 from '../../assets/Battery Partners/2.webp';
import battery3 from '../../assets/Battery Partners/3.webp';
import battery4 from '../../assets/Battery Partners/4.webp';
import battery5 from '../../assets/Battery Partners/10.png';

import teslaPowerwall from '../../assets/Tesla-Powerwall-2-Off-Grid-Battery.jpg.jpeg';
import sigstorBattery from '../../assets/saj-battery/saj-battery.webp';
import alphaessBattery from '../../assets/downloaded-images/alphaess-battery.png';
import neovoltBattery from '../../assets/downloaded-images/neovolt-battery.png';
import goodweLynx from '../../assets/goodwebettry.png';

const batteries = [
  {
    id: 1,
    image: teslaPowerwall,
    logo: battery1,
    name: 'Tesla PowerWall',
    tag: 'Smart Energy',
    desc: 'Advanced home battery designed for reliable backup power, smart energy management, and seamless solar integration.',
  },

  {
    id: 2,
    image: sigstorBattery,
    logo: battery2,
    name: 'SAJ Battery Systems',
    tag: 'Hybrid Storage',
    desc: 'Modern all-in-one battery and inverter solution delivering efficient energy storage for residential solar systems.',
  },

  {
    id: 3,
    image: alphaessBattery,
    logo: battery3,
    name: 'AlphaESS Storage System',
    tag: 'Eco Efficient',
    desc: 'Compact and intelligent battery storage built for long-lasting performance and optimized solar energy usage.',
  },

  {
    id: 4,
    image: neovoltBattery,
    logo: battery4,
    name: 'NeoVolt Battery System',
    tag: 'High Performance',
    desc: 'Premium lithium battery solution engineered for powerful backup support and maximum energy efficiency.',
  },

  {
    id: 5,
    image: goodweLynx,
    logo: battery5,
    name: 'GoodWe Lynx Home Battery',
    tag: 'Premium Backup',
    desc: 'Reliable next-generation battery storage offering safe, scalable, and high-efficiency energy solutions for homes.',
  },
];

export default function BatterySlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % batteries.length);
    }, 4000);
  };

  useEffect(() => {
    startTimer();

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
    startTimer();
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + batteries.length) % batteries.length);
    startTimer();
  };

  const next = () => {
    setDirection(1);
    setCurrent((p) => (p + 1) % batteries.length);
    startTimer();
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.92,
    }),

    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },

    exit: (dir: number) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0,
      scale: 0.92,
    }),
  };

  const slide = batteries[current];

  return (
    <section id="battery-showroom" aria-label="Solar battery showroom slider" className="relative w-full overflow-hidden bg-white md:py-14 py-10 px-4">

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FE9900]/80 bg-[#FE9900]/10 px-10 py-2">
            <Zap size={16} className="text-[#FE9900]" />

            <span className="text-md font-black uppercase tracking-widest text-[#FE9900]">
              Battery Technology
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-slate-900 flex justify-center">
            <BlurText
              text="Solar Battery Showroom"
              delay={80}
              animateBy="words"
              direction="top"
              className="[&>span:nth-child(2)]:bg-linear-to-r [&>span:nth-child(2)]:from-[#004093] [&>span:nth-child(2)]:to-[#FE9900] [&>span:nth-child(2)]:bg-clip-text [&>span:nth-child(2)]:text-transparent"
            />
          </h2>

          <p className="mx-auto mt-5 max-w-6xl text-base md:text-lg leading-relaxed text-slate-900">
            We work with the world's leading battery manufacturers to bring you
            reliable, high-performance energy storage for every home and business.
          </p>
        </motion.div>

        {/* MAIN SECTION */}
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT SIDE — BIG BATTERY IMAGE */}
          <div className="relative flex items-center justify-center">

            {/* Background Glow */}
            <div className="absolute md:h-[420px] h-[300px] w-[300px] md:w-[420px]  blur-[100px]" />

            <AnimatePresence mode="wait">

              <motion.div
                key={slide.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.55,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="relative z-10"
              >

                <img
                  src={slide.image}
                  alt={slide.name}
                  className="md:h-[400px] h-[250px] w-auto object-contain "
                />

              </motion.div>

            </AnimatePresence>

          </div>

          {/* RIGHT SIDE — CONTENT */}
          <div className="flex flex-col gap-4">

            <AnimatePresence mode="wait">

              <motion.div
                key={slide.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >

                {/* TAG */}
                <span className="inline-block rounded-full bg-linear-to-r from-[#004093] to-[#FE9900] px-4 py-1.5 text-xs font-black uppercase tracking-widest text-white shadow-md">
                  {slide.tag}
                </span>

                {/* TITLE */}
                <h3 className="mt-4 text-xl md:text-2xl font-serif font-semibold leading-tight text-slate-900">
                  {slide.name}
                </h3>

                {/* LINE */}
                <div className="mt-4 h-1 w-20 rounded-full bg-linear-to-r from-[#004093] to-[#FE9900]" />

                {/* DESCRIPTION */}
                <p className="mt-6 text-base md:text-lg leading-relaxed text-slate-900">
                  {slide.desc}
                </p>

              </motion.div>

            </AnimatePresence>

            {/* CONTROLS */}
            <div className="mt-2 flex items-center gap-6">

              {/* PREV */}
              <button
                onClick={prev}
                aria-label="Previous battery"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-300 hover:border-[#004093] hover:bg-[#004093] hover:text-white hover:shadow-md"
              >
                <ChevronLeft size={22} />
              </button>

              {/* DOTS */}
              <div className="flex items-center gap-2">
                {batteries.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === current
                        ? 'w-8 bg-[#FE9900]'
                        : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              {/* NEXT */}
              <button
                onClick={next}
                aria-label="Next battery"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-300 hover:border-[#FE9900] hover:bg-[#FE9900] hover:text-white hover:shadow-md"
              >
                <ChevronRight size={22} />
              </button>

            </div>

            {/* THUMBNAILS */}
            <div className="mt-3 flex flex-wrap items-center gap-4">

              {batteries.map((b, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Select ${b.name}`}
                  className={`flex h-20 w-20 items-center justify-center overflow-hidden rounded-lg border-3 bg-[#f8faff] p-2 transition-all duration-300 ${
                    i === current
                      ? 'border-[#FE9900] opacity-100 shadow-xl shadow-[#FE9900]/30'
                      : 'border-slate-400 opacity-90 hover:opacity-100'
                  }`}
                >

                  <img
                    src={b.logo}
                    alt={b.name}
                    className="h-full w-full object-contain"
                  />

                </button>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}