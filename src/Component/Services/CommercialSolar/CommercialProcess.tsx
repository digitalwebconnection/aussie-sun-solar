import { useEffect, useState } from 'react';
import { easeOut, motion, AnimatePresence } from 'framer-motion';
import { Sun, Zap, Building2, BarChart3, ArrowRight, ShieldCheck } from 'lucide-react';

const CommercialProcess = () => {
  const steps = [
    { id: '01', title: 'Business Energy Audit', desc: 'We analyse your current electricity usage and identify the ideal solar system size for your business.', icon: BarChart3, color: 'from-amber-400 to-orange-500', glow: 'shadow-orange-500/20' },
    { id: '02', title: 'Custom System Design', desc: 'Our engineers design a commercial-grade solar system perfectly tailored to your roof and energy needs.', icon: Building2, color: 'from-blue-400 to-indigo-600', glow: 'shadow-blue-500/20' },
    { id: '03', title: 'Professional Installation', desc: 'Our accredited installers complete your commercial solar project on time and to the highest standards.', icon: Zap, color: 'from-emerald-400 to-teal-600', glow: 'shadow-emerald-500/20' },
    { id: '04', title: 'Ongoing Monitoring', desc: 'We provide smart monitoring to track your solar performance and energy savings 24/7.', icon: Sun, color: 'from-purple-400 to-pink-600', glow: 'shadow-purple-500/20' },
  ];

  const rightContent = [
    { title: 'Massive Energy Savings', subtitle: 'Reduce Overheads', value: '80%', desc: 'Commercial solar can eliminate up to 80% of your business electricity costs.', color: 'from-orange-400 to-yellow-500' },
    { title: 'Fast ROI', subtitle: 'Return On Investment', value: '3–5Y', desc: 'Most commercial solar systems pay for themselves within 3 to 5 years.', color: 'from-emerald-400 to-teal-500' },
    { title: 'LRET Incentives', subtitle: 'Government Rebates', value: '$$$', desc: 'Access large-scale certificate schemes and government incentives for significant savings.', color: 'from-blue-400 to-indigo-500' },
    { title: 'Carbon Neutral Goals', subtitle: 'Sustainability', value: '0 CO₂', desc: 'Meet your ESG commitments and demonstrate your commitment to a cleaner future.', color: 'from-purple-400 to-pink-500' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setActiveIndex((prev) => (prev + 1) % rightContent.length), 4000);
    return () => clearInterval(interval);
  }, [rightContent.length]);

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const itemVariants = { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut } } };

  return (
    <section id="commercialsolar-process" aria-label="CommercialSolar Process Breakdown" className="py-14 bg-[#010816] relative overflow-hidden font-sans">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] -ml-64 -mb-64" />
      <div className="max-w-7xl mx-auto  px-6 relative z-10">
        <motion.div variants={itemVariants} className="mb-12 text-center">
          <span className="flex items-center gap-2 text-[#FE9900] font-bold justify-center uppercase tracking-[3px] text-sm mb-5">
            <ShieldCheck size={18} /> Commercial Solar Technology
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-6">
            Commercial Solar <span className="block text-transparent bg-clip-text bg-linear-to-r from-[#FE9900] to-orange-400">Made Simple</span>
          </h2>
          <p className="text-slate-100 text-base md:text-lg mx-auto text-center leading-relaxed max-w-6xl">
            From energy audit to commissioning, our end-to-end commercial solar service ensures your business maximises its solar investment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div key={index} variants={itemVariants} className="group relative p-6 rounded-lg border border-white hover:border-white/10 bg-white/2 hover:bg-white/4 transition-all duration-500">
                  <div className="flex gap-5 items-start">
                    <div className="relative">
                      <span className="absolute -top-4 -left-2 text-4xl font-black text-white/5 group-hover:text-[#FE9900]/10 transition-all">{step.id}</span>
                      <div className={`relative z-10 w-14 h-14 rounded-2xl bg-linear-to-br ${step.color} flex items-center justify-center text-white shadow-xl ${step.glow} group-hover:scale-110 transition-transform duration-500`}>
                        <step.icon size={28} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-serif font-semibold text-white flex items-center gap-2 mb-2">
                        {step.title}
                        <ArrowRight size={16} className="text-[#FE9900] opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </h3>
                      <p className="text-slate-400 text-sm md:text-base">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="relative flex items-center justify-center min-h-[550px]">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: 'linear' }} className="absolute w-[400px] h-[380px] border border-white/50 rounded-full" />
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 18, repeat: Infinity, ease: 'linear' }} className="absolute w-[440px] h-[380px] border border-[#FE9900]/60 rounded-full" />
            <AnimatePresence mode="wait">
              <motion.div key={activeIndex} initial={{ opacity: 0, y: 40, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -40, scale: 0.9 }} transition={{ duration: 0.7 }} className="relative w-full max-w-md">
                <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/4 backdrop-blur-xl p-10 shadow-2xl">
                  <div className={`absolute inset-0 bg-linear-to-br ${rightContent[activeIndex].color} opacity-10`} />
                  <div className="relative z-10 inline-flex items-center gap-2 px-10 py-2 rounded-full border border-[#FE9900]/90 bg-white/5 text-xs uppercase tracking-[2px] text-[#FE9900] mb-8">Commercial Solar</div>
                  <div className="relative z-10 text-6xl md:text-7xl font-black text-white mb-5">{rightContent[activeIndex].value}</div>
                  <h3 className="relative z-10 text-xl md:text-2xl font-serif font-semibold text-white mb-3">{rightContent[activeIndex].title}</h3>
                  <p className="relative z-10 text-[#FE9900] uppercase tracking-[3px] text-sm mb-6">{rightContent[activeIndex].subtitle}</p>
                  <p className="relative z-10 text-slate-400 text-sm md:text-base leading-relaxed">{rightContent[activeIndex].desc}</p>
                  <div className="relative z-10 mt-10">
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <motion.div key={activeIndex} initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 4, ease: 'linear' }} className="h-full bg-linear-to-r from-[#FE9900] to-orange-400 rounded-full" />
                    </div>
                  </div>
                  <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-[#FE9900]/20 blur-3xl rounded-full" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialProcess;
