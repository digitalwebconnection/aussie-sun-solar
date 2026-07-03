'use client';

import { motion } from 'framer-motion';
import BlurText from '../BlurText';

// Battery Partners
import battery1 from '../../assets/Battery Partners/1.webp';
import battery2 from '../../assets/Battery Partners/2.webp';
import battery3 from '../../assets/Battery Partners/3.webp';
import battery4 from '../../assets/Battery Partners/4.webp';
import battery5 from '../../assets/Battery Partners/5.webp';

// Inverters
import inverter1 from '../../assets/Inverters/1.webp';
import inverter2 from '../../assets/Inverters/2.webp';
import inverter3 from '../../assets/Inverters/3.webp';
import inverter4 from '../../assets/Inverters/4.webp';
import inverter5 from '../../assets/Inverters/5.webp';

// Panels
import panel1 from '../../assets/Panel/1.webp';
import panel2 from '../../assets/Panel/2.webp';
import panel3 from '../../assets/Panel/3.webp';
import panel4 from '../../assets/Panel/4.webp';
import panel5 from '../../assets/Panel/5.webp';

const BRANDS = [
    {
        category: 'Battery Partners',
        description:
            'Advanced energy storage solutions engineered for smarter backup power and long-term performance.',
        logos: [battery1, battery2, battery3, battery4, battery5],
    },
    {
        category: 'Smart Inverter Brands',
        description:
            'Industry-leading inverter technologies delivering efficient energy conversion and intelligent monitoring.',
        logos: [inverter1, inverter2, inverter3, inverter4, inverter5],
    },
    {
        category: 'Premium Solar Panels',
        description:
            'High-efficiency solar panels built for maximum durability, performance, and long-term energy savings.',
        logos: [panel1, panel2, panel3, panel4, panel5],
    },
];

export default function TrustedBrandsSection() {
    return (
        <section className="relative overflow-hidden bg-[#f8fafc] py-10 md:py-16" aria-label="Trusted technology partners">

            {/* BACKGROUND EFFECTS */}
            <div className="absolute inset-0">

                {/* GRID */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,64,147,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,64,147,0.03)_1px,transparent_1px)] bg-size-[70px_70px]" />

                {/* BLUE GLOW */}
                <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#004093]/10 blur-[120px]" />

                {/* ORANGE GLOW */}
                <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#FE9900]/10 blur-[120px]" />
            </div>

            <div className="container relative z-10 mx-auto px-5">

                {/* HEADING */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
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
                    className="mx-auto mb-10 max-w-7xl text-center"
                >

                    <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-[#FE9900]">
                        Trusted Technology Partners
                    </p>

                    <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-slate-900 leading-[1.2] flex flex-col items-center">
                        <BlurText
                            text="Powered By"
                            delay={80}
                            animateBy="words"
                            direction="top"
                        />
                        <BlurText
                            text="Leading Solar Brands"
                            delay={80}
                            animateBy="words"
                            direction="bottom"
                            className="bg-linear-to-r from-[#004093] to-[#FE9900] bg-clip-text text-transparent py-2 pb-4"
                        />
                    </h2>



                    <p className="mx-auto mt-5 max-w-7xl text-sm md:text-lg leading-loose text-slate-900">
                        We partner with globally trusted manufacturers to deliver
                        reliable solar systems built for performance, efficiency,
                        and long-term energy savings.
                    </p>
                </motion.div>

                {/* BRAND ROWS */}
                <div className="md:space-y-10 space-y-6">

                    {BRANDS.map((item, i) => (
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
                                duration: 0.8,
                                delay: i * 0.1,
                            }}
                            viewport={{
                                once: true,
                            }}
                            className="
                            relative overflow-hidden 
                            p-6 md:p-8
                           
                            "
                        >

                            {/* HOVER GLOW */}
                            <div className="absolute inset-0" />

                            <div className="grid items-center gap-10 xl:grid-cols-[320px_1fr]">

                                {/* LEFT CONTENT */}
                                <div className="relative z-10">

                                    {/* SMALL LABEL */}
                                    <div className="
                                    inline-flex items-center rounded-full
                                    bg-linear-to-r from-[#004093] to-[#FE9900]
                                    px-5 py-2
                                    text-xs font-black   uppercase tracking-[0.3em]
                                    text-white
                                    ">

                                        Trusted Partner
                                    </div>

                                    {/* TITLE */}
                                    <h3 className="mt-6 text-xl md:text-2xl font-serif font-semibold tracking-[-2px] text-slate-900">
                                        {item.category}
                                    </h3>

                                    {/* LINE */}
                                    <div className="mt-5 h-1 w-20 rounded-full bg-linear-to-r from-[#004093] to-[#FE9900]" />

                                </div>

                                {/* LOGO ROW */}
                                <div className="relative z-10">

                                    <div className="grid grid-cols-2 items-center gap-3  md:gap-8 sm:grid-cols-3 lg:grid-cols-5">

                                        {item.logos.map((logo, idx) => (
                                            <motion.div
                                                key={idx}
                                                whileHover={{
                                                    y: -8,
                                                    scale: 1.05,
                                                }}
                                                transition={{
                                                    duration: 0.3,
                                                }}
                                                className="
                                                group relative flex h-20 md:h-32 items-center justify-center
                                                   transition-all duration-500
                                               
                                                "
                                            >


                                                {/* LOGO */}
                                                <motion.img
                                                    animate={{
                                                        y: [0, -4, 0],
                                                    }}
                                                    transition={{
                                                        duration: 3,
                                                        repeat: Infinity,
                                                        delay: idx * 0.2,
                                                    }}
                                                    src={logo}
                                                    alt={`${item.category} partner brand logo ${idx + 1}`}
                                                    className="
                                                    relative z-10
                                                    max-h-16 w-auto
                                                    object-contain
                                             
                                                    transition-all duration-500
                                                
                                                    "
                                                />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}