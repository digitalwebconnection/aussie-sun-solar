
import { motion } from 'framer-motion';
import {
    Phone,
    ArrowRight,
    ShieldCheck,
    Headphones,
    Zap,
} from 'lucide-react';

import supportPerson from '../../assets/downloaded-images/support-person.jpg';

export default function SolarSupportSection() {
    return (
        <section className="relative overflow-hidden" aria-label="Solar support and consultation">


            <div className=" relative z-10 mx-auto ">

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
                        duration: 0.8,
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="
                    relative overflow-hidden 
                    bg-[#0A3775]
                    shadow-[0_40px_120px_rgba(0,64,147,0.25)]
                    "
                >



                    {/* ORANGE GLOW */}
                    <div className="absolute -right-20 top-0 max-w-7xl mx-auto rounded-full bg-[#FE9900]/20 blur-[120px] " />

                    <div className="grid items-center lg:grid-cols-[1.1fr_0.9fr]">

                        {/* LEFT SIDE */}
                        <div className="relative z-10 p-5 md:p-16 lg:p-10">

                            {/* TOP LABEL */}
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    x: -20,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                transition={{
                                    duration: 0.6,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                className="
                                inline-flex items-center gap-2 rounded-full
                                border border-white/10
                                bg-white/10 px-5 py-2
                                backdrop-blur-xl
                                "
                            >

                                <Zap className="h-4 w-4 text-[#FE9900]" />

                                <span className="text-xs font-black uppercase tracking-[0.3em] text-white">
                                    Trusted Solar Specialists
                                </span>
                            </motion.div>

                            {/* HEADING */}
                            <motion.h2
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
                                    delay: 0.1,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                className="
                                mt-4 md:mt-8 text-3xl md:text-5xl font-black leading-tight
                                tracking-[-2px]
                                text-white xl:text-6xl
                                "
                            >
                                Affordable Solar
                                <br />
                                <span className="bg-linear-to-r from-white to-[#FE9900] bg-clip-text text-transparent">
                                    Installation for
                                </span>
                                <br />
                                Smarter Energy Savings
                            </motion.h2>

                            {/* DESCRIPTION */}
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.2,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                className="
                                mt-8 max-w-2xl text-lg leading-loose
                                text-white/90 space-y-4
                                "
                            >
                                <p>
                                    Aussie Sun Solar delivers reliable and affordable solar installation solutions designed to reduce electricity bills and maximize long-term energy savings for Australian homes and businesses.
                                </p>
                                <p>
                                    With premium solar technology and smart solar solutions, we help you switch to cleaner, more efficient, and sustainable energy.
                                </p>
                            </motion.div>

                            {/* FEATURES */}
                            <div className="mt-4 md:mt-10 flex flex-wrap gap-5">

                                {[
                                    'SAA Certified Installers',
                                    'Battery Ready Systems',
                                    '25-Year Performance Warranty',
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{
                                            opacity: 0,
                                            y: 20,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            delay: i * 0.1,
                                        }}
                                        viewport={{
                                            once: true,
                                        }}
                                        className="
                                        flex items-center gap-3 rounded-full
                                        border border-white/10
                                        bg-white/10 px-5 py-3
                                        text-sm font-bold text-white
                                        backdrop-blur-xl
                                        "
                                    >

                                        <ShieldCheck className="h-5 w-5 text-[#FE9900]" />

                                        {item}
                                    </motion.div>
                                ))}
                            </div>

                            {/* CTA */}
                            <div className="mt-7 flex flex-col gap-4 md:flex-row md:items-center">

                                {/* BUTTON */}
                                <motion.button
                                    whileHover={{
                                        scale: 1.04,
                                    }}
                                    whileTap={{
                                        scale: 0.96,
                                    }}
                                    className="
                                    group flex items-center overflow-hidden
                                    rounded-full
                                    bg-white
                                    shadow-[0_20px_50px_rgba(0,0,0,0.25)]
                                    p-1
                                    "
                                >

                                    <span className="
                                    px-4  text-sm font-black uppercase
                                    tracking-[0.25em]
                                    text-[#004093]
                                    ">
                                        Get Free Consultation
                                    </span>

                                    <div className="
                                    flex h-full items-center justify-center
                                    bg-[#FE9900]     rounded-e-full  py-4
                                    px-6 text-white
                                    ">

                                        <ArrowRight className="
                                        h-5 w-5 transition-transform duration-500
                                        group-hover:translate-x-2
                                        " />
                                    </div>
                                </motion.button>

                                {/* SUPPORT */}
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        x: 20,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    transition={{
                                        duration: 0.7,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    className="flex items-center gap-5"
                                >

                                    <div className="
                                    flex 
                                    p-3 items-center justify-center
                                    rounded-full
                                    border border-white/10
                                    bg-white/10
                                    text-white
                                    backdrop-blur-xl
                                    ">

                                        <Phone className="h-7 w-7 text-[#FE9900]" />
                                    </div>

                                    <div>

                                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/90">
                                            24/7 Solar Support
                                        </p>

                                        <h3 className="mt-1 text-2xl font-black text-white">
                                            1300 589 245
                                        </h3>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* RIGHT SIDE IMAGE */}
                        <div className="relative min-h-[400px] lg:h-[700px] overflow-hidden">

                            {/* IMAGE */}
                            <motion.img
                                initial={{
                                    scale: 1.1,
                                    opacity: 0,
                                }}
                                whileInView={{
                                    scale: 1,
                                    opacity: 1,
                                }}
                                transition={{
                                    duration: 1,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                src={supportPerson}
                                alt="Solar support team specialist"
                                className="h-full w-full object-cover"
                            />

                            {/* OVERLAY */}
                            <div className="absolute inset-0 bg-linear-to-r from-[#0A3775] via-[#0A3775]/20 to-transparent" />

                            {/* FLOATING SUPPORT CARD */}
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                }}
                                className="
                                absolute bottom-10 left-10
                                rounded-lg
                                border border-white/10
                                bg-white/10 p-4
                                backdrop-blur-2xl
                                "
                            >

                                <div className="flex items-center gap-4">

                                    <div className="
                                    flex h-14 w-14 items-center justify-center
                                    rounded-lg
                                    bg-linear-to-br from-[#004093] to-[#FE9900]
                                    ">

                                        <Headphones className="h-7 w-7 text-white" />
                                    </div>

                                    <div>

                                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/90">
                                            Live Assistance
                                        </p>

                                        <h4 className="mt-1 text-2xl font-black text-white">
                                            Expert Support Team
                                        </h4>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}