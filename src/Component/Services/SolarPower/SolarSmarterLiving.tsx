import { motion } from "framer-motion";
import {
  Users,
  ShieldCheck,
} from "lucide-react";

import sigenergySmarter from '../../../assets/downloaded-images/sigenergy-smarter.webp';

const SolarSmarterLiving = () => {
  const items = [
    {
      icon: Users,
      title: "Trusted Across Australia",
      desc: "Thousands of Australian homeowners choose our premium solar panel systems for long-term energy savings, lower power costs, and dependable renewable energy solutions.",
    },
    {
      icon: ShieldCheck,
      title: "Premium Quality Systems",
      desc: "We provide advanced solar technology, high-efficiency solar panels, and durable battery storage solutions built for maximum performance and long-lasting reliability.",
    },
  ];

  return (
    <section id="solarpower-smarter-living" aria-label="SolarPower Smart Living Features" className="relative overflow-hidden bg-white py-10 md:py-24">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#FE9900]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#004093]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-lg overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.15)]">
              <img
                src={sigenergySmarter}
                alt="Residential sustainable home with solar energy system"
                className="w-full h-[260px] sm:h-[380px] md:h-[550px] object-cover hover:scale-105 transition-transform duration-700"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-md p-3 sm:p-6 rounded-lg shadow-xl max-w-[180px] sm:max-w-xs"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-semibold text-[#FE9900] leading-none">
                  10+
                </h3>
                <p className="text-[#004093] font-bold mt-1 sm:mt-2 text-xs sm:text-sm">
                  Years Delivering Reliable Solar Energy Solutions Across Australia
                </p>
              </motion.div>
            </div>

            {/* Decorative Border — hidden on mobile to avoid overflow */}
            <div className="hidden sm:block absolute -top-7 -right-7 w-full h-full border-4 border-dashed border-[#FE9900]/80 rounded-lg -z-10" />
          </motion.div>

          {/* Right Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-10 py-1 border-[#FE9900]/80 rounded-lg bg-[#FE9900]/80 text-black font-bold uppercase tracking-[0.2em] text-sm"
            >
              SMART SOLAR LIVING
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-3xl md:text-5xl font-serif font-bold leading-tight text-[#004093]"
            >
              Power Your Home <br />
              The Smarter Way
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-gray-900 text-base md:text-lg leading-relaxed max-w-xl"
            >
              Discover high-performance solar power systems designed to lower electricity bills, increase energy efficiency, and deliver sustainable energy solutions for Australian homes and families.
            </motion.p>

            {/* Feature Cards */}
            <div className="mt-8 grid gap-5">
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="group flex gap-5 p-6 rounded-lg shadow-xl shadow-black/40 bg-white border border-gray-300 hover:border-[#FE9900]/60 hover:shadow-2xl transition-all duration-500"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-[#004093] text-white flex items-center justify-center shrink-0 group-hover:bg-[#FE9900] group-hover:rotate-360 transition-all duration-500">
                    <item.icon size={30} />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-serif font-semibold text-[#004093] mb-2 group-hover:text-[#FE9900] transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarSmarterLiving;