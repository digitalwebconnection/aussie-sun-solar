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


/* =========================================
   SERVICES DATA
========================================= */

const services = [
    {
        title: "Solar Power Systems",
        description:
            "High-performance residential & commercial solar systems built for maximum savings.",
        icon: Sun,
        image:
            "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1974&auto=format&fit=crop",
    },

    {
        title: "Battery Storage Solutions",
        description:
            "Store excess solar energy with smart battery systems for uninterrupted power.",
        icon: BatteryCharging,
        image:
            "https://www.energytoolbase.com/wp-content/uploads/2024/04/rhPqEofJT4e2aip7uBf3.webp",
    },

    {
        title: "EV Chargers",
        description:
            "Fast & efficient EV charging solutions designed for modern smart homes.",
        icon: Car,
        image:
            "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1974&auto=format&fit=crop",
    },

    {
        title: "Electrical Services",
        description:
            "Reliable electrical upgrades, maintenance and smart energy integration services.",
        icon: Zap,
        image:
            "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=1974&auto=format&fit=crop",
    },

    {
        title: "Solar Maintenance",
        description:
            "Professional cleaning, inspections and performance optimization for solar systems.",
        icon: Wrench,
        image:
            "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1974&auto=format&fit=crop",
    },

    {
        title: "Energy Consultation",
        description:
            "Expert guidance to help homes and businesses maximize long-term energy savings.",
        icon: ShieldCheck,
        image:
            "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1974&auto=format&fit=crop",
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
        <section className="relative py-14 bg-[#ffffff] overflow-hidden">


            <div className="max-w-7xl mx-auto flex flex-col  items-center  relative z-10">

                {/* =========================================
            TOP CONTENT
        ========================================= */}

                <div className="flex flex-col text-center  items-center justify-between gap-10 mb-16">

                    {/* LEFT */}
                    <div className="max-w-7xl">

                        <div className="inline-flex items-center gap-3 bg-[#004093]/5 border border-[#004093]/40 px-10 py-2 rounded-full">

                            <div className="w-3 h-3 rounded-full bg-[#FE9900] animate-pulse"></div>

                            <p className="text-[#004093] font-semibold tracking-wide">
                                Our Premium Services
                            </p>

                        </div>

                        <h2 className="text-5xl leading-[1.1] font-black text-[#111827] mt-4">

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
                    <div className="max-w-6xl">

                        <p className="text-gray-600 text-lg ">

                            We provide advanced solar systems, battery
                            storage, EV charging and smart electrical
                            solutions engineered to maximize energy
                            efficiency, lower electricity costs and
                            power a sustainable future.

                        </p>

                    </div>

                </div>



                {/* =========================================
            SERVICES SLIDER
        ========================================= */}

                <div className="overflow-hidden">

                    <div
                        className="flex transition-all duration-700 ease-in-out gap-6 items-stretch"
                        style={{
                            transform: `translateX(-${currentIndex * 24.5}%)`,
                        }}
                    >

                        {services.map((service, index) => {
                            const Icon = service.icon;

                            return (
                                <div
                                    key={index}
                                    className="min-w-[23%] group relative overflow-hidden rounded-lg h-[460px] shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
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
                                    <div className="absolute inset-0 p-4 flex flex-col">

                                        {/* TOP */}
                                        <div className="flex items-start justify-between">

                                            {/* ICON */}
                                            <div className="w-15 h-15 rounded-lg bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center group-hover:bg-[#FE9900] group-hover:rotate-360 transition duration-500 shadow-xl">

                                                <Icon
                                                    size={30}
                                                    className="text-white group-hover:text-[#111827] transition duration-500"
                                                />

                                            </div>

                                            {/* NUMBER */}
                                            <h2 className="text-white/40 text-6xl font-black">
                                                0{index + 1}
                                            </h2>

                                        </div>

                                        {/* BOTTOM CONTENT */}
                                        <div className="mt-auto">

                                            {/* TITLE */}
                                            <h3 className="text-white text-[34px] leading-tight font-black max-w-[280px]">

                                                {service.title}

                                            </h3>

                                            {/* LINE */}
                                            <div className="w-24 h-[4px] bg-[#FE9900] rounded-full mt-5 group-hover:w-40 transition-all duration-500"></div>

                                            {/* DESCRIPTION */}
                                            <p className="text-white/80 leading-8 text-[17px] mt-6 min-h-[120px] opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500">

                                                {service.description}

                                            </p>

                                            {/* BUTTON */}
                                            <button className="mt-7 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500 bg-white hover:bg-[#FE9900] text-[#111827] px-7 py-4 rounded-lg font-bold flex items-center justify-center gap-3 w-fit shadow-xl">

                                                Read More

                                                <ArrowRight size={20} />

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
                    className="flex mt-15 items-center gap-3 bg-[#FE9900] hover:bg-[#004093] text-white px-15 py-3 rounded-lg font-bold text-lg shadow-xl shadow-[#FE9900]/20 transition-all group"
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