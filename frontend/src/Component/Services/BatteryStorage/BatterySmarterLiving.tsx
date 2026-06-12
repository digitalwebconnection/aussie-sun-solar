import { motion } from "framer-motion";
import { Battery, ShieldCheck } from "lucide-react";
import batterySmarter from '../../../assets/downloaded-images/battery-smarter.jpg';

const BatterySmarterLiving = () => {
  const items = [
    {
      icon: Battery,
      title: "Never Lose Power Again",
      desc: "Our battery systems provide seamless backup power during blackouts, keeping your home running 24/7.",
    },
    {
      icon: ShieldCheck,
      title: "Premium Tier-1 Batteries",
      desc: "We install only the highest-quality battery systems from globally trusted brands for lasting performance.",
    },
  ];

  return (
    <section id="batterystorage-smarter-living" aria-label="BatteryStorage Smart Living Features" className="relative overflow-hidden bg-white py-10 md:py-24">
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#FE9900]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#004093]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.15)]">
              <img
                src={batterySmarter}
                alt="Home battery backup energy storage system"
                className="w-full h-[260px] sm:h-[380px] md:h-[550px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} viewport={{ once: true }} className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-md p-3 sm:p-6 rounded-lg shadow-xl max-w-[180px] sm:max-w-xs">
                <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-semibold text-[#FE9900] leading-none">5K+</h3>
                <p className="text-[#004093] font-bold mt-1 sm:mt-2 text-xs sm:text-sm">Battery Systems Installed Across Australia</p>
              </motion.div>
            </div>
            <div className="hidden sm:block absolute -top-7 -right-7 w-full h-full border-4 border-dashed border-[#FE9900]/80 rounded-lg -z-10" />
          </motion.div>

          <div>
            <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-block px-10 py-1 border-[#FE9900]/80 rounded-lg bg-[#FE9900]/80 text-black font-bold uppercase tracking-[0.2em] text-sm">
              Smart Battery Living
            </motion.span>

            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="mt-4 text-3xl md:text-5xl font-serif font-bold leading-tight text-[#004093]">
              Store Energy, <br />
              Save More
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-4 text-gray-900 text-base md:text-lg leading-relaxed max-w-xl">
              Advanced home battery storage Australia solutions for lower electricity bills, reliable backup power, and smarter solar energy usage. 
              
            </motion.p>

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
                  <div className="w-16 h-16 rounded-2xl bg-[#004093] text-white flex items-center justify-center shrink-0 group-hover:bg-[#FE9900] transition-all duration-500">
                    <item.icon size={30} />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-serif font-semibold text-[#004093] mb-2 group-hover:text-[#FE9900] transition-colors duration-300">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{item.desc}</p>
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

export default BatterySmarterLiving;
