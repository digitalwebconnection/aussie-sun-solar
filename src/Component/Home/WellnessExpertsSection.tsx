'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
    ShieldCheck,
    Clock3,
    Zap,
    BatteryCharging,
    Wrench,
} from 'lucide-react';

import solarRoof1 from '../../assets/downloaded-images/solar-roof-1.jpg';
import solarMonitoring from '../../assets/downloaded-images/solar-monitoring.jpg';
import groundMountedSolar from '../../assets/downloaded-images/ground-mounted-solar.jpg';
import solarInstallationImg from '../../assets/downloaded-images/solar-installation.jpg';

const FEATURES = [
    {
        icon: ShieldCheck,
        title: 'Trusted Solar Energy Experts',
        description:
            'Our certified solar professionals deliver reliable energy solutions with quality installation and long-term performance.',
        image: solarRoof1,
    },
    {
        icon: Clock3,
        title: '24/7 System Monitoring',
        description:
            'Real-time solar performance tracking and dedicated support to ensure maximum efficiency and uninterrupted power savings.',
        image: solarMonitoring,
    },
    {
        icon: Wrench,
        title: 'End-to-End Solar Installation',
        description:
            'From consultation and design to installation and maintenance, every project is handled completely by our in-house team.',
        image: groundMountedSolar,
    },
    {
        icon: BatteryCharging,
        title: 'Complete Energy Saving Solutions',
        description:
            'Residential, commercial, and industrial solar systems designed to reduce electricity costs and support sustainable living.',
        image: solarInstallationImg,
    },
];


export default function WellnessExpertsSection() {

    const [activeIndex, setActiveIndex] = useState(0);

    // AUTO CHANGE FEATURE + IMAGE
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % FEATURES.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section className="relative overflow-hidden bg-[#ffffff] py-14" aria-label="Why choose Aussie Sun Solar">

                {/* BACKGROUND */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,196,0,0.12),transparent_30%)]" />

                {/* FLOATING BLOBS */}
                <div className="blob blob1" />
                <div className="blob blob2" />

                <div className="container relative z-10 mx-auto px-5">

                    {/* HEADING */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 60,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 1,
                        }}
                        viewport={{
                            once: true,
                        }}
                        className="mx-auto mb-10 max-w-7xl text-center"
                    >


                        <h2 className="text-3xl md:text-6xl font-serif font-bold leading-[0.92] tracking-[-4px] text-[#111]">
                            Natural Wellness
                            <span className="block font-medium text-[#d4af37]">
                                Transformation Experts
                            </span>
                        </h2>

                        <p className="mx-auto mt-7 max-w-6xl text-sm md:text-lg leading-[1.9] text-[#141414]">
                            Helping people naturally transform their body,
                            lifestyle, and confidence through scientifically
                            designed wellness programs and expert guidance.
                        </p>
                    </motion.div>

                    {/* MAIN GRID */}
                    <div className="grid items-center gap-14 lg:grid-cols-[1fr_520px_1fr]">

                        {/* LEFT FEATURES */}
                        <div className="space-y-6">

                            {FEATURES.slice(0, 2).map((item, i) => {
                                const actualIndex = i;
                                const isActive = activeIndex === actualIndex;

                                return (
                                    <motion.div
                                        key={i}
                                        initial={{
                                            opacity: 0,
                                            x: -80,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        transition={{
                                            duration: 0.8,
                                            delay: i * 0.2,
                                        }}
                                        viewport={{
                                            once: true,
                                        }}
                                        animate={{
                                            y: isActive ? -10 : 0,
                                            scale: isActive ? 1.03 : 1,
                                        }}
                                        className={`group rounded-lg border  bg-white/80 p-4 md:p-7 shadow-xl shadow-black/30 backdrop-blur-2xl transition-all duration-500
                                        
                                        ${isActive
                                                ? 'border-[#f7d66d] shadow-[0_20px_70px_rgba(212,175,55,0.25)]'
                                                : 'border-black/40'
                                            }`}
                                    >

                                        <div className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-500
                                        
                                        ${isActive
                                                ? 'bg-[#d4af37] scale-110'
                                                : 'bg-[#fff5d2]'
                                            }`}>

                                            <item.icon className={`h-7 w-7 
                                            
                                            ${isActive
                                                    ? 'text-white'
                                                    : 'text-[#d4af37]'
                                                }`} />
                                        </div>

                                        <h3 className="text-xl md:text-2xl font-serif font-semibold tracking-[-1px] text-[#111]">
                                            {item.title}
                                        </h3>

                                        <p className="mt-4 text-[15px] leading-[1.9] text-[#666]">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* CENTER IMAGE */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 80,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 1,
                            }}
                            viewport={{
                                once: true,
                            }}
                            className="relative"
                        >

                            {/* MAIN CARD */}
                            <motion.div
                                animate={{
                                    y: [0, -15, 0],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 5,
                                }}
                                className="relative overflow-hidden rounded-lg border border-white/10 bg-white p-2 shadow-xl shadow-black/50"
                            >

                                {/* IMAGE AUTO CHANGE */}
                                <motion.img
                                    key={FEATURES[activeIndex].image}
                                    src={FEATURES[activeIndex].image}
                                    alt={FEATURES[activeIndex].title}
                                    initial={{
                                        opacity: 0,
                                        scale: 1.1,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                    }}
                                    transition={{
                                        duration: 0.8,
                                    }}
                                    className="h-[280px] sm:h-[420px] md:h-[650px] w-full shadow shadow-black rounded-lg object-cover"
                                />

                                {/* OVERLAY */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />

                                {/* FLOAT CARD */}
                                <motion.div
                                    key={activeIndex}
                                    initial={{
                                        opacity: 0,
                                        y: 30,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                    }}
                                    className="absolute bottom-3 left-3 right-3 sm:bottom-8 sm:left-8 sm:right-8 rounded-lg border border-white/20 bg-white/85 p-3 sm:p-6 shadow-2xl backdrop-blur-2xl"
                                >

                                    <div className="mb-4 flex items-center gap-3">

                                        <div className="flex h-9 w-9 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-[#302c2c] shrink-0">
                                            <Zap className="h-4 w-4 sm:h-6 sm:w-6 text-[#d4af37]" />
                                        </div>

                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black">
                                                Active Program
                                            </p>

                                            <h3 className="text-base sm:text-xl md:text-2xl font-black tracking-[-0.5px] sm:tracking-[-1px] text-[#111]">
                                                {FEATURES[activeIndex].title}
                                            </h3>
                                        </div>
                                    </div>

                                    <p className="hidden sm:block max-w-sm text-[13px] sm:text-[15px] leading-[1.8] text-[#181818]">
                                        {FEATURES[activeIndex].description}
                                    </p>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* RIGHT FEATURES */}
                        <div className="space-y-6">

                            {FEATURES.slice(2, 4).map((item, i) => {

                                const actualIndex = i + 2;
                                const isActive = activeIndex === actualIndex;

                                return (
                                    <motion.div
                                        key={i}
                                        initial={{
                                            opacity: 0,
                                            x: 80,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        transition={{
                                            duration: 0.8,
                                            delay: i * 0.2,
                                        }}
                                        viewport={{
                                            once: true,
                                        }}
                                        animate={{
                                            y: isActive ? -10 : 0,
                                            scale: isActive ? 1.03 : 1,
                                        }}
                                        className={`group rounded-lg border bg-white/80
                                            
                                            md:p-7 p-4 shadow-xl shadow-black/30  backdrop-blur-2xl transition-all duration-500
                                        ${isActive
                                                ? 'border-[#f7d66d] shadow-[0_20px_70px_rgba(212,175,55,0.25)]'
                                                : 'border-black/30'
                                            }`}
                                    >

                                        <div className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-500
                                        
                                        ${isActive
                                                ? 'bg-[#d4af37] scale-110'
                                                : 'bg-[#fff5d2]'
                                            }`}>

                                            <item.icon className={`h-7 w-7 
                                            
                                            ${isActive
                                                    ? 'text-white'
                                                    : 'text-[#d4af37]'
                                                }`} />
                                        </div>

                                        <h3 className="text-xl md:text-2xl font-serif font-semibold tracking-[-1px] text-[#111]">
                                            {item.title}
                                        </h3>

                                        <p className="mt-4 text-[15px] leading-[1.9] text-[#666]">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>               
                </div>
            </section>

            {/* STYLE */}
            <style >{`
                .blob {
                    position: absolute;
                    border-radius: 999px;
                    filter: blur(100px);
                    animation: floatBlob 8s ease-in-out infinite;
                }

                .blob1 {
                    width: 320px;
                    height: 320px;
                    background: rgba(255, 196, 0, 0.14);
                    top: -100px;
                    left: -100px;
                }

                .blob2 {
                    width: 220px;
                    height: 220px;
                    background: rgba(255, 220, 120, 0.16);
                    right: -50px;
                    bottom: 0;
                }

                @keyframes floatBlob {
                    0% {
                        transform: translateY(0px);
                    }

                    50% {
                        transform: translateY(-40px);
                    }

                    100% {
                        transform: translateY(0px);
                    }
                }
            `}</style>
        </>
    );
}