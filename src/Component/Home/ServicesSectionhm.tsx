import { useEffect, useState } from "react";
import {
    ArrowRight,
    Zap,
    BatteryCharging,
    Wrench,
    Sun,
    Car,
    ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

import solarRoof1 from '../../assets/downloaded-images/solar-roof-1.jpg';
import energyStorage from '../../assets/downloaded-images/energy-storage.webp';
import batterySec2 from '../../assets/downloaded-images/battery-section-2.jpg';
import evSection from '../../assets/downloaded-images/ev-section.jpg';
import commercialSolar1 from '../../assets/downloaded-images/commercial-solar-1.jpg';
import windSolar from '../../assets/downloaded-images/wind-solar.jpg';


/* =========================================
   SERVICES DATA
========================================= */

const services = [
    {
        title: "Solar Power Systems",
        description:
            "High-performance residential & commercial solar systems built for maximum savings.",
        icon: Sun,
        image: solarRoof1,
    },

    {
        title: "Battery Storage Solutions",
        description:
            "Store excess solar energy with smart battery systems for uninterrupted power.",
        icon: BatteryCharging,
        image: energyStorage,
    },

    {
        title: "EV Chargers",
        description:
            "Fast & efficient EV charging solutions designed for modern smart homes.",
        icon: Car,
        image: batterySec2,
    },

    {
        title: "Electrical Services",
        description:
            "Reliable electrical upgrades, maintenance and smart energy integration services.",
        icon: Zap,
        image: evSection,
    },

    {
        title: "Solar Maintenance",
        description:
            "Professional cleaning, inspections and performance optimization for solar systems.",
        icon: Wrench,
        image: commercialSolar1,
    },

    {
        title: "Energy Consultation",
        description:
            "Expert guidance to help homes and businesses maximize long-term energy savings.",
        icon: ShieldCheck,
        image: windSolar,
    },
];

const ServicesSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    /* =========================================
       AUTO SLIDER
    ========================================= */

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 4000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const nextSlide = () => {
        if (currentIndex < services.length - 4) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };


    return (
        <section className="relative py-7 md:py-14 bg-[#ffffff] overflow-hidden" aria-label="Our Services">


            <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 px-4 md:px-6">

                {/* =========================================
            TOP CONTENT
        ========================================= */}

                <div className="flex flex-col text-center  items-center justify-between  gap-3 md:gap-10 mb-6 md:mb-16">

                    {/* LEFT */}
                    <div className="max-w-7xl">

                        <div className="inline-flex items-center gap-3 bg-[#004093]/5 border border-[#004093]/40 px-10 py-2 rounded-full">

                            <div className="w-3 h-3 rounded-full bg-[#FE9900] animate-pulse"></div>

                            <p className="text-[#004093] font-semibold tracking-wide">
                                Our Premium Services
                            </p>

                        </div>

                        <h2 className="text-3xl md:text-5xl  font-black text-[#111827] mt-4">

                            Smart Solar
                            <span className="text-[#004093]">
                                {" "}Solutions
                            </span>

                            <br />

                            For Every
                            <span className="text-[#FE9900]">
                                {" "}Energy Need
                            </span>

                        </h2>

                    </div>

                    {/* RIGHT */}
                    <div className="max-w-6xl space-y-4">

                        <p className="text-gray-900 text-md md:text-lg">
                            We provide advanced solar solutions including solar panels, battery storage, and EV charging systems designed to reduce electricity costs and improve energy efficiency.
                        </p>
                        <p className="text-gray-900 text-md md:text-lg">
                            Aussie Sun Solar helps Australian homes and businesses switch to smarter, cleaner, and more sustainable energy solutions for long-term savings.
                        </p>

                    </div>

                </div>



                {/* =========================================
            SERVICES SLIDER
        ========================================= */}

                <div className="overflow-hidden px-4 sm:px-0">
                    <div
                        className="flex transition-all duration-700 ease-in-out gap-4 sm:gap-6 items-stretch"
                        style={{
                            transform: `translateX(-${window.innerWidth < 640
                                    ? currentIndex * 102
                                    : window.innerWidth < 1024
                                        ? currentIndex * 51
                                        : currentIndex * 24.5
                                }%)`,
                        }}
                    >
                        {services.map((service, index) => {
                            const Icon = service.icon;

                            return (
                                <div
                                    key={index}
                                    className="
            min-w-full
            sm:min-w-[48%]
            lg:min-w-[23%]
            group
            relative
            overflow-hidden
            rounded-2xl
            h-[420px]
            sm:h-[440px]
            lg:h-[460px]
            shadow-[0_20px_60px_rgba(0,0,0,0.15)]
          "
                                >
                                    {/* IMAGE */}

                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                                    />

                                    {/* DARK OVERLAY */}

                                    <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/60 to-black/10"></div>

                                    {/* HOVER GLOW */}

                                    <div className="absolute inset-0 bg-linear-to-t from-[#004093]/60 via-transparent to-[#FE9900]/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                                    {/* CONTENT */}

                                    <div className="absolute inset-0 p-4 sm:p-5 lg:p-6 flex flex-col">
                                        {/* TOP */}

                                        <div className="flex items-start justify-between">
                                            {/* ICON */}

                                            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-15 lg:h-15 rounded-xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center group-hover:bg-[#FE9900] group-hover:rotate-360 transition duration-500 shadow-xl">
                                                <Icon
                                                    size={
                                                        window.innerWidth < 640
                                                            ? 24
                                                            : 30
                                                    }
                                                    className="text-white group-hover:text-[#111827] transition duration-500"
                                                />
                                            </div>

                                            {/* NUMBER */}

                                            <span className="text-white/40 text-4xl sm:text-5xl lg:text-6xl font-black">
                                                0{index + 1}
                                            </span>
                                        </div>

                                        {/* BOTTOM */}

                                        <div className="mt-auto">
                                            {/* TITLE */}

                                            <h3 className="text-white text-[26px] sm:text-[30px] lg:text-[34px] leading-tight font-black max-w-[280px]">
                                                {service.title}
                                            </h3>

                                            {/* LINE */}

                                            <div className="w-20 sm:w-24 h-[4px] bg-[#FE9900] rounded-full mt-4 sm:mt-5 group-hover:w-32 sm:group-hover:w-40 transition-all duration-500"></div>

                                            {/* DESCRIPTION */}

                                            <p
                                                className="
                  text-white/80
                  leading-7
                  sm:leading-8
                  text-[15px]
                  sm:text-[16px]
                  lg:text-[17px]
                  mt-5
                  sm:mt-6
                  min-h-[100px]
                  sm:min-h-[120px]

                  opacity-100
                  translate-y-0

                  lg:opacity-0
                  lg:translate-y-10
                  lg:group-hover:opacity-100
                  lg:group-hover:translate-y-0

                  transition duration-500
                "
                                            >
                                                {service.description}
                                            </p>

                                            {/* BUTTON */}

                                            <button
                                                className="
                  mt-5
                  sm:mt-7

                  opacity-100
                  translate-y-0

                  lg:opacity-0
                  lg:translate-y-10
                  lg:group-hover:opacity-100
                  lg:group-hover:translate-y-0

                  transition duration-500

                  bg-white
                  hover:bg-[#FE9900]

                  text-[#111827]

                  px-5
                  sm:px-7

                  py-3
                  sm:py-4

                  rounded-xl

                  font-bold

                  flex
                  items-center
                  justify-center
                  gap-3

                  w-fit

                  shadow-xl
                "
                                            >
                                                Read More

                                                <ArrowRight size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(254 153 0 / 0.2)" }}
                    whileTap={{ scale: 0.95 }}
                    className="flex mt-6 md:mt-15 items-center gap-3 bg-[#FE9900] hover:bg-[#004093] text-white px-15 py-3 rounded-lg font-bold text-lg shadow-xl shadow-[#FE9900]/20 transition-all group"
                >
                    How we can help you
                    <ArrowRight
                        size={30}
                        className="transition-transform duration-300 group-hover:translate-x-10"
                    />
                </motion.button>



            </div>

        </section>
    );
};

export default ServicesSection;