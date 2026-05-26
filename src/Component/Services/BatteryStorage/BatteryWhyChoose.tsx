import { motion } from 'framer-motion';
import { Hammer, Zap, BadgeDollarSign, ShieldCheck, Battery, Users } from 'lucide-react';

const BatteryWhyChoose = () => {
  const features = [
    { icon: Hammer, title: 'Expert Installation', desc: 'Certified professionals handle every battery installation with precision.', color: 'bg-orange-100 text-orange-500' },
    { icon: Zap, title: 'Seamless Integration', desc: 'Batteries integrate perfectly with new or existing solar systems.', color: 'bg-blue-100 text-blue-500' },
    { icon: BadgeDollarSign, title: 'Competitive Pricing', desc: 'Premium battery systems at the best market prices for long-term savings.', color: 'bg-emerald-100 text-emerald-500' },
    { icon: ShieldCheck, title: '10-Year Warranty', desc: 'Every battery comes with a comprehensive manufacturer warranty.', color: 'bg-purple-100 text-purple-500' },
    { icon: Battery, title: 'Top Brand Products', desc: 'We supply Tesla, Sungrow, Alpha ESS and other trusted brands.', color: 'bg-yellow-100 text-yellow-500' },
    { icon: Users, title: '5-Star Reviews', desc: 'Thousands of satisfied customers trust our battery solutions.', color: 'bg-indigo-100 text-indigo-500' },
  ];

  return (
    <section className="py-14 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#FE9900]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-block text-[#FE9900] font-bold uppercase tracking-[3px] text-sm mb-4">Why Choose Us</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-5xl md:text-6xl font-black text-[#0B1220] leading-tight">
            Trusted Battery <span className="block text-[#FE9900]">Storage Experts</span>
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -8 }} className="bg-[#e8ecf0] border border-gray-300 rounded-lg p-10 transition-all duration-500 hover:shadow-2xl group">
              <div className={`w-20 h-20 rounded-3xl ${item.color} flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110`}>
                <item.icon size={38} strokeWidth={1.8} />
              </div>
              <h3 className="text-2xl font-black text-[#0B1220] mb-4 group-hover:text-[#FE9900] transition-colors">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed text-lg">{item.desc}</p>
              <div className="w-12 h-1 bg-[#FE9900] rounded-full mt-8 group-hover:w-24 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {[['5K+', 'Batteries Installed'], ['2500+', 'Happy Customers'], ['10 Years', 'Warranty'], ['5-Star', 'Reviews']].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1 }} className="bg-[#F8FAFC] border border-gray-100 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-500">
              <div className="text-4xl font-black text-[#FE9900] mb-2">{item[0]}</div>
              <div className="text-gray-500 font-semibold">{item[1]}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BatteryWhyChoose;
