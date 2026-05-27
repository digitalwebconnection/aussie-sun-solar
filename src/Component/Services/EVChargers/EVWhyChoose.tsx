import { motion } from 'framer-motion';
import { Hammer, Zap, BadgeDollarSign, ShieldCheck, Car, Users } from 'lucide-react';

const EVWhyChoose = () => {
  const features = [
    { icon: Hammer, title: 'Expert Installation', desc: 'Licensed electricians install your EV charger safely to Australian electrical standards.', color: 'bg-orange-100 text-orange-500' },
    { icon: Zap, title: 'Fast Charging Speed', desc: 'Our Level 2 chargers deliver 7kW–22kW for fast, efficient home charging.', color: 'bg-blue-100 text-blue-500' },
    { icon: BadgeDollarSign, title: 'Affordable Pricing', desc: 'Competitive pricing on premium EV charger hardware and installation services.', color: 'bg-emerald-100 text-emerald-500' },
    { icon: ShieldCheck, title: 'Manufacturer Warranty', desc: 'All EV chargers come with full manufacturer warranty and ongoing support.', color: 'bg-purple-100 text-purple-500' },
    { icon: Car, title: 'All EV Compatible', desc: 'Compatible with Tesla, Hyundai, Kia, BYD, Nissan, and all major EV brands.', color: 'bg-yellow-100 text-yellow-500' },
    { icon: Users, title: '5-Star Service', desc: 'Hundreds of satisfied EV charger installations across Australian homes and businesses.', color: 'bg-indigo-100 text-indigo-500' },
  ];

  return (
    <section className="py-14 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#FE9900]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-block text-[#FE9900] font-bold uppercase tracking-[3px] text-sm mb-4">Why Choose Us</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-black text-[#0B1220] leading-tight">
            Trusted EV Charger <span className="block text-[#FE9900]">Installation Experts</span>
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -8 }} className="bg-[#e8ecf0] border border-gray-300 rounded-lg md:p-10 p-5 transition-all duration-500 hover:shadow-2xl group">
              <div className={`w-20 h-20 rounded-3xl ${item.color} flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110`}>
                <item.icon size={38} strokeWidth={1.8} />
              </div>
              <h3 className="text-2xl font-black text-[#0B1220] mb-4 group-hover:text-[#FE9900] transition-colors">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed text-lg">{item.desc}</p>
              <div className="w-12 h-1 bg-[#FE9900] rounded-full mt-8 group-hover:w-24 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 md:mt-20">
          {[['1K+', 'Chargers Installed'], ['500+', 'Happy EV Owners'], ['7kW–22kW', 'Charger Power'], ['5-Star', 'Reviews']].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1 }} className="bg-[#F8FAFC] border border-gray-300 rounded-lg  p-8 text-center shadow-lg shadow-black/50 hover:shadow-xl transition-all duration-500">
              <div className="text-4xl font-black text-[#FE9900] mb-2">{item[0]}</div>
              <div className="text-gray-500 font-semibold">{item[1]}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EVWhyChoose;
