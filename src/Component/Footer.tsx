
import { motion, type Variants } from "framer-motion";
import {
    Phone,
    Mail,
    MapPin,
    ArrowUp,
    ExternalLink,
} from "lucide-react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

import logo from "../assets/logo.png";

// --- ANIMATION VARIANTS ---
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20
        },
    },
};

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative bg-white text-[#004093] overflow-hidden border-t border-gray-100">

            {/* --- BACKGROUND ACCENTS --- */}
            {/* Soft gradient glows for a "clean" tech look */}
            {/* <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FE9900]/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#004093]/5 rounded-full blur-[100px] pointer-events-none" /> */}

            {/* --- TOP CTA SECTION --- */}
            <div className="relative z-10 bg-[#ececec] border-b border-gray-500/40">
                <div className="max-w-7xl mx-auto py-2 flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-black tracking-tight"
                        >
                            Start Your <span className="text-[#FE9900]">Solar Journey</span>
                        </motion.h2>
                        <p className="text-gray-500 mt-2 text-lg">Premium energy solutions for a sustainable future.</p>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(254 153 0 / 0.2)" }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-3 bg-[#FE9900] text-white px-15 py-3 rounded-lg font-bold text-lg shadow-xl shadow-[#FE9900]/20 transition-all group"
                    >
                        Get A Free Quote
                        <ExternalLink size={20} className="group-hover:rotate-45 transition-transform" />
                    </motion.button>
                </div>
            </div>

            {/* --- MAIN GRID --- */}
            <motion.div
                className="max-w-7xl mx-auto py-10 relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* COL 1: BRAND */}
                    <motion.div variants={itemVariants} className="space-y-8">
                        <img src={logo} alt="HexaSolar" className="h-26 w-auto" />
                        <p className="text-gray-600 leading-relaxed text-base">
                            Australia's trusted partner in renewable energy. We provide high-efficiency solar panels and battery systems tailored for your needs.
                        </p>
                        <div className="flex gap-3">
                            {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                                <a key={i} href="#" className="w-11 h-11 rounded-xl bg-gray-50 flex items-center justify-center text-[#004093] hover:bg-[#004093] hover:text-white transition-all border border-gray-100 shadow-sm">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* COL 2: CONTACT */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-xl font-bold mb-8 flex items-center gap-3 text-[#004093]">
                            <span className="w-2 h-7 bg-[#FE9900] rounded-full"></span>
                            Contact Us
                        </h3>
                        <div className="space-y-6">
                            <a href="tel:1300504912" className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-2xl bg-[#004093] flex items-center justify-center group-hover:bg-[#FE9900] transition-colors shadow-lg shadow-blue-900/10">
                                    <Phone size={20} className="text-white" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Support Line</p>
                                    <h4 className="font-extrabold text-lg group-hover:text-[#FE9900] transition-colors">1300 504 912</h4>
                                </div>
                            </a>

                            <a href="mailto:info@hexasolarsolutions.com.au" className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-2xl bg-[#004093] flex items-center justify-center group-hover:bg-[#FE9900] transition-colors shadow-lg shadow-blue-900/10">
                                    <Mail size={20} className="text-white" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Us</p>
                                    <h4 className="font-extrabold text-sm truncate group-hover:text-[#FE9900] transition-colors">info@hexasolar.com.au</h4>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    {/* COL 3: ADDRESS */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-xl font-bold mb-8 flex items-center gap-3 text-[#004093]">
                            <span className="w-2 h-7 bg-[#FE9900] rounded-full"></span>
                            Our Offices
                        </h3>
                        <div className="space-y-8">
                            {[
                                { state: "South Australia", addr: "3/55 Gawler Place, Adelaide" },
                                { state: "Queensland", addr: "29/97 Creek St, Brisbane City" },
                            ].map((loc, i) => (
                                <div key={i} className="flex gap-4 group">
                                    <MapPin size={22} className="text-[#FE9900] shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-[#004093]">{loc.state}</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed">{loc.addr}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* COL 4: LINKS */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-xl font-bold mb-8 flex items-center gap-3 text-[#004093]">
                            <span className="w-2 h-7 bg-[#FE9900] rounded-full"></span>
                            Quick Links
                        </h3>
                        <ul className="space-y-4">
                            {["Home", "Products", "About Us", "Our Projects", "Contact Us", "Pay a Bill"].map((link, i) => (
                                <li key={i}>
                                    <a href="#" className="text-gray-600 hover:text-[#FE9900] font-semibold transition-all flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#FE9900] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </motion.div>

            {/* --- BOTTOM STRIP --- */}
            <div className="border-t border-gray-100 py-2 bg-[#fcfdfe]">
                <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-gray-500 font-medium">
                        © 2025 <span className="text-[#004093] font-bold">HexaSolar Solutions</span>. All Rights Reserved.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-8 w-14 h-14 rounded-2xl bg-[#004093] text-white flex items-center justify-center hover:bg-[#FE9900] hover:-translate-y-2 transition-all shadow-2xl z-50 group"
                    >
                        <ArrowUp size={24} className="group-hover:animate-bounce" />
                    </button>
                </div>
            </div>

            {/* --- FLOATING ACTION --- */}

        </footer>
    );
};

export default Footer;