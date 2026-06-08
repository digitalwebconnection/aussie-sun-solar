import {
  CheckCircle2,
  Award,
  ShieldCheck,
  Zap,
  ArrowRight,
} from "lucide-react";
import BlurText from "../BlurText";
import Stack from "../Stack";
import { Link } from "react-router-dom";

import solarInstalling from '../../assets/downloaded-images/installing-solar.jpg';
import adaniPanel from '../../assets/downloaded-images/adani-solar-panel.jpg';
import solarRoofStreet from '../../assets/HeroImages/solar-roof-street.jpg';
import aerialSolarHouse from '../../assets/downloaded-images/aerial-solar-house.jpg';

const AboutSection = () => {
  return (
    <section className="relative py-12 md:py-24 bg-white overflow-hidden" aria-label="About Aussie Sun Solar">
      {/* SUBTLE BACKGROUND TEXTURE */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">

        {/* =====================================
            LEFT SIDE: PREMIUM IMAGE STACK
        ===================================== */}
        <div className="relative">
          {/* BACKGROUND DECORATION */}
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#FE9900]/5 rounded-full "></div>

          <div className="relative">
            {/* MAIN IMAGE STACK */}
            <div className="relative w-full h-[300px] lg:h-[500px] z-10">
              <Stack
                randomRotation={true}
                sendToBackOnClick={true}
                autoplay={true}
                autoplayDelay={4000}
                cards={[
                  solarInstalling,
                  adaniPanel,
                  solarRoofStreet,
                  aerialSolarHouse
                ].map((src, i) => (
                  <div key={i} className="w-full h-full relative overflow-hidden">
                    <img
                      src={src}
                      alt={`Solar Panel Installation ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#004093]/30 to-transparent pointer-events-none"></div>
                  </div>
                ))}
              />
            </div>

            {/* FLOATING STATS CARD */}
            <div className="absolute z-11 -bottom-8 -right-8 bg-white p-4 rounded-xl shadow-xl border border-gray-200 flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-[#FE9900]/50 flex items-center justify-center">
                <Zap size={32} className="text-[#004093]" />
              </div>
              <div>
                <h4 className="text-3xl font-bold text-[#004093]">10k+</h4>
                <p className="text-gray-900 font-medium">Panels Installed</p>
              </div>
            </div>

            {/* TRUST BADGE */}
            <div className="absolute top-2 left-2 bg-[#004093] z-11 text-white py-4 px-6 rounded-xl shadow-xl flex items-center gap-3">
              <ShieldCheck className="text-[#FE9900]" />
              <span className="font-bold tracking-tight">SAA Accredited</span>
            </div>
          </div>
        </div>

        {/* =====================================
            RIGHT SIDE: PROFESSIONAL CONTENT
        ===================================== */}
        <div className="lg:pl-5">

          {/* MAIN HEADING */}
          <h2 className="text-3xl lg:text-5xl font-serif font-bold text-[#111827] leading-tight tracking-tight flex flex-col items-start">
            <BlurText
              text="Aussie Sun Solar:"
              delay={50}
              animateBy="words"
              direction="bottom"
            />
            <BlurText
              text="Smarter Renewable"
              delay={50}
              animateBy="words"
              direction="bottom"
              className="text-[#004093]"
            />
            <div className="flex flex-wrap gap-x-2">
              <span className="relative inline-block text-[#FE9900]">
                Energy Solutions
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M0 6C50 2 150 2 200 6" stroke="#FE9900" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
              <span className="text-[#111827]">for Australia</span>
            </div>
          </h2>

          {/* DESCRIPTION */}
          <div className="mt-5 md:mt-10 space-y-4">
            <BlurText
              text="Aussie Sun Solar delivers advanced renewable energy solutions designed to help homes and businesses reduce electricity costs while embracing a cleaner, more sustainable future. From premium solar panels and battery storage to energy-efficient systems, we provide customized solar solutions built for maximum performance and long-term savings."
              delay={20}
              animateBy="words"
              direction="top"
              className="text-gray-900 text-base md:text-lg leading-relaxed block"
            />
            <BlurText
              text="With SAA-certified installers, Tier-1 solar technology, zero upfront cost options, and trusted local support, we make switching to smart solar energy simple, reliable, and affordable across Australia."
              delay={20}
              animateBy="words"
              direction="top"
              className="text-gray-900 text-base md:text-lg leading-relaxed mt-4 block"
            />
          </div>

          {/* CORE FEATURES GRID */}
          <div className="grid sm:grid-cols-2 gap-6 mt-5 md:mt-12 ">
            {[
              { title: "SAA Certified Installers", icon: Award },
              { title: "Tier-1 Premium Tech", icon: Zap },
              { title: "Zero Upfront Cost", icon: CheckCircle2 },
              { title: "Local Ongoing Support", icon: ShieldCheck },
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 group ">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex  border border-gray-300  items-center justify-center group-hover:bg-[#004093] transition-colors duration-300">
                  <feature.icon size={20} className="text-[#FE9900]" />
                </div>
                <span className="font-bold text-gray-800">{feature.title}</span>
              </div>
            ))}
          </div>


          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-12">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 bg-[#004093] hover:bg-[#003070] text-white px-8 py-3 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105 shadow-lg shadow-[#004093]/25"
            >
              Get Free Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/projects"
              className="group inline-flex items-center justify-center gap-3 border-2 border-[#004093] text-[#004093] hover:bg-[#004093] hover:text-white px-8 py-3 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105"
            >
              View Our Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;