'use client';

import { motion } from 'framer-motion';
import {
    ClipboardCheck,
    Wrench,
    Headphones,
    Check,
    ArrowRight,
    Sparkles,
} from 'lucide-react';

const PROCESS = [
    {
        step: '01',
        icon: ClipboardCheck,
        title: 'Strategy & Solar Design',
        description:
            'We analyse your property, electricity usage, and future goals to build a high-performance solar solution tailored for maximum savings.',
        points: [
            'Complete energy assessment',
            'Custom solar system planning',
            'Government rebate assistance',
        ],
    },
    {
        step: '02',
        icon: Wrench,
        title: 'Precision Installation',
        description:
            'Our certified in-house technicians deliver a fast, clean, and professional installation experience with premium-quality workmanship.',
        points: [
            'CEC-certified installation',
            'Battery-ready integration',
            'Safety testing & activation',
        ],
    },
    {
        step: '03',
        icon: Headphones,
        title: 'Lifetime Monitoring',
        description:
            'Enjoy long-term performance with smart monitoring, dedicated support, and ongoing optimisation for your solar system.',
        points: [
            '24/7 performance tracking',
            'Priority technical support',
            'Long-term maintenance guidance',
        ],
    },
];

export default function ProcessTimelineSection() {
    return (
        <section className="relative overflow-hidden bg-white py-8 md:py-32">

            <div className="container relative z-10 mx-auto px-5">

                {/* HEADER */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="mx-auto mb-44 max-w-5xl text-center"
                >

                    {/* TOP LABEL */}
                    <div className="mb-6 flex justify-center">

                        <div className="flex items-center gap-2 rounded-full border border-[#004093]/10 bg-white px-5 py-2 shadow-sm">

                            <Sparkles className="h-4 w-4 text-[#FE9900]" />

                            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#004093]">
                                Hassle-Free Solar Journey
                            </span>
                        </div>
                    </div>

                    {/* TITLE */}
                    <h2 className="text-5xl  font-serif font-bold tracking-[-3px] text-slate-900 md:text-7xl">

                        Simple Process.
                        <br />

                        <span className="bg-linear-to-r from-[#004093] to-[#FE9900] bg-clip-text text-transparent">
                            Powerful Results.
                        </span>
                    </h2>

                    {/* LINE */}
                    <div className="mx-auto mt-6 h-1 w-40 rounded-full bg-linear-to-r from-[#004093] to-[#FE9900]" />

                    {/* DESCRIPTION */}
                    <p className="mx-auto mt-8 max-w-5xl text-lg leading-loose text-slate-600">
                        From consultation and installation to lifetime monitoring,
                        we make switching to solar smooth, transparent, and stress-free.
                    </p>
                </motion.div>

                {/* PROCESS SECTION */}
                <div className="relative">

                    {/* CONNECTING LINE */}
                    <div className="absolute left-1/2 top-20 hidden h-[75%] w-[2px] -translate-x-1/2 bg-linear-to-b from-[#004093] via-[#FE9900] to-[#004093] xl:block" />

                    {/* GRID */}
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:items-center">

                        {PROCESS.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{
                                    opacity: 0,
                                    y: 60,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.7,
                                    delay: i * 0.2,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                whileHover={{
                                    scale: 1.03,
                                }}
                                className={`
                                group relative

                                ${i === 0 ? 'lg:-translate-y-24' : ''}
                                ${i === 1 ? 'lg:-translate-y-10' : ''}
                                ${i === 2 ? 'lg:-translate-y-24' : ''}
                                `}
                            >

                                {/* ARROW */}
                                {i < 2 && (
                                    <div className="absolute -right-10 top-1/2 z-20 hidden -translate-y-1/2 xl:block">

                                        <motion.div
                                            animate={{
                                                x: [0, 12, 0],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                            }}
                                        >

                                            <ArrowRight className="h-8 w-8 text-[#004093]/20" />
                                        </motion.div>
                                    </div>
                                )}

                                {/* MAIN BOX */}
                                <div className="
                                relative overflow-hidden rounded-lg
                                border border-black/30
                                bg-white/70 p-10 shadow-xl
                                shadow-black/40
                                backdrop-blur-xl
                                transition-all duration-500
                                group-hover:shadow-[0_40px_100px_rgba(0,64,147,0.12)]
                                ">

                                    {/* HOVER EFFECT */}
                                    <div className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100">

                                        <div className="absolute inset-0 bg-linear-to-br from-[#004093]/5 via-transparent to-[#FE9900]/10" />

                                        <div className="absolute -top-10 right-0 h-40 w-40 rounded-full bg-[#004093]/10 blur-[90px]" />

                                        <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[#FE9900]/10 blur-[90px]" />
                                    </div>

                                    {/* STEP */}
                                    <div className="relative z-10 flex items-center justify-between">

                                        {/* ICON */}
                                        <div className="
                                        flex h-20 w-20 items-center justify-center
                                        rounded-3xl
                                        bg-linear-to-br from-[#004093] to-[#FE9900]
                                        shadow-[0_20px_50px_rgba(0,64,147,0.25)]
                                        transition-all duration-500
                                        group-hover:rotate-6 group-hover:scale-110
                                        ">

                                            <item.icon className="h-10 w-10 text-white" />
                                        </div>

                                        {/* NUMBER */}
                                        <span className="text-7xl font-black leading-none text-slate-200 transition-all duration-500 group-hover:text-[#FE9900]/90">
                                            {item.step}
                                        </span>
                                    </div>

                                    {/* CONTENT */}
                                    <div className="relative z-10 mt-10">

                                        {/* TITLE */}
                                        <h3 className="text-2xl font-black leading-tight tracking-[-1px] text-slate-900">
                                            {item.title}
                                        </h3>

                                        {/* DESCRIPTION */}
                                        <p className="mt-6 text-[16px] leading-loose text-slate-600">
                                            {item.description}
                                        </p>

                                        {/* POINTS */}
                                        <div className="mt-8 space-y-5">

                                            {item.points.map((point, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-start gap-4"
                                                >

                                                    <div className="
                                                    mt-1 flex h-6 w-6 shrink-0 items-center justify-center
                                                    rounded-full
                                                    bg-linear-to-br from-[#004093] to-[#FE9900]
                                                    shadow-md
                                                    ">

                                                        <Check className="h-3.5 w-3.5 text-white" />
                                                    </div>

                                                    <p className="text-[15px] font-medium leading-[1.8] text-slate-700">
                                                        {point}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                 
                                </div>

                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}