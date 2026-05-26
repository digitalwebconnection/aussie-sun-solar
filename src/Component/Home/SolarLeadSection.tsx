import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Battery,
    Zap,
    ShieldCheck,
    PhoneCall,
    LayoutGrid,
    ChevronRight, Mail, User, Home
} from "lucide-react";

const inputVariants = {
    focus: {
        scale: 1.04,
        borderColor: "#004093",
        backgroundColor: "#ffffff",
        boxShadow: "0px 10px 20px rgba(0, 64, 147, 0.5)"
    },
};
const solarOptions = [
    {
        id: 1,
        title: "Complete Solar Setup",
        subtitle: "Full-scale rooftop intelligence.",
        image: "https://hexasolarsolutions.com.au/wp-content/uploads/2026/02/new-solar-sytem.webp",
        badge: "Premium Solution",
        icon: <LayoutGrid size={20} />,
        features: ["25 Years Performance Warranty", "High Efficiency Solar Panels", "Fast Installation Support"],
    },
    {
        id: 2,
        title: "System Upgrade",
        subtitle: "Modernize your existing energy.",
        image: "https://hexasolarsolutions.com.au/wp-content/uploads/2026/02/expanding-existing-solar.webp",
        badge: "Efficiency Boost",
        icon: <Zap size={20} />,
        features: ["Extra Power Generation", "Latest Inverter Technology", "Lower Electricity Bills"],
    },
    {
        id: 3,
        title: "Solar + Battery",
        subtitle: "Total energy independence.",
        image: "https://hexasolarsolutions.com.au/wp-content/uploads/2026/02/new-solar-battery-sytem.webp",
        badge: "Smart Hybrid",
        icon: <Battery size={20} />,
        features: ["Night Time Power Backup", "Hybrid Smart System", "Maximum Energy Savings"],
    },
    {
        id: 4,
        title: "Storage Only",
        subtitle: "Reliable 24/7 backup power.",
        image: "https://hexasolarsolutions.com.au/wp-content/uploads/2026/02/All-Battery-New.png",
        badge: "Power Storage",
        icon: <ShieldCheck size={20} />,
        features: ["Premium Lithium Batteries", "Smart Energy Monitoring", "Uninterrupted Supply"],
    },
];

const SolarLeadSection = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="relative py-6 md:py-14 bg-white overflow-hidden text-[#004093] font-sans">

            <div className="max-w-7xl mx-auto px-6  relative z-10">
                {/* Simple Header */}
                <div className="mb-4 md:mb-8 relative text-center">

                    {/* Right Shadow Glow */}
                    <div className="absolute right-0 top-10 w-[300px] h-[300px] bg-[#FE9900]/20 blur-[120px] rounded-full pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex items-center text-center justify-center gap-2 mb-4 relative z-10"
                    >
                        <div className="w-10 h-[2px] bg-[#FE9900]" />

                        <span className="text-[#FE9900] font-bold text-xs uppercase tracking-widest">
                            Renewable Future
                        </span>
                    </motion.div>

                    <h2 className="text-3xl md:text-7xl font-bold tracking-tight text-[#004093] relative z-10">
                        Build Your{" "}

                        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#004093] to-[#FE9900] drop-shadow-[4px_4px_12px_rgba(254,153,0,0.35)]">
                            Smart Solar
                        </span>

                        <br />

                        <span className="drop-shadow-[8px_8px_20px_rgba(0,64,147,0.18)]">
                            Ecosystem Today.
                        </span>
                    </h2>
                </div>
                {/* Minimalist Tabs */}
                <div className="flex flex-wrap gap-2 justify-center items-center max-w-7xl mx-auto mb-4 md:mb-8 py-0 md:p-1.5 bg-slate-50 rounded-2xl w-fit">
                    {solarOptions.map((item, index) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(index)}
                            className={`flex items-center gap-2 px-10 py-3 rounded-lg shadow-xl font-bold text-sm transition-all duration-300 ${activeTab === index
                                ? "bg-[#004093] text-white shadow-lg"
                                : "text-slate-900 border border-slate-400  hover:text-[#004093] hover:bg-white"
                                }`}
                        >
                            {item.icon}
                            {item.title}
                        </button>
                    ))}
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Left: Dynamic Content */}
                    <div className="lg:col-span-7">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.02 }}
                                transition={{ duration: 0.4 }}
                                className="group relative"
                            >
                                {/* Main Visual */}
                                <div className="relative aspect-16/11  overflow-hidden ">
                                    <img
                                        src={solarOptions[activeTab].image}
                                        alt={solarOptions[activeTab].title}
                                        className="w-150 h-120 object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-[#004093] via-transparent to-transparent" />

                                    {/* Floating Content over Image */}
                                    <div className="absolute bottom-4 left-4 right-8 flex justify-between items-end">
                                        <div className="text-white">
                                            <span className="inline-block px-8 py-1 rounded-lg bg-[#FE9900] text-sm font-semibold uppercase mb-2">
                                                {solarOptions[activeTab].badge}
                                            </span>
                                            <h3 className="text-4xl font-bold leading-tight">{solarOptions[activeTab].title}</h3>
                                            <p className="text-white/90 text-md mt-1">{solarOptions[activeTab].subtitle}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Features Checklist */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                                    {solarOptions[activeTab].features.map((feature, idx) => (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            key={idx}
                                            className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg shadow-lg  border border-slate-300"
                                        >
                                            <div className="w-6 h-6 rounded-full bg-[#004093]/10 flex items-center justify-center text-[#004093]">
                                                <ShieldCheck size={14} />
                                            </div>
                                            <span className="text-[13px] font-bold text-[#004093] leading-tight">{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right: Premium Form */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-5 md:p-10  border border-slate-300   shadow-lg shadow-black relative overflow-hidden"
                        >
                            {/* Subtle decorative glow */}
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#FE9900]/5 blur-[60px] rounded-full" />

                            <div className="mb-10 relative z-10">
                                <div className="flex items-center gap-2 text-[#FE9900] mb-3">
                                    <motion.div
                                        animate={{ rotate: [0, 10, 0] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                    >
                                        <PhoneCall size={18} strokeWidth={3} />
                                    </motion.div>
                                    <span className="text-xs font-black uppercase tracking-[0.2em]">Priority Access</span>
                                </div>
                                <h3 className="text-4xl font-black text-[#004093] tracking-tight">Instant Quote</h3>
                                <p className="text-slate-500 text-sm mt-3 font-medium leading-relaxed">
                                    Fill in your details below. Our AI-driven system will calculate your estimated savings instantly.
                                </p>
                            </div>

                            <form className="space-y-5 relative z-10">
                                {/* Name & Phone Row */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                        <motion.input
                                            whileFocus="focus"
                                            variants={inputVariants}
                                            type="text"
                                            placeholder="First Name"
                                            className="w-full pl-12 pr-5 py-4 rounded-lg bg-slate-50 border border-slate-100 text-[#004093] outline-none transition-all text-sm font-bold placeholder:text-slate-400 placeholder:font-medium"
                                        />
                                    </div>
                                    <div className="relative">
                                        <PhoneCall className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                        <motion.input
                                            whileFocus="focus"
                                            variants={inputVariants}
                                            type="text"
                                            placeholder="Phone"
                                            className="w-full pl-12 pr-5 py-4 rounded-lg bg-slate-50 border border-slate-100 text-[#004093] outline-none transition-all text-sm font-bold placeholder:text-slate-400 placeholder:font-medium"
                                        />
                                    </div>
                                </div>

                                {/* Email Field */}
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                    <motion.input
                                        whileFocus="focus"
                                        variants={inputVariants}
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full pl-12 pr-5 py-4 rounded-lg bg-slate-50 border border-slate-100 text-[#004093] outline-none transition-all text-sm font-bold placeholder:text-slate-400 placeholder:font-medium"
                                    />
                                </div>

                                {/* Project Type Select */}
                                <div className="relative">
                                    <Home className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                    <motion.select
                                        whileFocus="focus"
                                        variants={inputVariants}
                                        className="w-full pl-12 pr-5 py-4 rounded-lg bg-slate-50 border border-slate-200 text-[#004093] outline-none transition-all text-sm font-bold appearance-none cursor-pointer"
                                    >
                                        <option>Select Property Type</option>
                                        <option>Residential Home</option>
                                        <option>Commercial Building</option>
                                        <option>Industrial Site</option>
                                    </motion.select>
                                </div>

                                {/* THE ULTRA-PREMIUM BUTTON */}
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="relative w-full group overflow-hidden bg-[#004093] text-white py-5 rounded-[1.25rem] font-black text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all duration-500 shadow-[0_15px_30px_-5px_rgba(0,64,147,0.3)]"
                                >
                                    {/* Shimmer Effect Layer */}
                                    <motion.div
                                        initial={{ x: "-100%" }}
                                        animate={{ x: "100%" }}
                                        transition={{ repeat: Infinity, duration: 2, ease: "linear", repeatDelay: 1 }}
                                        className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12"
                                    />

                                    <span className="relative z-10">Get My Estimate</span>

                                    <motion.div
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ repeat: Infinity, duration: 1.5 }}
                                        className="relative z-10"
                                    >
                                        <ChevronRight size={20} strokeWidth={3} />
                                    </motion.div>

                                    {/* Hover Background Shift */}
                                    <div className="absolute inset-0 bg-[#FE9900] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </motion.button>

                                <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest mt-4 md:mt-6">
                                    🔒 256-bit Secure Data Encryption
                                </p>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolarLeadSection;