import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Cpu,
  Globe,
} from "lucide-react";

const packages = [
  {
    title: "6.6kW",
    tier: "Residential Essential",
    price: "3,499",
    savings: "2.5k",
    tagline: "Perfect for couples & small homes.",
    color: "#00d4ff",
    popular: false,
    stats: { panels: "15", inverter: "5kW", warranty: "25Y" },
    features: ["Tier-1 Mono Perc Panels", "Smart WiFi Monitoring", "Standard Installation"],
  },
  {
    title: "10.12kW",
    tier: "Family Executive",
    price: "5,499",
    savings: "4.2k",
    tagline: "The gold standard for modern families.",
    color: "#FE9900",
    popular: true,
    stats: { panels: "23", inverter: "8kW", warranty: "30Y" },
    features: ["Premium N-Type Cells", "Battery-Ready Hybrid", "Priority Grid Support"],
  },
  {
    title: "13.2kW",
    tier: "Estate Ultimate",
    price: "5,999",
    savings: "5.5k",
    tagline: "Zero-compromise energy independence.",
    color: "#ffffff",
    popular: false,
    stats: { panels: "30", inverter: "10kW", warranty: "30Y" },
    features: ["Max-Efficiency Glass-Glass", "Advanced AI Analytics", "Platinum Support"],
  },
];

const PremiumSolarPackages = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative py-14 bg-[#05070a] overflow-hidden font-sans" aria-label="Solar system packages and pricing">


      <div className="max-w-7xl mx-auto px-5 md:px-0 relative z-10">
        {/* Header */}
        <div className="flex flex-col  md:items-end justify-center text-center md:mb-20 mb-5 gap-8">
          <div className="max-w-2xl mx-auto">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[#FE9900] font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
            >
              System Selection 2026
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-[0.9]"
            >
              Future-Proof <br />
              <span className="text-[#FE9900]">Energy Portfolios.</span>
            </motion.h2>
          </div>
  
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
        
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative group rounded-lg p-px overflow-hidden transition-all duration-700"
            >
              {/* Animated Rotating Border */}
              <div
                className={`absolute -inset-full animate-[spin_3s_linear_infinite] opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
                style={{
                  background: `conic-gradient(from 90deg at 50% 50%, transparent 0%, transparent 70%, ${pkg.color} 100%)`
                }}
              />

              {/* Base Static Border/Background */}
              <div className={`absolute inset-0 ${pkg.popular ? "bg-linear-to-b from-[#FE9900]/50 to-transparent" : "bg-white/10"
                }`} />

              <div className="relative z-10 h-full bg-[#0a0d14] rounded-lg p-4 md:p-8 overflow-hidden flex flex-col">

                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute top-6 right-8 bg-[#FE9900] text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter flex items-center gap-1">
                    <Sparkles size={10} /> Most Popular
                  </div>
                )}

                {/* Header */}
                <div className="mb-10">
                  <h3 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">{pkg.tier}</h3>
                  <div className="flex items-baseline gap-2">
                    <h4 className="text-5xl font-black text-white">{pkg.title}</h4>
                    <div className="w-2 h-2 rounded-full bg-[#FE9900] animate-pulse" />
                  </div>
                  <p className="text-white/40 text-sm mt-2 font-medium">{pkg.tagline}</p>
                </div>

                {/* Pricing Bento Box */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/5 group-hover:bg-white/8 transition-colors">
                    <p className="text-[10px] text-white/30 uppercase font-bold mb-1">Investment</p>
                    <p className="text-2xl font-bold text-white">${pkg.price}</p>
                  </div>
                  <div className="bg-[#00d4ff]/5 rounded-2xl p-4 border border-[#00d4ff]/10">
                    <p className="text-[10px] text-[#00d4ff] uppercase font-bold mb-1">Est. Savings</p>
                    <p className="text-2xl font-bold text-white">~{pkg.savings}<span className="text-xs text-white/40">/yr</span></p>
                  </div>
                </div>

                {/* System Specs Bar */}
                <div className="flex justify-between items-center py-4 border-y border-white/5 mb-8">
                  <div className="text-center px-2">
                    <Cpu size={14} className="mx-auto mb-1 text-white/90" />
                    <p className="text-[10px] text-white/90 font-bold uppercase tracking-tighter">{pkg.stats.inverter}</p>
                  </div>
                  <div className="h-8 w-px bg-white/5" />
                  <div className="text-center px-2">
                    <Globe size={14} className="mx-auto mb-1 text-white/90" />
                    <p className="text-[10px] text-white/90 font-bold uppercase tracking-tighter">{pkg.stats.panels} Units</p>
                  </div>
                  <div className="h-8 w-px bg-white/5" />
                  <div className="text-center px-2">
                    <ShieldCheck size={14} className="mx-auto mb-1 text-white/90" />
                    <p className="text-[10px] text-white/90 font-bold uppercase tracking-tighter">{pkg.stats.warranty} Pro</p>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-10 grow">
                  {pkg.features.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                      <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                        <CheckCircle2 size={12} className={pkg.popular ? "text-[#FE9900]" : "text-white/40"} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative w-full py-5 rounded-lg font-bold text-xs uppercase tracking-[0.2em] overflow-hidden transition-all duration-300 ${pkg.popular
                    ? "bg-[#FE9900] text-black"
                    : "bg-white text-black hover:bg-[#FE9900]"
                    }`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Configure System <ArrowUpRight size={16} />
                  </span>
                </motion.button>

                {/* Hover Glow Effect */}
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.div
                      layoutId="glow"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className={`absolute inset-0 bg-linear-to-tr from-[${pkg.color}]/10 via-transparent to-transparent pointer-events-none`}
                      style={{ background: `linear-gradient(to top right, ${pkg.color}1a, transparent, transparent)` }}
                    />
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-6 md:mt-16 flex flex-col items-center gap-4 border-t border-white/50 pt-6 md:pt-12"
        >
          <div className="flex gap-8 items-center  grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xs font-bold tracking-widest text-white">CEC ACCREDITED</span>
            <span className="text-xs font-bold tracking-widest text-white">ISO 9001</span>
            <span className="text-xs font-bold tracking-widest text-white">NET ZERO 2050</span>
          </div>
          <p className="text-xs md:text-sm text-white uppercase tracking-[0.3em] md:text-center text-justify max-w-4xl leading-loose">
            Pricing estimates are based on standard metro installation criteria and current STC market values.
            Official quotations subject to technical roof assessment and orientation analysis.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumSolarPackages;