'use client';

import { motion } from 'framer-motion';
import {
    ShieldCheck,
    BatteryCharging,
    Clock3,
    BadgePercent,
    Headphones,
    Wrench,
    ArrowUpRight,
} from 'lucide-react';


const FEATURES = [
    {
        icon: ShieldCheck,
        title: 'Tier-1 Certified',
        description: 'Elite SAA-accredited installers delivering high-yield performance across Australia.',
    },
    {
        icon: Clock3,
        title: 'Rapid Deployment',
        description: 'Zero-friction process from rooftop design to grid activation in record time.',
    },
    {
        icon: BadgePercent,
        title: 'Rebate Mastery',
        description: 'We navigate the STC and state incentive landscape to slash your upfront costs.',
    },
    {
        icon: BatteryCharging,
        title: 'Grid Independence',
        description: 'Battery-ready infrastructure designed for 24/7 self-sufficiency and blackout protection.',
    },
    {
        icon: Headphones,
        title: 'Active Monitoring',
        description: 'Real-time performance tracking with a dedicated local rapid-response team.',
    },
    {
        icon: Wrench,
        title: 'In-House Control',
        description: 'End-to-end management by Hexa staff. No subcontractors, no compromises.',
    },
];

export default function WhyChooseSection() {
    return (
        <section className="relative overflow-hidden bg-white py-14">
            {/* SUBTLE BACKGROUND DECOR */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 opacity-20">
                <div className="h-[600px] w-[600px] rounded-full bg-[#FE9900]/20 blur-[120px]" />
            </div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 opacity-20">
                <div className="h-[600px] w-[600px] rounded-full bg-[#004093]/20 blur-[120px]" />
            </div>

            <div className="container relative z-10 mx-auto px-6">
                {/* HEADER */}
                <div className="mb-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-6xl">
                            The <span className="text-[#004093]">Aussie </span> Sun Solr
                        </h2>
                        <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#FE9900]" />
                        <p className="mx-auto mt-8 max-w-4xl text-md md:text-lg leading-relaxed text-slate-500">
                            We combine premium Australian standards with world-class solar technology
                            to deliver energy independence that lasts for decades.
                        </p>
                    </motion.div>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {FEATURES.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="group relative h-full min-h-[320px] overflow-hidden rounded-lg border  bg-white p-4 md:p-10 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.9)] border-[#FE9900] transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(254,153,0,0.25)]"
                        >
                            {/* THE INNER CARD COLOR FILL (ANIMATES ON HOVER) */}
                            <div className="absolute inset-0 z-0 translate-y-[102%] bg-linear-to-br from-[#004093] to-[#FE9900] transition-transform duration-500 ease-out group-hover:translate-y-0" />

                            <div className="relative z-10 flex h-full flex-col">
                                {/* ICON BOX */}
                                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-500 text-[#FE9900] shadow-inner transition-all duration-500 group-hover:bg-white/20 group-hover:text-white group-hover:rotate-10">
                                    <item.icon className="h-8 w-8" />
                                </div>

                                {/* TEXT CONTENT */}
                                <div className="grow">
                                    <h3 className="mb-4 text-2xl font-extrabold tracking-tight text-slate-900 transition-colors duration-500 group-hover:text-white">
                                        {item.title}
                                    </h3>
                                    <p className="text-base leading-relaxed text-slate-500 transition-colors duration-500 group-hover:text-white/90">
                                        {item.description}
                                    </p>
                                </div>

                                {/* DECORATIVE ARROW */}
                                <div className="mt-2 md:mt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#FE9900] transition-colors duration-500 group-hover:text-white">
                                    <span>Learn More</span>
                                    <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </div>
                            </div>

                            {/* FAINT BACKGROUND ICON ON HOVER */}
                            <item.icon className="absolute -bottom-6 -right-6 h-28 w-28 opacity-0 transition-opacity duration-500 group-hover:opacity-80 text-white" />
                        </motion.div>
                    ))}
                </div>

                {/* BOTTOM TRUST BAR */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-4 md:mt-10 border-t border-slate-100 pt-10 flex flex-wrap justify-center gap-x-12 gap-y-6"
                >
                    {['SAA APPROVED', '100% IN-HOUSE', 'AUSTRALIA WIDE', 'TIER 1PANELS'].map((trust, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-[11px] font-black tracking-[0.3em] text-slate-900">
                            <div className="h-1.5 w-1.5 rounded-full bg-[#FE9900]" /> {trust}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}