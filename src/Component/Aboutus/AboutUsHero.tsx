import { motion } from "framer-motion";

import alpexSolarHero from '../../assets/downloaded-images/alpex-solar-hero.jpg';

export default function SolarAboutHero() {
  return (
    <section className="relative min-h-[70vh] lg:min-h-[85vh] overflow-hidden bg-black flex items-center" aria-label="About Aussie Sun Solar">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={alpexSolarHero}
          alt="Solar Energy"
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/70 to-transparent"></div>
        <div className="absolute inset-0 bg-linear-to-t from-[#004093]/40 via-transparent to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-0 py-30">
        
        <div className="max-w-5xl">
          
          {/* Tag */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-[#FE9900]/30 bg-[#FE9900]/10 backdrop-blur-xl mb-8"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#FE9900] animate-pulse"></div>
            <p className="text-[#FE9900] uppercase tracking-[0.3em] text-xs font-black">
              ☀️ POWERING QUEENSLAND WITH CLEAN ENERGY
            </p>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-white text-3xl md:text-5xl xl:text-6xl font-black leading-[1.1] tracking-tighter"
          >
            Trusted Solar Company Queensland <br />
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-[#FE9900] via-orange-400 to-[#FE9900] animate-gradient-x">
              For Smarter Energy Solutions
            </span>
          </motion.h1>

          {/* Description */}
          <div className="space-y-4">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-8 text-white text-lg md:text-xl leading-relaxed max-w-3xl font-black"
            >
              Powering homes and businesses across Queensland with reliable, high-performance solar systems designed for long-term savings and sustainable living.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.15 }}
              className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl font-medium"
            >
              As a leading solar company in Queensland, we provide customised solar energy solutions for residential, commercial, and industrial properties. From premium solar panel installation to energy-efficient systems, our team helps you reduce electricity costs while moving toward a cleaner future.
            </motion.p>
          </div>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-wrap gap-6 mt-12"
          >
            <button className="group relative overflow-hidden w-full sm:w-auto px-10 py-4 rounded-2xl bg-[#FE9900] text-black font-black text-xl transition-all duration-300 hover:scale-105 shadow-[0_20px_40px_-10px_rgba(254,153,0,0.4)]">
              <span className="relative z-10">Get Free Quote</span>
              <div className="absolute inset-0 bg-white/30 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
            </button>

            <button className="w-full sm:w-auto px-10 py-4 rounded-2xl border-2 border-white/20 bg-white/5 backdrop-blur-xl text-white font-bold text-xl hover:bg-white/10 hover:border-[#FE9900] transition-all duration-300">
              Contact Our Team
            </button>
          </motion.div>

        </div>
      </div>

    </section>
  );
}