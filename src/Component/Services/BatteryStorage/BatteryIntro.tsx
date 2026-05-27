import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const BatteryIntro = () => {
  return (
    <section className="relative overflow-hidden bg-white py-14">
      <div className="absolute left-[-10%] top-0 h-80 w-80 rounded-full bg-[#004093]/10 blur-[120px]" />
      <div className="absolute bottom-0 right-[-10%] h-80 w-80 rounded-full bg-[#FE9900]/10 blur-[120px]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(#004093 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-0 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="h-[2px] w-14 bg-[#FE9900]" />
            <span className="text-lg font-bold uppercase tracking-[0.3em] text-[#FE9900]">Energy Storage</span>
            <div className="h-[2px] w-14 bg-[#FE9900]" />
          </div>

          <h2 className="text-4xl font-black font-serif leading-tight text-[#111827] md:text-6xl">
            Australia's Leading Battery
            <span className="mt-2 block text-[#004093]">Storage Specialists</span>
          </h2>

          <p className="mx-auto mt-8 max-w-7xl text-lg leading-relaxed text-gray-900 md:text-xl">
            Aussie Sun Solar provides cutting-edge battery storage systems that let you harness
            every drop of solar energy. Store excess power during the day and use it at night,
            during peak periods, or when the grid goes down — giving you total energy control.
          </p>

          <div className="mt-8 md:mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { number: "5K+", label: "Batteries Installed" },
              { number: "10 Years", label: "Battery Warranty" },
              { number: "100%", label: "Local Support" },
              { number: "24/7", label: "Monitoring" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="rounded-lg border border-gray-300 bg-white p-6 shadow-[0_10px_50px_rgba(0,0,0,0.55)] transition-all duration-300 hover:border-[#FE9900]/60 hover:shadow-[0_20px_60px_rgba(0,64,147,0.58)]"
              >
                <h3 className="text-3xl font-black text-[#004093]">{item.number}</h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.15em] text-gray-500">{item.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} viewport={{ once: true }} className="mt-14">
            <button className="group inline-flex items-center gap-4 rounded-full bg-[#FE9900] px-10 py-2 text-lg font-black uppercase tracking-[0.15em] text-white shadow-[0_20px_50px_rgba(254,153,0,0.85)] transition-all duration-300 hover:scale-105 hover:bg-[#ffb033]">
              Explore Battery Systems
              <ArrowRight size={22} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BatteryIntro;
