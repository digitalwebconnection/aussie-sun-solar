'use client';

import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';
import Counter from './Counter';

const STATS = [
    {
        value: 20,
        suffix: 'K+',
        label: 'Happy Customers',
    },
    {
        value: 18,
        suffix: '+',
        label: 'Years Experience',
    },
    {
        value: 98,
        suffix: '%',
        label: 'Success Rate',
    },
    {
        value: 24,
        suffix: '/7',
        label: 'Support Available',
    },
];

export default function StatsSection() {
    return (
        <motion.section
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
            className="relative  overflow-hidden py-10"
            aria-label="Our achievements in numbers"
        >

            {/* BACKGROUND IMAGE */}
            <div className="absolute inset-0 overflow-hidden">

                {/* FIXED PARALLAX IMAGE */}
                <div
                    className="absolute inset-0 scale-110 bg-fixed bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&h=1000&fit=crop')",
                    }}
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/80" />

            
            </div>

            <div className="container relative z-10 mx-auto px-5">

     

                {/* STATS GRID */}
                <div className="grid gap-8 grid-cols-2 xl:grid-cols-4">

                    {STATS.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{
                                opacity: 0,
                                y: 50,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: i * 0.1,
                            }}
                            viewport={{
                                once: true,
                            }}
                            whileHover={{
                                y: -12,
                                scale: 1.03,
                            }}
                            className="
                            group relative overflow-hidden rounded-lg
                            border border-[#FE9900]/40
                            bg-[#004093]/60 
                            md:p-10 p-5 text-center
                            shadow-[0_25px_60px_rgba(0,0,0,0.25)]
                            transition-all duration-500
                            hover:shadow-[0_35px_90px_rgba(0,64,147,0.35)]
                            "
                        >

                            {/* CARD GLOW */}
                            <div className="absolute inset-0 opacity-0 transition-all duration-700 group-hover:opacity-100">

                                {/* LIGHT GRADIENT */}
                                <div className="absolute inset-0 bg-linear-to-br from-white/20 via-transparent to-black/10" />

                                {/* TOP LIGHT */}
                                <div className="absolute -top-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-white/20 blur-[80px]" />

                                {/* ORANGE GLOW */}
                                <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-[#FE9900]/30 blur-[90px]" />
                            </div>

                            {/* ICON */}
                            <div className="relative z-10 mx-auto mb-6 flex h-10 w-10 md:h-20 md:w-20 items-center justify-center rounded-full border border-white/20 bg-white/15 text-[#FE9900] backdrop-blur-xl">

                                <BadgeCheck className="h-5 w-5 md:h-8 md:w-8" />
                            </div>

                            {/* NUMBER */}
                            <div className="relative z-10 flex items-center justify-center text-[#FE9900]">

                                <div className="**:bg-transparent! **:shadow-none!">
                                    <Counter
                                        value={item.value}
                                        fontSize={54}
                                            fontWeight={900}
                                        textColor="#FE9900"
                                        padding={0}
                                        gradientHeight={0}
                                        horizontalPadding={0}
                                        gap={0}
                                        containerStyle={{
                                            display: 'flex',
                                            alignItems: 'baseline',
                                            background: 'transparent',
                                            boxShadow: 'none',
                                        }}
                                        digitStyle={{
                                            background: 'transparent',
                                            boxShadow: 'none',
                                            border: 'none',
                                        }}
                                    />
                                </div>

                                {item.suffix && (
                                    <span className="ml-1 text-3xl md:text-5xl font-black tracking-[-2px]">
                                        {item.suffix}
                                    </span>
                                )}
                            </div>

                            {/* LABEL */}
                            <p className="relative z-10 mt-4 text-sm md:text-lg font-semibold uppercase tracking-[0.25em] text-[#FE9900]">
                                {item.label}
                            </p>

                            {/* BOTTOM LINE */}
                            <div className="relative z-10 mx-auto mt-7 h-[2px] w-16 bg-[#FE9900]/50 transition-all duration-500 group-hover:w-28" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}