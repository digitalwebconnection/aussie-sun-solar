
import { motion, type Variants } from "framer-motion";
import {
    Phone,
    Mail,
    MapPin,
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


    return (
        <footer className="relative bg-white text-[#004093] overflow-hidden border-t border-gray-100">

            {/* --- BACKGROUND ACCENTS --- */}
            {/* Soft gradient glows for a "clean" tech look */}
            {/* <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FE9900]/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#004093]/5 rounded-full blur-[100px] pointer-events-none" /> */}

            {/* --- TOP CTA SECTION --- */}
            <div className="relative z-10 bg-[#000000] border-b border-gray-500/40">
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
                        <p className="text-gray-100 mt-2 text-lg">Premium energy solutions for a sustainable future.</p>
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

     


            {/* --- ACCREDITATION BAR --- */}
            <div className="border-t border-gray-400 bg-[#f8f8f8]">
                <div className="max-w-7xl mx-auto py-2 flex flex-col lg:flex-row items-center justify-between gap-8">

                    {/* LEFT SIDE */}
                    <div className="flex flex-col md:flex-row items-center gap-8">

                        {/* SMART ENERGY */}
                        <div className="flex items-center gap-5">
                            <img
                                src="https://arisesolar.com.au/wp-content/themes/arise-solar/assets/images/sec-logo.svg"
                                alt="Smart Energy Council"
                                className="h-24 object-contain"
                            />

                            {/* SOCIAL */}
                            <div className="flex items-center gap-4">
                                {[FaFacebookF, FaInstagram, FaLinkedinIn].map(
                                    (Icon, i) => (
                                        <a
                                            key={i}
                                            href="#"
                                            className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-[#004093] hover:bg-[#FE9900] hover:text-white hover:border-[#FE9900] transition-all duration-300"
                                        >
                                            <Icon size={18} />
                                        </a>
                                    )
                                )}

                                {/* YOUTUBE */}
                                <a
                                    href="#"
                                    className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-[#004093] hover:bg-[#FE9900] hover:text-white hover:border-[#FE9900] transition-all duration-300"
                                >
                                    ▶
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="text-center lg:text-right">
                        <p className="text-[#004093] font-semibold text-sm md:text-base">
                            QLD : 83780 / VIC : 27677 / SA : BLD286542 / NSW : 322855c
                        </p>
                    </div>
                </div>
            </div>

            {/* --- POLICY LINKS --- */}
            <div className="border-t border-gray-400 bg-white">
                <div className="max-w-7xl mx-auto py-5 flex flex-col lg:flex-row justify-between items-center gap-5">

                    {/* LINKS */}
                    <div className="flex flex-wrap items-center gap-6 text-sm md:text-base">
                        <a
                            href="/privacy-policy"
                            className="text-gray-600 hover:text-[#FE9900] transition-all font-medium"
                        >
                            Privacy Policy
                        </a>

                        <a
                            href="/terms-condition"
                            className="text-gray-600 hover:text-[#FE9900] transition-all font-medium"
                        >
                            Terms & Conditions
                        </a>

                        <a
                            href="/complaints-policy"
                            className="text-gray-600 hover:text-[#FE9900] transition-all font-medium"
                        >
                            Complaints Handling Policy
                        </a>
                    </div>

                    {/* COPYRIGHT */}
                    <div>
                        <p className="text-gray-500 text-sm md:text-base text-center lg:text-right">
                            ©2026
                            <span className="font-bold text-[#004093]">
                                {" "}
                                AUSSIE SUN SOLAR PTY LTD
                            </span>{" "}
                            ABN 32 168 693 987
                        </p>
                    </div>
                </div>
            </div>

            {/* --- DISCLAIMER --- */}
            <div className="border-t border-gray-400 bg-[#f8f8f8]">
                <div className="max-w-7xl mx-auto py-8">

                    <p className="text-gray-600 leading-8 text-sm md:text-base">
                        This Solar System Promotion is available for standard metropolitan based
                        installations only. Price is after Small Scale Technology Certificates
                        (STCs) have been assigned to Aussies Sun Solar Pty Ltd or its agents.
                        Any additional extras including but not limited to double storey,
                        roof type, meter box upgrades or three phase power, may attract
                        additional charges. Price beat offer applies to local competitor
                        advertised quotes only and must be for identical goods.
                    </p>

                    <p className="text-[#004093] font-semibold mt-4 text-sm md:text-base">
                        *Terms and conditions apply.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;