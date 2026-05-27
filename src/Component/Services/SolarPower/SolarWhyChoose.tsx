import { motion } from 'framer-motion';
import {
  Hammer,
  Zap,
  BadgeDollarSign,
  ShieldCheck,
  Sun,
  Users,
} from 'lucide-react';

const SolarWhyChoose = () => {
  const features = [
    {
      icon: Hammer,
      title: 'Electrician-Owned',
      desc: 'Experienced electrical professionals handling every installation with precision.',
      color: 'bg-orange-100 text-orange-500'
    },
    {
      icon: Zap,
      title: 'Fast Installation',
      desc: 'Quick installation process with smooth approvals and expert setup.',
      color: 'bg-blue-100 text-blue-500'
    },
    {
      icon: BadgeDollarSign,
      title: 'Affordable Pricing',
      desc: 'Premium solar systems at competitive pricing for better savings.',
      color: 'bg-emerald-100 text-emerald-500'
    },
    {
      icon: ShieldCheck,
      title: 'Trusted Support',
      desc: 'Reliable local support team available whenever you need assistance.',
      color: 'bg-purple-100 text-purple-500'
    },
    {
      icon: Sun,
      title: 'Tier-1 Products',
      desc: 'High-quality solar panels and components designed to last for years.',
      color: 'bg-yellow-100 text-yellow-500'
    },
    {
      icon: Users,
      title: '5-Star Service',
      desc: 'Thousands of happy customers trust our solar installation services.',
      color: 'bg-indigo-100 text-indigo-500'
    }
  ];

  return (
    <section className="py-14 bg-white relative overflow-hidden">

      {/* Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#FE9900]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-10">

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-[#FE9900] font-bold uppercase tracking-[3px] text-sm mb-4"
          >
            Why Choose Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-[#0B1220] leading-tight"
          >
            Trusted Solar
            <span className="block text-[#FE9900]">
              Installation Experts
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto mt-6 leading-relaxed"
          >
            Delivering premium solar systems with expert installation,
            quality products, and long-term customer support.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-[#e8ecf0] border border-gray-300 rounded-lg p-5 md:p-10 transition-all duration-500 hover:shadow-2xl group"
            >

              {/* Icon */}
              <div className={`w-20 h-20 rounded-3xl ${item.color} flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110`}>
                <item.icon size={38} strokeWidth={1.8} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-black text-[#0B1220] mb-4 group-hover:text-[#FE9900] transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 leading-relaxed text-lg">
                {item.desc}
              </p>

              {/* Bottom Line */}
              <div className="w-12 h-1 bg-[#FE9900] rounded-full mt-8 group-hover:w-24 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6   mt-10 md:mt-20">

          {[
            ['10K+', 'Panels Installed'],
            ['2500+', 'Happy Customers'],
            ['25 Years', 'Warranty'],
            ['5-Star', 'Customer Reviews']
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="bg-[#F8FAFC] border border-gray-100 rounded-lg p-4 md:p-8 text-center shadow-black/50 shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <div className="text-4xl font-black text-[#FE9900] mb-2">
                {item[0]}
              </div>

              <div className="text-gray-500 font-semibold">
                {item[1]}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolarWhyChoose;