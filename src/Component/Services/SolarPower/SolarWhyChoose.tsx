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
      title: 'Licensed Electrician-Owned Team',
      desc: 'Qualified solar and electrical professionals delivering safe, efficient, and compliant solar installations with precision.',
      color: 'bg-orange-100 text-orange-500'
    },
    {
      icon: Zap,
      title: 'Fast & Hassle-Free Installation',
      desc: 'Quick solar panel installation process with smooth approvals, expert setup, and minimal disruption to your property.',
      color: 'bg-blue-100 text-blue-500'
    },
    {
      icon: BadgeDollarSign,
      title: 'Affordable Solar Solutions',
      desc: 'Premium solar power systems at competitive pricing designed to maximise long-term energy savings.',
      color: 'bg-emerald-100 text-emerald-500'
    },
    {
      icon: ShieldCheck,
      title: 'Reliable Customer Support',
      desc: 'Dedicated local support team available for ongoing assistance, maintenance, and solar system guidance.',
      color: 'bg-purple-100 text-purple-500'
    },
    {
      icon: Sun,
      title: 'Tier-1 Solar Products',
      desc: 'High-quality solar panels, inverters, and battery systems engineered for durability and maximum efficiency.',
      color: 'bg-yellow-100 text-yellow-500'
    },
    {
      icon: Users,
      title: '5-Star Installation Service',
      desc: 'Trusted by homeowners and businesses for delivering professional solar installation services and excellent customer satisfaction.',
      color: 'bg-indigo-100 text-indigo-500'
    }
  ];

  return (
    <section id="solarpower-why-choose" aria-label="Why Choose SolarPower" className="py-14 bg-white relative overflow-hidden">

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
            WHY CHOOSE OUR SOLAR COMPANY
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-bold text-[#0B1220] leading-tight"
          >
            Trusted Solar Installation
            <span className="block text-[#FE9900]">
              Experts in Australia
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-base md:text-lg max-w-6xl mx-auto mt-6 leading-relaxed"
          >
            Delivering high-performance solar energy systems with expert installation, premium solar products, and reliable long-term customer support for homes and businesses across Australia.
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
              <h3 className="text-xl md:text-2xl font-serif font-semibold text-[#0B1220] mb-4 group-hover:text-[#FE9900] transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 leading-relaxed text-sm md:text-base">
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
            ['10K+', 'Solar Panels Successfully Installed'],
            ['2500+', 'Satisfied Residential & Commercial Customers'],
            ['25 Years', 'Performance Warranty on Premium Solar Products'],
            ['5-Star', 'Rated Solar Installation & Customer Service']
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