import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const SolarIntro = () => {
  return (
    <section id="solarpower-intro" aria-label="SolarPower Introduction" className="relative overflow-hidden bg-white py-14">

      {/* Background Glow Effects */}
      <div className="absolute left-[-10%] top-0 h-80 w-80 rounded-full bg-[#004093]/10 blur-[120px]" />
      <div className="absolute bottom-0 right-[-10%] h-80 w-80 rounded-full bg-[#FE9900]/10 blur-[120px]" />

      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(#004093 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-0 text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          {/* Top Small Heading */}
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="h-[2px] w-14 bg-[#FE9900]" />

            <span className="text-sm md:text-lg font-bold uppercase tracking-[0.3em] text-[#FE9900]">
              RENEWABLE ENERGY
            </span>

            <div className="h-[2px] w-14 bg-[#FE9900]" />
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight text-[#111827] ">
            Australia’s Trusted Partner in
            <span className="mt-2 block text-[#004093]">
              Solar Energy Solutions
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-7xl text-base md:text-lg leading-relaxed text-gray-900">
            Aussie Sun Solar provides high-quality solar panels, battery storage systems, and renewable energy solutions for Australian homes and businesses. We help reduce electricity costs with reliable, energy-efficient solar technology designed for long-term performance and sustainability.
          </p>

          {/* Stats */}
          <div className="mt-8 md:mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">

            {[
              {
                number: "10K+",
                label: "SOLAR INSTALLATIONS ACROSS AUSTRALIA",
              },
              {
                number: "25 Years",
                label: "PERFORMANCE WARRANTY ON SOLAR PRODUCTS",
              },
              {
                number: "100%",
                label: "AUSTRALIAN CUSTOMER SUPPORT",
              },
              {
                number: "24/7",
                label: "CUSTOMER ASSISTANCE & TECHNICAL SUPPORT",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="
                  rounded-lg
                  border
                  border-gray-300
                  bg-white
                  p-6
                  shadow-[0_10px_50px_rgba(0,0,0,0.55)]
                  transition-all
                  duration-300
                  hover:border-[#FE9900]/60
                  hover:shadow-[0_20px_60px_rgba(0,64,147,0.58)]
                "
              >
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-[#004093]">
                  {item.number}
                </h3>

                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
            }}
            viewport={{ once: true }}
            className="mt-14"
          >
            <button
              className="
                group
                inline-flex
                items-center
                gap-4
                rounded-full
                bg-[#FE9900]
                px-10
                py-2
                text-base md:text-lg
                font-black
                uppercase
                tracking-[0.15em]
                text-white
                shadow-[0_20px_50px_rgba(254,153,0,0.85)]
                transition-all
                duration-300
                hover:scale-105
                hover:bg-[#ffb033]
              "
            >
              EXPLORE SOLAR PACKAGES

              <ArrowRight
                size={22}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolarIntro;