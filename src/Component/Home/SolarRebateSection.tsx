import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  BatteryCharging,
  SunMedium,
  Zap,
} from "lucide-react";

const rebatePoints = [
  "Government rebates available for new battery systems",
  "Reduce electricity bills with smart solar storage",
  "Backup power during outages and peak hours",
  "Limited-time rebate support available now",
];

const SolarBatterySection = () => {
  return (
    <section className="relative md:py-24 py-10 bg-white overflow-hidden" aria-label="Solar battery rebates and savings">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FE9900]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#004093]/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-5 md:px-0 relative z-10">

        <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center">

          {/* LEFT SIDE */}
          <div>

            {/* Small Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#004093]/5 mb-4"
            >
              <SunMedium size={16} className="text-[#FE9900]" />

              <span className="text-[#004093] text-xs font-bold uppercase tracking-[0.2em]">

              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-6xl font-black leading-[1.1] text-[#004093]"
            >
               Save More with Smart Solar {" "}

              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#004093] to-[#FE9900]">
                 Battery Storage Systems
              </span>
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-slate-900 md:text-lg text-md leading-relaxed mt-8 max-w-xl"
            >
              Upgrade your home with smart solar battery solutions
              and take advantage of available government rebates
              before the next rebate reduction.
            </motion.p>

            {/* Points */}
            <div className="space-y-5 mt-6">
              {rebatePoints.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-[#FE9900]/10 flex items-center justify-center shrink-0">
                    <CheckCircle2
                      size={18}
                      className="text-[#FE9900]"
                    />
                  </div>

                  <p className="text-slate-900 leading-relaxed">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">

              <button className="group w-full sm:w-auto px-10 py-3 rounded-2xl bg-[#004093] text-white font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-3 hover:bg-[#FE9900] transition-all duration-300 shadow-xl">
                Get Free Quote

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-all"
                />
              </button>

              <button className="w-full sm:w-auto px-10 py-3 rounded-2xl border border-slate-200 text-[#004093] font-bold uppercase tracking-wider text-sm hover:border-[#004093] transition-all">
                Learn More
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >

            {/* Main Card */}
            <div className="relative bg-[#f8fafc]  md:p-10 p-5 border border-slate-300 shadow-black shadow-2xl overflow-hidden">

              {/* Glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#FE9900]/10 blur-[80px] rounded-full" />

              {/* Top Icon */}
              <div className="w-20 h-20 rounded-[24px] bg-linear-to-r from-[#004093] to-[#FE9900] flex items-center justify-center text-white shadow-2xl mb-8">
                <BatteryCharging size={38} />
              </div>

              {/* Card Heading */}
              <h3 className="md:text-4xl text-2xl font-black text-[#004093] leading-tight">
                Smart Energy <br />
                Backup Solution
              </h3>

              <p className="text-slate-900 md:text-lg text-md leading-relaxed mt-6">
                Store excess solar energy and use it anytime with
                advanced battery systems designed for modern homes.
              </p>

              {/* Small Cards */}
              <div className="grid grid-cols-2 gap-5 mt-5 md:mt-10">

                <div className="bg-white rounded-lg p-6 border border-slate-400">
                  <Zap className="text-[#FE9900] mb-4" size={28} />

                  <h4 className="text-3xl font-black text-[#004093]">
                    80%
                  </h4>

                  <p className="text-sm text-slate-500 mt-2">
                    Energy Savings
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 border border-slate-400">
                  <SunMedium
                    className="text-[#FE9900] mb-4"
                    size={28}
                  />

                  <h4 className="text-3xl font-black text-[#004093]">
                    24/7
                  </h4>

                  <p className="text-sm text-slate-500 mt-2">
                    Backup Power
                  </p>
                </div>
              </div>

              {/* Bottom Box */}
              <div className="mt-8 bg-linear-to-r from-[#004093] to-[#0f5bc7] rounded-lg  md:p-6 p-3 flex items-center justify-between">

                <div>
                  <p className="text-white/90 text-sm uppercase tracking-wider">
                    Free Consultation
                  </p>

                  <h4 className="text-2xl font-black text-white mt-1">
                    1300 504 912
                  </h4>
                </div>

                <button className="w-14 h-14 rounded-2xl bg-white text-[#004093] flex items-center justify-center hover:scale-110 transition-all duration-300">
                  <ArrowRight size={22} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolarBatterySection;