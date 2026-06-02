import { motion } from "framer-motion";
import { Zap, ShieldCheck } from "lucide-react";
import evChargingStation from '../../../assets/downloaded-images/ev-charging-station.jpg';

const EVSmarterLiving = () => {
  const items = [
    { icon: Zap, title: "Charge at Home, Save More", desc: "Skip the public charging queue. Charge your EV overnight at a fraction of the public station cost." },
    { icon: ShieldCheck, title: "Solar-Powered Charging", desc: "Pair your EV charger with solar panels to charge your car completely free using clean energy." },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-24">
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#FE9900]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#004093]/10 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.15)]">
              <img src={evChargingStation} alt="EV Charger" className="w-full h-[550px] object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} viewport={{ once: true }} className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-6 rounded-lg shadow-xl max-w-xs">
                <h3 className="text-4xl font-black text-[#FE9900] leading-none">1K+</h3>
                <p className="text-[#004093] font-bold mt-2">EV Chargers Installed Across Australia</p>
              </motion.div>
            </div>
            <div className="absolute -top-7 -right-7 w-full h-full border-4 border-dashed border-[#FE9900]/80 rounded-lg -z-10" />
          </motion.div>

          <div>
            <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-block px-10 py-1 border-[#FE9900]/80 rounded-lg bg-[#FE9900]/80 text-black font-bold uppercase tracking-[0.2em] text-sm">Smart EV Charging</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="mt-4 text-3xl md:text-5xl font-black leading-tight text-[#004093]">
              Drive Clean, <br /> Charge Smart
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-4 text-gray-900 text-lg leading-relaxed max-w-xl">
              Fast and reliable EV charging at home or your business premises. Our Level 2 AC chargers are compatible with all major EV brands.
            </motion.p>
            <div className="mt-8 grid gap-5">
              {items.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="group flex gap-5 p-6 rounded-lg shadow-xl shadow-black/40 bg-white border border-gray-300 hover:border-[#FE9900]/60 hover:shadow-2xl transition-all duration-500">
                  <div className="w-16 h-16 rounded-2xl bg-[#004093] text-white flex items-center justify-center shrink-0 group-hover:bg-[#FE9900] transition-all duration-500">
                    <item.icon size={30} />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-[#004093] mb-2 group-hover:text-[#FE9900] transition-colors duration-300">{item.title}</h4>
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

export default EVSmarterLiving;
