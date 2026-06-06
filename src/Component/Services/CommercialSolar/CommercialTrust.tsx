import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Hammer, ArrowUpRight, Sparkles } from 'lucide-react';

const CommercialTrust = () => {
  const deliveries = [
    { title: 'SAA Accredited Professionals', desc: 'Every commercial solar project is handled by Clean Energy Council accredited designers and installers.', icon: Hammer, gradient: 'from-orange-400 to-orange-500' },
    { title: 'Premium Commercial Panels', desc: 'We use Tier-1 commercial solar panels designed for maximum output, durability and 25-year performance.', icon: ShieldCheck, gradient: 'from-blue-500 to-cyan-400' },
    { title: 'Grid Connection Management', desc: 'We handle all network applications, approvals, and grid connection for a completely hassle-free experience.', icon: Zap, gradient: 'from-purple-500 to-pink-500' },
  ];

  return (
    <section id="commercialsolar-trust" aria-label="CommercialSolar Trust Factors" className="relative py-12 overflow-hidden bg-white">
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[#FE9900]/10 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-[140px] translate-x-1/3 translate-y-1/3" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-10 py-2 rounded-full bg-[#FE9900]/10 text-black border border-[#FE9900]/80 font-bold uppercase tracking-[3px] text-xs mb-6">
            <Sparkles size={15} /> Trusted Commercial Solar
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl md:text-5xl font-serif font-bold text-[#0B1220] leading-tight">
            What Makes Us <span className="block text-transparent bg-clip-text bg-linear-to-r from-[#FE9900] to-orange-500">Different</span>
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {deliveries.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.15 }} whileHover={{ y: -14 }} className="group relative overflow-hidden rounded-lg border border-gray-300 bg-white p-5 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.24)] transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
              <div className={`absolute inset-0 bg-linear-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`} />
              <div className="relative z-10 flex items-center justify-between mb-10">
                <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className={`w-20 h-20 rounded-lg bg-linear-to-br ${item.gradient} flex items-center justify-center shadow-2xl`}>
                  <item.icon size={38} className="text-white" />
                </motion.div>
                <motion.div whileHover={{ rotate: 45 }} className="w-12 h-12 rounded-2xl border border-gray-200 flex items-center justify-center text-[#FE9900]">
                  <ArrowUpRight size={22} />
                </motion.div>
              </div>
              <h3 className="relative z-10 text-xl md:text-2xl font-serif font-semibold text-[#0B1220] mb-6 leading-tight">{item.title}</h3>
              <p className="relative z-10 text-gray-900 text-sm md:text-base leading-relaxed">{item.desc}</p>
              <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 + i * 0.1 }} className={`h-1 rounded-full bg-linear-to-r ${item.gradient} mt-10`} />
              <div className={`absolute -bottom-16 -right-16 w-44 h-44 bg-linear-to-br ${item.gradient} opacity-10 blur-3xl rounded-full`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommercialTrust;
